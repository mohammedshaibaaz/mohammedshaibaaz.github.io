import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface Ripple {
  x: number;
  y: number;
  size: number;
  opacity: number;
  createdAt: number;
  id: number;
}

interface CursorPosition {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0, vx: 0, vy: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const ripplesRef = useRef<Ripple[]>([]);
  const animationFrameRef = useRef<number>();
  const lastPosRef = useRef({ x: 0, y: 0 });
  const rippleIdRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mass-Spring-Damping physics constants
    const MASS = 1;
    const STIFFNESS = 0.15;
    const DAMPING = 0.25;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let velocityX = 0;
    let velocityY = 0;
    let lastRippleTime = 0;
    const RIPPLE_INTERVAL = 50; // ms between ripples

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button']");
      setIsHovering(!!isInteractive);
    };

    // Animation loop
    const animate = (timestamp: number) => {
      if (!ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spring physics for smooth cursor movement
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      const forceX = dx * STIFFNESS;
      const forceY = dy * STIFFNESS;
      
      velocityX += forceX / MASS;
      velocityY += forceY / MASS;
      
      velocityX *= (1 - DAMPING);
      velocityY *= (1 - DAMPING);
      
      currentX += velocityX;
      currentY += velocityY;

      // Create ripple trail
      const speed = Math.sqrt(velocityX * velocityX + velocityY * velocityY);
      if (speed > 0.5 && timestamp - lastRippleTime > RIPPLE_INTERVAL) {
        ripplesRef.current.push({
          x: currentX,
          y: currentY,
          size: 0,
          opacity: 0.15,
          createdAt: timestamp,
          id: rippleIdRef.current++
        });
        lastRippleTime = timestamp;
      }

      // Update and render ripples
      ctx.save();
      ctx.filter = "blur(4px)";
      ctx.globalCompositeOperation = "screen";

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        const age = timestamp - ripple.createdAt;
        const duration = 600;
        
        if (age > duration) return false;

        const progress = age / duration;
        ripple.size = progress * 40;
        ripple.opacity = 0.15 * (1 - progress);

        // Draw organic ripple (slightly irregular)
        const points = 8;
        ctx.beginPath();
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const randomOffset = Math.sin(angle * 3 + ripple.id) * 2;
          const radius = ripple.size + randomOffset;
          const x = ripple.x + Math.cos(angle) * radius;
          const y = ripple.y + Math.sin(angle) * radius;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(226, 232, 240, ${ripple.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        return true;
      });

      ctx.restore();

      // Draw cursor (only if not hovering)
      if (!isHovering) {
        // Outer aura (15px at 10% opacity)
        ctx.beginPath();
        ctx.arc(currentX, currentY, 15, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fill();

        // Core dot (2px white)
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
      }

      setCursorPos({ x: currentX, y: currentY, vx: velocityX, vy: velocityY });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovering]);

  // Attract & Frame effect for interactive elements
  useEffect(() => {
    if (!isHovering) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button']");
      if (interactive instanceof HTMLElement) {
        interactive.style.outline = "2px solid rgba(226, 232, 240, 0.3)";
        interactive.style.outlineOffset = "4px";
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button']");
      if (interactive instanceof HTMLElement) {
        interactive.style.outline = "";
        interactive.style.outlineOffset = "";
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isHovering]);

  return (
    <>
      {/* Canvas overlay for ripples */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
