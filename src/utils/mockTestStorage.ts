import type {
  AttemptState,
  CandidateResponse,
  Question,
  TestManifest,
  TestResultSummary,
  SectionSummary,
  TopicWeaknessItem,
  AttemptHistoryItem,
  SectionId,
} from '../types/mockTest';

const ATTEMPT_PREFIX = 'signresize_mock_attempt_';
const HISTORY_KEY = 'signresize_mock_history';

export function getAttemptStorageKey(testId: string): string {
  return `${ATTEMPT_PREFIX}${testId}`;
}

export function loadAttempt(testId: string): AttemptState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(getAttemptStorageKey(testId));
    if (!raw) return null;
    return JSON.parse(raw) as AttemptState;
  } catch (err) {
    console.error('Failed to load mock test attempt from localStorage', err);
    return null;
  }
}

export function saveAttempt(attempt: AttemptState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(
      getAttemptStorageKey(attempt.testId),
      JSON.stringify(attempt)
    );
  } catch (err) {
    console.error('Failed to save mock test attempt to localStorage', err);
  }
}

export function clearAttempt(testId: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(getAttemptStorageKey(testId));
  } catch (err) {
    console.error('Failed to clear mock test attempt', err);
  }
}

export function getAttemptHistory(): AttemptHistoryItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as AttemptHistoryItem[];
  } catch {
    return [];
  }
}

export function saveToHistory(item: AttemptHistoryItem): void {
  if (typeof window === 'undefined') return;
  try {
    const history = getAttemptHistory();
    history.unshift(item);
    // keep latest 20 attempts
    window.localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 20)));
  } catch (err) {
    console.error('Failed to save attempt to history', err);
  }
}

/**
 * Evaluates candidate responses according to verified CEN 06/2025 rules:
 * - 1 mark per correct answer
 * - Exactly 1/3 mark (0.3333...) deducted per wrong answer
 * - 'ANSWERED_AND_MARKED_FOR_REVIEW' is evaluated as answered (official TCS iON rule)
 * - 'MARKED_FOR_REVIEW' without chosen option is not evaluated
 */
export function calculateTestResult(
  manifest: TestManifest,
  responses: Record<string, CandidateResponse>,
  totalTimeSpentSec: number,
  userCategory: 'UR' | 'OBC' | 'SC' | 'ST' | 'EWS' = 'UR'
): TestResultSummary {
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  let markedForReviewCount = 0;

  // Initialize section summaries
  const sectionMap: Record<SectionId, SectionSummary> = {} as any;
  for (const s of manifest.sections) {
    sectionMap[s.id] = {
      sectionId: s.id,
      name: s.name,
      totalQuestions: 0,
      attempted: 0,
      correct: 0,
      incorrect: 0,
      unattempted: 0,
      marksScored: 0,
      maxMarks: 0,
      timeSpentSec: 0,
    };
  }

  // Topic tracking
  const topicMap: Record<
    string,
    {
      topic: string;
      topicName: { en: string; hi: string };
      sectionId: SectionId;
      total: number;
      attempted: number;
      correct: number;
      incorrect: number;
      totalTimeSec: number;
    }
  > = {};

  const negativePenalty = manifest.negativeMark; // 0.3333333333333333

  manifest.questions.forEach((q) => {
    const resp = responses[q.id];
    const sec = sectionMap[q.section];
    if (sec) {
      sec.totalQuestions += 1;
      sec.maxMarks += manifest.marksPerCorrect;
    }

    if (!topicMap[q.topic]) {
      topicMap[q.topic] = {
        topic: q.topic,
        topicName: q.topicName,
        sectionId: q.section,
        total: 0,
        attempted: 0,
        correct: 0,
        incorrect: 0,
        totalTimeSec: 0,
      };
    }
    const topic = topicMap[q.topic];
    topic.total += 1;

    const timeSpent = resp?.timeSpentSec || 0;
    if (sec) sec.timeSpentSec += timeSpent;
    topic.totalTimeSec += timeSpent;

    const isMarked =
      resp?.state === 'MARKED_FOR_REVIEW' ||
      resp?.state === 'ANSWERED_AND_MARKED_FOR_REVIEW';
    if (isMarked) markedForReviewCount += 1;

    const isAnswered =
      resp &&
      (resp.state === 'ANSWERED' ||
        resp.state === 'ANSWERED_AND_MARKED_FOR_REVIEW') &&
      resp.chosenOption !== null &&
      resp.chosenOption !== undefined;

    if (!isAnswered) {
      unattemptedCount += 1;
      if (sec) sec.unattempted += 1;
    } else {
      if (sec) sec.attempted += 1;
      topic.attempted += 1;

      if (resp.chosenOption === q.answer) {
        correctCount += 1;
        if (sec) {
          sec.correct += 1;
          sec.marksScored += manifest.marksPerCorrect;
        }
        topic.correct += 1;
      } else {
        incorrectCount += 1;
        if (sec) {
          sec.incorrect += 1;
          sec.marksScored -= negativePenalty;
        }
        topic.incorrect += 1;
      }
    }
  });

  const positiveMarks = correctCount * manifest.marksPerCorrect;
  const negativeMarks = Number((incorrectCount * negativePenalty).toFixed(2));
  const rawNetScore = positiveMarks - incorrectCount * negativePenalty;
  const netScore = Math.max(0, Number(rawNetScore.toFixed(2)));
  const totalQuestions = manifest.questions.length;
  const attempted = correctCount + incorrectCount;
  const accuracyPct =
    attempted > 0 ? Number(((correctCount / attempted) * 100).toFixed(1)) : 0;
  const percentage =
    totalQuestions > 0
      ? Number(((netScore / (totalQuestions * manifest.marksPerCorrect)) * 100).toFixed(1))
      : 0;

  const durationMin = totalTimeSpentSec / 60;
  const speedQPerMin =
    durationMin > 0 ? Number((attempted / durationMin).toFixed(2)) : 0;

  // Compile topic weakness items (sorted so lowest accuracy / weakest comes first)
  const topicWeakness: TopicWeaknessItem[] = Object.values(topicMap).map((t) => {
    const acc =
      t.attempted > 0 ? Number(((t.correct / t.attempted) * 100).toFixed(1)) : 0;
    const avgTime =
      t.total > 0 ? Math.round(t.totalTimeSec / t.total) : 0;
    let status: 'weak' | 'moderate' | 'strong' = 'moderate';
    if (t.attempted === 0 || acc < 50) {
      status = 'weak';
    } else if (acc >= 75) {
      status = 'strong';
    }

    return {
      topic: t.topic,
      topicName: t.topicName,
      sectionId: t.sectionId,
      totalQuestions: t.total,
      attempted: t.attempted,
      correct: t.correct,
      incorrect: t.incorrect,
      accuracyPct: acc,
      avgTimeSec: avgTime,
      status,
    };
  });

  topicWeakness.sort((a, b) => {
    if (a.status === 'weak' && b.status !== 'weak') return -1;
    if (b.status === 'weak' && a.status !== 'weak') return 1;
    return a.accuracyPct - b.accuracyPct;
  });

  // Category cutoff comparison
  // Historical NTPC CBT-1 normalised cutoffs: UR: 74, OBC: 68, EWS: 62, SC: 58, ST: 52
  const defaultCutoffs = {
    UR: 72,
    OBC: 67,
    EWS: 63,
    SC: 57,
    ST: 51,
  };
  const activeCutoffs = manifest.categoryCutoffs || defaultCutoffs;
  const targetCutoff = activeCutoffs[userCategory] || 70;
  const diff = Number((netScore - targetCutoff).toFixed(2));

  return {
    testId: manifest.id,
    testTitle: manifest.title,
    submittedAt: Date.now(),
    durationSec: manifest.durationMin * 60,
    timeSpentSec: totalTimeSpentSec,
    totalQuestions,
    attempted,
    correct: correctCount,
    incorrect: incorrectCount,
    unattempted: unattemptedCount,
    markedForReview: markedForReviewCount,
    positiveMarks,
    negativeMarks,
    netScore,
    maxMarks: totalQuestions * manifest.marksPerCorrect,
    percentage,
    accuracyPct,
    speedQPerMin,
    sections: Object.values(sectionMap),
    topicWeakness,
    userCategory,
    cutoffComparison: {
      category: userCategory,
      targetCutoff,
      diff,
      qualified: diff >= 0,
    },
  };
}
