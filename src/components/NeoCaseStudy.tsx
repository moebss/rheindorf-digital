import React, { useState } from 'react';
import { ArrowUpRight, Target, Cpu, TrendingUp, ChevronRight } from 'lucide-react';
import nawrathImg from '../images/media_1786374893160.png';
import alyasImg from '../images/media_1786244838088.png';
import banditImg from '../images/media_1786244763224.png';
import nailsImg from '../images/media_1786372914462.png';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

interface NeoCaseStudyProps {
  onOpenContact: () => void;
  selectedId?: string;
}

export default function NeoCaseStudy({ onOpenContact, selectedId = 'nawrath-bad' }: NeoCaseStudyProps) {
  const [activeTab, setActiveTab] = useState(selectedId);

  const studies: Record<string, {
    title: string;
    category: string;
    blueprint: string[];
    img: string;
    liveUrl: string;
    challenge: string;
    solution: string;
    result: string;
  }> = {
    'nawrath-bad': {
      title: 'AZ BADMANUFAKTUR & HEIZUNG',
      category: 'SHK MEISTERBETRIEB · HANDWERK & FERTIGUNG',
      blueprint: ['React 19 Frontend', '6-Schritt Badkalkulator', 'Notdienst-Routing'],
      img: nawrathImg,
      liveUrl: 'https://moebss.github.io/az-heizung-sanitaer/',
      challenge: 'Veraltete WordPress-Seite mit 8.4s Ladezeit. Notdienst-Anrufe im Feierabend gingen verloren und Komplettbad-Anfragen waren unqualifiziert.',
      solution: 'Handcodierte React 19 Plattform mit interaktivem Bad-Budget-Kalkulator, digitaler Vor-Qualifikation und 3-Sekunden Notdienst-Routing.',
      result: '+340% qualifizierte Komplettbad-Anfragen, 100/100 PageSpeed und Platz #1 im Google Maps 3-Pack.',
    },
    'alyas-barber': {
      title: 'ALYAS BARBERSHOP HORREM',
      category: 'PREMIUM DIENSTLEISTER · TERMIN-AUTOMATION',
      blueprint: ['Dark Luxury Frontend', 'WhatsApp Business API', '0% No-Show Sync'],
      img: alyasImg,
      liveUrl: 'https://moebss.github.io/alyas-barbershop-horrem/',
      challenge: 'Telefonklingeln während der Behandlungen verursachte Stress und verpasste Neukunden. Hohe Terminausfälle ohne automatisierte Erinnerungen.',
      solution: 'Dark Luxury Experience mit digitaler Service-Selektion, direkter WhatsApp-Terminbuchung und vollautomatisierten Erinnerungs-Workflows.',
      result: '120+ automatisierte Termine pro Monat, 0% No-Show Ausfälle und #1 Google Ranking im Einzugsgebiet.',
    },
    'burning-bandit': {
      title: 'THE BURNING BANDIT INK',
      category: 'BRAND & CRAFT STUDIO · QUALIFIKATIONS-FUNNEL',
      blueprint: ['Next-Gen Studio UI', 'Stil- & Motiv-Diagnostik', 'Automatischer Vorfilter'],
      img: banditImg,
      liveUrl: 'https://moebss.github.io/the-burning-bandit-kerpen/',
      challenge: 'Lange E-Mail-Absprachen über Motiv-Ideen, Größen und Preise führten zu zeitraubenden Beratungs-Flaschenhälsen.',
      solution: 'Moderne Studio-Plattform mit interaktiver Projekt-Galerie, digitaler Stil-Vorqualifikation und transparentem Richtwert-Kalkulator.',
      result: '65% weniger administrativer Beratungsaufwand, +180% qualifizierte Ersttermine und planbare Studio-Auslastung.',
    },
    'nails-shop': {
      title: 'THE NAILS SHOP HORREM',
      category: 'BOUTIQUE STUDIO · 1-KLICK TERMIN-FUNNEL',
      blueprint: ['Ultra-Fast Frontend (0.35s)', 'WhatsApp-Direktbuchung', 'Local SEO Cluster'],
      img: nailsImg,
      liveUrl: 'https://moebss.github.io/the-nails-shop-horrem/',
      challenge: 'Keine eigene Homepage, unübersichtliche Social-Media-Direktnachrichten und zeitfressende manuelle Terminabsprachen.',
      solution: 'Sinnliches Studio-Design in Leinen & Warm Rosé, mobiler Express-Buchungs-Funnel und lückenlose Google Maps Optimierung.',
      result: 'Planbar 3 Wochen im Voraus ausgebucht, 100+ Top-Bewertungen und kompromisslose 0.35s Ladezeit.',
    },
  };

  const current = studies[activeTab] || studies['nawrath-bad'];

  return (
    <section id="portfolio" className="border-b border-white/[0.07] bg-[#09090b] text-white">
      
      {/* Project Switcher Bar */}
      <div className="flex items-center gap-2 px-6 py-4 bg-[#111114] border-b border-white/[0.08] overflow-x-auto no-scrollbar font-mono text-xs">
        <span className="text-emerald-400 font-bold mr-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Ausgewählte Arbeiten:
        </span>
        {Object.keys(studies).map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveTab(key);
              playClickSound();
            }}
            onMouseEnter={playHoverSound}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer whitespace-nowrap font-mono text-xs uppercase tracking-wider ${
              activeTab === key
                ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
            }`}
          >
            {studies[key].title.split(' ')[0]} {studies[key].title.split(' ')[1] || ''}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* 1. Left Editorial Label Block */}
        <div className="lg:col-span-2 bg-[#0d0d10] text-white p-6 sm:p-8 flex flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-white/[0.08] select-none">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold">
              Case Study
            </span>
            <h3 className="font-sans font-bold text-3xl sm:text-4xl tracking-tight uppercase leading-[0.95] text-white">
              Real <br />
              Proof.
            </h3>
          </div>

          <div className="text-2xl font-mono text-emerald-400 mt-8 hidden lg:block">
            0{Object.keys(studies).indexOf(activeTab) + 1}
          </div>
        </div>

        {/* 2. Middle Visual Screenshot Block with Browser Chrome & Blueprint */}
        <div className="lg:col-span-5 p-5 sm:p-8 bg-[#111114] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-center space-y-4">
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 bg-[#09090b] shadow-2xl relative group">
            {/* Browser Window Header */}
            <div className="px-4 py-2.5 bg-[#16161a] border-b border-white/10 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[10px] font-mono text-zinc-400 truncate max-w-[220px]">
                {current.liveUrl.replace('https://', '')}
              </div>
              <div className="w-8" />
            </div>

            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src={current.img}
                alt={current.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
          </div>

          {/* System Blueprint Pipeline */}
          <div className="p-3.5 rounded-xl bg-[#09090b] border border-white/[0.08]">
            <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Verdrahtete System-Architektur:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
              {current.blueprint.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-medium">
                    {step}
                  </span>
                  {idx < current.blueprint.length - 1 && (
                    <span className="text-zinc-600 font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Breakdown Details Block */}
        <div className="lg:col-span-4 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 bg-[#0d0d10]">
          <div>
            <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-widest block mb-2">
              {current.category}
            </span>
            <h4 className="font-sans text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {current.title}
            </h4>
          </div>

          {/* 3 Pillars: Challenge, Solution, Result */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08] text-xs font-sans">
            
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="font-mono font-bold text-rose-400 uppercase block text-[10px] tracking-wider mb-1">
                Ausgangssituation &amp; Problem:
              </span>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {current.challenge}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="font-mono font-bold text-emerald-400 uppercase block text-[10px] tracking-wider mb-1">
                Architektur &amp; Lösung:
              </span>
              <p className="text-zinc-300 text-xs leading-relaxed">
                {current.solution}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/25">
              <span className="font-mono font-bold text-emerald-300 uppercase block text-[10px] tracking-wider mb-1">
                Messbares Ergebnis:
              </span>
              <p className="text-white text-xs leading-relaxed font-semibold">
                {current.result}
              </p>
            </div>

          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              onClick={() => {
                playSuccessSound();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <span>Projekt anfragen</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4. Right Vertical Action Bar */}
        <a
          href={current.liveUrl}
          target="_blank"
          rel="noreferrer"
          onClick={playSuccessSound}
          className="lg:col-span-1 bg-[#151518] hover:bg-emerald-950/40 hover:border-emerald-500/40 border-t lg:border-t-0 lg:border-l border-white/[0.08] text-white p-6 flex lg:flex-col items-center justify-between transition-all cursor-pointer text-center group"
          title="Live-Projekt im neuen Tab öffnen"
        >
          <span className="font-mono text-xs font-bold tracking-wider uppercase lg:[writing-mode:vertical-rl] lg:rotate-180 select-none text-zinc-400 group-hover:text-emerald-300 transition-colors">
            Live-Demo ansehen ↗
          </span>
          <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:scale-125 transition-transform" />
        </a>

      </div>
    </section>
  );
}
