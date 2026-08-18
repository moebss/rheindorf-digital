import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, ArrowUpRight } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface FooterProps {
  onOpenImpressum: () => void;
  onOpenDatenschutz: () => void;
}

export default function Footer({ onOpenImpressum, onOpenDatenschutz }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="pt-16 pb-12 bg-[#030712] text-slate-400 text-xs overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="luxury-card p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
          
          {/* Top Big Callout */}
          <div className="max-w-3xl mb-16 space-y-4">
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              Let's make something <br />
              <span className="text-emerald-400">great work together.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-slate-300">
              Bespoke Webdesign & 24/7 Voice AI für führende Betriebe in Köln, Kerpen & NRW.
            </p>
          </div>

          {/* 4-Column Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
            
            {/* Col 1: Direct Call */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-base">Direkt anrufen</h4>
              <ul className="space-y-2 font-mono text-xs">
                <li>
                  <a href="tel:016096351750" className="text-slate-300 hover:text-emerald-400 transition-colors">
                    +49 (0) 160 96351750
                  </a>
                </li>
                <li>
                  <span className="text-slate-500">Mo – Sa: 08:00 – 19:00 Uhr</span>
                </li>
              </ul>
            </div>

            {/* Col 2: Send a Message */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-base">E-Mail & Chat</h4>
              <ul className="space-y-2 font-mono text-xs">
                <li>
                  <a href="mailto:hello@rheindorf.digital" className="text-slate-300 hover:text-emerald-400 transition-colors underline">
                    hello@rheindorf.digital
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/4916096351750?text=Hallo%20Alexander!"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    WhatsApp Chat starten ➔
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Navigation */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-base">Studio</h4>
              <ul className="space-y-2 font-mono text-xs">
                <li><a href="#projekte" className="hover:text-white transition-colors">Showcase & Referenzen</a></li>
                <li><a href="#prozess" className="hover:text-white transition-colors">4-Schritte Prozess</a></li>
                <li><a href="#leistungen" className="hover:text-white transition-colors">Leistungen & Festpreise</a></li>
                <li><a href="#ki-telefonie" className="hover:text-white transition-colors">KI-Voice Terminal</a></li>
                <li><a href="#kalkulator" className="hover:text-white transition-colors">Projekt-Kalkulator</a></li>
              </ul>
            </div>

            {/* Col 4: Region & Standard */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-white text-base">Standort & Trust</h4>
              <ul className="space-y-2 font-mono text-xs">
                <li className="text-slate-300">Köln · Kerpen · Bergheim · NRW</li>
                <li className="text-emerald-400 font-bold">100% Festpreisgarantie</li>
                <li className="text-slate-400">100% DSGVO & § 5 DDG konform</li>
                <li className="text-slate-400">Deutscher Serverstandort</li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright & Back-To-Top */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="font-mono text-[11px] text-slate-500 uppercase">
              © {new Date().getFullYear()} RHEINDORF DIGITAL · INHABER ALEXANDER RHEINDORF · ALL RIGHTS RESERVED
            </p>

            <div className="flex items-center gap-6 font-mono text-[11px]">
              <button
                onClick={onOpenImpressum}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Impressum (§ 5 DDG)
              </button>
              <button
                onClick={onOpenDatenschutz}
                className="text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Datenschutz (DSGVO)
              </button>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-white text-slate-950 hover:bg-emerald-400 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xl"
                aria-label="Nach oben scrollen"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
