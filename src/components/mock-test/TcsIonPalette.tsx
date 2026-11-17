import React from 'react';
import type {
  Question,
  TestSection,
  CandidateResponse,
  SectionId,
} from '../../types/mockTest';

interface TcsIonPaletteProps {
  sections: TestSection[];
  activeSectionId: SectionId;
  onSelectSection: (secId: SectionId) => void;
  questions: Question[];
  currentQuestionIndex: number;
  onSelectQuestion: (index: number) => void;
  responses: Record<string, CandidateResponse>;
  onSubmitClick: () => void;
  lang: 'en' | 'hi';
  examTitle?: { en: string; hi: string };
  examId?: string;
}

export const TcsIonPalette: React.FC<TcsIonPaletteProps> = ({
  sections,
  activeSectionId,
  onSelectSection,
  questions,
  currentQuestionIndex,
  onSelectQuestion,
  responses,
  onSubmitClick,
  lang,
  examTitle,
  examId,
}) => {
  // Compute counts for active section
  const sectionQuestions = questions.filter((q) => q.section === activeSectionId);

  let answered = 0;
  let notAnswered = 0;
  let notVisited = 0;
  let marked = 0;
  let markedAndAnswered = 0;

  sectionQuestions.forEach((q) => {
    const state = responses[q.id]?.state || 'NOT_VISITED';
    if (state === 'ANSWERED') answered++;
    else if (state === 'NOT_ANSWERED') notAnswered++;
    else if (state === 'MARKED_FOR_REVIEW') marked++;
    else if (state === 'ANSWERED_AND_MARKED_FOR_REVIEW') markedAndAnswered++;
    else notVisited++;
  });

  const rollNumber = examId ? `Roll #2026-${examId.toUpperCase().replace(/[^A-Z0-9]/g, '')}` : 'Roll #2026-EXAM';
  const examDisplay = examTitle ? (examTitle[lang] || examTitle.en) : (lang === 'hi' ? 'कंप्यूटर आधारित परीक्षा' : 'Computer Based Test');

  return (
    <aside className="flex h-full w-full flex-col border-l border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      {/* Candidate Profile Strip (TCS style) */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-200 text-base font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
          👤
        </div>
        <div className="overflow-hidden text-xs">
          <p className="truncate font-bold text-slate-800 dark:text-white">
            {rollNumber}
          </p>
          <p className="truncate text-slate-500">
            {examDisplay}
          </p>
        </div>
      </div>

      {/* 5-State Legend Chips */}
      <div className="border-b border-slate-200 bg-white p-3 text-xs dark:border-slate-800 dark:bg-slate-900/60">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-emerald-600 font-bold text-white">
              {answered}
            </span>
            <span className="truncate text-slate-600 dark:text-slate-400">
              {lang === 'hi' ? 'उत्तर दिया' : 'Answered'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-rose-600 font-bold text-white">
              {notAnswered}
            </span>
            <span className="truncate text-slate-600 dark:text-slate-400">
              {lang === 'hi' ? 'उत्तर नहीं दिया' : 'Not Answered'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-slate-300 bg-slate-200 font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
              {notVisited}
            </span>
            <span className="truncate text-slate-600 dark:text-slate-400">
              {lang === 'hi' ? 'देखा नहीं' : 'Not Visited'}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-purple-700 font-bold text-white">
              {marked}
            </span>
            <span className="truncate text-slate-600 dark:text-slate-400">
              {lang === 'hi' ? 'चिह्नित' : 'Marked'}
            </span>
          </div>

          <div className="col-span-2 flex items-center gap-1.5">
            <span className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded bg-purple-700 font-bold text-white">
              {markedAndAnswered}
              <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-1 ring-white" />
            </span>
            <span className="truncate text-slate-600 dark:text-slate-400">
              {lang === 'hi'
                ? 'उत्तर दिया एवं चिह्नित (मूल्यांकन हेतु)'
                : 'Ans. & Marked for Review'}
            </span>
          </div>
        </div>
      </div>

      {/* Section Switcher inside palette header */}
      <div className="border-b border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-800/80">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {lang === 'hi' ? 'अनुभाग चुनें (Sections):' : 'Choose Section:'}
        </p>
        <div className="flex flex-wrap gap-1">
          {sections.map((sec) => (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className={`rounded px-2.5 py-1 text-xs font-semibold transition ${
                activeSectionId === sec.id
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {sec.name[lang] || sec.name.en} ({sec.questionCount})
            </button>
          ))}
        </div>
      </div>

      {/* Numbered Questions Grid */}
      <div className="flex-1 overflow-y-auto p-3">
        <p className="mb-2 text-xs font-bold text-slate-700 dark:text-slate-300">
          {lang === 'hi' ? 'प्रश्न सूची' : 'Questions Palette'} ({sectionQuestions.length} Qs):
        </p>
        <div className="grid grid-cols-5 gap-2 sm:grid-cols-5">
          {sectionQuestions.map((q) => {
            const globalIndex = questions.findIndex((item) => item.id === q.id);
            const state = responses[q.id]?.state || 'NOT_VISITED';
            const isCurrent = globalIndex === currentQuestionIndex;

            let badgeStyle =
              'border border-slate-300 bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200';
            let dot = null;

            if (state === 'ANSWERED') {
              badgeStyle = 'bg-emerald-600 text-white border-transparent';
            } else if (state === 'NOT_ANSWERED') {
              badgeStyle = 'bg-rose-600 text-white border-transparent';
            } else if (state === 'MARKED_FOR_REVIEW') {
              badgeStyle = 'bg-purple-700 text-white border-transparent';
            } else if (state === 'ANSWERED_AND_MARKED_FOR_REVIEW') {
              badgeStyle = 'bg-purple-700 text-white border-transparent relative';
              dot = (
                <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-1 ring-white" />
              );
            }

            return (
              <button
                key={q.id}
                onClick={() => onSelectQuestion(globalIndex)}
                className={`flex h-9 w-full items-center justify-center rounded text-xs font-bold transition hover:scale-105 ${badgeStyle} ${
                  isCurrent ? 'ring-2 ring-sky-500 ring-offset-1' : ''
                }`}
                title={`Q.${globalIndex + 1} - ${q.topicName[lang]}`}
              >
                {globalIndex + 1}
                {dot}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit Button */}
      <div className="border-t border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
        <button
          onClick={onSubmitClick}
          className="w-full rounded bg-emerald-600 py-2.5 text-xs font-bold tracking-wide text-white uppercase shadow hover:bg-emerald-700"
        >
          {lang === 'hi' ? 'टेस्ट सबमिट करें (Submit Test)' : 'Submit Test'}
        </button>
      </div>
    </aside>
  );
};
