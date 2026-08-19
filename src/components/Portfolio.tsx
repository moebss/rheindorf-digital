import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Zap, Star, ShieldCheck, MapPin, X, CheckCircle2, TrendingUp, Layers, Code2 } from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

import nawrathImg from '../images/media_1786374893160.png';
import alyasImg from '../images/media_1786244838088.png';
import banditImg from '../images/media_1786244763224.png';
import nailsImg from '../images/media_1786372914462.png';

interface PortfolioProps {
  onOpenContact: () => void;
}

interface Project {
  id: string;
  num: string;
  category: string;
  categoryLabel: string;
  year: string;
  title: string;
  location: string;
  impact: string;
  desc: string;
  stats: string;
  tags: string[];
  liveUrl: string;
  img: string;
  problem: string;
  solution: string;
  techHighlights: string[];
  metrics: { label: string; value: string }[];
}

export default function Portfolio({ onOpenContact }: PortfolioProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'nawrath-bad',
      num: '[01]',
      category: 'handwerk',
      categoryLabel: 'Handwerk & Badmanufaktur',
      year: '2026',
      title: 'AZ Heizung & Badmanufaktur Nawrath',
      location: 'Köln & Rhein-Erft-Kreis',
      impact: '+340% qualifizierte Komplettbad-Anfragen',
      desc: 'High-End Badsanierungs- & Heizungsplattform mit 3-Sekunden Notdienst-Routing, interaktivem 3D-Kostenrechner und Google Maps Local SEO Dominanz (#1 im 3-Pack).',
      stats: '100/100 PageSpeed · 0.38s FCP',
      tags: ['Badsanierungs-Rechner', '3-Sek. Notdienst Routing', 'Local SEO #1', 'Headless React'],
      liveUrl: 'https://moebss.github.io/az-heizung-sanitaer/',
      img: nawrathImg,
      problem: 'Alte, langsame WordPress-Website ohne mobile Nutzerführung. Notdienst-Anrufe gingen im Feierabend verloren und Komplettbad-Anfragen waren unqualifiziert.',
      solution: 'Kompletter React 19 Relaunch mit interaktivem 6-Schritte Bad-Budget-Kalkulator, automatischer Vor-Qualifikation und 3-Sekunden Notdienst-Routing für maximale Conversion.',
      techHighlights: ['React 19 + Vite + Tailwind 4', 'Schema.org JSON-LD LocalBusiness Rich Snippets', '0 Cookie Banner (100% DSGVO-konform ohne Tracking-Bloat)', 'Sub-0.4s First Contentful Paint'],
      metrics: [
        { label: 'Anfragen-Uplift', value: '+340%' },
        { label: 'Google PageSpeed', value: '100/100' },
        { label: 'FCP Ladezeit', value: '0.38s' },
        { label: 'Local Maps Rank', value: '#1 3-Pack' }
      ]
    },
    {
      id: 'alyas-barber',
      num: '[02]',
      category: 'beauty',
      categoryLabel: 'Barbershop & Herrensalon',
      year: '2026',
      title: 'Alyas Barbershop Horrem',
      location: 'Kerpen-Horrem · Bahnhofstraße 14',
      impact: '120+ automatisierte Termine / Monat',
      desc: 'Dark Luxury Experience mit maßgeschneiderter Typografie, integriertem Style-Kalkulator und vollautomatisierter WhatsApp- & Kalender-Terminbuchung.',
      stats: '4.9 ★ Google Top-Rank #1',
      tags: ['Cinematic Hero', 'WhatsApp Bot', 'Local SEO 3-Pack', 'Zero No-Shows'],
      liveUrl: 'https://moebss.github.io/alyas-barbershop-horrem/',
      img: alyasImg,
      problem: 'Telefonklingeln während des Haareschneidens führte zu Stress und verpassten Kundenanrufen. Viele Terminausfälle ohne Vorauszahlung/Erinnerung.',
      solution: 'Entwicklung einer immersiven Dark-Luxury Salon-Präsenz mit direktem WhatsApp-Buchungsflow und automatisierten SMS/WhatsApp Terminerinnerungen.',
      techHighlights: ['Dark Obsidian Ästhetik mit Goldakzenten', 'Nahtlose 1-Klick WhatsApp API Integration', 'Mobile-First Thumb-Zone Optimierung', 'Extrem komprimierte WebP Bildarchitektur'],
      metrics: [
        { label: 'Auto-Termine / Mo', value: '120+' },
        { label: 'No-Show Quote', value: '0%' },
        { label: 'Google Bewertung', value: '4.9 ★' },
        { label: 'Mobile Conversion', value: '68%' }
      ]
    },
    {
      id: 'burning-bandit',
      num: '[03]',
      category: 'gastro',
      categoryLabel: 'Tattoo, Burger & Craft Brand',
      year: '2026',
      title: 'The Burning Bandit Independent Ink',
      location: 'Kerpen-Horrem · Hauptstraße 231',
      impact: '+180% Neukunden & Terminanfragen',
      desc: 'Dark Craft Studio-Atmosphäre mit interaktivem Vorher/Nachher Transformations-Slider, Resident Artist Showcase und transparentem 3-Schritt Preiskalkulator.',
      stats: '4.8 ★ bei 160+ Reviews',
      tags: ['Transformations-Slider', 'Artist Showcase', 'Next-Gen UI', '100% DSGVO'],
      liveUrl: 'https://moebss.github.io/the-burning-bandit-kerpen/',
      img: banditImg,
      problem: 'Kunden waren unsicher bezüglich Preisen, Cover-Ups und Hygiene-Standards. Lange Wartezeiten bei E-Mail-Rückmeldungen führten zu Absprüngen.',
      solution: 'Interaktiver Cover-Up Vorher/Nachher-Slider, Vorstellung der Resident Artists und ein 3-Schritt Motiv- & Größenkonfigurator mit Sofort-Termin-Slotting.',
      techHighlights: ['Custom Before/After Canvas Slider', 'Framer Motion Staggered Fade-Ins', 'Mobile-Responsive Artist Wall', 'DSGVO-konforme Google Maps Einbettung'],
      metrics: [
        { label: 'Ersttermine Uplift', value: '+180%' },
        { label: 'Kundenbewertungen', value: '160+' },
        { label: 'PageSpeed Mobile', value: '99/100' },
        { label: 'Conversion Rate', value: '14.2%' }
      ]
    },
    {
      id: 'nails-shop',
      num: '[04]',
      category: 'beauty',
      categoryLabel: 'Boutique Nagelstudio & Spa',
      year: '2026',
      title: 'The Nails Shop Horrem',
      location: 'Kerpen-Horrem · Hauptstraße 18',
      impact: 'Planbar 3 Wochen im Voraus ausgebucht',
      desc: 'Sinnliches Studio-Design in Leinen & Warm Rosé mit Babyboomer-Slider, Google-Maps-Optimierung und WhatsApp-Express Buchungs-Funnel.',
      stats: '4.9 ★ bei 100+ Reviews',
      tags: ['Spa Ästhetik', 'Babyboomer Slider', 'WhatsApp Express', '0.3s Speed'],
      liveUrl: 'https://moebss.github.io/the-nails-shop-horrem/',
      img: nailsImg,
      problem: 'Unprofessioneller Auftritt auf sozialen Medien ohne eigene Homepage. Neukunden konnten sich über Behandlungsarten und Preise nicht transparent informieren.',
      solution: 'Elegante Spa- & Studio-Homepage mit warmen Farbtönen, übersichtlicher Behandlungstabelle und 1-Klick WhatsApp Express-Buchung.',
      techHighlights: ['Subtile Glassmorphism-Cards', 'Perfekte Farbhierarchie nach OKLCH-Standard', 'Schnelle Bildoptimierung unter 80kB', 'Local SEO Schema.org BeautySalon'],
      metrics: [
        { label: 'Auslastung', value: '3 W. Vorlauf' },
        { label: 'Google Rezensionen', value: '100+ (4.9★)' },
        { label: 'Ladezeit Mobil', value: '0.35s' },
        { label: 'Stammkunden-Zuwachs', value: '+65%' }
      ]
    },
  ];

  const categories = [
    { id: 'all', label: 'Alle Showcase-Projekte' },
    { id: 'handwerk', label: 'Handwerk & Badsanierung' },
    { id: 'beauty', label: 'Salons & Barber' },
    { id: 'gastro', label: 'Tattoo & Craft' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projekte" className="py-24 sm:py-32 bg-[#030712] relative overflow-hidden border-t border-white/10">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            <div className="luxury-pill">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// Live Client Showcase</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]">
              OUR INNOVATIVE <br />
              <span className="text-emerald-400">LOCAL PROJECTS.</span>
            </h2>

            <p className="text-xs sm:text-sm font-mono text-slate-300">
              Echte Kundenbetriebe im Raum Köln & NRW. Keine austauschbaren Standard-Templates, sondern maßgeschneiderte High-Conversion-Architektur.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  playClickSound();
                }}
                onMouseEnter={playHoverSound}
                data-cursor="pointer"
                className={`px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-white text-slate-950 shadow-xl scale-105'
                    : 'bg-[#070D1B] text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card Stacking Vertical List */}
        <div className="space-y-12 sm:space-y-16">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              data-cursor="view"
              className="luxury-card p-6 sm:p-10 group transition-all duration-500 hover:border-emerald-500/40"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Large Visual Browser Frame */}
                <div className="lg:col-span-7 overflow-hidden rounded-3xl bg-[#030712] border border-white/15 relative shadow-2xl">
                  
                  {/* Browser Shell Top Bar */}
                  <div className="px-4 py-3 bg-[#0D1527] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                      <span className="text-[10px] font-mono text-slate-400 ml-2 truncate max-w-[220px]">
                        {proj.liveUrl}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      LIVE PRODUCTION
                    </span>
                  </div>

                  {/* Screenshot with Zoom on Card Hover */}
                  <div className="relative h-72 sm:h-96 md:h-[420px] overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70" />

                    {/* Floating Live Impact Pill */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                      <div className="bg-[#030712]/90 backdrop-blur-md border border-emerald-500/40 px-4 py-2 rounded-2xl shadow-xl">
                        <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 fill-current" />
                          <span>{proj.impact}</span>
                        </span>
                      </div>

                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playSuccessSound}
                        onMouseEnter={playHoverSound}
                        data-cursor="pointer"
                        className="p-3 rounded-2xl bg-white text-slate-950 hover:bg-emerald-400 transition-colors shadow-2xl cursor-pointer"
                        title="Live-Website im neuen Tab öffnen"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>

                {/* Right Editorial Info Column */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider">
                        {proj.categoryLabel}
                      </span>
                      <span className="text-slate-500">{proj.year}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white group-hover:text-emerald-400 transition-colors leading-tight">
                      {proj.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{proj.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {proj.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-3 py-1 rounded-xl bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action & Stats Row */}
                  <div className="pt-4 flex items-center justify-between border-t border-white/10 gap-3">
                    <button
                      onClick={() => {
                        setSelectedCaseStudy(proj);
                        playSuccessSound();
                      }}
                      onMouseEnter={playHoverSound}
                      data-cursor="pointer"
                      className="luxury-btn-secondary text-xs py-2.5 px-4 cursor-pointer"
                    >
                      <Layers className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Case Study</span>
                    </button>

                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playSuccessSound}
                      onMouseEnter={playHoverSound}
                      data-cursor="pointer"
                      className="luxury-btn-primary text-xs py-2.5 px-5 !shadow-none cursor-pointer"
                    >
                      <span>Live testen</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Trigger */}
        <div className="text-center pt-8">
          <p className="font-mono text-xs text-slate-400 mb-4">
            Möchtest du eine vergleichbare High-End Präsenz für deinen Betrieb?
          </p>
          <button
            onClick={() => {
              playSuccessSound();
              onOpenContact();
            }}
            onMouseEnter={playHoverSound}
            data-cursor="pointer"
            className="luxury-btn-primary cursor-pointer"
          >
            <span>Projekt unverbindlich anfragen</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
          <div className="bg-[#070D1B] border border-emerald-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative space-y-8">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                  Case Study // {selectedCaseStudy.categoryLabel}
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {selectedCaseStudy.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  playClickSound();
                }}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {selectedCaseStudy.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-4 rounded-2xl bg-[#030712] border border-white/10 text-center">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">{m.label}</span>
                  <span className="font-display font-black text-xl text-emerald-400 mt-1 block">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Problem & Solution Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-wider block">
                  // Die Ausgangslage
                </span>
                <p className="font-mono text-xs text-slate-300 leading-relaxed">
                  {selectedCaseStudy.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  // Die Rheindorf Lösung
                </span>
                <p className="font-mono text-xs text-slate-300 leading-relaxed">
                  {selectedCaseStudy.solution}
                </p>
              </div>
            </div>

            {/* Tech Architecture Highlights */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase font-bold tracking-wider">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Technische Exzellenz & Architektur</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedCaseStudy.techHighlights.map((th, thIdx) => (
                  <div key={thIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300 p-3 rounded-xl bg-[#030712] border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{th}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={selectedCaseStudy.liveUrl}
                target="_blank"
                rel="noreferrer"
                onClick={playSuccessSound}
                className="luxury-btn-primary w-full sm:w-auto text-xs"
              >
                <span>Live-System im neuen Tab testen</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  onOpenContact();
                  playSuccessSound();
                }}
                className="luxury-btn-secondary w-full sm:w-auto text-xs"
              >
                <span>Ähnliches Projekt anfragen</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
