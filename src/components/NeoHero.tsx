import React from 'react';
import { ArrowUpRight, MapPin, Globe, Sparkles, Phone, MessageSquare } from 'lucide-react';
import portraitImg from '../images/about-me-no-bg.png';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

interface NeoHeroProps {
  onOpenContact: () => void;
}

export default function NeoHero({ onOpenContact }: NeoHeroProps) {
  return (
    <section className="border-b border-white/15 bg-[#050505] relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Side: Identity, Badges & Services */}
        <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-between space-y-10 border-b lg:border-b-0 lg:border-r border-white/15">
          
          {/* Name & Title Header */}
          <div className="space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.9] text-white">
                  ALEXANDER <br />
                  <span className="text-[#D4FF00]">RHEINDORF</span>
                </h2>
              </div>

              {/* Rotating Circular Stamp Badge */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text className="font-mono text-[8.5px] font-bold fill-slate-300 tracking-[0.22em] uppercase">
                    <textPath href="#circlePath" startOffset="0%">
                      DESIGN THAT CONVERTS • BRANDS TO PEOPLE •
                    </textPath>
                  </text>
                </svg>
                {/* Globe Icon in Center */}
                <div className="absolute inset-0 m-auto w-10 h-10 rounded-full border border-[#D4FF00]/50 flex items-center justify-center text-[#D4FF00] bg-[#0A0A0A]">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Blue Pill Role Tag */}
            <div>
              <span className="neo-btn-blue inline-flex items-center gap-2 text-xs py-2 px-4 shadow-[0_0_20px_rgba(0,68,255,0.4)]">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>WEB DESIGNER & CREATIVE DEVELOPER</span>
              </span>
            </div>

          </div>

          {/* 4 Capabilities & Location Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs font-mono">
            
            {/* Service Capabilities */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-[#D4FF00] font-bold">✦</span>
                <span className="font-bold tracking-wide">WEBSITES & WEBAPPS</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-[#D4FF00] font-bold">✦</span>
                <span className="font-bold tracking-wide">UI/UX DESIGN SYSTEMS</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-[#D4FF00] font-bold">✦</span>
                <span className="font-bold tracking-wide">24/7 KI-TELEFONIE</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <span className="text-[#D4FF00] font-bold">✦</span>
                <span className="font-bold tracking-wide">LOCAL SEO & CONVERSION</span>
              </div>
            </div>

            {/* Location & Status Info */}
            <div className="space-y-3.5 sm:border-l sm:border-white/10 sm:pl-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#D4FF00] shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block">STANDORT</span>
                  <span className="font-bold text-white">KÖLN / KERPEN, NRW</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-ping shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-500 block">STATUS</span>
                  <span className="font-bold text-[#D4FF00]">AVAILABLE FOR PROJECTS</span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick CTA Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                playSuccessSound();
                onOpenContact();
              }}
              onMouseEnter={playHoverSound}
              data-cursor="pointer"
              className="neo-btn-lime"
            >
              <span>Projekt anfragen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/4916096351750?text=Hallo%20Alexander!%20Ich%20habe%20Interesse%20an%20einem%20Projekt."
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              data-cursor="pointer"
              className="neo-btn-blue bg-white/5 border border-white/20 hover:bg-[#25D366] hover:text-black hover:border-transparent text-white"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direkt</span>
            </a>
          </div>

        </div>

        {/* Right Side: High-Impact Neo-Brutalist Cutout Portrait Frame */}
        <div className="lg:col-span-5 relative bg-[#0044FF] flex items-end justify-center overflow-hidden min-h-[420px] lg:min-h-[540px]">
          
          {/* Giant Graphic Acid Lime 'X' in Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-95">
            <svg
              className="w-[120%] h-[120%] text-[#D4FF00] fill-current"
              viewBox="0 0 100 100"
            >
              <polygon points="0,0 28,0 50,30 72,0 100,0 65,50 100,100 72,100 50,70 28,100 0,100 35,50" />
            </svg>
          </div>

          {/* Stylized Grain Overlay */}
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/30 pointer-events-none" />

          {/* Alexander Rheindorf Cutout Portrait Photo */}
          <div className="relative z-10 w-full max-w-[420px] lg:max-w-[480px] -mb-1 flex justify-center">
            <img
              src={portraitImg}
              alt="Alexander Rheindorf - Creative Web Designer & Developer"
              className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter contrast-110 brightness-95"
            />
          </div>

          {/* Cursive Signature Graphic Overlay */}
          <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
            <span className="font-serif italic font-black text-2xl sm:text-3xl text-[#D4FF00] tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Alexander ×
            </span>
          </div>

          {/* Corner Tech Tag */}
          <div className="absolute top-4 right-4 z-20 font-mono text-[9px] font-bold px-3 py-1 bg-black/80 text-[#D4FF00] border border-[#D4FF00]/40 backdrop-blur-md">
            // EDITION 2026.08
          </div>

        </div>

      </div>
    </section>
  );
}
