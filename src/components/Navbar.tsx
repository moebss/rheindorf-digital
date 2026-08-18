import React, { useState } from 'react';
import { Phone, ArrowUpRight, Menu, X, Sparkles, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 lg:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Studio Pill */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-11 h-11 rounded-2xl bg-[#080C14] border border-white/15 p-0.5 flex items-center justify-center shadow-2xl group-hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
            <img
              src={alexanderProfileImg}
              alt="Alexander Rheindorf"
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#04060A]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white block leading-none group-hover:text-emerald-400 transition-colors">
                RHEINDORF<span className="text-emerald-400 font-mono text-lg font-light">.DIGITAL</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                STUDIO KÖLN
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase block mt-1">
              Bespoke Web & AI Systems
            </span>
          </div>
        </a>

        {/* Floating Capsule Nav for Desktop */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#080C14]/90 backdrop-blur-xl border border-white/10 p-1.5 rounded-full shadow-2xl">
          <a href="#projekte" className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            [01] Showcase
          </a>
          <a href="#prozess" className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            [02] Prozess
          </a>
          <a href="#leistungen" className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            [03] KI & Web
          </a>
          <a href="#ki-telefonie" className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            [04] KI-Voice Demo
          </a>
          <a href="#vergleich" className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            [05] Standard
          </a>
          <a href="#rechner" className="px-4 py-2 rounded-full text-xs font-mono font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-all">
            [06] Rechner
          </a>
        </nav>

        {/* Right CTA Actions (Plexify Style with Dynamic Arrow) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/4916096351750?text=Hallo%20Alexander,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20neue%20Website%20und%20KI-Systeme."
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 text-xs font-mono font-bold text-slate-200 bg-[#080C14] hover:bg-[#0D1322] border border-white/10 hover:border-emerald-500/40 px-4 py-2.5 rounded-full transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-slate-950 hover:bg-emerald-400 font-display font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] cursor-pointer"
          >
            <span>Projekt anfragen</span>
            <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-slate-950 group-hover:text-emerald-400 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

          {/* Hamburger / Menu Pill */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-[#080C14] border border-white/15 text-slate-200 hover:text-emerald-400 hover:border-emerald-500/40 transition-all cursor-pointer"
            aria-label="Menü öffnen"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Full-Screen / Side Drawer Menu (Plexify Style) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] z-40 bg-[#04060A]/95 backdrop-blur-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-300">
          <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
            
            {/* Left Info Column */}
            <div className="md:col-span-5 space-y-6 border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <div className="plexify-pill text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Boutique Studio Köln / NRW</span>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Direkter Kontakt</h3>
                <p className="text-slate-400 text-sm">Kein Vorzimmer, keine Agentur-Zwischenstufen. Du sprichst direkt mit dem Inhaber.</p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <a href="tel:016096351750" className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+49 (0) 160 96351750</span>
                </a>
                <a href="mailto:hello@rheindorf.digital" className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>hello@rheindorf.digital</span>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 text-slate-400">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Köln & Kerpen (NRW)</span>
                </div>
              </div>
            </div>

            {/* Right Nav Column */}
            <div className="md:col-span-7 flex flex-col justify-center space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2 block">Navigation</span>
              <a
                href="#projekte"
                onClick={handleNavClick}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 transition-all text-white hover:text-emerald-400"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Showcase & Referenzen</span>
                <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400">[01]</span>
              </a>
              <a
                href="#prozess"
                onClick={handleNavClick}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 transition-all text-white hover:text-emerald-400"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">4-Schritte-Prozess</span>
                <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400">[02]</span>
              </a>
              <a
                href="#leistungen"
                onClick={handleNavClick}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 transition-all text-white hover:text-emerald-400"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Systeme & KI-Voice</span>
                <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400">[03]</span>
              </a>
              <a
                href="#vergleich"
                onClick={handleNavClick}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 transition-all text-white hover:text-emerald-400"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Der Rheindorf Standard</span>
                <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400">[04]</span>
              </a>
              <a
                href="#rechner"
                onClick={handleNavClick}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 transition-all text-white hover:text-emerald-400"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight">Kosten- & ROI-Rechner</span>
                <span className="font-mono text-xs text-slate-500 group-hover:text-emerald-400">[05]</span>
              </a>
              <a
                href="#kontakt"
                onClick={() => { handleNavClick(); onOpenContact(); }}
                className="group flex items-center justify-between p-3.5 rounded-2xl hover:bg-white/5 transition-all text-white hover:text-emerald-400"
              >
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-emerald-400">Projekt starten</span>
                <span className="font-mono text-xs text-emerald-400">[06]</span>
              </a>
            </div>

          </div>

          <div className="max-w-4xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <span>© 2026 RHEINDORF DIGITAL · KÖLN & ERFTKREIS</span>
            <div className="flex items-center gap-4">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Aktuell 2 Plätze für Q3 frei
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
