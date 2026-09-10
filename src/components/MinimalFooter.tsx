import React from 'react';
import { ArrowUp } from 'lucide-react';

interface MinimalFooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function MinimalFooter({ onOpenImpressum, onOpenDatenschutz }: MinimalFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#09090b] border-t border-white/[0.08] text-zinc-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans font-semibold text-white tracking-tight">
                Alexander Rheindorf
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/[0.03] text-zinc-400">
                Studio
              </span>
            </div>
            <p className="mt-1 text-xs font-mono text-zinc-500">
              High-End Webdesign &amp; Intelligente Prozesse • Köln &amp; NRW
            </p>
          </div>

          {/* Legal Navigation */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <button 
              onClick={onOpenImpressum} 
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              Impressum (§ 5 DDG)
            </button>
            <button 
              onClick={onOpenDatenschutz} 
              className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
            >
              Datenschutz (DSGVO)
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-auto md:ml-4"
              aria-label="Nach oben scrollen"
            >
              <span>Nach oben</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Baseline */}
        <div className="mt-12 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-600 gap-4">
          <div>
            © {new Date().getFullYear()} Alexander Rheindorf. Alle Rechte vorbehalten.
          </div>
          <div>
            Handcodiert mit React, Tailwind &amp; n8n Orchestrierung.
          </div>
        </div>

      </div>
    </footer>
  );
}
