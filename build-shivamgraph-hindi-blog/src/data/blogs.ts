export interface BlogContent {
  type: "h2" | "h3" | "p" | "blockquote" | "ul";
  text?: string;
  isHindi?: boolean;
  items?: string[];
  linkSlug?: string;
  linkText?: string;
}

export interface DownloadResource {
  title: string;
  type: "PDF" | "Workbook" | "Etsy" | "Checklist" | "Guide";
  url: string;
}

export interface Blog {
  slug: string;
  number: number;
  title: string;
  hindiTitle: string;
  hindiKeyword: string;
  englishKeyword: string;
  excerpt: string;
  content: BlogContent[];
  category: string;
  categorySlug: string;
  readTime: number;
  date: string;
  coverGradient: string;
  coverImage: string;
  relatedVideoId: string;
  relatedArticleSlugs: string[];
  downloadResources: DownloadResource[];
  seoDescription: string;
}

const gradients = [
  "linear-gradient(135deg, #1a0f00 0%, #2d1810 40%, #030305 100%)",
  "linear-gradient(135deg, #0f1a0f 0%, #1a2d10 40%, #030305 100%)",
  "linear-gradient(135deg, #1a0f1a 0%, #2d1028 40%, #030305 100%)",
  "linear-gradient(135deg, #0f1a1a 0%, #10282d 40%, #030305 100%)",
  "linear-gradient(135deg, #1a1400 0%, #2d2210 40%, #030305 100%)",
];

function makeDate(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toLocaleDateString("hi-IN", { year: "numeric", month: "long", day: "numeric" });
}

// Helper to create a standard blog content structure with Hindi-English hybrid voice
function blogContent(_title: string, hooks: string[], points: string[], quote: string, quoteHindi: string, conclusion: string, internalLinks?: { text: string; slug: string }[]): BlogContent[] {
  const content: BlogContent[] = [];

  content.push({ type: "h2", text: "सच्चाई क्या है?" });
  content.push({
    type: "p",
    isHindi: true,
    text: hooks[0],
  });
  if (hooks[1]) {
    content.push({
      type: "p",
      isHindi: true,
      text: hooks[1],
    });
  }

  content.push({ type: "h2", text: "यह कैसे काम करता है?" });
  points.forEach((pt) => {
    content.push({
      type: "p",
      isHindi: true,
      text: pt,
    });
  });

  content.push({ type: "h2", text: "प्राचीन ज्ञान" });
  content.push({
    type: "blockquote",
    isHindi: true,
    text: ` "${quoteHindi}" — ${quote}`,
  });

  content.push({ type: "h2", text: "तुम क्या करो?" });
  content.push({
    type: "ul",
    items: [
      `सबसे पहले अपनी current situation को स्वीकारो—झूठ मत बोलो खुद से कि "सब ठीक है।"`,
      `एक छोटा सा action आज ही शुरू करो—कल का इंतज़ार मत करो।`,
      `अपने आप को उन लोगों से घेरो जो तुम्हें ऊपर उठाएं, नीचे नहीं खींचें—<a href="/blog/social-circle-audit" class="gold-underline">Social Circle Audit</a> पढ़ो।`,
    ],
  });

  if (internalLinks && internalLinks.length > 0) {
    content.push({
      type: "p",
      isHindi: true,
      text: `अगर तुम्हें यह लगता है कि यह सिर्फ पैसे की बात है, तो रुको। असली game तो <a href="/blog/${internalLinks[0].slug}" class="gold-underline">${internalLinks[0].text}</a> में छुपा है।`,
    });
  }

  content.push({
    type: "p",
    isHindi: true,
    text: conclusion,
  });

  return content;
}

// ============ PHASE 1: BRUTAL ECONOMICS (1-20) ============
const economicsBlogs: Blog[] = [
  {
    slug: "salary-kyun-nahi-badhti", number: 1,
    title: "Why Your Salary Never Grows?",
    hindiTitle: "तुम्हारी Salary क्यों नहीं बढ़ती?",
    hindiKeyword: "वेतन", englishKeyword: "SKILL",
    excerpt: "Certificate मिल गया पर salary वहीं अटकी हुई है? समझो Skill vs Certificate का वह काला सच जो कोई तुमसे नहीं बताता।",
    category: "Brutal Economics", categorySlug: "economics",
    readTime: 7, date: makeDate(1),
    coverGradient: gradients[0], coverImage: "/images/category-economics.jpg",
    relatedVideoId: "dQw4w9WgXcQ",
    relatedArticleSlugs: ["degree-bekar-kyun", "skills-ki-worth", "personal-brand-currency"],
    downloadResources: [{ title: "Skill Audit Workbook", type: "Workbook", url: "#" }, { title: "Salary Negotiation Scripts", type: "PDF", url: "#" }],
    seoDescription: "तुम्हारी salary क्यों नहीं बढ़ती? Skill vs Certificate का काला सच। जानो कैसे अपनी worth बढ़ाएं। SHIVAMGRAPH Hindi blog.",
    content: blogContent(
      "तुम्हारी Salary क्यों नहीं बढ़ती?",
      [
        "तुमने engineering की—₹40,000 monthly. तुम्हारा दोस्त जिसने B.Tech के साथ-साथ video editing सीखी—₹1,20,000 monthly. Certificate दोनों के पास है। फर्क सिर्फ इतना है कि एक ने skill बनाई, दूसरे ने सिर्फ degree खरीदी।",
        "यह दुनिया certificate के लिए नहीं, problem solve करने के लिए पैसे देती है। और जितनी बड़ी problem, उतना बड़ा paycheck। इतना simple है फिर भी तुम हर appraisal cycle में रोते हो कि 'सर, salary बढ़ा दो।'",
      ],
      [
        "Salary का formula तुम्हारे boss की दया पर नहीं, market की supply-demand पर चलता है। जिस skill की market में कमी है—उसका price आसमान छूता है। जिस skill को हर कोई जानता है—उसका price झूठा मोहल्ला भाव है।",
        "तुम सोचते हो—'मैं 5 साल से यही काम कर रहा हूं।' लेकिन तुमने 5 साल में कोई नया problem solve करना नहीं सीखा। तुमने same year को 5 बार repeat किया है। Experience और repetition में फर्क होता है।",
        "Job description में लिखा है '5 years experience required'—इसका मतलब ये नहीं कि बुड्ढा चाहिए। इसका मतलब है कि ऐसा इंसान चाहिए जिसने 5 साल में इतनी मुश्किलें झेली हों कि वह हमारी मुश्किलें 1 दिन में सुलझा दे।",
      ],
      "As the Upanishads say—'You are what your deep driving desire is. As your desire, so is your will. As your will, so is your deed. As your deed, so is your destiny.'",
      "उपनिषद कहते हैं—'तुम वही हो जो तुम्हारी गहरी इच्छा है। जैसी इच्छा, वैसी इच्छाशक्ति; जैसी इच्छाशक्ति, वैसे कर्म; जैसे कर्म, वैसी नियति।'",
      "अगर तुम्हें salary बढ़ानी है, तो certificate नहीं—cash flow वाली skill चाहिए। आज रात बैठो और लिखो: market कौन सी 3 problems ऐसी हैं जिन्हें solve करने के लिए लोग तुम्हें मोटा पैसा देंगे? अगर जवाब नहीं मिल रहा—तो समझ लो तुम्हारी skill का market में कोई दाम नहीं।",
      [{ text: "Personal Brand ही Future की Currency है", slug: "personal-brand-currency" }]
    ),
  },
  {
    slug: "middle-class-trap", number: 2,
    title: "Middle Class Trap — Slavery in Comfort",
    hindiTitle: "Middle Class Trap — आराम से गुलाम कैसे बन जाते हो?",
    hindiKeyword: "जाल", englishKeyword: "TRAP",
    excerpt: "तुम्हें लगता है तुम आज़ाद हो? 9 से 5 की नौकरी, EMI, बच्चों की फीस—यही आधुनिक गुलामी है।",
    category: "Brutal Economics", categorySlug: "economics",
    readTime: 8, date: makeDate(3),
    coverGradient: gradients[1], coverImage: "/images/category-economics.jpg",
    relatedVideoId: "placeholder-002",
    relatedArticleSlugs: ["emi-culture-debt", "financial-literacy-system", "time-equals-money"],
    downloadResources: [{ title: "Middle Class Escape Plan", type: "PDF", url: "#" }],
    seoDescription: "Middle class trap क्या है? आराम की गुलामी से कैसे बाहर निकलें? हिंदी में सच्चाई। SHIVAMGRAPH।",
    content: blogContent(
      "Middle Class Trap",
      [
        "सुबह 7 बजे alarm। भागो office। 9 घंटे काम। शाम 7 बजे घर लौटो। खाना खाओ, TV देखो, सो जाओ। Repeat। यही ज़िंदगी है तुम्हारी। और तुम इसे 'stable life' कहते हो?",
        "यह स्थिरता नहीं—कैद है। सुनहरी जंजीरें। अगर तुम कल काम पर जाना बंद कर दो—3 महीने में तुम्हारा house repossess हो जाएगा। 6 महीने में car चली जाएगी। 1 साल में तुम सड़क पर। इसे तुम 'आज़ादी' कहते हो?",
      ],
      [
        "System ने middle class को बहुत सुंदर पिंजरे में बंद किया है। तुम्हें एक छोटा सा घर दे दिया—EMI के नाम पर। एक car दे दी—EMI के नाम पर। शादी, बच्चे, annual vacation—सब planned। तुम्हारी ज़िंदगी का हर साल पहले से तय है।",
        "सबसे बड़ा हथियार है—'लोग क्या कहेंगे?'। पड़ोसी ने नई car ले ली—तुम भी ले आओ। भांजी ने iPhone ले लिया—बेटी को भी चाहिए। Relative ने foreign trip की—तुम्हें भी करनी है। और हर चीज़ EMI पे—यानी तुम काम करते रहो, बैंक हंसता रहे।",
        "गरीब के पास choice नहीं होता। अमीर choice बनाता है। Middle class को लगता है उसके पास choices हैं—लेकिन वो सारी choices system ने पहले से रखी हुई हैं menu में। तुम किसी भी dish को चुनो—बिल तुम्हीं को pay करना है।",
      ],
      "Bondage, which is the human lot, is caused by the identification of the Self with the non-self.",
      "आत्मा का अनात्मा के साथ एकरूप हो जाना ही बंधन है।",
      "गुलामी की सबसे बड़ी निशानी ये है कि गुलाम अपनी जंजीरों को गहने समझने लगता है। आज ही अपने पिछले 1 साल के expenses निकालो और देखो—कितना पैसा तुमने genuinely खुद के लिए खर्च किया और कितना logon ko दिखाने के लिए?",
      [{ text: "EMI Culture ने पूरी Generation को कर्जदार बना दिया", slug: "emi-culture-debt" }]
    ),
  },
  {
    slug: "financial-literacy-system", number: 3,
    title: "Why Financial Literacy Is Never Taught",
    hindiTitle: "Financial Literacy क्यों नहीं सिखाते? — System को गुलाम चाहिए",
    hindiKeyword: "साक्षरता", englishKeyword: "MONEY",
    excerpt: "School में तुम्हें calculus सिखाया गया, लेकिन tax return कैसे भरना नहीं। यह कोई accident नहीं—system का intentional design है।",
    category: "Brutal Economics", categorySlug: "economics",
    readTime: 7, date: makeDate(5),
    coverGradient: gradients[2], coverImage: "/images/category-economics.jpg",
    relatedVideoId: "placeholder-003",
    relatedArticleSlugs: ["middle-class-trap", "assets-vs-liabilities", "tax-nahi-samjoge"],
    downloadResources: [{ title: "Financial Literacy Starter Kit", type: "PDF", url: "#" }],
    seoDescription: "Financial literacy क्यों नहीं सिखाई जाती? System को गुलाम क्यों चाहिए? हिंदी में कड़वा सच।",
    content: blogContent(
      "Financial Literacy क्यों नहीं सिखाते?",
      [
        "15 साल की education। तुम्हें याद है mitochondria क्या है—लेकिन credit card का minimum balance क्यों नहीं चुकाना चाहिए ये नहीं पता। Pythagoras theorem तुम जानते हो—लेकिन compound interest का formula नहीं पता।",
        "यह कोई संयोग नहीं है। यह design है। System को financially literate लोग नहीं चाहिए—नहीं तो कोण कर्ज लेगा? कोण 40 साल तक नौकरी करेगा? कोण उनका पैसा उनके ही banks में जमा कराएगा 3% interest पे?",
      ],
      [
        "तुम्हारे school ने तुम्हें employee बनने की training दी—employer बनने की नहीं। वो चाहते हैं तुम एक अच्छा नौकर बनो। अच्छा taxpayer बनो। अच्छा EMI देने वाला बनो। बस। ज्यादा मत सोचो।",
        "रोबर्ट कियोसाकी ने सही कहा है—'Rich people acquire assets. Poor and middle class acquire liabilities that they think are assets.' अमीर assets खरीदता है। Middle class liabilities खरीदता है और सोचता है वो assets हैं। यही system का masterstroke है।",
        "अगर हर व्यक्ति financially literate हो जाए तो पूरा banking system ध्वस्त हो जाएगा। क्योंकि लोग समझ जाएंगे कि credit card का 36% interest एक legal loot है। कि FD में पैसा रखना inflation के हाथों अपनी savings को कटवाना है।",
      ],
      "The wise man should let his money work for him; he should not be a slave to money.",
      "बुद्धिमान व्यक्ति अपने धन से काम लेता है; वह धन का दास नहीं बनता।",
      "आज से एक शुरुआत करो—हर दिन 15 मिनट सिर्फ पैसे के बारे में पढ़ो। कोई podcast, कोई किताब, कोई article। 3 महीने में तुम्हें वो सारी चीजें समझ आने लगेंगी जो स्कूल ने कभी नहीं सिखाईं।",
      [{ text: "गरीब Liabilities खरीदते हैं, अमीर Assets", slug: "assets-vs-liabilities" }]
    ),
  },
  {
    slug: "emi-culture-debt", number: 4,
    title: "EMI Culture Destroyed a Generation",
    hindiTitle: "EMI Culture ने पूरी Generation को कर्जदार बना दिया",
    hindiKeyword: "कर्ज", englishKeyword: "EMI",
    excerpt: "\"Easy EMI\" सुनकर तुम्हें लगता है कंपनी तुम पर एहसान कर रही है? अरे भाई—तुम्हें गुलाम बनाया जा रहा है किस्तों में।",
    category: "Brutal Economics", categorySlug: "economics",
    readTime: 6, date: makeDate(7),
    coverGradient: gradients[3], coverImage: "/images/category-economics.jpg",
    relatedVideoId: "placeholder-004",
    relatedArticleSlugs: ["middle-class-trap", "credit-card-gulam", "multiple-income-streams"],
    downloadResources: [{ title: "Debt-Free Tracker", type: "Checklist", url: "#" }],
    seoDescription: "EMI culture ने कैसे पूरी पीढ़ी को कर्जदार बना दिया? Easy EMI का काला सच। हिंदी में।",
    content: blogContent(
      "EMI Culture का काला सच",
      [
        "\"सिर्फ ₹2,999 monthly में iPhone ले जाओ!\" \"No cost EMI!\" \"Zero down payment!\" ये सुनकर तुम्हारे अंदर का लालच जाग जाता है। \"अरे वाह—महज 3 हजार महीने में iPhone! कितना सस्ता है!\"",
        "तुम गणित नहीं लगाते। 3,000 × 24 months = ₹72,000 + interest = लगभग ₹82,000। जिस phone का actual price ₹60,000 है तुम उसके लिए ₹82,000 चुका रहे हो—और फिर भी तुम सोचते हो तुम smart हो।",
      ],
      [
        "EMI का असली नशा ये है कि तुम future की income को आज खर्च कर रहे हो। तुम नहीं जानते कल तुम्हारी नौकरी रहेगी या नहीं—but तुमने अगले 2 साल के लिए अपने आप को bond कर लिया।",
        "2008 का subprime crisis याद करो—हर कोई घर खरीद रहा था EMI पर क्योंकि \"तुम्हारा खुद का घर होना चाहिए।\" फिर लोगों की नौकरी चली गई, EMI default हुए, घर bank ने ले लिए। History repeats itself—but तुम्हें इतिहास पढ़ाया ही नहीं गया।",
        "No-cost EMI नाम की चीज़ दुनिया में होती ही नहीं। वो interest पहले से ही product की price में जोड़ दिया जाता है। ये सिर्फ marketing trick है तुम्हारे मन में कि \"अरे free में मिल रहा है!\"",
      ],
      "One who is addicted to spending beyond his means digs his own grave.",
      "जो अपनी क्षमता से अधिक खर्च करने का आदी हो जाता है, वह अपनी कब्र खुद खोदता है।",
      "अगली बार जब भी कोई purchase large ticket का करो तो—पहले 30 दिन रुको। अगर 30 दिन बाद भी ज़रूरी लगे तो cash में खरीदो। EMI पर कभी मत लो। जो चीज़ cash में नहीं खरीद सकते—वह तुम्हारी औकात से बाहर है।",
      [{ text: "Credit Card तुम्हें अमीर नहीं, गुलाम बना रहा है", slug: "credit-card-gulam" }]
    ),
  },
  {
    slug: "passive-income-sikhaya-nahi-jata", number: 5,
    title: "Why Passive Income Is Not Taught",
    hindiTitle: "Passive Income बनाना क्यों सिखाया नहीं जाता?",
    hindiKeyword: "निष्क्रिय", englishKeyword: "PASSIVE",
    excerpt: "9-5 नौकरी करते हुए तुम 60 साल की उम्र में भी उतने ही तनाव में रहोगे जितना आज हो। Passive income ही एकमात्र रास्ता है—पर सिखाया क्यों नहीं जाता?",
    category: "Brutal Economics", categorySlug: "economics",
    readTime: 6, date: makeDate(9),
    coverGradient: gradients[4], coverImage: "/images/category-economics.jpg",
    relatedVideoId: "placeholder-005",
    relatedArticleSlugs: ["multiple-income-streams", "side-hustle-vs-job", "financial-independence-roadmap"],
    downloadResources: [{ title: "Passive Income Idea List", type: "PDF", url: "#" }, { title: "Digital Product Blueprint", type: "Workbook", url: "#" }],
    seoDescription: "Passive income क्या है? क्यों सिखाया नहीं जाता? कैसे बनाएं? Indian context में हिंदी गाइड।",
    content: blogContent(
      "Passive Income क्यों नहीं सिखाते?",
      [
        "कल्पना करो—तुम्हारे bank account में हर महीने ₹50,000 automatically आते हैं। तुम्हारी मर्जी—office जाओ या न जाओ। तुम्हारी मर्जी—काम करो या समुंदर के किनारे बैठो। पैसा आता रहेगा।",
        "ये सुनकर तुम कहोगे—\"अरे ये तो सपना है!\" लेकिन ये सपना नहीं—reality है हजारों लोगों की जो समझ गए हैं कि active income = time for money, passive income = assets for money। और system तुम्हें ये कभी नहीं सिखाने वाला।",
      ],
      [
        "System चाहता है तुम active income में फंसे रहो। क्योंकि active income में तुम replaceable हो। Job जाए—income जाए। Passive income में तुम system से आज़ाद हो जाते हो—और किसी government को ये पसंद नहीं कि उसके citizens आज़ाद हो जाएं।",
        "Passive income का मतलब ये नहीं कि मेहनत नहीं करनी। ये है कि एक बार ज़ोरदार मेहनत करो—फिर उस काम का फल सालों-साल खाओ। किताब लिखो—एक बार लिखो, जीवन भर royalty। YouTube video—एक बार बनाओ, जीवन भर ads। Code—एक बार लिखो, जीवन भर subscriptions।",
        "सबसे बड़ा myth है—'Passive income के लिए बहुत पैसा चाहिए।' Real estate तो एक way है लेकिन digital products, content, licensing, affiliate marketing—ये सब zero से शुरू होते हैं।",
      ],
      "Wealth is the ability to fully experience life, and to stop working yet continue to receive income.",
      "धन का अर्थ है जीवन को पूर्ण रूप से जीने की क्षमता—और काम बंद करने के बाद भी आय प्राप्त करना।",
      "तुम्हारा पहला कदम: identify करो कि तुम्हारे अंदर ऐसा क्या ज्ञान या skill है जिसे लोग बार-बार consume कर सकें? वहीं से तुम्हारी passive income शुरू होगी।",
      [{ text: "Multiple Income Streams — एक Salary पर निर्भर मत रहो", slug: "multiple-income-streams" }]
    ),
  },
  // Let me add the remaining blogs more compactly - I'll generate all 100 programmatically in a second file update approach
];

// I'll build the rest with a factory pattern for efficiency
const phaseData = [
  // Phase 1: Economics (6-20)
  { start: 6, end: 20, category: "Brutal Economics", categorySlug: "economics", image: "/images/category-economics.jpg", baseSlug: "economics",
    titles: [
      ["degree-bekar-kyun", "Degree बेकार क्यों हो गई?", "तुम्हारी Degree बेकार क्यों हो गई?", "डिग्री", "DEGREE", "Market ने rules बदल दिए हैं। 2025 में degree नहीं—outcome चाहिए। कॉलेज के प्रोफेसर खुद 20 साल पुराना syllabus पढ़ा रहे हैं।", ["Degree नौकरी की गारंटी नहीं देती—ये कड़वा सच 2020 के बाद और ज्यादा साफ हो गया है।", "तुम्हारे माता-पिता के ज़माने में degree = government job = security था। आज degree = average package + student loan + 30 साल की EMI।", "Market अब degree नहीं—portfolio देखता है। Client result देखता है। Proof देखता है।"], "सच तो ये है कि दुनिया बहुत तेज़ी से बदल रही है—लेकिन तुम्हारा syllabus 2005 का है।" ],
      ["assets-vs-liabilities", "Assets vs Liabilities", "गरीब Liabilities खरीदते हैं, अमीर Assets", "संपत्ति", "ASSETS", "गरीब liabilities को assets समझकर खरीदता है—ये Robert Kiyosaki का सबसे dangerous lesson है। घर खरीदना संपत्ति नहीं, बोझ हो सकता है।", ["Asset वो चीज है जो तुम्हारी जेब में पैसे डालती है। Liability वो चीज है जो तुम्हारी जेब से पैसे निकालती है। इतना simple definition।", "तुम अपनी कार को asset कहते हो? अगर वह तुम्हें हर महीने ₹15,000 petrol, insurance, maintenance में ले रही है—ये liability है।", "अमीर पहले assets खरीदता है, फिर assets के पैसे से liabilities। Middle class पहले liabilities खरीदता है फिर सोचता है कि assets बन गए।"], "अपने cash flow को समझो—जहां से पैसा आ रहा है और जहां जा रहा है।"],
      ["credit-card-gulam", "Credit Card Slavery", "Credit Card तुम्हें अमीर नहीं, गुलाम बना रहा है", "क्रेडिट", "CREDIT", "तुम्हें लगता है credit card से status मिलता है? हां—गुलामी का status मिलता है। 36% वार्षिक ब्याज legal dacoity है।", ["Credit card कंपनी का पूरा business model तुम्हारी impulse पे टिका है। तुम्हें लगता है 'अभी खरीद लो, बाद में pay करेंगे'—और बाद में interest + penalty का चक्रव्यूह शुरू।", "Minimum amount due तुम्हें लगता है एहसान है—ये उनका सबसे बड़ा weapon है। 1 लाख का bill, सिर्फ 5 हजार चुकाओ और बाकी पर 36% ब्याज—तुम कभी कर्ज मुक्त नहीं होगे।", "जापान में तो credit card लेना भी मुश्किल है—क्योंकि वहां financial literacy ज्यादा है। भारत में? Doorstep पे card delivery और 18 साल के बच्चों को भी ₹50,000 limit।"], "Credit card का इस्तेमाल पैसे की तरह नहीं—debit card की तरह करो। पैसा है तभी use करो—वरना काट दो।"],
      ["investment-500-rupees", "Start Investing with ₹500", "Investment की असली शुरुआत — ₹500 से भी हो सकती है", "निवेश", "INVEST", "\"मेरे पास invest करने के लिए पैसे नहीं है\"—ये सबसे बड़ा बहाना है। ₹500 महीना भी डालो पर शुरुआत करो। Compound interest को समय चाहिए।", ["तुम 25 साल की उम्र में हर महीने ₹500 SIP डालते हो—60 साल तक 15% return पे—तुम्हारे पास ₹3.8 करोड़ होंगे। 35 से शुरू करोगे तो? सिर्फ ₹86 लाख। 10 साल का फर्क = ₹3 करोड़। ये है compounding का जादू।", "ये मत सोचो कि '₹500 में क्या होगा?' आदत बनेगी। Discipline बनेगा। जब तुम्हारी income बढ़ेगी तो तुम automatically बढ़ा दोगे—पर आदत पहले से होनी चाहिए।", "SIP, mutual fund, index fund, direct equity—शुरुआत कहीं से भी करो लेकिन जल्दी करो। Mutual fund सही हैं एवरेज इंसान के लिए क्योंकि उनमें diversification होता है।"], "शुरुआत करो आज से—भले ही ₹100 से ही। एक साल बाद तुम कहोगे कि काश पहले शुरू किया होता।"],
      ["skills-ki-worth", "Your Skills Market Value", "तुम्हारी Skills Market में कितनी Worth हैं?", "मूल्य", "WORTH", "ये honest audit का समय है। तुम जो skills रखते हो—क्या market उन्हें खरीदती है? या सिर्फ तुम्हें लगता है कि ये valuable हैं?", ["Market की पूजा करो—अपनी ego की नहीं। अगर market ₹15,000 दे रही है उस skill के लिए जिस पर तुमने 4 साल लगाए हैं—तो उस skill की market में यही कीमत है।", "अपनी skills की worth जानने का एकमात्र तरीका है—बेचकर देखो। Freelance करके देखो। Client से quote मांगो Naukri.com पे जाकर आवेदन करो। Interview दो।", "High-income skills वो हैं जो किसी और का revenue directly बढ़ाती हैं। Sales, copywriting, digital marketing, coding, video editing, lead generation—ये सारी skills measurable हैं।"], "आज ही एक नोटबुक लो और अपनी 5 SKILLS लिखो। उनके आगे लिखो कि भारत में industry average कितना pay करती है।"],
      ["side-hustle-vs-job", "Side Hustle vs Job", "Side Hustle vs Job — दोनों की ज़रूरत क्यों है?", "अतिरिक्त", "HUSTLE", "Job तुम्हें security देती है। Side hustle तुम्हें freedom देता है। दोनों की ज़रूरत है—खासकर early stage में।", ["ये trend चल रहा है—'Quit your job and start a business!' भाई जिसके पास 6 महीने का emergency fund नहीं वो job क्यों छोड़े? Side hustle को पहले part-time grow करो।", "Day job तुम्हारी runway है। वो तुम्हें rent देती है, food देती है, और साथ ही तुम्हारे side hustle को बिना किसी pressure के चला सकते हो।", "Side hustle का दूसरा फायदा—तुम employer के नहीं, market के सामने अपनी आज़माइश करते हो। अगर चल गया तो job छोड़ दो। नहीं चला तो नौकरी तो है ही।"], "शुरुआत में दोनों करो—जब side hustle income job की income का 2x हो जाए तभी छोड़ो।"],
      ["inflation-savings-kha-raha", "Inflation Eats Your Savings", "Inflation तुम्हारी Savings को चुपचाप खा रहा है", "महंगाई", "INFLATION", "तुम्हें लगता है FD में ₹10 लाख रखना safe है? 7% inflation के हिसाब से 10 साल बाद वो ₹10 लाख की actual value ₹5 लाख रह जाएगी।", ["FD तुम्हें 5-6% देती है। Inflation 7% है। मतलब तुम हर साल 1-2% पैसा खो रहे हो। और ये भी before tax। Tax के बाद तुम्हारा return 3-4% रह जाता है—यानी हर साल 3-4% loss।", "पूरे देश का middle class FD में फंसा हुआ है क्योंकि 'FD सबसे safe है।' क्यों? क्योंकि नानी के ज़माने से ये सुना जा रहा है। लेकिन नानी के ज़माने में FD 12% देती थी और inflation 4% थी।", "Safe समझकर जोखिम उठाना सबसे बड़ा risk है आज के दौर में। पैसा जमा नहीं रखना—काम पर लगाना पड़ेगा। सोना, real estate, equities, bonds, index funds—हर चीज को समझो।"], "अपने portfolio को inflation से बचाने के लिए equities और real assets में भी allocation रखो।"],
      ["tax-nahi-samjoge", "Tax = Wealth Killer", "Tax नहीं समझते तो अमीर कभी नहीं बन सकते", "कर", "TAX", "तुम्हारी salary का 30% सीधा tax चला जाता है—और तुम tax बचाने का एक भी तरीका नहीं जानते। अमीर legally tax बचाते हैं—तुम क्यों नहीं?", ["Tax laws बने ही अमीरों के लिए हैं—क्योंकि वो जानते हैं deductions, exemptions, depreciation, HUF, LLP, 80C, 80D, NPS, home loan। तुम्हें कुछ नहीं पता और भरोसा है CA पर—जो तुम्हारे बारे में उतना नहीं सोचता जितना खुद के बारे में।", "एक ही salary लेने वाले दो लोग ले लो—एक हर साल ₹1.5 लाख tax बचाता है, दूसरा पूरा चुकाता है। 30 साल में ये difference compound होके करोड़ों में बन जाता है।", "Tax evasion गलत है—tax avoidance बुद्धिमानी है। Government ने ही तुम्हें ये रास्ते दिए हुए हैं—use them। Section 80C से लेकर ₹1.5 लाख तक, NPS में ₹50,000 extra, home loan interest, HRA, LTA—सब सीखो।"], "हर साल March से पहले tax planning करो—नहीं तो पछताओगे 31 March की रात को।"],
      ["multiple-income-streams", "Multiple Income Streams", "Multiple Income Streams — एक Salary पर निर्भर मत रहो", "धाराएं", "STREAMS", "2020 की lockdown ने साबित कर दिया—अगर तुम्हारा एक ही source of income है, तुम एक महीने दूर हो बर्बादी से।", ["Warren Buffett कहते हैं—'Never depend on a single income. Make investment to create a second source.' सात income streams चाहिए minimum—not because you're greedy, but because you're safe.", "Income streams types हैं: earned income (salary), profit (business), interest (FD/bonds), dividend (stocks), rental (real estate), capital gains (assets), royalty (IP/courses/books). तुम्हारे पास अभी कितने हैं?", "शुरुआत में salary के साथ 1 side hustle—फिर उस side hustle को grow करके एक अलग income stream बनाओ। फिर उस income से एक property ले लो—rental income शुरू। फिर stocks के dividends। एक-एक करके build करो।"], "तुम्हारा first target: salary के अलावा एक और income stream जो तुम्हें हर महीने ₹10,000 दे।"],
      ["time-equals-money", "Time = Money — Understand It", "तुम्हारा Time = Money — इस Equation को समझो", "समय", "TIME", "तुम scrolling में 2 घंटे बर्बाद करते हो—और सोचते हो मेरे पास समय नहीं है। जिसके पास समय की कद्र नहीं—उसके पास पैसा कभी नहीं होगा।", ["हर इंसान के पास दिन में 24 घंटे ही हैं। अमीर और गरीब में फर्क ये है कि अमीर घंटे बेचता नहीं—घंटे खरीदता है। तुम? अपने घंटे बेच रहे हो ₹200-₹2000 के rate पे।", "तुम 1 घंटा commute में लगाते हो—सालाना 250 घंटे। 10 साल में 2500 घंटे—यानी पूरे 104 दिन। और तुम कहते हो time नहीं है side hustle के लिए।", "Opportunity cost की concept समझो। अगर तुम freelancing से ₹2000 प्रति घंटा कमा सकते हो—तो house cleaning में 3 घंटे लगाने का मतलब है ₹6000 का loss। अगर कोई ₹200 प्रति घंटे में कर सकता है—उसे करवा दो।"], "आज से हर एक घंटे की value अपने दिमाग में बिठाओ और उसी हिसाब से अपना calendar plan करो।"],
      ["network-is-net-worth", "Your Network = Your Net Worth", "Network ही Net Worth है — Quality Network कैसे बनाएं?", "नेटवर्क", "NETWORK", "अकेले कभी अमीर नहीं बनते। तुम्हारा net worth तुम्हारे closest 5 लोगों के average जितना होता है—ये सच है।", ["लोग गलती करते हैं 5000 Instagram followers को network समझकर। Network मतलब वो लोग जो तुम्हें actual opportunity देंगे, जो तुम्हारा client बनेंगे, जो तुम्हें introduce करवाएंगे उन लोगों से जो gatekeeper हैं।", "Quality network के लिए पहाड़ जैसे ऊपर चढ़ो। जो लोग तुमसे आगे हैं उनके पास जाओ, उन्हें value दो, चापलूसी नहीं। किसी event में जाकर business cards बांटने से कुछ नहीं होता—real conversation करो।", "एक rule है—if you're the smartest person in the room, you're in the wrong room. तुम्हें हमेशा अपने से बेहतर लोगों के बीच में रहना चाहिए—भले ही शुरुआत में तुम्हें imposter syndrome हो।"], "List बनाओ उन 10 लोगों की जिनसे तुम्हें जुड़ना है। उन्हें DM भेजो—बिना मांगे कुछ value दो।"],
      ["economic-cycles-recession", "Economic Cycles & Recession", "Economic Cycles समझो — Recession में अमीर कैसे बनते हैं?", "चक्र", "CYCLES", "Recession आता है तुम रोते हो—अमीर खरीदारी करता है। क्योंकि वो cycles समझता है और तुम्हें केवल news चैनल डराता है।", ["History में कभी भी market 10 साल से नीचे नहीं रहा है। हर recession के बाद recovery हुई है—और जिन्होंने recession में खरीदा वो recession के 5 साल बाद करोड़पति बने।", "Recession में क्या सस्ता मिलता है? Stocks—50-60% off। Real estate—30% off। Businesses—distressed sale में। और ये वो चीजें हैं जो long-term में wealth बनाती हैं।", "लेकिन यही समय पे cash चाहिए। इसलिए emergency fund ज़रूरी है—सिर्फ safety के लिए नहीं, opportunity के लिए भी। जब सारी दुनिया panic selling कर रही हो—तुम buyer बनो।"], "अगले recession का इंतज़ार करो—और तब तक cash जमा करो।"],
      ["frugal-vs-cheap", "Frugal vs Cheap", "Frugal Living vs Cheap Living — फर्क जानो", "मितव्ययी", "FRUGAL", "Frugal होना मतलब कंजूस होना नहीं। Frugal = value optimization। Cheap = lowest price। दोनों में फर्क है।", ["Cheap आदमी ₹2000 का जूता खरीदता है जो 3 महीने टिकता है। Frugal आदमी ₹8000 का जूता खरीदता है जो 5 साल चलता है। Long run में कौन ज्यादा पैसा खर्च करता है? गणित लगाओ।", "Frugal आदमी experiences पर पैसा खर्च करता है—depreciating assets पर नहीं। Cheap आदमी सब में कटौती करता है—जरूरी चीजों में भी।", "जहाँ value मिल रही है वहाँ पैसा खर्च करो। जहाँ status दिखाने के लिए खरीद रहे हो वहाँ कटौती करो। BMW खरीदने से पहले सोचो—क्या ये मेरी income का 20% से ज्यादा है? अगर हां तो status trap है।"], "अपने हर बड़े purchase से पहले पूछो—'क्या ये मेरी life को actually improve करेगा?'"],
      ["personal-brand-currency", "Personal Brand = Currency", "Personal Brand ही Future की Currency है", "ब्रांड", "BRAND", "अगर तुम्हारा नाम Google पे 2 रिजल्ट देता है—तुम employee हो। अगर 2 पेज देता है—तुम एक brand हो। Brand की value job से 100 गुना ज्यादा है।", ["2025 में तुम्हारा Instagram, LinkedIn, YouTube, Twitter/X—ये तुम्हारा real resume है। जब कोई तुम्हें hire करता है या तुमसे काम कराता है—वो तुम्हारी online presence देखकर निर्णय लेता है।", "Personal brand का मतलब fame नहीं—trust है। लोग जानते हैं कि इस field में यह आदमी जवाब है। जब भी कोई [X category] की बात करे—तुम्हारा नाम सबसे पहले आना चाहिए।", "Gary Vee कहते हैं—'Your personal brand is your reputation.' और reputation build होने में साल लगते हैं—लेकिन एक बार बन जाए तो opportunities तुम्हारे पीछे भागती हैं।"], "आज से हर दिन एक post—अपने niche पर। 1 साल बाद तुम्हीं नहीं पहचान पाओगे अपने आप को।"],
      ["financial-independence-roadmap", "Financial Independence Roadmap", "Financial Independence का Roadmap — Indian Context", "स्वतंत्रता", "F.I.R.E", "Financial independence मतलब अरबपति होना नहीं—मतलब इतना passive income होना कि नौकरी करने की ज़रूरत न रहे।", ["Rule 1: पहले emergency fund—6 महीने के expenses को अलग account में रखो। इसे कभी मत छुओ। Rule 2: High-interest debt (credit card, personal loan) खत्म करो—पहले। 36% return कहीं और नहीं मिलेगा।", "Rule 3: हर महीने income का 20-30% minimum invest करो। Index funds, mutual funds, direct stocks में। Rule 4: Side income streams build करो—ऊपर वाले article पढ़ो।", "Rule 5: जब passive income तुम्हारे monthly expenses के बराबर हो जाए—तुम financially independent हो। चाहे उम्र 30 हो या 60। Indian context में 60-80 लाख का corpus और एक rental property बहुतों के लिए काफी है।"], "तुम्हारा number क्या है? कितने रुपये चाहिए हर महीने बिना काम किए? उस number को calculate करो first।"],
    ],
  },
  // Phase 2: Relationships (21-40)
  { start: 21, end: 40, category: "Relationship Reality", categorySlug: "relationships", image: "/images/category-relationships.jpg", baseSlug: "rel",
    titles: [
      ["rishte-transactional", "रिश्ते Transactional क्यों?", "तुम्हारे सारे रिश्ते Transactional क्यों हो गए हैं?", "रिश्ते", "TIES", "आज कल लोग इंसान से नहीं, उसकी utility से प्यार करते हैं। जब utility खत्म—रिश्ता खत्म। कड़वा लेकिन सच।", ["बचपन का दोस्त जो अब तुमसे नहीं मिलता—क्योंकि आज उसकी ज़रूरतें बदल गई हैं। मामा जो पहले फोन करते थे—अब नहीं, क्योंकि तुम्हारी कंपनी का काम अब उनके काम नहीं आता।", "ये सब बुरा नहीं है—ये बस human nature है। हर रिश्ते में exchange होता है—emotional, financial, social, psychological। लेकिन आज कल बस overt हो गया है।", "खुद से पूछो—अगर मेरे पास पैसा, status, looks न होते तो आज मेरे आसपास कितने लोग होते? जवाब अक्सर कड़वा होता है लेकिन तुम्हें जगा देगा।"], "सच्चे रिश्ते वो हैं जहां utility नहीं—acceptance होती है।"],
      ["toxic-logon-ko-pehchano", "Toxic लोगों को कैसे पहचानें?", "Toxic लोगों को कैसे पहचानें — Red Flags", "विषाक्त", "TOXIC", "तुम्हारी energy चूसने वाले लोग तुम्हारे ही आसपास रहते हैं—दोस्त, रिश्तेदार, कभी-कभी परिवार वाले भी।", ["Red flag #1: हर बात पे victim card। हर किसी ने उनके साथ बुरा किया है। उनकी ज़िंदगी में कोई उनका दोष ही नहीं। Red flag #2: तुम्हारी success पे खुशी नहीं—बस 'लकी' कहकर dismiss कर देंगे।", "Red flag #3: वो हर secret को बाद में weapon की तरह use करेंगे। Red flag #4: उनके साथ time बिताने के बाद तुम हमेशा drained महसूस करते हो—कभी energized नहीं।", "ये सोचना मत कि तुम उन्हें बदल दोगे। 35 साल के आदमी को तुम नहीं बदल सकते—वो खुद ही बदल सकता है अगर वो चाहे। तुम्हारा काम सिर्फ door दिखाना है।"], "Toxic लोगों से दूरी बनाओ—भले ही वो खून के रिश्तेदार ही क्यों न हों। Mental peace > loyalty to toxic people।"],
      ["loneliness-epidemic-india", "Loneliness Epidemic India", "Loneliness Epidemic — India में भी आ चुकी है", "अकेलापन", "ALONE", "1.3 billion लोगों के देश में तुम अकेले महसूस कर रहे हो? ये तुम्हारी गलती नहीं—ये महामारी है।", ["WHO ने कहा है loneliness इस सदी की सबसे बड़ी public health crisis है। भारत में 40% youth हर दिन अकेलापन महसूस करते हैं—झुग्गी में रहने वाला और penthouse में रहने वाला दोनों।", "Social media ने ये पैदा किया है। तुम्हारे पास 5000 followers हैं—लेकिन एक भी आदमी नहीं जिसे तुम 2 बजे रात को फोन कर सको।", "दोस्ती बनाने के लिए offline निकलना पड़ेगा। Gym जाओ, sports club, book club, workshop, community events। DM से दोस्ती नहीं बनती—presence बनाती है।"], "अपने आप को एक challenge दो—इस महीने 3 नए लोगों से offline मिलो और गहरी बात करो।"],
      ["dating-authenticity-mar-gayi", "Dating में Authenticity मर गई", "Dating में Authenticity क्यों मर गई?", "डेटिंग", "AUTHENTIC", "हर कोई अपने best version को Instagram पे दिखा रहा है—और अंदर से टूटा हुआ है। Dating apps पे अब authenticity नहीं—advertisement है।", ["लड़की को लगता है हर लड़का player है। लड़के को लगता है हर लड़की को बस पैसा चाहिए। दोनों एक दूसरे से झूठ बोल रहे हैं। Result? अकेलापन।", "सबसे बड़ी समस्या: लोग first impression में परफेक्ट बनने की कोशिश करते हैं—और 3 महीने बाद पता चलता है कि दोनों में से कोई भी परफेक्ट नहीं था।", "असली intimacy vulnerability से आती है। अपनी कमियों को छुपाओ मत—शुरुआत में ही दिखा दो। अगर सामने वाला भाग जाए—तो वो तुम्हारे लिए था ही नहीं। जो रह जाए—वो तुम्हें असल में पसंद करेगा।"], "अगली डेट पे जाओ तो अपनी एक कमजोरी पहले ही share करो—और देखो क्या होता है।"],
      ["parents-expectations-vs-reality", "Parents Expectations vs Your Reality", "Parents के Expectations vs तुम्हारी Reality", "माता-पिता", "PARENTS", "Parents को लगता है वो तुम्हारा भला चाहते हैं—लेकिन उनका 'भला' 1990 के हिसाब से है। तुम 2025 में जी रहे हो।", ["ये generational gap नहीं—generational cliff है। तुम्हारे पिता जी ने 30 साल एक ही कंपनी में काम किया और pension मिली। तुम? 3 साल में 4 नौकरियां, कोई pension नहीं, gig economy।", "वो government job के लिए क्यों दबाव डालते हैं? क्योंकि उनके समय में government job में सुरक्षा थी। वो शादी के लिए क्यों कहते हैं? क्योंकि उनके समय में लोग 25 में करते थे।", "उनसे लड़ो मत—समझा कर धीरे-धीरे। अपना results दिखाओ। जब वो देखेंगे कि तुम खुश हो और financially stable हो—वो भी अपना रुख बदलेंगे।"], "Parents से बात करो—लड़ो नहीं। लेकिन अपने रास्ते को छोड़ो भी नहीं।"],
      ["boundaries-set-karna", "Boundaries क्यों जरूरी?", "Boundaries Set करना सीखो — रिश्ते बचाने के लिए", "सीमाएं", "BOUNDARY", "तुम्हारी मौसी तुम्हें शादी के लिए ताने मारती है—और तुम हंसकर टाल देते हो? ये boundary का अभाव है।", ["Boundary मतलब दीवार नहीं—fence है। तुम अपने घर में घुस सकते हो लेकिन मेरे permission के बिना मेरे बेडरूम में नहीं। Boundary मतलब तुम क्या tolerate करोगे और क्या नहीं।", "लोग कहते हैं—'अरे वो तो अपना ही है।' अपनों को ही सबसे ज्यादा boundaries की जरूरत होती है। अपने ही सबसे ज्यादा hurt करते हैं—क्योंकि तुमने उन्हें permission दी हुई है।", "Boundary set करते समय guilt मत महसूस करो। 'नहीं' एक complete sentence है। बिना explanation के कहो और देखो—कितने लोग तुमसे दूर जाते हैं। वो लोग ही तुम्हारी life में नहीं होने चाहिए थे।"], "आज ही 3 boundaries लिखो जो तुम्हें अपनी ज़िंदगी में लगानी है।"],
      ["power-dynamics-rishte", "रिश्तों में Power Dynamics", "हर रिश्ते में Power Dynamics होती है", "शक्ति", "POWER", "हर रिश्ते में एक ज्यादा powerful होता है—और एक कम। और जो कहता है 'हमारे बीच कोई power dynamics नहीं'—वो usually powerful one होता है।", ["Romantic relationships में power पैसे पर, looks पर, options पर, emotional investment पर निर्भर करता है। जो कम care करता है हमेशा powerful होता है—दिल दुखाना मत लेकिन ये सच है।", "परिवार में power पैसे लाने वाले के हाथ में होती है। दोस्ती में power charismatic one के पास। काम पर obviously hierarchy।", "Power dynamics को ignore करने से वो गायब नहीं होती—तुम बस powerless रह जाते हो। उसे समझो और navigate करो। खुद को इतना strong बनाओ कि तुम्हें किसी के आगे झुकना न पड़े।"], "Power games खेलने की ज़रूरत नहीं—लेकिन power dynamics को समझना और अपनी रक्षा करना ज़रूरी है।"],
      ["pyar-kyun-nahi-samajhta", "वो तुम्हें क्यों नहीं समझता?", "तुम जिससे प्यार करते हो वो तुम्हें क्यों नहीं समझता?", "समझ", "UNDERSTAND", "तुम उम्मीद करते हो कि तुम्हारा partner तुम्हारी बिना कहे हर बात समझ जाए? ये childlike expectation 90% relationships को तोड़ती है।", ["Telepathy केवल फिल्मों में होती है। Real life में तुम्हें clearly बताना पड़ता है—'मुझे ये चाहिए, मुझे ये पसंद नहीं, मैं क्या feel कर रहा हूं।' फिर भी 100% नहीं समझ आएगा—लेकिन कोशिश तो होगी।", "लोग ये भूल जाते हैं कि सामने वाले की अपनी ज़िंदगी है, अपने तनाव हैं, अपने मुद्दे हैं। वो दिन-रात तुम्हारे बारे में ही नहीं सोचता। और ये स्वार्थ नहीं—ये सामान्य है।", "अगर कोई तुम्हें समझने की कोशिश करता है—वोही असली प्यार है। परफेक्ट समझ कभी नहीं मिलती।"], "अगली बार fight के बाद बैठो और बिना blame के कहो—'मुझे ये feel हो रहा था।' बदलाव देखोगे।"],
      ["emotional-labour", "Emotional Labour क्या है?", "Emotional Labour क्या है?", "भावनात्मक", "LABOUR", "किसी को हर समय संभालना, हर fight के बाद माफी मांगना, हर relationship को तुम्हीं निभा रहे हो—ये unpaid labour है।", ["Sociologist Arlie Hochschild ने ये term दी। Emotional labour मतलब दूसरों की भावनाओं को manage करना—अपने दम पर। और ये mostly women को करनी पड़ती है घर में और men को workplace में।", "ये तुम्हें महसूस भी नहीं होता—लेकिन ये धीरे-धीरे तुम्हें burn out कर देती है। हर छोटी बात पे 'sorry', हर किसी के mood को हैंडल करना, हर जगह diplomat बनकर रहना।", "Emotional labour को equal बांटो। अगर तुम ही हर रिश्ते में giver हो—और सामने वाला हमेशा लेता जा रहा है—वो रिश्ता तुम्हें तोड़ देगा।"], "List बनाओ कि last week कितने बार तुमने रिश्ते को smooth करने के लिए अपनी feelings को suppress किया।"],
      ["akele-vs-galti-log", "अकेले vs गलत लोग", "अकेले रहना vs गलत लोगों के साथ रहना", "अकेला", "ALONE", "Tumhe lagta hai akela rehna bura hai? Galat logon ke saath rehna usse 100 guna zyada bura hai. Isme koi shak nahi.", ["Akela rehna tumhe energy deta hai. Galat logon ke saath rehna tumhara energy suck kar leta hai. Akelapan tumhe grow karne ka time deta hai. Galat log tumhe apne level pe ghaseet te hain.", "Loneliness vs solitude me farak hai. Loneliness = dard. Solitude = choice. Jab tum quality time apne aap ke saath bitana shuru karoge tab tumhe farak samajh aayega.", "Jo log akelapan se bachne ke liye kisi bhi relationship me jump karte hain—ve hamesha galat relationship me hi phaste hain. Kyunki wo needy state me decision le rahe hote hain."], "Akele 6 mahine bitao—bina dating, bina fake doston ke. Tumhe naya version milega apne aap ka."],
      ["communication-skills", "Communication Skills का महत्व", "Communication Skills की कमी हर रिश्ते को तोड़ती है", "संचार", "COMM", "तुम्हारे 90% झगड़े पैसे के नहीं, communication के होते हैं। तुमने कुछ कहा, सामने वाले ने कुछ और समझा—फिर war।", ["Most people don't listen to reply—wait, most people listen to reply, not to understand. तुम सामने वाले की बात सुन नहीं रहे हो—तुम अपना next reply मन में बना रहे हो।", "\"तुम हमेशा...\" \"तुम कभी...\"—ये words किसी भी argument को nuclear war बना देते हैं। Blame language बंद करो—feeling language use करो। 'तुम मुझे ignore करते हो' की जगह 'मुझे अकेला महसूस होता है'।", "Non-verbal communication 70% होती है—tone, body language, eye contact। Tum jisse baat kar rahe ho us taraf dekh kar baat karo—phone chala ke mat baat karo."], "आज अपने सबसे करीबी इंसान से बिना phone के 30 मिनट baat karo—सिर्फ सुनो, जवाब नहीं देना है बस सुनो।"],
      ["attachment-styles", "Attachment Styles क्या हैं?", "Attachment Styles — Childhood तुम्हारे रिश्ते तय करता है", "लगाव", "ATTACH", "बचपन में माँ ने ठीक से attention नहीं दिया? पिता जी दूर रहे? ये बचपन के ज़ख्म तुम्हारे adult relationships में silently चलते हैं।", ["Attachment styles 4 types: Secure (healthy), Anxious (तुम मुझे छोड़कर नहीं जाओ न?), Avoidant (मुझे बहुत पास मत आओ), Fearful-Avoidant (आओ भी लेकिन दूर भी रहो)। भारत में anxious और avoidant का बाहुल्य है।", "अगर तुम्हारे बचपन में माँ-बाप emotionally available नहीं थे—तुम बड़े होकर या तो clingy बनोगे या फिर पूरी दुनिया से दूर रहोगे। और ये दोनों ही relationships को नुकसान पहुंचाते हैं।", "अच्छी news: attachment style change हो सकता है therapy से, self-awareness से और एक secure partner के साथ रहकर। लेकिन उसके लिए तुम्हें अपने ज़ख्मों को खुद को दिखाना पड़ेगा।"], "Attachment style पर एक किताब पढ़ो—'Attached' by Levine and Heller। Free PDF भी मिल जाएगी।"],
      ["respect-vs-love", "Respect और Love में फर्क", "Respect और Love में फर्क — दोनों जरूरी हैं", "सम्मान", "RESPECT", "तुम्हें प्यार तो सब करते हैं—लेकिन इज़्ज़त कितने देते हैं? प्यार के बिना रिश्ता चल सकता है—इज़्ज़त के बिना नहीं।", ["प्यार emotion है—आ जाता है, चला जाता है। Respect choice है—रोज सुबह उठकर चुनना पड़ता है। लोग अक्सर प्यार को इतना ऊपर रखते हैं कि respect को भूल ही जाते हैं।", "अगर सामने वाला तुमसे प्यार करता है लेकिन तुम्हारी बातों को हंसी में उड़ाता है, तुम्हें friends के सामने नीचा दिखाता है, तुम्हारे dreams को बचकाना कहता है—वो प्यार किस काम का?", "Relationship में पहचानो: क्या ये fight के बाद भी तुम्हारी इज़्ज़त करता/करती है? अगर हां—रख लो। अगर नहीं—चले जाओ।"], "अपने रिश्ते में respect को प्राथमिकता दो—प्यार अपने आप follow करेगा।"],
      ["social-circle-audit", "Social Circle Audit", "Social Circle Audit — Energy लेने वालों को हटाओ", "मंडली", "CIRCLE", "तुम्हारे phone में 2000 contacts हैं—और mental breakdown के समय 2 लोग हैं जो actually उठाएंगे। ये कैसा progress है?", ["Audit karna simple hai: apne last 3 mahine ki list banao. Un logo ko list karo jinke saath tumne time bitaya. Unke samne likho: ye insaan deta hai energy ya leta hai?", "Givers ko aur paas laao. Takers ko door rakho. Neutrals ko thoda kam rakho. Itna simple hai. Tum sochoge 'par vo mera bachpan ka dost hai'—bachpan ka dost agar aaj tumhaara energy le raha hai to bachpan yaad kar ke akele baithe raho par usse dur raho.", "ये मत सोचो कि तुम mean बन रहे हो। Self-preservation mean नहीं होता—और जो लोग तुम्हें energy drain करते हैं वो कौन सा बहुत अच्छे इंसान हैं?"], "आज ही एक बार अपनी contacts list खोलो और 20 लोगों को delete करो जिनसे तुमने 2 साल से बात नहीं की और जो तुम्हारे future में भी नहीं हैं।"],
      ["marriage-contract", "Marriage is a Contract", "Marriage एक Contract है — Logic पहले, Emotion बाद", "विवाह", "CONTRACT", "शादी को सिर्फ प्यार समझने वाले लोग बाद में तलाक लेते हैं। शादी एक legal और financial contract है—सबसे पहले ये समझो।", ["Court में जाकर देखो—तलाक के 90% cases पैसे के होते हैं। प्रेमी-प्रेमिका रोते हुए आते हैं और property बांटने लगते हैं। ये क्यों होता है? क्योंकि लोग शादी को contract समझकर ही नहीं करते।", "Marriage में पहले बात करो: career goals, बच्चे कितने और कब, money कौन संभालेगा, parents कैसे रहेंगे, debt क्या है, lifestyle कैसी होगी। ये सब बातें शादी से पहले—not बाद।", "Love marriage हो या arranged—legal और financial पहलू को समझे बिना शादी मत करो। Prenuptial agreement भारत में भी legal है—बुरा मत मानो।"], "अगर तुम अभी शादी करने वाले हो—तो पहले 3 खुलकर बातें करो पैसों, बच्चों और career को लेकर।"],
      ["breakup-ke-baad-rebuild", "Breakup के बाद Rebuild", "Breakup के बाद खुद को कैसे Rebuild करें?", "ब्रेकअप", "REBUILD", "Breakup एक मर जाने जैसा feel होता है—लेकिन ये death नहीं rebirth है। तुम बस उस version को दफन कर रहे हो जो दूसरे के लिए बनाया था।", ["1-month rule: first 30 days no contact—bilkul nahi. Status mat dekho, common friends se unke bare me mat poocho, unke favorite jagah pe mat jao. Ye detox hai.", "Pain ko avoid mat karo. Usko feel karo—ro lo, jitna rona hai ro lo. Lekin 30 din ke baad wapas apne pairon pe khade ho jao. Gym jao, naye skills seekho, doston se milo.", "Rebuild ka matlab ye nahi ki tum unko bhul jao. Matlab ye hai ki tum apni identity wapas le lo—jo relationship me tumne khodi thi. Uske baad hi tum naye relationship ke liye ready honge."], "Breakup ke baad ek naya habit shuru karo—jisme tum 30 din tak consistently acha karo—gym, reading, walking. Ye tumhe proof dega ki tum ab bhi disciplined ho."],
      ["male-loneliness-crisis", "Male Loneliness Crisis", "Male Loneliness Crisis — कोई बात नहीं करता", "पुरुष", "MEN", "आदमी दोस्ती नहीं बनाते 25 के बाद। वो अकेला हो जाता है। वो रो नहीं सकता, कमजोर दिखा नहीं सकता, मदद मांग नहीं सकता।", ["Study कहती है—30 साल के बाद आदमी के पास औसतन 2 करीबी दोस्त होते हैं। 45 के बाद—एक। और suicide rate men में women का 3 गुना है भारत में।", "\"मर्द को दर्द नहीं होता\"—ये बात जितनी बार सुनाओगे, उतना ही वो अपने दम घुटता रहेगा। Traditional masculinity ने पुरुषों को emotional अपंग बना दिया है।", "लड़को—तुम्हें भी permission है रोने की, कमजोरी दिखाने की, मदद मांगने की। और अगर तुम्हारा कोई दोस्त पूछ रहा है 'तू ठीक है?'—झूठ मत बोलो 'हां' कहकर।"], "आज ही एक पुराने दोस्त को call करो—और सिर्फ 'कैसा है यार, बात करनी थी' कहकर 1 घंटा बात करो।"],
      ["female-hypergamy-male-utility", "Hypergamy & Utility", "Female Hypergamy और Male Utility — Biology + Society", "हाइपरगैमी", "BIOLOGY", "ये controversial topic है—लेकिन data और biology दोनों इसे support करते हैं। Hypergamy = women ऊपर के status के पुरुष की ओर आकर्षित होती हैं।", ["Hypergamy कोई बुरी चीज नहीं—ये प्रकृति का design है। पूरी evolution में female ने हमेशा उस male को choose किया जो best resources, best protection, best genes दे सके।", "Male utility का मतलब: एक पुरुष की value उसकी utility से नापी जाती है—can he provide? can he protect? can he lead? ये सच है चाहे तुम्हें पसंद हो या नहीं।", "Modern twist: अब women खुद कमा रही हैं—तो utility अब केवल पैसा नहीं रही। Emotional maturity, confidence, humor, ambition—ये सारी चीजें भी अब utility हैं।"], "ये पढ़कर नाराज मत हो—अगर तुम्हें better partner चाहिए तो खुद को बेहतर बनाओ।"],
      ["adult-ki-tarah-parents-ko-handle", "Parents को Adult की तरह Handle करो", "अपने Parents को Adult की तरह कैसे Handle करें?", "वयस्क", "ADULT", "तुम 30 साल के हो गए हो—और माँ अब भी तुम्हें 8 साल के बच्चे की तरह treat करती है? तो इसमें माँ की नहीं—तुम्हारी गलती है।", ["Parents को लगता है तुम अभी भी बच्चे हो—जब तक तुम खुद उन्हें ये एहसास नहीं दिलाओगे कि तुम अब adult हो। Adult होने का मतलब है—अपने decisions खुद लो और उनके consequences खुद भुगतो।", "हर बार permission मत मांगो हर छोटी चीज के लिए। 'माँ मैं ये कर रहा हूं, सिर्फ बता रहा हूं'—ये tone shift से ही बहुत बदलाव आता है।", "वो तुमसे प्यार करते हैं—लेकिन उनका प्यार कभी-कभी controlling हो जाता है। तुम्हें शांति से लेकिन दृढ़ता से अपनी जगह बनानी है।"], "अपने financial decisions अब माता-पिता से पूछना बंद करो—बताओ कि तुमने क्या किया और क्यों किया।"],
      ["unconditional-love-myth", "Unconditional Love एक Myth है", "Unconditional Love एक Myth है — और यह ठीक है", "बिना शर्त", "MYTH", "माँ का प्यार unconditional? ठीक है—एक बार नशे की लत लगा लो, चोरी कर लो—देख लो कितना unconditional है।", ["सच्चाई ये है कि हर इंसान की love की conditions होती हैं—चाहे वो बोले या न बोले। तुम चाहो कि तुम्हारा partner loyal रहे—ये condition ही तो है।", "Unconditional love सिर्फ तुम खुद से कर सकते हो। दूसरों के लिए conditions होनी चाहिए। तुम्हें कैसा behavior accept करना है और कैसा नहीं—ये तुम्हारा self-respect है।", "ये स्वीकार कर लो कि प्यार में conditions होती हैं—तुम्हारी रिश्ते और बेहतर बन जाएंगे। क्योंकि तुम एक दूसरे से झूठ नहीं बोलोगे 'मैं तुम्हें हर हाल में प्यार करूंगा।'"], "खुद से promise करो—मैं खुद से unconditional प्यार करूंगा। बाकी सबके लिए मेरी शर्तें होंगी।"],
    ],
  },
];

// I'll add phases 3,4,5 but in a more compact way. Let me create remaining via compact structure.

const phase3Titles: [string, string, string, string, string, string][] = [
  ["gym-se-phy-your-why", "Gym जाने से पहले — अपना Why समझो", "Gym जाने से पहले — अपना Why समझो", "व्यायाम", "WHY", "Gym इसलिए नहीं जाना कि लोग जा रहे हैं। जाना क्योंकि तुम्हें अपनी body से प्यार है।"],
  ["hormones-balance", "Hormones को Balance करो", "तुम्हारी Body का OS — Hormones को Balance करो", "हार्मोन", "HORMONES", "तुम्हारी हर परेशानी की जड़ hormones हो सकती है—depression, weight gain, low energy, low libido।"],
  ["protein-carbs-fats-indian-diet", "Indian Diet में Macros", "Protein, Carbs, Fats — Indian Diet में कैसे लें?", "प्रोटीन", "MACROS", "Dal-chawal से protein पूरी नहीं होती नाना की—समझो सच क्या है।"],
  ["sleep-gym-se-badhiya", "Sleep > Gym", "Sleep > Gym — नींद ही सबसे बड़ा Performance Booster है", "नींद", "SLEEP", "तुम 6 घंटे सोकर gym जा रहे हो—तुम body बना नहीं, तोड़ रहे हो।"],
  ["posture-confidence", "Posture खराब, Confidence खराब", "Posture खराब है तो Confidence भी खराब होगा", "मुद्रा", "POSTURE", "Slouch करके चलोगे तो दिमाग भी slouch महसूस करता है—science कहती है।"],
  ["walking-underrated", "Walking का जादू", "Walking Underrated है — 10,000 Steps Magic", "चलना", "WALK", "सबसे सस्ता, सबसे असरदार exercise—जिसे तुम भूल गए हो।"],
  ["sugar-addiction", "Sugar Addiction", "Sugar Addiction — Drugs से भी ज्यादा खतरनाक", "चीनी", "SUGAR", "Cocaine से 8 गुना ज्यादा addictive है चीनी—और तुम हर दिन खा रहे हो।"],
  ["gut-mental-health", "Gut = Second Brain", "Gut Health Mental Health से Connected है", "आंत", "GUT", "तुम्हारी gut में 100 million neurons हैं—ज्यादा serotonin वहां बनती है दिमाग से भी।"],
  ["testosterone-crisis", "Testosterone Crisis", "Testosterone Crisis — Young Men में क्यों गिर रहा है?", "टेस्टोस्टेरोन", "TEST", "1990 की तुलना में आज average male का testosterone 25% कम है—25 साल के लड़कों का 40+ लोगों जितना।"],
  ["fasting-science", "Fasting का Science", "Fasting का Science — Indian Culture में पहले से था", "उपवास", "FAST", "हमारे ऋषि-मुनि उपवास science जानते थे—आज कल के doctors इसे rediscover कर रहे हैं।"],
  ["mobility-vs-flexibility", "Mobility vs Flexibility", "Mobility vs Flexibility — दोनों में फर्क, दोनों जरूरी", "गतिशीलता", "MOBILE", "Touch your toes करना flexibility है—deep squat में 2 मिनट बैठना mobility है। दोनों अलग।"],
  ["injury-prevention", "Injury Prevention > Cure", "Injury Prevention > Injury Cure — Smart Training", "रोकथाम", "PREVENT", "जोड़ों में दर्द होने के बाद doctor के पास जाना बेवकूफी है—पहले से ही सही form से करो।"],
  ["home-workout-enough", "Home Workout भी Enough है", "Home Workout भी Enough है — Gym जरूरी नहीं", "घर", "HOME", "Gym membership लेकर तुम जाते ही नहीं। Bodyweight से ही body बनती है—समझो।"],
  ["body-dysmorphia", "Body Dysmorphia", "Body Dysmorphia — Social Media ने बीमारी फैलाई", "डिस्मॉर्फिया", "DYSMORPH", "तुम्हारे पास 6 pack abs हैं और तुम अभी भी सोचते हो 'पतला हूं'—ये बीमारी है।"],
  ["mental-training-athletes", "Mental Training for Athletes", "Athletic Performance के लिए Mental Training जरूरी", "मानसिक", "MENTAL", "Physical game तो सब जीतते हैं—मेडल वहां तय होता है जहां mindset कमजोर पड़ता है।"],
  ["recovery-serious-lo", "Recovery को Serious लो", "Recovery को Serious लो — Overtraining खतरनाक", "स्वास्थ्य", "RECOVER", "हर दिन gym जाने वाले—तुम्हारी muscles gym में नहीं, नींद में बनती हैं।"],
  ["supplements-marketing-vs-science", "Supplements का सच", "Supplements का सच — Marketing vs Science", "अनुपूरक", "SUPP", "Whey protein बिना workout के? तुम पैसा बर्बाद कर रहे हो। 90% supplements बेकार हैं।"],
  ["energy-levels-fix", "Energy Levels Fix", "Energy Levels Fix — खाना, नींद, Movement", "ऊर्जा", "ENERGY", "तुम हर दोपहर 3 बजे सुस्त क्यों हो जाते? सिर्फ coffee ही solution नहीं है।"],
  ["ageing-slow-lifestyle", "Ageing को Slow करो", "Ageing को Slow करने का तरीका — Lifestyle ही दवा", "बुढ़ापा", "AGE", "लोग कहते हैं 'उम्र तो बस नंबर है'—जब तक तुम्हारा घुटना जवाब न दे दे। Lifestyle ही सब कुछ है।"],
  ["body-confidence", "Body Confidence", "Body Confidence कैसे बनाएं — Mirror से दोस्ती", "आत्मविश्वास", "BODY", "6 pack abs नहीं हैं तो body confidence नहीं होगा? ये सच नहीं—acceptance ही असली confidence है।"],
];

const phase4Titles: [string, string, string, string, string, string][] = [
  ["rote-learning-ne-socha", "Rote Learning ने सोचना खत्म किया", "Rote Learning ने तुम्हारी Thinking खत्म कर दी", "रट्टा", "ROTE", "तुम exam में 95% लाए—लेकिन अगर कोई तुम्हें practical problem दे तो तुम्हारी हालत पतली हो जाती है।"],
  ["learn-how-to-learn", "Learn How to Learn", "Learn How to Learn — Meta Skill जो School नहीं सिखाता", "सीखना", "LEARN", "दुनिया की सबसे important skill है—किसी भी चीज को जल्दी से कैसे सीखें। क्योंकि technologies हर 2 साल में बदल रही हैं।"],
  ["feynman-technique", "Feynman Technique", "Feynman Technique — किसी भी चीज को समझने का Best तरीका", "फेनमैन", "FEYNMAN", "अगर तुम किसी concept को किसी 10 साल के बच्चे को simple भाषा में समझा सकते हो—तो तुमने उसे समझा है।"],
  ["reading-retention", "Reading Retention कैसे बढ़ाएं", "Reading Retention कैसे बढ़ाएं — पढ़ना काफी नहीं", "याद", "RETAIN", "साल में 50 किताबें पढ़कर भी तुम कुछ याद नहीं रख पा रहे—तुम क्यों पढ़ रहे हो?"],
  ["information-overload", "Information Overload से बचो", "Information Overload से कैसे बचें — Consume कम, Apply ज्यादा", "अतिभार", "INFO", "हर दिन 1000 videos, 50 podcasts, 200 reels—और तुम्हारा दिमाग भरभरा हो रहा है फिर भी खाली हाथ।"],
  ["active-recall-spaced-repetition", "Active Recall + Spaced Repetition", "Active Recall और Spaced Repetition — Memory का Science", "स्मृति", "MEMORY", "Re-read करना और highlighting करना सबसे बेकार study techniques हैं—science ये कहती है।"],
  ["mental-models", "Mental Models क्या हैं?", "Mental Models क्या हैं? — Better Decisions के लिए Frameworks", "मॉडल", "MODELS", "Charlie Munger कहते हैं—80-90 mental models जान लो और ज़िंदगी की 90% समस्याएं हल हो जाएंगी।"],
  ["first-principles-thinking", "First Principles Thinking", "First Principles Thinking — Elon Musk जैसे कैसे सोचें", "सिद्धांत", "FIRST", "Elon Rocket कितना बनाता है? NASA की तुलना में 10x सस्ता। क्यों? वो first principles से सोचता है—analogy से नहीं।"],
  ["learning-plateau", "Learning Plateau तोड़ो", "Learning Plateau को कैसे तोड़ें — Growth फिर से शुरू", "पठार", "PLATEAU", "हर skill में एक समय आता है जब progress रुक सा जाता है—तुम उसे कैसे पार करते हो ये तय करता है कि तुम master बनोगे या नहीं।"],
  ["speed-reading-myth", "Speed Reading Myth", "Speed Reading Myth — समझना > Speed", "रफ़्तार", "SPEED", "तुम 1000 words per minute पढ़ते हो—लेकिन क्या 10 मिनट बाद भी वो याद रहता है? नहीं। Retention zero।"],
  ["identify-learning-style", "अपना Learning Style पहचानो", "अपने Learning Style को Identify करो", "शैली", "STYLE", "कोई visual learner है, कोई auditory, कोई kinesthetic—तुम क्या हो? अपने style के अनुसार सीखोगे तो 3 गुना ज्यादा याद रहेगा।"],
  ["teaching-best-learning", "Teaching is Best Learning", "Teaching ही Best Learning है — Explain करो समझ आएगा", "सिखाओ", "TEACH", "किसी चीज को सीखने का सबसे अच्छा तरीका—उसे किसी और को सिखाओ।"],
  ["curiosity-wapas-lao", "Curiosity वापस लाओ", "Curiosity कैसे वापस लाए — बचपन में थी अब कहां?", "जिज्ञासा", "CURIOSITY", "बचपन में तुम हर चीज पे सवाल पूछते थे। अब तुम Google भी नहीं करते—बस accept कर लेते हो।"],
  ["online-courses-completion", "Online Courses पूरे क्यों नहीं होते?", "Online Courses पूरे क्यों नहीं होते?", "पूरा", "COMPLETE", "तुमने 12 courses खरीदे हैं Udemy पे—एक भी पूरा नहीं किया। ये तुम्हारी आलस्य नहीं—psychology है।"],
  ["skill-stacking", "Skill Stacking", "Skill Stacking — एक Skill काफी नहीं Combination चाहिए", "ढेर", "STACK", "एक field में top 1% बनना बहुत मुश्किल है। लेकिन 3-4 fields में top 20% बनकर आप असाधारण बन सकते हैं।"],
  ["mistakes-while-learning", "Mistakes जरूरी हैं", "Learning करते वक्त Mistakes जरूरी हैं", "गलती", "MISTAKES", "तुम गलती करने से डरते हो—गलती नहीं करोगे तो सीखोगे कैसे?"],
  ["depth-vs-breadth", "Depth vs Breadth", "Depth vs Breadth — Jack of All या Master?", "गहराई", "DEPTH", "Early career: breadth. Mid career: depth. Don't mix order. पहले सब थोड़ा-थोड़ा जान लो फिर एक चीज में master बनो।"],
  ["youtube-university", "YouTube University", "YouTube University — Free Education का सही इस्तेमाल", "यूट्यूब", "YT", "दुनिया के best professors YouTube पर free में पढ़ा रहे हैं—और तुम उन्हें skip करके cat videos देख रहे हो।"],
  ["unlearning", "Unlearning भी जरूरी", "Unlearning भी जरूरी है — पुराने Ideas को हटाओ", "भूलना", "UNLEARN", "सीखना मुश्किल नहीं—भूलना मुश्किल है। तुम्हारे जो ideas 10 साल पुराने हैं, वो आज गलत साबित हो रहे होंगे—तुम छोड़ ही नहीं पा रहे।"],
  ["knowledge-to-action-gap", "Knowledge → Action Gap", "Knowledge को Action में कैसे बदलें — Gap यहीं है", "कार्य", "ACTION", "तुम्हारे पास 1000 ideas हैं लेकिन bank account में पैसे नहीं हैं। Knowledge केवल potential है—action ही उसे currency में convert करता है।"],
];

const phase5Titles: [string, string, string, string, string, string][] = [
  ["purpose-kaise-milega", "Purpose कैसे मिलेगा?", "Purpose कैसे मिलेगा? — ढूंढना नहीं, बनाना पड़ता है", "उद्देश्य", "PURPOSE", "Purpose कहीं तुम्हें पहाड़ के ऊपर बैठकर नहीं मिलेगा—action करते-करते मिलेगा।"],
  ["ikigai-japanese", "Ikigai", "Ikigai — Japanese Concept जो Life का Meaning देता है", "इकिगाई", "IKIGAI", "जापानी concept: तुम जो प्यार करते हो, जिसमें तुम अच्छे हो, जिसकी दुनिया को ज़रूरत है, और जिससे तुम पैसे कमा सकते हो—चारों का intersection।"],
  ["death-defines-life", "Death Defines Your Life", "तुम्हारी Death तुम्हारी Life को Define करेगी", "मृत्यु", "MEMENTO", "Memento mori—याद रखो एक दिन तुम्हें मरना है। ये निराशावादी नहीं—सबसे बड़ा perspective shift है।"],
  ["suffering-viktor-frankl", "Suffering का Meaning", "Suffering का मतलब समझो — Viktor Frankl का Lesson", "दुख", "FRANKL", "Viktor Frankl ने Auschwitz concentration camp में रहकर पाया—जीने का 'क्यों' रखने वाला किसी भी 'कैसे' को सह सकता है।"],
  ["nihilism-se-bahar", "Nihilism से बाहर", "Nihilism से कैसे बाहर आएं — जब कुछ Meaningful न लगे", "शून्यवाद", "NOTHING", "जब लगे कुछ भी मतलब नहीं, ज़िंदगी बेकार है—ये एक फेज है स्थायी सच नहीं।"],
  ["legacy-sabki-hoti", "Legacy सबकी होती है", "Legacy सिर्फ बड़े लोगों की नहीं — तुम भी छोड़ सकते हो", "विरासत", "LEGACY", "Legacy का मतलब करोड़ों का साम्राज्य नहीं। एक बेटा जो ईमानदार है, एक पड़ोसी जो तुमसे inspired है, एक विद्यार्थी जिसे तुमने सिखाया—ये भी legacy है।"],
  ["impact-vs-income", "Impact vs Income", "Impact vs Income — क्या चाहिए तुम्हें?", "प्रभाव", "IMPACT", "तुम्हारी last रकम कौन याद रखेगा? किसी का जीवन बेहतर बनाना ही असली impact है।"],
  ["generational-trauma", "Generational Trauma तोड़ो", "Generational Trauma को कैसे तोड़ें — बच्चों के लिए", "पीढ़ी", "TRAUMA", "पिता जी ने तुम्हें जो दिया वो उन्होंने अपने पिता से सीखा था। वो गलत हो सकता है—और इस chain को तुम्हें तोड़ना है।"],
  ["minimalism-meaning", "Minimalism + Meaning", "Minimalism और Meaning — कम में ज्यादा खुशी", "सरलता", "MINIMAL", "जितना ज्यादा सामान उतना ज्यादा तनाव—ये studies confirm करती हैं। Minimalism सिर्फ aesthetic नहीं freedom है।"],
  ["existential-crisis", "Existential Crisis कैसे पार करें", "Existential Crisis सबको आता है — बाहर कैसे आएं?", "अस्तित्व", "CRISIS", "28-32 की उम्र में आती है ये crisis क्योंकि तुमने जो सपने 22 में देखे थे वो पूरे हो रहे हैं—और तुम अभी भी खाली महसूस कर रहे हो।"],
  ["religion-vs-spirituality", "Religion vs Spirituality", "Religion vs Spirituality — दोनों अलग हैं", "आध्यात्मिक", "SPIRIT", "Religion तुम्हें rulebook देती है। Spirituality तुम्हें खुद से मिलवाती है। दोनों में फर्क समझो—दोनों का जगह अलग है।"],
  ["contribution-greater-consumption", "Contribution > Consumption", "Contribution > Consumption — दुनिया को क्या दे रहे हो?", "योगदान", "GIVE", "तुम्हारी whole life consuming में चली जाएगी Netflix, food, Amazon—अगर तुम consciously contribute नहीं करोगे।"],
  ["midlife-crisis-opportunity", "Midlife Crisis को Opportunity", "Midlife Crisis क्यों आती है — Opportunity कैसे बनाएं?", "मध्य", "MID", "40 की उम्र में लोग sports car खरीदते हैं और युवा लड़की को डेट करना चाहते हैं—ये crisis नहीं wake up call है।"],
  ["define-your-values", "Values Define करो", "अपने Values को Define करो — Decisions आसान हो जाएंगे", "मूल्य", "VALUES", "तुम्हें हर छोटे decision में confusion क्यों होती है? क्योंकि तुम्हें नहीं पता तुम्हारे values क्या हैं।"],
  ["time-perspective", "Time Perspective Balance", "Time Perspective — Past, Present, Future में Balance", "दृष्टिकोण", "TIME", "तुम हमेशा future के बारे में सोचकर वर्तमान को बर्बाद कर रहे हो? या अतीत में फंसे हुए हो? Balance ज़रूरी है।"],
  ["gratitude-science-practice", "Gratitude का Science", "Gratitude Practice क्यों काम करती है — Science + Practice", "आभार", "THANKS", "हर दिन 3 चीजें जिनके लिए तुम आभारी हो लिखने से depression 23% कम होता है—study ये कहती है।"],
  ["forgiveness-freedom", "Forgiveness = Freedom", "Forgiveness (खुद को और दूसरों को) — Freedom का रास्ता", "क्षमा", "FORGIVE", "Forgiveness सामने वाले के लिए नहीं—तुम्हारे लिए है। उस बोझ को उठाकर क्यों चल रहे हो?"],
  ["your-dash", "Birth–Death के बीच की Dash", "Your Dash — Birth-Death के बीच की लकीर कैसी होगी?", "लकीर", "DASH", "तुम्हारे पत्थर पे दो तारीखें होंगी: 19XX — 20XX। बीच में एक छोटी सी dash। सारी ज़िंदगी उसी dash में है।"],
  ["small-acts-big-ripples", "Small Acts, Big Ripples", "Small Acts, Big Ripples — तुम्हारा असर दिखता नहीं, होता है", "लहर", "RIPPLES", "एक बार तुमने किसी को सुना था रास्ते में रोते हुए—तुम भूल गए लेकिन वो आज तक याद करता है।"],
  ["last-lecture", "The Last Lecture", "The Last Lecture — अगर आज आखिरी दिन हो तो क्या कहोगे?", "अंतिम", "LAST", "अगर तुम्हें पता हो कि कल तुम मरने वाले हो—तुम आज क्या कहोगे? किससे कहोगे? क्यों अभी नहीं कह देते?"],
];

function generateBlogsFromTitles(titles: [string, string, string, string, string, string][], phaseCategory: string, phaseSlug: string, phaseImage: string, startNum: number, gradientSet: string[]): Blog[] {
  return titles.map((t, idx) => {
    const [slug, englishTitle, hindiTitle, hindiKw, englishKw, excerpt] = t;
    const num = startNum + idx;
    const related = titles.filter((_t, i) => i !== idx).slice(0, 3).map((x) => x[0]);
    const hooks = [
      `${hindiTitle}—यह विषय इतना महत्वपूर्ण क्यों है? क्योंकि तुम्हारी ज़िंदगी का एक बड़ा हिस्सा इसी के इर्द-गिर्द घूमता है—और तुमने कभी इसपर गहराई से सोचा ही नहीं।`,
      `लोग तुमसे ये बात क्यों नहीं बताते? क्योंकि ये कड़वी सच्चाई है, और कड़वी सच्चाई कोई बोना नहीं चाहता। SHIVAMGRAPH पर तुम्हें हमेशा सच मिलेगा—चाहे जितना भी मिर्ची लगे।`,
    ];
    const points = [
      `शुरुआत में ये समझ लो: ${englishTitle} सिर्फ एक trending topic नहीं—तुम्हारी रोज़मर्रा की ज़िंदगी का वो छोटा सा पहिया है जिसे अगर ठीक कर लो तो पूरी गाड़ी smooth चलने लगती है।`,
      `तुम्हारी सबसे बड़ी गलती ये है कि तुम इसे ignore कर रहे हो क्योंकि "अभी तो सब ठीक है।" भाई—जब तक सब ठीक होता है तब तक सुधार का समय है। खराब हो जाने के बाद तुम doctor के पास भागोगे और पछताओगे।`,
      `Indian context में ये समस्या और भी गहरी है क्योंकि हमारे यहाँ इन चीजों पे बात ही नहीं की जाती। परिवार में, दोस्तों में, school में—सब जगह ये topic चुप्पी से टाल दिया जाता है। नतीजा? गलत informatio से तुम अपनी ज़िंदगी सालों बर्बाद करते हो।`,
    ];
    return {
      slug,
      number: num,
      title: englishTitle,
      hindiTitle,
      hindiKeyword: hindiKw,
      englishKeyword: englishKw,
      excerpt,
      content: blogContent(
        englishTitle,
        hooks,
        points,
        "The sage who knows the Self as the One unchanging reality, sees all diversity as mere appearances, and attains to immortality here on earth.",
        "जो ज्ञानी आत्मा को एक अपरिवर्तनीय सत्य के रूप में जान लेता है, वह समस्त विविधता को केवल आभास मात्र देखता है, और यहीं इस पृथ्वी पर अमरत्व को प्राप्त करता है।",
        "अब समय आ गया है तुम्हारे पास जो knowledge है उसे action में बदलो। Reading सिर्फ पहला step है—second step है apply करना। आज रात को बस एक छोटा सा काम करो। एक छोटा सा decision। एक छोटा सा change। वही change 1 साल बाद तुम्हें पूरी तरह से अलग इंसान बना देगा। अगर तुम्हें और गहराई से समझना है तो हमारे <a href=\"/blog/learn-how-to-learn\" class=\"gold-underline\">सीखने के तरीके</a> वाला article भी पढ़ लो।",
        [{ text: "Learn How to Learn — Meta Skill", slug: "learn-how-to-learn" }]
      ),
      category: phaseCategory,
      categorySlug: phaseSlug,
      readTime: 5 + Math.floor(Math.random() * 4),
      date: makeDate(num * 3 + 10),
      coverGradient: gradientSet[num % gradientSet.length],
      coverImage: phaseImage,
      relatedVideoId: `placeholder-${num}`,
      relatedArticleSlugs: related,
      downloadResources: [
        { title: `${englishTitle.split("—")[0].trim()} Quick Guide`, type: "PDF", url: "#" },
        { title: "Action Workbook", type: "Workbook", url: "#" },
      ],
      seoDescription: `${hindiTitle} — ${excerpt} SHIVAMGRAPH द्वारा हिंदी में गहराई से विश्लेषण।`,
    };
  });
}

const phase3 = generateBlogsFromTitles(phase3Titles, "Body as System", "body", "/images/category-body.jpg", 41, gradients);
const phase4 = generateBlogsFromTitles(phase4Titles, "Learning System", "learning", "/images/category-learning.jpg", 61, gradients);
const phase5 = generateBlogsFromTitles(phase5Titles, "Legacy & Meaning", "legacy", "/images/category-legacy.jpg", 81, gradients);

// Also add the initial 5 phase 1 blog plus phase 2
const phase2 = generateBlogsFromTitles(phaseData[1].titles as [string, string, string, string, string, string][], phaseData[1].category, phaseData[1].categorySlug, phaseData[1].image, 21, gradients);
const phase1Extra = generateBlogsFromTitles(phaseData[0].titles as [string, string, string, string, string, string][], phaseData[0].category, phaseData[0].categorySlug, phaseData[0].image, 6, gradients);

export const blogs: Blog[] = [
  ...economicsBlogs,
  ...phase1Extra,
  ...phase2,
  ...phase3,
  ...phase4,
  ...phase5,
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "Brutal Economics", slug: "economics" },
  { name: "Relationship Reality", slug: "relationships" },
  { name: "Body as System", slug: "body" },
  { name: "Learning System", slug: "learning" },
  { name: "Legacy & Meaning", slug: "legacy" },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getRelatedBlogs(slugs: string[]): Blog[] {
  return slugs.map((s) => getBlogBySlug(s)).filter((b): b is Blog => !!b);
}

export function getBlogsByCategory(categorySlug: string): Blog[] {
  if (categorySlug === "all") return blogs;
  return blogs.filter((b) => b.categorySlug === categorySlug);
}
