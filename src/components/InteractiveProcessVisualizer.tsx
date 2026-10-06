import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Zap, 
  Bell, 
  Database, 
  Cpu, 
  MessageSquare, 
  Clock 
} from 'lucide-react';

interface ScenarioNode {
  step: string;
  system: string;
  iconName: 'trigger' | 'logic' | 'database' | 'notification';
  action: string;
  badge: string;
}

interface Scenario {
  id: string;
  title: string;
  tag: string;
  description: string;
  nodes: ScenarioNode[];
  terminalLogs: string[];
  mockToast: {
    app: string;
    title: string;
    body: string;
  };
}

interface InteractiveProcessVisualizerProps {
  onOpenContact?: () => void;
}

export default function InteractiveProcessVisualizer({ onOpenContact }: InteractiveProcessVisualizerProps = {}) {
  const scenarios: Scenario[] = [
    {
      id: 'crm-sync',
      title: 'CRM- & Lead-Automation',
      tag: 'Echtzeit-Pipeline & Lead-Intake',
      description: 'Jeder neue Kontakt aus Webformular, Terminkalender oder Mail wird in Millisekunden dedupliziert, im CRM angelegt und als Vorab-Dossier direkt auf dein Smartphone gesendet.',
      nodes: [
        {
          step: '01 / Eingang',
          system: 'Web-Formular / Cal.com',
          iconName: 'trigger',
          action: 'Eingehende Anfrage oder Terminbuchung eines Neukunden',
          badge: 'Eingegangen'
        },
        {
          step: '02 / Prüfung',
          system: 'Smarte n8n-Logik',
          iconName: 'logic',
          action: 'Duplikatsprüfung, Spamfilter & automatische Datenanreicherung',
          badge: 'Sofort geprüft'
        },
        {
          step: '03 / Datenbank',
          system: 'Notion / HubSpot CRM',
          iconName: 'database',
          action: 'Automatisches Anlegen von Kundenkarte & Anfragedetails',
          badge: 'Gespeichert'
        },
        {
          step: '04 / Benachrichtigung',
          system: 'WhatsApp & Smartphone',
          iconName: 'notification',
          action: 'Sofortiger Alarm mit One-Click-Rückruf auf dein Handy',
          badge: 'Direkt-Alert'
        }
      ],
      terminalLogs: [
        '[19:54:02.112] ⚡ WEBHOOK_IN: POST /api/v1/inbound-lead',
        '[19:54:02.134] ⚙️ n8n_ROUTER: payload validated (score: 98/100, spam: false)',
        '[19:54:02.189] 🗄️ CRM_SYNC: Notion DB updated -> Customer record #4812 created',
        '[19:54:02.241] 📱 DISPATCH: WhatsApp message dispatched via Business API -> 100% delivered'
      ],
      mockToast: {
        app: 'WhatsApp Business',
        title: 'Neuer qualifizierter Lead eingegangen',
        body: 'Alexander Rheindorf • Webdesign & n8n Automation angefragt. Klicke zum Antworten.'
      }
    },
    {
      id: 'invoice-flow',
      title: 'Beleg- & Buchhaltungs-Flow',
      tag: 'Büro-Entlastung',
      description: 'Eingangsrechnungen aus Mails oder Cloud-Ordnern werden automatisch ausgelesen, verbucht und steuerfertig im Monatsarchiv abgelegt.',
      nodes: [
        {
          step: '01 / Eingang',
          system: 'Mail-Inbox & Drive',
          iconName: 'trigger',
          action: 'Eingangsrechnung (PDF) wird erkannt',
          badge: 'Erkannt'
        },
        {
          step: '02 / Texterkennung',
          system: 'Automatische Belegerkennung',
          iconName: 'logic',
          action: 'Extraktion von IBAN, Betrag, Datum & Rechnungsnummer',
          badge: 'Ausgelesen'
        },
        {
          step: '03 / Buchhaltung',
          system: 'Lexoffice / SevDesk',
          iconName: 'database',
          action: 'Automatischer Entwurf zur Freigabe erstellt',
          badge: 'Übertragen'
        },
        {
          step: '04 / Freigabe',
          system: 'Push-Nachricht',
          iconName: 'notification',
          action: 'Bestätigung mit Direktlink zum Zahlungsabgleich',
          badge: 'Fertig'
        }
      ],
      terminalLogs: [
        '[14:12:44.005] ⚡ DRIVE_TRIGGER: New PDF detected -> invoice_49201.pdf (142 KB)',
        '[14:12:44.089] ⚙️ OCR_NODE: extracted: "Rechnungsbetrag: 1.450,00 €", IBAN: DE89...',
        '[14:12:44.201] 🗄️ ACCOUNTING_API: Lexoffice voucher created with ID #voc_89321',
        '[14:12:44.240] 📱 NOTIFY: Telegram confirmation alert dispatched to accounting'
      ],
      mockToast: {
        app: 'Lexoffice',
        title: 'Eingangsrechnung verbucht (1.450,00 €)',
        body: 'Beleg #49201 automatisch extrahiert und zur Freigabe bereitgestellt.'
      }
    },
    {
      id: 'member-onboarding',
      title: 'Kunden-Onboarding & Verträge',
      tag: 'Kundenaufnahme ohne Papierkram',
      description: 'Sobald ein Neukunde unterschreibt, werden automatisch Projektordner angelegt, Zugangsdaten generiert, Willkommenspakete versendet und der Kickoff vorbereitet.',
      nodes: [
        {
          step: '01 / Zusage',
          system: 'Digitale Signatur / Angebot',
          iconName: 'trigger',
          action: 'Digitale Signatur oder Angebotsannahme des Kunden',
          badge: 'Bestätigt'
        },
        {
          step: '02 / Projektraum',
          system: 'Automatische Ordnerstruktur',
          iconName: 'logic',
          action: 'Kundenordner, Checklisten & Projekt-Board anlegen',
          badge: 'Erstellt'
        },
        {
          step: '03 / Zugänge',
          system: 'Cloud & Dokumente',
          iconName: 'database',
          action: 'Sicherer Upload-Link für Kundenunterlagen versendet',
          badge: 'Sicher'
        },
        {
          step: '04 / Willkommen',
          system: 'E-Mail & SMS',
          iconName: 'notification',
          action: 'Persönlicher Onboarding-Guide mit Terminlink',
          badge: 'Versendet'
        }
      ],
      terminalLogs: [
        '[09:22:18.502] ⚡ WEBHOOK_CONTRACT: "Status: Fully Signed" (Contract ID: #cnt_1082)',
        '[09:22:18.571] ⚙️ DRIVE_API: Created folder "/Clients/2026/Projekt_Rheinland"',
        '[09:22:18.630] 🗄️ NOTION_API: Onboarding dashboard initialized with client checklist',
        '[09:22:18.705] 📱 RESEND_API: Personalized welcome email dispatched to client'
      ],
      mockToast: {
        app: 'Projekt-Zentrale',
        title: 'Neues Projekt schlüsselfertig initialisiert',
        body: 'Ordner, Checkliste & Willkommens-Mail für Neukunden automatisch aktiviert.'
      }
    }
  ];

  const [activeScenarioId, setActiveScenarioId] = useState<string>('crm-sync');
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [logIndex, setLogIndex] = useState<number>(1);
  const [showToast, setShowToast] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];

  useEffect(() => {
    if (!isPlaying) return;

    timerRef.current = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % currentScenario.nodes.length;
        setLogIndex(next + 1);
        if (next === currentScenario.nodes.length - 1) {
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        }
        return next;
      });
    }, 1800);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentScenario]);

  const handleManualTrigger = () => {
    setActiveStep(0);
    setLogIndex(1);
    setShowToast(false);
    
    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < currentScenario.nodes.length) {
        setActiveStep(step);
        setLogIndex(step + 1);
      } else {
        clearInterval(interval);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500);
      }
    }, 600);
  };

  const getNodeIcon = (type: ScenarioNode['iconName'], isActive: boolean) => {
    const iconClass = `w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110 text-white' : 'text-stone-500'}`;
    switch (type) {
      case 'trigger': return <Zap className={iconClass} />;
      case 'logic': return <Cpu className={iconClass} />;
      case 'database': return <Database className={iconClass} />;
      case 'notification': return <MessageSquare className={iconClass} />;
    }
  };

  return (
    <section id="architektur" className="py-24 sm:py-32 border-b border-[#e7e3d8] bg-[#fbf9f5] relative overflow-hidden">
      
      {/* Warm Light Field */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse shadow-[0_0_8px_rgba(5,150,105,0.8)]" />
              <span>Echte Praxis &bull; Büro-Automation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 leading-tight">
              Workflows, die lautlos für dich arbeiten.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Keine graue Theorie. Klicke dich durch die 3 Praxisbeispiele und erlebe selbst, wie wiederkehrende Handgriffe (Lead-Erfassung, Rechnungsablage, Kundenbegrüßung) in Sekundenbruchteilen vollautomatisch erledigt werden.
          </p>
        </div>

        {/* Top Control Bar: Scenarios & Live Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#e7e3d8]">
          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2">
            {scenarios.map((sc) => {
              const isSelected = activeScenarioId === sc.id;
              return (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActiveScenarioId(sc.id);
                    setActiveStep(0);
                    setLogIndex(1);
                    setShowToast(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-emerald-50 border border-emerald-400 text-emerald-900 font-semibold shadow-xs'
                      : 'bg-white border border-[#e7e3d8] text-stone-700 hover:text-stone-950 hover:border-stone-300'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-600 animate-pulse' : 'bg-stone-400'}`} />
                  <span>{sc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Engine Controls: Run Manual & Auto-Play Pause */}
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-white border border-[#e7e3d8] hover:border-stone-300 text-stone-700 hover:text-stone-950 text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 shadow-xs"
              title={isPlaying ? 'Auto-Cycle anhalten' : 'Auto-Cycle starten'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-700" /> : <Play className="w-3.5 h-3.5 text-stone-500" />}
              <span className="hidden sm:inline text-[11px]">{isPlaying ? 'Auto-Play: An' : 'Pausiert'}</span>
            </button>

            <button
              onClick={handleManualTrigger}
              className="px-3.5 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-xs transition-all shadow-[0_2px_10px_rgba(4,120,87,0.25)] flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Event jetzt auslösen</span>
            </button>
          </div>
        </div>

        {/* Central Pipeline Board */}
        <div className="rounded-2xl border border-[#e7e3d8] bg-white p-5 sm:p-8 relative shadow-[0_10px_35px_rgba(0,0,0,0.03)] overflow-hidden">
          
          {/* Subtle Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#e7e3d8]">
            <div>
              <div className="text-xs font-mono text-emerald-800 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span>{currentScenario.tag}</span>
                <span className="text-stone-400">&bull;</span>
                <span className="text-stone-500 font-normal">Live-Simulation</span>
              </div>
              <p className="mt-1 text-sm text-stone-600 font-sans max-w-2xl leading-relaxed">
                {currentScenario.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#fbf9f5] border border-[#e7e3d8] text-stone-600 shrink-0 self-start sm:self-auto">
              <Clock className="w-3.5 h-3.5 text-emerald-700" />
              <span>Gesamtlaufzeit: <strong className="text-emerald-800 font-semibold">&lt; 240 ms</strong></span>
            </div>
          </div>

          {/* Connected Step Cards with Animated Data Flow Beam */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-3.5 relative">
            {currentScenario.nodes.map((node, idx) => {
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div key={idx} className="relative flex flex-col group">
                  <div
                    onClick={() => {
                      setActiveStep(idx);
                      setLogIndex(idx + 1);
                    }}
                    className={`p-4 sm:p-5 rounded-xl border transition-all duration-300 flex flex-col justify-between h-full cursor-pointer select-none ${
                      isActive
                        ? 'bg-emerald-50/70 border-emerald-500 shadow-md scale-[1.02] ring-1 ring-emerald-300'
                        : isPast
                        ? 'bg-white border-emerald-200 text-stone-800 shadow-2xs'
                        : 'bg-[#fbf9f5] border-[#e7e3d8] text-stone-600 hover:border-stone-300'
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#e7e3d8]">
                        <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                          isActive ? 'text-emerald-800' : isPast ? 'text-stone-700' : 'text-stone-500'
                        }`}>
                          {node.step}
                        </span>

                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                          isActive
                            ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold animate-pulse'
                            : isPast
                            ? 'bg-stone-100 border-stone-200 text-stone-700'
                            : 'bg-stone-50 border-stone-200 text-stone-500'
                        }`}>
                          {node.badge}
                        </span>
                      </div>

                      {/* Icon & System Label */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                          isActive
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-xs'
                            : isPast
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : 'bg-white border-stone-200 text-stone-500'
                        }`}>
                          {getNodeIcon(node.iconName, isActive)}
                        </div>

                        <div className={`text-xs font-mono font-bold tracking-tight ${
                          isActive ? 'text-stone-900' : isPast ? 'text-stone-800' : 'text-stone-600'
                        }`}>
                          {node.system}
                        </div>
                      </div>

                      {/* Action Description */}
                      <p className={`text-xs font-sans leading-relaxed ${
                        isActive ? 'text-stone-800 font-medium' : 'text-stone-600'
                      }`}>
                        {node.action}
                      </p>
                    </div>

                    {/* Active Step Indicator Pill at bottom */}
                    <div className="mt-4 pt-3 border-t border-[#e7e3d8] flex items-center justify-between text-[11px] font-mono">
                      {isActive ? (
                        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                          <span>Verarbeitet...</span>
                        </div>
                      ) : isPast ? (
                        <div className="flex items-center gap-1 text-emerald-700">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Abgeschlossen</span>
                        </div>
                      ) : (
                        <span className="text-stone-400">Bereit</span>
                      )}
                    </div>

                    {/* Flow arrow right (desktop) */}
                    {idx < currentScenario.nodes.length - 1 && (
                      <div className={`hidden md:flex items-center justify-center absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white border z-20 transition-all ${
                        isPast ? 'border-emerald-300 text-emerald-700' : 'border-[#e7e3d8] text-stone-400'
                      }`}>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Simulated Mobile Toast Popup */}
          {showToast && (
            <div className="mt-6 p-4 rounded-xl bg-white border border-emerald-400 shadow-[0_10px_30px_rgba(5,150,105,0.15)] flex items-start gap-3.5 animate-in fade-in slide-in-from-top-3 duration-300">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                <Bell className="w-5 h-5 animate-bounce" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-emerald-800 font-bold uppercase tracking-wider">
                    {currentScenario.mockToast.app} &bull; Gerade eben
                  </span>
                  <span className="text-[10px] font-mono text-stone-500">240ms nach Auslösung</span>
                </div>
                <div className="text-sm font-sans font-semibold text-stone-900 mt-0.5">
                  {currentScenario.mockToast.title}
                </div>
                <p className="text-xs text-stone-600 font-sans mt-0.5 truncate">
                  {currentScenario.mockToast.body}
                </p>
              </div>
            </div>
          )}

          {/* Real-Time Live Execution Terminal (High-Contrast Luxury Dark Console) */}
          <div className="mt-6 rounded-xl bg-[#18181b] border border-stone-800 p-4 font-mono text-xs overflow-hidden shadow-sm">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-stone-800 text-stone-400 text-[11px]">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-stone-200 font-semibold">Live Event Log Stream</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
              </div>
              <span className="text-stone-500">n8n Execution Engine v1.82</span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
              {currentScenario.terminalLogs.slice(0, logIndex).map((log, lIdx) => (
                <div 
                  key={lIdx} 
                  className={`flex items-start gap-2 transition-all duration-200 ${
                    lIdx === logIndex - 1 ? 'text-emerald-300 font-semibold' : 'text-stone-400'
                  }`}
                >
                  <span className="text-emerald-400 select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion CTA Card */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 font-bold">
                Individuelle Automation
              </span>
              <h3 className="text-base sm:text-lg font-sans font-bold text-stone-900 tracking-tight">
                Wie viel Zeit verliert dein Betrieb mit manuellem Abtippen?
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-sans max-w-xl">
                Ob Lead-Intake, Angebotsversand oder Buchhaltungsbelege: Ich analysiere deine Tool-Landschaft und automatisiere deine zeitraubenden Schritte.
              </p>
            </div>
            {onOpenContact ? (
              <button
                onClick={onOpenContact}
                className="shrink-0 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm transition-all shadow-[0_4px_15px_rgba(4,120,87,0.25)] hover:shadow-[0_6px_20px_rgba(4,120,87,0.35)] cursor-pointer flex items-center gap-2"
              >
                <span>Eigenen Workflow prüfen</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            ) : (
              <a
                href="#kontakt"
                className="shrink-0 px-5 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm transition-all shadow-[0_4px_15px_rgba(4,120,87,0.25)] hover:shadow-[0_6px_20px_rgba(4,120,87,0.35)] flex items-center gap-2"
              >
                <span>Eigenen Workflow prüfen</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
