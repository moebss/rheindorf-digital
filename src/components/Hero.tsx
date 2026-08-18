import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, PhoneCall, ShieldCheck, Zap, Star, Flame, Scissors, Bath, CheckCircle2, ChevronRight } from 'lucide-react';
import alexanderHeroImg from '../images/hero_no_bg.png';
import alexanderProfileImg from '../images/profile.jpg';

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const [activeTab, setActiveTab] = useState<'nawrath' | 'alyas' | 'bandit' | 'nails'>('nawrath');

  const cases = {
    nawrath: {
      client: 'Nawrath Badsanierung',
      location: 'Köln & Bergheim',
      tag: 'Handwerk & Badplanung',
      result: '+340% qualifizierte Anfragen',
      tech: '3D-Bad-Konfigurator + Headless React',
      speed: '0.4s',
      color: 'from-blue-500/20 to-emerald-500/20',
      icon: Bath,
    },
    alyas: {
      client: 'Alyas Barbershop',
      location: 'Köln-Ehrenfeld',
      tag: 'Premium Friseur & Barbershop',
      result: '100% automatisierte Terminbuchung',
      tech: '24/7 KI-Voice-Telefonist',
      speed: '0.3s',
      color: 'from-amber-500/20 to-orange-500/20',
      icon: Scissors,
    },
    bandit: {
      client: 'The Burning Bandit',
      location: 'Frechen & Köln',
      tag: 'Smashburger & BBQ Brand',
      result: 'Viraler Hype & Tischreservierung',
      tech: '4K Cinema Video + Instant Ordering',
      speed: '0.4s',
      color: 'from-red-500/20 to-amber-500/20',
      icon: Flame,
    },
    nails: {
      client: 'The Nails Shop',
      location: 'Horrem (Erftkreis)',
      tag: 'Beauty Studio & Nageldesign',
      result: '#1 Ranking im Google Maps 3-Pack',
      tech: 'Local SEO + WhatsApp Express Lead',
      speed: '0.3s',
      color: 'from-rose-500/20 to-purple-500/20',
      icon: Star,
    },
  };

  const currentCase = cases[activeTab];

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 overflow-hidden">
      
      {/* Background Studio Light Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Plexify Studio Eyebrow Pill */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-[#0D1322]/90 border border-white/12 shadow-2xl backdrop-blur-xl">
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-mono font-bold text-[10px] uppercase tracking-wider">
              Bespoke Studio
            </span>
            <span className="text-xs font-mono text-slate-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Kein WordPress-Baukasten · 100% Handcoded & KI-integriert
            </span>
          </div>
        </div>

        {/* Main Massive Editorial Headline (Plexify Style) */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05] mb-6">
            Empower Your Brand with Next-Gen{' '}
            <span className="inline-flex items-center align-middle my-1">
              <span className="bg-white text-slate-950 px-4 sm:px-6 py-1 sm:py-2 rounded-full font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:bg-emerald-400 transition-colors duration-300">
                Web & KI
              </span>
            </span>{' '}
            für lokale Marktführer.
          </h1>

          <p className="font-mono text-xs sm:text-sm md:text-base text-slate-400 uppercase tracking-widest max-w-3xl mx-auto">
            High-End Webdesign, interaktive Rechner & 24/7 KI-Telefonassistenten für Handwerker & Dienstleister im Raum Köln & NRW.
          </p>
        </div>

        {/* Action Buttons & Social Proof Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onOpenContact}
            className="group w-full sm:w-auto plexify-btn plexify-btn-primary shadow-[0_0_35px_rgba(16,185,129,0.35)]"
          >
            <span>15-Min. Potenzialanalyse buchen</span>
            <div className="w-6 h-6 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-slate-950 group-hover:text-emerald-400 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

          <a
            href="#ki-telefonie"
            className="w-full sm:w-auto plexify-btn plexify-btn-secondary"
          >
            <PhoneCall className="w-4 h-4 text-emerald-400" />
            <span>KI-Voice live testen</span>
          </a>
        </div>

        {/* Central Plexify Interactive Showcase Card (The Flagship Visual Stack) */}
        <div className="relative max-w-5xl mx-auto">
          <div className="plexify-card p-6 sm:p-10 border-white/15 bg-gradient-to-b from-[#0D1322]/90 to-[#080C14]/90 shadow-2xl">
            
            {/* Header / Tabs Row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block mb-1">
                  // Live Case Study Switcher
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Echte Marktführer aus der Region
                </h3>
              </div>

              {/* Case Tabs */}
              <div className="flex items-center gap-1.5 bg-[#04060A]/80 p-1.5 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar">
                {(['nawrath', 'alyas', 'bandit', 'nails'] as const).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === key
                        ? 'bg-emerald-500 text-slate-950 shadow-lg'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {cases[key].client.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Interactive Showcase Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Case Details Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <currentCase.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {currentCase.client}
                    </h4>
                    <span className="text-xs font-mono text-slate-400">{currentCase.location} · {currentCase.tag}</span>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#04060A]/60 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-xs font-mono text-slate-400">Ergebnis:</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">{currentCase.result}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <span className="text-xs font-mono text-slate-400">Architektur:</span>
                    <span className="text-xs font-mono text-white">{currentCase.tech}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-400">Ladezeit (FCP):</span>
                    <span className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-current" /> {currentCase.speed}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#projekte"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    <span>Vollständige Case Study ansehen</span>
                    <ChevronRight className="w-4 h-4 text-emerald-400" />
                  </a>
                </div>
              </div>

              {/* Right Live Device Mockup Column */}
              <div className="lg:col-span-6">
                <div className={`relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${currentCase.color} border border-white/15 overflow-hidden group`}>
                  
                  {/* Performance 100 Badge Floating */}
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#04060A]/90 border border-emerald-500/30 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-mono text-[11px] font-bold text-emerald-400">100/100 SPEED</span>
                  </div>

                  {/* Visual Preview Graphic */}
                  <div className="relative rounded-2xl bg-[#080C14] border border-white/20 p-5 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">https://{activeTab}.rheindorf.digital</span>
                    </div>

                    <div className="space-y-3 py-4 text-left">
                      <div className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold uppercase">
                        Active Production Deployment
                      </div>
                      <div className="font-display font-bold text-lg sm:text-xl text-white">
                        {currentCase.client}
                      </div>
                      <p className="text-xs text-slate-400 font-mono">
                        {currentCase.tech} mit nativer Lead-Erfassung & automatisierter CRM-Synchronisation.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 font-mono text-[10px]">
                      <div className="p-2 rounded-xl bg-white/5 text-slate-300">
                        <span className="text-slate-500 block">SEO-INDEX</span>
                        <span className="text-emerald-400 font-bold">100% PageSpeed</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 text-slate-300">
                        <span className="text-slate-500 block">STATUS</span>
                        <span className="text-cyan-400 font-bold">24/7 Live Lead-Flow</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* Bottom Founder & Studio Trust Banner */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <img
                  src={alexanderHeroImg}
                  alt="Alexander Rheindorf"
                  className="w-10 h-10 rounded-full object-cover border border-white/20 bg-emerald-500/10"
                />
                <div>
                  <span className="text-white font-bold block">Alexander Rheindorf</span>
                  <span className="text-[10px] text-slate-500">Founder & Leitender Entwickler</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  DSGVO & § 5 DDG Konform
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Festpreisgarantie
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
