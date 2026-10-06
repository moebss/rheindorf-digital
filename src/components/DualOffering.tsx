import React from 'react';
import { Layout, GitBranch, Check, X, ArrowUpRight } from 'lucide-react';

interface DualOfferingProps {
  onOpenContact: () => void;
}

export default function DualOffering({ onOpenContact }: DualOfferingProps) {
  const webDesignFeatures = [
    'Stabile Architektur (React) – keine Plugin-Abstürze oder Update-Schleifen',
    'Ladezeiten unter 0.5s auf jedem Smartphone',
    'Klares, typografisches Design mit hoher Lesbarkeit',
    'Saubere SEO-Grundstruktur & strukturierte Daten',
    'Vollständige DSGVO-Konformität ohne Cookie-Banner-Zwang',
    '100 % dein Eigentum – kein Plattform-Abo, kein Lock-in'
  ];

  const processFeatures = [
    'Smarte Automatisierung (n8n & Schnittstellen) – verbindet deine vorhandenen Tools',
    'Direkte Weiterleitung ins CRM (Notion, HubSpot, Supabase)',
    'Sofortige Benachrichtigung via WhatsApp, Slack oder Mail',
    'Automatisierte Kalendersynchronisation (z.B. Cal.com)',
    'Digitale Vorqualifizierung statt unvollständiger Anfragen',
    'Kein händisches Abtippen und Copy-Paste im Büroalltag'
  ];

  const noGos = [
    'Keine überladenen WordPress-Themes mit 40 anfälligen Plugins',
    'Keine 200€-Wix-Baukästen mit versteckten Folgekosten',
    'Keine anonymen Ticket-Systeme — du erreichst mich direkt',
    'Keine wochenlangen Meetings ohne handfeste Ergebnisse'
  ];

  return (
    <section id="angebot" className="py-24 sm:py-32 border-b border-[#e7e3d8] bg-[#fbf9f5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
              Angebot &amp; Schwerpunkte
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-stone-900">
              Was ich für dich baue.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Zwei eigenständige Disziplinen. Du buchst genau das, was du brauchst: eine performante Website, reine Prozess-Automation für bestehende Tools oder beides im Paket.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Pillar 1: Webdesign */}
          <div className="rounded-2xl border border-[#e7e3d8] bg-white p-6 sm:p-8 hover:border-emerald-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between group shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-6 shadow-xs">
                <Layout className="w-5 h-5" />
              </div>

              <h3 className="mt-2 text-xl sm:text-2xl font-display font-bold text-stone-900 tracking-tight">
                Webdesign &amp; Web-Apps
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
                Moderne, kompromisslos schnelle Websites für Unternehmen und Selbstständige. Handgeschriebener Code, gestochen scharfe Typografie und optimiert für Mobilgeräte.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 pt-5 sm:pt-6 border-t border-[#e7e3d8]">
                {webDesignFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-700 font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#e7e3d8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs font-mono text-stone-500">
                Stack: React &bull; Tailwind &bull; TypeScript
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-300 font-sans font-medium text-sm px-4 py-2.5 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Prozesse & Automation */}
          <div className="rounded-2xl border border-[#e7e3d8] bg-white p-6 sm:p-8 hover:border-emerald-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between group shadow-xs">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-6 shadow-xs">
                <GitBranch className="w-5 h-5" />
              </div>

              <h3 className="mt-2 text-xl sm:text-2xl font-display font-bold text-stone-900 tracking-tight">
                Prozess-Automation &amp; n8n
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
                Automatisierung deiner internen Unternehmensabläufe. Ich verbinde deine bestehende Software (CRM, Buchhaltung, E-Mail, Cloud-Tools) – ganz ohne neue Website.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 pt-5 sm:pt-6 border-t border-[#e7e3d8]">
                {processFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-700 font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#e7e3d8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs font-mono text-stone-500">
                Toolchain: n8n &bull; REST-APIs &bull; Webhooks
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:border-emerald-300 font-sans font-medium text-sm px-4 py-2.5 rounded-lg transition-colors cursor-pointer min-h-[44px]"
              >
                <span>Anfragen</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Maintenance & Retainer Banner */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-[#e7e3d8] bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-sans text-stone-900 font-semibold">
                Laufende Wartung &amp; technischer Support
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 font-sans">
              Für beide Bereiche buchbar: Regelmäßige Updates, Sicherheits-Checks, Monitoring und kontinuierliche Optimierung deiner Website oder deiner Automations-Workflows.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-4 py-2.5 rounded-lg border border-[#e7e3d8] bg-[#fbf9f5] hover:bg-stone-100 text-stone-800 text-sm font-sans font-medium transition-colors cursor-pointer min-h-[44px]"
          >
            Wartung anfragen
          </button>
        </div>

        {/* The No-Go List */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-[#e7e3d8] bg-white shadow-xs">
          <span className="text-xs font-mono uppercase tracking-wider text-stone-500 block mb-4 font-semibold">
            Was ich NICHT anbiete:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {noGos.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-600 font-sans">
                <div className="w-4 h-4 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500 shrink-0 mt-0.5">
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
