import React, { useState, useEffect, useRef } from 'react';
import type {
  TestManifest,
  AttemptState,
  CandidateResponse,
  SectionId,
  QuestionState,
} from '../../types/mockTest';
import {
  loadAttempt,
  saveAttempt,
  clearAttempt,
  calculateTestResult,
  saveToHistory,
} from '../../utils/mockTestStorage';
import { TcsIonPalette } from './TcsIonPalette';
import {
  InstructionsModal,
  QuestionPaperModal,
  SubmitConfirmModal,
} from './TcsIonModals';
import { MockTestResult } from './MockTestResult';

interface MockTestEngineProps {
  manifest: TestManifest;
}

export const MockTestEngine: React.FC<MockTestEngineProps> = ({ manifest }) => {
  // Test Lifecycle: 'intro' | 'running' | 'result'
  const [phase, setPhase] = useState<'intro' | 'running' | 'result'>('intro');
  const [hasSavedAttempt, setHasSavedAttempt] = useState<boolean>(false);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  // Active Test State
  const [currentSectionId, setCurrentSectionId] = useState<SectionId>(
    manifest.sections[0]?.id || 'maths'
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [responses, setResponses] = useState<Record<string, CandidateResponse>>({});
  const [remainingSec, setRemainingSec] = useState<number>(manifest.durationMin * 60);
  const [defaultLanguage, setDefaultLanguage] = useState<'en' | 'hi'>('en');
  const [activeLang, setActiveLang] = useState<'en' | 'hi'>('en');

  // Modals & Panels
  const [showInstructions, setShowInstructions] = useState<boolean>(false);
  const [showQuestionPaper, setShowQuestionPaper] = useState<boolean>(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [isPaletteOpenMobile, setIsPaletteOpenMobile] = useState<boolean>(false);

  // Result state
  const [finalResult, setFinalResult] = useState<any>(null);

  // Check for existing saved attempt on mount
  useEffect(() => {
    const saved = loadAttempt(manifest.id);
    if (saved && !saved.isSubmitted && saved.remainingSec > 0) {
      setHasSavedAttempt(true);
    }
  }, [manifest.id]);

  // Start Fresh Test
  const startFreshTest = () => {
    clearAttempt(manifest.id);
    const initialResponses: Record<string, CandidateResponse> = {};
    manifest.questions.forEach((q) => {
      initialResponses[q.id] = {
        chosenOption: null,
        state: 'NOT_VISITED',
        timeSpentSec: 0,
      };
    });

    // Mark question 0 as visited (Not Answered)
    const firstQId = manifest.questions[0]?.id;
    if (firstQId) {
      initialResponses[firstQId].state = 'NOT_ANSWERED';
    }

    setResponses(initialResponses);
    setCurrentSectionId(manifest.sections[0]?.id || 'maths');
    setCurrentQuestionIndex(0);
    setRemainingSec(manifest.durationMin * 60);
    setActiveLang(defaultLanguage);
    setPhase('running');
  };

  // Resume Test from LocalStorage
  const resumeTest = () => {
    const saved = loadAttempt(manifest.id);
    if (saved) {
      setResponses(saved.responses);
      setCurrentSectionId(saved.currentSectionId);
      setCurrentQuestionIndex(saved.currentQuestionIndex);
      setRemainingSec(saved.remainingSec);
      setDefaultLanguage(saved.defaultLanguage);
      setActiveLang(saved.currentLanguage);
      setPhase('running');
    } else {
      startFreshTest();
    }
  };

  // Timer countdown loop
  useEffect(() => {
    if (phase !== 'running') return;

    const timer = setInterval(() => {
      setRemainingSec((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinalSubmit();
          return 0;
        }
        return prev - 1;
      });

      // Track time spent on current question
      const currentQ = manifest.questions[currentQuestionIndex];
      if (currentQ) {
        setResponses((prev) => {
          const resp = prev[currentQ.id];
          if (!resp) return prev;
          return {
            ...prev,
            [currentQ.id]: {
              ...resp,
              timeSpentSec: (resp.timeSpentSec || 0) + 1,
            },
          };
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, currentQuestionIndex]);

  // Auto-save to LocalStorage on changes
  useEffect(() => {
    if (phase !== 'running') return;

    const attemptState: AttemptState = {
      testId: manifest.id,
      startedAt: Date.now(),
      remainingSec,
      currentSectionId,
      currentQuestionIndex,
      responses,
      defaultLanguage,
      currentLanguage: activeLang,
      isSubmitted: false,
    };
    saveAttempt(attemptState);
  }, [phase, remainingSec, currentSectionId, currentQuestionIndex, responses, activeLang]);

  // Navigate to Question
  const goToQuestion = (index: number) => {
    if (index < 0 || index >= manifest.questions.length) return;
    const targetQ = manifest.questions[index];
    if (!targetQ) return;

    // Update state of the target question to NOT_ANSWERED if it was NOT_VISITED
    setResponses((prev) => {
      const resp = prev[targetQ.id];
      if (resp && resp.state === 'NOT_VISITED') {
        return {
          ...prev,
          [targetQ.id]: {
            ...resp,
            state: 'NOT_ANSWERED',
          },
        };
      }
      return prev;
    });

    setCurrentSectionId(targetQ.section);
    setCurrentQuestionIndex(index);
    setIsPaletteOpenMobile(false);
  };

  // Action Button: Save & Next
  const handleSaveAndNext = () => {
    const currentQ = manifest.questions[currentQuestionIndex];
    if (!currentQ) return;

    setResponses((prev) => {
      const resp = prev[currentQ.id];
      const hasChosen = resp?.chosenOption !== null && resp?.chosenOption !== undefined;
      return {
        ...prev,
        [currentQ.id]: {
          ...resp,
          state: hasChosen ? 'ANSWERED' : 'NOT_ANSWERED',
        },
      };
    });

    goToQuestion(currentQuestionIndex + 1);
  };

  // Action Button: Save & Mark for Review
  const handleSaveAndMarkForReview = () => {
    const currentQ = manifest.questions[currentQuestionIndex];
    if (!currentQ) return;

    setResponses((prev) => {
      const resp = prev[currentQ.id];
      const hasChosen = resp?.chosenOption !== null && resp?.chosenOption !== undefined;
      return {
        ...prev,
        [currentQ.id]: {
          ...resp,
          state: hasChosen
            ? 'ANSWERED_AND_MARKED_FOR_REVIEW'
            : 'MARKED_FOR_REVIEW',
        },
      };
    });

    goToQuestion(currentQuestionIndex + 1);
  };

  // Action Button: Mark for Review & Next (without saving option if none chosen)
  const handleMarkForReviewAndNext = () => {
    const currentQ = manifest.questions[currentQuestionIndex];
    if (!currentQ) return;

    setResponses((prev) => {
      const resp = prev[currentQ.id];
      const hasChosen = resp?.chosenOption !== null && resp?.chosenOption !== undefined;
      return {
        ...prev,
        [currentQ.id]: {
          ...resp,
          state: hasChosen
            ? 'ANSWERED_AND_MARKED_FOR_REVIEW'
            : 'MARKED_FOR_REVIEW',
        },
      };
    });

    goToQuestion(currentQuestionIndex + 1);
  };

  // Action Button: Clear Response
  const handleClearResponse = () => {
    const currentQ = manifest.questions[currentQuestionIndex];
    if (!currentQ) return;

    setResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        chosenOption: null,
        state: 'NOT_ANSWERED',
      },
    }));
  };

  // Select Option Radio
  const handleSelectOption = (optionIndex: number) => {
    const currentQ = manifest.questions[currentQuestionIndex];
    if (!currentQ) return;

    setResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        chosenOption: optionIndex,
      },
    }));
  };

  // Final Submit
  const handleFinalSubmit = () => {
    const totalTimeSpentSec = manifest.durationMin * 60 - remainingSec;
    const computedResult = calculateTestResult(manifest, responses, totalTimeSpentSec);

    setFinalResult(computedResult);
    setPhase('result');
    setShowSubmitConfirm(false);

    // Save to attempt history
    saveToHistory({
      testId: manifest.id,
      submittedAt: Date.now(),
      netScore: computedResult.netScore,
      maxMarks: computedResult.maxMarks,
      accuracyPct: computedResult.accuracyPct,
      timeSpentSec: totalTimeSpentSec,
    });

    // Mark attempt as submitted in localStorage
    saveAttempt({
      testId: manifest.id,
      startedAt: Date.now(),
      remainingSec: 0,
      currentSectionId,
      currentQuestionIndex,
      responses,
      defaultLanguage,
      currentLanguage: activeLang,
      isSubmitted: true,
      result: computedResult,
    });
  };

  // Current Question helper
  const currentQ = manifest.questions[currentQuestionIndex] || manifest.questions[0];
  const currentResponse = currentQ ? responses[currentQ.id] : null;

  // Format time remaining
  const minutes = Math.floor(remainingSec / 60);
  const seconds = remainingSec % 60;
  const timeFormatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isTimeCritical = remainingSec < 300; // less than 5 mins

  // --- PHASE 1: INTRO / INSTRUCTION SCREEN ---
  if (phase === 'intro') {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col justify-between gap-4 border-b pb-6 sm:flex-row sm:items-center dark:border-slate-800">
            <div>
              <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-800 dark:bg-sky-950 dark:text-sky-300">
                TCS iON CBT Exam Interface
              </span>
              <h1 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl dark:text-white">
                {manifest.title[defaultLanguage] || manifest.title.en}
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                {manifest.subtitle[defaultLanguage] || manifest.subtitle.en}
              </p>
            </div>

            {/* Language Preference */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                Default Language:
              </label>
              <select
                value={defaultLanguage}
                onChange={(e) => {
                  const val = e.target.value as 'en' | 'hi';
                  setDefaultLanguage(val);
                  setActiveLang(val);
                }}
                className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="en">English</option>
                <option value="hi">हिन्दी (Hindi)</option>
              </select>
            </div>
          </div>

          {/* Resume Incomplete Attempt Prompt */}
          {hasSavedAttempt && (
            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-amber-300 bg-amber-50 p-4 sm:flex-row sm:items-center dark:border-amber-900 dark:bg-amber-950/40">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💾</span>
                <div>
                  <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                    Incomplete Attempt Found
                  </h3>
                  <p className="text-xs text-amber-800 dark:text-amber-300">
                    You have an auto-saved attempt on this device. You can resume without losing your answers or start afresh.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={resumeTest}
                  className="rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow hover:bg-amber-700"
                >
                  Resume Test →
                </button>
                <button
                  onClick={startFreshTest}
                  className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  Start Fresh
                </button>
              </div>
            </div>
          )}

          {/* Official Spec Box (Verified CEN 06/2025) */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
              <span className="text-[11px] font-semibold text-slate-400">Total Questions</span>
              <p className="mt-0.5 text-xl font-black text-slate-800 dark:text-white">
                {manifest.questions.length} Qs
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
              <span className="text-[11px] font-semibold text-slate-400">Total Duration</span>
              <p className="mt-0.5 text-xl font-black text-slate-800 dark:text-white">
                {manifest.durationMin} Minutes
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
              <span className="text-[11px] font-semibold text-slate-400">Marking Scheme</span>
              <p className="mt-0.5 text-xl font-black text-emerald-600">
                +{manifest.marksPerCorrect}.0 Mark{manifest.marksPerCorrect > 1 ? 's' : ''}
              </p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/40">
              <span className="text-[11px] font-semibold text-slate-400">Negative Penalty</span>
              <p className="mt-0.5 text-xl font-black text-rose-600">
                -{manifest.negativeMark < 0.3 ? '0.25' : manifest.negativeMark < 0.4 ? '1/3 (0.33)' : '0.50'}
              </p>
            </div>
          </div>

          {/* Sectional Structure */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Section Structure (Indicative Distribution):
            </h2>
            <div className="mt-2 space-y-2">
              {manifest.sections.map((sec) => (
                <div
                  key={sec.id}
                  className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50/80 px-4 py-2.5 text-xs dark:border-slate-800 dark:bg-slate-800/30"
                >
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {sec.name[defaultLanguage] || sec.name.en}
                  </span>
                  <span className="font-semibold text-sky-600 dark:text-sky-400">
                    {sec.questionCount} Questions ({manifest.marksPerCorrect} mark{manifest.marksPerCorrect > 1 ? 's' : ''} each)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Verified Official Rules Notice */}
          <div className="mt-6 rounded-xl border border-sky-100 bg-sky-50/50 p-4 text-xs text-sky-900 dark:border-sky-900/30 dark:bg-sky-950/20 dark:text-sky-300">
            <p className="font-bold">⚠️ Official Exam Guidelines ({manifest.examTitle[defaultLanguage] || manifest.examTitle.en}):</p>
            <ul className="mt-1 list-inside list-disc space-y-1">
              <li>
                <strong>Marking & Penalty:</strong> +{manifest.marksPerCorrect} mark(s) per correct response; -{manifest.negativeMark < 0.3 ? '0.25' : manifest.negativeMark < 0.4 ? '1/3 (0.33)' : '0.50'} per incorrect response.
              </li>
              <li>
                <strong>Free Section Navigation:</strong> You can switch between sections at any point during the {manifest.durationMin} minutes.
              </li>
              <li>
                <strong>Answered & Marked for Review:</strong> Questions that are answered and marked for review WILL be evaluated in your final score.
              </li>
            </ul>
          </div>

          {/* Agreement Checkbox */}
          <div className="mt-6 flex items-start gap-3 border-t pt-4 dark:border-slate-800">
            <input
              type="checkbox"
              id="agree-rules"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
            />
            <label htmlFor="agree-rules" className="text-xs text-slate-600 select-none dark:text-slate-300">
              I have read and understood all the instructions, negative marking rules (-{manifest.negativeMark < 0.3 ? '0.25' : manifest.negativeMark < 0.4 ? '1/3' : '0.50'}), and question palette guidelines. I am ready to take the mock test in the real TCS iON exam interface.
            </label>
          </div>

          {/* Start Test Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={startFreshTest}
              disabled={!agreedToTerms}
              className={`rounded-xl px-8 py-3.5 text-sm font-bold text-white shadow-lg transition ${
                agreedToTerms
                  ? 'bg-sky-600 hover:bg-sky-700 active:scale-95'
                  : 'cursor-not-allowed bg-slate-300 dark:bg-slate-700'
              }`}
            >
              I Am Ready to Begin →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- PHASE 3: RESULT SCREEN ---
  if (phase === 'result' && finalResult) {
    return (
      <MockTestResult
        manifest={manifest}
        result={finalResult}
        responses={responses}
        onReattempt={startFreshTest}
        lang={activeLang}
      />
    );
  }

  // --- PHASE 2: RUNNING EXAM MODE (TCS iON Screen) ---
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-slate-100 font-sans text-slate-800 select-none dark:bg-slate-950 dark:text-slate-100">
      {/* 1. TCS iON Top Header Bar */}
      <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-300 bg-slate-800 px-4 text-white shadow-md">
        <div className="flex items-center gap-3">
          <span className="rounded bg-sky-500 px-2 py-0.5 text-xs font-black tracking-wider uppercase">
            TCS iON
          </span>
          <div className="hidden sm:block">
            <h1 className="text-xs font-bold sm:text-sm">
              {manifest.title[activeLang] || manifest.title.en}
            </h1>
          </div>
        </div>

        {/* Center / Right controls: Timer, View QP, Instructions, Lang toggle, Mobile Palette trigger */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Countdown Clock */}
          <div
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono text-sm font-black shadow-inner ${
              isTimeCritical
                ? 'animate-pulse bg-rose-600 text-white'
                : 'bg-slate-900 text-amber-300'
            }`}
          >
            <span>⏱️</span>
            <span>{timeFormatted}</span>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center gap-1">
            <span className="hidden text-xs text-slate-300 md:inline">View In:</span>
            <select
              value={activeLang}
              onChange={(e) => setActiveLang(e.target.value as any)}
              className="rounded border border-slate-600 bg-slate-700 px-2 py-1 text-xs font-semibold text-white focus:outline-none"
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>

          {/* Question Paper Button */}
          <button
            onClick={() => setShowQuestionPaper(true)}
            className="hidden rounded bg-slate-700 px-2.5 py-1 text-xs font-medium text-slate-200 hover:bg-slate-600 md:block"
          >
            Question Paper
          </button>

          {/* Instructions Button */}
          <button
            onClick={() => setShowInstructions(true)}
            className="hidden rounded bg-slate-700 px-2.5 py-1 text-xs font-medium text-slate-200 hover:bg-slate-600 md:block"
          >
            Instructions
          </button>

          {/* Mobile Palette Toggle */}
          <button
            onClick={() => setIsPaletteOpenMobile(!isPaletteOpenMobile)}
            className="rounded bg-sky-600 px-2.5 py-1 text-xs font-bold text-white lg:hidden"
          >
            {isPaletteOpenMobile ? 'Close Palette' : `Questions (${manifest.questions.length})`}
          </button>
        </div>
      </header>

      {/* 2. Main Content Split: Questions Area (Left) + Palette (Right) */}
      <div className="relative flex flex-1 overflow-hidden">
        {/* Left: Questions & Action Area */}
        <main className="flex flex-1 flex-col overflow-y-auto bg-white p-4 dark:bg-slate-900">
          {/* Section Tabs */}
          <div className="flex items-center gap-1 border-b border-slate-200 pb-2 dark:border-slate-800">
            <span className="mr-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              Sections:
            </span>
            {manifest.sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => {
                  const firstQIdx = manifest.questions.findIndex((q) => q.section === sec.id);
                  if (firstQIdx !== -1) goToQuestion(firstQIdx);
                }}
                className={`rounded-t-lg px-3 py-1.5 text-xs font-bold transition ${
                  currentSectionId === sec.id
                    ? 'border-b-2 border-sky-600 bg-sky-50 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {sec.name[activeLang] || sec.name.en} ({sec.questionCount})
              </button>
            ))}
          </div>

          {/* Question Meta Header */}
          <div className="mt-3 flex items-center justify-between border-b border-slate-100 pb-2 text-xs dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="rounded bg-slate-100 px-2 py-0.5 font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-200">
                Question No. {currentQuestionIndex + 1}
              </span>
              <span className="text-slate-500">
                · Topic: <strong>{currentQ?.topicName[activeLang] || currentQ?.topicName.en}</strong>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold text-emerald-600">Marks: +{manifest.marksPerCorrect}.00</span>
              <span className="font-semibold text-rose-600">
                Negative: -{manifest.negativeMark < 0.3 ? '0.25' : manifest.negativeMark < 0.4 ? '0.33' : '0.50'}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <div className="mt-4 flex-1">
            <div className="text-sm font-semibold leading-relaxed text-slate-900 sm:text-base dark:text-slate-100">
              {currentQ?.text[activeLang] || currentQ?.text.en}
            </div>

            {/* Options List */}
            <div className="mt-6 space-y-3">
              {(currentQ?.options[activeLang] || currentQ?.options.en).map(
                (opt, oIdx) => {
                  const isChecked = currentResponse?.chosenOption === oIdx;

                  return (
                    <label
                      key={oIdx}
                      onClick={() => handleSelectOption(oIdx)}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 text-sm transition ${
                        isChecked
                          ? 'border-sky-500 bg-sky-50/80 font-bold text-sky-900 shadow-sm dark:border-sky-500 dark:bg-sky-950/60 dark:text-sky-200'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:bg-slate-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q_${currentQ.id}`}
                        checked={isChecked}
                        onChange={() => handleSelectOption(oIdx)}
                        className="h-4 w-4 border-slate-300 text-sky-600 focus:ring-sky-500"
                      />
                      <span className="font-bold text-slate-400">
                        ({String.fromCharCode(65 + oIdx)})
                      </span>
                      <span>{opt}</span>
                    </label>
                  );
                }
              )}
            </div>
          </div>

          {/* 3. TCS iON Authentic Action Bar (Bottom) */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-3 dark:border-slate-800">
            {/* Left Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleMarkForReviewAndNext}
                className="rounded border border-purple-600 px-3 py-2 text-xs font-bold text-purple-700 hover:bg-purple-50 dark:text-purple-300 dark:hover:bg-purple-950/50"
              >
                {activeLang === 'hi' ? 'चिह्नित करें एवं अगला' : 'Mark for Review & Next'}
              </button>
              <button
                onClick={handleClearResponse}
                className="rounded border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                {activeLang === 'hi' ? 'उत्तर मिटाएं (Clear)' : 'Clear Response'}
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex gap-2">
              <button
                onClick={handleSaveAndMarkForReview}
                className="rounded border border-purple-700 bg-purple-50 px-3 py-2 text-xs font-bold text-purple-800 hover:bg-purple-100 dark:border-purple-600 dark:bg-purple-950/60 dark:text-purple-200"
              >
                {activeLang === 'hi' ? 'सेव करें एवं चिह्नित करें' : 'Save & Mark for Review'}
              </button>
              <button
                onClick={handleSaveAndNext}
                className="rounded bg-sky-600 px-5 py-2 text-xs font-bold text-white shadow hover:bg-sky-700 active:scale-95"
              >
                {activeLang === 'hi' ? 'सेव करें एवं अगला (Save & Next)' : 'Save & Next →'}
              </button>
            </div>
          </div>
        </main>

        {/* Right Rail: TCS iON Question Palette */}
        {/* Desktop permanent rail */}
        <div className="hidden w-80 lg:block">
          <TcsIonPalette
            sections={manifest.sections}
            activeSectionId={currentSectionId}
            onSelectSection={setCurrentSectionId}
            questions={manifest.questions}
            currentQuestionIndex={currentQuestionIndex}
            onSelectQuestion={goToQuestion}
            responses={responses}
            onSubmitClick={() => setShowSubmitConfirm(true)}
            lang={activeLang}
            examTitle={manifest.examTitle}
            examId={manifest.exam}
          />
        </div>

        {/* Mobile slide-over drawer */}
        {isPaletteOpenMobile && (
          <div className="absolute inset-0 z-30 flex flex-col bg-white lg:hidden dark:bg-slate-900">
            <div className="flex items-center justify-between border-b p-3 dark:border-slate-800">
              <span className="font-bold text-slate-800 dark:text-white">Question Palette</span>
              <button
                onClick={() => setIsPaletteOpenMobile(false)}
                className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                ✕ Close
              </button>
            </div>
            <div className="flex-1 overflow-hidden">
              <TcsIonPalette
                sections={manifest.sections}
                activeSectionId={currentSectionId}
                onSelectSection={setCurrentSectionId}
                questions={manifest.questions}
                currentQuestionIndex={currentQuestionIndex}
                onSelectQuestion={goToQuestion}
                responses={responses}
                onSubmitClick={() => setShowSubmitConfirm(true)}
                lang={activeLang}
                examTitle={manifest.examTitle}
                examId={manifest.exam}
              />
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <InstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        manifest={manifest}
        lang={activeLang}
      />

      <QuestionPaperModal
        isOpen={showQuestionPaper}
        onClose={() => setShowQuestionPaper(false)}
        questions={manifest.questions}
        lang={activeLang}
      />

      <SubmitConfirmModal
        isOpen={showSubmitConfirm}
        onClose={() => setShowSubmitConfirm(false)}
        onConfirm={handleFinalSubmit}
        manifest={manifest}
        responses={responses}
        lang={activeLang}
      />
    </div>
  );
};
