import fs from 'fs';

const content = fs.readFileSync('src/data/examPresets.ts', 'utf8');

const ids = ['cuet-ug-photo', 'upsssc-pet-photo', 'bssc-photo', 'dsssb-photo', 'kerala-psc-signature', 'rrb-photo'];
for (const id of ids) {
  const idx = content.indexOf(`id: '${id}'`);
  if (idx !== -1) {
    const end = content.indexOf('},', idx);
    console.log(`=== ${id} ===\n` + content.slice(idx - 4, end + 2));
  } else {
    console.log(`=== ${id} === NOT FOUND`);
  }
}
