import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
}

export default function ThreeDBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates in normalized [-1, 1] range
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / width) * 2 - 1;
      mouseY = (e.clientY / height) * 2 - 1;
      targetRotY = mouseX * 0.45;
      targetRotX = -mouseY * 0.45;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Create 3D particles in a spherical/spatial distribution matching Peach & Coral scheme
    const particleCount = Math.min(65, Math.floor(width / 24));
    const particles: Particle[] = [];
    const colors = ['#FB923C', '#FDA4AF', '#F59E0B', '#FED7AA', '#F97316'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.2,
        y: (Math.random() - 0.5) * height * 1.2,
        z: (Math.random() - 0.5) * 600,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const fov = 450;

    const render = () => {
      currentRotX += (targetRotX - currentRotX) * 0.05;
      currentRotY += (targetRotY - currentRotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      const projected: Array<{ px: number; py: number; pz: number; p: Particle; alpha: number }> = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        const boundX = (width * 1.2) / 2;
        const boundY = (height * 1.2) / 2;
        if (Math.abs(p.x) > boundX) p.vx *= -1;
        if (Math.abs(p.y) > boundY) p.vy *= -1;
        if (Math.abs(p.z) > 300) p.vz *= -1;

        let x1 = p.x * cosY + p.z * sinY;
        let z1 = -p.x * sinY + p.z * cosY;

        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        const distance = fov + z2;
        if (distance > 30) {
          const scale = fov / distance;
          const px = cx + x1 * scale;
          const py = cy + y2 * scale;
          const alpha = Math.max(0.1, Math.min(0.7, (z2 + 300) / 600));

          projected.push({ px, py, pz: z2, p, alpha });

          ctx.beginPath();
          ctx.arc(px, py, Math.max(0.8, p.size * scale), 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha * 0.65;
          ctx.fill();
        }
      }

      // Draw 3D connecting lines between nearest neighbors in peach
      const maxDistance = 140;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.px - p2.px;
          const dy = p1.py - p2.py;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.15 * Math.min(p1.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p1.px, p1.py);
            ctx.lineTo(p2.px, p2.py);
            ctx.strokeStyle = '#FB923C';
            ctx.globalAlpha = lineAlpha;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
}
