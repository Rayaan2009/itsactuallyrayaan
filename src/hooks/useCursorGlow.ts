import { useEffect } from 'react';

export function useCursorGlow() {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let rafId: number;
    let mouseX = -400;
    let mouseY = -400;
    let curX = -400;
    let curY = -400;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      curX += (mouseX - curX) * 0.08;
      curY += (mouseY - curY) * 0.08;
      glow.style.left = `${curX}px`;
      glow.style.top = `${curY}px`;
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
      document.body.removeChild(glow);
    };
  }, []);
}
