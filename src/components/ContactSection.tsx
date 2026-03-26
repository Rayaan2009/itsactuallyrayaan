import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useMagneticHover } from '@/hooks/useMagneticHover';
import { cn } from '@/lib/utils';
import { PROFILE_SOCIAL_LINKS } from '@/lib/profile';

export function ContactSection() {
  const ref = useScrollReveal<HTMLElement>(0.1);
  const { ref: btnRef, onMouseMove, onMouseLeave } = useMagneticHover<HTMLButtonElement>({ strength: 0.3 });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal inline-block px-3 py-1 rounded-full glass border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Contact
          </div>
          <h2
            className="reveal reveal-delay-1 text-3xl md:text-5xl font-black tracking-tight"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-gradient">Let's Build Something</span>
          </h2>
          <p className="reveal reveal-delay-2 text-foreground/50 mt-4">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        {/* Form card */}
        <div className="reveal reveal-delay-3 glass glass-noise relative rounded-3xl p-8 border-white/10">
          {sent ? (
            <div className="text-center py-12">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl"
                style={{ background: 'hsl(var(--primary) / 0.2)', border: '1px solid hsl(var(--primary) / 0.4)' }}
              >
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Syne, sans-serif' }}>Message Sent!</h3>
              <p className="text-foreground/50">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-foreground/50 mb-2 tracking-wide uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={cn(
                      'w-full rounded-xl px-4 py-3 text-sm bg-white/5 border border-white/10',
                      'text-foreground placeholder:text-foreground/30',
                      'focus:outline-none focus:border-primary/50 focus:bg-white/8',
                      'transition-all'
                    )}
                    style={{ transition: `all var(--dur-std) var(--ease-apple)` }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/50 mb-2 tracking-wide uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={cn(
                      'w-full rounded-xl px-4 py-3 text-sm bg-white/5 border border-white/10',
                      'text-foreground placeholder:text-foreground/30',
                      'focus:outline-none focus:border-primary/50 focus:bg-white/8',
                      'transition-all'
                    )}
                    style={{ transition: `all var(--dur-std) var(--ease-apple)` }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground/50 mb-2 tracking-wide uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={cn(
                    'w-full rounded-xl px-4 py-3 text-sm bg-white/5 border border-white/10',
                    'text-foreground placeholder:text-foreground/30',
                    'focus:outline-none focus:border-primary/50 focus:bg-white/8',
                    'transition-all resize-none'
                  )}
                  style={{ transition: `all var(--dur-std) var(--ease-apple)` }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                ref={btnRef}
                type="submit"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className={cn(
                  'w-full py-4 rounded-xl text-sm font-bold',
                  'bg-primary text-primary-foreground',
                  'shadow-[0_0_30px_var(--glow-primary)] hover:shadow-[0_0_50px_var(--glow-primary-strong)]',
                  'hover:bg-primary/90 transition-all'
                )}
                style={{ transition: `all var(--dur-std) var(--ease-spring)` }}
              >
                Send Message
                <span className="ml-2">→</span>
              </button>
            </form>
          )}
        </div>

        {/* Social links */}
        <div className="reveal reveal-delay-4 flex items-center justify-center gap-4 mt-10">
          {[
            { label: 'GitHub', href: PROFILE_SOCIAL_LINKS.github },
            { label: 'LinkedIn', href: PROFILE_SOCIAL_LINKS.linkedin },
            { label: 'YouTube', href: PROFILE_SOCIAL_LINKS.youtube },
            { label: 'Email', href: PROFILE_SOCIAL_LINKS.email },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-foreground/40 hover:text-foreground transition-colors"
              style={{ transition: `color var(--dur-std) var(--ease-apple)` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
