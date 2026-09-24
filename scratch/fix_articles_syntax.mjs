import fs from 'fs';

const targetFilePath = 'D:/Testing/Blogs/BionicsMetrix.online/src/data/articles.ts';
let fileText = fs.readFileSync(targetFilePath, 'utf8');

fileText = fileText.replace(
`        callout: {
          type: 'tip',
          title: "Instant Rollback & Unenrollment Tip",
          text: "==You can unenroll from beta builds at any time== by selecting \"Off\" under Beta Updates. Your device will stop receiving future beta iterations and smoothly update to the next official public GM release."
        }
      }}`,
`        callout: {
          type: 'tip',
          title: "Instant Rollback & Unenrollment Tip",
          text: "==You can unenroll from beta builds at any time== by selecting \"Off\" under Beta Updates. Your device will stop receiving future beta iterations and smoothly update to the next official public GM release."
        }
      }`
);

fs.writeFileSync(targetFilePath, fileText, 'utf8');
console.log("Fixed double brace on section 6 callout!");
