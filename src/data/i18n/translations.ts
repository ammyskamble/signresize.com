// src/data/i18n/translations.ts
export type SupportedLang = 'en' | 'hi' | 'mr';

export interface TranslationDictionary {
  // Navigation & Common
  nav: {
    search: string;
    searchPlaceholder: string;
    govJobs: string;
    dailyAlerts: string;
    examSpecs: string;
    tools: string;
    language: string;
  };
  // Resizer Tool
  tool: {
    signatureMode: string;
    signatureSub: string;
    photoMode: string;
    photoSub: string;
    documentMode: string;
    documentSub: string;
    uploadTitle: string;
    uploadSubtitle: string;
    uploadButton: string;
    orDragDrop: string;
    supportedFormats: string;
    privateBadge: string;
    sampleButton: string;
    drawButton: string;
    dimensionsTitle: string;
    widthLabel: string;
    heightLabel: string;
    unitPx: string;
    unitCm: string;
    unitMm: string;
    unitInch: string;
    lockAspect: string;
    fileSizeTitle: string;
    minKbLabel: string;
    maxKbLabel: string;
    strictLimit: string;
    dpiLabel: string;
    qualityLabel: string;
    enhancementsTitle: string;
    whiteBgFilter: string;
    sharpenFilter: string;
    autoCropClean: string;
    nameDateStamp: string;
    candidateNameLabel: string;
    dateLabel: string;
    downloadButton: string;
    downloadingButton: string;
    resetButton: string;
    rotateButton: string;
    resetCropButton: string;
    searchPresetsPlaceholder: string;
    morePresetsLabel: string;
    presetsFound: string;
    close: string;
    viewAllTable: string;
    originalPreview: string;
    processedPreview: string;
    fileSizeNotice: string;
    successMessage: string;
  };
  // SEO & Headings
  seo: {
    mainHeading: string;
    subHeading: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
}

export const TRANSLATIONS: Record<SupportedLang, TranslationDictionary> = {
  en: {
    nav: {
      search: "Search",
      searchPlaceholder: "Search 40+ exams (e.g. UPSC, SSC, GATE, PAN, RRB)...",
      govJobs: "Pan-India Govt Jobs",
      dailyAlerts: "Daily Exam Alerts",
      examSpecs: "40+ Exam Specs",
      tools: "Resizers & Tools",
      language: "Language",
    },
    tool: {
      signatureMode: "Signature Resizer",
      signatureSub: "140×60 px • 10–20 KB standard",
      photoMode: "Passport Photo Resizer",
      photoSub: "350×450 px • 20–50 KB (3.5×4.5 cm)",
      documentMode: "Document Resizer",
      documentSub: "A4 / 200–500 KB Marksheets & Certificates",
      uploadTitle: "Choose Image or Drag & Drop Here",
      uploadSubtitle: "Select your signature or photo to automatically resize & crop",
      uploadButton: "Browse File",
      orDragDrop: "or drag and drop here",
      supportedFormats: "Supports JPG, PNG, WEBP, PDF up to 15 MB",
      privateBadge: "100% In-Browser Private — No files ever leave your device",
      sampleButton: "Try Sample",
      drawButton: "Draw Signature",
      dimensionsTitle: "Custom Dimensions",
      widthLabel: "Width",
      heightLabel: "Height",
      unitPx: "px",
      unitCm: "cm",
      unitMm: "mm",
      unitInch: "inch",
      lockAspect: "Maintain aspect ratio",
      fileSizeTitle: "Target File Size (KB)",
      minKbLabel: "Min Size",
      maxKbLabel: "Max Size",
      strictLimit: "Strict File Size Guard (Guarantee Under Limit)",
      dpiLabel: "Resolution (DPI)",
      qualityLabel: "Compression Quality",
      enhancementsTitle: "Filters & Enhancements",
      whiteBgFilter: "Pure White Background (Clean Shadows)",
      sharpenFilter: "Darken & High Contrast Ink",
      autoCropClean: "Auto-Fit & Center",
      nameDateStamp: "Add Name & Date Stamp (Mandatory for SSC/State exams)",
      candidateNameLabel: "Candidate Name",
      dateLabel: "Date of Photo",
      downloadButton: "Download Resized Signature",
      downloadingButton: "Processing & Downloading...",
      resetButton: "Reset",
      rotateButton: "Rotate 90°",
      resetCropButton: "Reset Crop Area",
      searchPresetsPlaceholder: "Search 40+ exam presets (UPSC, SSC, MPSC, PAN)...",
      morePresetsLabel: "All 40+ Exam Presets",
      presetsFound: "presets found",
      close: "Close ✕",
      viewAllTable: "View Full 40+ Exam Table",
      originalPreview: "Original Upload",
      processedPreview: "Final Resized Output",
      fileSizeNotice: "Guaranteed within target range without blurring",
      successMessage: "Signature resized successfully! Ready to upload on your exam portal.",
    },
    seo: {
      mainHeading: "Resize Signature to 10 to 20 KB Online Free",
      subHeading: "Free online signature & photo resizer for UPSC, SSC, MPSC, IBPS, RRB & Govt Exam Portals. Adjust width and height in cm, kb, and pixels with 100% in-browser privacy.",
      feature1Title: "100% In-Browser Security",
      feature1Desc: "Your files are processed directly on your device via HTML5 Canvas. No uploads to external servers.",
      feature2Title: "Exact Official Dimensions",
      feature2Desc: "Instant preset dimensions for 40+ Indian exams (140×60 px, 3.5×4.5 cm, 10–20 KB, 20–50 KB).",
      feature3Title: "Zero Quality Loss",
      feature3Desc: "Advanced multi-pass binary compression guarantees strict file size limits with maximum ink sharpness.",
    },
  },

  hi: {
    nav: {
      search: "खोजें",
      searchPlaceholder: "40+ परीक्षा प्रारूप खोजें (जैसे UPSC, SSC, GATE, PAN, RRB)...",
      govJobs: "अखिल भारतीय सरकारी नौकरियाँ",
      dailyAlerts: "दैनिक परीक्षा अपडेट",
      examSpecs: "40+ परीक्षा नियम",
      tools: "रिसाइज़र और टूल्स",
      language: "भाषा",
    },
    tool: {
      signatureMode: "हस्ताक्षर रिसाइज़र (Signature)",
      signatureSub: "140×60 px • 10–20 KB मानक",
      photoMode: "पासपोर्ट फोटो रिसाइज़र (Photo)",
      photoSub: "350×450 px • 20–50 KB (3.5×4.5 सेमी)",
      documentMode: "दस्तावेज़ रिसाइज़र (Document)",
      documentSub: "A4 / 200–500 KB मार्कशीट और प्रमाण पत्र",
      uploadTitle: "चित्र चुनें या यहाँ खींचें (ड्रैग करें)",
      uploadSubtitle: "हस्ताक्षर या फोटो को तुरंत रिसाइज और क्रॉप करने के लिए चुनें",
      uploadButton: "फ़ाइल चुनें",
      orDragDrop: "या फ़ाइल यहाँ खींचें",
      supportedFormats: "JPG, PNG, WEBP, PDF 15 MB तक समर्थित",
      privateBadge: "100% ब्राउज़र में सुरक्षित — कोई फ़ाइल सर्वर पर अपलोड नहीं होती",
      sampleButton: "नमूना आज़माएँ",
      drawButton: "हस्ताक्षर बनाएं",
      dimensionsTitle: "कस्टम आयाम (Dimensions)",
      widthLabel: "चौड़ाई (Width)",
      heightLabel: "ऊँचाई (Height)",
      unitPx: "px",
      unitCm: "सेमी (cm)",
      unitMm: "मिमी (mm)",
      unitInch: "इंच (inch)",
      lockAspect: "पहलू अनुपात बनाए रखें (Aspect Ratio)",
      fileSizeTitle: "लक्षित फ़ाइल आकार (KB)",
      minKbLabel: "न्यूनतम आकार (Min KB)",
      maxKbLabel: "अधिकतम आकार (Max KB)",
      strictLimit: "सख्त फ़ाइल सीमा रक्षक (निर्धारित KB से कम की गारंटी)",
      dpiLabel: "रिज़ॉल्यूशन (DPI)",
      qualityLabel: "संपीड़न गुणवत्ता (Quality)",
      enhancementsTitle: "फिल्टर और स्पष्टता (Enhancements)",
      whiteBgFilter: "शुद्ध सफेद पृष्ठभूमि (कागज़ की छाया हटाएं)",
      sharpenFilter: "स्याही को गहरा और स्पष्ट करें (High Contrast)",
      autoCropClean: "ऑटो-फिट और केंद्र में करें",
      nameDateStamp: "नाम और दिनांक स्टैम्प जोड़ें (SSC/राज्य परीक्षाओं हेतु)",
      candidateNameLabel: "उम्मीदवार का नाम",
      dateLabel: "फोटो खींचने की तारीख",
      downloadButton: "रिसाइज हस्ताक्षर डाउनलोड करें",
      downloadingButton: "प्रोसेसिंग और डाउनलोड हो रहा है...",
      resetButton: "रीसेट करें",
      rotateButton: "90° घुमाएँ",
      resetCropButton: "क्रॉप रीसेट करें",
      searchPresetsPlaceholder: "40+ परीक्षा प्रारूप खोजें (UPSC, SSC, UPPSC, BPSC, PAN)...",
      morePresetsLabel: "सभी 40+ परीक्षा प्रारूप",
      presetsFound: "प्रारूप मिले",
      close: "बंद करें ✕",
      viewAllTable: "संपूर्ण 40+ परीक्षा तालिका देखें",
      originalPreview: "मूल फ़ाइल (Original)",
      processedPreview: "अंतिम रिसाइज परिणाम (Output)",
      fileSizeNotice: "बिना धुंधलापन के सटीक KB सीमा में गारंटीशुदा",
      successMessage: "हस्ताक्षर सफलतापूर्वक रिसाइज हो गया! परीक्षा पोर्टल पर अपलोड करने हेतु तैयार।",
    },
    seo: {
      mainHeading: "ऑनलाइन हस्ताक्षर 10 से 20 KB में रिसाइज करें (फ्री)",
      subHeading: "UPSC, SSC, UPPSC, BPSC, IBPS, RRB और अन्य सरकारी परीक्षाओं के लिए मुफ्त ऑनलाइन सिग्नेचर और फोटो रिसाइज़र। सेमी, पिक्सेल और 10–20 KB में 100% सुरक्षित रिसाइज करें।",
      feature1Title: "100% ब्राउज़र सुरक्षा",
      feature1Desc: "आपकी फाइलें आपके मोबाइल/कंप्यूटर में ही प्रोसेस होती हैं। कोई सर्वर अपलोड नहीं।",
      feature2Title: "सटीक आधिकारिक नियम",
      feature2Desc: "40+ भारतीय परीक्षाओं के लिए पूर्व-निर्धारित आकार (140×60 px, 3.5×4.5 cm, 10–20 KB, 20–50 KB)।",
      feature3Title: "बिना धुंधलापन (Zero Blur)",
      feature3Desc: "स्मार्ट बाइनरी कम्प्रेशन जो स्याही की तीक्ष्णता बनाए रखते हुए फाइल का साइज कम करता है।",
    },
  },

  mr: {
    nav: {
      search: "शोधा",
      searchPlaceholder: "40+ परीक्षा फॉरमॅट शोधा (MPSC, पोलीस भरती, तलाठी, UPSC, SSC)...",
      govJobs: "सर्व राज्य सरकारी नोकऱ्या",
      dailyAlerts: "दैनिक परीक्षा अपडेट्स",
      examSpecs: "40+ परीक्षा नियम",
      tools: "रिसाइझर टूल्स",
      language: "भाषा",
    },
    tool: {
      signatureMode: "स्वाक्षरी रिसाइझर (Signature)",
      signatureSub: "140×60 px • 10–20 KB मानक",
      photoMode: "पासपोर्ट फोटो रिसाइझर (Photo)",
      photoSub: "350×450 px • 20–50 KB (3.5×4.5 सेमी)",
      documentMode: "दस्तऐवज रिसाइझर (Document)",
      documentSub: "A4 / 200–500 KB गुणपत्रिका व प्रमाणपत्रे",
      uploadTitle: "फोटो निवडा किंवा येथे ड्रॅग करा",
      uploadSubtitle: "स्वाक्षरी किंवा फोटो त्वरित रिसाइझ व क्रॉप करण्यासाठी निवडा",
      uploadButton: "फाईल निवडा",
      orDragDrop: "किंवा येथे फाईल ड्रॅग करा",
      supportedFormats: "JPG, PNG, WEBP, PDF 15 MB पर्यंत समर्थित",
      privateBadge: "100% सुरक्षित व खाजगी — कोणतीही फाईल सर्व्हरवर अपलोड होत नाही",
      sampleButton: "नमुना तपासा",
      drawButton: "स्वाक्षरी काढा",
      dimensionsTitle: "कस्टम आकार (Dimensions)",
      widthLabel: "रुंदी (Width)",
      heightLabel: "उंची (Height)",
      unitPx: "px",
      unitCm: "सेमी (cm)",
      unitMm: "मिमी (mm)",
      unitInch: "इंच (inch)",
      lockAspect: "प्रमाणबद्ध आकार ठेवा (Aspect Ratio)",
      fileSizeTitle: "लक्ष्य फाईल साईज (KB)",
      minKbLabel: "किमान साईज (Min KB)",
      maxKbLabel: "कमाल साईज (Max KB)",
      strictLimit: "कडक फाईल साईज मर्यादा (मर्यादेखाली राहण्याची खात्री)",
      dpiLabel: "रिझोल्यूशन (DPI)",
      qualityLabel: "कॉम्प्रेशन गुणवत्ता (Quality)",
      enhancementsTitle: "फिल्टर्स आणि सुधारणा (Enhancements)",
      whiteBgFilter: "स्वच्छ पांढरी पार्श्वभूमी (कागदाची सावली काढा)",
      sharpenFilter: "स्वाक्षरी ठळक आणि स्पष्ट करा (High Contrast)",
      autoCropClean: "ऑटो-फिट आणि मध्यभागी आणा",
      nameDateStamp: "नाव आणि तारीख स्टॅम्प जोडा (MPSC/पोलीस भरती आवश्यक)",
      candidateNameLabel: "उमेदवाराचे नाव",
      dateLabel: "फोटो काढल्याचा दिनांक",
      downloadButton: "रिसाइझ केलेली स्वाक्षरी डाउनलोड करा",
      downloadingButton: "प्रोसेसिंग आणि डाउनलोड सुरू आहे...",
      resetButton: "रीसेट करा",
      rotateButton: "90° फिरवा",
      resetCropButton: "क्रॉप पूर्ववत करा",
      searchPresetsPlaceholder: "40+ परीक्षा फॉरमॅट शोधा (MPSC, पोलीस भरती, तलाठी, SSC, RRB)...",
      morePresetsLabel: "सर्व 40+ परीक्षा फॉरमॅट",
      presetsFound: "फॉरमॅट सापडले",
      close: "बंद करा ✕",
      viewAllTable: "संपूर्ण 40+ परीक्षा तक्ता पहा",
      originalPreview: "मूळ फाईल (Original)",
      processedPreview: "अंतिम रिसाइझ परिणाम (Output)",
      fileSizeNotice: "अस्पष्ट न होता अचूक KB मर्यादेत असण्याची हमी",
      successMessage: "स्वाक्षरी यशस्वीरित्या रिसाइझ झाली! परीक्षा पोर्टलवर अपलोड करण्यासाठी सज्ज आहे.",
    },
    seo: {
      mainHeading: "ऑनलाइन स्वाक्षरी 10 ते 20 KB मध्ये रिसाइझ करा (मोफत)",
      subHeading: "MPSC, पोलीस भरती, तलाठी भरती, जिल्हा परिषद, SSC आणि सर्व सरकारी परीक्षांसाठी मोफत स्वाक्षरी व फोटो रिसाइझर. सेमी, पिक्सेल आणि 10–20 KB मध्ये 100% सुरक्षित रिसाइझ करा.",
      feature1Title: "100% खाजगी व सुरक्षित",
      feature1Desc: "तुमचे फोटो तुमच्याच मोबाईल किंवा लॅपटॉपवर प्रोसेस होतात. कोणत्याही सर्व्हरवर सेव्ह होत नाहीत.",
      feature2Title: "अधिकृत सरकारी नियम",
      feature2Desc: "MPSC, पोलीस भरती, महापरीक्षा आणि 40+ परीक्षांसाठी अचूक आकार (140×60 px, 3.5×4.5 cm, 10–20 KB, 20–50 KB).",
      feature3Title: "स्पष्ट आणि ठळक स्वाक्षरी",
      feature3Desc: "स्मार्ट कम्प्रेशनमुळे स्वाक्षरी किंवा फोटो अस्पष्ट (blur) न होता अचूक साईजमध्ये तयार होतो.",
    },
  },
};

export const LANG_CONFIG: Record<SupportedLang, { name: string; nativeName: string; flag: string; path: string }> = {
  en: { name: "English", nativeName: "English", flag: "🇬🇧", path: "/" },
  hi: { name: "Hindi", nativeName: "हिंदी", flag: "🇮🇳", path: "/hi/" },
  mr: { name: "Marathi", nativeName: "मराठी", flag: "🚩", path: "/mr/" },
};
