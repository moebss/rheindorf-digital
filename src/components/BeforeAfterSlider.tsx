import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, AlertTriangle, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import userImg1 from '../images/media_1786244763224.png';
import userImg4 from '../images/media_1786372914462.png';

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <section id="transformation" className="py-24 sm:py-32 bg-[#04060A] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[450px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Plexify Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="plexify-pill text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Vorher / Nachher Transformation</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
            Veraltetes WordPress vs. <br />
            <span className="text-emerald-400">Rheindorf High-End System</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Ziehe den Schieberegler, um den radikalen Unterschied zwischen einer trägen Alt-Website und einer kaufstarken React-Präsenz zu sehen.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/15 select-none cursor-ew-resize touch-none bg-[#080C14]"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER: Rheindorf Digital High-End System (Right Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={userImg4}
                alt="Rheindorf Digital High-End Relaunch"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute top-4 right-4 bg-emerald-500 text-slate-950 px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>NACHHER: Rheindorf Digital</span>
              </div>
            </div>

            {/* BEFORE: Legacy Website (Left Layer, clipped by sliderPosition) */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={userImg1}
                alt="Alte Baukasten-Website vor Relaunch"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-75 max-w-none"
                style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
              />
              <div className="absolute top-4 left-4 bg-rose-500/90 text-white px-4 py-1.5 rounded-full text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>VORHER: Alt-Website (8.4s)</span>
              </div>
            </div>

            {/* Divider Handle (Plexify Style) */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-[0_0_20px_rgba(255,255,255,0.9)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-slate-950 border-2 border-white shadow-2xl flex items-center justify-center text-emerald-400">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar below Slider (Plexify Style) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="plexify-card bg-[#080C14] border-white/10 p-5 rounded-2xl text-center">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Ladezeit-Optimierung</span>
              <span className="font-display font-black text-2xl text-emerald-400 mt-1 block">4.8s ➔ 0.4s</span>
            </div>

            <div className="plexify-card bg-[#080C14] border-white/10 p-5 rounded-2xl text-center">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Qualifizierte Anfragen</span>
              <span className="font-display font-black text-2xl text-emerald-400 mt-1 block">+340% mehr Leads</span>
            </div>

            <div className="plexify-card bg-[#080C14] border-white/10 p-5 rounded-2xl text-center">
              <span className="text-[11px] font-mono text-slate-400 uppercase block">Google Maps Ranking</span>
              <span className="font-display font-black text-2xl text-emerald-400 mt-1 block">Platz #1 im 3-Pack</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
