import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';
import { cn } from '@/lib/utils';
import { PROJECTS, type Project } from '@/lib/data';

function CaseStudy({ problem, idea, result }: Pick<Project, 'problem' | 'idea' | 'result'>) {
  const rows = [
    { label: 'Problem', value: problem },
    { label: 'Idea', value: idea },
    { label: 'Result', value: result },
  ];
  return (
    <dl className="space-y-3 mb-5">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[76px_1fr] gap-3">
          <dt className="text-[11px] font-bold tracking-widest uppercase text-primary/80 pt-0.5">
            {row.label}
          </dt>
          <dd className="text-sm text-foreground/65 leading-relaxed">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, style, onMouseMove, onMouseEnter, onMouseLeave } = useTilt<HTMLElement>();
  const Icon = project.icon;

  return (
    <article
      ref={ref}
      className={cn(
        'reveal glass glass-noise relative rounded-2xl overflow-hidden group flex flex-col',
        `reveal-delay-${(index % 4) + 1}`
      )}
      style={style}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Gradient header */}
      <div className={cn('h-32 bg-gradient-to-br relative overflow-hidden', project.gradient)}>
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div
            className="w-24 h-24 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"
            style={{ background: project.accent }}
          />
        </div>
        <div
          className="absolute top-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl glass border-white/15"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5 text-foreground/85" />
        </div>
        <span className="absolute top-4 right-4 text-xs font-mono text-white/60 bg-black/25 px-2 py-1 rounded-full">
          {project.year}
        </span>
        {project.award && (
          <span className="absolute bottom-4 left-5 text-xs font-semibold text-white/90 bg-black/30 px-2.5 py-1 rounded-full">
            🏆 {project.award}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-lg font-bold mb-1 group-hover:text-primary transition-colors"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-foreground/50 mb-4">{project.tagline}</p>

        <CaseStudy problem={project.problem} idea={project.idea} result={project.result} />

        {/* Implementation */}
        <ul className="space-y-1.5 mb-5">
          {project.implementation.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-foreground/60 leading-snug">
              <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target={project.external ? '_blank' : undefined}
            rel={project.external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 w-fit"
            style={{ transition: `gap var(--dur-std) var(--ease-spring)` }}
          >
            {project.external ? 'Explore' : 'View project'}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>

      {/* Inner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        aria-hidden="true"
        style={{
          boxShadow: `inset 0 0 40px ${project.accent}20`,
          transition: `opacity var(--dur-std) var(--ease-apple)`,
        }}
      />
    </article>
  );
}

export function ProjectsSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
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
          <p className="reveal reveal-delay-2 text-foreground/50 mt-4 max-w-xl mx-auto">
            Case studies across IoT, AI, robotics, and competitive programming — each solving a
            real problem end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
