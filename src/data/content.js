// ─────────────────────────────────────────────────────────────
//  Single source of truth for all portfolio content.
//  Edit here to update the site — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Sachin S',
  firstName: 'Sachin',
  lastName: 'S',
  roles: ['AI Engineer', 'Full-Stack Developer', 'ML & GenAI Builder'],
  tagline: 'AI Engineer & Full-Stack Developer',
  location: 'Bengaluru, India',
  based: 'Based in Bengaluru, India',
  availability: 'Open to opportunities',
  year: '2004',
  photo: './sachin.png',
  photoWebp: './sachin.webp',
  photoWidth: 760,
  photoHeight: 1007,
  // Big editorial headline words
  headline: ['AI', 'ENGINEER'],
  summary:
    'AI Engineer and Full-Stack Developer with hands-on experience building AI-powered applications, semantic search systems, and scalable web platforms. I work across Python, React, Flask, machine learning, NLP and vector databases — with a strong focus on Generative AI and intelligent automation.',
  statement:
    "I'm an AI Engineer & Full-Stack Developer who builds intelligent, production-grade applications — from model to interface.",
  services: ['AI & Generative AI', 'Full-Stack (Web)', 'ML & Data Pipelines'],
  email: 'sachin2004jlr@gmail.com',
  resumeUrl: './SACHIN_RESUME.pdf',
}

export const socials = [
  { label: 'GitHub', handle: '@sachin-2004jlr', url: 'https://github.com/sachin-2004jlr', icon: 'github' },
  { label: 'LinkedIn', handle: 'sachin-s', url: 'https://www.linkedin.com/in/sachin-s-4a74b72a9/', icon: 'linkedin' },
  { label: 'Email', handle: 'sachin2004jlr@gmail.com', url: 'mailto:sachin2004jlr@gmail.com', icon: 'mail' },
]

export const stats = [
  { value: '9.07', suffix: '/10', label: 'CGPA · B.E. AI & DS' },
  { value: '6', suffix: '+', label: 'Shipped Projects' },
  { value: '2', suffix: '', label: 'Engineering Internships' },
  { value: '3', suffix: '+', label: 'Certifications' },
]

export const skillGroups = [
  {
    title: 'Generative AI & Agents',
    icon: 'spark',
    items: [
      'Generative AI Application Development',
      'Prompt Engineering & Prompt Evaluation',
      'AI Agent Development & Workflow Automation',
      'Retrieval-Augmented Generation (RAG)',
      'Model Context Protocol (MCP)',
      'Tool Calling & LLM Integration',
    ],
  },
  {
    title: 'Languages & Frameworks',
    icon: 'code',
    items: ['Python', 'JavaScript', 'React', 'Flask', 'Axios', 'HTML / CSS', 'Flask-SocketIO'],
  },
  {
    title: 'AI & Data',
    icon: 'brain',
    items: [
      'Neural Networks', 'NLP', 'LangChain', 'LangGraph', 'Semantic Search',
      'Vector Embeddings', 'Fine-Tuning',
      'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy',
    ],
  },
  {
    title: 'Tools & Infrastructure',
    icon: 'stack',
    items: [
      'MongoDB', 'Pinecone', 'GridFS', 'PyMongo', 'REST APIs', 'WebSockets / Socket.IO',
      'JWT Auth', 'Docker', 'Kubernetes', 'AWS', 'Snowflake', 'Git & GitHub',
    ],
  },
  {
    title: 'Analytics',
    icon: 'chart',
    items: ['Power BI', 'Tableau', 'SQL', 'Excel', 'Data Visualization'],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Budhhi Technologies',
    location: 'Ontario, Canada (Remote)',
    period: 'Jan 2026 — Present',
    current: true,
    stack: ['Python', 'Flask', 'React', 'MongoDB', 'OpenAI API', 'Socket.IO'],
    highlights: [
      'Built a full-stack web platform for intelligent user discovery combining React, Flask and MongoDB — with secure JWT authentication, role-based access control, rate limiting and real-time messaging via Flask-SocketIO.',
      'Integrated the OpenAI API and Pinecone vector embeddings for AI-powered profile matching and semantic search; implemented resume parsing, ATS scoring and NLP-based data extraction to boost candidate relevance and platform intelligence.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Acme Grade',
    location: 'Remote',
    period: 'Apr 2025 — Jun 2025',
    current: false,
    stack: ['Python', 'TensorFlow', 'OpenCV'],
    highlights: [
      'Worked on computer vision, NLP and forecasting projects, applying ML techniques on real-world datasets.',
      'Delivered actionable AI solutions with measurable outcomes through hands-on exposure to end-to-end ML pipelines.',
    ],
  },
]

export const projects = [
  {
    name: 'AI-Powered Talent Matching Platform',
    period: 'Ongoing',
    company: 'Budhhi Technologies',
    private: true,
    featured: true,
    tags: ['React', 'Flask', 'MongoDB', 'OpenAI', 'Pinecone', 'Socket.IO'],
    blurb:
      'A full-stack talent matching platform with semantic profile search and AI-driven candidate matching.',
    highlights: [
      'JWT-based auth, role-based access control and real-time messaging via Socket.IO.',
      'OpenAI + Pinecone vector database for semantic search, significantly improving recommendation relevance.',
      'Resume parsing and ATS scoring pipelines with NLP extraction, plus a real-time notification system.',
    ],
    url: null,
  },
  {
    name: 'RAG Streamlit App',
    period: '2025',
    featured: true,
    tags: ['Python', 'RAG', 'Vector DB', 'LLM'],
    blurb:
      'Retrieval-Augmented Generation app with document ingestion, vector retrieval and context-grounded answers.',
    highlights: [
      'Interactive UI for ingesting documents and querying them with grounded, cited answers.',
      'Vector retrieval pipeline feeding an LLM for accurate, hallucination-resistant responses.',
    ],
    url: 'https://github.com/sachin-2004jlr',
  },
  {
    name: 'Stock Price Prediction',
    period: 'Apr — May 2025',
    featured: false,
    tags: ['Python', 'TensorFlow', 'Keras', 'LSTM'],
    blurb:
      'LSTM deep-learning model forecasting stock prices from historical market data.',
    highlights: [
      'MinMax scaling and sliding-window sequence generation for time-series preprocessing.',
      'Tuned hyperparameters to reduce overfitting; evaluated with MAE for precise predictions on unseen data.',
      'Visualized loss curves and prediction-vs-actual trends with Matplotlib.',
    ],
    url: 'https://github.com/sachin-2004jlr',
  },
  {
    name: 'Real-Time Face Detection',
    period: 'Nov — Dec 2024',
    featured: false,
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    blurb:
      'Real-time face detection using OpenCV and Haar Cascade classifiers with low-latency streaming.',
    highlights: [
      'Grayscale conversion and bounding-box overlay for faster, more accurate detection.',
      'Optimized the video capture and frame pipeline to handle live streams with minimal latency.',
      'Tuned classifier parameters to reduce false positives while keeping high recall.',
    ],
    url: 'https://github.com/sachin-2004jlr',
  },
  {
    name: 'QA Bot',
    period: '2025',
    featured: false,
    tags: ['Python', 'NLP', 'LLM'],
    blurb:
      'Question-answering system delivering context-aware natural-language responses.',
    highlights: [
      'Context-aware retrieval and generation for accurate answers to user queries.',
    ],
    url: 'https://github.com/sachin-2004jlr',
  },
  {
    name: 'Titanic Survival Prediction',
    period: '2024',
    featured: false,
    tags: ['Python', 'Scikit-learn', 'Jupyter'],
    blurb:
      'ML classification with feature engineering on the classic Titanic dataset.',
    highlights: [
      'End-to-end pipeline: cleaning, feature engineering, model training and evaluation.',
    ],
    url: 'https://github.com/sachin-2004jlr',
  },
]

export const education = [
  {
    degree: 'B.E. — Artificial Intelligence & Data Science',
    school: 'Global Academy of Technology, Bengaluru',
    detail: 'CGPA: 9.07 / 10',
  },
  {
    degree: 'Pre-University Education',
    school: 'Sri Siddaganga PU College, Davanagere',
    detail: 'Percentage: 92.5%',
  },
]

export const certifications = [
  {
    title: 'Building with the Claude API',
    issuer: 'Anthropic Education',
    year: 'Jul 2026',
    detail:
      'Building generative-AI applications on the Claude API — tool calling, LLM integration, RAG and the Model Context Protocol (MCP).',
    url: 'https://verify.skilljar.com/c/ct7tuupwp85p',
  },
  {
    title: 'Introduction to Claude Cowork',
    issuer: 'Anthropic Education',
    year: 'Jul 2026',
    detail:
      'AI agent development and workflow automation — prompt engineering, prompt evaluation and agentic collaboration patterns.',
    url: 'https://verify.skilljar.com/c/ko6wq9ax4oek',
  },
  {
    title: 'Agentic AI Day',
    issuer: 'Google',
    year: 'Sep 2025',
    detail: 'Google-hosted Agentic AI Day (Hack2Skill) — agentic AI systems and solution submission.',
    url: 'https://certificate.hack2skill.com/user/aidayideasubmission/2025H2S06AID-I00951',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia (Forage)',
    year: 'Sep 2025',
    detail: 'Job simulation covering data analysis, forensic technology and data-driven business insight.',
    url: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68bd5e878b87fbdc1c717653_1757340366746_completion_certificate.pdf',
  },
  {
    title: 'Gemini for Data Scientists and Analysts',
    issuer: 'Google Cloud',
    year: 'May 2025',
    detail: 'Using Gemini to accelerate data science and analytics workflows on Google Cloud.',
    url: 'https://www.cloudskillsboost.google/public_profiles/7fae41ec-f963-43b6-84da-93139812e07c/badges/15920841',
  },
  {
    title: 'Explore Generative AI with the Vertex AI Gemini API',
    issuer: 'Google Cloud · Skill Badge',
    year: 'May 2025',
    detail: 'Prompt design, multimodal prompting and building on the Vertex AI Gemini API.',
    url: 'https://www.credly.com/badges/b26622d0-9bfd-4fda-8bd5-b96dc55f74e7/linked_in_profile',
  },
  {
    title: 'Develop GenAI Apps with Gemini and Streamlit',
    issuer: 'Google Cloud · Skill Badge',
    year: 'May 2025',
    detail: 'Building and deploying generative-AI applications with Gemini and Streamlit.',
    url: 'https://www.credly.com/badges/e997aa7e-d73a-423c-8c42-fb6e70b5b787/linked_in_profile',
  },
  {
    title: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG',
    issuer: 'Google Cloud · Skill Badge',
    year: 'Apr 2025',
    detail: 'Multimodal document understanding and multimodal RAG pipelines with Gemini.',
    url: 'https://www.credly.com/badges/ee6d02b7-a6d8-4246-875e-5ff48a5d2d2b/linked_in_profile',
  },
  {
    title: 'Build Real World AI Applications with Gemini and Imagen',
    issuer: 'Google Cloud · Skill Badge',
    year: 'Apr 2025',
    detail: 'Building real-world AI applications using Gemini and Imagen on Vertex AI.',
    url: 'https://www.credly.com/badges/ccad1ffc-84d1-4586-9012-084992c88a8b/linked_in_profile',
  },
  {
    title: 'Prompt Design in Vertex AI',
    issuer: 'Google Cloud · Skill Badge',
    year: 'Apr 2025',
    detail: 'Prompt engineering and prompt design patterns in Vertex AI.',
    url: 'https://www.credly.com/badges/3cfaefcd-3ad1-4d01-b29a-d814fc6cffab/linked_in_profile',
  },
  // Acmegrade credential links point at cert.diceid.com, which no longer
  // resolves (NXDOMAIN) — certificates kept, dead "verify" links omitted.
  {
    title: 'Machine Learning',
    issuer: 'Acmegrade',
    year: 'Jun 2025',
    detail: 'Supervised and unsupervised learning, model construction and evaluation on real datasets.',
  },
  {
    title: 'Machine Learning',
    issuer: 'Acmegrade',
    year: 'Apr 2025',
    detail: 'Hands-on machine learning foundations and applied model building.',
  },
  {
    title: 'Python Foundation',
    issuer: 'Infosys Springboard',
    year: '2024',
    detail: 'Core Python: data types, control structures, functions and problem-solving.',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]
