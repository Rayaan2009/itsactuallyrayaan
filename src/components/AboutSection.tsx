import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

export function AboutSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
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
              Hey, I'm <strong className="text-foreground">Rayaan</strong> — a
              full-stack developer and designer who loves turning complex problems
              into elegant, intuitive solutions.
            </p>
            <p className="reveal reveal-delay-3 text-foreground/60 leading-relaxed mb-5">
              I have a passion for creating digital experiences that don't just
              work well — they feel extraordinary. From architecting scalable
              backend systems to crafting pixel-perfect UIs, I bring care and
              craft to every layer of the stack.
            </p>
            <p className="reveal reveal-delay-4 text-foreground/60 leading-relaxed mb-8">
              When I'm not building, I'm exploring new technologies, contributing
              to open source, or obsessing over typography and motion design.
            </p>

            {/* Stats */}
            <div className="reveal reveal-delay-5 grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Years Exp.' },
                { value: '20+', label: 'Projects' },
                { value: '100%', label: 'Passion' },
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

          {/* Right — Visual Card */}
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

                {/* Avatar placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div
                    className="w-28 h-28 rounded-full mb-4 flex items-center justify-center text-4xl font-black border-2 border-primary/40"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--primary) / 0.1))',
                      fontFamily: 'Syne, sans-serif',
                    }}
                  >
                    <span className="text-gradient">R</span>
                  </div>
                  <span
                    className="text-xl font-bold text-foreground/90 mb-1"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Rayaan
                  </span>
                  <span className="text-sm text-foreground/50">Full Stack Dev · Designer</span>

                  {/* Social links */}
                  <div className="flex gap-3 mt-6">
                    {[
                      { label: 'GH', href: '#' },
                      { label: 'LI', href: '#' },
                      { label: 'TW', href: '#' },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className={cn(
                          'w-9 h-9 rounded-full glass border-white/15 flex items-center justify-center',
                          'text-xs font-bold text-foreground/60 hover:text-foreground hover:border-primary/40',
                          'transition-all'
                        )}
                        style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
                      >
                        {s.label}
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
                  <span className="text-foreground/80 font-medium">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
