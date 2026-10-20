import type { ExamPreset, ToolTargetMode } from '../types';

export interface ComplianceItem {
  icon: string;
  title: string;
  description: string;
  severity: 'danger' | 'warning' | 'info';
}

export interface ComplianceAudit {
  examName: string;
  title: string;
  badge: string;
  badgeColor: 'rose' | 'amber' | 'emerald' | 'blue';
  description: string;
  statusWarning: string;
  items: ComplianceItem[];
  officialSource?: string;
  officialUrl?: string;
  actionType?: 'makeBackgroundWhite' | 'cleanPaper' | 'inspectCrop';
}

export function getComplianceAudit(preset: ExamPreset | null, mode: ToolTargetMode): ComplianceAudit {
  // Source-scoped presets must not inherit an older authority-wide rule set.
  if (preset?.portalExactSpecsVerified === false) {
    return {
      examName: preset.shortCode,
      title: 'Review file settings and the active notice',
      badge: 'NOTICE CHECK REQUIRED',
      badgeColor: 'amber',
      description: 'Local checks compare this export with your selected preparation preset. They do not determine government-portal acceptance.',
      statusWarning: 'Verify the active notice',
      items: [
        { icon: '📄', title: 'Source and cycle', description: preset.notes, severity: 'warning' },
        { icon: '📏', title: 'Tool settings', description: `${preset.widthPx} × ${preset.heightPx} px, ${preset.minKb}–${preset.maxKb} KB, ${preset.format}. Pixel defaults are not an official mandate unless the source says so.`, severity: 'info' },
        { icon: '🔎', title: 'Manual image review', description: 'Inspect the complete image, readability and application preview yourself. Local checks do not verify identity or authenticity.', severity: 'info' },
      ],
      officialSource: preset.sourceLabel,
      officialUrl: preset.sourceUrl,
      actionType: 'inspectCrop',
    };
  }
  const presetId = preset?.id?.toLowerCase() || '';
  const presetName = preset?.name?.toLowerCase() || '';
  const authority = preset?.authority?.toLowerCase() || '';
  const category = preset?.category || '';

  // 1. INDIAN COAST GUARD (CGEPT)
  const isCoastGuard = presetId.includes('coast-guard') || presetName.includes('coast guard') || authority.includes('coast guard');
  if (isCoastGuard) {
    if (mode === 'photo') {
      return {
        examName: 'Indian Coast Guard',
        title: 'Coast Guard Photo Rejection Warning: What Is Missing?',
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'The Join Indian Coast Guard (CGEPT) portal strictly rejects normal studio photos. Applications missing the mandatory chalkboard slate are cancelled at Stage-I scrutiny. Verify what is missing below:',
        statusWarning: 'Missing Slate & DoP',
        items: [
          {
            icon: '❌',
            title: '1. Missing Physical Black Slate',
            description: 'You must physically hold a black chalkboard/slate in front of your chest while photographed. Normal photos or digital overlays are disqualified.',
            severity: 'danger',
          },
          {
            icon: '❌',
            title: '2. Missing White Chalk Name & Date (DoP)',
            description: 'Full NAME (matching 10th certificate) and DATE OF PHOTO must be written in white chalk in CAPITAL letters on the slate.',
            severity: 'danger',
          },
          {
            icon: '👓',
            title: '3. Spectacles / Glasses Prohibited',
            description: 'Candidates wearing spectacles/glasses are disqualified. Both eyes and ears must be uncovered. Retake without glasses.',
            severity: 'warning',
          },
          {
            icon: '🎨',
            title: '4. Plain Light Background & File Name',
            description: 'Must have a plain light/white background (10–50 KB). Save file strictly as Passport_Photograph.jpg prior to CGEPT upload.',
            severity: 'warning',
          },
        ],
        officialSource: 'Official CGEPT Notification Clause (aa)',
        officialUrl: 'https://joinindiancoastguard.cdac.in/cgept/',
        actionType: 'makeBackgroundWhite',
      };
    } else if (mode === 'signature') {
      return {
        examName: 'Indian Coast Guard',
        title: 'Coast Guard Signature Rejection Warning: What Is Missing?',
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'Indian Coast Guard portal automatically disqualifies signatures in capital letters or uploaded under incorrect file names. Verify your signature:',
        statusWarning: 'Check Handwriting & File Name',
        items: [
          {
            icon: '🖋️',
            title: '1. Running Handwriting Only (No Block Letters)',
            description: 'Must be signed in continuous running cursive handwriting. Writing your name in CAPITAL/BLOCK letters triggers 100% disqualification.',
            severity: 'danger',
          },
          {
            icon: '🖊️',
            title: '2. Black or Dark Blue Ink Mandate',
            description: 'Sign with a black or dark blue ink ballpoint pen on clean, unruled white paper without pencil or gel smears.',
            severity: 'warning',
          },
          {
            icon: '📏',
            title: '3. Strict File Bounds (10 KB – 50 KB)',
            description: 'Output dimensions must match 140 × 60 pixels (~4.0 × 2.0 cm) between 10.0 KB and 50.0 KB in JPG format.',
            severity: 'info',
          },
          {
            icon: '💾',
            title: '4. Mandatory File Name: Signature.jpg',
            description: 'The CGEPT portal rejects non-standard filenames. Save file strictly as Signature.jpg prior to uploading.',
            severity: 'warning',
          },
        ],
        officialSource: 'Official CGEPT Notification Clause (aa)',
        officialUrl: 'https://joinindiancoastguard.cdac.in/cgept/',
        actionType: 'cleanPaper',
      };
    } else {
      const isThumb = presetId.includes('thumb');
      return {
        examName: 'Indian Coast Guard',
        title: isThumb ? 'Coast Guard Left Thumb (LTI) Compliance Audit' : 'Coast Guard Document Scan Verification',
        badge: 'PORTAL NORMS',
        badgeColor: 'blue',
        description: isThumb
          ? 'Clear left-hand thumb biometric ridges are required for physical verification at CGEPT test centers.'
          : 'Indian Coast Guard mandates scans from ORIGINAL certificates only. Photocopies or blurred scans trigger cancellation.',
        statusWarning: isThumb ? 'Verify LTI Ridges' : 'Scanned from Originals Only',
        items: isThumb
          ? [
              { icon: '👆', title: '1. Left-Hand Thumb Only', description: 'Left thumb stamped with blue or black stamp pad ink on clean white paper.', severity: 'danger' },
              { icon: '🔬', title: '2. Sharp Biometric Ridges', description: 'No ink smudges, double impressions, or faint prints. Ridge detail must be sharp.', severity: 'warning' },
              { icon: '📏', title: '3. Square Canvas 240×240 px', description: 'Strictly 10 KB to 50 KB JPG. 1:1 aspect ratio.', severity: 'info' },
              { icon: '💾', title: '4. Save as Thumb_Impression.jpg', description: 'Upload file must be named Thumb_Impression.jpg on CGEPT portal.', severity: 'warning' },
            ]
          : [
              { icon: '📄', title: '1. Scanned From Originals Only', description: '10th/12th marksheets and category certificates must be scanned from original documents, NOT photocopies.', severity: 'danger' },
              { icon: '🌐', title: '2. English or Hindi Only', description: 'Regional language certificates require an attached certified English/Hindi translation.', severity: 'warning' },
              { icon: '📏', title: '3. File Limits: 50 KB to 150 KB', description: 'Strictly 50.0 KB to 150.0 KB in JPG/JPEG format.', severity: 'info' },
              { icon: '🔍', title: '4. Complete 4-Corner View', description: 'Ensure candidate name, roll number, seals, and signatures are 100% legible without cut-off borders.', severity: 'info' },
            ],
        officialSource: 'Official CGEPT Notification Clause (aa)',
        officialUrl: 'https://joinindiancoastguard.cdac.in/cgept/',
      };
    }
  }

  // 2. WBPSC (West Bengal Public Service Commission - WBCS, Clerkship, Miscellaneous)
  const isWbpsc = presetId.includes('wbpsc') || presetName.includes('wbpsc') || authority.includes('wbpsc') || presetId.includes('wbcs') || presetName.includes('wbcs');
  if (isWbpsc) {
    if (mode === 'photo') {
      return {
        examName: 'WBPSC (West Bengal PSC)',
        title: 'WBPSC Photo Rejection Warning: What Is Missing?',
        badge: 'PORTAL VALIDATION RISK',
        badgeColor: 'rose',
        description: 'WBPSC portal (psc.wb.gov.in & wbpsc.ucanapply.com) automatically rejects photographs that deviate from 138×177 pixels or 20–100 KB file bounds. Verify below:',
        statusWarning: 'Check Dimensions & Background',
        items: [
          {
            icon: '📏',
            title: '1. Exact 138 × 177 Pixels (3.5 × 4.5 cm)',
            description: 'WBPSC OTR validation strictly enforces 138 × 177 px. Deviating pixel dimensions trigger "Invalid Image Resolution" portal errors.',
            severity: 'danger',
          },
          {
            icon: '⚖️',
            title: '2. Strict File Bounds (20 KB – 100 KB)',
            description: 'Must be between 20.0 KB and 100.0 KB in JPG/JPEG format. Files under 20 KB are blocked by the upload validator.',
            severity: 'danger',
          },
          {
            icon: '🎨',
            title: '3. Spotless White or Light Plain Background',
            description: 'Backdrop must be spotless white or uniform light colored. Dark shadows, textured wallpapers, or domestic backgrounds cause rejection.',
            severity: 'warning',
          },
          {
            icon: '👓',
            title: '4. Full Facial View (75–80% Face)',
            description: 'Both eyes, ears, and forehead clearly visible with neutral expression. No sunglasses, tinted glasses, or caps.',
            severity: 'warning',
          },
        ],
        officialSource: 'WBPSC OTR & Application Guidelines',
        officialUrl: 'https://psc.wb.gov.in/',
        actionType: 'makeBackgroundWhite',
      };
    } else if (mode === 'signature') {
      return {
        examName: 'WBPSC (West Bengal PSC)',
        title: 'WBPSC Signature Rejection Warning: What Is Missing?',
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'The WBPSC application engine enforces strict 10 KB to 20 KB file bounds and immediately cancels signatures written in BLOCK/CAPITAL letters. Verify below:',
        statusWarning: 'Check 10–20 KB & Running Handwriting',
        items: [
          {
            icon: '🖋️',
            title: '1. Running Cursive Handwriting Only (NO CAPITALS)',
            description: 'Must be signed in running handwriting. Signing in BLOCK / CAPITAL letters causes immediate cancellation of candidature.',
            severity: 'danger',
          },
          {
            icon: '⚖️',
            title: '2. Strict 10 KB to 20 KB Clamping',
            description: 'The WBPSC server strictly rejects files below 10.0 KB and above 20.0 KB. Ensure export shows between 10.0 KB and 19.9 KB.',
            severity: 'danger',
          },
          {
            icon: '📏',
            title: '3. 140 × 60 px (or 138 × 59 px) Ratio',
            description: 'Dimensions must conform to 140 × 60 px (~4.0 × 2.0 cm) or 138 × 59 px in JPG/JPEG format.',
            severity: 'info',
          },
          {
            icon: '🖊️',
            title: '4. Black or Dark Blue Ballpoint Ink on Plain Paper',
            description: 'Sign on unruled clean white paper. Ruled notebook lines or faint pencil marks trigger portal rejection.',
            severity: 'warning',
          },
        ],
        officialSource: 'WBPSC Online Application Upload Guidelines',
        officialUrl: 'https://wbpsc.ucanapply.com/',
        actionType: 'cleanPaper',
      };
    } else {
      return {
        examName: 'WBPSC (West Bengal PSC)',
        title: 'WBPSC Document & Madhyamik Admit Card Verification',
        badge: 'PORTAL NORMS',
        badgeColor: 'blue',
        description: 'WBPSC mandates clear scans of Madhyamik (10th) Admit Card / Pass Certificate for mandatory Date of Birth proof, and category certificates for reservation quota.',
        statusWarning: '100–300 KB Clear Scan',
        items: [
          {
            icon: '📄',
            title: '1. Madhyamik (10th) Admit Card for Age Proof',
            description: 'WBPSC strictly requires Madhyamik Admit Card or 10th Board Certificate as sole proof of Date of Birth (DoB).',
            severity: 'danger',
          },
          {
            icon: '🏛️',
            title: '2. West Bengal Competent Authority Caste Certificate',
            description: 'SC/ST/OBC-A/OBC-B certificates must be issued by a Sub-Divisional Officer (SDO) or Kolkata DWO in West Bengal.',
            severity: 'warning',
          },
          {
            icon: '📏',
            title: '3. File Limits: 100 KB to 300 KB',
            description: 'Upload file size must be between 100.0 KB and 300.0 KB in JPG or PDF format.',
            severity: 'info',
          },
          {
            icon: '🔍',
            title: '4. All 4 Corners & Official Seals Visible',
            description: 'Full document border, official signature, government emblem, and registration numbers must be 100% legible.',
            severity: 'info',
          },
        ],
        officialSource: 'WBPSC Document Verification Norms',
        officialUrl: 'https://psc.wb.gov.in/',
      };
    }
  }

  // 3. UPSSSC (PET, Lekhpal, VDO, Junior Assistant)
  const isUpsssc = presetId.includes('upsssc') || presetName.includes('upsssc') || authority.includes('upsssc') || presetId.includes('pet');
  if (isUpsssc) {
    if (mode === 'photo') {
      return {
        examName: 'UPSSSC PET',
        title: 'UPSSSC PET Photo Compliance Audit: What Is Missing?',
        badge: 'PORTAL SCRUTINY',
        badgeColor: 'amber',
        description: 'UPSSSC PET portal strictly validates passport photographs. Blurred photos, dark backgrounds, or side profiles cause rejection during document scrutiny:',
        statusWarning: 'White/Light Grey BG · 50–100 KB',
        items: [
          {
            icon: '🎨',
            title: '1. Plain White or Light Grey Background',
            description: 'Photo must be taken against a plain white or light grey background (सादा सफेद या हल्के ग्रे रंग की पृष्ठभूमि). No outdoor or patterned backgrounds.',
            severity: 'danger',
          },
          {
            icon: '👤',
            title: '2. 70% Face Coverage & Frontal Look',
            description: 'Candidate face must cover at least 70% of the canvas looking straight at the camera. Both eyes and both ears must be clearly visible.',
            severity: 'warning',
          },
          {
            icon: '👓',
            title: '3. Spectacles & Headwear Restrictions',
            description: 'Eyes must be clear without glare or tinted lenses. Caps, hats, and dark goggles are strictly prohibited.',
            severity: 'danger',
          },
          {
            icon: '📏',
            title: '4. File Limits: 50 KB to 100 KB (240 × 320 px)',
            description: 'Strictly 50.0 KB to 100.0 KB in JPG format (3.5 × 4.5 cm). Files below 50 KB or over 100 KB are rejected by upsssc.gov.in.',
            severity: 'info',
          },
        ],
        officialSource: 'UPSSSC PET Official Advertisement Clause 9.2',
        officialUrl: 'https://upsssc.gov.in',
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: 'UPSSSC PET',
        title: 'UPSSSC PET Signature Compliance Audit: What Is Missing?',
        badge: 'STRICT CLAUSE 9.3',
        badgeColor: 'rose',
        description: 'UPSSSC PET Advertisement Clause 9.3 strictly rejects signatures that lack the candidate name in Hindi or are signed on lined notebook paper. Verify your uploaded signature:',
        statusWarning: 'Hindi Name Underneath · Unruled Paper',
        items: [
          {
            icon: '✍️',
            title: '1. Dual-Format: English Sign + Full Hindi Name Below',
            description: 'Candidate must sign in English at the top, and write their full name in Hindi script (देवनागरी लिपि में अपना पूरा नाम) clearly underneath inside the box.',
            severity: 'danger',
          },
          {
            icon: '📄',
            title: '2. Plain White Unruled Paper Only (No Notebook Lines)',
            description: 'Must be signed on clean, plain white unruled paper (कागज सादा और सफेद बिना लाइन वाला). Using lined notebook or checked register paper causes instant form cancellation during scrutiny.',
            severity: 'danger',
          },
          {
            icon: '🖊️',
            title: '3. Black or Dark Blue Ballpoint Ink Only',
            description: 'Sign with a clear dark blue or black ballpoint pen. Red ink, green ink, pencil, or faint gel pen strokes are rejected.',
            severity: 'warning',
          },
          {
            icon: '📏',
            title: '4. 140 × 60 px (Strictly 30.0 KB – 50.0 KB JPG)',
            description: 'UPSSSC PET portal enforces a 30 KB minimum floor and 50 KB maximum ceiling. Files under 30 KB or over 50 KB are rejected.',
            severity: 'info',
          },
        ],
        officialSource: 'UPSSSC PET Notification Clause 9.3',
        officialUrl: 'https://upsssc.gov.in',
        actionType: 'cleanPaper',
      };
    }
  }

  // 3. STAFF SELECTION COMMISSION (SSC - CGL, CHSL, MTS, CPO, GD)
  const isBssc = presetId.includes('bssc') || presetName.includes('bssc') || authority.includes('bssc');
  const isSsc = !isUpsssc && !isBssc && (category === 'SSC' || presetId.includes('ssc') || presetName.includes('ssc') || authority.includes('staff selection'));
  if (isSsc) {
    if (mode === 'photo') {
      return {
        examName: 'SSC CGL / SSC',
        title: 'SSC Photo Rejection Warning: What Is Missing?',
        badge: 'AUTOMATED AI SCRUTINY',
        badgeColor: 'rose',
        description: 'The new Staff Selection Commission (SSC) portal uses automated facial-recognition AI that instantly rejects photos for spectacles, improper lighting, or background violations. Verify your photo below:',
        statusWarning: 'No Glasses / White BG',
        items: [
          {
            icon: '👓',
            title: '1. Spectacles & Glasses 100% BANNED',
            description: 'Even prescription vision glasses are strictly disqualified on SSC. If your photo shows glasses or lens glare, your application will be cancelled.',
            severity: 'danger',
          },
          {
            icon: '🧢',
            title: '2. Caps, Hats & Headwear Prohibited',
            description: 'No caps, hats, dark glasses, or masks. Religious headgear is allowed only if forehead, nose, cheeks, and chin are completely visible.',
            severity: 'danger',
          },
          {
            icon: '🎨',
            title: '3. Pure White / Plain Light Background',
            description: 'Must have a clean white background. Outdoor photos, selfies, wall patterns, or shadows behind the head cause instant rejection.',
            severity: 'warning',
          },
          {
            icon: '📏',
            title: '4. 20 KB to 50 KB (3.5 × 4.5 cm)',
            description: 'Exact 200 × 230 px proportions with face occupying 75–80% of canvas. Both ears must be clearly uncovered.',
            severity: 'info',
          },
        ],
        officialSource: 'SSC Official Notice Clause 8.2 (Facial AI Norms)',
        officialUrl: 'https://ssc.gov.in',
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: 'SSC CGL / SSC',
        title: 'SSC Signature Rejection Warning: What Is Missing?',
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'SSC cancels thousands of candidate applications every year for signature disqualification traps. Verify your uploaded signature:',
        statusWarning: 'Black Ink / Running Script',
        items: [
          {
            icon: '🖋️',
            title: '1. CAPITAL / BLOCK LETTERS STRICTLY DISQUALIFIED',
            description: 'Signing full name in capital block letters (e.g. "RAHUL SHARMA") is completely invalid and triggers direct application rejection.',
            severity: 'danger',
          },
          {
            icon: '🖊️',
            title: '2. BLACK INK PEN MANDATORY',
            description: 'SSC mandates a black ballpoint pen on plain white paper. Blue ink or faint gel pen strokes are flagged by OCR scanners.',
            severity: 'danger',
          },
          {
            icon: '📏',
            title: '3. 140 × 60 px (Strictly 10.0 KB – 20.0 KB)',
            description: 'The file size must be between 10.0 KB and 20.0 KB in JPG format. Files below 10 KB or above 20 KB are blocked by ssc.gov.in.',
            severity: 'info',
          },
          {
            icon: '📄',
            title: '4. Plain White Unruled Paper Only',
            description: 'Never sign on lined or checked notebook paper. Ensure high contrast without phone shadow across the paper.',
            severity: 'warning',
          },
        ],
        officialSource: 'SSC Examination Notice Annexure-III',
        officialUrl: 'https://ssc.gov.in',
        actionType: 'cleanPaper',
      };
    }
  }

  // 3. UPSC (CIVIL SERVICES, NDA, CDS, CMS, OTR)
  const isUpsc = category === 'UPSC' || presetId.includes('upsc') || presetName.includes('upsc') || authority.includes('union public');
  if (isUpsc) {
    if (mode === 'photo') {
      return {
        examName: 'UPSC CSE / OTR',
        title: 'UPSC Photo Compliance Audit: What Is Missing?',
        badge: 'OTR COMPLIANCE',
        badgeColor: 'amber',
        description: 'UPSC One Time Registration (OTR) rules strictly govern candidate photograph verification. Failure to comply leads to admit card cancellation:',
        statusWarning: 'Name & Date Required',
        items: [
          {
            icon: '🏷️',
            title: '1. Candidate Name & Date of Photo (DoP)',
            description: 'Your full name and the exact date the photo was taken (within 10 days of notification) must be legibly printed at the bottom of the photo.',
            severity: 'danger',
          },
          {
            icon: '👤',
            title: '2. Face Occupying 3/4th (75%) of Canvas',
            description: 'Candidate face must cover three-fourths of the image area looking directly into the camera against a pure white background.',
            severity: 'warning',
          },
          {
            icon: '👓',
            title: '3. Clear Eye Contact & No Glare',
            description: 'Spectacles allowed only if lenses are anti-reflective with no glare, reflections, or tinted glass obscuring candidate eyes.',
            severity: 'warning',
          },
          {
            icon: '📏',
            title: '4. 350 × 350 px (20 KB – 300 KB)',
            description: 'Recommended between 20 KB and 100 KB in JPG format. Clear pixel resolution without blur.',
            severity: 'info',
          },
        ],
        officialSource: 'UPSC OTR Portal Guidelines Clause 3(b)',
        officialUrl: 'https://upsconline.nic.in',
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: 'UPSC CSE / OTR',
        title: 'UPSC Signature Compliance Audit: What Is Missing?',
        badge: 'OTR NORMS',
        badgeColor: 'blue',
        description: 'UPSC portal scans candidate signatures for identity verification in all examination tiers. Ensure full compliance:',
        statusWarning: 'Black Ink / Running Script',
        items: [
          {
            icon: '🖊️',
            title: '1. Black Ink Pen Mandate',
            description: 'UPSC instructions state candidate must sign with a black ink pen on clean unruled white sheet.',
            severity: 'danger',
          },
          {
            icon: '🖋️',
            title: '2. Natural Running Handwriting Only',
            description: 'Signatures in capital letters are disqualified. Use your natural cursive application signature.',
            severity: 'danger',
          },
          {
            icon: '📏',
            title: '3. 350 × 350 px or 140 × 60 px (20 KB – 300 KB)',
            description: 'Optimal size: 20 KB to 50 KB in JPG format with clear ink contrast and no dark shadows.',
            severity: 'info',
          },
          {
            icon: '🔍',
            title: '4. No Cropped Signature Strokes',
            description: 'Signature must be centered in the canvas box without touching the top, bottom, or side borders.',
            severity: 'warning',
          },
        ],
        officialSource: 'UPSC Instructions to Candidates',
        officialUrl: 'https://upsconline.nic.in',
        actionType: 'cleanPaper',
      };
    }
  }

  // 4. BANKING & INSURANCE (IBPS, SBI, RBI, NICL AO)
  const isBanking = category === 'Banking' || category === 'PSU & Regulators' || presetId.includes('ibps') || presetId.includes('sbi') || presetId.includes('rbi') || presetId.includes('nicl') || presetName.includes('ibps') || presetName.includes('sbi') || presetName.includes('nicl');
  if (isBanking) {
    if (mode === 'photo') {
      return {
        examName: preset?.shortCode || 'Banking Exam',
        title: `${preset?.shortCode || 'Banking'} Photo Rejection Warning: What Is Missing?`,
        badge: 'IBPS SCRUTINY',
        badgeColor: 'amber',
        description: 'Bank recruitment portals (IBPS / SBI / NICL) cancel registrations with unclear or non-compliant passport photos:',
        statusWarning: 'White BG / Neutral Face',
        items: [
          { icon: '📸', title: '1. Recent Color Passport Photo', description: '200 × 230 px (~3.5 × 4.5 cm) taken recently with a relaxed neutral face looking straight.', severity: 'danger' },
          { icon: '🎨', title: '2. Light or Pure White Background', description: 'Background must be plain light or white. Dark, textured, or colored backgrounds are disqualified.', severity: 'danger' },
          { icon: '👓', title: '3. No Red-Eye, Caps or Dark Glasses', description: 'Eyes must be open and clearly visible. Red-eye reflections or tinted sunglasses are rejected.', severity: 'warning' },
          { icon: '📏', title: '4. Strictly 20.0 KB to 50.0 KB JPG', description: 'Files below 20 KB or above 50 KB are rejected by the IBPS portal upload gateway.', severity: 'info' },
        ],
        officialSource: 'IBPS Common Recruitment Process (CRP) Handout',
        officialUrl: 'https://ibps.in',
        actionType: 'makeBackgroundWhite',
      };
    } else if (mode === 'signature') {
      return {
        examName: preset?.shortCode || 'Banking Exam',
        title: `${preset?.shortCode || 'Banking'} Signature Rejection Warning: What Is Missing?`,
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'IBPS strictly disqualifies signatures in capital letters or signed in blue ink during application scrutiny. Check what is missing:',
        statusWarning: 'Black Ink / Running Script',
        items: [
          { icon: '🖋️', title: '1. CAPITAL LETTERS WILL NOT BE ACCEPTED', description: 'IBPS notification explicitly states: "Signatures in CAPITAL LETTERS will not be accepted."', severity: 'danger' },
          { icon: '🖊️', title: '2. BLACK INK BALLPOINT PEN ONLY', description: 'Sign strictly with a black ink ballpoint pen on plain white paper. Blue ink is disqualified.', severity: 'danger' },
          { icon: '📏', title: '3. Strictly 10.0 KB to 20.0 KB (140 × 60 px)', description: 'Must be within 10.0 KB to 20.0 KB in JPG format (~4.0 × 2.0 cm).', severity: 'info' },
          { icon: '📄', title: '4. Clean White Sheet Without Creases', description: 'Ensure pure white background with clean handwriting strokes and no yellow tint.', severity: 'warning' },
        ],
        officialSource: 'IBPS Notification Section - Guidelines for Scanning',
        officialUrl: 'https://ibps.in',
        actionType: 'cleanPaper',
      };
    } else {
      const isThumb = presetId.includes('thumb');
      return {
        examName: preset?.shortCode || 'Banking Exam',
        title: isThumb ? 'IBPS / NICL Left Thumb Impression (LTI) Checklist' : 'Handwritten Declaration Compliance Checklist',
        badge: 'MANDATORY DOCUMENT',
        badgeColor: 'blue',
        description: isThumb
          ? 'Clear fingerprint ridge detail is verified against candidate biometrics at exam centers.'
          : 'Handwritten declaration must follow official verbatim text in candidate\'s own hand with BLACK INK.',
        statusWarning: isThumb ? 'Verify LTI Ridges' : 'Black Ink / Not Capital Letters',
        items: isThumb
          ? [
              { icon: '👆', title: '1. Left Thumb Impression (LTI)', description: 'Left thumb stamped with blue or black stamp pad ink on clean white paper.', severity: 'danger' },
              { icon: '🔬', title: '2. Sharp Biometric Ridges', description: 'No smudged ink or excessive pressure. Ridges must be clearly identifiable.', severity: 'warning' },
              { icon: '📏', title: '3. 240 × 240 px (20 KB – 50 KB JPG)', description: 'Square 1:1 aspect ratio strictly between 20.0 KB and 50.0 KB.', severity: 'info' },
              { icon: '🔍', title: '4. No Background Shadows', description: 'Clean white paper around the impression without smudges.', severity: 'info' },
            ]
          : [
              { icon: '📝', title: '1. Written in Candidate\'s Own Hand', description: 'Must be written by the applicant in English using a Black Ink Pen on white paper.', severity: 'danger' },
              { icon: '❌', title: '2. CAPITAL LETTERS STRICTLY DISQUALIFIED', description: 'Declarations written in CAPITAL / BLOCK LETTERS or typed on computer are 100% rejected.', severity: 'danger' },
              { icon: '📜', title: '3. Verbatim Declaration Text', description: '"I, (Name), hereby declare that all the information submitted by me in the application form is correct, true and valid..."', severity: 'warning' },
              { icon: '📏', title: '4. 800 × 400 px (50 KB – 100 KB JPG)', description: 'Strictly between 50.0 KB and 100.0 KB in JPG format (10 × 5 cm).', severity: 'info' },
            ],
        officialSource: 'IBPS Official Examination Notice',
        officialUrl: 'https://ibps.in',
      };
    }
  }

  // 5. RAILWAY RECRUITMENT BOARD (RRB - NTPC, GROUP D, ALP, TECHNICIAN)
  const isRailways = category === 'Railways' || presetId.includes('rrb') || presetName.includes('rrb') || presetName.includes('railway') || authority.includes('railway');
  if (isRailways) {
    if (mode === 'photo') {
      return {
        examName: 'Railway RRB',
        title: 'RRB Photo Rejection Warning: What Is Missing?',
        badge: 'CEN COMPLIANCE',
        badgeColor: 'amber',
        description: 'Railway Recruitment Boards disqualify photos taken with tilted angles, spectacles, or non-white backgrounds. Check what is missing:',
        statusWarning: 'White BG / No Spectacles',
        items: [
          { icon: '🎨', title: '1. Plain White Background Only', description: 'Color photo taken against a plain white background within the last 6 months.', severity: 'danger' },
          { icon: '❌', title: '2. Selfies & Tilted Angles Prohibited', description: 'Selfies, group photos, or side-angle poses are disqualified by RRB scrutinizers.', severity: 'danger' },
          { icon: '👓', title: '3. No Spectacles, Caps or Dark Glasses', description: 'Remove vision glasses and hats. Frontal view with both ears clearly visible.', severity: 'warning' },
          { icon: '📏', title: '4. 35 × 45 mm (30 KB – 70 KB JPG)', description: 'Standard 320 × 240 px, file size strictly between 30 KB and 70 KB (or 20–50 KB).', severity: 'info' },
        ],
        officialSource: 'RRB Centralized Employment Notice (CEN) Norms',
        officialUrl: 'https://www.rrbapply.gov.in',
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: 'Railway RRB',
        title: 'RRB Signature Rejection Warning: What Is Missing?',
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'Railway Recruitment Board guidelines strictly reject non-running handwriting signatures. Check what is missing:',
        statusWarning: 'Running Script / No Block Letters',
        items: [
          { icon: '🖋️', title: '1. Running Cursive Script (NO BLOCK LETTERS)', description: 'Signatures in capital letters are strictly cancelled at application scrutiny.', severity: 'danger' },
          { icon: '🖊️', title: '2. Black or Dark Blue Ink Pen', description: 'Sign on unruled white paper with black or blue ballpoint ink.', severity: 'warning' },
          { icon: '📏', title: '3. 140 × 60 px (10 KB – 50 KB JPG)', description: 'Strictly between 10.0 KB and 50.0 KB in JPG format.', severity: 'info' },
          { icon: '📄', title: '4. Clean Paper & Sharp Strokes', description: 'Crop tightly around the signature strokes without background shadows.', severity: 'info' },
        ],
        officialSource: 'RRB CEN Candidate Instructions',
        officialUrl: 'https://www.rrbapply.gov.in',
        actionType: 'cleanPaper',
      };
    }
  }

  // 5b. IIT JAM (JOAPS - IIT KHARAGPUR)
  const isJam = presetId.includes('jam') || presetName.includes('jam') || authority.includes('jam');
  if (isJam) {
    if (mode === 'photo') {
      return {
        examName: 'IIT JAM 2027',
        title: 'IIT JAM Photo Compliance: What Is Missing?',
        badge: 'JOAPS SPECIFICATIONS',
        badgeColor: 'emerald',
        description: 'IIT Kharagpur JOAPS portal strictly checks facial framing and aspect ratio before approving your application. Verify requirements:',
        statusWarning: 'White BG / 50–70% Face / 20–200 KB',
        items: [
          { icon: '👤', title: '1. 50% to 70% Face Coverage', description: 'Clear frontal view of face with both ears visible and eyes open. Selfie photos are rejected.', severity: 'danger' },
          { icon: '🎨', title: '2. Plain White or Light Background', description: 'Clean white or light solid background without patterns, shadows, or textures.', severity: 'danger' },
          { icon: '👓', title: '3. Spectacles & Glare Rules', description: 'Clear spectacles allowed only without flash reflections obscuring eyes. Sunglasses or tinted glasses are disqualified.', severity: 'warning' },
          { icon: '📏', title: '4. Prescribed File Limits (20 KB – 200 KB)', description: 'Strict 480 × 640 px (3.5 × 4.5 cm, aspect ratio 3:4) in JPEG/JPG format.', severity: 'info' },
        ],
        officialSource: 'IIT Kharagpur · JAM 2027 Information Brochure (JOAPS)',
        officialUrl: 'https://jam.iitkgp.ac.in/',
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: 'IIT JAM 2027',
        title: 'IIT JAM Signature Compliance: What Is Missing?',
        badge: 'STRICT 50–150 KB CORRIDOR',
        badgeColor: 'rose',
        description: 'JOAPS strictly enforces the 50 KB lower bound and 7×2 cm box dimensions. Signatures outside 50–150 KB or in block letters are rejected. Verify compliance:',
        statusWarning: '50–150 KB / Running Handwriting',
        items: [
          { icon: '🖋️', title: '1. Continuous Running Handwriting (No Capital Letters)', description: 'Must be signed in natural cursive handwriting. Full signature in CAPITAL LETTERS or initials is disqualified.', severity: 'danger' },
          { icon: '🖊️', title: '2. Black or Dark Blue Ink Mandate', description: 'Sign in a 7 cm × 2 cm box on spotless white paper using black or dark blue ink pen.', severity: 'danger' },
          { icon: '📏', title: '3. Strict File Corridor: 50 KB to 150 KB (Anti-Rejection)', description: 'JOAPS rejects signatures below 50 KB. SignResize applies lossless padding to guarantee 50–150 KB bounds at 560×160 px.', severity: 'danger' },
          { icon: '🔍', title: '4. Clean White Background & No Shadows', description: 'Ensure no paper shadows, notebook lines, or creases around the signature stroke area.', severity: 'warning' },
        ],
        officialSource: 'IIT Kharagpur · JAM 2027 Information Brochure (JOAPS)',
        officialUrl: 'https://jam.iitkgp.ac.in/',
        actionType: 'cleanPaper',
      };
    }
  }

  // 5c. GATE (GOAPS - IIT MADRAS)
  const isGate = presetId.includes('gate') || presetName.includes('gate') || authority.includes('gate');
  if (isGate) {
    if (mode === 'photo') {
      return {
        examName: 'GATE 2027',
        title: 'GATE Photo Compliance: What Is Missing?',
        badge: 'GOAPS SPECIFICATIONS',
        badgeColor: 'emerald',
        description: 'IIT Madras GOAPS portal requires passport-size portrait photos adhering to strict dimensions and clean white background:',
        statusWarning: 'White Studio BG / 60–70% Face / 5–200 KB',
        items: [
          { icon: '👤', title: '1. 60% to 70% Face Coverage', description: 'Professional studio portrait with full frontal view and both ears visible. No tilted angles or informal selfies.', severity: 'danger' },
          { icon: '🎨', title: '2. Pure White Background', description: 'Background must be plain white. Dark, patterned, or shadowed backgrounds are rejected.', severity: 'danger' },
          { icon: '👓', title: '3. No Sunglasses, Caps or Flash Glare', description: 'Spectacles permitted only if eyes are completely visible without reflections. Caps and tinted lenses are prohibited.', severity: 'warning' },
          { icon: '📏', title: '4. Prescribed File Limits (5 KB – 200 KB)', description: 'Strict 480 × 640 px (3.5 × 4.5 cm, 3:4 ratio) in JPG format.', severity: 'info' },
        ],
        officialSource: 'IIT Madras · GATE 2027 Information Brochure (GOAPS)',
        officialUrl: 'https://gate2027.iitm.ac.in/',
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: 'GATE 2027',
        title: 'GATE Signature Compliance: What Is Missing?',
        badge: 'GOAPS SPECIFICATIONS',
        badgeColor: 'rose',
        description: 'Candidate signatures are verified biometrically at examination centers. Ensure full compliance with IIT Madras GOAPS rules:',
        statusWarning: '3–300 KB / 70–80% Box Coverage',
        items: [
          { icon: '🖋️', title: '1. Continuous Running Handwriting (No Block Letters)', description: 'Signatures in ALL CAPITAL LETTERS or using only initials will be disqualified without refund.', severity: 'danger' },
          { icon: '🖊️', title: '2. Dark Blue or Black Ink Pen', description: 'Sign on unruled clean white paper using dark blue or black ink. Pencil or faint ink is not accepted.', severity: 'danger' },
          { icon: '📏', title: '3. Official File Bounds: 3 KB to 300 KB (480×160 px)', description: 'Ratio between 2.75 and 3.75. Signature must occupy 70% to 80% of the cropped rectangular area.', severity: 'info' },
          { icon: '🔍', title: '4. High Contrast & Clean Background', description: 'No grey shading, smudges, mobile shadows, or notebook grid lines.', severity: 'warning' },
        ],
        officialSource: 'IIT Madras · GATE 2027 Information Brochure (GOAPS)',
        officialUrl: 'https://gate2027.iitm.ac.in/',
        actionType: 'cleanPaper',
      };
    }
  }

  // 6. ENTRANCE EXAMS (NEET, JEE MAIN, NTA)
  const isEntrance = (category === 'Engineering' || category === 'Teaching' || presetId.includes('gate') || presetId.includes('neet') || presetId.includes('jee') || presetId.includes('nta')) && !isJam && !isGate;
  if (isEntrance) {
    if (mode === 'photo') {
      const isNeet = presetId.includes('neet');
      return {
        examName: preset?.shortCode || 'Entrance Exam',
        title: `${preset?.shortCode || 'Entrance'} Photo Compliance Warning: What Is Missing?`,
        badge: 'NTA NORMS',
        badgeColor: 'rose',
        description: 'National entrance portals (NTA NEET / JEE) maintain stringent biometric scrutiny. Verify what is missing:',
        statusWarning: isNeet ? 'Name & Date / 80% Face' : 'White BG / 70% Face',
        items: [
          { icon: '👤', title: '1. 80% Face Coverage (Both Ears Visible)', description: 'Face must occupy 70–80% of canvas area against a pure white background.', severity: 'danger' },
          { icon: isNeet ? '🏷️' : '🎨', title: isNeet ? '2. Name & Date of Photo Mandate' : '2. Pure White Background', description: isNeet ? 'Name of candidate and date of photo taking must be printed below photo.' : 'Light or white background only. Dark backgrounds cause instant rejection.', severity: 'danger' },
          { icon: '👓', title: '3. No Polaroid, Caps or Tinted Glasses', description: 'Regular vision spectacles allowed only without glare/reflection. No caps or sunglasses.', severity: 'warning' },
          { icon: '📏', title: '4. Exact KB Range (10 KB – 200 KB)', description: 'Passport and Postcard (4×6") sizes must match prescribed NTA boundaries.', severity: 'info' },
        ],
        officialSource: isNeet ? 'NTA NEET UG Information Bulletin' : 'NTA Information Brochure',
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: preset?.shortCode || 'Entrance Exam',
        title: `${preset?.shortCode || 'Entrance'} Signature Compliance: What Is Missing?`,
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'Candidate signatures are matched with biometric presence during examination hall entry. Verify compliance:',
        statusWarning: 'Black Ink / Running Script',
        items: [
          { icon: '🖋️', title: '1. Continuous Running Handwriting', description: 'Full signature in CAPITAL LETTERS is strictly disqualified.', severity: 'danger' },
          { icon: '🖊️', title: '2. Black Ballpoint Pen Mandate', description: 'Sign on unruled clean white paper using a black ballpoint pen.', severity: 'danger' },
          { icon: '📏', title: '3. Prescribed KB Limits (4 KB – 30 KB)', description: 'Exact pixel dimensions and KB floor/ceiling enforced by portal upload validator.', severity: 'info' },
          { icon: '🔍', title: '4. Sharp High Contrast', description: 'No grey background, lined paper marks, or blurred strokes.', severity: 'warning' },
        ],
        officialSource: 'NTA Candidate Instructions',
        actionType: 'cleanPaper',
      };
    }
  }

  // 7. STATE PUBLIC SERVICE COMMISSIONS (APPSC, UPPSC, BPSC, MPSC, TSPSC, TNPSC, RPSC)
  const isStatePsc = category === 'State PSC' || presetId.includes('psc') || presetId.includes('bpsc') || presetId.includes('uppsc') || presetId.includes('mpsc') || presetId.includes('appsc');
  if (isStatePsc) {
    if (mode === 'photo') {
      return {
        examName: preset?.shortCode || 'State PSC',
        title: `${preset?.shortCode || 'State PSC'} Photo Verification: What Is Missing?`,
        badge: 'STATE PSC NORMS',
        badgeColor: 'amber',
        description: 'State PSC portals (OTPR / OTR) automatically reject photos with non-standard backgrounds or dimensions:',
        statusWarning: 'Plain Light / White BG',
        items: [
          { icon: '🎨', title: '1. Plain Light or White Background', description: 'Must have a clean white background. Dark, patterned, or textured backgrounds cause rejection.', severity: 'danger' },
          { icon: '👤', title: '2. Frontal Facial Alignment', description: 'Direct eye contact looking straight into the camera with both ears clearly visible.', severity: 'warning' },
          { icon: '👓', title: '3. No Sunglasses or Glare', description: 'Spectacles with tinted lenses or light reflection on glass are disqualified.', severity: 'warning' },
          { icon: '📏', title: '4. Portal Size Limits', description: `${preset?.widthPx || 200} × ${preset?.heightPx || 230} px, strictly ${preset?.minKb || 20} KB to ${preset?.maxKb || 50} KB in JPG format.`, severity: 'info' },
        ],
        officialSource: `${preset?.authority || 'State Public Service Commission'} Guidelines`,
        actionType: 'makeBackgroundWhite',
      };
    } else {
      return {
        examName: preset?.shortCode || 'State PSC',
        title: `${preset?.shortCode || 'State PSC'} Signature Verification: What Is Missing?`,
        badge: 'DISQUALIFICATION RISK',
        badgeColor: 'rose',
        description: 'Signatures are verified against identity records during certificate verification. Check what is missing:',
        statusWarning: 'Black Ink / Running Script',
        items: [
          { icon: '🖋️', title: '1. Running Handwriting (NO CAPITAL LETTERS)', description: 'Signatures written in capital block letters will be disqualified at scrutiny.', severity: 'danger' },
          { icon: '🖊️', title: '2. Black Ink Pen Recommended', description: 'Use a black ballpoint pen on unruled white paper for maximum contrast.', severity: 'warning' },
          { icon: '📏', title: '3. Portal Size Limits', description: `${preset?.widthPx || 140} × ${preset?.heightPx || 60} px, strictly ${preset?.minKb || 10} KB to ${preset?.maxKb || 50} KB in JPG.`, severity: 'info' },
          { icon: '📄', title: '4. Clean Paper Surface', description: 'No ruled lines, shadows, or smudged ink strokes around the signature.', severity: 'info' },
        ],
        officialSource: `${preset?.authority || 'State Public Service Commission'} Guidelines`,
        actionType: 'cleanPaper',
      };
    }
  }

  // 8. GENERIC DEFAULT FOR ALL TOOLS ACROSS THE WEBSITE
  if (mode === 'photo') {
    return {
      examName: preset?.shortCode || 'Passport Photo',
      title: `${preset?.shortCode ? `${preset.shortCode} Photo` : 'Passport Photo'} Rejection Warning: What Is Missing?`,
      badge: 'GOVERNMENT NORMS',
      badgeColor: 'rose',
      description: 'Online application portals automatically disqualify candidate photos for background shadows, spectacles glare, or improper cropping. Verify what is missing below:',
      statusWarning: 'White BG / Face Straight',
      items: [
        {
          icon: '🎨',
          title: '1. Plain White or Light Background',
          description: 'Background must be plain light or pure white. Outdoor photos, colored walls, selfies, or shadows behind the head cause rejection.',
          severity: 'danger',
        },
        {
          icon: '👤',
          title: '2. Frontal Facial Alignment (Both Ears Visible)',
          description: 'Look straight into the camera with a neutral expression. Head tilted, closed eyes, or wide smiles showing teeth are disqualified.',
          severity: 'danger',
        },
        {
          icon: '👓',
          title: '3. No Dark Glasses, Glare or Headwear',
          description: 'Remove dark sunglasses, tinted spectacles, caps, and hats. Eyes must be sharp, in focus, and completely uncovered.',
          severity: 'warning',
        },
        {
          icon: '📏',
          title: `4. Standard Proportions (${preset ? `${preset.widthPx}×${preset.heightPx} px, ${preset.minKb}–${preset.maxKb} KB` : '3.5×4.5 cm / 20–50 KB'})`,
          description: 'Image should be sharply focused without pixelation, stretching, or low-resolution compression artifacts.',
          severity: 'info',
        },
      ],
      officialSource: 'Standard Government Portal & Passport Photographic Scrutiny Norms',
      actionType: 'makeBackgroundWhite',
    };
  } else if (mode === 'signature') {
    return {
      examName: preset?.shortCode || 'Signature Tool',
      title: `${preset?.shortCode ? `${preset.shortCode} Signature` : 'Candidate Signature'} Rejection Warning: What Is Missing?`,
      badge: 'DISQUALIFICATION RISK',
      badgeColor: 'rose',
      description: 'Government and recruitment portals disqualify candidate signatures for block lettering, blue/faint ink, or background noise. Verify what is missing:',
      statusWarning: 'Running Script / Black Ink',
      items: [
        {
          icon: '🖋️',
          title: '1. Running Cursive Handwriting (NO CAPITAL LETTERS)',
          description: 'Writing your full name in CAPITAL / BLOCK LETTERS is strictly disqualified across virtually all recruitment portals.',
          severity: 'danger',
        },
        {
          icon: '🖊️',
          title: '2. Black or Dark Blue Ink Mandate',
          description: 'Sign with a black or dark blue ballpoint pen on plain white paper for sharp contrast on portal scanners.',
          severity: 'danger',
        },
        {
          icon: '📄',
          title: '3. Clean Plain White Paper (No Ruled Lines)',
          description: 'Never sign on lined notebook paper, receipts, or textured surfaces. Avoid mobile shadows over the paper.',
          severity: 'warning',
        },
        {
          icon: '📏',
          title: `4. Target Bounds (${preset ? `${preset.widthPx}×${preset.heightPx} px, ${preset.minKb}–${preset.maxKb} KB` : '140×60 px, 10–20 KB'})`,
          description: 'Crop tightly around signature strokes so no part of the handwriting is cut off at the canvas edge.',
          severity: 'info',
        },
      ],
      officialSource: 'Standard Online Portal Examination Scrutiny Guidelines',
      actionType: 'cleanPaper',
    };
  } else {
    const isThumb = presetId.includes('thumb');
    return {
      examName: preset?.shortCode || 'Document Resizer',
      title: isThumb ? 'Thumb Impression Compliance Checklist: What Is Missing?' : 'Document Scan Verification: What Is Missing?',
      badge: 'PORTAL COMPLIANCE',
      badgeColor: 'blue',
      description: isThumb
        ? 'Clear biometric ridge impressions are required for candidate identity verification. Verify what is missing:'
        : 'Recruitment portals mandate flat, high-resolution scans from original documents with all borders visible:',
      statusWarning: isThumb ? 'Verify LTI Ridges' : 'Scanned from Originals',
      items: isThumb
        ? [
            { icon: '👆', title: '1. Left-Hand Thumb (LTI)', description: 'Stamp candidate left thumb using blue or black stamp pad ink on clean white paper.', severity: 'danger' },
            { icon: '🔬', title: '2. Sharp Biometric Ridges', description: 'Ensure smudge-free, distinct ridge lines without excessive ink or blank spots.', severity: 'warning' },
            { icon: '📏', title: '3. Prescribed Dimensions', description: `${preset ? `${preset.widthPx}×${preset.heightPx} px, ${preset.minKb}–${preset.maxKb} KB` : '240×240 px, 20–50 KB'}.`, severity: 'info' },
            { icon: '🔍', title: '4. Clean Paper Background', description: 'Clean white background around impression without stray ink marks.', severity: 'info' },
          ]
        : [
            { icon: '📄', title: '1. Scanned From Original Certificate', description: 'Always scan from original documents. Blurred photocopies or phone photos with fingers are rejected.', severity: 'danger' },
            { icon: '🔍', title: '2. All 4 Corners & Seals Visible', description: 'Candidate name, roll number, marks, passing year, and issuing authority seal must be 100% legible.', severity: 'warning' },
            { icon: '📏', title: '3. Prescribed Target File Size', description: `${preset ? `${preset.minKb}–${preset.maxKb} KB in ${preset.format}` : '50–150 KB in JPG'}. Do not compress beyond readability.`, severity: 'info' },
            { icon: '📐', title: '4. Proper Document Orientation', description: 'Ensure document is upright, not upside-down, skewed, or tilted.', severity: 'info' },
          ],
      officialSource: 'Official Document Verification Guidelines',
    };
  }
}
