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
    'Volle Code-Übergabe via GitHub — kein Vendor-Lock-in'
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
    'Keine Agentur-Wartungsverträge mit künstlicher Abhängigkeit',
    'Keine wochenlangen Meetings ohne handfeste Ergebnisse'
  ];

  return (
    <section id="angebot" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
              [ ANGEBOT &amp; LEISTUNGSUMFANG ]
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
              Zwei Säulen. Saubere Arbeit.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Ich baue keine digitalen Insellösungen, sondern Webauftritte, die direkt mit deinen internen Abläufen verknüpft sind.
          </p>
        </div>

        {/* Dual Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Pillar 1: Webdesign */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-8 sm:p-10 flex flex-col justify-between relative group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6">
                <Layout className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Säule 01
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                Websites &amp; Web-Apps
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Moderne, saubere Websites, die schnell laden und auf jedem Gerät funktionieren. Keine generischen Vorlagen, sondern handgeschriebener Code.
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
                Setup: React + Tailwind
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span>Website anfragen</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2: Prozesse & Automation */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-8 sm:p-10 flex flex-col justify-between relative group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white mb-6">
                <GitBranch className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Säule 02
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                Prozesse &amp; Automation
              </h3>
              <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Ich verbinde deine Website mit deinen bestehenden Tools. Anfragen landen automatisch da, wo du arbeitest – ohne manuelles Kopieren und Suchen.
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
                Toolchain: n8n + Webhooks
              </span>
              <button 
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span>Prozesse automatisieren</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* The No-Go List: Clear Boundaries */}
        <div className="mt-12 p-8 rounded-2xl border border-white/[0.08] bg-[#111114]">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 block mb-4">
            Was ich NICHT anbiete:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
