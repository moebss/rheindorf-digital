import React from 'react';
import { Phone, MessageSquare, Sparkles, ArrowUpRight } from 'lucide-react';

interface StickyCTAProps {
  onOpenContact: () => void;
}

export default function StickyCTA({ onOpenContact }: StickyCTAProps) {
  return (
    <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40 bg-[#070D1B]/95 backdrop-blur-2xl border border-white/15 p-2.5 rounded-full flex items-center gap-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      <a
        href="tel:016096351750"
        aria-label="Alexander Rheindorf anrufen"
        className="flex-1 bg-[#0D1527] hover:bg-[#131D33] text-white border border-white/10 py-2.5 rounded-full flex items-center justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider"
      >
        <Phone className="w-3.5 h-3.5 text-emerald-400" />
        <span>Anrufen</span>
      </a>

      <a
        href="https://wa.me/4916096351750?text=Hallo%20Alexander!%20Ich%20interessiere%20mich%20f%C3%BCr%20ein%20Webdesign-%20oder%20KI-Projekt."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat öffnen"
        className="w-10 h-10 bg-[#25D366] text-slate-950 rounded-full flex items-center justify-center shrink-0 shadow-lg"
      >
        <MessageSquare className="w-4 h-4 fill-current" />
      </a>

      <button
        onClick={onOpenContact}
        className="flex-1 bg-white hover:bg-emerald-400 text-slate-950 py-2.5 rounded-full flex items-center justify-center gap-1.5 font-display font-black text-xs uppercase tracking-wider shadow-lg cursor-pointer transition-colors"
      >
        <span>Anfragen</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
