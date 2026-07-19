// Sourced from Hager Hesham Mohamed's resume.
// TODO: swap in real project screenshots in place of the /project-placeholder.svg images.

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

export const skills = [
  'C++', 'JavaScript', 'Java', 'Python', 'Dart',
  'Flutter', 'Node.js', 'Express.js', 'MongoDB',
  'FastAPI', 'PostgreSQL', 'Three.js', 'BLoC', 'Firebase',
];

export const projects = [
  {
    name: 'NoteOrbit — AI-Powered Lecture Notes App',
    description:
      'Graduation project (Grade A+): a cross-platform Flutter app that orbits your lectures into structured study notes through a fully offline Gen AI pipeline — Whisper transcription, topic segmentation and note generation, streamed live over SSE. Try it yourself: the installer is one click away on the project site.',
    tags: [
      { name: 'flutter', color: 'text-blossom-600' },
      { name: 'fastapi', color: 'text-plum-400' },
      { name: 'llm/whisper', color: 'text-blossom-600' },
    ],
    image: '/projects/NoteOrbit.png',
    sourceCodeLink: 'https://malak0277.github.io/NoteOrbit/',
    liveDemoLink: '',
  },
  {
    name: 'BEACON — Emergency Alerts Offline Network',
    description:
      'Cross-platform Flutter app for broadcasting and receiving emergency alerts over Bluetooth/BLE with no internet, featuring Speech-to-Text alert creation, Text-to-Speech playback, and Clean Architecture with BLoC.',
    tags: [
      { name: 'flutter', color: 'text-blossom-600' },
      { name: 'bluetooth/ble', color: 'text-plum-400' },
      { name: 'stt/tts', color: 'text-blossom-600' },
    ],
    image: '/projects/Beacon.png',
    sourceCodeLink: 'https://github.com/Hagerh/-BEACON-app-.git',
    liveDemoLink: '',
  },
  {
    name: 'Check-In Logger App',
    description:
      'Flutter app for logging user check-ins by GPS or manual address, with Firebase Authentication, real-time Cloud Firestore storage, and Cubit-managed async workflows.',
    tags: [
      { name: 'flutter', color: 'text-blossom-600' },
      { name: 'firebase', color: 'text-plum-400' },
      { name: 'geolocation', color: 'text-blossom-600' },
    ],
    image: '/projects/logger3.png',
    sourceCodeLink: 'https://github.com/Hagerh/Check-In-Logger--App-.git',
    liveDemoLink: '',
  },
  {
    name: 'E-Commerce Website Backend',
    description:
      'Node.js + Express REST API for an online cake store — products, carts, orders, discounts, auth and reviews — backed by MongoDB/Mongoose with a scalable, frontend-ready architecture.',
    tags: [
      { name: 'nodejs', color: 'text-blossom-600' },
      { name: 'express', color: 'text-plum-400' },
      { name: 'mongodb', color: 'text-blossom-600' },
    ],
    image: '/projects/candycake.png',
    sourceCodeLink: 'https://github.com/Malak0277/e-commerce-website.git',
    liveDemoLink: '',
  },
  {
    name: 'Three.js Scene',
    description:
      'Interactive 3D game built with Three.js and WebGL, with custom lighting, shadows, physics and collision detection, raycasting-based puzzle interactions, and a progress/lives system.',
    tags: [
      { name: 'threejs', color: 'text-blossom-600' },
      { name: 'webgl', color: 'text-plum-400' },
      { name: 'raycasting', color: 'text-blossom-600' },
    ],
    image: '/projects/threejs.png',
    sourceCodeLink: 'https://github.com/Hagerh/Threejs_scene.git',
    liveDemoLink: 'https://hagerh.github.io/Threejs_scene/',
  },
];

export const experiences = [
  {
    title: 'Bachelor of Computer Engineering and Software Systems',
    company_name: 'Ain Shams University — Multimedia Engineering',
    date: 'Graduated 22/6/2026',
    points: [
      'Coursework and training spanning Data Structures & Algorithms, OOP, Database Design, RTOS and Embedded Systems.',
      'Additional training: Flutter Edges, 2D Game Development (ITI), UI/UX Summer Training (ITI), FullStack Training (Next).',
    ],
  },
  {
    title: 'Backend Engineering Internship Assessment',
    company_name: 'Buguard',
    date: '06/2026 – 06/2026',
    points: [
      'Built a layered REST API (routers → services → repositories) modeling asset relationship graphs with ingest deduplication.',
      'Implemented a resilient bulk import pipeline with row-level validation and malformed-record handling.',
      'Added API key authentication, advanced filtering/pagination, and SQL-level certificate lifecycle tracking.',
      'Containerized the API and PostgreSQL stack with Docker Compose, validated by a 22-test pytest suite.',
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
