import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'view' | 'drag' | 'sound'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor');
        if (type === 'view') setCursorType('view');
        else if (type === 'drag') setCursorType('drag');
        else if (type === 'sound') setCursorType('sound');
        else setCursorType('pointer');
        return;
      }

      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"]');
      if (isInteractive) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300 hidden md:block">
      {/* Central Precision Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-emerald-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />

      {/* Trailing Fluid Halo */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all duration-150 ease-out ${
          cursorType === 'view'
            ? 'w-20 h-20 bg-emerald-500 text-slate-950 font-mono font-black text-[10px] tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.6)]'
            : cursorType === 'drag'
            ? 'w-16 h-16 bg-cyan-500 text-slate-950 font-mono font-black text-[9px] tracking-widest shadow-[0_0_25px_rgba(6,182,212,0.6)]'
            : cursorType === 'sound'
            ? 'w-14 h-14 bg-violet-500 text-white font-mono font-bold text-[9px] shadow-[0_0_20px_rgba(139,92,246,0.6)]'
            : cursorType === 'pointer'
            ? 'w-10 h-10 border border-emerald-400/80 bg-emerald-500/15 backdrop-blur-xs scale-110'
            : 'w-7 h-7 border border-white/20 bg-white/5'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        {cursorType === 'view' && <span>VIEW</span>}
        {cursorType === 'drag' && <span>↔ SLIDE</span>}
        {cursorType === 'sound' && <span>AUDIO</span>}
      </div>
    </div>
  );
}
