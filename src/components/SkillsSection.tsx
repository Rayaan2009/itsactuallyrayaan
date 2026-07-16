import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';
import { SKILL_GROUPS, PLATFORMS, type SkillItem } from '@/lib/data';

function SkillBadge({ item, delay }: { item: SkillItem; delay: number }) {
  const Icon = item.icon;
  return (
    <span
      className={cn(
        'reveal relative inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium',
        'border border-white/10 bg-white/[0.045] text-foreground/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_24px_rgba(0,0,0,0.18)]',
        'hover:bg-white/[0.08] hover:border-primary/40 hover:text-foreground cursor-default',
        `reveal-delay-${Math.min(delay, 6)}`
      )}
      style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <Icon className={cn('h-4 w-4', item.accent)} aria-hidden="true" />
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
        <div className="mb-16 text-center">
          <div className="reveal inline-block px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Stack
          </div>
          <h2
            className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-gradient">Skills &amp; Toolkit</span>
          </h2>
          <p className="reveal reveal-delay-2 text-foreground/50 mt-4 max-w-md mx-auto">
            From low-level embedded C to AI in Python — the tools I use to turn ideas into systems.
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={group.category}
                className={cn(
                  'reveal glass glass-hover glass-noise relative isolate overflow-hidden rounded-2xl p-6',
                  `reveal-delay-${gi + 1}`
                )}
              >
                <div className="relative z-10 flex items-center gap-3 mb-1">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                    <GroupIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold tracking-wide text-foreground">
                    {group.category}
                  </h3>
                </div>
                <p className="relative z-10 text-xs text-foreground/45 mb-4 pl-12">{group.blurb}</p>
                <div className="relative z-10 flex flex-wrap gap-2">
                  {group.items.map((skill, si) => (
                    <SkillBadge key={skill.label} item={skill} delay={si + 1} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Platforms strip */}
        <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-foreground/35">
            Platforms
          </span>
          {PLATFORMS.map((p) => {
            const Icon = p.icon;
            return (
              <span key={p.label} className="inline-flex items-center gap-2 text-sm text-foreground/60">
                <Icon className={cn('h-4 w-4', p.accent)} aria-hidden="true" />
                {p.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
