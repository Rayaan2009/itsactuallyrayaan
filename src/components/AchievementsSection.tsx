import { useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

const certificates = [
  {
    title: "CS50's Introduction to Computer Science",
    issuer: 'Harvard University (edX)',
    description: 'Verified certificate from Harvard\'s renowned introductory computer science course, covering algorithms, data structures, web development, and more.',
    link: 'https://courses.edx.org/certificates/cfd642062ecd466faf347bc64f18cbe4',
    color: 'from-violet-500/20 to-purple-500/10',
    accent: 'hsl(265 89% 70%)',
    badge: 'Harvard',
  },
  {
    title: 'Python (Basic)',
    issuer: 'HackerRank',
    description: 'Verified skill certificate for Python fundamentals including data types, control flow, functions, and standard library usage.',
    link: 'https://www.hackerrank.com/certificates/7fd2b6f079b3',
    color: 'from-blue-500/20 to-cyan-500/10',
    accent: 'hsl(210 100% 65%)',
    badge: 'HackerRank',
  },
  {
    title: 'CSS (Basic)',
    issuer: 'HackerRank',
    description: 'Verified skill certificate covering CSS fundamentals including selectors, layout, spacing, responsive styling, and visual presentation.',
    link: 'https://www.hackerrank.com/certificates/a1d3a48ffae6',
    color: 'from-emerald-500/20 to-teal-500/10',
    accent: 'hsl(160 70% 55%)',
    badge: 'HackerRank',
  },
  {
    title: 'Problem Solving (Basic)',
    issuer: 'HackerRank',
    description: 'Verified skill certificate in algorithmic problem solving, covering data structures, sorting, and searching algorithms.',
    link: 'https://www.hackerrank.com/certificates/39a68d5bf0ae',
    color: 'from-pink-500/20 to-rose-500/10',
    accent: 'hsl(340 80% 65%)',
    badge: 'HackerRank',
  },
  {
    title: 'Problem Solving (Intermediate)',
    issuer: 'HackerRank',
    description: 'Verified skill certificate for intermediate problem solving covering dynamic programming, graph traversal, and complex algorithms.',
    link: 'https://www.hackerrank.com/certificates/54bb17bea4dc',
    color: 'from-amber-500/20 to-orange-500/10',
    accent: 'hsl(35 95% 60%)',
    badge: 'HackerRank',
  },
];

function CertCard({
  cert,
  index,
}: {
  cert: (typeof certificates)[0];
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
        className={cn('h-28 bg-gradient-to-br relative overflow-hidden', cert.color)}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-opacity"
            style={{ background: cert.accent }}
          />
        </div>
        {/* Issuer badge */}
        <span className="absolute top-4 right-4 text-xs font-mono text-white/60 bg-black/20 px-2 py-1 rounded-full">
          {cert.badge}
        </span>
        {/* Certificate icon */}
        <div className="absolute bottom-4 left-5 flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
          <span className="text-xs text-white/60 font-medium">Verified</span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-1">
          {cert.issuer}
        </p>
        <h3
          className="text-lg font-bold mb-2 group-hover:text-primary transition-colors"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {cert.title}
        </h3>
        <p className="text-sm text-foreground/60 leading-relaxed mb-4">
          {cert.description}
        </p>

        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
          style={{ transition: `gap var(--dur-std) var(--ease-spring)` }}
        >
          View Certificate
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>

      {/* Inner glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: `inset 0 0 40px ${cert.accent}20`,
          transition: `opacity var(--dur-std) var(--ease-apple)`,
        }}
      />
    </div>
  );
}

export function AchievementsSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);

  return (
    <section id="achievements" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal inline-block px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Achievements
          </div>
          <h2
            className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-gradient">Certificates & Awards</span>
          </h2>
          <p className="reveal reveal-delay-2 text-foreground/50 mt-4 max-w-md mx-auto">
            Verified certifications and competition wins that reflect my dedication to continuous learning.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
