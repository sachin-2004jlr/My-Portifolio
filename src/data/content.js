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
  photo: './sachin.jpg',
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
  { value: '9.0', suffix: '/10', label: 'CGPA · B.E. AI & DS' },
  { value: '6', suffix: '+', label: 'Shipped Projects' },
  { value: '2', suffix: '', label: 'Engineering Internships' },
  { value: '3', suffix: '+', label: 'Certifications' },
]

export const skillGroups = [
  {
    title: 'Languages & Frameworks',
    icon: 'code',
    items: ['Python', 'JavaScript', 'React', 'Flask', 'Axios', 'HTML / CSS', 'Flask-SocketIO'],
  },
  {
    title: 'AI & Data',
    icon: 'brain',
    items: [
      'Neural Networks', 'NLP', 'LangChain', 'LangGraph', 'RAG Pipelines', 'Semantic Search',
      'Vector Embeddings', 'LLM Integration', 'Prompt Engineering', 'Fine-Tuning',
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
    featured: true,
    tags: ['React', 'Flask', 'MongoDB', 'OpenAI', 'Pinecone', 'Socket.IO'],
    blurb:
      'A full-stack talent matching platform with semantic profile search and AI-driven candidate matching.',
    highlights: [
      'JWT-based auth, role-based access control and real-time messaging via Socket.IO.',
      'OpenAI + Pinecone vector database for semantic search, significantly improving recommendation relevance.',
      'Resume parsing and ATS scoring pipelines with NLP extraction, plus a real-time notification system.',
    ],
    url: 'https://github.com/sachin-2004jlr',
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
    detail: 'CGPA: 9.0 / 10',
  },
  {
    degree: 'Pre-University Education',
    school: 'Sri Siddaganga PU College, Davanagere',
    detail: 'Percentage: 92.5%',
  },
]

export const certifications = [
  {
    title: 'Google Cloud — Hack2Skill Certificate',
    year: '2025',
    detail: 'Cloud fundamentals, AI/ML workflows and deployment on Google Cloud Platform.',
  },
  {
    title: 'Machine Learning Certificate — Acme Grade',
    year: '2025',
    detail: 'Practical supervised & unsupervised learning, model construction and evaluation on real datasets.',
  },
  {
    title: 'Python Foundation — Infosys Springboard',
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
