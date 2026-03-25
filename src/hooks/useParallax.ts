import { useEffect, useRef, RefObject } from 'react';

export function useParallax<T extends HTMLElement>(
  speed = 0.3
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    let rafId: number;
    let lastY = window.scrollY;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const y = window.scrollY;
      if (y !== lastY) {
        el.style.transform = `translateY(${y * speed}px) translateZ(0)`;
        lastY = y;
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return ref;
}
