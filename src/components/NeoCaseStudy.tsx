import React, { useState } from 'react';
import { ArrowUpRight, Zap, CheckCircle2, ShieldCheck, PhoneCall, Sparkles, Hammer } from 'lucide-react';
import smokyHeroImg from '../images/smoky_headshop.jpg';
import handwerkerDemoImg from '../images/handwerker_demo.jpg';
import nagelstudioDemoImg from '../images/nagelstudio_demo.jpg';

interface NeoCaseStudyProps {
  onOpenContact: () => void;
}

type ProjectKey = 'smoky' | 'handwerker' | 'nagelstudio';

export default function NeoCaseStudy({ onOpenContact }: NeoCaseStudyProps) {
  const [activeProject, setActiveProject] = useState<ProjectKey>('smoky');

  const projects = {
    smoky: {
      type: 'Echtes Kundenprojekt • Live im Netz',
      title: 'Smoky Head&Shisha Shop',
      subtitle: 'Kerpen-Horrem • Lokales Ladenlokal',
      image: smokyHeroImg,
      location: 'Bahnhofstraße 20, 50169 Kerpen',
      liveUrl: 'https://smoky-headshop.de/',
      isLive: true,
      stats: [
        { value: '< 0.35s', label: 'Ladezeit Mobil', highlight: true },
        { value: 'Top #1', label: 'Google Maps Kerpen', highlight: false },
        { value: '100/100', label: 'Google PageSpeed', highlight: true },
        { value: '0 € Abo', label: 'Keine Plugin-Kosten', highlight: false },
      ],
      blueprint: [
        'Mobil-Speed (< 0.35s)',
        'Google Maps Platz #1',
        'Digitales Sortiments-Schaufenster',
        'WhatsApp Vorbestellung'
      ],
      challenge: 'Das Ladenlokal an der Bahnhofstraße in Kerpen-Horrem verfügte über keine eigene Homepage. Lokale Google-Suchen liefen ins Leere, und wiederkehrende Sortiments- und Verfügbarkeitsfragen banden im Tagesgeschäft viel Zeit.',
      solution: 'Entwicklung einer blitzschnellen Web-Plattform im edlen Dark-Smoke-Design. Vollständige Schema.org-Integration für Google Maps, interaktiver Produktkatalog sowie Vorbestell-Workflows zur Entlastung des Personals.',
      testimonial: {
        quote: '„Kunden finden uns jetzt sofort über Google Maps, und die meisten Fragen klären sich über die Website von selbst. Alles lädt blitzschnell auf jedem Handy, sieht extrem hochwertig aus und wir stehen im Erftkreis ganz oben. Die Zusammenarbeit war unkompliziert und direkt.“',
        author: 'Alexander K.',
        role: 'Inhaber • Smoky Headshop'
      }
    },
    handwerker: {
      type: 'Branchen-Demo • Aus Website-Generator',
      title: 'Rheinland Bedachungen & Sanierung',
      subtitle: 'Meisterbetrieb • Bedachung & Notdienst',
      image: handwerkerDemoImg,
      location: 'Musterbetrieb • Rhein-Erft-Kreis & Köln',
      liveUrl: null,
      isLive: false,
      stats: [
        { value: '< 0.30s', label: 'Ladezeit auf Baustelle', highlight: true },
        { value: '1-Klick', label: 'WhatsApp Notdienst', highlight: false },
        { value: '100% DSGVO', label: 'Rechtssicher § 5 DDG', highlight: true },
        { value: '0 Zettel', label: 'Direkt im Meisterhandy', highlight: false },
      ],
      blueprint: [
        'Baustellen-Speed (< 0.30s)',
        '1-Klick Notdienst-Knopf',
        'Schadens-Foto via WhatsApp',
        'Automatische Kalender-Ablage'
      ],
      challenge: 'Wenn nach einem Unwetter das Dach leckt, sucht der Kunde auf dem Smartphone nach einem Dachdecker. Lädt die Seite länger als 3 Sekunden oder hat ein unübersichtliches Formular, ruft der Kunde sofort den nächsten Betrieb an.',
      solution: 'Schlanke, extrem schnelle Website mit prominentem 1-Klick-Notdienst. Der Kunde kann Schadensfotos direkt per WhatsApp senden. Die Anfrage landet sofort mit Adresse und Telefonnummer auf dem Smartphone des Meisters.',
      testimonial: {
        quote: '„Schluss mit Zettelwirtschaft im Transporter: Wenn ein Kunde anfragt, habe ich Adresse, Fotos und Kontaktdaten direkt auf dem Handy. Das spart mir und meinem Team jeden Tag mindestens eine Stunde Schreibkram.“',
        author: 'Praxis-Szenario',
        role: 'Typischer Ablauf für Handwerksbetriebe'
      }
    },
    nagelstudio: {
      type: 'Branchen-Demo • Aus Website-Generator',
      title: 'Studio Lumière Nails & Pflege',
      subtitle: 'Boutique-Studio • Maniküre & Shellac',
      image: nagelstudioDemoImg,
      location: 'Musterbetrieb • Kerpen & Umgebung',
      liveUrl: null,
      isLive: false,
      stats: [
        { value: '< 0.28s', label: 'Sofortige Ladezeit', highlight: true },
        { value: 'Vorlagen', label: 'Foto-Wunsch via WhatsApp', highlight: false },
        { value: '0 Spams', label: 'Kein Cookie-Zwang', highlight: true },
        { value: '24h Alarm', label: 'Automatische Erinnerung', highlight: false },
      ],
      blueprint: [
        'Edles Studio-Design (< 0.28s)',
        'Verlustfreie Vorher-Nachher-Galerie',
        'Vorlagen-Check via WhatsApp',
        'Automatische Terminerinnerung'
      ],
      challenge: 'Kundinnen möchten vor der Buchung echte Arbeitsergebnisse (Babyboomer, French, Nagelmodellage) sehen und unkompliziert Termine vereinbaren, ohne während der laufenden Behandlung anrufen zu müssen.',
      solution: 'Ästhetisches Studio-Design mit gestochen scharfen Vorher-Nachher-Galerien, transparenter Preisübersicht und 1-Klick-Terminanfrage per WhatsApp inklusive Foto-Upload für Wunschdesigns.',
      testimonial: {
        quote: '„Kundinnen schicken ihr Wunsch-Design vorab einfach per WhatsApp mit. Keine Telefon-Unterbrechungen mehr während der Behandlung und Terminerinnerungen laufen völlig lautlos im Hintergrund.“',
        author: 'Praxis-Szenario',
        role: 'Typischer Ablauf für Nagel- & Kosmetikstudios'
      }
    }
  };

  const current = projects[activeProject];

  return (
    <section id="portfolio" className="border-b border-stone-900/[0.08] bg-[#f5f2eb]/60 py-20 sm:py-28 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-800 font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Praxis &bull; Echte Ergebnisse &amp; Demos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-stone-900 leading-tight">
              Echte Kunden &amp; Branchen-Lösungen.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Ob verifiziertes Ladenlokal im Erftkreis oder passgenaue Systeme für Handwerker und Studios – hier siehst du, wie das in der Realität aussieht.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-8">
          <button
            onClick={() => setActiveProject('smoky')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeProject === 'smoky'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white border border-stone-900/[0.08] text-stone-700 hover:bg-stone-100'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>1. Smoky Headshop (Echt &bull; Live)</span>
          </button>

          <button
            onClick={() => setActiveProject('handwerker')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeProject === 'handwerker'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white border border-stone-900/[0.08] text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Hammer className="w-3.5 h-3.5 text-stone-400" />
            <span>2. Rheinland Bedachungen (Handwerker-Demo)</span>
          </button>

          <button
            onClick={() => setActiveProject('nagelstudio')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-sans font-medium transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
              activeProject === 'nagelstudio'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white border border-stone-900/[0.08] text-stone-700 hover:bg-stone-100'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-stone-400" />
            <span>3. Studio Lumière (Nagelstudio-Demo)</span>
          </button>
        </div>

        {/* 4 Core Highlight Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {current.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-stone-900/[0.08] shadow-xs min-w-0">
              <div className={`text-xl sm:text-2xl font-bold font-mono tracking-tight truncate ${stat.highlight ? 'text-emerald-700' : 'text-stone-900'}`}>
                {stat.value}
              </div>
              <div className="text-[11px] font-mono text-stone-500 uppercase mt-1 truncate">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Real Photo & System Pipeline */}
          <div className="lg:col-span-7 space-y-5">
            <div className="rounded-2xl overflow-hidden border border-stone-900/[0.08] bg-white relative group shadow-sm">
              <div className="relative overflow-hidden aspect-[16/10] bg-stone-900">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md border border-stone-900/[0.08] text-xs font-mono text-stone-800 flex items-center gap-2 shadow-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  <span>{current.location}</span>
                </div>
              </div>
            </div>

            {/* Architecture Pipeline */}
            <div className="p-4 rounded-xl bg-white border border-stone-900/[0.08] shadow-xs">
              <div className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                <Zap className="w-3.5 h-3.5 text-emerald-600" />
                <span>Eingebaute Funktionen:</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                {current.blueprint.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-2.5 py-1 rounded bg-[#fbf9f5] border border-stone-900/[0.08] text-stone-800 font-medium">
                      {step}
                    </span>
                    {idx < current.blueprint.length - 1 && (
                      <span className="text-stone-400 font-bold">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Action Bar for Live Project or Demo Inquiry */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
              {current.isLive && current.liveUrl ? (
                <a
                  href={current.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-stone-900/[0.08] bg-white text-stone-800 hover:text-emerald-800 hover:bg-[#fbf9f5] font-sans font-medium text-sm transition-colors cursor-pointer group min-h-[44px] shadow-xs"
                >
                  <span>Live-Website öffnen</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-sans font-medium text-sm transition-colors cursor-pointer group min-h-[44px]"
                >
                  <span>Gleiches System für deinen Betrieb anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}

              <span className="text-xs font-mono text-stone-500 text-center sm:text-right">
                {current.type}
              </span>
            </div>
          </div>

          {/* Right Column: Challenge, Solution & Testimonial */}
          <div className="lg:col-span-5 bg-white border border-stone-900/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs">
            <div>
              <span className="text-xs font-mono text-emerald-800 block mb-1 font-bold">
                {current.subtitle}
              </span>
              <h3 className="font-display text-2xl font-bold text-stone-900 tracking-tight">
                {current.title}
              </h3>
            </div>

            <div className="space-y-4 text-xs font-sans">
              {/* Challenge */}
              <div className="bg-[#fbf9f5] rounded-xl p-4 border border-stone-900/[0.06] space-y-1">
                <span className="text-xs font-mono uppercase text-stone-500 block tracking-wider font-semibold">
                  Ausgangslage:
                </span>
                <p className="text-stone-600 text-xs leading-relaxed">
                  {current.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[#fbf9f5] rounded-xl p-4 border border-stone-900/[0.06] space-y-1">
                <span className="text-xs font-mono uppercase text-stone-500 block tracking-wider font-semibold">
                  Umsetzung &amp; Nutzen:
                </span>
                <p className="text-stone-700 text-xs leading-relaxed">
                  {current.solution}
                </p>
              </div>

              {/* Integrated Testimonial Quote */}
              <div className="bg-emerald-50/70 rounded-xl p-4 border border-emerald-200/80 space-y-2">
                <p className="text-stone-800 text-xs italic leading-relaxed">
                  {current.testimonial.quote}
                </p>
                <div className="flex items-center justify-between pt-1 border-t border-emerald-200/50 text-[11px] font-mono text-emerald-900">
                  <span className="font-bold">{current.testimonial.author}</span>
                  <span className="text-stone-500">{current.testimonial.role}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm px-5 py-3 rounded-xl transition-all shadow-[0_4px_15px_rgba(4,120,87,0.25)] cursor-pointer min-h-[44px]"
              >
                <span>Projekt unverbindlich besprechen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
