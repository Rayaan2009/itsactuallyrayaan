import { useEffect, useRef } from 'react';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { useParallax } from '@/hooks/useParallax';
import { cn } from '@/lib/utils';

function MagneticButton({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}) {
  const { ref, onMouseMove, onMouseLeave } =
    useMagneticHover<HTMLAnchorElement>({ strength: 0.35 });

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: `transform var(--dur-std) var(--ease-spring)` }}
      className={cn(
        'inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold',
        'transition-shadow',
        variant === 'primary'
          ? 'bg-primary text-primary-foreground shadow-[0_0_30px_var(--glow-primary)] hover:shadow-[0_0_50px_var(--glow-primary-strong)] hover:bg-primary/90'
          : 'glass border-white/15 text-foreground hover:bg-white/10 hover:border-white/25',
        className
      )}
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </a>
  );
}

// Animated orb blob
function Orb({
  size,
  color,
  style,
  className,
}: {
  size: number;
  color: string;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={cn('absolute rounded-full blur-3xl animate-pulse-glow pointer-events-none', className)}
      style={{
        width: size,
        height: size,
        background: color,
        ...style,
      }}
    />
  );
}

export function HeroSection() {
  const orbRef = useParallax<HTMLDivElement>(0.2);
  const orb2Ref = useParallax<HTMLDivElement>(0.12);
  const containerRef = useRef<HTMLDivElement>(null);

  // Entrance animation trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = containerRef.current;
      if (el) {
        el.querySelectorAll('.reveal').forEach((r, i) => {
          setTimeout(() => r.classList.add('revealed'), i * 100);
        });
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Parallax background orbs */}
      <div ref={orbRef} className="absolute inset-0 pointer-events-none">
        <Orb
          size={600}
          color="hsl(265 89% 70% / 0.12)"
          style={{ top: '10%', left: '50%', transform: 'translateX(-50%)' }}
        />
      </div>
      <div ref={orb2Ref} className="absolute inset-0 pointer-events-none">
        <Orb
          size={400}
          color="hsl(220 80% 60% / 0.10)"
          style={{ bottom: '15%', right: '10%' }}
          className="animate-float"
        />
        <Orb
          size={280}
          color="hsl(300 80% 70% / 0.07)"
          style={{ top: '25%', left: '8%' }}
          className="animate-blob"
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }}
      />

      {/* Content */}
      <div ref={containerRef} className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="reveal reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-medium text-foreground/70 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          Available for work
        </div>

        {/* Name */}
        <h1
          className="reveal reveal-delay-2 font-black leading-none tracking-tight mb-4"
          style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 10vw, 7rem)' }}
        >
          <span className="text-gradient-shimmer">Rayaan</span>
        </h1>

        {/* Title */}
        <div className="reveal reveal-delay-3 flex items-center justify-center gap-3 mb-6">
          <span
            className="text-lg md:text-2xl font-medium text-foreground/80"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Full Stack Developer
          </span>
          <span className="text-foreground/30 text-xl">·</span>
          <span className="text-lg md:text-2xl font-medium text-foreground/80">
            UI/UX Designer
          </span>
        </div>

        {/* Description */}
        <p className="reveal reveal-delay-4 text-base md:text-lg text-foreground/55 max-w-xl mx-auto leading-relaxed mb-10">
          I craft beautiful, performant digital experiences — from pixel-perfect
          interfaces to scalable backend systems. Passionate about clean code and
          bold design.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-5 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#projects">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </MagneticButton>
          <MagneticButton href="#contact" variant="outline">
            Get In Touch
          </MagneticButton>
        </div>

        {/* Scroll hint */}
        <div className="reveal reveal-delay-6 mt-20 flex flex-col items-center gap-2 text-foreground/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, hsl(var(--primary) / 0.6), transparent)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
