import fs from 'fs';

const targetFilePath = 'D:/Testing/Blogs/BionicsMetrix.online/src/data/articles.ts';
let fileText = fs.readFileSync(targetFilePath, 'utf8');

const sectionHeading = '6. How, Where & Who Can Enroll in Apple Betas: Complete Step-by-Step Guide';
const sectionId = 'enrolling-apple-betas-guide';
const paragraphs = [
  'Enrolling in Apple beta software allows users and developers to test upcoming features before official public release. ==Understanding who is eligible, where settings are located, and how to safely install beta builds prevents data loss and software instability.==',
  '**WHO SHOULD ENROLL?**\n==Developer Betas are designed for active developers== building and testing apps against new APIs (such as the iOS 20.1 6-blade variable aperture API or Xcode 18 SDKs). Registered Apple Developer Program members ($99/yr) and free Apple ID developer accounts gain immediate access to early build seeds.\n\n==Public Betas are intended for general tech enthusiasts== and public testers. Public builds are typically seeded 24 to 48 hours after developer builds to ensure major bricking bugs are resolved. ==Apple strongly advises against installing any beta software on primary daily-driver devices== without a secondary backup phone or Mac.',
  '**WHERE TO ENROLL?**\nAccessing beta software builds no longer requires installing custom configuration profiles. Apple integrates beta channel toggles directly inside system settings:\n• ==On iPhone/iPad==: Navigate to **Settings > General > Software Update > Beta Updates**.\n• ==On Mac==: Open **System Settings > General > Software Update**, then click the **(i)** information icon next to Beta Updates.\n• ==Official Web Portals==: Sign in with your Apple ID at **[beta.apple.com](https://beta.apple.com)** for Public Beta access or **[developer.apple.com](https://developer.apple.com)** for Developer Beta enrollment.',
  '**HOW TO ENROLL (STEP-BY-STEP PROTOCOL):**\n1. ==Create a Mandatory Full Backup==: Perform an encrypted iCloud or Finder backup for iOS/iPadOS devices, or run a Time Machine snapshot for macOS.\n2. ==Link Apple ID Portal==: Visit **beta.apple.com** or **developer.apple.com** in Safari and sign in with the Apple ID registered on your device.\n3. ==Toggle Beta Channel==: Go to **Settings > General > Software Update > Beta Updates** on your device and select **iOS 20 Public Beta** or **iOS 20 Developer Beta** (or **macOS Golden Gate Beta**).\n4. ==Download & Install==: Return to the main Software Update screen, wait for the beta update card to populate, tap **Download and Install**, enter your device passcode, and allow the system to reboot.'
];

const calloutTitle = 'Instant Rollback & Unenrollment Tip';
const calloutText = '==You can unenroll from beta builds at any time== by selecting "Off" under Beta Updates. Your device will stop receiving future beta iterations and smoothly update to the next official public GM release.';

const targetArticleSlug = 'latest-ios-betas-macos-golden-gate-first-public-release';

if (fileText.includes(targetArticleSlug)) {
  console.log("Found article, processing enrollment update...");

  // Check if section already added
  if (!fileText.includes(sectionId)) {
    // Add quickNav item
    const navMarker = `{ id: 'upgrade-installation-guide', label: '5. Public Release vs Beta Upgrade Protocol' }`;
    if (fileText.includes(navMarker)) {
      fileText = fileText.replace(
        navMarker,
        `${navMarker},\n      { id: '${sectionId}', label: '6. How, Where & Who Can Enroll in Apple Betas' }`
      );
    }

    // Add Section Object to sections array
    const sectionObjStr = `,\n      {\n        heading: ${JSON.stringify(sectionHeading)},\n        id: ${JSON.stringify(sectionId)},\n        paragraphs: [\n${paragraphs.map(p => `          ${JSON.stringify(p)}`).join(',\n')}\n        ],\n        callout: {\n          type: 'tip',\n          title: ${JSON.stringify(calloutTitle)},\n          text: ${JSON.stringify(calloutText)}\n        }\n      }`;

    const warningMarker = `title: 'Pre-Upgrade Installation Checklist'`;
    const warningIndex = fileText.indexOf(warningMarker);
    if (warningIndex !== -1) {
      const sectionEndPos = fileText.indexOf(`}\n      }`, warningIndex);
      if (sectionEndPos !== -1) {
        fileText = fileText.slice(0, sectionEndPos + 8) + sectionObjStr + fileText.slice(sectionEndPos + 8);
        fs.writeFileSync(targetFilePath, fileText, 'utf8');
        console.log("Successfully added Enrollment section!");
      }
    }
  } else {
    console.log("Enrollment section already exists.");
  }
} else {
  console.error("Target article slug not found.");
}
