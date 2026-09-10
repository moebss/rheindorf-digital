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
          ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Name & Studio Subtitle */}
        <a 
          href="#" 
          className="group flex flex-col focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="font-sans font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-zinc-300 transition-colors">
              Alexander Rheindorf
            </span>
            <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded border border-white/10 bg-white/[0.03] text-zinc-400">
              Studio
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
            Webdesign & Prozesse
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('angebot')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Leistungen
          </button>
          <button 
            onClick={() => scrollToSection('architektur')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            System & Flow
          </button>
          <button 
            onClick={() => scrollToSection('projekte')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Case Studies
          </button>
          <button 
            onClick={() => scrollToSection('methode')} 
            className="text-xs font-mono tracking-wider uppercase text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Methode
          </button>
        </nav>

        {/* Status Pill & Primary Action */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="tracking-wide">2 Slots verfügbar</span>
          </div>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-zinc-950 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-zinc-200 transition-all cursor-pointer shadow-sm active:scale-[0.98]"
          >
            <span>Projekt anfragen</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
          aria-label="Navigation umschalten"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#09090b] border-b border-white/10 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-emerald-500/20 bg-emerald-950/20 text-xs font-mono text-emerald-400 w-fit">
            <span className="relative flex h-1.5 w-1.5">
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span>2 Projekt-Slots verfügbar</span>
          </div>
          <button 
            onClick={() => scrollToSection('angebot')} 
            className="text-left py-2 text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white"
          >
            01 — Leistungen
          </button>
          <button 
            onClick={() => scrollToSection('architektur')} 
            className="text-left py-2 text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white"
          >
            02 — System & Flow
          </button>
          <button 
            onClick={() => scrollToSection('projekte')} 
            className="text-left py-2 text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white"
          >
            03 — Case Studies
          </button>
          <button 
            onClick={() => scrollToSection('methode')} 
            className="text-left py-2 text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white"
          >
            04 — Methode
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="mt-2 w-full py-3 rounded-lg bg-white text-zinc-950 text-xs font-mono uppercase tracking-wider font-bold text-center"
          >
            Projekt anfragen →
          </button>
        </div>
      )}
    </header>
  );
}
