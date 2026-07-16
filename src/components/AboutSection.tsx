import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { PROFILE, PROFILE_IMAGE_URL, PROFILE_SOCIAL_LINKS } from '@/lib/profile';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

const highlights = [
  {
    title: 'Smart Home Automation',
    detail: 'Voice-controlled home hub for Google Assistant & Alexa.',
    result: '2nd place · school competition',
  },
  {
    title: 'Intelligent Security System',
    detail: 'RFID/PIN access, environmental sensors & a robotic interception vehicle.',
    result: '1st place · school competition',
  },
  {
    title: 'HarvardX AI Programmes',
    detail: 'CS50AI and the Professional Certificate in Computer Science for AI.',
    result: 'Completed · verified',
  },
  {
    title: 'Competitive Programming',
    detail: 'Verified Python, CSS & Problem Solving certificates.',
    result: 'Up to Intermediate',
  },
];

const stats = [
  { value: '5 yrs', label: 'Programming' },
  { value: '1st & 2nd', label: 'Competition wins' },
  { value: '7', label: 'Certificates' },
];

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <div>
            <div className="reveal inline-block px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              About Me
            </div>
            <h2
              className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight mb-6"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="text-gradient">Building things</span>
              <br />
              <span className="text-foreground/80">that matter.</span>
            </h2>

            <p className="reveal reveal-delay-2 text-foreground/60 leading-relaxed mb-4">
              {PROFILE.about[0]}
            </p>
            <p className="reveal reveal-delay-2 text-foreground/60 leading-relaxed mb-6">
              {PROFILE.about[3]}
            </p>

            {/* Highlights */}
            <ul className="reveal reveal-delay-3 space-y-3 mb-8 list-none">
              {highlights.map((h) => (
                <li
                  key={h.title}
                  className="flex gap-3 items-start rounded-xl glass border-white/10 px-4 py-3"
                >
                  <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">▸</span>
                  <div>
                    <p className="text-sm">
                      <strong className="text-foreground">{h.title}</strong>
                      <span className="text-foreground/60">: {h.detail}</span>
                    </p>
                    <p className="text-xs text-primary/80 font-medium mt-0.5">{h.result}</p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="reveal reveal-delay-5 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center border-white/10">
                  <div
                    className="text-xl md:text-2xl font-black text-primary mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/50 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual card + education */}
          <div className="reveal reveal-delay-2 flex flex-col items-center lg:items-end gap-8">
            <div className="relative">
              {/* Glow behind card */}
              <div
                className="absolute inset-0 blur-3xl scale-75 opacity-40 animate-pulse-glow rounded-full"
                aria-hidden="true"
                style={{ background: 'hsl(var(--primary) / 0.4)' }}
              />

              {/* Avatar glass card */}
              <div
                className="relative glass glass-noise rounded-3xl overflow-hidden"
                style={{ width: 300, height: 340 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/10 to-background/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <div className="mb-4 rounded-full border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-primary/5 p-1.5 shadow-[0_0_40px_hsl(var(--primary)_/_0.18)]">
                    <img
                      src={PROFILE_IMAGE_URL}
                      alt={PROFILE.name}
                      width={112}
                      height={112}
                      loading="lazy"
                      className="h-28 w-28 rounded-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span
                    className="text-xl font-bold text-foreground/90 mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {PROFILE.name}
                  </span>
                  <span className="text-sm text-foreground/50">
                    Software · IoT · AI
                  </span>

                  <div className="flex gap-3 mt-6">
                    {[
                      { icon: SiGithub, href: PROFILE_SOCIAL_LINKS.github, label: 'GitHub' },
                      { icon: FaLinkedin, href: PROFILE_SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
                    ].map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={cn(
                          'w-9 h-9 rounded-full glass border-white/15 flex items-center justify-center',
                          'text-foreground/60 hover:text-foreground hover:border-primary/40'
                        )}
                        style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
                      >
                        <s.icon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating status badge */}
              <div
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 border-white/15"
                style={{ animation: 'float 5s ease-in-out infinite' }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <span className="text-foreground/80 font-medium">{PROFILE.education.year}</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="reveal reveal-delay-4 glass rounded-2xl p-5 border-white/10 w-full max-w-sm">
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                Education
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-2">
                <strong className="text-foreground">{PROFILE.education.school}</strong> ·{' '}
                {PROFILE.education.year}
              </p>
              <p className="text-foreground/60 text-xs leading-relaxed mb-2">
                Subjects: {PROFILE.education.subjects}
              </p>
              <p className="text-foreground/60 text-xs leading-relaxed">
                {PROFILE.education.future}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
