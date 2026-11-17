export type SectionId =
  | 'ga'
  | 'maths'
  | 'reasoning'
  | 'quant'
  | 'english'
  | 'gk'
  | 'science'
  | 'language'
  | string;

export type QuestionState =
  | 'NOT_VISITED'
  | 'NOT_ANSWERED'
  | 'ANSWERED'
  | 'MARKED_FOR_REVIEW'
  | 'ANSWERED_AND_MARKED_FOR_REVIEW';

export interface LocalizedString {
  en: string;
  hi: string;
}

export interface Question {
  id: string;
  section: SectionId;
  topic: string;
  topicName: LocalizedString;
  difficulty: 'easy' | 'moderate' | 'hard';
  pyqStyle?: string;
  text: LocalizedString;
  image?: string | null;
  options: {
    en: string[];
    hi: string[];
  };
  answer: number; // 0-indexed: 0=A, 1=B, 2=C, 3=D
  solution: LocalizedString;
}

export interface TestSection {
  id: SectionId;
  name: LocalizedString;
  questionCount: number;
}

export interface TestManifest {
  id: string;
  slug: string;
  exam: string;
  examTitle: LocalizedString;
  title: LocalizedString;
  subtitle: LocalizedString;
  type: 'full' | 'sectional';
  durationMin: number;
  marksPerCorrect: number;
  negativeMark: number; // e.g. 0.3333333333333333 for 1/3 mark
  sections: TestSection[];
  questions: Question[];
  categoryCutoffs?: {
    UR: number;
    OBC: number;
    SC: number;
    ST: number;
    EWS: number;
  };
  syllabusTopics?: LocalizedString[];
  sampleQuestionsPreview?: {
    q: LocalizedString;
    a: LocalizedString;
  }[];
}

export interface CandidateResponse {
  chosenOption: number | null; // 0, 1, 2, 3 or null if unattempted
  state: QuestionState;
  timeSpentSec: number;
}

export interface SectionSummary {
  sectionId: SectionId;
  name: LocalizedString;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  marksScored: number;
  maxMarks: number;
  timeSpentSec: number;
}

export interface TopicWeaknessItem {
  topic: string;
  topicName: LocalizedString;
  sectionId: SectionId;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  accuracyPct: number;
  avgTimeSec: number;
  status: 'weak' | 'moderate' | 'strong';
}

export interface TestResultSummary {
  testId: string;
  testTitle: LocalizedString;
  submittedAt: number;
  durationSec: number;
  timeSpentSec: number;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  markedForReview: number;
  positiveMarks: number;
  negativeMarks: number;
  netScore: number;
  maxMarks: number;
  percentage: number;
  accuracyPct: number;
  speedQPerMin: number;
  sections: SectionSummary[];
  topicWeakness: TopicWeaknessItem[];
  userCategory?: 'UR' | 'OBC' | 'SC' | 'ST' | 'EWS';
  cutoffComparison?: {
    category: string;
    targetCutoff: number;
    diff: number;
    qualified: boolean;
  };
}

export interface AttemptState {
  testId: string;
  startedAt: number;
  remainingSec: number;
  currentSectionId: SectionId;
  currentQuestionIndex: number; // within current section or global
  responses: Record<string, CandidateResponse>;
  defaultLanguage: 'en' | 'hi';
  currentLanguage: 'en' | 'hi';
  isSubmitted: boolean;
  submittedAt?: number;
  result?: TestResultSummary;
}

export interface ExamInfo {
  id: string; // 'rrb-ntpc', 'ssc-cgl', 'ssc-gd', 'rrb-group-d'
  slug: string;
  name: LocalizedString;
  authority: string;
  officialNotice: string;
  badge: string;
  description: LocalizedString;
  patternSummary: {
    totalQuestions: number;
    totalMarks: number;
    durationMin: number;
    negativeMarkingText: string;
    marksPerCorrect: number;
    negativeMark: number;
  };
  patternTable: {
    sectionName: LocalizedString;
    questions: number;
    marks: number;
    negativeMarkText: string;
    timeText?: string;
  }[];
  categoryCutoffs: {
    UR: number;
    OBC: number;
    EWS: number;
    SC: number;
    ST: number;
  };
  documentToolUrl: string;
  documentToolLabel: string;
}

export interface AttemptHistoryItem {
  testId: string;
  submittedAt: number;
  netScore: number;
  maxMarks: number;
  accuracyPct: number;
  timeSpentSec: number;
}
