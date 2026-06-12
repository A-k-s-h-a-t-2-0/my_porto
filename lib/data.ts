import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'akshat20oct@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Akshat, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/A-k-s-h-a-t-2-0' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/akshatpandey20' },
];

export const MY_STACK = {
    languages: [
        {
            name: 'C',
            icon: '/logo/c.svg',
        },
        {
            name: 'C++',
            icon: '/logo/cpp.svg',
        },
        {
            name: 'Python',
            icon: '/logo/python.svg',
        },
        {
            name: 'Java',
            icon: '/logo/java.svg',
        },
        {
            name: 'SQL',
            icon: '/logo/sql.svg',
        },
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'HTML',
            icon: '/logo/html.svg',
        },
        {
            name: 'CSS',
            icon: '/logo/css.svg',
        },
    ],
    frameworks: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Linux',
            icon: '/logo/linux.svg',
        },
        {
            name: 'MATLAB',
            icon: '/logo/matlab.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'Intelligent DSA & Coding Interview Assistant',
        slug: 'interview-assistant',
        sourceCode: 'https://github.com/A-k-s-h-a-t-2-0/Intelligent-Interview-Assistant-for-DSA-Coding',
        liveUrl: 'https://a-k-s-h-a-t-2-0.github.io/Intelligent-Interview-Assistant-for-DSA-Coding/',
        year: 2026,
        description: `
      An advanced, high-fidelity developer dashboard that analyzes programming behavior, evaluates code structures, predicts algorithmic weaknesses, and guides candidates through interactive interview preparation. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>💻 LeetCode-style Workbench: Full-screen IDE editor equipped with custom line numbers and syntax highlighting.</li>
        <li>🔬 AI Diagnostics Compiler: Runs simulated Lexical and AST (Abstract Syntax Tree) traces to check loop nesting, memory caching, and recursion.</li>
        <li>🛡️ Strict Code Validation Guard: Multi-layered syntax validator preventing invalid submissions and keyboard-mashing.</li>
        <li>🗺️ Adaptive Roadmap Trees: Interactive learning roadmap that highlights Mastered, Active, and Locked topics based on scoring.</li>
        <li>📈 Time-Series Progress Analytics: Real-time progress tracking showing readiness trends, speed, and efficiency.</li>
      </ul>
      `,
        role: `
      Developer & Designer <br/>
      Designed and developed the entire application frontend and diagnostics module:
      <ul>
        <li>✅ Built the fully responsive React/Vite-based code editor workbench supporting multiple languages.</li>
        <li>✅ Implemented the AST validation guard to evaluate logic correctness.</li>
        <li>✅ Developed the glassmorphism layout and layered network grid background animations.</li>
        <li>✅ Configured modular API schemas to support easy LLM backend integration.</li>
      </ul>
      `,
        techStack: [
            'React',
            'Vite',
            'Tailwind CSS',
            'AST Parser',
            'Lexical Analysis',
            'Lucide Icons',
        ],
        thumbnail: '/projects/thumbnail/interview-assistant.png',
        longThumbnail: '/projects/long/interview-assistant.png',
        images: [
            '/projects/images/interview-assistant-1.png',
            '/projects/images/interview-assistant-2.png',
            '/projects/images/interview-assistant-3.png',
            '/projects/images/interview-assistant-4.png',
            '/projects/images/interview-assistant-5.png',
        ],
    },
    {
        title: 'Multi-Modal Fake News & Deepfake Detection System',
        slug: 'fake-news-detector',
        sourceCode: 'https://github.com/A-k-s-h-a-t-2-0/Multi-Modal-Fake-News-Deepfake-Detection-System',
        liveUrl: 'https://a-k-s-h-a-t-2-0.github.io/Multi-Modal-Fake-News-Deepfake-Detection-System/',
        year: 2026,
        description: `
      An end-to-end research-style machine learning system for detecting misinformation and deepfakes from text, publisher metadata, claim assertions, and news images. Designed for production readiness with optimized baseline inference. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>✍️ Text Credibility Evaluator: Analyzes linguistic signals and article body structure.</li>
        <li>🖼️ Image Forensic Analyzer: Evaluates manipulation markers and compression noise in uploaded news graphics.</li>
        <li>🌐 Source Reliability Engine: Rates publisher reliability metrics.</li>
        <li>📊 Feature Fusion pipeline: Combines all modality outputs into a unified Fake/Real confidence percentage using ensemble scoring.</li>
      </ul>
      `,
        role: `
      Machine Learning Developer <br/>
      Architected the fusion logic and visualization frontend:
      <ul>
        <li>✅ Coded the modular pipeline featuring weighted late fusion across independent NLP and CV models.</li>
        <li>✅ Created a responsive Streamlit dashboard presenting predictions alongside human-readable explanations.</li>
        <li>✅ Designed the project evaluation structure, including training roadmaps and model cards.</li>
      </ul>
      `,
        techStack: [
            'Python',
            'Streamlit',
            'NLP',
            'Computer Vision',
            'Ensemble Learning',
            'Feature Fusion',
        ],
        thumbnail: '/projects/thumbnail/fake-news-detector.png',
        longThumbnail: '/projects/long/fake-news-detector.png',
        images: [
            '/projects/images/fake-news-detector-1.png',
            '/projects/images/fake-news-detector-2.png',
            '/projects/images/fake-news-detector-3.png',
        ],
    },
    {
        title: 'Semantic Spatial Engine',
        slug: 'semantic-spatial-engine',
        sourceCode: 'https://github.com/A-k-s-h-a-t-2-0/semantic-spatial-engine',
        liveUrl: 'https://semantic-spatial-engine-dqv8pwd27pfjlddmodcwac.streamlit.app/',
        year: 2026,
        description: `
      A BERT-based Natural Language Processing system (SBERT) to map free-form search queries to spatial intent coordinates, using zero-shot classification and dimensionality reduction. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🤖 SBERT Vectorization: Encodes phrases to capture spatial semantic meanings.</li>
        <li>📈 Cosine Similarity Metrics: Compares query embeddings to intent anchors.</li>
        <li>🌀 Dimensionality Reduction: Uses Principal Component Analysis (PCA) to map embeddings.</li>
        <li>📊 3D Interactive Plots: Visualizes spatial embeddings in a 3D coordinate space via Plotly.</li>
      </ul>
      `,
        role: `
      NLP Specialist <br/>
      Built the embedding calculations and the vector visualization system:
      <ul>
        <li>✅ Designed zero-shot intent classifier achieving >0.82 Spearman correlation on STS benchmarks.</li>
        <li>✅ Engineered the scikit-learn PCA dimensionality reduction pipeline for 3D visualization mapping.</li>
        <li>✅ Developed the interactive Streamlit user interface.</li>
      </ul>
      `,
        techStack: [
            'Python',
            'SBERT',
            'scikit-learn',
            'Plotly 3D',
            'Streamlit',
            'NLP',
        ],
        thumbnail: '/projects/thumbnail/spatial-engine.png',
        longThumbnail: '/projects/long/spatial-engine.png',
        images: [
            '/projects/images/spatial-engine-1.png',
            '/projects/images/spatial-engine-2.png',
        ],
    },
    {
        title: 'Blockchain-Based E-Voting System',
        slug: 'blockchain-evoting',
        sourceCode: 'https://github.com/A-k-s-h-a-t-2-0/secure-evoting-system',
        liveUrl: 'https://a-k-s-h-a-t-2-0.github.io/secure-evoting-system/',
        year: 2025,
        description: `
      A secure, tamper-proof, and transparent digital voting application that leverages blockchain to provide immutable record-keeping and voter anonymity. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>⛓️ Blockchain Ledger: Verifies voting integrity and ensures data cannot be modified retroactively.</li>
        <li>📜 Smart Contracts: Automated election rule validation and vote counting logic.</li>
        <li>☁️ Cloud Storage Integration: Scalable, real-time voter verification database.</li>
        <li>🔒 Voter Cryptography: Ensures end-to-end anonymity and ballot security.</li>
      </ul>
      `,
        role: `
      Blockchain Developer <br/>
      Engineered the transaction layer and the interactive dashboard:
      <ul>
        <li>✅ Implemented Solidity smart contracts checking double-voting and authorization constraints.</li>
        <li>✅ Developed the frontend interfaces using HTML, CSS, and vanilla JavaScript.</li>
        <li>✅ Integrated cryptographic hashing checks for voter identity verification.</li>
      </ul>
      `,
        techStack: [
            'Blockchain',
            'Solidity',
            'Smart Contracts',
            'HTML',
            'CSS',
            'JavaScript',
            'Cloud Integration',
        ],
        thumbnail: '/projects/thumbnail/blockchain-voting.png',
        longThumbnail: '/projects/long/blockchain-voting.png',
        images: [
            '/projects/images/blockchain-voting-1.png',
            '/projects/images/blockchain-voting-2.png',
            '/projects/images/blockchain-voting-3.png',
            '/projects/images/blockchain-voting-4.png',
            '/projects/images/blockchain-voting-5.png',
            '/projects/images/blockchain-voting-6.png',
        ],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Organizing Committee Member',
        company: 'ICKHI 2025 (Manipal University Jaipur & KMUTNB)',
        duration: 'Jan 2025 - Present',
    },
    {
        title: 'Open Source Contributor',
        company: 'GirlScript Summer of Code (GSSoC)',
        duration: 'Aug 2025 - Nov 2025',
    },
    {
        title: 'Student Developer',
        company: 'Manipal University Jaipur',
        duration: 'Aug 2024 - Present',
    },
];

export const MY_CERTIFICATES = [
    {
        title: 'Data Structures and Algorithms using Java',
        issuer: 'NPTEL {ELITE category}',
        file: '/certificates/Data Structures and Algorithms using Java – NPTEL {ELITE category}.pdf',
    },
    {
        title: 'Design and Analysis of Algorithms',
        issuer: 'NPTEL {ELITE category}',
        file: '/certificates/Design and Analysis of Algorithms – NPTEL {ELITE category}.pdf',
    },
    {
        title: 'Red Hat System Administration I (RH124)',
        issuer: 'Red Hat',
        file: '/certificates/Red Hat System Administration I (RH124) – Red Hat .pdf',
    },
    {
        title: 'Red Hat System Administration II (RH134)',
        issuer: 'Red Hat',
        file: '/certificates/Red Hat System Administration II (RH134) – Red Hat .pdf',
    },
    {
        title: 'Introduction to Software, Programming, and Databases',
        issuer: 'IBM (Coursera)',
        file: '/certificates/Introduction to Software, Programming, and Databases – IBM (Coursera).pdf',
    },
    {
        title: 'Exploratory Data Analysis for Machine Learning',
        issuer: 'IBM (Coursera)',
        file: '/certificates/Exploratory Data Analysis for Machine Learning – IBM (Coursera).pdf',
    },
    {
        title: 'Professional Development: Improve Yourself, Always',
        issuer: 'Macquarie University (Coursera)',
        file: '/certificates/Professional Development Improve Yourself Always  Macquarie University (Coursera).pdf',
    },
];
