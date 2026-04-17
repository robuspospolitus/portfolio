import React, { useEffect, useRef } from "react";
import './MovingCard.scss';

type MovingCardProps = {
    className?: string,
    style?: React.CSSProperties,
    children?: React.ReactNode,
    noBorder?: boolean
}
export default function MovingCard({className="", style, children, noBorder=false}:MovingCardProps) {
    const ref = useHoverMove();
    return (
      <div className="box-shadow" style={style}>
        <div ref={ref} className={`show-off-container pixel-corners ${className}`} style={noBorder ? {padding:0} : {}}>
          {children}
        </div>
      </div>
    )
}

function useHoverMove() {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.1;
      current.current.y += (target.current.y - current.current.y) * 0.1;
      el.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;

      if (Math.abs(current.current.x) < 0.01 &&
        Math.abs(current.current.y) < 0.01 &&
        target.current.x === 0 &&
        target.current.y === 0) {
        rafId.current = null;
        return;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    const startAnimation = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(animate);
      }
    };
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      target.current.x = (e.clientX - rect.width / 2 - rect.left) / 10;
      target.current.y = (e.clientY - rect.height / 2 - rect.top) / 10;
      startAnimation();
    };
    const handleLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
      startAnimation();
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return ref;
}