import { useCursorGlow } from '@/hooks/useCursorGlow';
import { useRevealOnScroll } from '@/hooks/useScrollReveal';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { PROFILE, PROFILE_SOCIAL_LINKS } from '@/lib/profile';

const footerLinks = [
  { label: 'GitHub', href: PROFILE_SOCIAL_LINKS.github },
  { label: 'LinkedIn', href: PROFILE_SOCIAL_LINKS.linkedin },
  { label: 'Email', href: PROFILE_SOCIAL_LINKS.email },
];

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <p className="text-xs text-foreground/40">
          © {new Date().getFullYear()} {PROFILE.name}. Designed &amp; built with care.
        </p>
        <nav aria-label="Footer" className="flex items-center gap-5">
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={l.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-xs text-foreground/50 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default function Index() {
  useCursorGlow();
  useRevealOnScroll();

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background radial gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, hsl(265 89% 70% / 0.08) 0%, transparent 60%)',
        }}
      />

      <Navbar />

      <main className="relative z-10 animate-page-enter">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AchievementsSection />
        <Footer />
      </main>
    </div>
  );
}
