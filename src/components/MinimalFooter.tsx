import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface MinimalFooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function MinimalFooter({ onOpenImpressum, onOpenDatenschutz }: MinimalFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#f5f2eb] border-t border-[#e7e3d8] text-stone-600">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-stone-900 tracking-tight text-lg">
                Alexander Rheindorf
              </span>
            </div>
            <p className="mt-1 text-sm font-sans text-stone-600">
              Webdesign & Intelligente Prozesse • Kerpen, Köln & NRW
            </p>

            {/* Quick Contact */}
            <div className="mt-4 space-y-1.5">
              <a href="mailto:hello@rheindorf.digital" className="flex items-center gap-2 text-xs font-sans text-stone-600 hover:text-emerald-700 transition-colors">
                <Mail className="w-3.5 h-3.5 text-emerald-600" />
                <span>hello@rheindorf.digital</span>
              </a>
              <a href="tel:+4916096351750" className="flex items-center gap-2 text-xs font-sans text-stone-600 hover:text-emerald-700 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span className="font-semibold">+49 160 96351750</span>
              </a>
            </div>
          </div>

          {/* Legal Navigation */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs font-sans">
            <button 
              onClick={onOpenImpressum} 
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors cursor-pointer"
            >
              Impressum
            </button>
            <button 
              onClick={onOpenDatenschutz} 
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors cursor-pointer"
            >
              Datenschutz
            </button>
            <button
              onClick={scrollToTop}
              className="text-stone-600 hover:text-stone-900 font-medium transition-colors cursor-pointer"
              aria-label="Nach oben scrollen"
            >
              Nach oben ↑
            </button>
          </div>

        </div>

        {/* Bottom Baseline */}
        <div className="mt-12 pt-6 border-t border-stone-900/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-stone-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Alexander Rheindorf. Alle Rechte vorbehalten.
          </div>
          <div className="font-mono text-[11px] text-stone-500">
            Handcodiert &bull; 0% Tracking &bull; Kerpen / Rheinland
          </div>
        </div>

      </div>
    </footer>
  );
}
