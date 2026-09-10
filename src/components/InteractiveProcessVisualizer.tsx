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
          action: 'Echtzeit-Validierung und Spam-Filterung ohne lästige Captchas'
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
    <section id="architektur" className="py-20 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
            [ PRAXIS-BEISPIELE &amp; WORKFLOWS ]
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
            Automatisierung in der Praxis.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Ob interne Workflows zwischen deinen bestehenden Tools (Notion, Buchhaltung, CRM) oder die direkte Anbindung an eine neue Website: Hier siehst du, wie n8n und APIs manuelle Arbeit im Hintergrund eliminieren.
          </p>
        </div>

        {/* Horizontally scrollable pill tabs for mobile */}
        <div className="mt-10 sm:mt-12 flex overflow-x-auto no-scrollbar gap-2.5 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {scenarios.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenarioId(sc.id);
                setSimulationFinished(false);
                setActiveStepIndex(0);
              }}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 min-h-[44px] flex items-center border ${
                activeScenarioId === sc.id
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-[#111114] text-zinc-400 border-white/10 hover:border-white/25 hover:text-white'
              }`}
            >
              {sc.title}
            </button>
          ))}
        </div>

        {/* Interactive Simulation Dashboard */}
        <div className="mt-6 sm:mt-8 rounded-3xl border border-white/[0.08] bg-[#111114] p-5 sm:p-8 lg:p-10 shadow-2xl">
          
          {/* Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
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
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all cursor-pointer shrink-0 ${
                isSimulating
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed border border-white/5'
                  : 'bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/25 active:scale-[0.98]'
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
                    className={`relative p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isActive
                        ? 'bg-emerald-950/50 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.2)] scale-[1.02]'
                        : isPast
                        ? 'bg-[#151518] border-emerald-500/30 text-white'
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

                      <p className="mt-2 text-xs font-sans leading-relaxed text-zinc-400">
                        {node.action}
                      </p>
                    </div>

                    {/* Desktop horizontal flow arrow */}
                    {idx < currentScenario.nodes.length - 1 && (
                      <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-emerald-500/40">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Mobile vertical flow arrow between nodes */}
                  {idx < currentScenario.nodes.length - 1 && (
                    <div className="md:hidden flex justify-center py-1.5 text-emerald-500/40">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Live Metric & Result */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-zinc-400">
                Praktischer Nutzen: <strong className="text-white font-semibold">{currentScenario.benefit}</strong>
              </span>
            </div>

            <div className="text-xs font-mono text-zinc-500">
              Tech-Stack: <span className="text-emerald-400 font-semibold">
                {activeScenarioId === 'integrated-web' ? 'React + n8n + Webhooks' : 'n8n Engine + REST-APIs & Webhooks'}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
