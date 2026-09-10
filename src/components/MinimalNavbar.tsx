import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface MinimalNavbarProps {
  onOpenContact: () => void;
}

export default function MinimalNavbar({ onOpenContact }: MinimalNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-white/[0.08] py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Name */}
        <a 
          href="#" 
          className="group flex flex-col focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Alexander Rheindorf
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase">
            Webdesign &amp; Prozesse
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('angebot')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Angebot
          </button>
          <button 
            onClick={() => scrollToSection('architektur')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            System-Architektur
          </button>
          <button 
            onClick={() => scrollToSection('prinzipien')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Prinzipien
          </button>
          <button 
            onClick={() => scrollToSection('ablauf')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Ablauf
          </button>
        </nav>

        {/* Status & Emerald CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-950/30 text-[11px] font-mono text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.12)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>Verfügbar für Projekte</span>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-zinc-950 text-xs font-mono uppercase tracking-wider font-bold hover:from-emerald-300 hover:to-emerald-400 transition-all cursor-pointer shadow-md shadow-emerald-500/20 active:scale-[0.98]"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle - minimum 44x44px touch target */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-zinc-300 hover:text-white rounded-xl active:bg-zinc-800 focus:outline-none"
          aria-label="Navigation umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#09090b]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-xs font-mono text-emerald-400 w-fit mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Verfügbar für Projekte</span>
            </div>

            <button 
              onClick={() => scrollToSection('angebot')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-base font-mono tracking-wider uppercase text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.03] rounded-xl flex items-center justify-between border-b border-white/5"
            >
              <span>01 — Angebot</span>
              <span className="text-zinc-600 text-xs">Web &amp; Automation</span>
            </button>

            <button 
              onClick={() => scrollToSection('architektur')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-base font-mono tracking-wider uppercase text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.03] rounded-xl flex items-center justify-between border-b border-white/5"
            >
              <span>02 — System-Architektur</span>
              <span className="text-zinc-600 text-xs">Workflows</span>
            </button>

            <button 
              onClick={() => scrollToSection('prinzipien')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-base font-mono tracking-wider uppercase text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.03] rounded-xl flex items-center justify-between border-b border-white/5"
            >
              <span>03 — Prinzipien</span>
              <span className="text-zinc-600 text-xs">Klartext</span>
            </button>

            <button 
              onClick={() => scrollToSection('ablauf')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-base font-mono tracking-wider uppercase text-zinc-200 hover:text-emerald-400 hover:bg-white/[0.03] rounded-xl flex items-center justify-between border-b border-white/5"
            >
              <span>04 — Ablauf</span>
              <span className="text-zinc-600 text-xs">4 Wochen</span>
            </button>
          </div>

          <div className="pt-6 border-t border-white/10 pb-16 sm:pb-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 min-h-[48px] rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-zinc-950 font-mono uppercase tracking-wider font-bold text-center shadow-lg shadow-emerald-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Projekt anfragen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
