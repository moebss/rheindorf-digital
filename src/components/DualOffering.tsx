import React from 'react';
import { Layout, GitBranch, Check, ArrowUpRight, Zap, Database, Lock, RefreshCw } from 'lucide-react';

interface DualOfferingProps {
  onOpenContact: () => void;
}

export default function DualOffering({ onOpenContact }: DualOfferingProps) {
  const webDesignFeatures = [
    'Maßgeschneiderte React- & Next.js-Architektur',
    'Schweizer Typografie & mikro-animierte Interaktionen',
    'Sub-300ms Ladezeit & 100/100 Core Web Vitals',
    'Modulare Figma Design-Systeme & Code-Bibliotheken',
    'Headless SEO & strukturierte Schema.org Daten',
    'Zero-Cookie DSGVO-Konformität ab Werk'
  ];

  const processFeatures = [
    'Workflow-Orchestrierung via n8n, Make & Webhooks',
    'Automatisierte Lead-Triage & KI-gestütztes Scoring',
    'Zwei-Wege CRM-Synchronisation (Notion, HubSpot, Pipedrive)',
    'Vollautomatisches Client-Onboarding & Projekt-Kickoff',
    'Self-Service Portale & digitale Anfrage-Assistenten',
    'Bis zu 80% Einsparung manueller Datenerfassungs-Zeit'
  ];

  return (
    <section id="angebot" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
              [ DAS DUALE SYSTEM ]
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
              Zwei Säulen. Ein nahtloser Kreislauf.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Frontend-Exzellenz zieht anspruchsvolle Kunden an. Intelligente Backend-Prozesse wickeln sie fehlerfrei und ohne Zeitverlust ab.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Webdesign */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 text-zinc-700 font-mono text-5xl font-bold select-none pointer-events-none group-hover:text-zinc-600 transition-colors">
              01
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6">
                <Layout className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Frontend-Exzellenz
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                High-End Webdesign &amp; Interfaces
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Wir kreieren digitale Flagships, die Vertrauen erzeugen und Ihre Marktführerschaft unterstreichen. Keine generischen Vorlagen, sondern maßgeschneiderte Designsysteme.
              </p>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/[0.06]">
                {webDesignFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-300 font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                Lieferzeit: 2–4 Wochen
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span>Webdesign anfragen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Prozesse & Automation */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 text-zinc-700 font-mono text-5xl font-bold select-none pointer-events-none group-hover:text-zinc-600 transition-colors">
              02
            </div>

            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6">
                <GitBranch className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Backend-Effizienz
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                Intelligente System-Prozesse
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Wir vernetzen Ihre Marketing- und Vertriebs-Tools zu einem lautlos funktionierenden Nervensystem. Manuelle Datenübertragung und versäumte Follow-ups gehören der Vergangenheit an.
              </p>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/[0.06]">
                {processFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-300 font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500">
                Integration: Plug &amp; Scale
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span>Prozess-Audit anfragen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
