import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  ArrowRight,
  TrendingDown,
  TrendingUp,
  SlidersHorizontal
} from 'lucide-react';

interface MetricItem {
  category: string;
  before: {
    title: string;
    description: string;
    badge: string;
    score?: string;
  };
  after: {
    title: string;
    description: string;
    badge: string;
    score?: string;
  };
}

export default function BeforeAfterComparison() {
  const [activeTab, setActiveTab] = useState<'all' | 'speed' | 'dsgvo' | 'leads'>('all');

  const metrics: MetricItem[] = [
    {
      category: 'speed',
      before: {
        title: '6.4 Sekunden Ladezeit',
        description: 'Überladenes WordPress-Theme, 42 Plugins, unkomprimierte Bilder. Besucher springen genervt ab, bevor die erste Zeile gelesen ist.',
        badge: '68% Absprungrate',
        score: '34/100'
      },
      after: {
        title: '0.35 Sekunden Ladezeit',
        description: 'Handgeschriebener, sauberer Code ohne Plugin-Ballast. Lädt auf jedem Smartphone im Bruchteil eines Wimpernschlags.',
        badge: 'Sofort einsatzbereit',
        score: '100/100'
      }
    },
    {
      category: 'dsgvo',
      before: {
        title: 'Aggressives Cookie-Monster',
        description: 'Ein riesiges Banner blockiert den gesamten Bildschirm auf dem Smartphone. 28 Drittanbieter-Tracker (US-Server) gefährden deine Rechtssicherheit.',
        badge: 'Abmahnrisiko hoch'
      },
      after: {
        title: '100 % DSGVO ohne Banner-Zwang',
        description: 'Keine US-Tracker, lokal gehostete Schriftarten, datenschutzkonforme Infrastruktur. Besucher sehen sofort dein Angebot – ganz ohne Klick-Hürde.',
        badge: 'Rechtssicher § 5 DDG'
      }
    },
    {
      category: 'leads',
      before: {
        title: '12-teiliges Pflicht-Formular',
        description: 'Unübersichtliche Kontaktseiten ohne Sofortkontakt. Eingehende Anfragen landen als unformatierte E-Mail im Spam-Ordner und verstauben.',
        badge: 'Kaum Rückläufer'
      },
      after: {
        title: '1-Klick WhatsApp & Direkt-Anruf',
        description: 'Klar strukturierte Kontaktpfade. Eingehende Anfragen landen in Sekundenschnelle mit allen Infos direkt als Meldung auf deinem Smartphone.',
        badge: 'Mehr Termine & Kunden'
      }
    },
    {
      category: 'leads',
      before: {
        title: '90 – 150 € monatliche Pflichtkosten',
        description: 'Teure Plugin-Abonnements, ständige Wartungsverträge aus Angst vor Sicherheitslücken und Abstürzen nach WordPress-Updates.',
        badge: 'Laufende Kostenfalle'
      },
      after: {
        title: '0 € Zwangskosten – Dein Eigentum',
        description: 'Vollständige Unabhängigkeit. Du erhältst den gesamten Quellcode, kein Agentur-Lock-in und zahlst nur dann für Support, wenn du ihn wirklich brauchst.',
        badge: '100% Volle Kontrolle'
      }
    }
  ];

  const filteredMetrics = activeTab === 'all' 
    ? metrics 
    : metrics.filter(m => m.category === activeTab);

  return (
    <section id="vergleich" className="py-24 sm:py-32 border-b border-[#e7e3d8] bg-[#f5f0e6] relative overflow-hidden">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 bg-grid-stone opacity-40 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-800 font-medium">
              Der Unterschied &bull; Handwerk vs. Stange
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-stone-900 leading-tight">
              Warum moderne Websites Kunden bringen – und Baukästen Geld kosten.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-700 font-sans leading-relaxed">
            Die meisten Betriebe im Rheinland verlieren 60 % ihrer potenziellen Kunden in den ersten 3 Sekunden. Hier ist der direkte technische Vergleich im Klartext.
          </p>
        </div>

        {/* Filter Pills for quick inspection */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs font-mono text-stone-500 mr-2 flex items-center gap-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Fokus:</span>
          </span>
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeTab === 'all' 
                ? 'bg-stone-900 text-white font-semibold shadow-xs' 
                : 'bg-white/80 text-stone-700 border border-[#e7e3d8] hover:bg-white'
            }`}
          >
            Alle 4 Säulen
          </button>
          <button
            onClick={() => setActiveTab('speed')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeTab === 'speed' 
                ? 'bg-stone-900 text-white font-semibold shadow-xs' 
                : 'bg-white/80 text-stone-700 border border-[#e7e3d8] hover:bg-white'
            }`}
          >
            Ladezeit &amp; Speed
          </button>
          <button
            onClick={() => setActiveTab('dsgvo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeTab === 'dsgvo' 
                ? 'bg-stone-900 text-white font-semibold shadow-xs' 
                : 'bg-white/80 text-stone-700 border border-[#e7e3d8] hover:bg-white'
            }`}
          >
            DSGVO &amp; Cookie-Banner
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
              activeTab === 'leads' 
                ? 'bg-stone-900 text-white font-semibold shadow-xs' 
                : 'bg-white/80 text-stone-700 border border-[#e7e3d8] hover:bg-white'
            }`}
          >
            Kundenanfragen &amp; Kosten
          </button>
        </div>

        {/* Visual Dual Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT: Typical Slow Agency / WordPress Site */}
          <div className="rounded-2xl border border-stone-300/80 bg-stone-100/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-300">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-stone-200 border border-stone-300 flex items-center justify-center text-stone-700">
                    <TrendingDown className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-display font-bold text-stone-800 text-sm sm:text-base">
                    Typische Baukasten- / WP-Seite
                  </span>
                </div>
                <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-stone-200 text-stone-700 border border-stone-300">
                  Status Quo
                </span>
              </div>

              {/* Items List */}
              <div className="mt-6 space-y-6">
                {filteredMetrics.map((item, idx) => (
                  <div key={idx} className="space-y-1.5 pb-5 border-b border-stone-200/80 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-sans font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
                        <span>{item.before.title}</span>
                      </h4>
                      {item.before.score ? (
                        <span className="text-xs font-mono font-bold text-rose-800 bg-rose-100 border border-rose-300 px-2 py-0.5 rounded shrink-0">
                          {item.before.score}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-rose-800 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-medium shrink-0">
                          {item.before.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      {item.before.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-300 text-xs font-mono text-stone-500">
              Ergebnis: Hohe Absprungraten, monatliche Kosten, frustrierte Besucher
            </div>
          </div>

          {/* RIGHT: Rheindorf Digital Modern React Architecture */}
          <div className="rounded-2xl border-2 border-emerald-500/60 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-[0_12px_40px_rgba(5,150,105,0.08)] relative overflow-hidden">
            {/* Visual Emerald Highlight Ribbon */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                    <TrendingUp className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-display font-bold text-stone-900 text-sm sm:text-base">
                    Rheindorf Digital (Handcodiert)
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
                  Moderne Lösung
                </span>
              </div>

              {/* Items List */}
              <div className="mt-6 space-y-6">
                {filteredMetrics.map((item, idx) => (
                  <div key={idx} className="space-y-1.5 pb-5 border-b border-stone-100 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="font-sans font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{item.after.title}</span>
                      </h4>
                      {item.after.score ? (
                        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded shrink-0">
                          {item.after.score}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium shrink-0">
                          {item.after.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      {item.after.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-emerald-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs font-mono text-emerald-800 font-semibold">
                Ergebnis: Maximale Conversion, blitzschnell, 100% zukunftssicher
              </span>
              <a
                href="#website-check"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <span>Deine Seite prüfen</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Real Proof Banner */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-[#e7e3d8] bg-white flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-stone-900 font-sans">
                Neugierig, wie deine aktuelle Website technisch dasteht?
              </div>
              <div className="text-xs text-stone-600 font-sans mt-0.5">
                Nutze den kostenlosen Schnell-Audit unten auf dieser Seite – inklusive Ladezeiten- und DSGVO-Check.
              </div>
            </div>
          </div>

          <a
            href="#website-check"
            className="shrink-0 px-4 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-sans font-medium transition-colors cursor-pointer min-h-[44px] flex items-center gap-2"
          >
            <span>Zum Speed-Check</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
