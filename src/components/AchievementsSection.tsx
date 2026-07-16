import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTilt } from '@/hooks/useTilt';
import { cn } from '@/lib/utils';
import { CERTIFICATES, type Certificate } from '@/lib/data';

function VerifiedBadge() {
  return (
    <div className="flex items-center gap-1.5 text-xs text-white/70 font-medium">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l2.4 1.7 2.9-.2 1 2.8 2.4 1.7-.9 2.8.9 2.8-2.4 1.7-1 2.8-2.9-.2L12 22l-2.4-1.7-2.9.2-1-2.8L3.3 16l.9-2.8L3.3 10.4l2.4-1.7 1-2.8 2.9.2z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
      Verified
    </div>
  );
}

function CertCard({ cert, index }: { cert: Certificate; index: number }) {
  const { ref, style, onMouseMove, onMouseEnter, onMouseLeave } = useTilt<HTMLElement>();
  const href = cert.verifyUrl;

  return (
    <article
      ref={ref}
      className={cn(
        'reveal glass glass-noise relative rounded-2xl overflow-hidden group flex flex-col',
        cert.featured && 'md:col-span-1 ring-1 ring-primary/25',
        `reveal-delay-${(index % 4) + 1}`
      )}
      style={style}
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Gradient header */}
      <div className={cn('h-28 bg-gradient-to-br relative overflow-hidden', cert.gradient)}>
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <div
            className="w-20 h-20 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"
            style={{ background: cert.accent }}
          />
        </div>
        <span className="absolute top-4 right-4 text-xs font-mono text-white/70 bg-black/25 px-2 py-1 rounded-full">
          {cert.badge}
        </span>
        <div className="absolute bottom-4 left-5">
          <VerifiedBadge />
        </div>
        {cert.featured && (
          <span className="absolute top-4 left-5 text-[10px] font-bold tracking-widest uppercase text-white/90 bg-primary/40 px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-1">
          {cert.issuer}
        </p>
        <h3
          className="text-base font-bold mb-2 group-hover:text-primary transition-colors leading-snug"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {cert.title}
        </h3>
        <p className="text-sm text-foreground/60 leading-relaxed mb-4">{cert.description}</p>

        {/* Skills gained */}
        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/60"
            >
              {skill}
            </span>
          ))}
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 w-fit"
            style={{ transition: `gap var(--dur-std) var(--ease-spring)` }}
          >
            Verify certificate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        )}
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
        aria-hidden="true"
        style={{
          boxShadow: `inset 0 0 40px ${cert.accent}20`,
          transition: `opacity var(--dur-std) var(--ease-apple)`,
        }}
      />
    </article>
  );
}

export function AchievementsSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="certificates" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div className="reveal inline-block px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Credentials
          </div>
          <h2
            className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-gradient">Certificates &amp; Awards</span>
          </h2>
          <p className="reveal reveal-delay-2 text-foreground/50 mt-4 max-w-md mx-auto">
            HarvardX AI programmes and verified skill certificates, all with public verification links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
