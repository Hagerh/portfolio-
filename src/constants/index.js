
export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'experience', title: 'Experience' },
  { id: 'contact', title: 'Contact' },
];

export const socials = [
  { name: 'GitHub', url: 'https://github.com/Hagerh' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/hager-hesham-a79a202a5' },
  { name: 'Email', url: 'mailto:h.hesham227766@gmail.com' },
];

export const skillGroups = [
  { title: 'Languages', items: ['C++', 'JavaScript', 'Java', 'Python', 'Dart'] },
  {
    title: 'Frameworks & Tools',
    items: [
      'Flutter', 'FastAPI', 'Node.js', 'Express.js', 'Apache Kafka', 'Docker',
      'AWS (EC2)', 'MongoDB', 'SQLite', 'Git/GitHub', 'Postman',
    ],
  },
  {
    title: 'Concepts',
    items: [
      'Clean Architecture', 'Domain-Driven Design', 'Event-Driven Architecture',
      'REST/SSE/WebSocket APIs', 'BLoC/Cubit', 'Gen AI / LLM Integration',
    ],
  },
  {
    title: 'Enterprise & Integration',
    items: [
      'IBM FileNet P8', 'IBM BAW / BPM', 'Content Navigator & EDS', 'OpenText', 'ECM / BPM',
    ],
  },
];

// Each project lists the career tracks it suits; the Projects tabs filter on these ids.
export const projectTracks = [
  { id: 'all', label: 'All' },
  { id: 'backend', label: 'Backend' },
  { id: 'mobile', label: 'Flutter / Mobile' },
  { id: 'ai', label: 'AI / LLM' },
  { id: 'enterprise', label: 'Enterprise Integration' },
  { id: 'software', label: 'Software Engineering' },
];

const pink = 'text-blossom-600';
const purple = 'text-plum-400';

export const projects = [
  {
    name: 'Event-Driven Posts API',
    description:
      'Backend engineering assignment: a Node.js/Express + MongoDB REST API in Domain-Driven Design layers. Every post creation publishes a PostCreated event to Apache Kafka (keyed by post ID to keep per-post ordering) for a separate consumer service. Dockerized with Compose, deployed to AWS EC2, and covered by unit, API and integration tests plus a Postman collection.',
    tracks: ['backend', 'software'],
    tags: [
      { name: 'nodejs', color: pink },
      { name: 'kafka', color: purple },
      { name: 'ddd', color: pink },
      { name: 'docker/aws', color: purple },
    ],
    image: '/projects/PostsAPI.png',
    sourceCodeLink: 'https://github.com/Hagerh/Backend_system',
    liveDemoLink: '',
  },
  {
    name: 'E-Commerce Website Backend',
    description:
      'Node.js + Express REST API for an online cake store — products, carts, orders, discounts, auth and reviews — backed by MongoDB/Mongoose with a scalable, frontend-ready architecture.',
    tracks: ['backend'],
    tags: [
      { name: 'nodejs', color: pink },
      { name: 'express', color: purple },
      { name: 'mongodb', color: pink },
    ],
    image: '/projects/candycake.png',
    sourceCodeLink: 'https://github.com/Malak0277/e-commerce-website.git',
    liveDemoLink: '',
  },
  {
    name: 'NoteOrbit — AI-Powered Lecture Notes App',
    description:
      'Graduation project (Grade A+): a cross-platform Flutter app that turns lecture recordings into structured study notes through a local Gen AI pipeline — Whisper transcription, topic segmentation and note generation — with real-time progress over SSE, BLoC/Cubit, DI with GetIt/Injectable and a FastAPI backend managed from the app.',
    tracks: ['mobile', 'ai'],
    tags: [
      { name: 'flutter', color: pink },
      { name: 'fastapi', color: purple },
      { name: 'llm/whisper', color: pink },
    ],
    image: '/projects/NoteOrbit.png',
    sourceCodeLink: 'https://malak0277.github.io/NoteOrbit/',
    liveDemoLink: '',
  },
  {
    name: 'BEACON — Emergency Alerts Offline Network',
    description:
      'Cross-platform Flutter app for broadcasting and receiving emergency alerts over Bluetooth/BLE with no internet. Offline-first architecture, Speech-to-Text alert creation, Text-to-Speech playback, and Clean Architecture with BLoC.',
    tracks: ['mobile'],
    tags: [
      { name: 'flutter', color: pink },
      { name: 'bluetooth/ble', color: purple },
      { name: 'stt/tts', color: pink },
    ],
    image: '/projects/Beacon.png',
    sourceCodeLink: 'https://github.com/Hagerh/-BEACON-app-.git',
    liveDemoLink: '',
  },
  {
    name: 'Check-In Logger App',
    description:
      'Flutter app for logging user check-ins by GPS or manual address, with Firebase Authentication, real-time Cloud Firestore storage, and Cubit-managed async workflows.',
    tracks: ['mobile'],
    tags: [
      { name: 'flutter', color: pink },
      { name: 'firebase', color: purple },
      { name: 'geolocation', color: pink },
    ],
    image: '/projects/logger3.png',
    sourceCodeLink: 'https://github.com/Hagerh/Check-In-Logger--App-.git',
    liveDemoLink: '',
  },
  {
    name: 'Retrieval-Augmented Generation (RAG) App',
    description:
      'Source-backed Q&A system that retrieves and ranks documents and cites them in generated answers. FastAPI backend combining search, semantic ranking (SentenceTransformers) and Gemini, with real-time streaming over WebSockets (HTTP fallback for batch queries) and a cross-platform Flutter frontend.',
    tracks: ['ai', 'backend', 'mobile'],
    tags: [
      { name: 'fastapi', color: pink },
      { name: 'rag/gemini', color: purple },
      { name: 'websockets', color: pink },
      { name: 'flutter', color: purple },
    ],
    image: '/projects/RAG.png',
    sourceCodeLink: 'https://github.com/Hagerh/RAG-Application.git',
    liveDemoLink: '',
  },
  {
    name: 'Banking Document Automation (IBM FileNet)',
    description:
      'Java event handlers and subscriptions in IBM FileNet P8 that automate document handling for banking clients — dynamic date-based folder creation and filing by transaction date — plus FileNet ACCE configuration (branch-level security, document classes) for a branch digital-archiving project.',
    tracks: ['enterprise'],
    tags: [
      { name: 'filenet p8', color: pink },
      { name: 'java', color: purple },
      { name: 'ecm', color: pink },
    ],
    image: '',
    sourceCodeLink: '',
    liveDemoLink: '',
  },
  {
    name: 'Approval Workflow (IBM BAW)',
    description:
      'Team-built, end-to-end approval workflow in IBM Business Automation Workflow using Process Designer and Process Center. I built the business objects and Coach views for the Financial Details and Credit Information stages and integrated the workflow with a relational database.',
    tracks: ['enterprise'],
    tags: [
      { name: 'baw/bpm', color: pink },
      { name: 'coaches', color: purple },
      { name: 'sql integration', color: pink },
    ],
    image: '',
    sourceCodeLink: '',
    liveDemoLink: '',
  },
  {
    name: 'Content Navigator External Data Service',
    description:
      'An External Data Service (EDS) for IBM Content Navigator supporting customer-file document classes in an ECM solution.',
    tracks: ['enterprise'],
    tags: [
      { name: 'content navigator', color: pink },
      { name: 'eds', color: purple },
    ],
    image: '',
    sourceCodeLink: '',
    liveDemoLink: '',
  },
  {
    name: 'Three.js Scene',
    description:
      'Interactive 3D game built with Three.js and WebGL, with custom lighting, shadows, physics and collision detection, raycasting-based puzzle interactions, and a progress/lives system.',
    tracks: ['software'],
    tags: [
      { name: 'threejs', color: pink },
      { name: 'webgl', color: purple },
      { name: 'raycasting', color: pink },
    ],
    image: '/projects/threejs.png',
    sourceCodeLink: 'https://github.com/Hagerh/Threejs_scene.git',
    liveDemoLink: 'https://hagerh.github.io/Threejs_scene/',
  },
];

export const experiences = [
  {
    title: 'Enterprise Application Integration Intern (ECM & BPM)',
    company_name: 'Intercom Enterprise',
    date: '10/2026 – Present',
    points: [
      'Developed Java event handlers and subscriptions in IBM FileNet P8 (Eclipse) to automate document handling for banking clients, including dynamic date-based folder creation and filing by transaction date.',
      'Configured FileNet ACCE for a branch digital-archiving project, including branch-level security and document class setup.',
      'Built an External Data Service (EDS) for IBM Content Navigator to support customer-file document classes.',
      'Designed and implemented an end-to-end approval workflow in IBM BAW as part of a team, using Process Designer and Process Center.',
      'Built the business objects and Coach views for the Financial Details and Credit Information stages, and integrated the workflow with a relational database.',
    ],
  },
  {
    title: 'Scholarship Program',
    company_name: 'National Telecommunication Institute (NTI)',
    date: '07/2026 – 10/2026',
    points: [
      'Built business process workflows in IBM BPM/BAW: process modeling, human tasks, coaches, business objects and data validation.',
      'Configured ECM solutions in IBM FileNet P8 and OpenText, including taxonomies, document capture and automated sweep tasks.',
      'Strengthened fundamentals in OOP, data structures and relational databases.',
      'Completed a capstone project applying business process optimization and project management methods in a team.',
    ],
  },
  {
    title: 'B.Sc. Computer Engineering and Software Systems',
    company_name: 'Ain Shams University — Multimedia Engineering',
    date: '2021 – 2026',
    points: [
      'Graduation project: AI-Powered Lecture Notes App (Grade: A+).',
      'Additional training: Flutter Edges, UI/UX Summer Training (ITI), FullStack Training (Next).',
    ],
  },
  {
    title: 'LLM Internship',
    company_name: 'Certificate Training',
    date: '2025',
    points: [
      "Trained on large language model concepts and Gen AI integration, later applied to the graduation project's offline LLM pipeline.",
    ],
    certificateLink: 'https://drive.google.com/file/d/1R_SvnCzJIaSeIzBbhwkRUgqYb8qClBYA/view?usp=share_link',
  },
];
