import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

interface NeoHeaderProps {
  onOpenContact: () => void;
}

export default function NeoHeader({ onOpenContact }: NeoHeaderProps) {
  return (
    <div className="border-b border-white/15 bg-[#050505] text-white">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3 border-b border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2 text-[#D4FF00] font-bold tracking-wider">
          <span className="text-base leading-none">✳</span>
          <span className="text-white">ALEXANDER RHEINDORF // CREATIVE WEB DESIGNER</span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
            <span className="text-slate-300">AVAILABLE FOR PROJECTS</span>
          </span>
          <span className="text-slate-500">KÖLN · KERPEN · REMOTE</span>
        </div>
      </div>

      {/* Main Massive Poster Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left: Giant Condensed PORTFOLIO Title */}
        <div className="lg:col-span-8 px-4 sm:px-8 py-6 sm:py-10 flex items-center border-b lg:border-b-0 lg:border-r border-white/15 overflow-hidden">
          <h1 className="font-bebas text-[20vw] sm:text-[16vw] lg:text-[11vw] tracking-tighter leading-[0.82] text-white uppercase select-none">
            PORTFOLIO
          </h1>
        </div>

        {/* Right: Statement + Barcode + Blue Action Block */}
        <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 bg-[#0A0A0A] space-y-6">
          
          <div className="flex items-start justify-between gap-4">
            <p className="font-mono text-xs sm:text-sm text-slate-300 uppercase leading-relaxed font-bold tracking-wide max-w-[240px]">
              I DESIGN DIGITAL EXPERIENCES THAT ARE BOLD, USEFUL, AND IMPOSSIBLE TO IGNORE.
            </p>

            {/* Top Right Big Blue Arrow Button */}
            <button
              onClick={() => {
                playSuccessSound();
                onOpenContact();
              }}
              onMouseEnter={playHoverSound}
              data-cursor="pointer"
              title="Projekt besprechen"
              className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0044FF] hover:bg-[#1D4ED8] text-white flex items-center justify-center transition-transform hover:scale-105 shrink-0 shadow-[0_0_25px_rgba(0,68,255,0.4)] cursor-pointer"
            >
              <ArrowUpRight className="w-8 h-8 sm:w-10 sm:h-10" />
            </button>
          </div>

          {/* Barcode Graphic */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-slate-400 font-mono text-[10px]">
            <div className="flex items-center gap-1 tracking-widest text-white/80">
              <span className="font-bold">NR.</span> 2026-AR-DIGITAL
            </div>
            
            {/* SVG Barcode */}
            <div className="h-7 flex items-center gap-[2px] opacity-75">
              <span className="w-1 h-full bg-white" />
              <span className="w-[2px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-1 h-full bg-white" />
              <span className="w-[3px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-1 h-full bg-white" />
              <span className="w-[2px] h-full bg-white" />
              <span className="w-1 h-full bg-white" />
              <span className="w-[3px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-1 h-full bg-white" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
