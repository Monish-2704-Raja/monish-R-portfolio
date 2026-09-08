import React, { useEffect, useRef } from 'react';
import { useScroll } from '../context/ScrollContext';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  char?: string;
  isStream?: boolean;
}

const HEX_CHARS = '0123456789ABCDEF01';

export const DynamicBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollProgress, scrollVelocity } = useScroll();
  const { isDark } = useTheme();

  const progressRef = useRef(scrollProgress);
  const velocityRef = useRef(scrollVelocity);
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    progressRef.current = scrollProgress;
    velocityRef.current = scrollVelocity;
    isDarkRef.current = isDark;
  }, [scrollProgress, scrollVelocity, isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Initialize floating AI particles and data stream nodes
    const particles: Particle[] = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.2 + 1,
        alpha: Math.random() * 0.4 + 0.15,
        char: Math.random() > 0.6 ? HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)] : undefined,
        isStream: Math.random() > 0.8,
      });
    }

    let time = 0;

    const render = () => {
      animId = requestAnimationFrame(render);
      time += 0.008;

      const progress = progressRef.current;
      const velocity = velocityRef.current;
      const dark = isDarkRef.current;

      // React to velocity: speed boost and particle stretch
      const velocityFactor = Math.min(Math.abs(velocity) * 0.15, 3.5);

      ctx.clearRect(0, 0, width, height);

      // 1. Dynamic Morphing Radial Gradient Orbs based on scroll chapter
      // Orb 1: Core Primary (shifts from top-left to mid-right to center)
      const orb1X = width * (0.2 + Math.sin(time + progress * Math.PI * 2) * 0.25);
      const orb1Y = height * (0.2 + Math.cos(time * 0.8 + progress * Math.PI * 3) * 0.2);
      const orb1Radius = width * (0.35 + Math.sin(time * 0.5) * 0.05);

      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, orb1Radius);
      if (dark) {
        grad1.addColorStop(0, `rgba(59, 130, 246, ${0.12 + velocityFactor * 0.03})`);
        grad1.addColorStop(0.6, 'rgba(99, 102, 241, 0.04)');
        grad1.addColorStop(1, 'transparent');
      } else {
        grad1.addColorStop(0, `rgba(37, 99, 235, ${0.08 + velocityFactor * 0.02})`);
        grad1.addColorStop(0.6, 'rgba(56, 189, 248, 0.03)');
        grad1.addColorStop(1, 'transparent');
      }

      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Orb 2: Secondary Accent (shifts diagonally)
      const orb2X = width * (0.8 - Math.cos(time * 0.6 + progress * Math.PI) * 0.2);
      const orb2Y = height * (0.75 - Math.sin(time * 0.7 + progress * Math.PI * 2) * 0.2);
      const orb2Radius = width * (0.4 + Math.cos(time * 0.4) * 0.05);

      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, orb2Radius);
      if (dark) {
        grad2.addColorStop(0, `rgba(168, 85, 247, ${0.09 + velocityFactor * 0.02})`);
        grad2.addColorStop(0.7, 'rgba(147, 51, 234, 0.03)');
        grad2.addColorStop(1, 'transparent');
      } else {
        grad2.addColorStop(0, `rgba(147, 51, 234, ${0.06 + velocityFactor * 0.02})`);
        grad2.addColorStop(0.7, 'rgba(216, 180, 254, 0.02)');
        grad2.addColorStop(1, 'transparent');
      }

      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // 2. Multi-Layer Parallax Neural Connections between particles
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * (dark ? 0.12 : 0.08);
            ctx.strokeStyle = dark ? `rgba(96, 165, 250, ${alpha})` : `rgba(37, 99, 235, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Render Particles and Digital Characters
      ctx.font = '10px monospace';
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Velocity affects vertical motion
        p.x += p.vx;
        p.y += p.vy - velocity * 0.4;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        if (p.char) {
          ctx.fillStyle = dark
            ? `rgba(147, 197, 253, ${p.alpha * (dark ? 0.6 : 0.4)})`
            : `rgba(37, 99, 235, ${p.alpha * 0.4})`;
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.fillStyle = dark ? `rgba(96, 165, 250, ${p.alpha})` : `rgba(37, 99, 235, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * (1 + velocityFactor * 0.3), 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
