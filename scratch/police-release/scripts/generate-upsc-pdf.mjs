import fs from 'node:fs';
import path from 'node:path';

class SimplePdf {
  constructor() {
    this.objects = [];
    this.pages = [];
  }

  addObject(content) {
    this.objects.push(content);
    return this.objects.length; // 1-based object number
  }

  escapeText(str) {
    return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
  }

  addPage(commands) {
    this.pages.push(commands);
  }

  build() {
    // We will allocate object IDs:
    // Obj 1: Catalog
    // Obj 2: Pages tree
    // Obj 3: Font Helvetica
    // Obj 4: Font Helvetica-Bold
    // For each page:
    // Page Obj: 4 + (i * 2) + 1
    // Content Obj: 4 + (i * 2) + 2

    const pageCount = this.pages.length;
    const pageObjIds = [];
    const contentObjIds = [];

    for (let i = 0; i < pageCount; i++) {
      pageObjIds.push(5 + i * 2);
      contentObjIds.push(6 + i * 2);
    }

    const objects = [];

    // 1: Catalog
    objects[1] = `<< /Type /Catalog /Pages 2 0 R >>`;

    // 2: Pages
    objects[2] = `<< /Type /Pages /Kids [${pageObjIds.map(id => `${id} 0 R`).join(' ')}] /Count ${pageCount} >>`;

    // 3: Regular font
    objects[3] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`;

    // 4: Bold font
    objects[4] = `<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`;

    // Pages & Content streams
    for (let i = 0; i < pageCount; i++) {
      const pId = pageObjIds[i];
      const cId = contentObjIds[i];
      const streamContent = this.pages[i];
      const streamLen = Buffer.byteLength(streamContent, 'utf8');

      objects[pId] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${cId} 0 R >>`;
      objects[cId] = `<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream`;
    }

    let out = '%PDF-1.4\n%\xFF\xFF\xFF\xFF\n';
    const offsets = [];

    for (let i = 1; i < objects.length; i++) {
      offsets[i] = Buffer.byteLength(out, 'utf8');
      out += `${i} 0 obj\n${objects[i]}\nendobj\n`;
    }

    const xrefOffset = Buffer.byteLength(out, 'utf8');
    out += `xref\n0 ${objects.length}\n`;
    out += `0000000000 65535 f \n`;

    for (let i = 1; i < objects.length; i++) {
      const offStr = String(offsets[i]).padStart(10, '0');
      out += `${offStr} 00000 n \n`;
    }

    out += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\n`;
    out += `startxref\n${xrefOffset}\n%%EOF\n`;

    return Buffer.from(out, 'utf8');
  }
}

// Helper to construct formatted page stream commands
function createPageStream(pageNumber, totalPages, title, subtitle, sections) {
  let s = '';

  // Header Bar (Navy Blue rectangle)
  s += `0.08 0.18 0.36 rg\n`;
  s += `36 792 523 38 re f\n`;

  // Header Title
  s += `BT /F2 14 Tf 1 1 1 rg 46 806 Td (${title}) Tj ET\n`;
  s += `BT /F1 9 Tf 0.85 0.9 1 rg 46 796 Td (${subtitle}) Tj ET\n`;

  // Footer line
  s += `0.85 0.88 0.92 RG 1 w 36 40 m 559 40 l S\n`;
  // Footer text
  s += `BT /F1 8 Tf 0.45 0.45 0.5 rg 46 28 Td (SignResize.in | Official Document & Syllabus Research Desk) Tj ET\n`;
  s += `BT /F2 8 Tf 0.2 0.3 0.6 rg 470 28 Td (Page ${pageNumber} of ${totalPages}) Tj ET\n`;

  let y = 760;

  for (const sec of sections) {
    if (sec.type === 'heading') {
      y -= 14;
      // Heading box accent
      s += `0.12 0.35 0.65 rg 36 ${y - 2} 4 15 re f\n`;
      s += `BT /F2 12 Tf 0.1 0.15 0.25 rg 46 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 18;
    } else if (sec.type === 'subheading') {
      y -= 8;
      s += `BT /F2 10 Tf 0.2 0.3 0.4 rg 46 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 14;
    } else if (sec.type === 'paragraph') {
      s += `BT /F1 9 Tf 0.25 0.25 0.3 rg 46 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 13;
    } else if (sec.type === 'bullet') {
      s += `0.2 0.4 0.7 rg 48 ${y + 3} 2.5 2.5 re f\n`;
      s += `BT /F1 8.5 Tf 0.2 0.2 0.25 rg 56 ${y} Td (${sec.text}) Tj ET\n`;
      y -= 13;
    } else if (sec.type === 'table') {
      y -= 6;
      const headers = sec.headers;
      const rows = sec.rows;
      const colWidths = sec.colWidths || [140, 70, 70, 140];
      const startX = 46;

      // Header row background
      s += `0.92 0.94 0.98 rg 46 ${y - 4} 500 16 re f\n`;
      s += `0.8 0.85 0.92 RG 0.5 w 46 ${y - 4} 500 16 re S\n`;

      let curX = startX;
      for (let c = 0; c < headers.length; c++) {
        s += `BT /F2 8.5 Tf 0.1 0.2 0.4 rg ${curX + 4} ${y} Td (${headers[c]}) Tj ET\n`;
        curX += colWidths[c];
      }
      y -= 16;

      for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        if (r % 2 === 1) {
          s += `0.97 0.98 1 rg 46 ${y - 3} 500 14 re f\n`;
        }
        s += `0.88 0.9 0.94 RG 0.5 w 46 ${y - 3} 500 14 re S\n`;

        curX = startX;
        for (let c = 0; c < row.length; c++) {
          s += `BT /F1 8 Tf 0.2 0.2 0.25 rg ${curX + 4} ${y} Td (${row[c]}) Tj ET\n`;
          curX += colWidths[c];
        }
        y -= 14;
      }
      y -= 10;
    } else if (sec.type === 'callout') {
      y -= 6;
      s += `0.95 0.97 1 rg 46 ${y - 20} 500 28 re f\n`;
      s += `0.2 0.4 0.8 RG 1 w 46 ${y - 20} 500 28 re S\n`;
      s += `0.2 0.4 0.8 rg 46 ${y - 20} 4 28 re f\n`;
      s += `BT /F2 8.5 Tf 0.15 0.3 0.65 rg 56 ${y - 2} Td (${sec.title}) Tj ET\n`;
      s += `BT /F1 8 Tf 0.25 0.25 0.3 rg 56 ${y - 14} Td (${sec.text}) Tj ET\n`;
      y -= 34;
    }
  }

  return s;
}

const pdf = new SimplePdf();
const totalPages = 5;

// PAGE 1: Overview & Prelims
pdf.addPage(createPageStream(
  1, totalPages,
  'UPSC CIVIL SERVICES EXAMINATION 2026',
  'Official Syllabus & Examination Pattern Blueprint | SignResize Academic Research Desk',
  [
    { type: 'heading', text: '1. Three-Stage Examination Architecture' },
    { type: 'paragraph', text: 'The UPSC Civil Services Examination (CSE) is conducted across three competitive successive stages:' },
    { type: 'table', headers: ['Stage', 'Type of Assessment', 'Papers', 'Marks Considered for Merit'], rows: [
      ['Stage I: Preliminary Exam', 'Objective / Multiple Choice (OMR)', '2 Papers (GS + CSAT)', 'Only Paper I (GS) sets cutoff; CSAT is 33% qualifying'],
      ['Stage II: Main Written Exam', 'Descriptive Conventional Essay', '9 Papers (7 Merit + 2 Qual)', '1750 Marks (7 Merit Papers form Written Rank)'],
      ['Stage III: Personality Test', 'Oral Board Interview', '1 Comprehensive Session', '275 Marks added to Mains written total = 2025 Marks']
    ], colWidths: [130, 130, 110, 130] },

    { type: 'heading', text: '2. Preliminary Examination Syllabus (Total 400 Marks)' },
    { type: 'subheading', text: 'Paper I: General Studies (GS-I) - 100 Questions | 200 Marks | 2 Hours | Cutoff Determining' },
    { type: 'bullet', text: 'Current Events: Developments of National and International significance across polity, economy, science, and summits.' },
    { type: 'bullet', text: 'History of India and Indian National Movement: Ancient, Medieval, Art & Culture, British Colonial rule and 1857-1947 struggle.' },
    { type: 'bullet', text: 'Indian & World Geography: Physical, Social, Economic Geography of India, global geomorphology, climates, and ocean currents.' },
    { type: 'bullet', text: 'Indian Polity & Governance: Constitution, Political System, Panchayati Raj, Public Policy, Fundamental Rights, Statutory Bodies.' },
    { type: 'bullet', text: 'Economic & Social Development: Sustainable Development, Poverty, Inclusion, Demographics, Budgeting, RBI Monetary Policy.' },
    { type: 'bullet', text: 'General Issues on Environmental Ecology, Bio-diversity & Climate Change: Conventions, National Parks, Pollution indices.' },
    { type: 'bullet', text: 'General Science: Everyday Scientific Principles, Space Missions (ISRO), Biotechnology, Defence Tech, and AI/Computing.' },

    { type: 'subheading', text: 'Paper II: Civil Services Aptitude Test (CSAT) - 80 Questions | 200 Marks | 2 Hours | 33% (66.67 Marks) Qualifying' },
    { type: 'bullet', text: 'Reading Comprehension: Tone analysis, underlying assumptions, crucial inferences, and logical corollaries.' },
    { type: 'bullet', text: 'Interpersonal & Communication Skills: Analytical problem-solving and situational judgment.' },
    { type: 'bullet', text: 'Logical Reasoning & Analytical Ability: Syllogisms, blood relations, seating arrangements, coding-decoding, direction puzzles.' },
    { type: 'bullet', text: 'Basic Numeracy (Class X level): Number Systems, Divisibility, LCM-HCF, Permutations & Combinations, Ratios, Speed & Distance.' },
    { type: 'bullet', text: 'Data Interpretation: Graphs, Charts, Tables, and Data Sufficiency drills.' },

    { type: 'callout', title: 'Negative Marking Rule for Prelims', text: 'Every incorrect attempt incurs a deduction of 1/3rd of the marks assigned: -0.66 marks in Paper I, and -0.833 marks in Paper II.' }
  ]
));

// PAGE 2: Mains GS Papers I & II
pdf.addPage(createPageStream(
  2, totalPages,
  'UPSC CSE MAINS SYLLABUS - GS PAPERS I & II',
  'Descriptive Written Examination: 250 Marks per Paper | 3 Hours Duration Each',
  [
    { type: 'heading', text: 'Paper I: Essay Paper (250 Marks)' },
    { type: 'paragraph', text: 'Candidates write two long essays (1,000 to 1,200 words each) chosen from Section A (Philosophical / Reflective themes) and Section B (Socio-Economic, Administrative or Governance challenges).' },

    { type: 'heading', text: 'Paper II: General Studies I (Indian Heritage, Culture, History & Geography of the World & Society - 250 Marks)' },
    { type: 'subheading', text: 'Art, Heritage & Indian Culture:' },
    { type: 'bullet', text: 'Salient aspects of Art Forms, Literature, and Architecture from ancient times to the modern era.' },
    { type: 'subheading', text: 'Modern Indian History & Freedom Struggle:' },
    { type: 'bullet', text: 'Significant events, personalities, and issues from the middle of the eighteenth century until the present.' },
    { type: 'bullet', text: 'The Freedom Struggle: Various stages, regional contributions, socio-religious reform movements.' },
    { type: 'bullet', text: 'Post-Independence Consolidation and Reorganization: Linguistic states reorganization, tribal integration, boundary disputes.' },
    { type: 'subheading', text: 'World History:' },
    { type: 'bullet', text: 'Industrial Revolution, World Wars, Redrawal of National Frontiers, Decolonization, Political Philosophies (Communism, Capitalism).' },
    { type: 'subheading', text: 'Indian Society & Diversity:' },
    { type: 'bullet', text: 'Role of Women and Women Organizations, Population and Associated Issues, Poverty, Urbanization, Globalization, Communalism, Secularism.' },
    { type: 'subheading', text: 'Physical & Human Geography:' },
    { type: 'bullet', text: 'Distribution of Key Natural Resources across the globe (including South Asia and the Indian sub-continent).' },
    { type: 'bullet', text: 'Geophysical Phenomena: Earthquakes, Tsunami, Volcanic activity, Cyclone; Critical geographical features and changes in flora/fauna.' },

    { type: 'heading', text: 'Paper III: General Studies II (Governance, Constitution, Polity, Social Justice & IR - 250 Marks)' },
    { type: 'bullet', text: 'Indian Constitution: Historical underpinnings, evolution, features, amendments, significant provisions, and basic structure doctrine.' },
    { type: 'bullet', text: 'Functions & Responsibilities of the Union and States: Federal structure, devolution of powers, finance commission awards.' },
    { type: 'bullet', text: 'Separation of Powers: Dispute redressal mechanisms and institutions, comparison of Indian constitutional scheme with others.' },
    { type: 'bullet', text: 'Parliament and State Legislatures: Structure, functioning, conduct of business, legislative powers, parliamentary privileges.' },
    { type: 'bullet', text: 'Statutory, Regulatory and Quasi-Judicial Bodies: Election Commission, UPSC, CAG, NITI Aayog, NHRC, CCI, Green Tribunal.' },
    { type: 'bullet', text: 'Welfare Schemes for Vulnerable Sections: Mechanisms, laws, institutions for performance evaluation; health, education, human resources.' },
    { type: 'bullet', text: 'Bilateral, Regional and Global Groupings: Involving India or affecting India interests; Effect of policies of developed nations on India diaspora.' }
  ]
));

// PAGE 3: Mains GS Papers III & IV
pdf.addPage(createPageStream(
  3, totalPages,
  'UPSC CSE MAINS SYLLABUS - GS PAPERS III & IV',
  'Descriptive Written Examination: 250 Marks per Paper | 3 Hours Duration Each',
  [
    { type: 'heading', text: 'Paper IV: General Studies III (Technology, Economic Development, Biodiversity, Security & DM - 250 Marks)' },
    { type: 'subheading', text: 'Indian Economy & Planning:' },
    { type: 'bullet', text: 'Mobilization of Resources, Growth, Development and Employment, Government Budgeting, Fiscal and Monetary frameworks.' },
    { type: 'subheading', text: 'Agriculture & Food Supply Chains:' },
    { type: 'bullet', text: 'Major Cropping Patterns, Irrigation Systems, Storage, Transport, and Marketing of Agricultural Produce, e-Technology for farmers.' },
    { type: 'bullet', text: 'Farm Subsidies, Minimum Support Prices (MSP), Public Distribution System (PDS) objectives, functioning, and food security buffer.' },
    { type: 'bullet', text: 'Food Processing and Related Industries in India: Scope, significance, upstream and downstream requirements, supply chain management.' },
    { type: 'subheading', text: 'Science & Technology Innovations:' },
    { type: 'bullet', text: 'Developments and applications in everyday life; Indigenization of Technology; Achievements of Indians in S&T.' },
    { type: 'bullet', text: 'Awareness in IT, Space, Computers, Robotics, Nanotechnology, Biotechnology, and Intellectual Property Rights (IPRs).' },
    { type: 'subheading', text: 'Environment, Biodiversity & Disaster Management:' },
    { type: 'bullet', text: 'Conservation, Environmental Pollution and Degradation, Environmental Impact Assessment (EIA).' },
    { type: 'bullet', text: 'Disaster and Disaster Management: Sendai Framework, NDMA guidelines, early warning systems, post-disaster rehabilitation.' },
    { type: 'subheading', text: 'Internal Security & Border Management:' },
    { type: 'bullet', text: 'Linkages between Development and Spread of Extremism; Role of External State and Non-State Actors in creating challenges.' },
    { type: 'bullet', text: 'Cyber Security Basics; Money Laundering and prevention; Security challenges in Border Areas; Maritime security.' },

    { type: 'heading', text: 'Paper V: General Studies IV (Ethics, Integrity & Aptitude - 250 Marks)' },
    { type: 'paragraph', text: 'This paper evaluates candidate attitudes and approach to issues relating to integrity, probity in public life, and conflict resolution.' },
    { type: 'bullet', text: 'Ethics and Human Interface: Essence, determinants and consequences of Ethics in human actions; Dimensions of ethics; Human Values.' },
    { type: 'bullet', text: 'Attitude: Content, structure, function; its influence on thought and behavior; Moral and political attitudes; Social influence and persuasion.' },
    { type: 'bullet', text: 'Aptitude & Foundational Values for Civil Service: Integrity, impartiality, non-partisanship, objectivity, dedication to public service, empathy.' },
    { type: 'bullet', text: 'Emotional Intelligence: Concepts and their utilities/application in administration and governance.' },
    { type: 'bullet', text: 'Public/Civil Service Values & Ethics in Public Administration: Ethical dilemmas, laws, regulations, accountability, ethical governance.' },
    { type: 'bullet', text: 'Probity in Governance: Concept of public service; Philosophical basis of governance; Right to Information, Codes of Ethics, Citizen Charters.' },
    { type: 'bullet', text: 'Case Studies: Practical problem-solving scenarios on institutional conflicts, bribery, pressure from political bosses, and emergency relief.' }
  ]
));

// PAGE 4: Optional Subjects & Qualifying Papers
pdf.addPage(createPageStream(
  4, totalPages,
  'UPSC CSE OPTIONAL SUBJECTS & QUALIFYING PAPERS',
  'Paper VI & VII: 500 Optional Marks | Qualifying Language Papers: 600 Marks',
  [
    { type: 'heading', text: '1. Complete List of 48 Optional Subjects' },
    { type: 'paragraph', text: 'Candidates must choose ONE Optional subject which comprises TWO papers (Paper VI & VII) of 250 marks each (500 Marks total):' },
    { type: 'table', headers: ['Discipline', 'Optional Subject Choices'], rows: [
      ['Humanities & Social Sci', 'History, Geography, Political Science & IR (PSIR), Sociology, Public Administration, Philosophy, Psychology'],
      ['Commerce & Economics', 'Economics, Commerce & Accountancy, Management'],
      ['Pure & Earth Sciences', 'Physics, Chemistry, Mathematics, Statistics, Geology, Botany, Zoology'],
      ['Engineering Disciplines', 'Civil Engineering, Mechanical Engineering, Electrical Engineering'],
      ['Medical & Life Sciences', 'Medical Science, Animal Husbandry & Veterinary Science, Agriculture'],
      ['Law & Languages', 'Law, Literature of any ONE Language (Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, etc.)']
    ], colWidths: [140, 360] },

    { type: 'heading', text: '2. Sociology Optional Syllabus Snapshot' },
    { type: 'bullet', text: 'Paper I (Fundamentals of Sociology): Sociological Thinkers (Karl Marx, Emile Durkheim, Max Weber, Talcott Parsons, Robert Merton, GH Mead).' },
    { type: 'bullet', text: 'Social Stratification: Concepts, theories of structural functionalism, gender equality, social mobility, and class consciousness.' },
    { type: 'bullet', text: 'Paper II (Indian Society): Perspectives on Indian Society (GS Ghurye, MN Srinivas, AR Desai); Caste System; Agrarian Social Structure.' },

    { type: 'heading', text: '3. Anthropology Optional Syllabus Snapshot' },
    { type: 'bullet', text: 'Paper I: Physical Anthropology, Human Evolution, Primatology, Genetics, Socio-Cultural Anthropology (Marriage, Family, Kinship).' },
    { type: 'bullet', text: 'Paper II: Indian Anthropology, Tribal Cultures in India, Problems of Tribal Communities, Forest Rights Act, Tribal Development Plans.' },

    { type: 'heading', text: '4. Mandatory Qualifying Language Papers (Not Counted in Merit)' },
    { type: 'table', headers: ['Paper', 'Subject', 'Total Marks', 'Passing Threshold'], rows: [
      ['Paper A (Qualifying)', 'Any One Modern Indian Language from 8th Schedule', '300 Marks', '25% (75 Marks required to pass)'],
      ['Paper B (Qualifying)', 'English Language (Comprehension & Précis Writing)', '300 Marks', '25% (75 Marks required to pass)']
    ], colWidths: [120, 190, 80, 110] }
  ]
));

// PAGE 5: Document Rules & Canonical Reference Booklist
pdf.addPage(createPageStream(
  5, totalPages,
  'UPSC OTR DOCUMENT SPECIFICATIONS & RECOMMENDED BOOKS',
  'Application Verification Standards & Standard Static Sources | SignResize.in',
  [
    { type: 'heading', text: '1. Official UPSC One-Time Registration (OTR) Upload Rules' },
    { type: 'paragraph', text: 'Failure to comply with dimension and file-size guidelines triggers immediate automated gate rejection on the upsconline.nic.in portal:' },
    { type: 'table', headers: ['Credential', 'File Format', 'Byte Size Bounds', 'Pixel Dimensions', 'Mandatory Standards'], rows: [
      ['Passport Photograph', 'JPG / JPEG only', '20.0 KB to 300.0 KB', 'Min 350x350, Max 1000x1000', 'Face occupies 75%, white/light background, Name & Date printed'],
      ['Candidate Signature', 'JPG / JPEG only', '20.0 KB to 300.0 KB', 'Min 350x350, Max 1000x1000', 'Black ink ballpoint pen, pure white unruled paper, running handwriting']
    ], colWidths: [100, 80, 95, 105, 120] },
    { type: 'callout', title: 'Free One-Click Image Optimization at SignResize.in', text: 'Use our specialized tools at SignResize.in/upsc-photo-resize/ and SignResize.in/upsc-signature-resize/ to prepare compliant JPGs in seconds.' },

    { type: 'heading', text: '2. Canonical Standard Reference Booklist (NCERT & Core References)' },
    { type: 'table', headers: ['Subject Area', 'Primary Reference Work', 'Author / Publisher', 'High-Yield Focus'], rows: [
      ['Indian Polity', 'Indian Polity (Latest Edition)', 'M. Laxmikanth (McGraw Hill)', 'Fundamental Rights, DPSP, Parliament, Panchayats'],
      ['Modern Indian History', 'A Brief History of Modern India', 'Rajiv Ahir, IPS (Spectrum)', 'Governor Generals, 1857 Revolt, INC Sessions, INA'],
      ['Ancient & Medieval India', 'NCERT Class XI & XII (Old/New)', 'RS Sharma & Satish Chandra', 'Indus Valley, Mauryas, Guptas, Delhi Sultanate, Mughals'],
      ['Indian Art & Culture', 'Indian Art and Culture', 'Nitin Singhania / Fine Arts NCERT', 'Temple Architecture, Classical Dances, UNESCO Sites'],
      ['Indian Economy', 'Indian Economy', 'Nitin Singhania / Ramesh Singh', 'National Income, Banking, Budget, Inflation, Forex'],
      ['Environment & Ecology', 'Environment', 'Shankar IAS Academy', 'Ecosystems, Wildlife Protection Act, UNFCCC CoP'],
      ['Physical Geography', 'Fundamentals of Physical Geography', 'NCERT Class XI', 'Geomorphology, Atmospheric Circulation, Ocean Currents']
    ], colWidths: [100, 130, 130, 140] },

    { type: 'heading', text: '3. Official Verification Link & Support' },
    { type: 'paragraph', text: 'Always cross-verify notification dates and guidelines directly from the official portal at https://upsc.gov.in and https://upsconline.nic.in.' }
  ]
));

const pdfBuffer = pdf.build();
const outPath = path.resolve('public/downloads/upsc-cse-syllabus-2026-guide.pdf');
fs.writeFileSync(outPath, pdfBuffer);
console.log(`Successfully generated UPSC Syllabus PDF at ${outPath} (${pdfBuffer.length} bytes)`);
