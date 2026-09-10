import React from 'react';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

interface StickyCTAProps {
  onOpenContact: () => void;
}

export default function StickyCTA({ onOpenContact }: StickyCTAProps) {
  return (
    <aside 
      aria-label="Mobile Schnellkontakt-Leiste"
      className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#09090b]/95 backdrop-blur-xl border border-white/15 p-2 rounded-2xl flex items-center gap-2 shadow-[0_10px_35px_rgba(0,0,0,0.9)] pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      {/* 1. Direct Call */}
      <a
        href="tel:+4916096351750"
        aria-label="Alexander Rheindorf direkt anrufen"
        className="flex-1 min-h-[44px] bg-[#141417] hover:bg-[#1a1a1f] active:bg-zinc-800 text-white border border-white/10 rounded-xl flex items-center justify-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400" />
        <span>Anruf</span>
      </a>

      {/* 2. WhatsApp Direct */}
      <a
        href="https://wa.me/4916096351750?text=Hallo%20Alexander,%20ich%20interessiere%20mich%20f%C3%BCr%20ein%20Webdesign-%20oder%20Prozess-Projekt."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat öffnen"
        className="w-11 h-11 min-h-[44px] min-w-[44px] bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-zinc-950 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-transform"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
      </a>

      {/* 3. Primary Inquiry Button in Emerald */}
      <button
        onClick={onOpenContact}
        className="flex-1 min-h-[44px] bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 active:scale-[0.98] text-zinc-950 rounded-xl flex items-center justify-center gap-1.5 font-mono font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-500/20 cursor-pointer transition-all"
      >
        <span>Anfragen</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
}
