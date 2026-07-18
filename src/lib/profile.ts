export const PROFILE_IMAGE_URL = 'https://github.com/Rayaan2009.png?size=400';

export const PROFILE = {
  name: 'Rayaan Bin Saifullah',
  firstName: 'Rayaan',
  headline: 'AI + Software Engineering Student · Python, C & Web · IoT & AI',
  /** Short, punchy value statement used in the hero. */
  valueStatement:
    'I build systems where software meets hardware, from voice-controlled smart homes to AI-driven security, with a focus on clean engineering and problems worth solving.',
  roles: ['Software Engineer', 'IoT & AI Innovator', 'Competitive Programmer'],
  location: 'Doha, Qatar',
  education: {
    school: 'Doha Academy',
    year: 'Year 12 · A Levels',
    subjects: 'IGCSE completed: Mathematics, Physics, Chemistry, Computer Science, ICT, Arabic, English',
    future: 'A Level: Mathematics, Physics, Chemistry (+ Computer Science)',
  },
  /** Long-form about copy, one entry per paragraph. */
  about: [
    "I'm Rayaan Bin Saifullah, a Year 12 student at Doha Academy and an AI + software engineering student building real-world systems that combine software, hardware, and intelligent technologies. I specialise in Python, C, and IoT development, with a focus on clean engineering and problems worth solving.",
    'I have built several projects that combine hardware and software, including smart home automation systems that work with Google Assistant and Alexa, and intelligent security systems with RFID/PIN access, environmental sensors, and robotic interception vehicles. Two of them took 1st and 2nd place in school competitions.',
    'I am also a competitive programmer with strong algorithmic problem-solving skills. I have earned verified certificates in Python, CSS, and Problem Solving, and completed HarvardX programmes including CS50AI: Introduction to Artificial Intelligence with Python and the Professional Certificate in Computer Science for Artificial Intelligence.',
    'Having completed my IGCSEs, I am now preparing for my A Levels while deepening my work in artificial intelligence, IoT, robotics, and software engineering. My goal is to study Computer Science or Artificial Intelligence at university and build systems that bring software and hardware together.',
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
