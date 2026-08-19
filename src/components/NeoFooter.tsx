import React from 'react';
import { ArrowUpRight, Mail, Globe, MapPin, Sparkles, MessageSquare, Phone } from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

interface NeoFooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function NeoFooter({ onOpenImpressum, onOpenDatenschutz }: NeoFooterProps) {
  return (
    <footer id="contact" className="border-t border-white/15 bg-[#050505] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Side: Bold Blue Hero Block */}
        <div className="lg:col-span-4 bg-[#0044FF] p-8 sm:p-10 md:p-12 flex flex-col justify-between space-y-8 select-none">
          <h3 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white uppercase leading-[0.88] tracking-tight">
            LET'S BUILD <br />
            SOMETHING <br />
            <span className="text-[#D4FF00]">EPIC TOGETHER</span>
          </h3>

          <div className="flex items-center justify-between text-white">
            <span className="font-mono text-xs tracking-widest font-bold">// RHEINDORF DIGITAL</span>
            <div className="text-3xl font-black">↗</div>
          </div>
        </div>

        {/* Middle Side: Direct Contact Details & Form */}
        <div className="lg:col-span-5 p-8 sm:p-10 md:p-12 flex flex-col justify-between space-y-6 bg-[#0A0A0A] border-b lg:border-b-0 lg:border-r border-white/15">
          <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-300">
            
            <a
              href="mailto:alexander@rheindorf.digital"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#D4FF00] shrink-0" />
              <span className="truncate">alexander@rheindorf.digital</span>
            </a>

            <a
              href="https://wa.me/4916096351750?text=Hallo%20Alexander!%20Ich%20habe%20Interesse%20an%20einem%20Projekt."
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 hover:border-[#25D366] hover:text-[#25D366] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
              <span>WhatsApp Direktkontakt</span>
            </a>

            <a
              href="tel:016096351750"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 hover:border-white text-slate-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#D4FF00] shrink-0" />
              <span>+49 (0) 160 96351750</span>
            </a>

            <div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-white/10 text-slate-300">
              <MapPin className="w-4 h-4 text-[#D4FF00] shrink-0" />
              <span>Köln / Kerpen, Nordrhein-Westfalen</span>
            </div>

            <div className="flex items-center gap-3 p-3 rounded bg-white/5 border border-[#D4FF00]/30 text-[#D4FF00]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-ping shrink-0" />
              <span className="font-bold uppercase tracking-wider text-xs">Available for Freelance & Projects</span>
            </div>

          </div>

          {/* Legal Links */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>© {new Date().getFullYear()} Alexander Rheindorf</span>
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenImpressum}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Impressum
              </button>
              <button
                onClick={onOpenDatenschutz}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Geometric Graphic Shapes (Arches & Lime Star) */}
        <div className="lg:col-span-3 bg-[#0A0A0A] p-8 flex flex-col items-center justify-center relative overflow-hidden min-h-[220px]">
          
          {/* Cobalt Blue Geometric Semi-Circles / Arches */}
          <div className="relative w-44 h-44 flex items-center justify-center">
            {/* Upper Blue Arch */}
            <div className="absolute top-0 left-0 w-28 h-28 bg-[#0044FF] rounded-t-full rounded-bl-full shadow-[0_0_30px_rgba(0,68,255,0.4)]" />
            
            {/* Lower Blue Circle */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#0044FF] rounded-full" />
            
            {/* Small Floating Circle */}
            <div className="absolute top-2 right-2 w-10 h-10 bg-[#0044FF] rounded-full" />
            
            {/* Acid Lime Asterisk Star */}
            <div className="absolute bottom-2 right-4 text-[#D4FF00] font-black text-4xl select-none animate-pulse">
              ✳
            </div>
          </div>

          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-4">
            CRAFTED WITH PRECISION
          </span>

        </div>

      </div>
    </footer>
  );
}
