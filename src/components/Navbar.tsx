import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useMagneticHover } from '@/hooks/useMagneticHover';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

function MagneticNavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagneticHover<HTMLAnchorElement>({
    strength: 0.25,
  });

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: `transform var(--dur-std) var(--ease-spring)` }}
      className={cn(
        'relative px-4 py-2 rounded-full text-sm font-medium transition-all',
        'text-foreground/70 hover:text-foreground',
        active
          ? 'text-foreground bg-white/10 border border-white/15 shadow-[0_0_16px_var(--glow-primary)]'
          : 'hover:bg-white/[0.06] border border-transparent hover:border-white/10'
      )}
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      {label}
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['about', 'projects', 'skills', 'achievements', 'contact'];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(`#${id}`);
          return;
        }
      }
      setActiveSection('');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 flex justify-center px-4 animate-nav-reveal',
        scrolled ? 'pt-3' : 'pt-5'
      )}
    >
      <nav
        className={cn(
          'glass glass-noise relative flex items-center gap-1 rounded-full transition-all overflow-hidden',
          scrolled
            ? 'px-3 py-2 gap-0.5 shadow-[0_8px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.07)_inset]'
            : 'px-4 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)_inset]'
        )}
        style={{ transition: `all var(--dur-std) var(--ease-apple)` }}
      >
        {/* Logo */}
        <a
          href="#"
          className="mr-3 px-3 py-1.5 font-bold text-base tracking-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-gradient">R.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <MagneticNavLink
              key={link.href}
              {...link}
              active={activeSection === link.href}
            />
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className={cn(
            'hidden md:inline-flex ml-3 items-center px-4 py-2 rounded-full text-sm font-semibold',
            'bg-primary/90 text-primary-foreground',
            'hover:bg-primary shadow-[0_0_20px_var(--glow-primary)]',
            'hover:shadow-[0_0_30px_var(--glow-primary-strong)]',
            'transition-all'
          )}
          style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-2 p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              'block w-5 h-0.5 bg-foreground/80 transition-all',
              mobileOpen && 'rotate-45 translate-y-1.5'
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-foreground/80 mt-1 transition-all',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 bg-foreground/80 mt-1 transition-all',
              mobileOpen && '-rotate-45 -translate-y-1.5'
            )}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="absolute top-full mt-2 left-4 right-4 glass rounded-2xl p-4 flex flex-col gap-1 md:hidden"
          style={{ animation: 'page-enter 0.2s var(--ease-out) forwards' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                activeSection === link.href
                  ? 'bg-white/10 text-foreground'
                  : 'text-foreground/70 hover:text-foreground hover:bg-white/[0.06]'
              )}
              onClick={(e) => {
                e.preventDefault();
                setMobileOpen(false);
                const target = document.querySelector(link.href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-4 py-3 rounded-xl text-sm font-semibold bg-primary/90 text-primary-foreground text-center"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
