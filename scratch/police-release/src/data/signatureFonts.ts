export interface FontOption {
  id: string;
  name: string;
  fontFamily: string;
  googleFamily: string;
  category: 'calligraphy' | 'handwritten' | 'modern';
}

export const SIGNATURE_FONTS: FontOption[] = [
  // Elegant & Calligraphy (19 Fonts)
  { id: 'great-vibes', name: 'Classic Calligraphy', fontFamily: '"Great Vibes", cursive', googleFamily: 'Great+Vibes', category: 'calligraphy' },
  { id: 'allura', name: 'Executive Flourish', fontFamily: '"Allura", cursive', googleFamily: 'Allura', category: 'calligraphy' },
  { id: 'alex-brush', name: 'Presidential Swash', fontFamily: '"Alex Brush", cursive', googleFamily: 'Alex+Brush', category: 'calligraphy' },
  { id: 'parisienne', name: 'French Chic Script', fontFamily: '"Parisienne", cursive', googleFamily: 'Parisienne', category: 'calligraphy' },
  { id: 'tangerine', name: 'Slender Calligraphy', fontFamily: '"Tangerine", cursive', googleFamily: 'Tangerine', category: 'calligraphy' },
  { id: 'petit-formal', name: 'Royal Diplomatic', fontFamily: '"Petit Formal Script", cursive', googleFamily: 'Petit+Formal+Script', category: 'calligraphy' },
  { id: 'pinyon-script', name: 'Aristocratic Script', fontFamily: '"Pinyon Script", cursive', googleFamily: 'Pinyon+Script', category: 'calligraphy' },
  { id: 'italianno', name: 'Italian Monoline', fontFamily: '"Italianno", cursive', googleFamily: 'Italianno', category: 'calligraphy' },
  { id: 'qwigley', name: 'Modern Calligraphy', fontFamily: '"Qwigley", cursive', googleFamily: 'Qwigley', category: 'calligraphy' },
  { id: 'bilbo-swash', name: 'Swash Cursive', fontFamily: '"Bilbo Swash Caps", cursive', googleFamily: 'Bilbo+Swash+Caps', category: 'calligraphy' },
  { id: 'herr-von', name: 'Vintage Quill Script', fontFamily: '"Herr Von Muellerhoff", cursive', googleFamily: 'Herr+Von+Muellerhoff', category: 'calligraphy' },
  { id: 'monsieur-la', name: 'Ornate Signature', fontFamily: '"Monsieur La Doulaise", cursive', googleFamily: 'Monsieur+La+Doulaise', category: 'calligraphy' },
  { id: 'mr-de-haviland', name: 'Classic Fountain Pen', fontFamily: '"Mr De Haviland", cursive', googleFamily: 'Mr+De+Haviland', category: 'calligraphy' },
  { id: 'mrs-saint', name: 'Noble Script', fontFamily: '"Mrs Saint Delafield", cursive', googleFamily: 'Mrs+Saint+Delafield', category: 'calligraphy' },
  { id: 'arizonia', name: 'Western Ribbon Script', fontFamily: '"Arizonia", cursive', googleFamily: 'Arizonia', category: 'calligraphy' },
  { id: 'ruthie', name: 'Delicate Calligraphy', fontFamily: '"Ruthie", cursive', googleFamily: 'Ruthie', category: 'calligraphy' },
  { id: 'stalemate', name: 'Vintage Dip Pen', fontFamily: '"Stalemate", cursive', googleFamily: 'Stalemate', category: 'calligraphy' },
  { id: 'windsong', name: 'Featherlight Script', fontFamily: '"WindSong", cursive', googleFamily: 'WindSong', category: 'calligraphy' },
  { id: 'festive', name: 'Celebration Flourish', fontFamily: '"Festive", cursive', googleFamily: 'Festive', category: 'calligraphy' },

  // Natural & Handwritten (20 Fonts)
  { id: 'caveat', name: 'Natural Running Pen', fontFamily: '"Caveat", cursive', googleFamily: 'Caveat', category: 'handwritten' },
  { id: 'homemade-apple', name: 'Organic Fountain Pen', fontFamily: '"Homemade Apple", cursive', googleFamily: 'Homemade+Apple', category: 'handwritten' },
  { id: 'dancing-script', name: 'Dynamic Casual', fontFamily: '"Dancing Script", cursive', googleFamily: 'Dancing+Script', category: 'handwritten' },
  { id: 'cedarville', name: 'Authentic Quick Sign', fontFamily: '"Cedarville Cursive", cursive', googleFamily: 'Cedarville+Cursive', category: 'handwritten' },
  { id: 'reenie-beanie', name: 'Fine-Tip Ballpoint', fontFamily: '"Reenie Beanie", cursive', googleFamily: 'Reenie+Beanie', category: 'handwritten' },
  { id: 'shadows-light', name: 'Modern Personal Hand', fontFamily: '"Shadows Into Light", cursive', googleFamily: 'Shadows+Into+Light', category: 'handwritten' },
  { id: 'covered-grace', name: 'Clean Freehand', fontFamily: '"Covered By Your Grace", cursive', googleFamily: 'Covered+By+Your+Grace', category: 'handwritten' },
  { id: 'kristi', name: 'Speedy Penman', fontFamily: '"Kristi", cursive', googleFamily: 'Kristi', category: 'handwritten' },
  { id: 'bad-script', name: 'Fluid Cursive', fontFamily: '"Bad Script", cursive', googleFamily: 'Bad+Script', category: 'handwritten' },
  { id: 'la-belle', name: 'Tall Artistic Hand', fontFamily: '"La Belle Aurore", cursive', googleFamily: 'La+Belle+Aurore', category: 'handwritten' },
  { id: 'nothing-you-could', name: 'Effortless Ballpoint', fontFamily: '"Nothing You Could Do", cursive', googleFamily: 'Nothing+You+Could+Do', category: 'handwritten' },
  { id: 'waiting-sunrise', name: 'Slanted Everyday Hand', fontFamily: '"Waiting for the Sunrise", cursive', googleFamily: 'Waiting+for+the+Sunrise', category: 'handwritten' },
  { id: 'zeyada', name: 'Expressive Sketch', fontFamily: '"Zeyada", cursive', googleFamily: 'Zeyada', category: 'handwritten' },
  { id: 'meddon', name: 'Antique Fountain Pen', fontFamily: '"Meddon", cursive', googleFamily: 'Meddon', category: 'handwritten' },
  { id: 'indie-flower', name: 'Friendly Cursive', fontFamily: '"Indie Flower", cursive', googleFamily: 'Indie+Flower', category: 'handwritten' },
  { id: 'just-me-again', name: 'Spontaneous Monoline', fontFamily: '"Just Me Again Down Here", cursive', googleFamily: 'Just+Me+Again+Down+Here', category: 'handwritten' },
  { id: 'loved-by-king', name: 'Tall Graceful Script', fontFamily: '"Loved by the King", cursive', googleFamily: 'Loved+by+the+King', category: 'handwritten' },
  { id: 'over-rainbow', name: 'Joyful Personal Hand', fontFamily: '"Over the Rainbow", cursive', googleFamily: 'Over+the+Rainbow', category: 'handwritten' },
  { id: 'sue-ellen', name: 'Slender Condensed Hand', fontFamily: '"Sue Ellen Francisco", cursive', googleFamily: 'Sue+Ellen+Francisco', category: 'handwritten' },
  { id: 'girl-next-door', name: 'Natural Diary Script', fontFamily: '"The Girl Next Door", cursive', googleFamily: 'The+Girl+Next+Door', category: 'handwritten' },

  // Modern & Executive (15 Fonts)
  { id: 'sacramento', name: 'Classic Monoline', fontFamily: '"Sacramento", cursive', googleFamily: 'Sacramento', category: 'modern' },
  { id: 'marck-script', name: 'Smooth Business Flow', fontFamily: '"Marck Script", cursive', googleFamily: 'Marck+Script', category: 'modern' },
  { id: 'pacifico', name: 'Bold Modern Script', fontFamily: '"Pacifico", cursive', googleFamily: 'Pacifico', category: 'modern' },
  { id: 'satisfy', name: 'Sleek Executive', fontFamily: '"Satisfy", cursive', googleFamily: 'Satisfy', category: 'modern' },
  { id: 'kaushan-script', name: 'Textured Marker', fontFamily: '"Kaushan Script", cursive', googleFamily: 'Kaushan+Script', category: 'modern' },
  { id: 'yellowtail', name: 'Retro Signature', fontFamily: '"Yellowtail", cursive', googleFamily: 'Yellowtail', category: 'modern' },
  { id: 'rochester', name: 'Distinguished Executive', fontFamily: '"Rochester", cursive', googleFamily: 'Rochester', category: 'modern' },
  { id: 'montez', name: 'Playful Business Cursive', fontFamily: '"Montez", cursive', googleFamily: 'Montez', category: 'modern' },
  { id: 'cookie', name: 'Vintage Script', fontFamily: '"Cookie", cursive', googleFamily: 'Cookie', category: 'modern' },
  { id: 'courgette', name: 'Compact Professional', fontFamily: '"Courgette", cursive', googleFamily: 'Courgette', category: 'modern' },
  { id: 'damion', name: 'Mid-Century Script', fontFamily: '"Damion", cursive', googleFamily: 'Damion', category: 'modern' },
  { id: 'euphoria-script', name: 'Contemporary Fluid', fontFamily: '"Euphoria Script", cursive', googleFamily: 'Euphoria+Script', category: 'modern' },
  { id: 'clicker-script', name: 'Brisk Casual', fontFamily: '"Clicker Script", cursive', googleFamily: 'Clicker+Script', category: 'modern' },
  { id: 'rock-salt', name: 'Felt-Tip Marker', fontFamily: '"Rock Salt", cursive', googleFamily: 'Rock+Salt', category: 'modern' },
  { id: 'gloria-hallelujah', name: 'Spirited Pen', fontFamily: '"Gloria Hallelujah", cursive', googleFamily: 'Gloria+Hallelujah', category: 'modern' }
];

export const INK_COLORS = [
  { id: 'black', label: 'Classic Black', value: '#000000' },
  { id: 'navy', label: 'Executive Navy', value: '#0f2444' },
  { id: 'royal', label: 'Royal Blue', value: '#1d4ed8' },
  { id: 'charcoal', label: 'Charcoal Slate', value: '#334155' },
  { id: 'emerald', label: 'Forest Green', value: '#047857' },
  { id: 'burgundy', label: 'Crimson Wine', value: '#991b1b' }
];
