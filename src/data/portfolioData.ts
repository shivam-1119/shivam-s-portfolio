import type { Project, SkillItem, ExperienceItem, EducationItem, LeadershipItem } from '../types';

export const PERSONAL_INFO = {
  name: "Shivam Satish Nikam",
  shortName: "Shivam",
  title: "Full-Stack Developer | Software Engineer",
  tagline: "Explore My Universe.",
  badge: "AVAILABLE FOR OPPORTUNITIES",
  description: "I build modern web and mobile applications, transforming ideas into practical digital experiences.",
  aboutHeading: "Beyond the Code, Discover My Journey.",
  aboutIntro: "I'm Shivam Satish Nikam, a BCA student and passionate software developer interested in building modern web and mobile applications.",
  email: "shivamnikam619@gmail.com",
  socials: {
    github: "https://github.com/shivam",
    linkedin: "https://www.linkedin.com/in/shivam-nikam/",
    instagram: "https://instagram.com/shivamverse",
    email: "mailto:shivamnikam619@gmail.com"
  },
  stats: [
    { label: "Internship Experience", value: "1", icon: "briefcase" },
    { label: "Projects", value: "7+", icon: "code" },
    { label: "Student", value: "BCA", icon: "graduation" },
    { label: "Technical Coordinator", value: "Lead", icon: "users" }
  ],
  heroTechBadges: [
    { name: ".NET", color: "#512BD4" },
    { name: "C#", color: "#239120" },
    { name: "Flutter", color: "#02569B" },
    { name: "Dart", color: "#0175C2" },
    { name: "React", color: "#61DAFB" },
    { name: "Firebase", color: "#FFCA28" },
    { name: "JavaScript", color: "#F7DF1E" },
    { name: "SQL", color: "#00758F" },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "saca-committee-portal",
    planetName: "Kepler-SACA",
    planetColor: "#8B5CF6",
    glowColor: "#A78BFA",
    title: "SACA COMMITTEE PORTAL",
    category: "Full-Stack",
    description: "Developed a comprehensive student association management ecosystem for the MCA department, featuring committee management, event registration, voting and student engagement functionality.",
    features: [
      "Committee administration and hierarchical role management",
      "Event registration workflow with ticket & confirmation tracking",
      "Real-time voting and student election system",
      "Student engagement forum and dynamic notice board"
    ],
    techStack: ["React.js", "Node.js", "SQL Server", "REST APIs", "Tailwind CSS"],
    liveUrl: "https://sacacommittee.in/",
    featured: true,
    status: "Live & Deployed",
    year: "2024"
  },
  {
    id: "bca-attendance-manager",
    planetName: "Aether-Attendance",
    planetColor: "#38BDF8",
    glowColor: "#0284C7",
    title: "BCA ATTENDANCE MANAGER",
    category: "Web App",
    description: "Developed a digital attendance management platform that helps college staff manage student attendance, track records and monitor attendance reports.",
    features: [
      "Faculty & staff role-based dashboard for lecture sessions",
      "Automated attendance computation with monthly analytics",
      "Defaulter list detection and downloadable reports",
      "Streamlined UI built for rapid classroom attendance entry"
    ],
    techStack: ["React.js", "Firebase", "REST APIs", "Bootstrap", "JavaScript"],
    liveUrl: "https://mcaattendance.sacacommittee.in/",
    featured: true,
    status: "Live & Deployed",
    year: "2024"
  },
  {
    id: "warana-farmer-app",
    planetName: "Gaia-Warana",
    planetColor: "#10B981",
    glowColor: "#34D399",
    title: "WARANA FARMER APP",
    category: "Mobile",
    description: "Developing a Flutter-based farmer and dairy management application with milk collection records, fat and SNF calculations, rate management and administrative controls.",
    features: [
      "Daily milk collection logging with morning & evening shifts",
      "Real-time Fat & SNF percentage algorithmic calculation",
      "Rate chart configuration and automatic payout receipts",
      "Offline sync capabilities with Cloud Firestore database"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "State Management"],
    featured: true,
    status: "In Development",
    year: "2024 - 2025"
  },
  {
    id: "mca-aptitude-app",
    planetName: "Chronos-Aptitude",
    planetColor: "#F59E0B",
    glowColor: "#FBBF24",
    title: "MCA APTITUDE APP",
    category: "Mobile",
    description: "Developed an aptitude assessment platform concept with authentication, assessments, recruitment preparation, reporting and performance tracking.",
    features: [
      "Timed online aptitude tests with multiple category sections",
      "Instant scoring algorithm and detailed weak-area diagnostics",
      "Campus placement recruitment question bank",
      "Progress dashboard with performance graphs"
    ],
    techStack: ["Flutter", "Dart", "Firebase Auth", "REST APIs", "JSON"],
    featured: false,
    status: "Concept / Prototype",
    year: "2024"
  },
  {
    id: "ai-traffic-prediction",
    planetName: "Nova-VisionAI",
    planetColor: "#EC4899",
    glowColor: "#F472B6",
    title: "AI TRAFFIC AND CROWD PREDICTION",
    category: "AI / Computer Vision",
    description: "Developing an AI-powered traffic and crowd analysis system using computer vision and YOLO-based object detection.",
    features: [
      "YOLO-based real-time vehicle and pedestrian detection",
      "Congestion density indexing and automated alert triggering",
      "Video stream inference pipeline with bounding box visualization",
      "Predictive trend estimation for urban intersections"
    ],
    techStack: ["Python", "YOLOv8", "OpenCV", "Flask", "NumPy"],
    featured: true,
    status: "In Development",
    year: "2024 - 2025"
  }
];

export const SKILLS: SkillItem[] = [
  // Programming
  {
    name: "C#",
    category: "Programming",
    icon: "code",
    description: "Strong object-oriented programming, LINQ, asynchronous patterns, and .NET ecosystem development.",
    orbitRadius: 180,
    orbitSpeed: 0.02,
    color: "#239120",
    experienceLevel: "Primary Language"
  },
  {
    name: "JavaScript",
    category: "Programming",
    icon: "file-code",
    description: "Modern ES6+, DOM manipulation, asynchronous programming, APIs, and modern front-end architectures.",
    orbitRadius: 220,
    orbitSpeed: 0.018,
    color: "#F7DF1E",
    experienceLevel: "Core Web Language"
  },
  {
    name: "Dart",
    category: "Programming",
    icon: "terminal",
    description: "Typed language for cross-platform Flutter application development with reactive state patterns.",
    orbitRadius: 260,
    orbitSpeed: 0.015,
    color: "#0175C2",
    experienceLevel: "Mobile Development"
  },

  // Frameworks
  {
    name: ".NET Framework",
    category: "Frameworks",
    icon: "layers",
    description: "Building robust enterprise architectures, Windows applications, and backend services.",
    orbitRadius: 190,
    orbitSpeed: 0.016,
    color: "#512BD4",
    experienceLevel: "Enterprise Framework"
  },
  {
    name: "Flutter",
    category: "Frameworks",
    icon: "smartphone",
    description: "Cross-platform mobile application development for Android & iOS with custom widgets and Firebase integration.",
    orbitRadius: 230,
    orbitSpeed: 0.014,
    color: "#02569B",
    experienceLevel: "Production Mobile Apps"
  },
  {
    name: "React.js",
    category: "Frameworks",
    icon: "atom",
    description: "Component-driven SPA development, hooks, state management, and modern responsive interfaces.",
    orbitRadius: 270,
    orbitSpeed: 0.012,
    color: "#61DAFB",
    experienceLevel: "Interactive Web Apps"
  },
  {
    name: "Bootstrap",
    category: "Frameworks",
    icon: "layout",
    description: "Responsive grid systems, mobile-first design, utility classes, and custom UI components.",
    orbitRadius: 310,
    orbitSpeed: 0.01,
    color: "#7952B3",
    experienceLevel: "Responsive Layouts"
  },

  // Backend
  {
    name: "Firebase",
    category: "Backend",
    icon: "flame",
    description: "Authentication, Cloud Firestore, Cloud Functions, real-time database, and Firebase Hosting.",
    orbitRadius: 200,
    orbitSpeed: 0.017,
    color: "#FFCA28",
    experienceLevel: "Cloud Backend"
  },
  {
    name: "PHP",
    category: "Backend",
    icon: "server",
    description: "Server-side scripting, database queries, authentication handling, and WordPress customization.",
    orbitRadius: 240,
    orbitSpeed: 0.013,
    color: "#777BB4",
    experienceLevel: "Backend Scripting"
  },
  {
    name: "REST APIs",
    category: "Backend",
    icon: "network",
    description: "RESTful architecture design, JSON serialization, endpoint testing, and secure communication.",
    orbitRadius: 280,
    orbitSpeed: 0.011,
    color: "#38BDF8",
    experienceLevel: "API Integration"
  },

  // Database
  {
    name: "MySQL",
    category: "Database",
    icon: "database",
    description: "Relational database schema design, indexing, complex joins, views, and normalization.",
    orbitRadius: 210,
    orbitSpeed: 0.015,
    color: "#4479A1",
    experienceLevel: "Relational DB"
  },
  {
    name: "SQL Server",
    category: "Database",
    icon: "hard-drive",
    description: "Microsoft T-SQL, stored procedures, triggers, relational integrity, and enterprise storage.",
    orbitRadius: 250,
    orbitSpeed: 0.013,
    color: "#CC292B",
    experienceLevel: "Enterprise SQL"
  },
  {
    name: "Firestore",
    category: "Database",
    icon: "cloud",
    description: "NoSQL document database, real-time listeners, security rules, and offline indexing.",
    orbitRadius: 290,
    orbitSpeed: 0.01,
    color: "#FFA611",
    experienceLevel: "NoSQL Cloud"
  },

  // Tools
  {
    name: "Visual Studio",
    category: "Tools",
    icon: "cpu",
    description: "Primary IDE for C#, .NET development, profiling, debugging, and solution management.",
    orbitRadius: 220,
    orbitSpeed: 0.014,
    color: "#5C2D91",
    experienceLevel: "Primary IDE"
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    icon: "git-branch",
    description: "Branching strategies, collaborative workflows, pull requests, releases, and CI/CD pipelines.",
    orbitRadius: 260,
    orbitSpeed: 0.012,
    color: "#F05032",
    experienceLevel: "Version Control"
  },
  {
    name: "WordPress",
    category: "Tools",
    icon: "globe",
    description: "Theme customization, content management, plugin configuration, and client CMS delivery.",
    orbitRadius: 300,
    orbitSpeed: 0.009,
    color: "#21759B",
    experienceLevel: "CMS Solutions"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "warana-univ",
    organization: "Warana University",
    role: "Software Developer Intern / Flutter Developer",
    type: "Internship",
    duration: "Current Mission",
    period: "2024 - Present",
    description: "Spearheading the mobile application development of the Farmer and Dairy Management ecosystem.",
    responsibilities: [
      "Architecting the Flutter cross-platform mobile client for farmers and dairy collection center operators",
      "Integrating Cloud Firestore for real-time milk collection metrics, automated fat and SNF calculations",
      "Designing responsive mobile user flows and admin control dashboards",
      "Collaborating on database security rules and offline-first mobile sync"
    ],
    techStack: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "State Management"],
    badge: "MISSION: ACTIVE",
    status: "Ongoing"
  },
  {
    id: "websoftera",
    organization: "WebSoftera",
    role: "Front-End Intern",
    type: "Internship",
    duration: "Mission Completed",
    period: "Previous Term",
    description: "Engineered responsive web interfaces and e-commerce features for client commercial applications.",
    responsibilities: [
      "Developed responsive client web layouts using HTML5, CSS3, JavaScript, and Bootstrap",
      "Built custom e-commerce product catalogs and cart interaction interfaces",
      "Collaborated on PHP backend integrations and MySQL database data binding",
      "Maintained and enhanced custom client WordPress platforms"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "WordPress", "MySQL"],
    badge: "MISSION: SUCCESS",
    status: "Completed"
  }
];

export const LEADERSHIP_ROLES: LeadershipItem[] = [
  {
    title: "BCA Technical Coordinator",
    role: "Lead Coordinator",
    organization: "D.Y.Patil BCA Department",
    highlights: [
      "Leading technical initiatives, coding workshops, and student development programs",
      "Organizing departmental hackathons and technological events",
      "Mentoring junior students in software engineering fundamentals"
    ],
    icon: "award"
  },
  {
    title: "Placement Coordinator",
    role: "Department Representative",
    organization: "Training & Placement Cell",
    highlights: [
      "Coordinating campus recruitment drives and corporate technical assessments",
      "Assisting fellow students with technical interview preparation",
      "Liaising between hiring teams and departmental candidates"
    ],
    icon: "briefcase"
  },
  {
    title: "NSS Volunteer & Camp Coordinator",
    role: "Community & Camp Lead",
    organization: "National Service Scheme (NSS)",
    highlights: [
      "Organized community outreach and rural development residential camps",
      "Coordinated volunteer logistics and student social responsibility programs",
      "Facilitated educational and environmental awareness drives"
    ],
    icon: "heart"
  },
  {
    title: "Technical Events Contributor",
    role: "Event & Workshop Lead",
    organization: "College Technical Forums",
    highlights: [
      "Conducted hands-on sessions on web development and version control",
      "Managed digital assets and online registrations for annual tech symposiums"
    ],
    icon: "zap"
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Warana",
    type: "High School",
    status: "Completed",
    description: "Completed secondary education with solid academic foundations.",
    highlights: [
      "Foundational science, mathematics, and basic computer fundamentals"
    ]
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "Warana",
    type: "Junior College",
    status: "Completed",
    description: "Completed higher secondary education focusing on scientific principles and analytical problem-solving.",
    highlights: [
      "Core focus on science and computer foundations"
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA SY)",
    institution: "D.Y.Patil, Talsande",
    type: "Undergraduate Degree",
    status: "Currently Pursuing (Second Year)",
    description: "Building strong foundations in computer applications, full-stack software development, modern programming languages, database systems, and mobile app engineering.",
    highlights: [
      "Core subjects: C#, .NET, Web Development, Databases, Java, App Development",
      "Practical project work: Modern web systems and responsive cross-platform applications"
    ]
  }
];
