import React, { useState } from 'react';
import type {
  TestManifest,
  TestResultSummary,
  CandidateResponse,
} from '../../types/mockTest';

interface MockTestResultProps {
  manifest: TestManifest;
  result: TestResultSummary;
  responses: Record<string, CandidateResponse>;
  onReattempt: () => void;
  lang: 'en' | 'hi';
}

export const MockTestResult: React.FC<MockTestResultProps> = ({
  manifest,
  result,
  responses,
  onReattempt,
  lang,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'UR' | 'OBC' | 'SC' | 'ST' | 'EWS'>('UR');
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'unattempted' | 'marked'>('all');

  const cutoffs = manifest.categoryCutoffs || {
    UR: 74,
    OBC: 68,
    EWS: 63,
    SC: 58,
    ST: 52,
  };

  const targetCutoff = cutoffs[selectedCategory];
  const diffFromCutoff = Number((result.netScore - targetCutoff).toFixed(2));
  const isQualified = diffFromCutoff >= 0;

  // Filter questions for review
  const filteredQuestions = manifest.questions.filter((q) => {
    const resp = responses[q.id];
    const isAnswered =
      resp &&
      (resp.state === 'ANSWERED' ||
        resp.state === 'ANSWERED_AND_MARKED_FOR_REVIEW') &&
      resp.chosenOption !== null;

    if (reviewFilter === 'incorrect') {
      return isAnswered && resp.chosenOption !== q.answer;
    }
    if (reviewFilter === 'unattempted') {
      return !isAnswered;
    }
    if (reviewFilter === 'marked') {
      return (
        resp?.state === 'MARKED_FOR_REVIEW' ||
        resp?.state === 'ANSWERED_AND_MARKED_FOR_REVIEW'
      );
    }
    return true;
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* Celebration / Completion Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-sky-800 to-indigo-900 p-6 text-white shadow-xl sm:p-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold tracking-wide text-emerald-300 uppercase">
              {lang === 'hi' ? '✓ टेस्ट सफलतापूर्वक सबमिट हुआ' : '✓ Test Completed Successfully'}
            </span>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">
              {result.testTitle[lang] || result.testTitle.en}
            </h1>
            <p className="mt-1 text-xs text-sky-200">
              {lang === 'hi'
                ? 'आधिकारिक CEN 06/2025 नियम: +1 अंक सही उत्तर, -1/3 (0.33) अंक गलत उत्तर।'
                : 'Official CEN 06/2025 rules: +1 per correct answer, -1/3 (0.33) per incorrect answer.'}
            </p>
          </div>

          <button
            onClick={onReattempt}
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-sky-900 shadow hover:bg-sky-50 active:scale-95"
          >
            ↻ {lang === 'hi' ? 'पुनः प्रयास करें (Re-attempt)' : 'Re-attempt Test (Free)'}
          </button>
        </div>

        {/* Primary Score KPI Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4">
          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <span className="text-xs text-sky-200">
              {lang === 'hi' ? 'कुल अंक (Net Score)' : 'Net Score'}
            </span>
            <p className="mt-1 text-2xl font-black sm:text-3xl">
              {result.netScore}{' '}
              <span className="text-sm font-normal text-sky-200">/ {result.maxMarks}</span>
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <span className="text-xs text-sky-200">
              {lang === 'hi' ? 'सटीकता (Accuracy)' : 'Accuracy'}
            </span>
            <p className="mt-1 text-2xl font-black text-emerald-400 sm:text-3xl">
              {result.accuracyPct}%
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <span className="text-xs text-sky-200">
              {lang === 'hi' ? 'प्रयास (Attempted)' : 'Attempted'}
            </span>
            <p className="mt-1 text-2xl font-black sm:text-3xl">
              {result.attempted}{' '}
              <span className="text-sm font-normal text-sky-200">/ {result.totalQuestions}</span>
            </p>
          </div>

          <div className="rounded-xl bg-white/10 p-4 backdrop-blur-sm">
            <span className="text-xs text-sky-200">
              {lang === 'hi' ? 'व्यतीत समय' : 'Time Taken'}
            </span>
            <p className="mt-1 text-2xl font-black sm:text-3xl">
              {Math.floor(result.timeSpentSec / 60)}m {result.timeSpentSec % 60}s
            </p>
          </div>
        </div>

        {/* Detailed Marks Breakdown */}
        <div className="mt-4 flex flex-wrap gap-4 border-t border-white/10 pt-4 text-xs text-sky-100">
          <div>
            <span className="text-emerald-400 font-bold">+{result.positiveMarks}</span> {lang === 'hi' ? 'सही उत्तर (+1.0)' : 'Correct Answers (+1.0)'} ({result.correct} Qs)
          </div>
          <div>
            <span className="text-rose-400 font-bold">-{result.negativeMarks}</span> {lang === 'hi' ? 'नेगेटिव मार्किंग (-0.33)' : 'Negative Marking (-0.33)'} ({result.incorrect} Qs)
          </div>
          <div>
            <span className="text-slate-300 font-bold">{result.unattempted}</span> {lang === 'hi' ? 'प्रयास नहीं किए' : 'Unattempted'} (0 marks)
          </div>
        </div>
      </div>

      {/* Honest Category Cut-off Comparison (NO FAKE PERCENTILES) */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              {lang === 'hi' ? 'वास्तविक कट-ऑफ तुलना (CBT-1 Cut-off Context)' : 'Real CBT-1 Cut-off Benchmark'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'hi'
                ? 'पिछले RRB NTPC CBT-1 वास्तविक कट-ऑफ के आधार पर आपकी तैयारी की स्थिति (कोई काल्पनिक रैंक नहीं):'
                : 'Honest benchmark against actual published RRB NTPC CBT-1 cut-offs (no fake percentiles):'}
            </p>
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
              {lang === 'hi' ? 'श्रेणी (Category):' : 'Category:'}
            </span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="UR">General / UR (Cut-off ~74)</option>
              <option value="OBC">OBC-NCL (Cut-off ~68)</option>
              <option value="EWS">EWS (Cut-off ~63)</option>
              <option value="SC">SC (Cut-off ~58)</option>
              <option value="ST">ST (Cut-off ~52)</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4 sm:flex-row dark:border-slate-800 dark:bg-slate-800/50">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${
                isQualified
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400'
                  : 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400'
              }`}
            >
              {isQualified ? '✓' : '▲'}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-white">
                {isQualified
                  ? lang === 'hi'
                    ? `बधाई हो! आपका स्कोर ${selectedCategory} श्रेणी के कट-ऑफ से +${diffFromCutoff} अंक अधिक है।`
                    : `Strong Performance! Your score exceeds the ${selectedCategory} historical cut-off by +${diffFromCutoff} marks.`
                  : lang === 'hi'
                    ? `तैयारी जारी रखें! ${selectedCategory} कट-ऑफ पार करने हेतु आपको और +${Math.abs(diffFromCutoff)} अंकों की आवश्यकता है।`
                    : `Keep Improving! You need +${Math.abs(diffFromCutoff)} more marks to clear the ${selectedCategory} benchmark cut-off.`}
              </p>
              <p className="text-xs text-slate-500">
                {lang === 'hi'
                  ? `आपका स्कोर: ${result.netScore} | लक्षित कट-ऑफ: ${targetCutoff} अंक`
                  : `Your Score: ${result.netScore} | Target Cut-off: ${targetCutoff} Marks`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section-Wise Performance Breakdown */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-bold text-slate-800 dark:text-white">
          {lang === 'hi' ? 'अनुभाग-वार प्रदर्शन (Section-Wise Analysis)' : 'Section-Wise Performance'}
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-800">
              <tr>
                <th className="p-3 font-semibold">{lang === 'hi' ? 'अनुभाग (Section)' : 'Section'}</th>
                <th className="p-3 text-center font-semibold">{lang === 'hi' ? 'कुल प्रश्न' : 'Total Qs'}</th>
                <th className="p-3 text-center font-semibold text-emerald-600">{lang === 'hi' ? 'सही' : 'Correct'}</th>
                <th className="p-3 text-center font-semibold text-rose-600">{lang === 'hi' ? 'गलत' : 'Wrong'}</th>
                <th className="p-3 text-center font-semibold text-slate-400">{lang === 'hi' ? 'छोड़े' : 'Skipped'}</th>
                <th className="p-3 text-right font-semibold">{lang === 'hi' ? 'प्राप्त अंक' : 'Net Marks'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {result.sections.map((sec) => (
                <tr key={sec.sectionId} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td className="p-3 font-bold text-slate-800 dark:text-white">
                    {sec.name[lang] || sec.name.en}
                  </td>
                  <td className="p-3 text-center text-slate-600 dark:text-slate-300">
                    {sec.totalQuestions}
                  </td>
                  <td className="p-3 text-center font-bold text-emerald-600">
                    {sec.correct}
                  </td>
                  <td className="p-3 text-center font-bold text-rose-600">
                    {sec.incorrect}
                  </td>
                  <td className="p-3 text-center text-slate-400">
                    {sec.unattempted}
                  </td>
                  <td className="p-3 text-right font-black text-sky-600 dark:text-sky-400">
                    {Number(sec.marksScored.toFixed(2))} / {sec.maxMarks}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Topic-Wise Weakness Report (Core Differentiator: Instant Diagnostic) */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              {lang === 'hi' ? 'विषय-वार कमजोरी निदान (Topic-Wise Weakness Report)' : 'Topic-Wise Weakness Report'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'hi'
                ? 'कमजोर टॉपिक सबसे ऊपर सूचीबद्ध हैं ताकि आप लक्षित अभ्यास कर सकें:'
                : 'Identifies areas of improvement first so you know exactly what to revise:'}
            </p>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {result.topicWeakness.map((item) => {
            const isWeak = item.status === 'weak';
            const isStrong = item.status === 'strong';

            return (
              <div
                key={item.topic}
                className={`rounded-xl border p-4 transition ${
                  isWeak
                    ? 'border-rose-200 bg-rose-50/50 dark:border-rose-900/40 dark:bg-rose-950/20'
                    : isStrong
                      ? 'border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-emerald-950/20'
                      : 'border-slate-200 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/20'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                    {item.topicName[lang] || item.topicName.en}
                  </h3>
                  <span
                    className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                      isWeak
                        ? 'bg-rose-200 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200'
                        : isStrong
                          ? 'bg-emerald-200 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
                          : 'bg-amber-200 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
                    }`}
                  >
                    {isWeak
                      ? lang === 'hi' ? 'पुनरावृत्ति जरूरी' : 'Needs Practice'
                      : isStrong
                        ? lang === 'hi' ? 'मजबूत' : 'Strong'
                        : lang === 'hi' ? 'मध्यम' : 'Moderate'}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                  <span>Accuracy: <strong className={isWeak ? 'text-rose-600' : 'text-emerald-600'}>{item.accuracyPct}%</strong></span>
                  <span>{item.correct} / {item.totalQuestions} Correct</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full Question Review & Worked Solutions */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-bold text-slate-800 dark:text-white">
              {lang === 'hi' ? 'हल एवं विस्तृत व्याख्या (Question Review & Solutions)' : 'Question Review & Worked Solutions'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'hi'
                ? 'प्रत्येक प्रश्न का आधिकारिक हल और चरणबद्ध व्याख्या:'
                : 'Complete worked solutions with step-by-step reasoning for every question:'}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-1.5">
            {[
              { id: 'all', label: lang === 'hi' ? 'सभी (All)' : 'All' },
              { id: 'incorrect', label: lang === 'hi' ? 'गलत उत्तर' : 'Incorrect Only' },
              { id: 'unattempted', label: lang === 'hi' ? 'अनुत्तरित' : 'Unattempted' },
              { id: 'marked', label: lang === 'hi' ? 'चिह्नित' : 'Marked' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setReviewFilter(f.id as any)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  reviewFilter === f.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {filteredQuestions.length === 0 ? (
            <p className="py-8 text-center text-xs text-slate-500">
              {lang === 'hi' ? 'इस फिल्टर के तहत कोई प्रश्न नहीं है।' : 'No questions matching this filter.'}
            </p>
          ) : (
            filteredQuestions.map((q) => {
              const globalIdx = manifest.questions.findIndex((item) => item.id === q.id);
              const resp = responses[q.id];
              const chosen = resp?.chosenOption;
              const isCorrect = chosen === q.answer;
              const isUnattempted = chosen === null || chosen === undefined;

              return (
                <div
                  key={q.id}
                  className={`rounded-xl border p-5 transition ${
                    isCorrect
                      ? 'border-emerald-200 bg-emerald-50/20 dark:border-emerald-900/30 dark:bg-emerald-950/10'
                      : isUnattempted
                        ? 'border-slate-200 bg-slate-50/30 dark:border-slate-800 dark:bg-slate-800/10'
                        : 'border-rose-200 bg-rose-50/20 dark:border-rose-900/30 dark:bg-rose-950/10'
                  }`}
                >
                  <div className="flex items-center justify-between border-b pb-2 text-xs dark:border-slate-800">
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      Q.{globalIdx + 1} ({q.section.toUpperCase()} · {q.topicName[lang] || q.topicName.en})
                    </span>

                    <span
                      className={`font-bold ${
                        isCorrect
                          ? 'text-emerald-600'
                          : isUnattempted
                            ? 'text-slate-500'
                            : 'text-rose-600'
                      }`}
                    >
                      {isCorrect
                        ? '+1.00 Marks'
                        : isUnattempted
                          ? 'Skipped (0.00)'
                          : '-0.33 Negative'}
                    </span>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                    {q.text[lang] || q.text.en}
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                    {(q.options[lang] || q.options.en).map((opt, oIdx) => {
                      const isOptionCorrect = oIdx === q.answer;
                      const isOptionChosen = oIdx === chosen;

                      let optClass =
                        'border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200';
                      if (isOptionCorrect) {
                        optClass =
                          'border-emerald-500 bg-emerald-100 font-bold text-emerald-900 dark:border-emerald-600 dark:bg-emerald-950/80 dark:text-emerald-200';
                      } else if (isOptionChosen && !isCorrect) {
                        optClass =
                          'border-rose-400 bg-rose-100 font-bold text-rose-900 dark:border-rose-600 dark:bg-rose-950/80 dark:text-rose-200';
                      }

                      return (
                        <div
                          key={oIdx}
                          className={`flex items-center gap-2 rounded-lg border p-2.5 ${optClass}`}
                        >
                          <span className="font-bold">({String.fromCharCode(65 + oIdx)})</span>
                          <span>{opt}</span>
                          {isOptionCorrect && <span className="ml-auto text-emerald-700 dark:text-emerald-300">✓ Correct Answer</span>}
                          {isOptionChosen && !isCorrect && <span className="ml-auto text-rose-700 dark:text-rose-300">✗ Your Choice</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Worked Solution */}
                  <div className="mt-4 rounded-lg border border-sky-100 bg-sky-50/60 p-3.5 text-xs dark:border-sky-900/30 dark:bg-sky-950/20">
                    <p className="font-bold text-sky-900 dark:text-sky-200">
                      💡 {lang === 'hi' ? 'चरणबद्ध हल एवं व्याख्या:' : 'Step-by-Step Worked Solution:'}
                    </p>
                    <p className="mt-1 whitespace-pre-line leading-relaxed text-sky-800 dark:text-sky-300">
                      {q.solution[lang] || q.solution.en}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
