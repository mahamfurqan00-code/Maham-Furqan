import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function Cursor3D() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [velocity, setVelocity] = useState({ vx: 0, vy: 0 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    let lastX = -100;
    let lastY = -100;
    let lastTime = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const vx = (e.clientX - lastX) / dt;
      const vy = (e.clientY - lastY) / dt;

      setMousePosition({ x: e.clientX, y: e.clientY });
      setVelocity({ vx: vx * 15, vy: vy * 15 });
      setIsVisible(true);

      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.cursor-pointer') ||
          target.closest('[data-clickable="true"]')
        );
        setIsHoveringClickable(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  const rotX = Math.max(-45, Math.min(45, -velocity.vy * 1.5));
  const rotY = Math.max(-45, Math.min(45, velocity.vx * 1.5));

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden no-print">
      {/* Central 3D Cursor Dot with Peach Glow */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-[#FB923C] shadow-[0_0_12px_#FB923C]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHoveringClickable ? 1.8 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 450,
          mass: 0.1,
        }}
      />

      {/* 3D Rotating Orbital Ring in Warm Coral/Rose */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#FDA4AF]/60 shadow-[0_0_15px_rgba(251,146,60,0.3)]"
        style={{
          transformStyle: 'preserve-3d',
          perspective: 600,
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          rotateX: rotX,
          rotateY: rotY,
          rotateZ: isHoveringClickable ? 180 : 45,
          scale: isHoveringClickable ? 1.5 : 1,
          borderColor: isHoveringClickable ? '#FB923C' : 'rgba(253,164,175,0.6)',
        }}
        transition={{
          type: 'spring',
          damping: 24,
          stiffness: 260,
          mass: 0.2,
        }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FED7AA]" />
      </motion.div>
    </div>
  );
}
