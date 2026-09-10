import React from 'react';
import { Layout, GitBranch, Check, X, ArrowUpRight } from 'lucide-react';

interface DualOfferingProps {
  onOpenContact: () => void;
}

export default function DualOffering({ onOpenContact }: DualOfferingProps) {
  const webDesignFeatures = [
    'Handcodierte React- & Tailwind-Architektur',
    'Ladezeiten unter 0.5s auf jedem Smartphone',
    'Klares, typografisches Design mit hoher Lesbarkeit',
    'Saubere SEO-Grundstruktur & strukturierte Daten',
    'Vollständige DSGVO-Konformität ohne Cookie-Banner-Zwang',
    'Volle Code-Übergabe via GitHub — kein Lock-in'
  ];

  const processFeatures = [
    'Automatisierte Workflows mit n8n, Make & Webhooks',
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
    <section id="angebot" className="py-20 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
              [ ZWEI UNABHÄNGIGE LEISTUNGSBEREICHE ]
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
              Webdesign &amp; Prozesse.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Zwei eigenständige Disziplinen. Du buchst genau das, was du brauchst: eine performante Website, reine Prozess-Automation für bestehende Tools oder beides im Paket.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Pillar 1: Webdesign */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative group hover:border-emerald-500/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.06)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <Layout className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Bereich 01
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded">
                  Eigenständig buchbar
                </span>
              </div>

              <h3 className="mt-2 text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                Webdesign &amp; Web-Apps
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Moderne, kompromisslos schnelle Websites für Unternehmen und Selbstständige. Handgeschriebener Code, gestochen scharfe Typografie und optimiert für Mobilgeräte.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 pt-5 sm:pt-6 border-t border-white/[0.06]">
                {webDesignFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-300 font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-500">
                Stack: React &bull; Tailwind &bull; TypeScript
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 px-4 py-2.5 min-h-[44px] rounded-xl transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Website anfragen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Prozesse & Automation */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-5 sm:p-8 lg:p-10 flex flex-col justify-between relative group hover:border-emerald-500/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.06)] transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                <GitBranch className="w-5 h-5" />
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                  Bereich 02
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-white/[0.04] border border-white/10 px-2 py-0.5 rounded">
                  Eigenständig buchbar
                </span>
              </div>

              <h3 className="mt-2 text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                Prozess-Automation &amp; n8n
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Automatisierung deiner internen Unternehmensabläufe. Ich verbinde deine bestehende Software (CRM, Buchhaltung, E-Mail, Cloud-Tools) – ganz ohne neue Website.
              </p>

              <div className="mt-6 sm:mt-8 space-y-3 pt-5 sm:pt-6 border-t border-white/[0.06]">
                {[
                  'Workflows mit n8n, Make & individuellen Webhooks',
                  'Synchronisation zwischen bestehenden Tools (Notion, HubSpot, Lexoffice, Airtable)',
                  'Automatische Beleg-, Rechnungs- & Dateiverarbeitung',
                  'Echtzeit-Benachrichtigungen via Slack, WhatsApp oder Mail',
                  'Keine fehleranfällige manuelle Datenpflege im Tagesgeschäft',
                  'Self-Hosted auf deinem Server oder als Cloud-Lösung'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-zinc-300 font-sans">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs font-mono text-zinc-500">
                Toolchain: n8n &bull; REST-APIs &bull; Webhooks
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-300 hover:text-emerald-200 bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 px-4 py-2.5 min-h-[44px] rounded-xl transition-all cursor-pointer active:scale-[0.98]"
              >
                <span>Prozesse anfragen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Maintenance & Retainer Banner */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl border border-emerald-500/20 bg-emerald-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                Laufende Wartung &amp; technischer Support
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 font-sans">
              Für beide Bereiche buchbar: Regelmäßige Updates, Sicherheits-Checks, Monitoring und kontinuierliche Optimierung deiner Website oder deiner Automations-Workflows.
            </p>
          </div>
          <button
            onClick={onOpenContact}
            className="shrink-0 px-4 py-2 rounded-xl border border-emerald-500/30 bg-emerald-900/30 hover:bg-emerald-800/40 text-emerald-200 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
          >
            Wartung anfragen
          </button>
        </div>

        {/* The No-Go List */}
        <div className="mt-8 p-5 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#111114]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 block mb-4">
            Was ich NICHT anbiete:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {noGos.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400 font-sans">
                <div className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
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
