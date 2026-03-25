import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'REST APIs', 'GraphQL'] },
  { category: 'Design', items: ['Figma', 'UI/UX', 'Motion Design', 'Prototyping', 'Design Systems'] },
  { category: 'Tools', items: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Linux'] },
];

function SkillBadge({ label, delay }: { label: string; delay: number }) {
  return (
    <span
      className={cn(
        'reveal inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium',
        'glass border-white/10 text-foreground/80',
        'hover:bg-white/10 hover:border-primary/40 hover:text-foreground',
        'transition-all cursor-default',
        `reveal-delay-${Math.min(delay, 6)}`
      )}
      style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
    >
      {label}
    </span>
  );
}

export function SkillsSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal inline-block px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Skills
          </div>
          <h2
            className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-gradient">What I Work With</span>
          </h2>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={cn(
                'reveal glass glass-hover glass-noise relative rounded-2xl p-6',
                `reveal-delay-${gi + 1}`
              )}
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <SkillBadge
                    key={skill}
                    label={skill}
                    delay={si + 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
