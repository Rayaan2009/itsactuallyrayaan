import { useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Project Alpha',
    description:
      'A full-stack SaaS platform with real-time collaboration, AI-powered features, and a seamless onboarding experience.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    color: 'from-violet-500/20 to-purple-500/10',
    accent: 'hsl(265 89% 70%)',
    link: '#',
    year: '2024',
  },
  {
    title: 'Design System',
    description:
      'A comprehensive design system and component library used across multiple products, with full Figma and code integration.',
    tags: ['TypeScript', 'Tailwind', 'Storybook', 'Figma'],
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: 'hsl(210 100% 65%)',
    link: '#',
    year: '2024',
  },
  {
    title: 'E-commerce Platform',
    description:
      'High-performance e-commerce solution handling 10k+ concurrent users with custom checkout flow and analytics dashboard.',
    tags: ['Next.js', 'Stripe', 'Supabase', 'Redis'],
    color: 'from-emerald-500/20 to-teal-500/10',
    accent: 'hsl(160 70% 55%)',
    link: '#',
    year: '2023',
  },
  {
    title: 'Mobile App',
    description:
      'Cross-platform mobile app with native animations, offline support, and deep OS integrations for iOS and Android.',
    tags: ['React Native', 'Expo', 'SQLite', 'Push Notifications'],
    color: 'from-pink-500/20 to-rose-500/10',
    accent: 'hsl(340 80% 65%)',
    link: '#',
    year: '2023',
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        'reveal glass glass-noise relative rounded-2xl overflow-hidden cursor-pointer group',
        `reveal-delay-${(index % 4) + 1}`
      )}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
        transition: hovered
          ? 'transform 0.1s linear'
          : 'transform 0.5s var(--ease-spring)',
        willChange: 'transform',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient header */}
      <div
        className={cn('h-36 bg-gradient-to-br relative overflow-hidden', project.color)}
      >
        {/* Glowing orb */}
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-24 h-24 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"
            style={{ background: project.accent }}
          />
        </div>
        {/* Year badge */}
        <span className="absolute top-4 right-4 text-xs font-mono text-white/50 bg-black/20 px-2 py-1 rounded-full">
          {project.year}
        </span>
      </div>

      <div className="p-6">
        <h3
          className="text-lg font-bold mb-2 group-hover:text-primary transition-colors"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-foreground/60 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href={project.link}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          style={{ transition: `gap var(--dur-std) var(--ease-spring)` }}
        >
          View Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Inner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: `inset 0 0 40px ${project.accent}20`,
          transition: `opacity var(--dur-std) var(--ease-apple)`,
        }}
      />
    </div>
  );
}

export function ProjectsSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal inline-block px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Work
          </div>
          <h2
            className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-gradient">Selected Projects</span>
          </h2>
          <p className="reveal reveal-delay-2 text-foreground/50 mt-4 max-w-md mx-auto">
            A curated selection of work spanning product, design, and engineering.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
