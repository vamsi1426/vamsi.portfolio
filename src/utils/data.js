export const PERSONAL_DETAILS = {
  name: "Dasari Vamsi",
  title: "Software Engineer & AI Enthusiast",
  subtitle: "Full Stack Developer",
  tagline: "Building intelligent applications and modern digital experiences through code.",
  email: "dasarivamsi514@gmail.com",
  phone: "+91 9704331950",
  github: "https://github.com/vamsi1426",
  linkedin: "https://linkedin.com/in/vamsi-dasari",
  resumeUrl: "#", // placeholder, will trigger dynamic generation/download of resume details
};

export const ABOUT_ME = {
  intro: "I am a passionate Computer Science and Engineering graduate specialized in full-stack engineering and intelligent AI technologies.",
  story: [
    "My journey started with a deep curiosity about how systems communicate and scale. Throughout my academic years, I found myself drawn to the intersections of computer vision, machine learning, and interactive web architecture.",
    "I believe code is like an orchard; it requires sturdy roots, structured growth, and continuous pruning to yield the best fruit. As a software developer, I thrive on translating abstract ideas into highly responsive, premium-grade digital systems.",
    "When I'm not coding, I'm researching the latest in Large Language Models (LLMs), experimenting with generative AI, or exploring nature to draw creative engineering design inspirations."
  ],
  interests: [
    { title: "AI Technologies", desc: "Generative AI models, vector search, custom LLM integrations.", icon: "brain" },
    { title: "Full Stack Architecture", desc: "Building scalable backend microservices combined with fluid, lightweight frontends.", icon: "layers" },
    { title: "Intelligent Systems", desc: "Developing algorithms that automate complex workflows and match metadata efficiently.", icon: "cpu" }
  ]
};

export const SKILL_CATEGORIES = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 92 }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "Tailwind CSS", level: 94 }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    skills: [
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 82 }
    ]
  },
  {
    id: "ai",
    title: "AI / ML & Tools",
    skills: [
      { name: "Gen AI", level: 85 },
      { name: "LLM Integration", level: 88 },
      { name: "AI Tools", level: 90 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 }
    ]
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "Malicious URL Detection SVM with LLM",
    shortDesc: "A hybrid machine learning and large language model security suite that analyses URL patterns to protect users in real time.",
    longDesc: "Developed a robust cyber-defense framework that flags suspicious endpoints. The system uses a Support Vector Machine (SVM) model for high-speed initial feature analysis (analyzing domain age, redirect count, path patterns) combined with an LLM verification agent for deep semantics, resolving complex obfuscation patterns with high precision.",
    tech: ["Python", "SVM", "LLM APIs", "React.js", "Flask", "Machine Learning"],
    github: "https://github.com/vamsi1426/malicious.url.detector",
    liveDemo: "#"
  },
  {
    id: 2,
    title: "LostMate – Intelligent Item Matching & Recovery",
    shortDesc: "An AI-powered community portal designed to reconnect lost items with their owners using advanced metadata and semantic similarity.",
    longDesc: "Built a fully-featured, community-driven platform. LostMate leverages TF-IDF similarity algorithms and text embeddings to automatically suggest high-confidence matches between user-reported lost and found announcements. Features an interactive map, email notifications, and a sleek modern dashboard.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Semantic Embedding", "REST APIs"],
    github: "https://github.com/vamsi1426/findit-ai-",
    liveDemo: "#"
  },
  {
    id: 3,
    title: "LegalDoc AI — Legal Document Risk Analyzer",
    shortDesc: "A Next.js SaaS platform for analyzing, summarizing, and risk-checking legal agreements using advanced NLP models.",
    longDesc: "Developed a secure legal tech contract review platform. Built a Next.js 14 frontend with Recharts analytics connected to a Python FastAPI NLP engine. Automatically parses PDF/DOCX agreements, extracts key clauses (such as Indemnity, Termination, Liability) using spaCy and Hugging Face transformers, calculates a concrete Risk Score (0-100), and features side-by-side diff-check document comparison logs.",
    tech: ["Next.js", "FastAPI", "Python", "Hugging Face", "Firebase", "spaCy", "Recharts"],
    github: "https://github.com/vamsi1426/legaldoc-analyzer",
    liveDemo: "#"
  },
  {
    id: 4,
    title: "EduTrack CMS — Course & Campus Portal",
    shortDesc: "A full-stack, AI-augmented educational portal streamlining administrative, staff, and student workflows with RAG AI tutoring.",
    longDesc: "Engineered a decoupled campus management platform using React 19 + Vite connected to a Node.js Express API and Firebase database storage. Segregated into three role-based dashboards (Admin, Staff, Student). Integrates automated cloud study note text extraction (pdf-parse) and a specialized RAG AI chatbot linking Gemini/Groq Llama 3 APIs to deliver context-aware video lectures and tutoring assistance.",
    tech: ["React.js", "Node.js", "Express.js", "Firebase", "RAG Engine", "Gemini API", "Groq"],
    github: "https://github.com/vamsi1426/Edutrack-CMS",
    liveDemo: "#"
  },
  {
    id: 5,
    title: "LinguaCall AI — Speech-to-Speech Calls",
    shortDesc: "A real-time WebRTC voice calling mobile application featuring seamless, bi-directional, sub-second translation audio streaming.",
    longDesc: "Designed a low-latency speech translation system. Constructed a Flutter mobile client and a high-performance Python FastAPI websocket backend to handle duplex voice translation pipelines. Streams 16kHz PCM16 audio packets directly between peer WebRTC data channels to bypass Android capture conflicts, utilizing Google Cloud STT/TTS models to transcribe and translate in real time.",
    tech: ["Flutter", "WebRTC", "FastAPI", "Python", "Node.js", "Google Cloud API", "Firebase"],
    github: "https://github.com/vamsi1426/linguacall-ai",
    liveDemo: "#"
  },
  {
    id: 6,
    title: "VerifyCert — Blockchain Academic Verification",
    shortDesc: "A decentralized credentials issuance and verification ecosystem anchoring SHA-256 cert hashes on Polygon L2 and IPFS.",
    longDesc: "Developed a secure academic credentials verification platform. Engineered a React 19 + Vite dashboard connected to a Node.js Express API and MongoDB. Generates unique Certificate IDs, computes cryptographic SHA-256 certificate document hashes, anchors them on-chain via EVM smart contracts on the Polygon Amoy Testnet, and stores student records and PDFs in IPFS via Pinata. Features secure issuer revocation, role-based dashboards, and wallet-less, zero-friction verification via search, raw PDF upload, or QR code scans.",
    tech: ["React.js", "Node.js", "Express.js", "Polygon L2", "IPFS", "Ethers.js", "MongoDB"],
    github: "https://github.com/vamsi1426/verify-certification-",
    liveDemo: "#"
  },
  {
    id: 7,
    title: "Gamedu — Immersive Neo-Education Platform",
    shortDesc: "A highly gamified serverless learning cockpit featuring Google Gemini AI dynamically generating quizzes from lesson PDFs.",
    longDesc: "Designed a full gamified Neo-Education platform with a stunning dark-mode aesthetic. Built a React 19 client backed by Firebase (Auth, Firestore, Cloud Storage) and Cloudinary PDF upload services. Features six built-in interactive game engines (from shooters to progressions) combined with XP tracking and leaderboard analytics. Integrates Google Gemini AI Flash to automatically extract text from uploaded PDFs and generate structured JSON-schema MCQs for instant player challenges.",
    tech: ["React.js", "Vite", "Firebase", "Gemini AI", "Tailwind CSS", "Framer Motion", "Cloudinary"],
    github: "https://github.com/vamsi1426/game--edu",
    liveDemo: "#"
  },
  {
    id: 8,
    title: "SmartPark AI — Autonomous Live Parking Grid",
    shortDesc: "A smart city parking slot reservation platform with interactive 3-floor grids, Spring Boot backend, and a Llama 3 AI chatbot.",
    longDesc: "Created an autonomous smart city parking slot orchestration ecosystem. Built a glassmorphic React v18 + Vite user/admin dashboard proxying request traffic via a resilient Java Spring Boot API to Firebase Realtime Database. Displays color-coded live slot floor grids (available, reserved, occupied) across three floors using dynamic state triggers. Features reservation extensions, booking ledgers, and mock payments, with an integrated ParkGuard AI Concierge powered by Llama 3 70B via Groq API for smart navigation routing.",
    tech: ["React.js", "Spring Boot", "Java", "Firebase Realtime DB", "Llama 3", "Groq API", "Tailwind CSS"],
    github: "https://github.com/vamsi1426/smart-parking-",
    liveDemo: "#"
  }
];

export const EDUCATION = [
  {
    school: "Narayana Engineering College",
    degree: "Computer Science & Engineering",
    score: "85%",
    duration: "2021 - 2025",
    details: "Focused on advanced algorithms, software engineering patterns, machine learning, and database systems. Participated in technical symposiums and academic research on neural nets."
  },
  {
    school: "Sri Chaitanya Junior College",
    degree: "MPC Intermediate",
    score: "83%",
    duration: "2019 - 2021",
    details: "Rigorous focus on Mathematics, Physics, and Chemistry. Developed structured analytical thinking and logic formulation."
  },
  {
    school: "Oxford English Medium High School",
    degree: "Higher Secondary School",
    score: "87%",
    duration: "2018 - 2019",
    details: "Strong foundational education in sciences and literature, laying the groundwork for scientific inquiry and creative problem solving."
  }
];

export const EXPERIENCE = [
  {
    role: "Freelance Web & Mobile App Developer",
    company: "Self Employed",
    duration: "Ongoing",
    bullets: [
      "Independently formulated project scoping, UX design mockups, and client requirements into fully realized custom applications.",
      "Developed high-fidelity, responsive frontend structures using React.js and Tailwind CSS integrated with robust Node.js backend environments.",
      "Managed REST API design, integrated third-party database nodes, conducted unit testing, and implemented CI/CD deployment channels."
    ]
  }
];
