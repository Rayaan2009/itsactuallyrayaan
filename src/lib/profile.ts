export const PROFILE_IMAGE_URL = 'https://github.com/Rayaan2009.png?size=400';

export const PROFILE = {
  name: 'Rayaan Bin Saifullah',
  firstName: 'Rayaan',
  headline: 'Aspiring Software Engineer · Python & Web Developer · IoT & AI Innovator',
  /** Short, punchy value statement used in the hero. */
  valueStatement:
    'I build systems where software meets hardware, from voice-controlled smart homes to AI-driven security, with a focus on clean engineering and problems worth solving.',
  roles: ['Software Engineer', 'IoT & AI Innovator', 'Competitive Programmer'],
  location: 'Doha, Qatar',
  education: {
    school: 'Doha Academy',
    year: 'Year 11 · IGCSE',
    subjects: 'Mathematics, Physics, Chemistry, Computer Science, ICT, Arabic, English',
    future: 'AS/A Level: Mathematics, Physics, Chemistry (+ Computer Science)',
  },
  /** Long-form about copy, one entry per paragraph. */
  about: [
    "I'm Rayaan Bin Saifullah, a Year 11 student at Doha Academy and an aspiring software engineer with five years of programming experience. I specialise in Python, C, and IoT development, building systems that combine creativity with real-world problem-solving.",
    'I have built several projects that combine hardware and software, including smart home automation systems that work with Google Assistant and Alexa, and intelligent security systems with RFID/PIN access, environmental sensors, and robotic interception vehicles. Two of them took 1st and 2nd place in school competitions.',
    'I am also a competitive programmer with strong algorithmic problem-solving skills. I have earned verified certificates in Python, CSS, and Problem Solving, and completed HarvardX programmes including CS50AI: Introduction to Artificial Intelligence with Python and the Professional Certificate in Computer Science for Artificial Intelligence.',
    'Currently, I am completing my GCSEs while exploring artificial intelligence, IoT, robotics, and advanced software engineering concepts. My long-term goal is to study computer science or artificial intelligence at university and build technologies that make life smarter, safer, and more efficient.',
    'Outside technology, I enjoy street photography, sketching, and design experimentation.',
  ],
} as const;

export const PROFILE_SOCIAL_LINKS = {
  github: 'https://github.com/Rayaan2009',
  linkedin: 'https://www.linkedin.com/in/itsactuallyrayaan/',
  discord: 'https://discord.com/users/749278357149188136',
  youtube: 'https://www.youtube.com/@itsactuallyrayaan',
  email: 'mailto:rayaanbinsaifullah2009@gmail.com',
};

export function getAgeOnBirthday(year: number, monthIndex: number, day: number) {
  const today = new Date();
  const birthdayThisYear = new Date(today.getFullYear(), monthIndex, day);
  const hasHadBirthdayThisYear = today >= birthdayThisYear;

  return today.getFullYear() - year - (hasHadBirthdayThisYear ? 0 : 1);
}
