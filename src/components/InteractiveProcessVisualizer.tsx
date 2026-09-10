import React, { useState } from 'react';
import { Play, CheckCircle2, ArrowRight } from 'lucide-react';

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
  benefit: string;
}

export default function InteractiveProcessVisualizer() {
  const scenarios: Scenario[] = [
    {
      id: 'lead-routing',
      title: 'Anfrage-Qualifizierung & CRM-Sync',
      tag: 'Vertrieb & Intake',
      description: 'Ein Interessent stellt eine strukturierte Anfrage. Das System prüft die Daten, legt den Kontakt im CRM an und benachrichtigt dich sofort auf dem Smartphone.',
      nodes: [
        {
          title: '01 / Eingabe',
          system: 'React Formular',
          action: 'Strukturierte Erfassung von Scope, Timeline und Kontaktdaten'
        },
        {
          title: '02 / Automation',
          system: 'n8n Webhook',
          action: 'Echtzeit-Validierung und Aufbereitung der Formulardaten'
        },
        {
          title: '03 / CRM Sync',
          system: 'Notion / HubSpot',
          action: 'Automatisches Erstellen von Kontaktkarte und Deal-Eintrag'
        },
        {
          title: '04 / Benachrichtigung',
          system: 'Slack / WhatsApp',
          action: 'Sofortiger Alert mit allen Details direkt aufs Smartphone'
        }
      ],
      benefit: 'Kein Copy-Paste aus E-Mails • Sofortige Erfassung aller Kontaktdaten'
    },
    {
      id: 'onboarding',
      title: 'Automatisches Kunden-Onboarding',
      tag: 'Projektstart & Übergabe',
      description: 'Nach Projektzusage wird automatisch ein gemeinsamer Projekt-Workspace erstellt und der Kunde erhält alle Unterlagen ohne manuelles Versenden.',
      nodes: [
        {
          title: '01 / Zusage',
          system: 'Auftragsbestätigung',
          action: 'Auslösen des Workflows nach Angebotsfreigabe'
        },
        {
          title: '02 / Workspace',
          system: 'Notion / Drive API',
          action: 'Automatisches Anlegen von Projekt-Board und Asset-Ordner'
        },
        {
          title: '03 / Briefing-Link',
          system: 'Auto-E-Mail',
          action: 'Kunde erhält Upload-Link für Texte, Bilder und Zugangsdaten'
        },
        {
          title: '04 / Status-Update',
          system: 'Team-Ping',
          action: 'Projekt auf Status „In Vorbereitung“ gesetzt'
        }
      ],
      benefit: 'Reibungsloser Start ohne langes Hin- und Herschreiben'
    },
    {
      id: 'quote-configurator',
      title: 'Interaktiver Projekt-Konfigurator',
      tag: 'Kundenführung',
      description: 'Kunden wählen ihren Bedarf interaktiv aus und erhalten eine saubere Zusammenfassung statt einer vagen Anfrage ohne Details.',
      nodes: [
        {
          title: '01 / Auswahl',
          system: 'Interaktiver Slider',
          action: 'Kunde wählt gewünschte Features und Integrationen'
        },
        {
          title: '02 / Zusammenfassung',
          system: 'Berechnungs-Logik',
          action: 'Automatische Zusammenstellung der Projektbausteine'
        },
        {
          title: '03 / Datenübergabe',
          system: 'Webhook',
          action: 'Gefilterte Übertragung der Parameter an dein Backend'
        },
        {
          title: '04 / Vorbereitung',
          system: 'Erstgesprächs-Dossier',
          action: 'Du gehst mit klaren Anforderungen in das erste Telefonat'
        }
      ],
      benefit: 'Vollständige Anforderungsprofile statt unpräziser E-Mails'
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('lead-routing');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [simulationFinished, setSimulationFinished] = useState<boolean>(false);

  const currentScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationFinished(false);
    setActiveStepIndex(0);

    const stepInterval = 600;
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
            [ SYSTEM-ARCHITEKTUR &amp; WORKFLOWS ]
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
            Wie Website &amp; Prozesse ineinandergreifen.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Keine Theorie: Wähle ein typisches Szenario und starte die Simulation, um den Datenfluss zwischen Webformular und Backend-Tools live zu sehen.
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
              <span>{isSimulating ? 'Ablauf läuft...' : 'Workflow simulieren'}</span>
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
                Praktischer Nutzen: <strong className="text-white font-semibold">{currentScenario.benefit}</strong>
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              Tech-Stack: <span className="text-emerald-400 font-semibold">React + n8n + Webhooks</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
