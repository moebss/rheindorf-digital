import React, { useState } from 'react';
import { Play, CheckCircle2, ArrowRight, Zap, Database, Send, Calendar, Cpu, Sparkles, Sliders } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  tag: string;
  description: string;
  nodes: {
    title: string;
    system: string;
    action: string;
  }[];
  metric: string;
}

export default function InteractiveProcessVisualizer() {
  const scenarios: Scenario[] = [
    {
      id: 'lead-triage',
      title: 'High-Ticket Lead Triage & Qualifizierung',
      tag: 'Vertriebs-Automation',
      description: 'Ein Interessent füllt das maßgeschneiderte Interface aus. Das System qualifiziert das Budget, prüft die Kapazität und plant das Erstgespräch vollautomatisch ein.',
      nodes: [
        {
          title: '01 / Touchpoint',
          system: 'Custom React Form',
          action: 'Eingabe von Budget, Scope & Timeline in sub-0.3s Ladezeit'
        },
        {
          title: '02 / Logic Engine',
          system: 'n8n & AI Scoring',
          action: 'Validierung der Unternehmensdaten, Budget-Scoring & Filterung'
        },
        {
          title: '03 / CRM Sync',
          system: 'HubSpot / Notion',
          action: 'Automatisches Anlegen von Deal, Kontaktdaten & Dossier'
        },
        {
          title: '04 / Abschluss',
          system: 'Cal.com & Slack Alert',
          action: 'Echtzeit-Push an Alexander & Kalendereinladung an Kunden'
        }
      ],
      metric: '0 Minuten manuelle Sortierung • 100% lückenlose Erfassung'
    },
    {
      id: 'onboarding',
      title: 'Autonomes Client-Onboarding & Projekt-Kickoff',
      tag: 'Operations & Delivery',
      description: 'Nach digitaler Unterschrift erstellt das Backend automatisiert alle Projekt-Räume, generiert Verträge und sendet den Onboarding-Fragebogen.',
      nodes: [
        {
          title: '01 / Trigger',
          system: 'Digitaler Vertragsabschluss',
          action: 'DocuSign / Stripe Webhook feuert Signatur-Event'
        },
        {
          title: '02 / Workspace Setup',
          system: 'Notion API Automation',
          action: 'Projekt-Hub, Kanban-Board & Milestone-Timeline werden geklont'
        },
        {
          title: '03 / Communication',
          system: 'Slack & Drive Engine',
          action: 'Gemeinsamer Kunden-Channel & Asset-Ordner angelegt'
        },
        {
          title: '04 / Welcome Pack',
          system: 'Auto-Mailer & Kickoff',
          action: 'Kunde erhält interaktiven Asset-Upload-Link & Vorbereitung'
        }
      ],
      metric: 'Von 3 Tagen Wartezeit auf 90 Sekunden Initialisierung'
    },
    {
      id: 'quote-engine',
      title: 'Interaktiver Self-Service Angebots-Konfigurator',
      tag: 'Conversion Engine',
      description: 'Kunden konfigurieren ihren Leistungsumfang im Browser. Das System generiert in Echtzeit ein detailliertes Leistungsverzeichnis als PDF.',
      nodes: [
        {
          title: '01 / Konfiguration',
          system: 'Interactive UI Slider',
          action: 'Kunde selektiert Features, Integrationen & Design-Tiefe'
        },
        {
          title: '02 / Kalkulation',
          system: 'Dynamic Pricing Logic',
          action: 'Berechnung von Entwicklungsaufwand & API-Komplexität'
        },
        {
          title: '03 / PDF Generator',
          system: 'Headless Document API',
          action: 'Kompilierung eines individuellen Projekt-Briefings'
        },
        {
          title: '04 / Follow-Up',
          system: 'Multi-Channel Sequenz',
          action: 'Automatischer PDF-Versand & Erinnerungs-Sequenz'
        }
      ],
      metric: '+240% Konvertierungsrate im Vergleich zu statischen PDFs'
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('lead-triage');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [simulationFinished, setSimulationFinished] = useState<boolean>(false);

  const currentScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationFinished(false);
    setActiveStepIndex(0);

    const stepInterval = 650;
    currentScenario.nodes.forEach((_, idx) => {
      setTimeout(() => {
        setActiveStepIndex(idx);
        if (idx === currentScenario.nodes.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setSimulationFinished(true);
          }, stepInterval);
        }
      }, idx * stepInterval);
    });
  };

  return (
    <section id="architektur" className="py-24 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500">
            [ INTERAKTIVER SYSTEM-FLOW ]
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
            So greifen Webdesign &amp; Prozesse ineinander.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Wählen Sie ein Szenario und starten Sie die Simulation, um zu sehen, wie ein reibungsloser Datenfluss zwischen modernem Frontend und automatisiertem Backend aussieht.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="mt-12 flex flex-wrap gap-3">
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenarioId(sc.id);
                setSimulationFinished(false);
                setActiveStepIndex(0);
              }}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
                activeScenarioId === sc.id
                  ? 'bg-white text-zinc-950 border-white font-bold shadow-sm'
                  : 'bg-[#111114] text-zinc-400 border-white/10 hover:border-white/25 hover:text-white'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Interactive Simulation Dashboard */}
        <div className="mt-8 rounded-3xl border border-white/[0.08] bg-[#111114] p-6 sm:p-10 shadow-2xl">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {currentScenario.tag}
              </div>
              <p className="mt-1 text-sm text-zinc-300 font-sans max-w-xl">
                {currentScenario.description}
              </p>
            </div>

            {/* Run Simulation Button */}
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer shrink-0 ${
                isSimulating
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5'
                  : 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/20 active:scale-[0.98]'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Pipeline läuft...' : 'Flow simulieren'}</span>
            </button>
          </div>

          {/* Node Flow Visualization */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {currentScenario.nodes.map((node, idx) => {
              const isActive = isSimulating && activeStepIndex === idx;
              const isPast = (isSimulating && activeStepIndex > idx) || simulationFinished;

              return (
                <div
                  key={idx}
                  className={`relative p-5 rounded-2xl border transition-all duration-500 flex flex-col justify-between ${
                    isActive
                      ? 'bg-emerald-950/30 border-emerald-400 shadow-lg shadow-emerald-500/10 scale-[1.02]'
                      : isPast
                      ? 'bg-[#161619] border-white/20 text-white'
                      : 'bg-[#0d0d0f] border-white/[0.06] text-zinc-400'
                  }`}
                >
                  {/* Top System Tag */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-2">
                      <span>{node.title}</span>
                      {isPast ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      ) : isActive ? (
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                      )}
                    </div>

                    <div className={`text-xs font-mono font-semibold tracking-wide ${
                      isActive ? 'text-emerald-300' : isPast ? 'text-white' : 'text-zinc-300'
                    }`}>
                      {node.system}
                    </div>

                    <p className="mt-3 text-xs font-sans leading-relaxed text-zinc-400">
                      {node.action}
                    </p>
                  </div>

                  {/* Flow Arrow for Desktop */}
                  {idx < currentScenario.nodes.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Live Metric & Result */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-zinc-400">
                Messbarer Hebel: <strong className="text-white font-semibold">{currentScenario.metric}</strong>
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              Latenz: <span className="text-emerald-400 font-semibold">240ms</span> • Fehlerquote: <span className="text-white font-semibold">0.0%</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
