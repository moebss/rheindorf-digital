import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

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
    window.addEventListener('scroll', handleScroll, { passive: true });
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
          ? 'bg-[#09090b]/80 backdrop-blur-md border-b border-white/[0.04] py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Name */}
        <a 
          href="#" 
          className="group flex flex-col focus:outline-none"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-emerald-400 transition-colors">
              Alexander Rheindorf
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
            Webdesign &amp; Prozesse
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('angebot')} 
            className="text-sm font-sans text-zinc-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            Leistungen
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="text-sm font-sans text-zinc-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            Referenz
          </button>
          <button 
            onClick={() => scrollToSection('rechner')} 
            className="text-sm font-sans text-zinc-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            Rechner
          </button>
          <button 
            onClick={() => scrollToSection('architektur')} 
            className="text-sm font-sans text-zinc-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            Automation
          </button>
          <button 
            onClick={() => scrollToSection('ablauf')} 
            className="text-sm font-sans text-zinc-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            Ablauf
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-sm font-sans text-zinc-400 hover:text-emerald-300 transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Action */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4">
          <a
            href="tel:+4916096351750"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-400 py-2 px-3 rounded-lg border border-white/[0.06] hover:border-emerald-500/30 transition-colors"
            title="Direkt anrufen: 0160 96351750"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>0160 96351750</span>
          </a>

          <button
            onClick={onOpenContact}
            className="bg-white hover:bg-zinc-100 text-zinc-950 font-sans font-semibold text-sm px-4 lg:px-5 py-2.5 rounded-lg transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] cursor-pointer min-h-[44px]"
          >
            Projekt anfragen
          </button>
        </div>

        {/* Mobile Call Icon + Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+4916096351750"
            aria-label="Direkt anrufen: 0160 96351750"
            className="min-h-[42px] min-w-[42px] flex items-center justify-center p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-zinc-300 hover:text-white rounded-xl active:bg-zinc-800 focus:outline-none"
            aria-label="Navigation umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#09090b]/98 backdrop-blur-2xl border-t border-white/[0.04] px-6 py-8 flex flex-col justify-between overflow-y-auto z-50">
          <div className="space-y-2">
            <button 
              onClick={() => scrollToSection('angebot')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              Referenz
            </button>
            <button 
              onClick={() => scrollToSection('rechner')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              Rechner
            </button>
            <button 
              onClick={() => scrollToSection('architektur')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              Automation
            </button>
            <button 
              onClick={() => scrollToSection('ablauf')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              Ablauf
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              FAQ
            </button>
          </div>

          <div className="pt-6 border-t border-white/[0.04] pb-16 sm:pb-0 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+4916096351750"
                className="py-3 px-3 rounded-lg border border-white/[0.08] bg-[#111114] text-zinc-300 hover:text-white font-sans text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>Anrufen</span>
              </a>
              <a
                href="https://wa.me/4916096351750?text=Hallo%20Alexander,%20ich%20m%C3%B6chte%20ein%20Projekt%20besprechen."
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 font-sans text-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 min-h-[44px] rounded-lg bg-white hover:bg-zinc-200 text-zinc-950 font-sans font-medium text-sm text-center flex items-center justify-center transition-colors"
            >
              Projekt anfragen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
