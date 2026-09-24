import React, { useState } from 'react';
import { Play, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';

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
      id: 'internal-crm',
      title: 'CRM- & Kontakt-Sync',
      tag: 'Interne Tool-Automation',
      description: 'Neue Kontakte aus Terminen, E-Mails oder Partner-Portalen werden automatisch im CRM synchronisiert, angereichert und dem richtigen Status zugewiesen – ganz ohne neue Website.',
      nodes: [
        {
          title: '01 / Ereignis',
          system: 'Cal.com / Mail-Intake',
          action: 'Neuer Termin oder Kontaktanfrage trifft im System ein'
        },
        {
          title: '02 / Automation',
          system: 'n8n Workflow Engine',
          action: 'Duplikatsprüfung, Adressvalidierung und Datenanreicherung'
        },
        {
          title: '03 / CRM Update',
          system: 'Notion / HubSpot',
          action: 'Automatisches Anlegen von Kontaktkarte und nächstem To-Do'
        },
        {
          title: '04 / Benachrichtigung',
          system: 'Slack / WhatsApp',
          action: 'Sofortige Zusammenfassung aller Details auf dein Smartphone'
        }
      ],
      benefit: 'Kein Copy-Paste zwischen Postfach und CRM • 100% Datenkonsistenz'
    },
    {
      id: 'internal-finance',
      title: 'Beleg- & Rechnungs-Flow',
      tag: 'Interne Büro-Automation',
      description: 'Eingegangene Rechnungen und Belege werden automatisch aus Mails oder Cloud-Ordnern extrahiert, im Buchhaltungstool abgelegt und für den Steuerberater vorbereitet.',
      nodes: [
        {
          title: '01 / Eingang',
          system: 'Mail-Postfach / Drive',
          action: 'PDF-Rechnung trifft ein oder wird in Cloud-Ordner gelegt'
        },
        {
          title: '02 / Auslesen',
          system: 'n8n Parser & OCR',
          action: 'Automatische Erkennung von Rechnungsbetrag, Datum & USt-ID'
        },
        {
          title: '03 / Buchhaltung',
          system: 'Lexoffice / SevDesk',
          action: 'Beleg wird automatisch zugeordnet und verbucht'
        },
        {
          title: '04 / Ablage',
          system: 'Archiv / Steuer-Export',
          action: 'Monatsordner aktualisiert und Freigabe-Ping versendet'
        }
      ],
      benefit: 'Nie wieder am Monatsende Quittungen und PDFs zusammensuchen'
    },
    {
      id: 'integrated-web',
      title: 'Website-to-CRM Intake',
      tag: 'Kombiniertes System (Web + Prozess)',
      description: 'Wenn Website und Automation kombiniert werden: Formulardaten auf deiner Website werden in Echtzeit geprüft und direkt in deine bestehenden Arbeitstools übergeben.',
      nodes: [
        {
          title: '01 / Anfrage',
          system: 'React Frontend Formular',
          action: 'Strukturierte Erfassung von Projektumfang und Kontaktdaten'
        },
        {
          title: '02 / Webhook',
          system: 'n8n Webhook API',
          action: 'Echtzeit-Validierung und Spam-Filterung'
        },
        {
          title: '03 / Workspace',
          system: 'Notion / Pipeline',
          action: 'Projektordner wird angelegt und Status auf „Neu“ gesetzt'
        },
        {
          title: '04 / Sofort-Alert',
          system: 'Push / Messenger',
          action: 'Kunde erhält Bestätigung; du wirst sekundenschnell alarmiert'
        }
      ],
      benefit: 'Website und interne Tools arbeiten als geschlossene Einheit'
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('internal-crm');
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
    <section id="architektur" className="py-24 sm:py-32 border-b border-white/[0.04] bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Automation</span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-white">
            Prozesse, die im Hintergrund arbeiten.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Hier siehst du, wie APIs und Workflows manuelle Arbeit im Hintergrund eliminieren.
          </p>
        </div>

        {/* Tab Pills */}
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-2">
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenarioId(sc.id);
                setSimulationFinished(false);
                setActiveStepIndex(0);
              }}
              className={`px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors cursor-pointer ${
                activeScenarioId === sc.id
                  ? 'bg-white/[0.08] text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Interactive Simulation Dashboard */}
        <div className="mt-6 sm:mt-8 rounded-2xl border border-white/[0.06] bg-[#111113] p-6 sm:p-8">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.04]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider">
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
              className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-sans font-medium text-sm transition-colors shrink-0 min-h-[44px] ${
                isSimulating
                  ? 'bg-white/[0.04] text-zinc-500 cursor-not-allowed border border-white/[0.04]'
                  : 'bg-white text-zinc-950 hover:bg-zinc-200 cursor-pointer'
              }`}
            >
              <Play className={`w-4 h-4 ${isSimulating ? 'animate-spin' : ''}`} />
              <span>{isSimulating ? 'Ablauf läuft...' : 'Workflow simulieren'}</span>
            </button>
          </div>

          {/* Node Flow Visualization */}
          <div className="mt-8 sm:mt-10 grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 relative">
            {currentScenario.nodes.map((node, idx) => {
              const isActive = isSimulating && activeStepIndex === idx;
              const isPast = (isSimulating && activeStepIndex > idx) || simulationFinished;

              return (
                <div key={idx} className="flex flex-col">
                  <div
                    className={`relative p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between h-full ${
                      isActive
                        ? 'opacity-100 bg-[#111113] border-white/[0.06] border-l-[2px] border-l-white/40'
                        : isPast
                        ? 'opacity-80 bg-[#111113] border-white/[0.06]'
                        : 'opacity-50 bg-[#111113] border-white/[0.06]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mb-2">
                        <span>{node.title}</span>
                        {isPast ? (
                          <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                        ) : isActive ? (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        ) : (
                          <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                        )}
                      </div>

                      <div className={`text-xs font-mono tracking-wide ${
                        isActive ? 'text-white font-semibold' : isPast ? 'text-zinc-300' : 'text-zinc-400'
                      }`}>
                        {node.system}
                      </div>

                      <p className="mt-2 text-xs font-sans leading-relaxed text-zinc-400">
                        {node.action}
                      </p>
                    </div>

                    {/* Desktop horizontal flow arrow */}
                    {idx < currentScenario.nodes.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-zinc-700">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Mobile vertical flow arrow between nodes */}
                  {idx < currentScenario.nodes.length - 1 && (
                    <div className="md:hidden flex justify-center py-1.5 text-zinc-700">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Live Metric & Result */}
          <div className="mt-8 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <span className="text-xs font-sans text-zinc-400">
                Praktischer Nutzen: <strong className="text-white font-medium">{currentScenario.benefit}</strong>
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              Tech-Stack: <span className="text-zinc-300">
                {activeScenarioId === 'integrated-web' ? 'React + n8n + Webhooks' : 'n8n Engine + REST-APIs & Webhooks'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
