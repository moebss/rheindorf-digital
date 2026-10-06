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
          ? 'bg-[#fbf9f5]/90 backdrop-blur-md border-b border-[#e7e3d8] py-3 shadow-[0_2px_15px_rgba(0,0,0,0.03)]' 
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
            <span className="w-2 h-2 rounded-full bg-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.6)]" />
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-stone-900 group-hover:text-emerald-700 transition-colors">
              Alexander Rheindorf
            </span>
          </div>
          <span className="text-xs font-mono text-stone-500 group-hover:text-stone-700 transition-colors">
            Webdesign &amp; Prozesse
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('angebot')} 
            className="text-sm font-sans text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer font-medium"
          >
            Leistungen
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="text-sm font-sans text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer font-medium"
          >
            Referenz
          </button>
          <button 
            onClick={() => scrollToSection('rechner')} 
            className="text-sm font-sans text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer font-medium"
          >
            Preisfinder
          </button>
          <button 
            onClick={() => scrollToSection('architektur')} 
            className="text-sm font-sans text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer font-medium"
          >
            Automation
          </button>
          <button 
            onClick={() => scrollToSection('ablauf')} 
            className="text-sm font-sans text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer font-medium"
          >
            Ablauf
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-sm font-sans text-stone-600 hover:text-emerald-700 transition-colors cursor-pointer font-medium"
          >
            FAQ
          </button>
        </nav>

        {/* Action */}
        <div className="hidden sm:flex items-center gap-3 lg:gap-4">
          <a
            href="tel:+4916096351750"
            className="hidden lg:inline-flex items-center gap-2 text-xs font-mono text-stone-700 hover:text-emerald-700 py-2 px-3 rounded-lg border border-[#e7e3d8] bg-white/70 hover:bg-white hover:border-emerald-300 transition-all shadow-xs"
            title="Direkt anrufen: 0160 96351750"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>0160 96351750</span>
          </a>

          <button
            onClick={onOpenContact}
            className="bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm px-4 lg:px-5 py-2.5 rounded-xl transition-all shadow-[0_2px_10px_rgba(4,120,87,0.25)] hover:shadow-[0_4px_15px_rgba(4,120,87,0.35)] cursor-pointer min-h-[44px]"
          >
            Projekt anfragen
          </button>
        </div>

        {/* Mobile Call Icon + Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+4916096351750"
            aria-label="Direkt anrufen: 0160 96351750"
            className="min-h-[42px] min-w-[42px] flex items-center justify-center p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 active:scale-95 transition-transform"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-stone-700 hover:text-stone-950 rounded-xl active:bg-stone-200 focus:outline-none"
            aria-label="Navigation umschalten"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#fbf9f5]/98 backdrop-blur-2xl border-t border-[#e7e3d8] px-6 py-8 flex flex-col justify-between overflow-y-auto z-50">
          <div className="space-y-2">
            <button 
              onClick={() => scrollToSection('angebot')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-stone-800 hover:text-emerald-700 hover:bg-stone-100 rounded-lg flex items-center justify-between border-b border-[#e7e3d8]/60"
            >
              Leistungen
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-stone-800 hover:text-emerald-700 hover:bg-stone-100 rounded-lg flex items-center justify-between border-b border-[#e7e3d8]/60"
            >
              Referenz
            </button>
            <button 
              onClick={() => scrollToSection('rechner')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-stone-800 hover:text-emerald-700 hover:bg-stone-100 rounded-lg flex items-center justify-between border-b border-[#e7e3d8]/60"
            >
              Preisfinder
            </button>
            <button 
              onClick={() => scrollToSection('architektur')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-stone-800 hover:text-emerald-700 hover:bg-stone-100 rounded-lg flex items-center justify-between border-b border-[#e7e3d8]/60"
            >
              Automation
            </button>
            <button 
              onClick={() => scrollToSection('ablauf')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-stone-800 hover:text-emerald-700 hover:bg-stone-100 rounded-lg flex items-center justify-between border-b border-[#e7e3d8]/60"
            >
              Ablauf
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-stone-800 hover:text-emerald-700 hover:bg-stone-100 rounded-lg flex items-center justify-between border-b border-[#e7e3d8]/60"
            >
              FAQ
            </button>
          </div>

          <div className="pt-6 border-t border-[#e7e3d8] pb-16 sm:pb-0 space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:+4916096351750"
                className="py-3 px-3 rounded-xl border border-[#e7e3d8] bg-white text-stone-800 font-sans text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Anrufen</span>
              </a>
              <a
                href="https://wa.me/4916096351750?text=Hallo%20Alexander,%20ich%20m%C3%B6chte%20ein%20Projekt%20besprechen."
                target="_blank"
                rel="noreferrer"
                className="py-3 px-3 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 font-sans text-xs flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 min-h-[44px] rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm text-center flex items-center justify-center transition-colors shadow-sm"
            >
              Projekt anfragen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
