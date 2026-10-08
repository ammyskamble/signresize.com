import type { ToolTargetMode } from '../types';

// Synthetic Signature Generator
export const createSampleSignatureData = (text: string, subText: string, width = 600, height = 250): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  ctx.fillStyle = '#FAF7EE';
  ctx.fillRect(0, 0, width, height);

  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, 'rgba(0,0,0,0.04)');
  grad.addColorStop(1, 'rgba(0,0,0,0.01)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = '#111827';
  ctx.lineWidth = 4.5;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  ctx.moveTo(80, 140);
  ctx.bezierCurveTo(110, 60, 160, 60, 150, 160);
  ctx.bezierCurveTo(140, 210, 200, 190, 240, 130);
  ctx.bezierCurveTo(270, 90, 290, 160, 330, 130);
  ctx.bezierCurveTo(360, 110, 380, 150, 420, 120);
  ctx.bezierCurveTo(450, 100, 480, 140, 520, 110);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(110, 185);
  ctx.quadraticCurveTo(300, 215, 490, 175);
  ctx.stroke();

  ctx.font = 'bold 16px monospace';
  ctx.fillStyle = '#475569';
  ctx.fillText(text, 20, 30);
  ctx.font = '12px sans-serif';
  ctx.fillText(subText, 20, 50);

  return canvas.toDataURL('image/jpeg', 0.95);
};

// Synthetic Passport Photo Generator
export const createSamplePhotoData = (name = 'RAHUL SHARMA', dop = '', width = 350, height = 450): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Studio light background with subtle radial gradient
  const bgGrad = ctx.createRadialGradient(width * 0.5, height * 0.35, 30, width * 0.5, height * 0.4, width * 0.7);
  bgGrad.addColorStop(0, '#f8fafc');
  bgGrad.addColorStop(1, '#e2e8f0');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Candidate Shoulders / Formal Suit
  ctx.fillStyle = '#1e293b';
  ctx.beginPath();
  ctx.moveTo(width * 0.05, height);
  ctx.bezierCurveTo(width * 0.1, height * 0.72, width * 0.3, height * 0.65, width * 0.38, height * 0.64);
  ctx.lineTo(width * 0.62, height * 0.64);
  ctx.bezierCurveTo(width * 0.7, height * 0.65, width * 0.9, height * 0.72, width * 0.95, height);
  ctx.closePath();
  ctx.fill();

  // White formal shirt collar / V-neck
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(width * 0.38, height * 0.64);
  ctx.lineTo(width * 0.5, height * 0.78);
  ctx.lineTo(width * 0.62, height * 0.64);
  ctx.closePath();
  ctx.fill();

  // Necktie
  ctx.fillStyle = '#991b1b';
  ctx.beginPath();
  ctx.moveTo(width * 0.47, height * 0.73);
  ctx.lineTo(width * 0.53, height * 0.73);
  ctx.lineTo(width * 0.52, height * 0.95);
  ctx.lineTo(width * 0.48, height * 0.95);
  ctx.closePath();
  ctx.fill();

  // Neck
  ctx.fillStyle = '#f6c197';
  ctx.beginPath();
  ctx.rect(width * 0.42, height * 0.48, width * 0.16, height * 0.18);
  ctx.fill();

  // Neck shadow
  ctx.fillStyle = 'rgba(0,0,0,0.08)';
  ctx.beginPath();
  ctx.arc(width * 0.5, height * 0.48, width * 0.18, 0, Math.PI);
  ctx.fill();

  // Head / Face Oval
  ctx.fillStyle = '#fbd0ab';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.38, width * 0.22, height * 0.23, 0, 0, Math.PI * 2);
  ctx.fill();

  // Ears
  ctx.fillStyle = '#f6c197';
  ctx.beginPath();
  ctx.ellipse(width * 0.27, height * 0.38, width * 0.04, height * 0.07, 0, 0, Math.PI * 2);
  ctx.ellipse(width * 0.73, height * 0.38, width * 0.04, height * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();

  // Dark Groomed Hair
  ctx.fillStyle = '#1e1b18';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.25, width * 0.23, height * 0.14, 0, Math.PI, Math.PI * 2);
  ctx.bezierCurveTo(width * 0.25, height * 0.32, width * 0.25, height * 0.35, width * 0.28, height * 0.32);
  ctx.bezierCurveTo(width * 0.35, height * 0.23, width * 0.65, height * 0.23, width * 0.72, height * 0.32);
  ctx.bezierCurveTo(width * 0.75, height * 0.35, width * 0.75, height * 0.32, width * 0.73, height * 0.25);
  ctx.closePath();
  ctx.fill();

  // Eyebrows
  ctx.strokeStyle = '#2d241e';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.36, height * 0.33);
  ctx.quadraticCurveTo(width * 0.42, height * 0.31, width * 0.46, height * 0.33);
  ctx.moveTo(width * 0.54, height * 0.33);
  ctx.quadraticCurveTo(width * 0.58, height * 0.31, width * 0.64, height * 0.33);
  ctx.stroke();

  // Eyes
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.ellipse(width * 0.41, height * 0.36, width * 0.04, height * 0.022, 0, 0, Math.PI * 2);
  ctx.ellipse(width * 0.59, height * 0.36, width * 0.04, height * 0.022, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#261b14';
  ctx.beginPath();
  ctx.arc(width * 0.41, height * 0.36, width * 0.02, 0, Math.PI * 2);
  ctx.arc(width * 0.59, height * 0.36, width * 0.02, 0, Math.PI * 2);
  ctx.fill();

  // Eye highlights
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(width * 0.418, height * 0.354, width * 0.007, 0, Math.PI * 2);
  ctx.arc(width * 0.598, height * 0.354, width * 0.007, 0, Math.PI * 2);
  ctx.fill();

  // Nose bridge & tip
  ctx.strokeStyle = 'rgba(180, 110, 70, 0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.5, height * 0.35);
  ctx.lineTo(width * 0.505, height * 0.43);
  ctx.quadraticCurveTo(width * 0.5, height * 0.445, width * 0.48, height * 0.435);
  ctx.moveTo(width * 0.505, height * 0.43);
  ctx.quadraticCurveTo(width * 0.51, height * 0.445, width * 0.52, height * 0.435);
  ctx.stroke();

  // Closed Neutral Smile
  ctx.strokeStyle = '#a84e32';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(width * 0.44, height * 0.49);
  ctx.quadraticCurveTo(width * 0.5, height * 0.505, width * 0.56, height * 0.49);
  ctx.stroke();

  // Name & Date on Photo (DoP) banner
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, height - 32, width, 32);
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 11px sans-serif';
  ctx.textAlign = 'center';
  const displayDate = dop || '08/09/2026';
  ctx.fillText(`${name.toUpperCase()} • DOP: ${displayDate}`, width / 2, height - 12);

  return canvas.toDataURL('image/jpeg', 0.95);
};

// Synthetic Marksheet / Document Generator
export const createSampleDocumentData = (title = 'CENTRAL BOARD OF SECONDARY EDUCATION', docType = 'MARKS STATEMENT & CERTIFICATE', width = 500, height = 700): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // Ivory Certificate Paper Background
  ctx.fillStyle = '#fafaf9';
  ctx.fillRect(0, 0, width, height);

  // Formal Outer Double Border
  ctx.strokeStyle = '#0284c7';
  ctx.lineWidth = 3;
  ctx.strokeRect(16, 16, width - 32, height - 32);
  ctx.strokeStyle = '#e0f2fe';
  ctx.lineWidth = 1;
  ctx.strokeRect(22, 22, width - 44, height - 44);

  // Emblem Header
  ctx.fillStyle = '#0369a1';
  ctx.beginPath();
  ctx.arc(width / 2, 60, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 16px serif';
  ctx.textAlign = 'center';
  ctx.fillText('★', width / 2, 66);

  // Institution Title
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 14px serif';
  ctx.fillText(title, width / 2, 104);

  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = '#64748b';
  ctx.fillText(docType.toUpperCase(), width / 2, 122);

  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(40, 134);
  ctx.lineTo(width - 40, 134);
  ctx.stroke();

  // Candidate Details Section
  ctx.textAlign = 'left';
  ctx.font = '11px sans-serif';
  ctx.fillStyle = '#334155';

  const leftX = 45;
  const rightX = 275;

  ctx.fillText('Candidate Name:', leftX, 162);
  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('RAHUL SHARMA', leftX + 110, 162);

  ctx.font = '11px sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText('Roll Number:', rightX, 162);
  ctx.font = 'bold 11px monospace';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('240891402', rightX + 85, 162);

  ctx.font = '11px sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText("Mother's Name:", leftX, 186);
  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('SUNITA SHARMA', leftX + 110, 186);

  ctx.font = '11px sans-serif';
  ctx.fillStyle = '#334155';
  ctx.fillText("Father's Name:", rightX, 186);
  ctx.font = 'bold 11px sans-serif';
  ctx.fillStyle = '#0f172a';
  ctx.fillText('RAMESH SHARMA', rightX + 85, 186);

  // Marks Table Grid
  const tableY = 215;
  const tableW = width - 90;
  const colX = [45, 115, 280, 360, 435];

  ctx.fillStyle = '#f1f5f9';
  ctx.fillRect(45, tableY, tableW, 26);
  ctx.strokeStyle = '#94a3b8';
  ctx.lineWidth = 1;
  ctx.strokeRect(45, tableY, tableW, 190);

  // Table Headers
  ctx.fillStyle = '#0f172a';
  ctx.font = 'bold 10px sans-serif';
  ctx.fillText('CODE', colX[0] + 8, tableY + 17);
  ctx.fillText('SUBJECT NAME', colX[1] + 8, tableY + 17);
  ctx.fillText('MAX', colX[2] + 8, tableY + 17);
  ctx.fillText('OBTAINED', colX[3] + 8, tableY + 17);
  ctx.fillText('GRADE', colX[4] + 8, tableY + 17);

  // Rows
  const subjects = [
    { code: '101', name: 'ENGLISH COMMUNICATIVE', max: '100', marks: '091', grade: 'A1' },
    { code: '041', name: 'MATHEMATICS STANDARD', max: '100', marks: '095', grade: 'A1' },
    { code: '086', name: 'SCIENCE (THEORY & PRAC)', max: '100', marks: '088', grade: 'A2' },
    { code: '087', name: 'SOCIAL SCIENCE', max: '100', marks: '092', grade: 'A1' },
    { code: '165', name: 'COMPUTER APPLICATIONS', max: '100', marks: '096', grade: 'A1' }
  ];

  subjects.forEach((sub, idx) => {
    const rowY = tableY + 26 + (idx + 1) * 28;
    ctx.strokeStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(45, rowY - 10);
    ctx.lineTo(45 + tableW, rowY - 10);
    ctx.stroke();

    ctx.font = '10px monospace';
    ctx.fillStyle = '#334155';
    ctx.fillText(sub.code, colX[0] + 8, rowY + 5);
    ctx.font = '10px sans-serif';
    ctx.fillText(sub.name, colX[1] + 8, rowY + 5);
    ctx.font = '10px monospace';
    ctx.fillText(sub.max, colX[2] + 10, rowY + 5);
    ctx.font = 'bold 10px monospace';
    ctx.fillStyle = '#0f172a';
    ctx.fillText(sub.marks, colX[3] + 16, rowY + 5);
    ctx.fillStyle = '#0284c7';
    ctx.fillText(sub.grade, colX[4] + 12, rowY + 5);
  });

  // Overall Result Banner
  ctx.fillStyle = '#ecfdf5';
  ctx.strokeStyle = '#10b981';
  ctx.fillRect(45, 415, tableW, 28);
  ctx.strokeRect(45, 415, tableW, 28);
  ctx.fillStyle = '#047857';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('FINAL RESULT: PASSED (OVERALL: 92.4% - GRADE A1)', 60, 433);

  // Official Circular Stamp Seal
  ctx.save();
  ctx.translate(120, 530);
  ctx.rotate(-0.08);
  ctx.strokeStyle = '#be123c';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, 0, 40, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 34, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#be123c';
  ctx.font = 'bold 7px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('SECONDARY EDUCATION', 0, -20);
  ctx.fillText('OFFICIAL CERTIFICATE', 0, 22);
  ctx.font = 'bold 13px serif';
  ctx.fillText('★ SEAL ★', 0, 4);
  ctx.restore();

  // Authorized Signatory
  ctx.textAlign = 'center';
  ctx.font = 'italic 18px cursive';
  ctx.fillStyle = '#1e3a8a';
  ctx.fillText('K. S. Narayanan', 380, 530);
  ctx.strokeStyle = '#1e3a8a';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(310, 540);
  ctx.quadraticCurveTo(380, 555, 450, 538);
  ctx.stroke();

  ctx.font = 'bold 10px sans-serif';
  ctx.fillStyle = '#475569';
  ctx.fillText('CONTROLLER OF EXAMINATIONS', 380, 565);

  return canvas.toDataURL('image/jpeg', 0.95);
};

// Universal Sample Factory
export const createSampleDataForMode = (
  mode: ToolTargetMode,
  title?: string,
  sub?: string
): { dataUrl: string; width: number; height: number; filename: string; size: number } => {
  if (mode === 'photo') {
    const dataUrl = createSamplePhotoData('RAHUL SHARMA', '', 350, 450);
    return { dataUrl, width: 350, height: 450, filename: 'sample_passport_photo', size: 55000 };
  }
  if (mode === 'document') {
    const dataUrl = createSampleDocumentData('CENTRAL BOARD OF SECONDARY EDUCATION', 'Marksheet Certificate', 500, 700);
    return { dataUrl, width: 500, height: 700, filename: 'sample_marksheet_document', size: 145000 };
  }
  const dataUrl = createSampleSignatureData(title || 'Sample Signature', sub || 'Candidate Form Spec', 600, 250);
  return { dataUrl, width: 600, height: 250, filename: 'sample_candidate_signature', size: 45200 };
};
