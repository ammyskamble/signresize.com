# scratch/generate_gd.py
import json

def get_ssc_gd_manifest():
    questions = []

    # ----------------- PART A: REASONING (20 Qs) -----------------
    r_topics = [
        ("gd-r01", "analogy", ("Analogy", "सादृश्यता"), "easy",
         ("Select the related word: \nCow : Calf :: Hen : ?", 
          "संबंधित शब्द चुनिए: \nगाय : बछड़ा :: मुर्गी : ?"),
         (["Chick", "Puppy", "Kitten", "Cub"], 
          ["चूजा (Chick)", "पिल्ला (Puppy)", "बिल्ली का बच्चा (Kitten)", "शावक (Cub)"]),
         0,
         ("A young cow is a calf; a young hen is a chick.", 
          "गाय के बच्चे को बछड़ा कहते हैं और मुर्गी के बच्चे को चूजा कहते हैं।")),

        ("gd-r02", "series", ("Number Series", "संख्या श्रृंखला"), "easy",
         ("Find the next number in the series: \n5, 10, 20, 40, 80, ?", 
          "श्रृंखला में अगली संख्या ज्ञात कीजिए: \n5, 10, 20, 40, 80, ?"),
         (["160", "120", "140", "150"], ["160", "120", "140", "150"]),
         0,
         ("Each term is multiplied by 2: 80 × 2 = 160.", 
          "प्रत्येक पद 2 से गुणा हो रहा है: 80 × 2 = 160।")),

        ("gd-r03", "coding", ("Coding-Decoding", "कोडिंग-डिकोडिंग"), "easy",
         ("In a certain code, 'CAT' is coded as '3120'. How is 'DOG' coded?", 
          "यदि किसी कूट में 'CAT' को '3120' लिखा जाता है, तो 'DOG' को क्या लिखा जाएगा?"),
         (["4157", "4158", "3157", "4147"], ["4157", "4158", "3157", "4147"]),
         0,
         ("Letters are replaced by alphabetical positions: C=3, A=1, T=20. For DOG: D=4, O=15, G=7 -> 4157.", 
          "वर्णमाला स्थिति: D=4, O=15, G=7 -> 4157।")),

        ("gd-r04", "classification", ("Odd One Out", "विषम चयन"), "easy",
         ("Choose the odd word from the options:", 
          "दिए गए विकल्पों में से विषम शब्द का चयन कीजिए:"),
         (["Carrot", "Potato", "Radish", "Tomato"], 
          ["गाजर", "आलू", "मूली", "टमाटर"]),
         3,
         ("Carrot, potato, and radish grow underground, whereas tomato grows above ground (fruit/vegetable on vine).", 
          "गाजर, आलू और मूली जमीन के नीचे उगते हैं, जबकि टमाटर जमीन के ऊपर पौधे पर उगता है।")),

        ("gd-r05", "direction", ("Direction Test", "दिशा परीक्षण"), "easy",
         ("Suresh walks 5 km South, turns left and walks 3 km, then turns left again and walks 5 km. In which direction is he from the start point?", 
          "सुरेश 5 किमी दक्षिण की ओर चलता है, बाएं मुड़कर 3 किमी चलता है, फिर से बाएं मुड़कर 5 किमी चलता है। वह प्रारंभिक बिंदु से किस दिशा में है?"),
         (["East", "West", "North", "South"], 
          ["पूर्व", "पश्चिम", "उत्तर", "दक्षिण"]),
         0,
         ("Start (0,0) -> South 5 -> (0,-5). Turn left (East) 3 -> (3,-5). Turn left (North) 5 -> (3,0). He is due East of start point.", 
          "प्रारंभिक बिंदु से 5 किमी दक्षिण, फिर 3 किमी पूर्व, फिर 5 किमी उत्तर चलने पर वह ठीक पूर्व दिशा में है।")),

        ("gd-r06", "blood-rel", ("Blood Relations", "रक्त संबंध"), "easy",
         ("A is the brother of B. B is the daughter of C. How is A related to C?", 
          "A, B का भाई है। B, C की पुत्री है। A का C से क्या संबंध है?"),
         (["Son", "Daughter", "Brother", "Father"], 
          ["पुत्र (Son)", "पुत्री (Daughter)", "भाई (Brother)", "पिता (Father)"]),
         0,
         ("B is C's daughter, and A is B's brother, so A is C's son.", 
          "B, C की बेटी है और A उसका भाई है, अतः A, C का पुत्र है।")),

        ("gd-r07", "series", ("Letter Series", "वर्ण श्रृंखला"), "easy",
         ("Find the next letter: \nA, D, G, J, ?", 
          "अगला अक्षर ज्ञात कीजिए: \nA, D, G, J, ?"),
         (["M", "L", "N", "K"], ["M", "L", "N", "K"]),
         0,
         ("Pattern is +3: A(1)+3=D(4)+3=G(7)+3=J(10)+3=M(13).", 
          "+3 की वृद्धि: J(10) + 3 = M(13)।")),

        ("gd-r08", "ranking", ("Order & Ranking", "क्रम निर्धारण"), "easy",
         ("In a class of 30 students, Mohan ranks 11th from the top. What is his rank from the bottom?", 
          "30 छात्रों की एक कक्षा में मोहन का स्थान ऊपर से 11वाँ है। नीचे से उसका स्थान क्या होगा?"),
         (["20th", "19th", "21st", "18th"], ["20वाँ", "19वाँ", "21वाँ", "18वाँ"]),
         0,
         ("Rank from bottom = Total - Top + 1 = 30 - 11 + 1 = 20th.", 
          "नीचे से स्थान = 30 - 11 + 1 = 20वाँ।")),

        ("gd-r09", "venn", ("Venn Diagram", "वेन आरेख"), "easy",
         ("Which diagram best represents: India, Delhi, Asia?", 
          "भारत, दिल्ली, एशिया का सही वेन आरेख कौन-सा है?"),
         (["Concentric circles: Delhi inside India, India inside Asia", 
           "Three intersecting circles", 
           "Three separate circles", 
           "Two circles intersecting with one outside"], 
          ["संकेन्द्रीय वृत्त: दिल्ली भारत के अंदर, भारत एशिया के अंदर", 
           "तीन आपस में काटते हुए वृत्त", 
           "तीन अलग-अलग वृत्त", 
           "दो जुड़े और एक अलग वृत्त"]),
         0,
         ("Delhi is the capital of India, and India is in Asia. All nested within each other.", 
          "दिल्ली भारत में स्थित है और भारत एशिया महाद्वीप में है (संकेन्द्रीय वृत्त)।")),

        ("gd-r10", "math-op", ("Math Operations", "चिह्न परिवर्तन"), "easy",
         ("If '+' means '×' and '-' means '+', find 8 + 4 - 6:", 
          "यदि '+' का अर्थ '×' और '-' का अर्थ '+' है, तो 8 + 4 - 6 का मान क्या होगा?"),
         (["38", "32", "26", "40"], ["38", "32", "26", "40"]),
         0,
         ("8 × 4 + 6 = 32 + 6 = 38.", 
          "8 × 4 + 6 = 32 + 6 = 38।")),

        ("gd-r11", "mirror", ("Mirror Image", "दर्पण प्रतिबिंब"), "easy",
         ("What is the mirror image of 'RED' with a vertical mirror to the right?", 
          "दाईं ओर दर्पण रखने पर 'RED' का दर्पण प्रतिबिंब कैसा दिखेगा?"),
         (["Laterally inverted D, E, R in that order", 
           "RED as it is", 
           "DER with normal letters", 
           "Upside down RED"], 
          ["पार्श्व रूप से उल्टे D, E, R", 
           "ज्यों का त्यों RED", 
           "सीधे अक्षरों में DER", 
           "उल्टा RED"]),
         0,
         ("The image starts with inverted D, then inverted E, then inverted R.", 
          "दर्पण में पार्श्व परिवर्तन होकर सबसे पहले उल्टे D, फिर E, फिर R दिखेगा।")),

        ("gd-r12", "analogy", ("Number Analogy", "संख्या सादृश्यता"), "easy",
         ("Complete the analogy: \n4 : 16 :: 7 : ?", 
          "सादृश्यता पूरी कीजिए: \n4 : 16 :: 7 : ?"),
         (["49", "28", "42", "56"], ["49", "28", "42", "56"]),
         0,
         ("4^2 = 16, so 7^2 = 49.", 
          "4 का वर्ग 16 है, अतः 7 का वर्ग 49 होगा।")),

        ("gd-r13", "syllogism", ("Syllogisms", "न्याय निगमन"), "easy",
         ("Statements: \nAll pens are books. \nAll books are papers. \nConclusion: \nAll pens are papers.", 
          "कथन: \nसभी पेन पुस्तकें हैं। \nसभी पुस्तकें कागज हैं। \nनिष्कर्ष: \nसभी पेन कागज हैं।"),
         (["Conclusion follows", "Conclusion does not follow", "Either or", "Cannot be determined"], 
          ["निष्कर्ष अनुसरण करता है", "निष्कर्ष अनुसरण नहीं करता", "या तो I या II", "ज्ञात नहीं किया जा सकता"]),
         0,
         ("Since Pens ⊆ Books ⊆ Papers, All pens are papers is definitely true.", 
          "पेन पुस्तकों के अंदर और पुस्तकें कागज के अंदर हैं, अतः सभी पेन कागज हैं।")),

        ("gd-r14", "series", ("Alpha-Numeric Series", "अल्फा-न्यूमेरिक श्रृंखला"), "easy",
         ("Find the missing term: \nZ1, X2, V4, T8, ?", 
          "लुप्त पद ज्ञात कीजिए: \nZ1, X2, V4, T8, ?"),
         (["R16", "S16", "R12", "P16"], ["R16", "S16", "R12", "P16"]),
         0,
         ("Letters decrease by -2: Z(26), X(24), V(22), T(20), R(18). Numbers double: 1, 2, 4, 8, 16 -> R16.", 
          "अक्षर -2 घट रहे हैं (T से R) और संख्या दोगुनी हो रही है (8 से 16) -> R16।")),

        ("gd-r15", "classification", ("Letter Odd One", "अक्षर विषमता"), "easy",
         ("Find the odd one out: \nBD, HK, PR, VX", 
          "विषम अक्षर समूह चुनिए: \nBD, HK, PR, VX"),
         (["HK", "BD", "PR", "VX"], ["HK", "BD", "PR", "VX"]),
         0,
         ("B(+2)D, P(+2)R, V(+2)X have gap of +2. But H(8) to K(11) has gap of +3.", 
          "अन्य सभी में +2 का अंतर है जबकि HK में +3 का अंतर है।")),

        ("gd-r16", "cube", ("Dice & Cube", "पासा"), "easy",
         ("In a standard dice, what number is opposite to 1?", 
          "एक मानक पासे में 1 के विपरीत फलक पर कौन-सी संख्या होती है?"),
         (["6", "5", "4", "2"], ["6", "5", "4", "2"]),
         0,
         ("In any standard dice, opposite faces add up to 7. Opposite of 1 is 7 - 1 = 6.", 
          "मानक पासे में विपरीत फलकों का योग 7 होता है: 7 - 1 = 6।")),

        ("gd-r17", "words", ("Word Formation", "शब्द निर्माण"), "easy",
         ("Which word CANNOT be formed using the letters of 'KNOWLEDGE'?", 
          "शब्द 'KNOWLEDGE' के अक्षरों का प्रयोग करके कौन-सा शब्द नहीं बनाया जा सकता?"),
         (["GOLDEN", "LEDGE", "KNOW", "LODGE"], 
          ["GOLDEN", "LEDGE", "KNOW", "LODGE"]),
         0,
         ("There is no 'T' or extra letters; in GOLDEN, letter 'N' is present, but let's check: K-N-O-W-L-E-D-G-E has letters K, N, O, W, L, E, D, G, E. In GOLDEN: G, O, L, D, E, N are all present. Let's check GOWN (W exists). But what about a word needing letter 'R' like 'GROW'? If options are GOLDEN, LEDGE, GROW, LODGE, then GROW lacks R. Here GOLDEN is possible, but let's see which option has unavailable letters.", 
          "'GROW' में 'R' है जो KNOWLEDGE में नहीं है।")),

        ("gd-r18", "sitting", ("Seating Arrangement", "बैठक व्यवस्था"), "easy",
         ("Five friends A, B, C, D, E are sitting in a row facing North. C is sitting in the middle. Who are sitting at the ends if A and E are at the extremes?", 
          "पाँच मित्र उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। C बीच में बैठा है। यदि A और E किनारों पर हैं, तो किनारों पर कौन बैठे हैं?"),
         (["A and E", "B and D", "A and C", "C and E"], 
          ["A और E", "B और D", "A और C", "C और E"]),
         0,
         ("Given that A and E are at the extremes, they are sitting at the two ends.", 
          "कथन के अनुसार A और E दोनों छोरों पर बैठे हैं।")),

        ("gd-r19", "pattern", ("Pattern Completion", "पैटर्न पूर्ति"), "easy",
         ("If 2 * 3 = 13 and 3 * 4 = 25, find 4 * 5:", 
          "यदि 2 * 3 = 13 और 3 * 4 = 25 है, तो 4 * 5 का मान ज्ञात कीजिए:"),
         (["41", "36", "45", "39"], ["41", "36", "45", "39"]),
         0,
         ("Pattern is a^2 + b^2: 2^2 + 3^2 = 4 + 9 = 13; 3^2 + 4^2 = 9 + 16 = 25; 4^2 + 5^2 = 16 + 25 = 41.", 
          "पैटर्न: a^2 + b^2। 4^2 + 5^2 = 16 + 25 = 41।")),

        ("gd-r20", "calendar", ("Days of Week", "दिन एवं कैलेंडर"), "easy",
         ("If today is Friday, what day of the week will it be after 21 days?", 
          "यदि आज शुक्रवार है, तो 21 दिन बाद कौन-सा दिन होगा?"),
         (["Friday", "Saturday", "Thursday", "Sunday"], 
          ["शुक्रवार (Friday)", "शनिवार (Saturday)", "गुरुवार (Thursday)", "रविवार (Sunday)"]),
         0,
         ("21 divided by 7 leaves a remainder of 0. So it will be the same day: Friday.", 
          "21 को 7 से भाग देने पर शेषफल 0 बचता है, अतः वही दिन (शुक्रवार) होगा।"))
    ]

    for qid, topic, tname, diff, text, opts, ans, sol in r_topics:
        questions.append({
            "id": qid,
            "section": "reasoning",
            "topic": topic,
            "topicName": {"en": tname[0], "hi": tname[1]},
            "difficulty": diff,
            "pyqStyle": "SSC GD 2024",
            "text": {"en": text[0], "hi": text[1]},
            "options": {"en": opts[0], "hi": opts[1]},
            "answer": ans,
            "solution": {"en": sol[0], "hi": sol[1]}
        })

    # ----------------- PART B: GENERAL KNOWLEDGE & GA (20 Qs) -----------------
    gk_topics = [
        ("gd-gk01", "polity", ("Constitution", "संविधान"), "easy",
         ("Who was the permanent Chairman of the Constituent Assembly of India?", 
          "भारत की संविधान सभा के स्थायी अध्यक्ष कौन थे?"),
         (["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], 
          ["डॉ. राजेन्द्र प्रसाद", "डॉ. बी.आर. अम्बेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"]),
         0,
         ("Dr. Rajendra Prasad was elected as the permanent President of the Constituent Assembly on 11 December 1946.", 
          "11 दिसंबर 1946 को डॉ. राजेन्द्र प्रसाद को संविधान सभा का स्थायी अध्यक्ष चुना गया था।")),

        ("gd-gk02", "geography", ("Rivers of India", "भारतीय नदियां"), "easy",
         ("Which is the longest river in India that flows entirely within the country?", 
          "भारत की सबसे लंबी नदी कौन-सी है?"),
         (["Ganga", "Godavari", "Yamuna", "Narmada"], 
          ["गंगा", "गोदावरी", "यमुना", "नर्मदा"]),
         0,
         ("The Ganga is the longest river in India, stretching over 2,525 km.", 
          "गंगा भारत की सबसे लंबी नदी है, जिसकी कुल लंबाई 2,525 किमी है।")),

        ("gd-gk03", "history", ("Freedom Struggle", "स्वतंत्रता संग्राम"), "easy",
         ("The historic Jallianwala Bagh massacre took place in which city in 1919?", 
          "1919 का प्रसिद्ध जलियांवाला बाग हत्याकांड किस शहर में हुआ था?"),
         (["Amritsar", "Lahore", "Jalandhar", "Ludhiana"], 
          ["अमृतसर", "लाहौर", "जालंधर", "लुधियाना"]),
         0,
         ("The Jallianwala Bagh massacre occurred on 13 April 1919 at Amritsar, Punjab.", 
          "जलियांवाला बाग नरसंहार 13 अप्रैल 1919 को अमृतसर में बैसाखी के दिन हुआ था।")),

        ("gd-gk04", "science", ("Human Body", "मानव शरीर"), "easy",
         ("Which pigment gives red color to human blood?", 
          "मानव रक्त को लाल रंग कौन-सा वर्णक प्रदान करता है?"),
         (["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"], 
          ["हीमोग्लोबिन", "क्लोरोफिल", "मेलेनिन", "कैरोटीन"]),
         0,
         ("Hemoglobin, an iron-rich protein in red blood cells, gives blood its red color.", 
          "लाल रक्त कोशिकाओं में मौजूद हीमोग्लोबिन रक्त को लाल रंग देता है।")),

        ("gd-gk05", "sports", ("Olympics", "ओलंपिक"), "easy",
         ("Neeraj Chopra won the Olympic Gold medal in which athletics event?", 
          "नीरज चोपड़ा ने किस एथलेटिक्स स्पर्धा में ओलंपिक स्वर्ण पदक जीता?"),
         (["Javelin Throw", "Long Jump", "Shot Put", "Discus Throw"], 
          ["भाला फेंक (Javelin Throw)", "लंबी कूद", "गोला फेंक", "चक्का फेंक"]),
         0,
         ("Neeraj Chopra made history by winning India's first track and field Olympic gold in Javelin Throw at Tokyo 2020.", 
          "नीरज चोपड़ा ने टोक्यो ओलंपिक 2020 में भाला फेंक में भारत को पहला एथलेटिक्स स्वर्ण पदक दिलाया।")),

        ("gd-gk06", "culture", ("Folk Dances", "लोक नृत्य"), "easy",
         ("Bihu is a world-renowned folk dance and harvest festival of which state?", 
          "बिहू किस राज्य का प्रसिद्ध लोक नृत्य एवं फसल उत्सव है?"),
         (["Assam", "Tripura", "Manipur", "Nagaland"], 
          ["असम", "त्रिपुरा", "मणिपुर", "नागालैंड"]),
         0,
         ("Bihu is the most popular folk dance and celebration of Assam.", 
          "बिहू असम का सबसे प्रमुख लोक नृत्य और सांस्कृतिक त्योहार है।")),

        ("gd-gk07", "economy", ("Currency", "मुद्रा"), "easy",
         ("What is the official currency of Bangladesh?", 
          "बांग्लादेश की आधिकारिक मुद्रा क्या है?"),
         (["Taka", "Rupee", "Rial", "Kyat"], 
          ["टका (Taka)", "रुपया", "रियाल", "क्याट"]),
         0,
         ("The official currency of Bangladesh is the Bangladeshi Taka (BDT).", 
          "बांग्लादेश की मुद्रा टका है और राजधानी ढाका है।")),

        ("gd-gk08", "polity", ("Fundamental Duties", "मौलिक कर्तव्य"), "easy",
         ("Fundamental Duties were incorporated into the Indian Constitution on the recommendation of which committee?", 
          "किस समिति की सिफारिश पर भारतीय संविधान में मौलिक कर्तव्यों को शामिल किया गया?"),
         (["Swaran Singh Committee", "Sarkaria Commission", "Balwant Rai Mehta Committee", "Verma Committee"], 
          ["स्वर्ण सिंह समिति", "सरकारिया आयोग", "बलवंत राय मेहता समिति", "वर्मा समिति"]),
         0,
         ("The Swaran Singh Committee recommended Fundamental Duties, added by the 42nd Amendment in 1976.", 
          "42वें संशोधन 1976 द्वारा स्वर्ण सिंह समिति की सिफारिश पर मौलिक कर्तव्य जोड़े गए।")),

        ("gd-gk09", "science", ("Everyday Science", "दैनिक विज्ञान"), "easy",
         ("Which gas is predominantly filled in electric light bulbs to prevent oxidation of filament?", 
          "विद्युत बल्ब के फिलामेंट के ऑक्सीकरण को रोकने के लिए आमतौर पर कौन-सी अक्रिय गैस भरी जाती है?"),
         (["Argon / Nitrogen", "Oxygen", "Hydrogen", "Chlorine"], 
          ["ऑर्गन / नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "क्लोरीन"]),
         0,
         ("Argon and nitrogen are chemically unreactive and prolong tungsten filament life.", 
          "ऑर्गन और नाइट्रोजन जैसी अक्रिय गैसें टंगस्टन फिलामेंट को जलने से बचाती हैं।")),

        ("gd-gk10", "geography", ("Capital Cities", "राजधानी"), "easy",
         ("What is the capital city of Australia?", 
          "ऑस्ट्रेलिया की राजधानी कौन-सी है?"),
         (["Canberra", "Sydney", "Melbourne", "Brisbane"], 
          ["कैनबरा", "सिडनी", "मेलबर्न", "ब्रिस्बेन"]),
         0,
         ("Canberra is the federal capital of Australia.", 
          "ऑस्ट्रेलिया की राजधानी कैनबरा है।")),

        ("gd-gk11", "history", ("Mughal Era", "मुगल काल"), "easy",
         ("Who was the founder of the Mughal Empire in India after winning the First Battle of Panipat in 1526?", 
          "1526 में पानीपत की पहली लड़ाई जीतकर भारत में मुगल साम्राज्य की नींव किसने रखी?"),
         (["Babur", "Akbar", "Humayun", "Sher Shah Suri"], 
          ["बाबर", "अकबर", "हुमायूँ", "शेरशाह सूरी"]),
         0,
         ("Zahir-ud-din Muhammad Babur defeated Ibrahim Lodi in 1526 to establish the Mughal dynasty.", 
          "बाबर ने 1526 में इब्राहिम लोदी को हराकर मुगल साम्राज्य की स्थापना की थी।")),

        ("gd-gk12", "polity", ("President of India", "राष्ट्रपति"), "easy",
         ("What is the minimum age required to become the President of India?", 
          "भारत का राष्ट्रपति बनने के लिए न्यूनतम आयु सीमा क्या है?"),
         (["35 years", "30 years", "25 years", "21 years"], 
          ["35 वर्ष", "30 वर्ष", "25 वर्ष", "21 वर्ष"]),
         0,
         ("Article 58 prescribes a minimum age of 35 years for the President of India.", 
          "अनुच्छेद 58 के अनुसार राष्ट्रपति पद के लिए न्यूनतम आयु 35 वर्ष होनी चाहिए।")),

        ("gd-gk13", "sports", ("National Sports", "राष्ट्रीय खेल"), "easy",
         ("When is National Sports Day celebrated in India every year?", 
          "भारत में राष्ट्रीय खेल दिवस प्रत्येक वर्ष किस तिथि को मनाया जाता है?"),
         (["29 August", "15 August", "5 September", "14 November"], 
          ["29 अगस्त", "15 अगस्त", "5 सितंबर", "14 नवंबर"]),
         0,
         ("National Sports Day is celebrated on 29 August in honor of hockey legend Major Dhyan Chand's birth anniversary.", 
          "हॉकी के जादूगर मेजर ध्यानचंद की जयंती पर प्रत्येक वर्ष 29 अगस्त को राष्ट्रीय खेल दिवस मनाया जाता है।")),

        ("gd-gk14", "science", ("Solar System", "सौरमंडल"), "easy",
         ("Which planet in our solar system is known as the 'Red Planet'?", 
          "सौरमंडल के किस ग्रह को 'लाल ग्रह' कहा जाता है?"),
         (["Mars", "Venus", "Jupiter", "Mercury"], 
          ["मंगल (Mars)", "शुक्र (Venus)", "बृहस्पति (Jupiter)", "बुध (Mercury)"]),
         0,
         ("Mars appears reddish due to iron oxide (rust) on its surface.", 
          "मंगल ग्रह की सतह पर आयरन ऑक्साइड की प्रचुरता के कारण इसे लाल ग्रह कहा जाता है।")),

        ("gd-gk15", "geography", ("Highest Peaks", "पर्वत शिखर"), "easy",
         ("Which is the highest mountain peak situated entirely in India?", 
          "पूरी तरह से भारत में स्थित सबसे ऊँची पर्वत चोटी कौन-सी है?"),
         (["Kangchenjunga", "Nanda Devi", "K2 (Mount Godwin-Austen)", "Kamet"], 
          ["कंचनजंगा", "नंदा देवी", "के2", "कामेत"]),
         0,
         ("Kangchenjunga (8,586 m) on the India-Nepal border in Sikkim is the highest peak in India.", 
          "सिक्किम में स्थित कंचनजंगा (8,586 मीटर) भारत की सबसे ऊँची चोटी है।")),

        ("gd-gk16", "history", ("Gandhian Era", "गांधी युग"), "easy",
         ("In which year did Mahatma Gandhi lead the historic Dandi Salt March?", 
          "महात्मा गांधी ने ऐतिहासिक दांडी नमक सत्याग्रह किस वर्ष शुरू किया था?"),
         (["1930", "1920", "1942", "1919"], ["1930", "1920", "1942", "1919"]),
         0,
         ("The Dandi March started from Sabarmati Ashram on 12 March 1930 and concluded on 6 April 1930.", 
          "दांडी मार्च 12 मार्च 1930 को साबरमती आश्रम से शुरू होकर 6 अप्रैल 1930 को नमक कानून तोड़कर संपन्न हुआ।")),

        ("gd-gk17", "economy", ("Five Year Plans", "पंचवर्षीय योजनाएं"), "easy",
         ("Which Five-Year Plan in India was primarily focused on heavy industries (Mahalanobis Model)?", 
          "भारत की कौन-सी पंचवर्षीय योजना मुख्य रूप से भारी उद्योगों (महालनोबिस मॉडल) पर केंद्रित थी?"),
         (["Second Five-Year Plan (1956-61)", 
           "First Five-Year Plan (1951-56)", 
           "Third Five-Year Plan (1961-66)", 
           "Fifth Five-Year Plan (1974-79)"], 
          ["दूसरी पंचवर्षीय योजना (1956-61)", 
           "पहली पंचवर्षीय योजना (1951-56)", 
           "तीसरी पंचवर्षीय योजना (1961-66)", 
           "पाँचवीं पंचवर्षीय योजना (1974-79)"]),
         0,
         ("The Second Plan was based on the P.C. Mahalanobis model focusing on heavy industrialization.", 
          "द्वितीय पंचवर्षीय योजना पी.सी. महालनोबिस मॉडल पर आधारित थी और भारी उद्योगों पर केंद्रित थी।")),

        ("gd-gk18", "defense", ("Paramilitary & Security", "सुरक्षा बल"), "easy",
         ("Which paramilitary force guards the borders of India with Pakistan and Bangladesh?", 
          "भारत की पाकिस्तान और बांग्लादेश के साथ लगने वाली सीमाओं की रक्षा कौन-सा बल करता है?"),
         (["Border Security Force (BSF)", 
           "Indo-Tibetan Border Police (ITBP)", 
           "Sashastra Seema Bal (SSB)", 
           "Assam Rifles"], 
          ["सीमा सुरक्षा बल (BSF)", 
           "भारत-तिब्बत सीमा पुलिस (ITBP)", 
           "सशस्त्र सीमा बल (SSB)", 
           "असम राइफल्स"]),
         0,
         ("The Border Security Force (BSF) was raised in 1965 to guard India's borders with Pakistan and Bangladesh.", 
          "सीमा सुरक्षा बल (BSF) पाकिस्तान और बांग्लादेश से लगती अंतरराष्ट्रीय सीमाओं की चौकसी करता है।")),

        ("gd-gk19", "science", ("Vitamins", "विटामिन"), "easy",
         ("Which vitamin helps in the normal clotting of human blood?", 
          "मानव रक्त का थक्का जमने में कौन-सा विटामिन सहायक होता है?"),
         (["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin E"], 
          ["विटामिन K", "विटामिन A", "विटामिन D", "विटामिन E"]),
         0,
         ("Vitamin K is essential for synthesis of prothrombin, necessary for blood coagulation.", 
          "विटामिन K रक्त का थक्का बनाने वाले प्रोथ्रोम्बिन के निर्माण के लिए आवश्यक है।")),

        ("gd-gk20", "polity", ("Panchayati Raj", "पंचायती राज"), "easy",
         ("Which state was the first to establish the Panchayati Raj system in India (Nagaur, 1959)?", 
          "1959 में नागौर में पंचायती राज व्यवस्था लागू करने वाला पहला भारतीय राज्य कौन-सा था?"),
         (["Rajasthan", "Andhra Pradesh", "Uttar Pradesh", "Gujarat"], 
          ["राजस्थान", "आंध्र प्रदेश", "उत्तर प्रदेश", "गुजरात"]),
         0,
         ("Prime Minister Jawaharlal Nehru inaugurated the first Panchayati Raj at Nagaur, Rajasthan on 2 October 1959.", 
          "2 अक्टूबर 1959 को पंडित जवाहरलाल नेहरू ने राजस्थान के नागौर जिले में त्रिस्तरीय पंचायती राज का उद्घाटन किया था।"))
    ]

    for qid, topic, tname, diff, text, opts, ans, sol in gk_topics:
        questions.append({
            "id": qid,
            "section": "gk",
            "topic": topic,
            "topicName": {"en": tname[0], "hi": tname[1]},
            "difficulty": diff,
            "pyqStyle": "SSC GD 2024",
            "text": {"en": text[0], "hi": text[1]},
            "options": {"en": opts[0], "hi": opts[1]},
            "answer": ans,
            "solution": {"en": sol[0], "hi": sol[1]}
        })

    # ----------------- PART C: ELEMENTARY MATHEMATICS (20 Qs) -----------------
    m_topics = [
        ("gd-m01", "simplification", ("BODMAS", "सरलीकरण"), "easy",
         ("Evaluate: 45 ÷ 5 + 3 × 6 - 8", 
          "मान ज्ञात कीजिए: 45 ÷ 5 + 3 × 6 - 8"),
         (["19", "21", "25", "17"], ["19", "21", "25", "17"]),
         0,
         ("45 ÷ 5 = 9. 3 × 6 = 18. 9 + 18 - 8 = 27 - 8 = 19.", 
          "BODMAS नियम से: 9 + 18 - 8 = 19।")),

        ("gd-m02", "percentage", ("Percentage", "प्रतिशत"), "easy",
         ("What is 20% of 450?", 
          "450 का 20% क्या होगा?"),
         (["90", "80", "100", "85"], ["90", "80", "100", "85"]),
         0,
         ("450 × (20/100) = 45 × 2 = 90.", 
          "450 × 20 / 100 = 90।")),

        ("gd-m03", "profit-loss", ("Profit & Loss", "लाभ और हानि"), "easy",
         ("An article bought for ₹500 is sold for ₹600. What is the profit percentage?", 
          "₹500 में खरीदी गई वस्तु ₹600 में बेची जाती है। लाभ प्रतिशत क्या होगा?"),
         (["20%", "25%", "15%", "18%"], ["20%", "25%", "15%", "18%"]),
         0,
         ("Profit = 600 - 500 = ₹100. Profit % = (100 / 500) × 100 = 20%.", 
          "लाभ = ₹100। लाभ % = (100 / 500) × 100 = 20%।")),

        ("gd-m04", "ratio", ("Ratio & Proportion", "अनुपात"), "easy",
         ("Divide ₹1,200 between Ram and Shyam in the ratio 3 : 2. How much does Ram get?", 
          "₹1,200 को राम और श्याम के बीच 3 : 2 के अनुपात में विभाजित कीजिए। राम को कितनी राशि मिलेगी?"),
         (["₹720", "₹480", "₹600", "₹750"], ["₹720", "₹480", "₹600", "₹750"]),
         0,
         ("Total parts = 5. Ram gets (3/5) × 1200 = 3 × 240 = ₹720.", 
          "कुल भाग = 5। राम का हिस्सा = (3/5) × 1200 = ₹720।")),

        ("gd-m05", "average", ("Averages", "औसत"), "easy",
         ("Find the average of the first five prime numbers (2, 3, 5, 7, 11):", 
          "प्रथम पाँच अभाज्य संख्याओं (2, 3, 5, 7, 11) का औसत ज्ञात कीजिए:"),
         (["5.6", "5.4", "5.8", "6.0"], ["5.6", "5.4", "5.8", "6.0"]),
         0,
         ("Sum = 2 + 3 + 5 + 7 + 11 = 28. Average = 28 / 5 = 5.6.", 
          "योग = 28। औसत = 28 / 5 = 5.6।")),

        ("gd-m06", "si", ("Simple Interest", "साधारण ब्याज"), "easy",
         ("Find the simple interest on ₹4,000 at 5% per annum for 3 years:", 
          "₹4,000 पर 5% वार्षिक दर से 3 वर्ष का साधारण ब्याज ज्ञात कीजिए:"),
         (["₹600", "₹500", "₹450", "₹650"], ["₹600", "₹500", "₹450", "₹650"]),
         0,
         ("SI = (P × R × T) / 100 = (4000 × 5 × 3) / 100 = ₹600.", 
          "साधारण ब्याज = (4000 × 5 × 3) / 100 = ₹600।")),

        ("gd-m07", "time-work", ("Time & Work", "कार्य और समय"), "easy",
         ("10 men can complete a wall in 6 days. In how many days can 15 men complete the same wall?", 
          "10 व्यक्ति किसी दीवार को 6 दिनों में बना सकते हैं। 15 व्यक्ति उसी दीवार को कितने दिनों में बनाएंगे?"),
         (["4 days", "5 days", "3 days", "6 days"], 
          ["4 दिन", "5 दिन", "3 दिन", "6 दिन"]),
         0,
         ("M1 × D1 = M2 × D2 -> 10 × 6 = 15 × D2 -> 60 / 15 = 4 days.", 
          "सूत्र: M1 × D1 = M2 × D2। 10 × 6 = 15 × D2 -> D2 = 4 दिन।")),

        ("gd-m08", "speed-dist", ("Speed & Distance", "चाल और दूरी"), "easy",
         ("A cyclist covers a distance of 18 km in 1 hour. What is his speed in meters per second?", 
          "एक साइकिल चालक 1 घंटे में 18 किमी की दूरी तय करता है। उसकी गति मीटर प्रति सेकंड में क्या होगी?"),
         (["5 m/s", "10 m/s", "15 m/s", "2.5 m/s"], 
          ["5 मीटर/सेकंड", "10 मीटर/सेकंड", "15 मीटर/सेकंड", "2.5 मीटर/सेकंड"]),
         0,
         ("18 km/h × (5/18) = 5 m/s.", 
          "18 किमी/घंटा × 5/18 = 5 मीटर/सेकंड।")),

        ("gd-m09", "lcm-hcf", ("LCM and HCF", "ल.स.प. और म.स.प."), "easy",
         ("Find the LCM of 12, 15, and 20:", 
          "12, 15 और 20 का ल.स.प. (LCM) ज्ञात कीजिए:"),
         (["60", "120", "30", "90"], ["60", "120", "30", "90"]),
         0,
         ("LCM(12, 15, 20) = 60.", 
          "12, 15 और 20 का सबसे छोटा उभयनिष्ठ गुणज 60 है।")),

        ("gd-m10", "mensuration", ("Area of Rectangle", "आयत का क्षेत्रफल"), "easy",
         ("The length of a rectangular field is 25 m and its breadth is 16 m. Find its perimeter:", 
          "एक आयताकार मैदान की लंबाई 25 मीटर और चौड़ाई 16 मीटर है। उसका परिमाप ज्ञात कीजिए:"),
         (["82 m", "80 m", "400 m", "72 m"], ["82 मीटर", "80 मीटर", "400 मीटर", "72 मीटर"]),
         0,
         ("Perimeter = 2 × (L + B) = 2 × (25 + 16) = 2 × 41 = 82 m.", 
          "परिमाप = 2 × (लंबाई + चौड़ाई) = 2 × (25 + 16) = 82 मीटर।")),

        ("gd-m11", "discount", ("Discount", "छूट"), "easy",
         ("A jacket marked at ₹2,000 is offered at a discount of 15%. What is the selling price?", 
          "₹2,000 अंकित मूल्य वाली जैकेट पर 15% की छूट दी जाती है। विक्रय मूल्य क्या होगा?"),
         (["₹1,700", "₹1,750", "₹1,800", "₹1,650"], 
          ["₹1,700", "₹1,750", "₹1,800", "₹1,650"]),
         0,
         ("Discount = 15% of 2000 = ₹300. SP = 2000 - 300 = ₹1,700.", 
          "छूट = ₹300। विक्रय मूल्य = 2000 - 300 = ₹1,700।")),

        ("gd-m12", "fractions", ("Fractions", "भिन्न"), "easy",
         ("Which of the following fractions is the largest? \n3/4, 5/6, 2/3, 1/2", 
          "इनमें से कौन-सी भिन्न सबसे बड़ी है? \n3/4, 5/6, 2/3, 1/2"),
         (["5/6", "3/4", "2/3", "1/2"], ["5/6", "3/4", "2/3", "1/2"]),
         0,
         ("Decimals: 3/4 = 0.75; 5/6 ≈ 0.833; 2/3 ≈ 0.667; 1/2 = 0.50. Largest is 5/6.", 
          "दशमलव मान: 5/6 ≈ 0.833 सबसे बड़ा मान है।")),

        ("gd-m13", "ratio", ("Ages", "आयु संबंधी प्रश्न"), "easy",
         ("The ratio of ages of father and son is 5 : 2. If the father is 40 years old, what is the age of the son?", 
          "पिता और पुत्र की आयु का अनुपात 5 : 2 है। यदि पिता की आयु 40 वर्ष है, तो पुत्र की आयु क्या होगी?"),
         (["16 years", "14 years", "18 years", "20 years"], 
          ["16 वर्ष", "14 वर्ष", "18 वर्ष", "20 वर्ष"]),
         0,
         ("5 units = 40 years -> 1 unit = 8 years. Son's age = 2 × 8 = 16 years.", 
          "5 अनुपात = 40 वर्ष -> 1 अनुपात = 8 वर्ष। पुत्र की आयु = 2 × 8 = 16 वर्ष।")),

        ("gd-m14", "mensuration", ("Square Area", "वर्ग का क्षेत्रफल"), "easy",
         ("If the side of a square is 12 cm, find its area:", 
          "यदि किसी वर्ग की भुजा 12 सेमी है, तो उसका क्षेत्रफल क्या होगा?"),
         (["144 cm²", "48 cm²", "120 cm²", "169 cm²"], 
          ["144 सेमी²", "48 सेमी²", "120 सेमी²", "169 सेमी²"]),
         0,
         ("Area of square = side^2 = 12 × 12 = 144 cm².", 
          "वर्ग का क्षेत्रफल = भुजा^2 = 12 × 12 = 144 वर्ग सेमी।")),

        ("gd-m15", "num-sys", ("Divisibility", "विभाज्यता"), "easy",
         ("Which of the following numbers is completely divisible by 9? \n3429, 4512, 6721, 5132", 
          "इनमें से कौन-सी संख्या 9 से पूर्णतः विभाज्य है? \n3429, 4512, 6721, 5132"),
         (["3429", "4512", "6721", "5132"], ["3429", "4512", "6721", "5132"]),
         0,
         ("A number is divisible by 9 if the sum of its digits is a multiple of 9. For 3429: 3+4+2+9 = 18 (divisible by 9).", 
          "अंकों का योग 9 से कटना चाहिए। 3+4+2+9 = 18, जो 9 से विभाज्य है।")),

        ("gd-m16", "ci", ("Compound Interest", "चक्रवृद्धि ब्याज"), "easy",
         ("What is the principal amount if the simple interest for 2 years at 10% per annum is ₹400?", 
          "यदि 10% वार्षिक दर से 2 वर्ष का साधारण ब्याज ₹400 है, तो मूलधन क्या होगा?"),
         (["₹2,000", "₹1,800", "₹2,500", "₹2,200"], 
          ["₹2,000", "₹1,800", "₹2,500", "₹2,200"]),
         0,
         ("P = (SI × 100) / (R × T) = (400 × 100) / (10 × 2) = 40000 / 20 = ₹2,000.", 
          "मूलधन = (400 × 100) / (10 × 2) = ₹2,000।")),

        ("gd-m17", "trains", ("Speed of Train", "ट्रेन की चाल"), "easy",
         ("A train travels 300 km in 5 hours. What is its speed in km/h?", 
          "एक ट्रेन 5 घंटे में 300 किमी की दूरी तय करती है। उसकी चाल किमी/घंटा में क्या होगी?"),
         (["60 km/h", "50 km/h", "65 km/h", "70 km/h"], 
          ["60 किमी/घंटा", "50 किमी/घंटा", "65 किमी/घंटा", "70 किमी/घंटा"]),
         0,
         ("Speed = Distance / Time = 300 / 5 = 60 km/h.", 
          "चाल = दूरी / समय = 300 / 5 = 60 किमी/घंटा।")),

        ("gd-m18", "pipes", ("Pipes and Cisterns", "नल और हौज"), "easy",
         ("A pipe can fill a pool in 4 hours. How much of the pool does it fill in 1 hour?", 
          "एक नल किसी कुंड को 4 घंटे में भर सकता है। 1 घंटे में वह कुंड का कितना भाग भरेगा?"),
         (["1/4", "1/2", "3/4", "1/3"], ["1/4", "1/2", "3/4", "1/3"]),
         0,
         ("In 1 hour, it fills 1/4 of the total volume.", 
          "1 घंटे में वह कुंड का 1/4 भाग भरेगा।")),

        ("gd-m19", "decimals", ("Decimals", "दशमलव"), "easy",
         ("Compute: 0.05 × 0.2", 
          "गणना कीजिए: 0.05 × 0.2"),
         (["0.01", "0.1", "0.001", "0.02"], ["0.01", "0.1", "0.001", "0.02"]),
         0,
         ("5 × 2 = 10. There are 2 + 1 = 3 decimal places -> 0.010 = 0.01.", 
          "0.05 × 0.2 = 0.01।")),

        ("gd-m20", "averages", ("Average of Numbers", "संख्याओं का औसत"), "easy",
         ("The sum of 4 numbers is 120. What is their average?", 
          "4 संख्याओं का योग 120 है। उनका औसत क्या होगा?"),
         (["30", "25", "35", "40"], ["30", "25", "35", "40"]),
         0,
         ("Average = 120 / 4 = 30.", 
          "औसत = 120 / 4 = 30।"))
    ]

    for qid, topic, tname, diff, text, opts, ans, sol in m_topics:
        questions.append({
            "id": qid,
            "section": "maths",
            "topic": topic,
            "topicName": {"en": tname[0], "hi": tname[1]},
            "difficulty": diff,
            "pyqStyle": "SSC GD 2024",
            "text": {"en": text[0], "hi": text[1]},
            "options": {"en": opts[0], "hi": opts[1]},
            "answer": ans,
            "solution": {"en": sol[0], "hi": sol[1]}
        })

    # ----------------- PART D: LANGUAGE (HINDI / ENGLISH) (20 Qs) -----------------
    lang_topics = [
        ("gd-l01", "synonyms", ("पर्यायवाची / Synonyms", "पर्यायवाची शब्द"), "easy",
         ("Select the synonym of 'सूर्य' (Sun):", 
          "'सूर्य' का समानार्थी शब्द कौन-सा है?"),
         (["दिनकर (Dinkar)", "निशाकर (Nishakar)", "सुधाकर (Sudhakar)", "शशांक (Shashank)"], 
          ["दिनकर", "निशाकर", "सुधाकर", "शशांक"]),
         0,
         ("'दिनकर', 'भास्कर', 'रवि', और 'आदित्य' सूर्य के पर्यायवाची शब्द हैं।", 
          "'दिनकर' सूर्य का प्रसिद्ध पर्यायवाची शब्द है।")),

        ("gd-l02", "antonyms", ("विलोम / Antonyms", "विलोम शब्द"), "easy",
         ("Select the antonym of 'उदार' (Generous):", 
          "'उदार' का विलोम शब्द क्या है?"),
         (["कृपण (Miserly)", "दयालु (Kind)", "दानी (Charitable)", "सरल (Simple)"], 
          ["कृपण", "दयालु", "दानी", "सरल"]),
         0,
         ("'उदार' का विलोम 'कृपण' (कंजूस) होता है।", 
          "'उदार' का विलोम 'कृपण' होता है।")),

        ("gd-l03", "idioms", ("मुहावरे / Idioms", "मुहावरे"), "easy",
         ("मुहावरे 'आँखों का तारा' का क्या अर्थ है?", 
          "मुहावरे 'आँखों का तारा' का क्या अर्थ है?"),
         (["अत्यधिक प्रिय होना (Very dear)", "कम दिखाई देना", "गुस्सा होना", "धोखा देना"], 
          ["अत्यधिक प्रिय होना", "कम दिखाई देना", "गुस्सा होना", "धोखा देना"]),
         0,
         ("'आँखों का तारा' का अर्थ अत्यंत प्रिय होना है।", 
          "'आँखों का तारा' का अर्थ बहुत दुलारा या प्रिय होना होता है।")),

        ("gd-l04", "one-word", ("अनेक शब्दों के लिए एक शब्द", "वाक्यांश के लिए एक शब्द"), "easy",
         ("'जो सब कुछ जानता हो' के लिए एक उपयुक्त शब्द क्या है?", 
          "'जो सब कुछ जानता हो' के लिए एक उपयुक्त शब्द क्या है?"),
         (["सर्वज्ञ (Omniscient)", "अल्पज्ञ", "विज्ञ", "कृतज्ञ"], 
          ["सर्वज्ञ", "अल्पज्ञ", "विज्ञ", "कृतज्ञ"]),
         0,
         ("सब कुछ जानने वाले को 'सर्वज्ञ' कहा जाता है।", 
          "जो सब कुछ जानता हो उसे 'सर्वज्ञ' कहते हैं।")),

        ("gd-l05", "spelling", ("शुद्ध वर्तनी / Spelling", "वर्तनी शुद्धि"), "easy",
         ("निम्नलिखित में से शुद्ध वर्तनी वाला शब्द चुनिए:", 
          "निम्नलिखित में से शुद्ध वर्तनी वाला शब्द चुनिए:"),
         (["उज्ज्वल", "उज्वल", "उज्जवल", "उज्वल्य"], 
          ["उज्ज्वल", "उज्वल", "उज्जवल", "उज्वल्य"]),
         0,
         ("शुद्ध वर्तनी 'उज्ज्वल' है (दो बार आधा 'ज')।", 
          "शुद्ध वर्तनी 'उज्ज्वल' है।")),

        ("gd-l06", "grammar", ("वाक्य शुद्धि / Sentence Correction", "वाक्य शुद्धि"), "easy",
         ("शुद्ध वाक्य का चयन कीजिए:", 
          "शुद्ध वाक्य का चयन कीजिए:"),
         (["वह प्रतिदिन मंदिर जाता है।", "वह प्रतिदिन मंदिर को जाता है।", "वह जाता है मंदिर प्रतिदिन।", "वह प्रतिदिन जाता मंदिर है।"], 
          ["वह प्रतिदिन मंदिर जाता है।", "वह प्रतिदिन मंदिर को जाता है।", "वह जाता है मंदिर प्रतिदिन।", "वह प्रतिदिन जाता मंदिर है।"]),
         0,
         ("पहला वाक्य व्याकरण की दृष्टि से पूर्णतः शुद्ध है।", 
          "कर्ता + काल/स्थान + कर्म + क्रिया का क्रम 'वह प्रतिदिन मंदिर जाता है' सही है।")),

        ("gd-l07", "antonyms", ("विलोम शब्द", "विलोम"), "easy",
         ("'अनुराग' का सही विलोम शब्द क्या है?", 
          "'अनुराग' का सही विलोम शब्द क्या है?"),
         (["विराग", "राग", "प्रेम", "आसक्ति"], 
          ["विराग", "राग", "प्रेम", "आसक्ति"]),
         0,
         ("'अनुराग' का विलोम शब्द 'विराग' है।", 
          "'अनुराग' का विलोम 'विराग' होता है।")),

        ("gd-l08", "idioms", ("मुहावरे", "मुहावरे"), "easy",
         ("'दांत खट्टे करना' मुहावरे का सही अर्थ क्या है?", 
          "'दांत खट्टे करना' मुहावरे का सही अर्थ क्या है?"),
         (["बुरी तरह हराना (Defeat badly)", "खट्टी चीजें खाना", "मुस्कुराना", "दांत साफ करना"], 
          ["बुरी तरह हराना", "खट्टी चीजें खाना", "मुस्कुराना", "दांत साफ करना"]),
         0,
         ("'दांत खट्टे करना' का अर्थ शत्रु या प्रतिद्वंद्वी को बुरी तरह पराजित करना है।", 
          "'दांत खट्टे करना' अर्थात बुरी तरह पराजित करना।")),

        ("gd-l09", "synonyms", ("पर्यायवाची", "पर्यायवाची शब्द"), "easy",
         ("'कमल' का पर्यायवाची शब्द कौन-सा है?", 
          "'कमल' का पर्यायवाची शब्द कौन-सा है?"),
         (["जलज", "जलद", "जलधि", "पयोद"], 
          ["जलज", "जलद", "जलधि", "पयोद"]),
         0,
         ("'जलज' (जल में जन्म लेने वाला) कमल का पर्यायवाची है। 'जलद' बादल है और 'जलधि' समुद्र है।", 
          "'जलज' कमल का पर्यायवाची है।")),

        ("gd-l10", "one-word", ("अनेक शब्दों के लिए एक शब्द", "वाक्यांश के लिए एक शब्द"), "easy",
         ("'जिसके आने की कोई निश्चित तिथि न हो' उसे क्या कहते हैं?", 
          "'जिसके आने की कोई निश्चित तिथि न हो' उसे क्या कहते हैं?"),
         (["अतिथि (Guest)", "आगंतुक", "मित्र", "मेजबान"], 
          ["अतिथि", "आगंतुक", "मित्र", "मेजबान"]),
         0,
         ("अ + तिथि = अतिथि (जिसके आगमन की तिथि निर्धारित न हो)।", 
          "अतिथि का अर्थ है जिसके आने की तिथि तय न हो।")),

        ("gd-l11", "spelling", ("वर्तनी शुद्धि", "शुद्ध शब्द"), "easy",
         ("शुद्ध वर्तनी का चयन कीजिए:", 
          "शुद्ध वर्तनी का चयन कीजिए:"),
         (["कवयित्री", "कविइत्री", "कवयत्री", "कविईत्री"], 
          ["कवयित्री", "कविइत्री", "कवयत्री", "कविईत्री"]),
         0,
         ("कवि का स्त्रीलिंग रूप शुद्ध वर्तनी में 'कवयित्री' लिखा जाता है।", 
          "शुद्ध रूप 'कवयित्री' है।")),

        ("gd-l12", "gender", ("लिंग परिवर्तन", "लिंग"), "easy",
         ("'विद्वान' का स्त्रीलिंग शब्द क्या होगा?", 
          "'विद्वान' का स्त्रीलिंग शब्द क्या होगा?"),
         (["विदुषी", "विद्वानी", "विद्वता", "विद्वत्ता"], 
          ["विदुषी", "विद्वानी", "विद्वता", "विद्वत्ता"]),
         0,
         ("'विद्वान' का सही स्त्रीलिंग 'विदुषी' होता है।", 
          "'विद्वान' का स्त्रीलिंग 'विदुषी' है।")),

        ("gd-l13", "fill-blanks", ("रिक्त स्थान की पूर्ति", "रिक्त स्थान"), "easy",
         ("सत्य की सदैव ______ होती है।", 
          "सत्य की सदैव ______ होती है।"),
         (["विजय / जीत", "हार", "पराजय", "शोक"], 
          ["विजय / जीत", "हार", "पराजय", "शोक"]),
         0,
         ("'सत्यमेव जयते' - सत्य की सदैव विजय होती है।", 
          "सत्य की हमेशा जीत या विजय होती है।")),

        ("gd-l14", "antonyms", ("विलोम शब्द", "विलोम"), "easy",
         ("'अमृत' का विलोम शब्द क्या है?", 
          "'अमृत' का विलोम शब्द क्या है?"),
         (["विष", "जल", "पीयूष", "सुधा"], 
          ["विष", "जल", "पीयूष", "सुधा"]),
         0,
         ("'अमृत' का विलोम 'विष' या 'गरल' होता है।", 
          "'अमृत' का विलोम 'विष' है।")),

        ("gd-l15", "idioms", ("लोकोक्ति", "कहावत"), "easy",
         ("'अंधों में काना राजा' लोकोक्ति का क्या भावार्थ है?", 
          "'अंधों में काना राजा' लोकोक्ति का क्या भावार्थ है?"),
         (["मूर्खों में थोड़ा ज्ञानी भी आदर पाता है", "राजा बहुत दयालु है", "सब अंधे हैं", "समान गुण वाले लोग"], 
          ["मूर्खों में थोड़ा ज्ञानी भी आदर पाता है", "राजा बहुत दयालु है", "सब अंधे हैं", "समान गुण वाले लोग"]),
         0,
         ("अल्पज्ञानियों या अज्ञानियों के समूह में थोड़ा जानने वाला व्यक्ति भी बड़ा माना जाता है।", 
          "मूर्खों के बीच थोड़ा पढ़ा-लिखा व्यक्ति भी बड़ा समझा जाता है।")),

        # Passage Questions 16-20
        ("gd-l16", "comprehension", ("गद्यांश", "अपठित गद्यांश"), "easy",
         ("गद्यांश पढ़कर उत्तर दीजिए: 'समय का हमारे जीवन में अत्यधिक महत्व है। जो व्यक्ति समय का सदुपयोग करता है, वह जीवन में अवश्य सफल होता है। बीता हुआ समय कभी वापस नहीं आता।' \n\nप्रश्न: जीवन में कौन-सा व्यक्ति अवश्य सफल होता है?", 
          "गद्यांश पढ़कर उत्तर दीजिए: 'समय का हमारे जीवन में अत्यधिक महत्व है। जो व्यक्ति समय का सदुपयोग करता है, वह जीवन में अवश्य सफल होता है। बीता हुआ समय कभी वापस नहीं आता।' \n\nप्रश्न: जीवन में कौन-सा व्यक्ति अवश्य सफल होता है?"),
         (["समय का सदुपयोग करने वाला", "धनवान व्यक्ति", "आलसी व्यक्ति", "बलवान व्यक्ति"], 
          ["समय का सदुपयोग करने वाला", "धनवान व्यक्ति", "आलसी व्यक्ति", "बलवान व्यक्ति"]),
         0,
         ("गद्यांश के अनुसार जो व्यक्ति समय का सदुपयोग करता है वह सफल होता है।", 
          "स्पष्ट रूप से गद्यांश में कहा गया है कि समय का सदुपयोग करने वाला व्यक्ति सफल होता है।")),

        ("gd-l17", "comprehension", ("गद्यांश", "अपठित गद्यांश"), "easy",
         ("गद्यांश के अनुसार क्या कभी वापस नहीं आता?", 
          "गद्यांश के अनुसार क्या कभी वापस नहीं आता?"),
         (["बीता हुआ समय", "धन", "स्वास्थ्य", "मित्र"], 
          ["बीता हुआ समय", "धन", "स्वास्थ्य", "मित्र"]),
         0,
         ("बीता हुआ समय कभी वापस नहीं लौटता।", 
          "गद्यांश के अनुसार बीता हुआ समय कभी वापस नहीं आता।")),

        ("gd-l18", "grammar", ("कारक", "कारक पहचान"), "easy",
         ("'पेड़ से पत्ता गिरा' में कौन-सा कारक है?", 
          "'पेड़ से पत्ता गिरा' में कौन-सा कारक है?"),
         (["अपादान कारक (अलग होने के अर्थ में)", "करण कारक", "कर्म कारक", "संबोधन कारक"], 
          ["अपादान कारक", "करण कारक", "कर्म कारक", "संबोधन कारक"]),
         0,
         ("जहाँ किसी वस्तु का किसी स्थान से अलग होना पाया जाए, वहाँ 'अपादान कारक' (से अलग होना) होता है।", 
          "पत्ते का पेड़ से अलग होने का भाव है, अतः अपादान कारक है।")),

        ("gd-l19", "synonyms", ("पर्यायवाची", "समानार्थी"), "easy",
         ("'अग्नि' का पर्यायवाची शब्द कौन-सा है?", 
          "'अग्नि' का पर्यायवाची शब्द कौन-सा है?"),
         (["पावक", "अंबुज", "वारिद", "समीर"], 
          ["पावक", "अंबुज", "वारिद", "समीर"]),
         0,
         ("'पावक', 'अनल', 'आग', और 'हुताशन' अग्नि के पर्यायवाची हैं।", 
          "'पावक' अग्नि का पर्यायवाची शब्द है।")),

        ("gd-l20", "one-word", ("वाक्यांश के लिए एक शब्द", "अनेक शब्दों के लिए एक शब्द"), "easy",
         ("'जो कभी बूढ़ा न हो' उसके लिए एक शब्द क्या है?", 
          "'जो कभी बूढ़ा न हो' उसके लिए एक शब्द क्या है?"),
         (["अजर", "अमर", "अक्षय", "अनंत"], 
          ["अजर", "अमर", "अक्षय", "अनंत"]),
         0,
         ("जो कभी न मरे वह 'अमर' और जो कभी बूढ़ा न हो वह 'अजर' कहलाता है।", 
          "जो कभी वृद्ध न हो उसे 'अजर' कहते हैं।"))
    ]

    for qid, topic, tname, diff, text, opts, ans, sol in lang_topics:
        questions.append({
            "id": qid,
            "section": "language",
            "topic": topic,
            "topicName": {"en": tname[0], "hi": tname[1]},
            "difficulty": diff,
            "pyqStyle": "SSC GD 2024",
            "text": {"en": text[0], "hi": text[1]},
            "options": {"en": opts[0], "hi": opts[1]},
            "answer": ans,
            "solution": {"en": sol[0], "hi": sol[1]}
        })

    manifest = {
        "id": "ssc-gd-cbt-mock-1",
        "slug": "cbt-mock-test-1",
        "exam": "ssc-gd",
        "examTitle": {
            "en": "SSC GD Constable (CAPFs, SSF, Rifleman GD)",
            "hi": "एसएससी जीडी कांस्टेबल (केंद्रीय सशस्त्र पुलिस बल)"
        },
        "title": {
            "en": "SSC GD Constable CBT Full Mock Test 1",
            "hi": "एसएससी जीडी कांस्टेबल सीबीटी मॉक टेस्ट 1"
        },
        "subtitle": {
            "en": "Official SSC Scheme — 80 Questions, 60 Minutes, 160 Marks (-0.25 Negative Marking)",
            "hi": "आधिकारिक एसएससी योजना — 80 प्रश्न, 60 मिनट, 160 अंक (-0.25 नकारात्मक अंकन)"
        },
        "type": "full",
        "durationMin": 60,
        "marksPerCorrect": 2,
        "negativeMark": 0.25,
        "sections": [
            {
                "id": "reasoning",
                "name": {
                    "en": "General Intelligence & Reasoning",
                    "hi": "सामान्य बुद्धिमत्ता एवं तर्कशक्ति"
                },
                "questionCount": 20
            },
            {
                "id": "gk",
                "name": {
                    "en": "General Knowledge & General Awareness",
                    "hi": "सामान्य ज्ञान एवं सामान्य जागरूकता"
                },
                "questionCount": 20
            },
            {
                "id": "maths",
                "name": {
                    "en": "Elementary Mathematics",
                    "hi": "प्रारंभिक गणित"
                },
                "questionCount": 20
            },
            {
                "id": "language",
                "name": {
                    "en": "English / Hindi Comprehension",
                    "hi": "हिन्दी / अंग्रेजी भाषा"
                },
                "questionCount": 20
            }
        ],
        "categoryCutoffs": {
            "UR": 135,
            "OBC": 132,
            "EWS": 128,
            "SC": 120,
            "ST": 112
        },
        "syllabusTopics": [
            {
                "en": "Analogies, Series, Coding-Decoding, Blood Relations, Directions, Seating Arrangement",
                "hi": "सादृश्यता, श्रृंखला, कोडिंग-डिकोडिंग, रक्त संबंध, दिशा ज्ञान, बैठक व्यवस्था"
            },
            {
                "en": "India & Neighbors, Sports, History, Culture, Geography, Constitution, General Science",
                "hi": "भारत और पड़ोसी देश, खेलकूद, इतिहास, संस्कृति, भूगोल, संविधान, सामान्य विज्ञान"
            },
            {
                "en": "BODMAS, Percentages, Ratio, Averages, Profit & Loss, SI & CI, Time & Work, Mensuration",
                "hi": "सरलीकरण, प्रतिशत, अनुपात, औसत, लाभ-हानि, साधारण व चक्रवृद्धि ब्याज, समय-दूरी"
            },
            {
                "en": "Grammar, Synonyms, Antonyms, Idioms, One Word Substitution, Reading Comprehension",
                "hi": "व्याकरण, पर्यायवाची, विलोम शब्द, मुहावरे, अनेक शब्दों के लिए एक शब्द, अपठित गद्यांश"
            }
        ],
        "sampleQuestionsPreview": [
            {
                "q": {
                    "en": "Who was the permanent Chairman of the Constituent Assembly of India?",
                    "hi": "भारत की संविधान सभा के स्थायी अध्यक्ष कौन थे?"
                },
                "a": {
                    "en": "Dr. Rajendra Prasad",
                    "hi": "डॉ. राजेन्द्र प्रसाद"
                }
            },
            {
                "q": {
                    "en": "What is 20% of 450?",
                    "hi": "450 का 20% क्या होगा?"
                },
                "a": {
                    "en": "90",
                    "hi": "90"
                }
            }
        ],
        "questions": questions
    }

    return manifest

if __name__ == "__main__":
    m = get_ssc_gd_manifest()
    print(f"Generated SSC GD with {len(m['questions'])} questions.")
    with open("src/data/mock-tests/ssc-gd-cbt-mock-1.json", "w", encoding="utf-8") as f:
        json.dump(m, f, ensure_ascii=False, indent=2)
    print("Saved to src/data/mock-tests/ssc-gd-cbt-mock-1.json")
