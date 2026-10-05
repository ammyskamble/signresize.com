import https from 'https';

const chunks = [
  'chunk-3O6A3GQ6', 'chunk-Q3IMUUTV', 'chunk-HUDGBDBZ', 'chunk-YBERPLDC',
  'chunk-PUFEE3VX', 'chunk-E7SQ563E', 'chunk-6ZO5TYMB', 'chunk-FMVG7RJL',
  'chunk-HFRIY6JH', 'chunk-F2BKZCCC', 'chunk-DIWINEYZ', 'chunk-LUGU65WD',
  'chunk-3RDSXATZ', 'chunk-NUUUO4P6', 'chunk-HXROCHL5', 'chunk-OWTYGBIE',
  'chunk-GNAOVTVC', 'chunk-XJFAXFN6', 'chunk-IDZIAWTU', 'chunk-6KBWEZ7A',
  'chunk-MEEBHV72', 'chunk-MFXFHRTR', 'chunk-NWNMRRH7', 'chunk-KLHQ37RO',
  'chunk-IDZRHZMZ', 'chunk-5ZJCEPLX', 'chunk-5O7PPDQZ', 'chunk-PCKM326G',
  'chunk-O26GUQXM', 'chunk-DEY64HY5', 'chunk-PV762CRJ', 'chunk-GXE32BOB',
  'chunk-GT7T3Y7M', 'chunk-ERWZSGJL', 'chunk-2QXUHOX3', 'chunk-EADUWVR5',
  'chunk-UFFCFYPK', 'chunk-LKRHGUB3', 'chunk-IQLWY5UY', 'chunk-IPHSSSBV',
  'chunk-3XA5GJ4K', 'chunk-ID3PSZKK', 'chunk-5REO7SIG', 'chunk-TJJ25MEB',
  'chunk-J56BEBYE', 'chunk-YSNTMCAS', 'chunk-BIO6ACXF', 'chunk-LKVYGH3X',
  'chunk-BLWPREFG', 'chunk-5IWNEYHT', 'chunk-AUOMQ7S4', 'chunk-G4LV2RQ5',
  'chunk-QMPKSQHU', 'chunk-2DR2RFXG', 'chunk-ZEZQU25E', 'chunk-ORUWTM3R',
  'chunk-FZBW4BXM', 'chunk-5F6N5ZKX', 'chunk-QGVZVNX2', 'chunk-RVCJLFH3',
  'chunk-OX3TRE4M', 'chunk-PYR4K65X', 'chunk-XTPM3OJW', 'chunk-Z5NWS6KT',
  'chunk-IWZCIHXH', 'chunk-H575F5PP', 'chunk-UT25G3YH', 'chunk-CMNIC6RJ',
  'chunk-OKV7Z2VC', 'chunk-SAQIFYXW', 'chunk-AH4XLQ6Q', 'chunk-S5GMXY3T',
  'chunk-OG6J5NPS', 'chunk-QG72JD5H', 'chunk-QKX2WKXD', 'chunk-OFE3DKXV',
  'chunk-JMNOZL7M'
];

async function checkChunk(name) {
  return new Promise((resolve) => {
    https.get(`https://ahrefs.com/assets/esbuild/${name}-release-20261002-bk45890-0d7d5550c5d95.js`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        if (data.includes('Find keywords') || data.includes('keyword-generator') || data.includes('Keyword Ideas') || data.includes('Questions')) {
          console.log('Match found in:', name);
          const urls = data.match(/https?:\/\/[^\s"'`)]+/g) || [];
          const endpoints = data.match(/\/api\/[a-zA-Z0-9_\/-]+/g) || [];
          console.log('URLs:', urls);
          console.log('Endpoints:', endpoints);
        }
        resolve();
      });
    }).on('error', () => resolve());
  });
}

for (const chunk of chunks) {
  await checkChunk(chunk);
}
