import type { TestManifest, ExamInfo } from '../../types/mockTest';

// RRB NTPC manifests
import rrbNtpcMock1 from './rrb-ntpc-cbt1-mock-1.json';
import rrbNtpcMaths from './rrb-ntpc-cbt1-maths.json';
import rrbNtpcReasoning from './rrb-ntpc-cbt1-reasoning.json';
import rrbNtpcGa from './rrb-ntpc-cbt1-ga.json';

// SSC CGL manifests
import sscCglMock1 from './ssc-cgl-tier1-mock-1.json';

// SSC GD manifests
import sscGdMock1 from './ssc-gd-cbt-mock-1.json';

// RRB Group D manifests
import rrbGroupDMock1 from './rrb-group-d-cbt-mock-1.json';

export const allMockTests: Record<string, TestManifest> = {
  'cbt-1-mock-test-1': rrbNtpcMock1 as unknown as TestManifest,
  'cbt-1-maths-sectional-test': rrbNtpcMaths as unknown as TestManifest,
  'cbt-1-reasoning-sectional-test': rrbNtpcReasoning as unknown as TestManifest,
  'cbt-1-ga-sectional-test': rrbNtpcGa as unknown as TestManifest,
  'ssc-cgl-tier-1-mock-test-1': sscCglMock1 as unknown as TestManifest,
  'ssc-gd-cbt-mock-test-1': sscGdMock1 as unknown as TestManifest,
  'rrb-group-d-cbt-mock-test-1': rrbGroupDMock1 as unknown as TestManifest,
};

export const testsByExam: Record<string, TestManifest[]> = {
  'rrb-ntpc': [
    rrbNtpcMock1 as unknown as TestManifest,
    rrbNtpcMaths as unknown as TestManifest,
    rrbNtpcReasoning as unknown as TestManifest,
    rrbNtpcGa as unknown as TestManifest,
  ],
  'ssc-cgl': [
    sscCglMock1 as unknown as TestManifest,
  ],
  'ssc-gd': [
    sscGdMock1 as unknown as TestManifest,
  ],
  'rrb-group-d': [
    rrbGroupDMock1 as unknown as TestManifest,
  ],
};

export const examsMetadata: Record<string, ExamInfo> = {
  'rrb-ntpc': {
    id: 'rrb-ntpc',
    slug: 'rrb-ntpc',
    name: {
      en: 'RRB NTPC CBT-1 (Graduate & 12th)',
      hi: 'आरआरबी एनटीपीसी सीबीटी-1 (स्नातक एवं 12वीं स्तर)',
    },
    authority: 'Railway Recruitment Boards (RRB)',
    officialNotice: 'CEN No. 06/2025 & CEN 05/2024',
    badge: 'Railway Exams',
    description: {
      en: 'Official 100 questions, 90 minutes exam pattern with verified -1/3 negative marking across Mathematics, Reasoning, and General Awareness.',
      hi: 'गणित, तर्कशक्ति और सामान्य जागरूकता पर आधारित 100 प्रश्नों, 90 मिनट और -1/3 नकारात्मक अंकन का आधिकारिक परीक्षा प्रारूप।',
    },
    patternSummary: {
      totalQuestions: 100,
      totalMarks: 100,
      durationMin: 90,
      negativeMarkingText: '-0.33 (1/3 mark)',
      marksPerCorrect: 1,
      negativeMark: 0.3333333333333333,
    },
    patternTable: [
      {
        sectionName: { en: 'General Awareness (GA)', hi: 'सामान्य जागरूकता' },
        questions: 40,
        marks: 40,
        negativeMarkText: '-0.33 (1/3 mark)',
        timeText: '90 Minutes (Composite)',
      },
      {
        sectionName: { en: 'Mathematics', hi: 'गणित' },
        questions: 30,
        marks: 30,
        negativeMarkText: '-0.33 (1/3 mark)',
      },
      {
        sectionName: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
        questions: 30,
        marks: 30,
        negativeMarkText: '-0.33 (1/3 mark)',
      },
    ],
    categoryCutoffs: {
      UR: 74,
      OBC: 68,
      EWS: 63,
      SC: 58,
      ST: 52,
    },
    documentToolUrl: '/rrb-ntpc-signature-resize/',
    documentToolLabel: 'Resize RRB NTPC Signature (30–49 KB)',
  },
  'ssc-cgl': {
    id: 'ssc-cgl',
    slug: 'ssc-cgl',
    name: {
      en: 'SSC CGL Tier-1 (Combined Graduate Level)',
      hi: 'एसएससी सीजीएल टियर-1 (संयुक्त स्नातक स्तर)',
    },
    authority: 'Staff Selection Commission (SSC)',
    officialNotice: 'SSC CGL Examination Notice',
    badge: 'SSC Premier',
    description: {
      en: 'Tier-1 preliminary exam with 100 questions, 60 minutes, and 200 marks (+2 for correct, -0.50 negative marking). 4 core sections: Reasoning, GA, Quant, and English.',
      hi: 'टियर-1 परीक्षा: 100 प्रश्न, 60 मिनट, 200 कुल अंक (+2 सही उत्तर पर, -0.50 नकारात्मक अंकन)। 4 खंड: तर्कशक्ति, सामान्य जागरूकता, गणित और अंग्रेजी।',
    },
    patternSummary: {
      totalQuestions: 100,
      totalMarks: 200,
      durationMin: 60,
      negativeMarkingText: '-0.50 (1/4th penalty)',
      marksPerCorrect: 2,
      negativeMark: 0.50,
    },
    patternTable: [
      {
        sectionName: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
        questions: 25,
        marks: 50,
        negativeMarkText: '-0.50',
        timeText: '60 Minutes (Composite)',
      },
      {
        sectionName: { en: 'General Awareness', hi: 'सामान्य जागरूकता' },
        questions: 25,
        marks: 50,
        negativeMarkText: '-0.50',
      },
      {
        sectionName: { en: 'Quantitative Aptitude', hi: 'मात्रात्मक अभिरुचि (गणित)' },
        questions: 25,
        marks: 50,
        negativeMarkText: '-0.50',
      },
      {
        sectionName: { en: 'English Comprehension', hi: 'अंग्रेजी समझ' },
        questions: 25,
        marks: 50,
        negativeMarkText: '-0.50',
      },
    ],
    categoryCutoffs: {
      UR: 150,
      OBC: 145,
      EWS: 140,
      SC: 126,
      ST: 118,
    },
    documentToolUrl: '/ssc-cgl-photo-signature-resize/',
    documentToolLabel: 'Resize SSC CGL Photo & Signature',
  },
  'ssc-gd': {
    id: 'ssc-gd',
    slug: 'ssc-gd',
    name: {
      en: 'SSC GD Constable (CAPFs, SSF, Rifleman)',
      hi: 'एसएससी जीडी कांस्टेबल (केंद्रीय सशस्त्र पुलिस बल)',
    },
    authority: 'Staff Selection Commission (SSC)',
    officialNotice: 'SSC Constable (GD) Notification',
    badge: 'Defense / Police',
    description: {
      en: 'Official 80 questions, 60 minutes, 160 marks CBT pattern with official revised -0.25 negative marking. Covers Reasoning, GK, Maths, and Hindi/English.',
      hi: 'आधिकारिक 80 प्रश्न, 60 मिनट, 160 अंक का सीबीटी प्रारूप (-0.25 संशोधित नकारात्मक अंकन)। तर्कशक्ति, सामान्य ज्ञान, प्रारंभिक गणित और भाषा शामिल।',
    },
    patternSummary: {
      totalQuestions: 80,
      totalMarks: 160,
      durationMin: 60,
      negativeMarkingText: '-0.25 (1/8th penalty)',
      marksPerCorrect: 2,
      negativeMark: 0.25,
    },
    patternTable: [
      {
        sectionName: { en: 'Part-A: Reasoning', hi: 'भाग-क: सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
        questions: 20,
        marks: 40,
        negativeMarkText: '-0.25',
        timeText: '60 Minutes (Composite)',
      },
      {
        sectionName: { en: 'Part-B: General Knowledge & GA', hi: 'भाग-ख: सामान्य ज्ञान एवं जागरूकता' },
        questions: 20,
        marks: 40,
        negativeMarkText: '-0.25',
      },
      {
        sectionName: { en: 'Part-C: Elementary Mathematics', hi: 'भाग-ग: प्रारंभिक गणित' },
        questions: 20,
        marks: 40,
        negativeMarkText: '-0.25',
      },
      {
        sectionName: { en: 'Part-D: English / Hindi', hi: 'भाग-घ: अंग्रेजी / हिन्दी' },
        questions: 20,
        marks: 40,
        negativeMarkText: '-0.25',
      },
    ],
    categoryCutoffs: {
      UR: 135,
      OBC: 132,
      EWS: 128,
      SC: 120,
      ST: 112,
    },
    documentToolUrl: '/ssc-gd-photo-signature-resize/',
    documentToolLabel: 'Resize SSC GD Photo & Signature',
  },
  'rrb-group-d': {
    id: 'rrb-group-d',
    slug: 'rrb-group-d',
    name: {
      en: 'RRB Group D (RRC Level-1 Post)',
      hi: 'आरआरबी ग्रुप डी (आरआरसी लेवल-1 भर्ती)',
    },
    authority: 'Railway Recruitment Cells (RRC / RRB)',
    officialNotice: 'CEN RRC Level-1 Recruitment',
    badge: 'Railway Control Board',
    description: {
      en: 'Complete 100 questions, 90 minutes CBT examination with verified -1/3 negative marking. 4 sections: General Science (25), Maths (25), Reasoning (30), and General Awareness (20).',
      hi: '100 प्रश्न, 90 मिनट और -1/3 नकारात्मक अंकन की संपूर्ण सीबीटी परीक्षा। सामान्य विज्ञान (25), गणित (25), तर्कशक्ति (30) और समसामयिकी (20)।',
    },
    patternSummary: {
      totalQuestions: 100,
      totalMarks: 100,
      durationMin: 90,
      negativeMarkingText: '-0.33 (1/3 mark)',
      marksPerCorrect: 1,
      negativeMark: 0.3333333333333333,
    },
    patternTable: [
      {
        sectionName: { en: 'General Science', hi: 'सामान्य विज्ञान (10वीं स्तर)' },
        questions: 25,
        marks: 25,
        negativeMarkText: '-0.33 (1/3 mark)',
        timeText: '90 Minutes (Composite)',
      },
      {
        sectionName: { en: 'Mathematics', hi: 'गणित' },
        questions: 25,
        marks: 25,
        negativeMarkText: '-0.33 (1/3 mark)',
      },
      {
        sectionName: { en: 'General Intelligence & Reasoning', hi: 'सामान्य बुद्धिमत्ता एवं तर्कशक्ति' },
        questions: 30,
        marks: 30,
        negativeMarkText: '-0.33 (1/3 mark)',
      },
      {
        sectionName: { en: 'General Awareness on Current Affairs', hi: 'सामान्य जागरूकता एवं समसामयिकी' },
        questions: 20,
        marks: 20,
        negativeMarkText: '-0.33 (1/3 mark)',
      },
    ],
    categoryCutoffs: {
      UR: 68,
      OBC: 63,
      EWS: 58,
      SC: 54,
      ST: 49,
    },
    documentToolUrl: '/rrb-ntpc-signature-resize/',
    documentToolLabel: 'Resize Railway Signature & Photo',
  },
};

export function getExamsList(): ExamInfo[] {
  return Object.values(examsMetadata);
}

export function getExamById(examId: string): ExamInfo | null {
  return examsMetadata[examId] || null;
}

export function getTestsByExam(examId: string): TestManifest[] {
  return testsByExam[examId] || [];
}

export function getMockTestBySlug(slug: string): TestManifest | null {
  return allMockTests[slug] || null;
}

export function getNtpcTests(): TestManifest[] {
  return testsByExam['rrb-ntpc'] || [];
}

export function getMockTestByExamAndSlug(examId: string, slug: string): TestManifest | null {
  const tests = testsByExam[examId] || [];
  return tests.find((t) => t.slug === slug) || null;
}
