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
    img: string;
    liveUrl: string;
    challenge: string;
    solution: string;
    result: string;
  }> = {
    'nawrath-bad': {
      title: 'AZ BADMANUFAKTUR & HEIZUNG',
      category: 'SHK MEISTERBETRIEB · KÖLN & KERPEN',
      img: nawrathImg,
      liveUrl: 'https://moebss.github.io/az-heizung-sanitaer/',
      challenge: 'Veraltete WordPress-Seite mit 8.4s Ladezeit. Notdienst-Anrufe im Feierabend gingen verloren und Komplettbad-Anfragen waren unqualifiziert.',
      solution: 'Handcodierte React 19 Plattform mit interaktivem 6-Schritte Bad-Budget-Kalkulator, automatischer Vor-Qualifikation und 3-Sekunden Notdienst-Routing.',
      result: '+340% qualifizierte Komplettbad-Anfragen, 100/100 PageSpeed und Platz #1 im Google Maps 3-Pack.',
    },
    'alyas-barber': {
      title: 'ALYAS BARBERSHOP HORREM',
      category: 'GENTLEMEN SALON · HORREM',
      img: alyasImg,
      liveUrl: 'https://moebss.github.io/alyas-barbershop-horrem/',
      challenge: 'Telefonklingeln während des Haareschneidens verursachte Stress und verpasste Neukunden. Hohe Terminausfälle ohne Erinnerungen.',
      solution: 'Dark Luxury Experience mit maßgeschneiderter Typografie, integriertem Style-Kalkulator und vollautomatisierter WhatsApp-Terminbuchung.',
      result: '120+ automatisierte Termine pro Monat, 0% No-Show Ausfälle und Google Top-Rank #1.',
    },
    'burning-bandit': {
      title: 'THE BURNING BANDIT INK',
      category: 'HIGH-END TATTOO & CRAFT',
      img: banditImg,
      liveUrl: 'https://moebss.github.io/the-burning-bandit-kerpen/',
      challenge: 'Kunden waren unsicher bezüglich Preisen, Cover-Ups und Hygiene. Lange E-Mail Wartezeiten führten zu Kundenabsprüngen.',
      solution: 'Dark Craft Studio-Atmosphäre mit interaktivem Vorher/Nachher Transformations-Slider und transparentem Preiskalkulator.',
      result: '+180% Neukunden-Ersttermine, 4.8★ bei 160+ Bewertungen und planbare Studio-Auslastung.',
    },
    'nails-shop': {
      title: 'THE NAILS SHOP HORREM',
      category: 'BOUTIQUE NAIL SPA & STUDIO',
      img: nailsImg,
      liveUrl: 'https://moebss.github.io/the-nails-shop-horrem/',
      challenge: 'Keine eigene Homepage, unübersichtliche Social Media Posts und zeitraubende manuelle Terminabsprachen.',
      solution: 'Sinnliches Studio-Design in Leinen & Warm Rosé mit Babyboomer-Slider und WhatsApp-Express Buchungs-Funnel.',
      result: 'Planbar 3 Wochen im Voraus ausgebucht, 100+ Top-Bewertungen und 0.35s Ladezeit.',
    },
  };

  const current = studies[activeTab] || studies['nawrath-bad'];

  return (
    <section id="case-study" className="border-b border-white/15 bg-[#050505] text-white">
      
      {/* Project Switcher Bar */}
      <div className="flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] border-b border-white/10 overflow-x-auto no-scrollbar font-mono text-xs">
        <span className="text-[#D4FF00] font-bold mr-2 uppercase tracking-wider">// CASE STUDY AUSWÄHLEN:</span>
        {Object.keys(studies).map((key) => (
          <button
            key={key}
            onClick={() => {
              setActiveTab(key);
              playClickSound();
            }}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className={`px-4 py-1.5 rounded transition-all cursor-pointer whitespace-nowrap font-bold ${
              activeTab === key
                ? 'bg-[#D4FF00] text-black shadow-md'
                : 'bg-white/5 text-slate-400 hover:text-white'
            }`}
          >
            {studies[key].title.split(' ')[0]} {studies[key].title.split(' ')[1] || ''}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* 1. Left Acid Lime Vertical Block */}
        <div className="lg:col-span-2 bg-[#D4FF00] text-black p-6 sm:p-8 flex flex-col justify-between items-start border-b lg:border-b-0 lg:border-r border-black select-none">
          <div className="space-y-1">
            <h3 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase leading-[0.85]">
              CASE <br />
              STUDY
            </h3>
          </div>

          <div className="text-4xl font-black mt-8">
            ↗
          </div>
        </div>

        {/* 2. Middle Visual Screenshot Block */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-[#0F0F0F] border-b lg:border-b-0 lg:border-r border-white/15 flex items-center justify-center">
          <div className="w-full rounded-lg overflow-hidden border border-white/20 bg-black shadow-2xl relative group">
            <img
              src={current.img}
              alt={current.title}
              className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
          </div>
        </div>

        {/* 3. Breakdown Details Block */}
        <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 bg-[#0A0A0A]">
          <div>
            <span className="font-mono text-[10px] text-[#D4FF00] font-bold uppercase tracking-widest block mb-1">
              {current.category}
            </span>
            <h4 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wide">
              {current.title}
            </h4>
          </div>

          {/* 3 Pillars: Challenge, Solution, Result */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            
            <div className="space-y-2">
              <div className="w-7 h-7 rounded bg-[#0044FF] text-white flex items-center justify-center font-bold">
                🎯
              </div>
              <span className="font-bold text-white uppercase block text-[11px]">THE CHALLENGE</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {current.challenge}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-7 h-7 rounded bg-[#0044FF] text-white flex items-center justify-center font-bold">
                ⚡
              </div>
              <span className="font-bold text-white uppercase block text-[11px]">THE SOLUTION</span>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                {current.solution}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-7 h-7 rounded bg-[#D4FF00] text-black flex items-center justify-center font-bold">
                🚀
              </div>
              <span className="font-bold text-[#D4FF00] uppercase block text-[11px]">THE RESULT</span>
              <p className="text-slate-300 text-[11px] leading-relaxed font-semibold">
                {current.result}
              </p>
            </div>

          </div>

          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => {
                playSuccessSound();
                onOpenContact();
              }}
              onMouseEnter={playHoverSound}
              data-cursor="pointer"
              className="neo-btn-lime text-xs"
            >
              <span>Projekt anfragen</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 4. Right Vertical Cobalt Blue Action Bar */}
        <a
          href={current.liveUrl}
          target="_blank"
          rel="noreferrer"
          onClick={playSuccessSound}
          onMouseEnter={playHoverSound}
          data-cursor="pointer"
          className="lg:col-span-1 bg-[#0044FF] hover:bg-[#1D4ED8] text-white p-6 flex lg:flex-col items-center justify-between transition-colors cursor-pointer text-center group"
          title="Live-Projekt im neuen Tab öffnen"
        >
          <span className="font-anton text-lg tracking-wider uppercase lg:[writing-mode:vertical-rl] lg:rotate-180 select-none">
            VIEW PROJECT
          </span>
          <ArrowUpRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
        </a>

      </div>
    </section>
  );
}
