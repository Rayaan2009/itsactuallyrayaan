import { useEffect, useRef, RefObject } from 'react';
import { prefersReducedMotion, isCoarsePointer } from './useReducedMotion';

/**
 * Scroll-driven parallax translation. Only recomputes on scroll (throttled with
 * rAF) rather than every frame, and disables itself for reduced-motion / touch.
 */
export function useParallax<T extends HTMLElement>(speed = 0.3): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (prefersReducedMotion() || isCoarsePointer()) return;

    let rafId = 0;
    let ticking = false;

    const apply = () => {
      const el = ref.current;
      if (el) el.style.transform = `translateY(${window.scrollY * speed}px) translateZ(0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed]);

  return ref;
}
