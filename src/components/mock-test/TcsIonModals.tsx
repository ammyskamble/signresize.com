import React from 'react';
import type { Question, TestManifest, CandidateResponse } from '../../types/mockTest';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  manifest: TestManifest;
  lang: 'en' | 'hi';
}

export const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isOpen,
  onClose,
  manifest,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-slate-100">
        <div className="flex items-center justify-between border-b pb-3 dark:border-slate-800">
          <h2 className="text-xl font-bold text-slate-800 dark:text-white">
            {lang === 'hi' ? 'परीक्षा निर्देश एवं सामान्य नियम' : 'General Exam Instructions'}
          </h2>
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white">
              {lang === 'hi' ? '1. परीक्षा संरचना एवं अंकन:' : '1. Exam Structure & Marking Scheme:'}
            </h3>
            <ul className="mt-1 list-inside list-disc space-y-1 pl-2">
              <li>
                {lang === 'hi'
                  ? `कुल समय: ${manifest.durationMin} मिनट। कुल प्रश्न: ${manifest.questions.length}।`
                  : `Total Duration: ${manifest.durationMin} minutes. Total Questions: ${manifest.questions.length}.`}
              </li>
              <li>
                {lang === 'hi'
                  ? `प्रत्येक सही उत्तर के लिए +${manifest.marksPerCorrect} अंक प्रदान किया जाएगा।`
                  : `+${manifest.marksPerCorrect} mark(s) awarded for each correct response.`}
              </li>
              <li>
                <strong className="text-red-600 dark:text-red-400">
                  {lang === 'hi'
                    ? `प्रत्येक गलत उत्तर के लिए -${manifest.negativeMark < 0.3 ? '0.25' : manifest.negativeMark < 0.4 ? '1/3 (0.33)' : '0.50'} अंक काटा जाएगा।`
                    : `Negative Marking: -${manifest.negativeMark < 0.3 ? '0.25' : manifest.negativeMark < 0.4 ? '1/3 (0.33)' : '0.50'} mark(s) will be deducted for each incorrect response.`}
                </strong>
              </li>
              <li>
                {lang === 'hi'
                  ? 'अनुत्तरित प्रश्नों के लिए कोई अंक नहीं काटा जाएगा।'
                  : 'No marks are deducted for unattempted questions.'}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white">
              {lang === 'hi' ? '2. प्रश्न पैलेट प्रतीकों का अर्थ:' : '2. Question Palette Legend:'}
            </h3>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-emerald-600 text-xs font-bold text-white">
                  ✓
                </span>
                <span>{lang === 'hi' ? 'Answered (उत्तर दिया)' : 'Answered'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-rose-600 text-xs font-bold text-white">
                  ✗
                </span>
                <span>{lang === 'hi' ? 'Not Answered (उत्तर नहीं दिया)' : 'Not Answered'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded border border-slate-300 bg-slate-200 text-xs font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                  -
                </span>
                <span>{lang === 'hi' ? 'Not Visited (देखा नहीं)' : 'Not Visited'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-purple-700 text-xs font-bold text-white">
                  ?
                </span>
                <span>{lang === 'hi' ? 'Marked for Review (पुनरावलोकन हेतु)' : 'Marked for Review'}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <span className="relative flex h-7 w-7 items-center justify-center rounded bg-purple-700 text-xs font-bold text-white">
                  ?
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-1 ring-white" />
                </span>
                <span>
                  {lang === 'hi'
                    ? 'Answered & Marked for Review (मूल्यांकन में गिना जाएगा)'
                    : 'Answered & Marked for Review (Evaluated in scoring)'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white">
              {lang === 'hi' ? '3. नेविगेशन एवं सबमिशन:' : '3. Navigation & Submission:'}
            </h3>
            <ul className="mt-1 list-inside list-disc space-y-1 pl-2">
              <li>
                {lang === 'hi'
                  ? 'आप किसी भी समय शीर्ष टैब द्वारा अनुभागों (Sections) के बीच स्वतंत्र रूप से जा सकते हैं।'
                  : 'You can freely switch between Sections at any time.'}
              </li>
              <li>
                {lang === 'hi'
                  ? 'उत्तर सुरक्षित करने के लिए हमेशा "Save & Next" बटन दबाएं।'
                  : 'Always click "Save & Next" to save your answer.'}
              </li>
              <li>
                {lang === 'hi'
                  ? 'समय समाप्त होने पर टेस्ट अपने-आप सबमिट हो जाएगा।'
                  : 'The test will auto-submit when the countdown reaches 00:00.'}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-end border-t pt-4 dark:border-slate-800">
          <button
            onClick={onClose}
            className="rounded bg-sky-600 px-5 py-2 font-medium text-white hover:bg-sky-700"
          >
            {lang === 'hi' ? 'निर्देश बंद करें' : 'Close Instructions'}
          </button>
        </div>
      </div>
    </div>
  );
};

interface QuestionPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  questions: Question[];
  lang: 'en' | 'hi';
}

export const QuestionPaperModal: React.FC<QuestionPaperModalProps> = ({
  isOpen,
  onClose,
  questions,
  lang,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-slate-100">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white pb-3 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              {lang === 'hi' ? 'संपूर्ण प्रश्न पत्र (Question Paper View)' : 'Complete Question Paper View'}
            </h2>
            <p className="text-xs text-slate-500">
              {lang === 'hi' ? 'सभी प्रश्न एक साथ देखें' : 'View all questions simultaneously'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 space-y-6">
          {questions.map((q, idx) => (
            <div
              key={q.id}
              className="rounded-lg border border-slate-200 p-4 dark:border-slate-800"
            >
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Q.{idx + 1} ({q.section.toUpperCase()} · {q.topicName[lang]})
                </span>
                <span>Marks: +1.00, -0.33</span>
              </div>
              <p className="mt-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                {q.text[lang] || q.text.en}
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2 text-xs sm:grid-cols-2">
                {(q.options[lang] || q.options.en).map((opt, oIdx) => (
                  <div
                    key={oIdx}
                    className="flex items-center gap-2 rounded border border-slate-100 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-800/60"
                  >
                    <span className="font-bold text-slate-500">
                      ({String.fromCharCode(65 + oIdx)})
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end border-t pt-4 dark:border-slate-800">
          <button
            onClick={onClose}
            className="rounded bg-slate-700 px-5 py-2 font-medium text-white hover:bg-slate-800"
          >
            {lang === 'hi' ? 'परीक्षा स्क्रीन पर लौटें' : 'Return to Test'}
          </button>
        </div>
      </div>
    </div>
  );
};

interface SubmitConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  manifest: TestManifest;
  responses: Record<string, CandidateResponse>;
  lang: 'en' | 'hi';
}

export const SubmitConfirmModal: React.FC<SubmitConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  manifest,
  responses,
  lang,
}) => {
  if (!isOpen) return null;

  let answered = 0;
  let notAnswered = 0;
  let notVisited = 0;
  let marked = 0;
  let markedAndAnswered = 0;

  manifest.questions.forEach((q) => {
    const state = responses[q.id]?.state || 'NOT_VISITED';
    if (state === 'ANSWERED') answered++;
    else if (state === 'NOT_ANSWERED') notAnswered++;
    else if (state === 'MARKED_FOR_REVIEW') marked++;
    else if (state === 'ANSWERED_AND_MARKED_FOR_REVIEW') markedAndAnswered++;
    else notVisited++;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl dark:bg-slate-900 dark:text-slate-100">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white">
          {lang === 'hi' ? 'टेस्ट सबमिट करने की पुष्टि करें' : 'Confirm Test Submission'}
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
          {lang === 'hi'
            ? 'क्या आप वाकई टेस्ट सबमिट करना चाहते हैं? सबमिशन के बाद आप उत्तर नहीं बदल सकेंगे।'
            : 'Are you sure you want to submit your test? You cannot make further changes after submission.'}
        </p>

        <div className="mt-4 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-100 dark:bg-slate-800">
              <tr>
                <th className="p-2 font-semibold">{lang === 'hi' ? 'स्थिति' : 'Status'}</th>
                <th className="p-2 text-right font-semibold">{lang === 'hi' ? 'प्रश्न संख्या' : 'Count'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr>
                <td className="p-2 text-emerald-600 font-medium">✓ {lang === 'hi' ? 'उत्तर दिया (Answered)' : 'Answered'}</td>
                <td className="p-2 text-right font-bold">{answered}</td>
              </tr>
              <tr>
                <td className="p-2 text-rose-600 font-medium">✗ {lang === 'hi' ? 'उत्तर नहीं दिया (Not Answered)' : 'Not Answered'}</td>
                <td className="p-2 text-right font-bold">{notAnswered}</td>
              </tr>
              <tr>
                <td className="p-2 text-purple-600 font-medium">? {lang === 'hi' ? 'पुनरावलोकन हेतु (Marked for Review)' : 'Marked for Review'}</td>
                <td className="p-2 text-right font-bold">{marked}</td>
              </tr>
              <tr>
                <td className="p-2 text-purple-700 font-medium">?✓ {lang === 'hi' ? 'उत्तर दिया एवं चिह्नित (Answered & Marked)' : 'Answered & Marked'}</td>
                <td className="p-2 text-right font-bold">{markedAndAnswered}</td>
              </tr>
              <tr>
                <td className="p-2 text-slate-500 font-medium">- {lang === 'hi' ? 'देखा नहीं (Not Visited)' : 'Not Visited'}</td>
                <td className="p-2 text-right font-bold">{notVisited}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {lang === 'hi' ? 'रद्द करें (वापस जाएं)' : 'Cancel & Resume'}
          </button>
          <button
            onClick={onConfirm}
            className="rounded bg-emerald-600 px-5 py-2 text-sm font-bold text-white shadow hover:bg-emerald-700"
          >
            {lang === 'hi' ? 'हाँ, सबमिट करें' : 'Yes, Submit Test'}
          </button>
        </div>
      </div>
    </div>
  );
};
