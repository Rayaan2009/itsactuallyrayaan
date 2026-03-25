import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { Code2, Database, FlaskConical, GraduationCap, MonitorCog } from 'lucide-react';
import { FaApple, FaCss3Alt, FaHtml5, FaLinux, FaPython, FaWindows } from 'react-icons/fa';
import { SiBootstrap, SiCanva, SiFlask, SiJavascript, SiSqlite } from 'react-icons/si';

type SkillItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
};

const skills = [
  {
    category: 'Languages',
    items: [
      { label: 'Python', icon: FaPython, accent: 'text-blue-300' },
      { label: 'C', icon: Code2, accent: 'text-sky-300' },
      { label: 'HTML5', icon: FaHtml5, accent: 'text-orange-300' },
      { label: 'CSS3', icon: FaCss3Alt, accent: 'text-cyan-300' },
      { label: 'JavaScript', icon: SiJavascript, accent: 'text-yellow-300' },
      { label: 'SQL', icon: SiSqlite, accent: 'text-emerald-300' },
    ],
  },
  {
    category: 'Frameworks & Tools',
    items: [
      { label: 'Bootstrap', icon: SiBootstrap, accent: 'text-fuchsia-300' },
      { label: 'Flask', icon: SiFlask, accent: 'text-slate-200' },
      { label: 'Canva', icon: SiCanva, accent: 'text-teal-300' },
    ],
  },
  {
    category: 'OS',
    items: [
      { label: 'macOS', icon: FaApple, accent: 'text-slate-200' },
      { label: 'Linux', icon: FaLinux, accent: 'text-amber-300' },
      { label: 'Windows', icon: FaWindows, accent: 'text-sky-300' },
    ],
  },
  {
    category: 'Subjects',
    items: [
      { label: 'Mathematics', icon: GraduationCap, accent: 'text-violet-300' },
      { label: 'Physics', icon: FlaskConical, accent: 'text-cyan-300' },
      { label: 'Chemistry', icon: FlaskConical, accent: 'text-emerald-300' },
      { label: 'Computer Science', icon: MonitorCog, accent: 'text-indigo-300' },
      { label: 'ICT', icon: Database, accent: 'text-rose-300' },
    ],
  },
];

function SkillBadge({ item, delay }: { item: SkillItem; delay: number }) {
  const Icon = item.icon;

  return (
    <span
      className={cn(
        'reveal relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium',
        'border border-white/10 bg-white/[0.045] text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.18)]',
        'hover:bg-white/[0.08] hover:border-primary/40 hover:text-foreground',
        'transition-all cursor-default',
        `reveal-delay-${Math.min(delay, 6)}`
      )}
      style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <Icon className={cn('h-4 w-4', item.accent)} />
      </span>
      <span>{item.label}</span>
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
            Stack
          </div>
          <h2
            className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-gradient">Tools, Systems & Studies</span>
          </h2>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className={cn(
                'reveal glass glass-hover glass-noise relative isolate overflow-hidden rounded-2xl p-6',
                `reveal-delay-${gi + 1}`
              )}
            >
              <h3 className="relative z-10 text-xs font-bold tracking-widest uppercase text-primary mb-4">
                {group.category}
              </h3>
              <div className="relative z-10 flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <SkillBadge
                    key={skill.label}
                    item={skill}
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
