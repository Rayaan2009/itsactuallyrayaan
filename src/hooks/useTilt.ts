import { useRef, useState, useCallback } from 'react';
import { prefersReducedMotion, isCoarsePointer } from './useReducedMotion';

interface TiltOptions {
  /** Maximum rotation in degrees. */
  max?: number;
}

/**
 * Pointer-driven 3D tilt shared by project & certificate cards.
 * No-ops on touch devices and when the user prefers reduced motion.
 */
export function useTilt<T extends HTMLElement>({ max = 8 }: TiltOptions = {}) {
  const ref = useRef<T>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const disabled = () => prefersReducedMotion() || isCoarsePointer();

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el || disabled()) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientY - rect.top) / rect.height - 0.5) * max;
      const y = -((e.clientX - rect.left) / rect.width - 0.5) * max;
      setTilt({ x, y });
    },
    [max]
  );

  const onMouseEnter = useCallback(() => {
    if (!disabled()) setActive(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setActive(false);
  }, []);

  const style: React.CSSProperties = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`,
    transition: active ? 'transform 0.1s linear' : 'transform 0.5s var(--ease-spring)',
    willChange: 'transform',
  };

  return { ref, style, onMouseMove, onMouseEnter, onMouseLeave };
}
