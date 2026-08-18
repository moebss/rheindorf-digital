import React from 'react';
import { Layout, Bot, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, ArrowUpRight, Sparkles, Calculator, Zap } from 'lucide-react';

interface ServiceTabsProps {
  onOpenContact: () => void;
}

export default function ServiceTabs({ onOpenContact }: ServiceTabsProps) {
  const services = [
    {
      id: 'webdesign',
      num: '[01]',
      title: 'High-End Webdesign & Relaunch',
      tag: 'Bestseller für lokale Betriebe',
      desc: 'Maßgeschneiderte, handcodierte Websites speziell für lokale Marktführer in Köln, Kerpen & NRW. Keine überladenen WordPress-Baukästen, sondern kaufstarke Benutzeroberflächen mit modernster React- & Vite-Technologie.',
      bullets: [
        '100% Smartphone- & Tablet-Optimierung (Mobile First)',
        'Ladezeiten unter 0.4 Sekunden (Lighthouse Score 100)',
        'Integrierter Vorher/Nachher-Slider & interaktiver Preiskalkulator',
        'Rechtssicher nach DSGVO & § 5 DDG mit self-hosted Schriftarten'
      ],
      price: 'ab 1.490 € (Festpreis)',
      stats: '100/100 PageSpeed Benchmark'
    },
    {
      id: 'ki',
      num: '[02]',
      title: '24/7 KI-Telefonassistent & Voice AI',
      tag: 'Keine verlorenen Neukundenanrufe',
      desc: 'Ein intelligenter deutscher Sprachassistent nimmt Anrufe auf der Baustelle oder im Kundentermin entgegen, beantwortet Detailfragen zu Preisen und bucht Termine direkt in deinen Meister-Kalender.',
      bullets: [
        '24/7 telefonische Erreichbarkeit auch nach Feierabend & am Wochenende',
        'Direkte Kalender-Synchronisation (Google/Outlook)',
        'Natürlich klingende deutsche KI-Stimme mit Fachvokabular',
        'Sofortige WhatsApp- & SMS-Zusammenfassung nach jedem Anruf'
      ],
      price: 'ab 1.890 € (Einmalig)',
      stats: '0 verpasste Notfall-Anrufe'
    },
    {
      id: 'rechner',
      num: '[03]',
      title: 'Interaktive Rechner & Lead-Funnels',
      tag: '3x höhere Anfrage-Quote',
      desc: 'Verwandle passive Website-Besucher in kaufbereite Leads mit interaktiven 3D-Badsanierungs-Kalkulatoren, Friseur-Preisfindern und Schritt-für-Schritt Angebots-Konfiguratoren.',
      bullets: [
        'Kunden konfigurieren ihr Projekt vorab online',
        'Gefilterte, hochqualifizierte Anfragen mit Budgetangabe',
        'Automatische PDF- oder Mail-Zusammenfassung an den Meister',
        'Massive Zeitersparnis bei der Erstberatung'
      ],
      price: 'im Web-Paket enthalten',
      stats: '+340% Anfrage-Qualität'
    },
    {
      id: 'seo',
      num: '[04]',
      title: 'Local SEO & Google Maps 3-Pack Dominanz',
      tag: 'Platz #1 in deiner Region',
      desc: 'Gezielte lokale Suchmaschinenoptimierung für Köln, Kerpen, Bergheim, Frechen & ganz NRW. Damit Kunden aus deinem Einzugsgebiet bei Google ganz oben landen.',
      bullets: [
        'Schema.org ProfessionalService & LocalBusiness JSON-LD',
        'Geo-Targeting Keyword-Cluster für deine Städte & Leistungen',
        'Google My Business & Google Maps 3-Pack Optimierung',
        'Nachhaltige Top-Rankings ohne teure Google Ads Budgets'
      ],
      price: 'im Web-Paket enthalten',
      stats: '#1 Google 3-Pack Ranking'
    }
  ];

  return (
    <section id="leistungen" className="py-24 sm:py-32 bg-[#030712] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-10 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="luxury-pill">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// Studio Leistungen & Systeme</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]">
              Bespoke Digital & <br />
              <span className="text-emerald-400">AI Capabilities.</span>
            </h2>

            <p className="font-mono text-xs sm:text-sm text-slate-300">
              Schlüsselfertige Systeme für Handwerker & Dienstleister. 100% Festpreisgarantie, voller Quellcode-Besitz, keine Agentur-Zwischenstufen.
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="luxury-btn-primary shrink-0 text-xs"
          >
            <span>Projekt besprechen</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="luxury-card p-8 sm:p-10 flex flex-col justify-between group transition-all duration-500"
            >
              <div>
                {/* Top Number & Tag Row */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white group-hover:text-emerald-400 transition-colors">
                    {srv.num}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {srv.tag}
                  </span>
                </div>

                {/* Title & Desc */}
                <div className="space-y-3 mb-6">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                {/* Bullets */}
                <div className="space-y-2.5 pt-2 border-t border-white/5 mb-8">
                  {srv.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs font-mono text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Action Row */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-500 block uppercase">FESTPREIS:</span>
                  <span className="font-display font-bold text-sm sm:text-base text-emerald-400">{srv.price}</span>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-12 h-12 rounded-full bg-white text-slate-950 hover:bg-emerald-400 hover:scale-105 flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer"
                  title="Jetzt unverbindlich anfragen"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
