import { useRef, useCallback, RefObject } from 'react';

interface MagneticOptions {
  strength?: number; // 0-1, default 0.4
}

export function useMagneticHover<T extends HTMLElement>(
  options: MagneticOptions = {}
): {
  ref: RefObject<T>;
  onMouseMove: (e: React.MouseEvent<T>) => void;
  onMouseLeave: () => void;
} {
  const ref = useRef<T>(null);
  const strength = options.strength ?? 0.4;

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      el.style.transform = `translate(${deltaX}px, ${deltaY}px) translateZ(0)`;
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0) translateZ(0)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
