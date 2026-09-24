import React from 'react';

interface MinimalFooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function MinimalFooter({ onOpenImpressum, onOpenDatenschutz }: MinimalFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#09090b] border-t border-white/[0.04] text-zinc-400">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white tracking-tight">
                Alexander Rheindorf
              </span>
            </div>
            <p className="mt-1 text-sm font-sans text-zinc-500">
              High-End Webdesign & Intelligente Prozesse • Köln & NRW
            </p>
          </div>

          {/* Legal Navigation */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-sans">
            <button 
              onClick={onOpenImpressum} 
              className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button 
              onClick={onOpenDatenschutz} 
              className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <button
              onClick={scrollToTop}
              className="text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer ml-auto md:ml-4"
              aria-label="Nach oben scrollen"
            >
              Nach oben
            </button>
          </div>

        </div>

        {/* Bottom Baseline */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-zinc-600 gap-4">
          <div>
            © {new Date().getFullYear()} Alexander Rheindorf. Alle Rechte vorbehalten.
          </div>
          <div>
            Handcodiert mit React, Tailwind & n8n Orchestrierung.
          </div>
        </div>

      </div>
    </footer>
  );
}
