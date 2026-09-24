import fs from 'fs';

const targetFilePath = 'D:/Testing/Blogs/BionicsMetrix.online/src/data/articles.ts';

let fileText = fs.readFileSync(targetFilePath, 'utf8');

const newLiveWire = `  {
    id: 'lw-macos-golden-gate-ios-betas',
    title: 'macOS Golden Gate First Public Release Live & iOS 20.1 Beta 4 Build Notes Deployed',
    timestamp: 'Sept 23, 2026 • 09:00 AM PDT',
    category: 'Software',
    categoryBadgeClass: 'badge-purple',
    snippet: 'Apple officially ships macOS Golden Gate (Build 24A500) public GM release alongside iOS 20.1 Beta 4 with mechanical variable aperture APIs.',
    link: '/articles/latest-ios-betas-macos-golden-gate-first-public-release',
  },
`;

if (!fileText.includes("lw-macos-golden-gate-ios-betas")) {
  const marker = "export const liveWireUpdates: LiveWireItem[] = [";
  const pos = fileText.indexOf(marker);
  if (pos !== -1) {
    const insertPos = pos + marker.length;
    fileText = fileText.slice(0, insertPos) + "\n" + newLiveWire + fileText.slice(insertPos);
    fs.writeFileSync(targetFilePath, fileText, 'utf8');
    console.log("Successfully added LiveWire item for macOS Golden Gate");
  }
} else {
  console.log("LiveWire item already present");
}

// Add tag to topicalTags if not present
if (!fileText.includes("#macOSGoldenGate")) {
  const tagMarker = "export const topicalTags = [";
  const tagPos = fileText.indexOf(tagMarker);
  if (tagPos !== -1) {
    const newTag = `  { label: '#macOSGoldenGate', count: '1 article', link: '/articles/latest-ios-betas-macos-golden-gate-first-public-release' },\n`;
    const insertPos = tagPos + tagMarker.length;
    fileText = fileText.slice(0, insertPos) + "\n" + newTag + fileText.slice(insertPos);
    fs.writeFileSync(targetFilePath, fileText, 'utf8');
    console.log("Successfully added topical tag for #macOSGoldenGate");
  }
}
