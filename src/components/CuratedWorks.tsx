import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Zap, CheckCircle2 } from 'lucide-react';

interface CuratedWorksProps {
  onOpenContact: () => void;
}

export default function CuratedWorks({ onOpenContact }: CuratedWorksProps) {
  const projects = [
    {
      id: 'nawrath',
      title: 'Nawrath Haustechnik & Bäder',
      category: 'Digital Flagship & Intake-Automation',
      tag: 'Handwerk & B2B Infrastruktur',
      description: 'Kompletter Relaunch der Unternehmenspräsenz mit integriertem Self-Service Projektkonfigurator und direkter n8n-Pipeline in das CRM-System des Meisterbetriebs.',
      metrics: [
        { label: 'Qualifizierte Anfragen', val: '+280%' },
        { label: 'Ladezeit (Global FCP)', val: '0.28s' },
        { label: 'Manuelle Telefondauer', val: '-65%' }
      ],
      techStack: ['React 19', 'Tailwind 4', 'n8n Automations', 'Schema.org SEO', 'Notion CRM']
    },
    {
      id: 'alyas',
      title: 'Alyas Salon & Barbershop',
      category: 'Minimalist Brand & Frictionless Booking',
      tag: 'Premium Lifestyle & Service',
      description: 'Radikal minimalistischer Webauftritt mit maßgeschneidertem, mobilen Buchungssystem. Terminausfälle und Telefonunterbrechungen während Behandlungen wurden eliminiert.',
      metrics: [
        { label: 'Buchungen ohne Anruf', val: '> 95%' },
        { label: 'Mobile Performance', val: '100/100' },
        { label: 'No-Show-Quote', val: 'nahezu 0%' }
      ],
      techStack: ['Vite', 'TypeScript', 'Automated SMS Flow', 'Calendar Sync', 'Stripe Integration']
    },
    {
      id: 'system-engine',
      title: 'Rheindorf System Engine',
      category: 'Multi-Agent CI/CD & Headless Architecture',
      tag: 'Enterprise Operations & Code',
      description: 'Autonomes Entwicklungs- und Orchestrierungs-Framework für blitzschnelles Scaffolding, deterministische Komponenten-Generierung und Zero-Downtime GitHub Pages Deployment.',
      metrics: [
        { label: 'Time-to-Production', val: '< 1 Tag' },
        { label: 'Code-Qualitäts-Score', val: '100/100' },
        { label: 'Wartungsaufwand', val: 'Zero Toil' }
      ],
      techStack: ['Python', 'React 19', 'GitHub Actions', 'REST-APIs', 'Vite Headless']
    }
  ];

  return (
    <section id="projekte" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
              [ KURATIERTE PROJEKTE ]
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
              Gebaute Systeme. Messbare Resultate.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Keine oberflächlichen Schaufenster, sondern performante Architekturen, die im harten Geschäftsalltag Umsatz generieren.
          </p>
        </div>

        {/* Projects List */}
        <div className="mt-16 space-y-8">
          {projects.map((proj, idx) => (
            <div 
              key={proj.id}
              className="rounded-3xl border border-white/[0.08] bg-[#111114] p-8 sm:p-12 hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Col: Number, Title, Description */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-emerald-400">
                        0{idx + 1}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 px-2.5 py-0.5 rounded-full border border-white/5 bg-white/[0.02]">
                        {proj.tag}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl sm:text-3xl font-sans font-semibold text-white tracking-tight">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                      {proj.category}
                    </p>

                    <p className="mt-6 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="mt-8 flex flex-wrap gap-2">
                    {proj.techStack.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-[11px] font-mono text-zinc-400 px-2.5 py-1 rounded-md border border-white/5 bg-[#09090b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Col: Hard Metrics & CTA */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full lg:border-l lg:border-white/[0.08] lg:pl-8">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-6">
                      Architektonischer Hebel
                    </div>

                    <div className="space-y-4">
                      {proj.metrics.map((m, i) => (
                        <div key={i} className="p-4 rounded-xl border border-white/[0.05] bg-[#09090b] flex items-center justify-between">
                          <span className="text-xs font-sans text-zinc-400">{m.label}</span>
                          <span className="text-lg font-mono font-bold text-white tracking-tight">{m.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500">
                      Live &amp; Produktiv
                    </span>
                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white hover:text-emerald-400 transition-colors cursor-pointer"
                    >
                      <span>Ähnliches System anfragen</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
