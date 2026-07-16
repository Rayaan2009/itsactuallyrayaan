import { useEffect } from 'react';
import { prefersReducedMotion, isCoarsePointer } from './useReducedMotion';

export function useCursorGlow() {
  useEffect(() => {
    // Skip entirely on touch devices and for reduced-motion users.
    if (isCoarsePointer() || prefersReducedMotion()) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.setAttribute('aria-hidden', 'true');
    document.body.appendChild(glow);

    let rafId = 0;
    let running = false;
    let mouseX = -400;
    let mouseY = -400;
    let curX = -400;
    let curY = -400;

    const animate = () => {
      curX += (mouseX - curX) * 0.08;
      curY += (mouseY - curY) * 0.08;
      glow.style.left = `${curX}px`;
      glow.style.top = `${curY}px`;

      // Idle once the glow has caught up with the pointer, restart on next move.
      if (Math.abs(mouseX - curX) < 0.5 && Math.abs(mouseY - curY) < 0.5) {
        running = false;
        return;
      }
      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!running) {
        running = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    document.addEventListener('mousemove', onMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      glow.remove();
    };
  }, []);
}
