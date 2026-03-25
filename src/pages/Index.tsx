import { useEffect } from 'react';
import { useCursorGlow } from '@/hooks/useCursorGlow';
import { useRevealOnScroll } from '@/hooks/useScrollReveal';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { AchievementsSection } from '@/components/AchievementsSection';

function Footer() {
  return (
    <footer className="py-10 px-6 text-center border-t border-white/5">
      <p className="text-xs text-foreground/30">
        © {new Date().getFullYear()} Rayaan. Crafted with care.
      </p>
    </footer>
  );
}

export default function Index() {
  useCursorGlow();
  useRevealOnScroll();

  // Page entrance animation
  useEffect(() => {
    document.body.style.animation = 'page-enter 0.5s var(--ease-out) forwards';
    return () => {
      document.body.style.animation = '';
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Background radial gradient */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
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
