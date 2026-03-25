import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { PROFILE_IMAGE_URL, PROFILE_SOCIAL_LINKS, getAgeOnBirthday } from '@/lib/profile';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub } from 'react-icons/si';

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);
  const age = getAgeOnBirthday(2009, 2, 26);

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
            <p className="reveal reveal-delay-2 text-foreground/60 leading-relaxed mb-5">
              I'm <strong className="text-foreground">Rayaan Bin Saifullah</strong>, a {age}-year-old
              student and developer passionate about technology, automation, and solving real-world
              problems through code and hardware.
            </p>

            {/* Highlights */}
            <ul className="reveal reveal-delay-3 text-foreground/60 leading-relaxed mb-5 space-y-2 list-none">
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>
                  Built a <strong className="text-foreground">Smart Home Automation System</strong> (voice-controlled with
                  Google Assistant & Alexa),{' '}
                  <em>2nd place in school competition</em>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>
                  Created an <strong className="text-foreground">Intelligent Security System</strong> with RFID/PIN access
                  and robotics, <em>1st place in school competition</em>.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>
                  Ranked <strong className="text-foreground">16,516 globally</strong> on HackerRank for Python
                  (score: 2302.13/2305) with 5 verified certificates.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1">▸</span>
                <span>
                  Completed <strong className="text-foreground">CS50's Introduction to Computer Science</strong> (Harvard's
                  verified certification).
                </span>
              </li>
            </ul>

            {/* Education */}
            <div className="reveal reveal-delay-4 glass rounded-2xl p-5 border-white/10 mb-8">
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Education</h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-2">
                <strong className="text-foreground">Doha Academy</strong> · Year 11 (IGCSE)
              </p>
              <p className="text-foreground/60 text-xs leading-relaxed mb-2">
                Subjects: Mathematics, Physics, Chemistry, Computer Science, ICT, Arabic, English
              </p>
              <p className="text-foreground/60 text-xs leading-relaxed">
                AS/A Level plans: Mathematics, Physics, Chemistry (+ Computer Science if needed)
              </p>
            </div>

            {/* Stats */}
            <div className="reveal reveal-delay-5 grid grid-cols-3 gap-4">
              {[
                { value: '1st', label: 'School Win' },
                { value: '16K+', label: 'HackerRank' },
                { value: '5', label: 'Certificates' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-4 text-center border-white/10"
                >
                  <div
                    className="text-2xl font-black text-primary mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-foreground/50 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Card */}
          <div className="reveal reveal-delay-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind card */}
              <div
                className="absolute inset-0 blur-3xl scale-75 opacity-40 animate-pulse-glow rounded-full"
                style={{ background: 'hsl(var(--primary) / 0.4)' }}
              />

              {/* Avatar glass card */}
              <div
                className="relative glass glass-noise rounded-3xl overflow-hidden"
                style={{ width: 300, height: 360 }}
              >
                {/* Gradient bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/10 to-background/60" />

                {/* Profile image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="mb-4 rounded-full border-2 border-primary/40 bg-gradient-to-br from-primary/20 to-primary/5 p-1.5 shadow-[0_0_40px_hsl(var(--primary)_/_0.18)]">
                    <img
                      src={PROFILE_IMAGE_URL}
                      alt="Rayaan Bin Saifullah"
                      className="h-28 w-28 rounded-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span
                    className="text-xl font-bold text-foreground/90 mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Rayaan Bin Saifullah
                  </span>
                  <span className="text-sm text-foreground/50">Student · Developer · Builder</span>

                  {/* Social links */}
                  <div className="flex gap-3 mt-6">
                    {[
                      { icon: SiGithub, href: PROFILE_SOCIAL_LINKS.github },
                      { icon: FaLinkedin, href: PROFILE_SOCIAL_LINKS.linkedin },
                    ].map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          'w-9 h-9 rounded-full glass border-white/15 flex items-center justify-center',
                          'text-xs font-bold text-foreground/60 hover:text-foreground hover:border-primary/40',
                          'transition-all'
                        )}
                        style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
                      >
                        <s.icon className="h-4 w-4" />
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
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-foreground/80 font-medium">Year 11 · Doha Academy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
