import React from 'react';
import { Layout, GitBranch, Check, X, ArrowUpRight, ArrowRight } from 'lucide-react';

interface DualOfferingProps {
  onOpenContact: () => void;
}

export default function DualOffering({ onOpenContact }: DualOfferingProps) {
  const noGos = [
    'Keine überladenen WordPress-Themes mit 40 anfälligen Plugins',
    'Keine Baukästen mit monatlichen Zwangskosten und Werbeeinblendungen',
    'Keine wechselnden Agentur-Praktikanten – du erreichst immer mich direkt',
    'Keine wochenlangen Kaffeekränzchen ohne fertigen Code'
  ];

  return (
    <section id="angebot" className="py-20 sm:py-28 border-b border-stone-900/[0.08] bg-[#fbf9f5] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-800 font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Angebot &bull; Handwerk &amp; Code</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-stone-900">
              Was ich für deinen Betrieb baue.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Zwei eigenständige Werkzeuge – einzeln buchbar oder als schlüsselfertiges Komplettsystem für Neukunden und lautlose Büroabläufe.
          </p>
        </div>

        {/* Asymmetric Studio Workbench Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Handgeschriebene Websites (Clean Studio Surface) */}
          <div className="lg:col-span-6 rounded-3xl border border-stone-900/[0.08] bg-white p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_20px_rgba(28,25,23,0.03)] hover:border-emerald-300 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
                  01 / Webauftritt &bull; Schaufenster
                </span>
                <span className="font-mono text-xs text-stone-400">Neukunden &bull; Google</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-stone-900 tracking-tight">
                Websites, die Kunden überzeugen
              </h3>
              <p className="mt-3 text-stone-600 font-sans text-sm leading-relaxed">
                Handgeschriebener Code ohne überladene Plugins. Deine Website lädt in 0.3 Sekunden auf dem Handy, stürzt nie ab und sieht auf jedem Display gestochen scharf aus.
              </p>

              {/* Real Performance Artifact */}
              <div className="mt-6 p-4 rounded-xl bg-[#fbf9f5] border border-stone-900/[0.08] font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-stone-500 pb-2 border-b border-stone-900/[0.06] text-[11px]">
                  <span className="flex items-center gap-1.5 text-stone-800 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Google Core Web Vitals
                  </span>
                  <span className="text-emerald-700 font-bold">100 / 100</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="bg-white p-2.5 rounded-lg border border-stone-900/[0.06]">
                    <div className="text-emerald-700 font-bold font-mono text-sm">0.3s</div>
                    <div className="text-[10px] text-stone-500 uppercase mt-0.5">Ladezeit</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-stone-900/[0.06]">
                    <div className="text-emerald-700 font-bold font-mono text-sm">0 %</div>
                    <div className="text-[10px] text-stone-500 uppercase mt-0.5">Cookie-Zwang</div>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-stone-900/[0.06]">
                    <div className="text-emerald-700 font-bold font-mono text-sm">0 €</div>
                    <div className="text-[10px] text-stone-500 uppercase mt-0.5">Plugin-Abos</div>
                  </div>
                </div>
              </div>

              {/* 3 Clear Real-World Points */}
              <div className="mt-6 space-y-3 pt-5 border-t border-stone-900/[0.08]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                    <strong>Sofortige Ladezeit auf dem Smartphone:</strong> Kunden springen nicht frustriert ab, sondern greifen direkt zum Hörer.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                    <strong>Saubere lokale Google-Einbindung:</strong> Gefunden werden in Kerpen, Köln und deinem Umkreis mit Schema.org-Daten.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 font-sans leading-relaxed">
                    <strong>100 % dein Eigentum:</strong> Der Quellcode gehört dir. Keine monatlichen Mietgebühren an Webflow oder Jimdo.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-stone-900/[0.08] flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-stone-500">
                1:1 Handgemacht
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-sans font-medium text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Website anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Lautlose Büro-Workflows (Warm Architectural Surface) */}
          <div className="lg:col-span-6 rounded-3xl border border-[#ded7c8] bg-[#f7f3ea] p-7 sm:p-9 flex flex-col justify-between shadow-[0_4px_20px_rgba(28,25,23,0.03)] hover:border-emerald-400 transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-emerald-900 bg-emerald-100/80 border border-emerald-300 px-2.5 py-1 rounded-md font-semibold">
                  02 / Büro-Prozesse &bull; Zeitersparnis
                </span>
                <span className="font-mono text-xs text-stone-500">Zeit &bull; Feierabend</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-stone-900 tracking-tight">
                Workflows, die dir Stunden sparen
              </h3>
              <p className="mt-3 text-stone-700 font-sans text-sm leading-relaxed">
                Ich verbinde deine bestehende Software (Website, WhatsApp, E-Mail, Kalender, Cloud). Kein händisches Abtippen mehr, wenn neue Anfragen reinkommen.
              </p>

              {/* Real Pipeline Artifact */}
              <div className="mt-6 p-4 rounded-xl bg-white/90 border border-[#ded7c8] font-mono text-xs shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-stone-500 pb-2 border-b border-stone-200 text-[11px]">
                  <span className="flex items-center gap-1.5 text-stone-800 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Automatischer Ablauf
                  </span>
                  <span className="text-emerald-700 font-medium">Reaktionszeit &lt; 1 Sekunde</span>
                </div>
                <div className="grid grid-cols-3 gap-2 pt-1 text-center">
                  <div className="bg-[#f7f3ea] p-2.5 rounded-lg border border-[#ded7c8]">
                    <div className="text-stone-900 font-bold font-mono text-sm">Schritt 1</div>
                    <div className="text-[10px] text-stone-600 uppercase mt-0.5">Anfrage online</div>
                  </div>
                  <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                    <div className="text-emerald-800 font-bold font-mono text-sm">Schritt 2</div>
                    <div className="text-[10px] text-emerald-700 uppercase mt-0.5">WhatsApp-Alarm</div>
                  </div>
                  <div className="bg-stone-900 p-2.5 rounded-lg border border-stone-800">
                    <div className="text-white font-bold font-mono text-sm">Schritt 3</div>
                    <div className="text-[10px] text-stone-300 uppercase mt-0.5">Im Kalender</div>
                  </div>
                </div>
              </div>

              {/* 3 Clear Real-World Points */}
              <div className="mt-6 space-y-3 pt-5 border-t border-[#ded7c8]">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
                    <strong>Sofortige Nachricht aufs Smartphone:</strong> Sobald ein Interessent anfragt, hast du Name, Telefon und Anliegen direkt auf deinem Handy.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
                    <strong>Kalender ohne Doppelbuchung:</strong> Termine werden automatisch mit deinem bestehenden Kalender abgeglichen und reserviert.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <p className="text-xs sm:text-sm text-stone-800 font-sans leading-relaxed">
                    <strong>Keine neue Software lernen:</strong> Ich binde deine Werkzeuge an, die du ohnehin täglich nutzt (WhatsApp, Gmail, Outlook, SevDesk).
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#ded7c8] flex items-center justify-between gap-3">
              <span className="text-xs font-mono text-stone-600">
                Direkte Anbindung
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 border border-stone-800 bg-stone-900 text-white hover:bg-stone-800 font-sans font-medium text-sm px-4 py-2.5 rounded-xl transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Workflows anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* The No-Go List: Honest & Grounded */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl border border-stone-900/[0.08] bg-[#f8f6f0]">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-4 font-semibold">
            Was du bei mir NICHT findest:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {noGos.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700 font-sans">
                <div className="w-4 h-4 rounded-full bg-white border border-stone-300 flex items-center justify-center text-stone-500 shrink-0 mt-0.5">
                  <X className="w-2.5 h-2.5" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
