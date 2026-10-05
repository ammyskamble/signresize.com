import fs from 'fs';

const postFile = 'src/data/blogPostsData.ts';
let code = fs.readFileSync(postFile, 'utf8');

const section6Html = fs.readFileSync('scratch/section6_keyword_matrix.html', 'utf8');

// Target anchor where section 5 closes:
const targetSnippet = `    <div class="p-4 rounded-xl bg-card border border-border space-y-2">
      <h3 class="font-bold text-sm sm:text-base text-foreground">CTET Result Declaration & DigiLocker Download</h3>
      <p class="text-xs sm:text-sm text-muted-foreground leading-relaxed">
        Following verification of challenged keys, CBSE declares the official <strong>ctet result</strong> and qualifying <strong>ctet cut off</strong> thresholds online. Because physical marksheets are discontinued, candidates must complete their official <strong>ctet certificate download</strong> via <strong>DigiLocker</strong> using their Aadhaar-linked mobile credentials.
      </p>
    </div>
  </div>`;

if (!code.includes('Following verification of challenged keys, CBSE declares the official <strong>ctet result</strong>')) {
  console.error('Target anchor in blogPostsData.ts not found!');
  process.exit(1);
}

// Find index of that anchor and closing of section 5:
const anchorText = `Following verification of challenged keys, CBSE declares the official <strong>ctet result</strong> and qualifying <strong>ctet cut off</strong> thresholds online. Because physical marksheets are discontinued, candidates must complete their official <strong>ctet certificate download</strong> via <strong>DigiLocker</strong> using their Aadhaar-linked mobile credentials.
      </p>
    </div>
  </div>`;

const anchorIndex = code.indexOf(anchorText);
const insertPoint = anchorIndex + anchorText.length;

const updatedCode = code.slice(0, insertPoint) + '\n\n' + section6Html + '\n' + code.slice(insertPoint);

fs.writeFileSync(postFile, updatedCode, 'utf8');
console.log('Successfully inserted Section 6 into src/data/blogPostsData.ts!');
