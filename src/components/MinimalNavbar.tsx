import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
            <span className="font-display font-bold text-sm sm:text-base tracking-tight text-white transition-colors">
              Alexander Rheindorf
            </span>
          </div>
          <span className="text-xs font-sans text-zinc-500">
            Webdesign & Prozesse
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          <button 
            onClick={() => scrollToSection('angebot')} 
            className="text-sm font-sans text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Leistungen
          </button>
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="text-sm font-sans text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Referenz
          </button>
          <button 
            onClick={() => scrollToSection('architektur')} 
            className="text-sm font-sans text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            Automation
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="text-sm font-sans text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Action */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="bg-white text-zinc-950 hover:bg-zinc-200 font-sans font-medium text-sm px-5 py-2.5 rounded-lg transition-colors cursor-pointer min-h-[44px]"
          >
            Projekt anfragen
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-zinc-300 hover:text-white rounded-xl active:bg-zinc-800 focus:outline-none"
          aria-label="Navigation umschalten"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

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
              onClick={() => scrollToSection('architektur')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              Automation
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="w-full text-left py-3.5 px-3 min-h-[44px] text-lg font-sans text-zinc-300 hover:text-white hover:bg-white/[0.04] rounded-lg flex items-center justify-between border-b border-white/[0.04]"
            >
              FAQ
            </button>
          </div>

          <div className="pt-6 border-t border-white/[0.04] pb-16 sm:pb-0">
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
