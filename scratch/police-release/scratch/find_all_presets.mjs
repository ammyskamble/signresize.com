import fs from 'fs';

const content = fs.readFileSync('src/data/examPresets.ts', 'utf8');

function findIds(pattern) {
  const re = new RegExp(`id:\\s*['"]([^'"]*${pattern}[^'"]*)['"]`, 'gi');
  return [...content.matchAll(re)].map(m => m[1]);
}

console.log('CUET:', findIds('cuet'));
console.log('UPSSSC:', findIds('upsssc'));
console.log('BSSC:', findIds('bssc'));
console.log('DSSSB:', findIds('dsssb'));
console.log('Kerala:', findIds('kerala'));
console.log('GDS:', findIds('gds'));
console.log('IB:', findIds('ib-'));
console.log('Sarathi:', findIds('sarathi'));
console.log('MTS:', findIds('mts'));
console.log('Agniveer:', findIds('agniveer'));
console.log('Navy:', findIds('navy'));
console.log('Air Force:', findIds('iaf|afcat'));
console.log('State PSC:', findIds('psc'));
