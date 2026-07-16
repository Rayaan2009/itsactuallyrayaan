import { useEffect, useRef } from 'react';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { useParallax } from '@/hooks/useParallax';
import { prefersReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import { PROFILE, PROFILE_IMAGE_URL, PROFILE_SOCIAL_LINKS } from '@/lib/profile';
import { FaLinkedin } from 'react-icons/fa6';
import { SiDiscord, SiGithub, SiGmail, SiYoutube } from 'react-icons/si';

function MagneticButton({
  href,
  children,
  variant = 'primary',
  className,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
}) {
  const { ref, onMouseMove, onMouseLeave } =
    useMagneticHover<HTMLAnchorElement>({ strength: 0.35 });

  return (
    <a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
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
        if (!href.startsWith('#')) return;
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {children}
    </a>
  );
}

const socialLinks = [
  { label: '@Rayaan2009', href: PROFILE_SOCIAL_LINKS.github, icon: SiGithub },
  { label: 'LinkedIn', href: PROFILE_SOCIAL_LINKS.linkedin, icon: FaLinkedin },
  { label: 'Discord', href: PROFILE_SOCIAL_LINKS.discord, icon: SiDiscord },
  { label: 'YouTube', href: PROFILE_SOCIAL_LINKS.youtube, icon: SiYoutube },
  { label: 'Email', href: PROFILE_SOCIAL_LINKS.email, icon: SiGmail },
];

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
      aria-hidden="true"
      style={{ width: size, height: size, background: color, ...style }}
    />
  );
}

export function HeroSection() {
  const orbRef = useParallax<HTMLDivElement>(0.2);
  const orb2Ref = useParallax<HTMLDivElement>(0.12);
  const containerRef = useRef<HTMLDivElement>(null);

  // Staggered entrance. Skips the stagger for reduced-motion users.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const reveals = el.querySelectorAll('.reveal');

    if (prefersReducedMotion()) {
      reveals.forEach((r) => r.classList.add('revealed'));
      return;
    }

    const timer = setTimeout(() => {
      reveals.forEach((r, i) => {
        setTimeout(() => r.classList.add('revealed'), i * 100);
      });
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16"
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
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black, transparent)',
        }}
      />

      {/* Content */}
      <div ref={containerRef} className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="reveal reveal-delay-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-xs font-medium text-foreground/70 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          Available for internships &amp; collaboration
        </div>

        <div className="reveal reveal-delay-2 mb-6 flex justify-center">
          <div className="glass rounded-full p-1.5 border border-white/10 shadow-[0_0_36px_hsl(var(--primary)_/_0.18)]">
            <img
              src={PROFILE_IMAGE_URL}
              alt={PROFILE.name}
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover object-top"
              fetchPriority="high"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="reveal reveal-delay-3 font-black leading-none tracking-tight mb-5"
          style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.75rem, 9vw, 6.5rem)' }}
        >
          <span className="text-gradient-shimmer">{PROFILE.name}</span>
        </h1>

        {/* Headline / roles */}
        <div className="reveal reveal-delay-4 flex items-center justify-center gap-x-3 gap-y-1 mb-6 flex-wrap">
          {PROFILE.roles.map((role, i) => (
            <span key={role} className="flex items-center gap-x-3">
              {i > 0 && <span className="text-foreground/30 text-xl">·</span>}
              <span
                className="text-base md:text-xl font-medium text-foreground/80"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {role}
              </span>
            </span>
          ))}
        </div>

        {/* Value statement */}
        <p className="reveal reveal-delay-5 text-base md:text-lg text-foreground/55 max-w-2xl mx-auto leading-relaxed mb-8">
          {PROFILE.valueStatement}
        </p>

        {/* Social links */}
        <div className="reveal reveal-delay-5 mb-9 flex flex-wrap items-center justify-center gap-2.5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              aria-label={label}
              className={cn(
                'glass glass-hover inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-foreground/75',
                'hover:text-foreground hover:border-primary/40'
              )}
              style={{ transition: 'all var(--dur-std) var(--ease-spring)' }}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* CTAs */}
        <div className="reveal reveal-delay-6 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#projects">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </MagneticButton>
          <MagneticButton
            href={PROFILE_SOCIAL_LINKS.github}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </MagneticButton>
        </div>

        {/* Scroll hint */}
        <div className="reveal reveal-delay-6 mt-16 flex flex-col items-center gap-2 text-foreground/30" aria-hidden="true">
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
