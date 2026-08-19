import React, { useState, useEffect } from 'react';
import { Phone, ArrowUpRight, Menu, X, Sparkles, MessageSquare, Volume2, VolumeX } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';
import { playClickSound, playHoverSound, playSuccessSound, toggleSound, isSoundEnabled } from '../utils/soundEffects';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const state = toggleSound();
    setSoundOn(state);
    if (state) playClickSound();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 border ${
            scrolled
              ? 'bg-[#030712]/90 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
              : 'bg-[#070D1B]/60 backdrop-blur-md border-white/5'
          }`}
        >
          {/* Logo with Status Badge */}
          <a
            href="#"
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className="flex items-center gap-3.5 group"
          >
            <div className="relative">
              <img
                src={alexanderProfileImg}
                alt="Alexander Rheindorf"
                className="w-10 h-10 rounded-full object-cover border-2 border-emerald-400/80 shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:scale-105 transition-transform"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#030712] animate-pulse"></span>
            </div>
            <div>
              <span className="font-display font-black text-lg tracking-tight text-white flex items-center gap-1.5 leading-none">
                RHEINDORF<span className="text-emerald-400">.DIGITAL</span>
              </span>
              <span className="text-[10px] font-mono tracking-wider text-slate-400 font-semibold block mt-1">
                Studio Köln / Kerpen
              </span>
            </div>
          </a>

          {/* Center Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 font-mono text-xs font-semibold text-slate-300">
            <a
              href="#studio-lab"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              data-cursor="pointer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/20 transition-all"
            >
              <Sparkles className="w-3 h-3 animate-spin" />
              <span>Studio Lab</span>
            </a>
            <a href="#prozess" onMouseEnter={playHoverSound} onClick={playClickSound} className="hover:text-emerald-400 transition-colors">01. Ablauf</a>
            <a href="#projekte" onMouseEnter={playHoverSound} onClick={playClickSound} className="hover:text-emerald-400 transition-colors">02. Showcase</a>
            <a href="#ki-telefonie" onMouseEnter={playHoverSound} onClick={playClickSound} className="hover:text-emerald-400 transition-colors">03. KI-Voice</a>
            <a href="#leistungen" onMouseEnter={playHoverSound} onClick={playClickSound} className="hover:text-emerald-400 transition-colors">04. Pakete</a>
            <a href="#kalkulator" onMouseEnter={playHoverSound} onClick={playClickSound} className="hover:text-emerald-400 transition-colors">05. Kalkulator</a>
            <a href="#faq" onMouseEnter={playHoverSound} onClick={playClickSound} className="hover:text-emerald-400 transition-colors">06. FAQ</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={handleSoundToggle}
              onMouseEnter={playHoverSound}
              data-cursor="sound"
              title={soundOn ? 'Soundeffekte stummschalten' : 'Soundeffekte aktivieren'}
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-emerald-400 transition-all cursor-pointer"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            </button>

            <a
              href="tel:016096351750"
              onMouseEnter={playHoverSound}
              data-cursor="pointer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-bold text-slate-200 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>0160 96351750</span>
            </a>

            <button
              onClick={() => {
                playSuccessSound();
                onOpenContact();
              }}
              onMouseEnter={playHoverSound}
              data-cursor="pointer"
              className="luxury-btn-primary text-xs py-2.5 px-5 !shadow-none"
            >
              <span>Projekt Besprechen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                playClickSound();
                setMobileOpen(!mobileOpen);
              }}
              className="lg:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 p-6 rounded-3xl bg-[#070D1B]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-6 animate-in fade-in">
            <nav className="flex flex-col space-y-4 font-display font-bold text-lg text-white">
              <a
                href="#studio-lab"
                onClick={() => setMobileOpen(false)}
                className="text-emerald-400 flex items-center justify-between"
              >
                <span>⭐ Studio Lab Playground</span>
                <Sparkles className="w-4 h-4" />
              </a>
              <a
                href="#prozess"
                onClick={() => setMobileOpen(false)}
                className="hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>01. 4-Schritte-Ablauf</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#projekte"
                onClick={() => setMobileOpen(false)}
                className="hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>02. Showcase & Referenzen</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#ki-telefonie"
                onClick={() => setMobileOpen(false)}
                className="hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>03. 24/7 KI-Voice Terminal</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#leistungen"
                onClick={() => setMobileOpen(false)}
                className="hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>04. Leistungen & Festpreise</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
              <a
                href="#kalkulator"
                onClick={() => setMobileOpen(false)}
                className="hover:text-emerald-400 transition-colors flex items-center justify-between"
              >
                <span>05. Projekt-Kalkulator</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            </nav>

            <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-xs">
              <a
                href="https://wa.me/4916096351750?text=Hallo%20Alexander!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-full bg-[#25D366] text-slate-950 font-bold"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direktchat</span>
              </a>
              <a
                href="tel:016096351750"
                className="flex items-center justify-center gap-2 p-3 rounded-full bg-white/5 border border-white/10 text-white font-bold"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+49 (0) 160 96351750</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
