import type { ComponentType } from 'react';
import {
  Brain,
  Cpu,
  Home,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import {
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaLinux,
  FaApple,
  FaWindows,
} from 'react-icons/fa';
import {
  SiC,
  SiJavascript,
  SiFlask,
  SiBootstrap,
  SiSqlite,
  SiArduino,
  SiRaspberrypi,
  SiCanva,
} from 'react-icons/si';

export type IconType = ComponentType<{ className?: string }>;

/* ---------------------------------- Projects --------------------------------- */

export type Project = {
  title: string;
  tagline: string;
  year: string;
  /** Case-study narrative. */
  problem: string;
  idea: string;
  implementation: string[];
  result: string;
  tech: string[];
  tags: string[];
  accent: string;
  gradient: string;
  icon: IconType;
  link?: string;
  external?: boolean;
  /** Highlighted competition/ranking outcome shown as a chip. */
  award?: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Intelligent Security System',
    tagline: 'RFID + PIN access control with an autonomous interception vehicle',
    year: '2024',
    problem:
      'Conventional home security is reactive — it records an intrusion but rarely responds to it in real time.',
    idea:
      'A layered system that authenticates people at the door and physically responds to unauthorised entry using a small robotic vehicle.',
    implementation: [
      'Dual-factor entry with RFID cards and a PIN keypad backed by an access whitelist',
      'Environmental sensors (motion, door state) trigger graded alert states',
      'A robotic interception vehicle deploys automatically on breach detection',
    ],
    result: 'Won 1st place in the school engineering competition.',
    tech: ['C', 'Arduino', 'RFID', 'Sensors', 'Robotics'],
    tags: ['IoT', 'Embedded', 'Robotics', 'Security'],
    accent: 'hsl(160 70% 55%)',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    icon: ShieldCheck,
    award: '1st place · School competition',
  },
  {
    title: 'Smart Home Automation System',
    tagline: 'Voice-controlled home hub for Google Assistant & Alexa',
    year: '2022',
    problem:
      'Home appliances are controlled in isolation, with no unified, hands-free way to manage them.',
    idea:
      'A central controller that exposes household devices to Google Assistant and Alexa so they can be operated by voice or schedule.',
    implementation: [
      'Microcontroller hub bridging relays and sensors to voice assistants',
      'Custom intents for lighting, appliances, and environment control',
      'Fail-safe manual overrides so the home stays usable if the network drops',
    ],
    result: 'Awarded 2nd place in the school engineering competition.',
    tech: ['C', 'Arduino', 'Google Assistant', 'Alexa', 'IoT'],
    tags: ['IoT', 'Automation', 'Voice', 'Embedded'],
    accent: 'hsl(265 89% 70%)',
    gradient: 'from-violet-500/20 to-purple-500/10',
    icon: Home,
    award: '2nd place · School competition',
  },
  {
    title: 'AI with Python — CS50AI',
    tagline: 'Search, knowledge, optimisation & machine-learning projects',
    year: '2024',
    problem:
      'Understanding modern AI means moving past libraries to the algorithms that actually make machines reason and learn.',
    idea:
      'Implement core AI techniques from first principles across HarvardX CS50AI — from adversarial search to neural networks.',
    implementation: [
      'Search & adversarial agents (minimax, alpha-beta pruning)',
      'Knowledge representation, propositional logic, and inference',
      'Optimisation, probabilistic models, and machine-learning classifiers',
    ],
    result:
      'Completed HarvardX CS50AI and the Professional Certificate in Computer Science for AI.',
    tech: ['Python', 'Machine Learning', 'Algorithms', 'AI'],
    tags: ['AI', 'Machine Learning', 'Algorithms'],
    accent: 'hsl(300 80% 70%)',
    gradient: 'from-fuchsia-500/20 to-purple-500/10',
    icon: Brain,
    link: 'https://cs50.harvard.edu/ai/',
    external: true,
  },
  {
    title: 'Competitive Programming',
    tagline: 'Algorithms, data structures & verified problem solving',
    year: 'Ongoing',
    problem:
      'Strong engineers are built on fluency with algorithms and disciplined problem decomposition.',
    idea:
      'Treat competitive programming as deliberate practice — solving graded challenges and earning verified skill certificates.',
    implementation: [
      'Data structures, sorting, searching, and dynamic programming',
      'Verified HackerRank certificates in Python and Problem Solving',
      'A growing open-source collection of Python solutions',
    ],
    result: 'Verified certificates up to Problem Solving (Intermediate).',
    tech: ['Python', 'Algorithms', 'Data Structures'],
    tags: ['Competitive Programming', 'Python', 'Algorithms'],
    accent: 'hsl(210 100% 65%)',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    icon: Terminal,
    link: 'https://github.com/Rayaan2009',
    external: true,
  },
];

/* ----------------------------------- Skills ---------------------------------- */

export type SkillItem = { label: string; icon: IconType; accent: string };
export type SkillGroup = {
  category: string;
  blurb: string;
  icon: IconType;
  items: SkillItem[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    blurb: 'Languages I build and solve problems in.',
    icon: Terminal,
    items: [
      { label: 'Python', icon: FaPython, accent: 'text-blue-300' },
      { label: 'C', icon: SiC, accent: 'text-sky-300' },
      { label: 'JavaScript', icon: SiJavascript, accent: 'text-yellow-300' },
      { label: 'SQL', icon: SiSqlite, accent: 'text-emerald-300' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    blurb: 'From CS50AI foundations to applied models.',
    icon: Brain,
    items: [
      { label: 'Artificial Intelligence', icon: Brain, accent: 'text-fuchsia-300' },
      { label: 'Machine Learning', icon: Brain, accent: 'text-violet-300' },
      { label: 'Search & Optimisation', icon: Cpu, accent: 'text-purple-300' },
      { label: 'Python for AI', icon: FaPython, accent: 'text-blue-300' },
    ],
  },
  {
    category: 'Web & Design',
    blurb: 'Front-end development and interface design.',
    icon: FaHtml5,
    items: [
      { label: 'HTML5', icon: FaHtml5, accent: 'text-orange-300' },
      { label: 'CSS3', icon: FaCss3Alt, accent: 'text-cyan-300' },
      { label: 'Flask', icon: SiFlask, accent: 'text-slate-200' },
      { label: 'Bootstrap', icon: SiBootstrap, accent: 'text-fuchsia-300' },
      { label: 'UI/UX', icon: SiCanva, accent: 'text-teal-300' },
    ],
  },
  {
    category: 'Hardware & IoT',
    blurb: 'Embedded systems that touch the real world.',
    icon: Cpu,
    items: [
      { label: 'Arduino', icon: SiArduino, accent: 'text-teal-300' },
      { label: 'Raspberry Pi', icon: SiRaspberrypi, accent: 'text-rose-300' },
      { label: 'Sensors', icon: Cpu, accent: 'text-amber-300' },
      { label: 'Embedded Systems', icon: Cpu, accent: 'text-indigo-300' },
    ],
  },
];

/** Operating systems shown as a compact secondary strip. */
export const PLATFORMS: SkillItem[] = [
  { label: 'macOS', icon: FaApple, accent: 'text-slate-200' },
  { label: 'Linux', icon: FaLinux, accent: 'text-amber-300' },
  { label: 'Windows', icon: FaWindows, accent: 'text-sky-300' },
];

/* -------------------------------- Certificates ------------------------------- */

export type Certificate = {
  title: string;
  issuer: string;
  badge: string;
  description: string;
  skills: string[];
  /** Direct verification URL (real certificate). */
  verifyUrl?: string;
  /** Public programme/course page when no personal verification link exists. */
  courseUrl?: string;
  accent: string;
  gradient: string;
  featured?: boolean;
};

export const CERTIFICATES: Certificate[] = [
  {
    title: 'CS50AI: Introduction to Artificial Intelligence with Python',
    issuer: 'HarvardX',
    badge: 'Harvard',
    description:
      "Harvard's graduate-style introduction to modern AI — building intelligent agents from search and logic to machine learning and neural networks.",
    skills: ['Search', 'Knowledge', 'Optimisation', 'Machine Learning', 'Neural Networks'],
    courseUrl: 'https://cs50.harvard.edu/ai/',
    accent: 'hsl(300 80% 70%)',
    gradient: 'from-fuchsia-500/20 to-purple-500/10',
    featured: true,
  },
  {
    title: 'Professional Certificate in Computer Science for Artificial Intelligence',
    issuer: 'HarvardX',
    badge: 'Harvard',
    description:
      "A HarvardX professional programme pairing CS50's foundations with applied artificial intelligence and Python engineering.",
    skills: ['Computer Science', 'Artificial Intelligence', 'Python', 'Algorithms'],
    courseUrl:
      'https://www.edx.org/certificates/professional-certificate/harvardx-computer-science-for-artifical-intelligence',
    accent: 'hsl(265 89% 70%)',
    gradient: 'from-violet-500/20 to-purple-500/10',
    featured: true,
  },
  {
    title: "CS50's Introduction to Computer Science",
    issuer: 'Harvard University (edX)',
    badge: 'Harvard',
    description:
      "Harvard's renowned introduction to computer science, spanning algorithms, data structures, memory, and web development.",
    skills: ['C', 'Python', 'Algorithms', 'Data Structures'],
    verifyUrl: 'https://courses.edx.org/certificates/cfd642062ecd466faf347bc64f18cbe4',
    accent: 'hsl(265 89% 70%)',
    gradient: 'from-indigo-500/20 to-purple-500/10',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    badge: 'HackerRank',
    description:
      'Verified skill certificate covering Python data types, control flow, functions, and standard-library usage.',
    skills: ['Python', 'Functions', 'Data Types'],
    verifyUrl: 'https://www.hackerrank.com/certificates/7fd2b6f079b3',
    accent: 'hsl(210 100% 65%)',
    gradient: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    badge: 'HackerRank',
    description:
      'Intermediate algorithmic problem solving — dynamic programming, graph traversal, and complex data structures.',
    skills: ['Dynamic Programming', 'Graphs', 'Algorithms'],
    verifyUrl: 'https://www.hackerrank.com/certificates/54bb17bea4dc',
    accent: 'hsl(35 95% 60%)',
    gradient: 'from-amber-500/20 to-orange-500/10',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    badge: 'HackerRank',
    description:
      'Verified skill certificate in core algorithmic problem solving — data structures, sorting, and searching.',
    skills: ['Data Structures', 'Sorting', 'Searching'],
    verifyUrl: 'https://www.hackerrank.com/certificates/39a68d5bf0ae',
    accent: 'hsl(340 80% 65%)',
    gradient: 'from-pink-500/20 to-rose-500/10',
  },
  {
    title: 'CSS (Basic)',
    issuer: 'HackerRank',
    badge: 'HackerRank',
    description:
      'Verified skill certificate covering CSS selectors, layout, spacing, responsive styling, and visual presentation.',
    skills: ['CSS', 'Layout', 'Responsive Design'],
    verifyUrl: 'https://www.hackerrank.com/certificates/a1d3a48ffae6',
    accent: 'hsl(160 70% 55%)',
    gradient: 'from-emerald-500/20 to-teal-500/10',
  },
];
