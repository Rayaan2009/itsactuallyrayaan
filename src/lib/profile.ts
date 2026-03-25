export const PROFILE_IMAGE_URL = 'https://github.com/Rayaan2009.png?size=400';

export const PROFILE_SOCIAL_LINKS = {
  github: 'https://github.com/Rayaan2009',
  linkedin: 'https://www.linkedin.com/in/itsactuallyrayaan/',
  discord: 'https://discord.com/users/1456018726074847285',
  youtube: 'https://www.youtube.com/@itsactuallyrayaan',
  email: 'mailto:rayaanbinsaifullah2009@gmail.com',
};

export function getAgeOnBirthday(year: number, monthIndex: number, day: number) {
  const today = new Date();
  const birthdayThisYear = new Date(today.getFullYear(), monthIndex, day);
  const hasHadBirthdayThisYear = today >= birthdayThisYear;

  return today.getFullYear() - year - (hasHadBirthdayThisYear ? 0 : 1);
}