import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Zap, 
  Send, 
  Bell, 
  Database, 
  Cpu, 
  MessageSquare, 
  FileText, 
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

export default function InteractiveProcessVisualizer() {
  const scenarios: Scenario[] = [
    {
      id: 'crm-sync',
      title: 'CRM- & Lead-Automation',
      tag: 'Echtzeit-Pipeline & Lead-Intake',
      description: 'Jeder neue Kontakt aus Webformular, Terminkalender oder Mail wird in Millisekunden dedupliziert, im CRM angelegt und als Vorab-Dossier direkt auf dein Smartphone gesendet.',
      nodes: [
        {
          step: '01 / Trigger',
          system: 'Web-Formular / Cal.com',
          iconName: 'trigger',
          action: 'Eingehende Anfrage oder Terminbuchung',
          badge: 'POST 200 OK'
        },
        {
          step: '02 / Logic Engine',
          system: 'n8n Workflow Hub',
          iconName: 'logic',
          action: 'Duplikatsprüfung, Spamfilter & Datenanreicherung',
          badge: '18ms Latenz'
        },
        {
          step: '03 / Database',
          system: 'Notion / HubSpot CRM',
          iconName: 'database',
          action: 'Automatisches Erstellen von Kundenkarte & Deal-Stage',
          badge: 'Synced'
        },
        {
          step: '04 / Dispatch',
          system: 'WhatsApp & Slack',
          iconName: 'notification',
          action: 'Push-Alarm mit One-Click-Rückruf auf dein Handy',
          badge: 'Sofort-Alert'
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
        title: 'Neuer Lead qualifiziert (+5.000 €)',
        body: 'Alexander Rheindorf • Webdesign & n8n Automation angefragt. Klicke zum Antworten.'
      }
    },
    {
      id: 'invoice-flow',
      title: 'Beleg- & Buchhaltungs-Flow',
      tag: 'Lautlose Büro-Automation',
      description: 'Eingangsrechnungen aus Mails oder Cloud-Ordnern werden via OCR ausgelesen, automatisch verbucht und steuerfertig im Monatsarchiv abgelegt.',
      nodes: [
        {
          step: '01 / Eingang',
          system: 'Mail-Inbox & Drive',
          iconName: 'trigger',
          action: 'Eingangsrechnung (PDF) wird erkannt',
          badge: 'Mail Hook'
        },
        {
          step: '02 / OCR Parser',
          system: 'n8n Document Engine',
          iconName: 'logic',
          action: 'Extraktion von IBAN, USt-ID, Betrag & Datum',
          badge: 'AI / Regex'
        },
        {
          step: '03 / Buchung',
          system: 'Lexoffice / SevDesk',
          iconName: 'database',
          action: 'Automatischer Buchungsvorschlag mit Belegverknüpfung',
          badge: 'Pre-Booked'
        },
        {
          step: '04 / Archivierung',
          system: 'Steuerberater-Drive',
          iconName: 'notification',
          action: 'DSGVO-konforme Ablage & Monatsabgleich',
          badge: 'GoBD Safe'
        }
      ],
      terminalLogs: [
        '[19:54:15.041] 📩 INBOX_WATCHER: PDF detected "Rechnung_2026_09.pdf" (148 KB)',
        '[19:54:15.112] 🔍 OCR_ENGINE: Extracted net: 1.450,00 €, USt-ID: DE31849201',
        '[19:54:15.220] 📊 ACCOUNTING_API: Lexoffice voucher created & matching bank feed',
        '[19:54:15.295] 🗂️ ARCHIVE: Stored in /Buchhaltung/2026/09/ -> Ready for TAX export'
      ],
      mockToast: {
        app: 'Lexoffice Alert',
        title: 'Beleg automatisch verbucht',
        body: 'Rechnung über 1.450,00 € steuerkonform archiviert. Keine manuelle Nacharbeit nötig.'
      }
    },
    {
      id: 'e-commerce-sync',
      title: 'Store & Inventar-Sync',
      tag: 'Shopify / Retail Automation',
      description: 'Synchronisiert Lagerbestände zwischen Vor-Ort-Kasse, Onlineshop und Lieferanten in Echtzeit, um Überverkäufe und händischen Listenabgleich zu beenden.',
      nodes: [
        {
          step: '01 / Kassen-Scan',
          system: 'POS Terminal / Webshop',
          iconName: 'trigger',
          action: 'Verkauf vor Ort oder Checkout im Shop',
          badge: 'Event Trigger'
        },
        {
          step: '02 / Inventory Logic',
          system: 'n8n Master Controller',
          iconName: 'logic',
          action: 'Echtzeit-Differenzierung & Re-Stock-Prüfung',
          badge: 'State Check'
        },
        {
          step: '03 / Multi-Sync',
          system: 'Shopify & Warenwirtschaft',
          iconName: 'database',
          action: 'Automatische Bestandsreduzierung auf allen Kanälen',
          badge: 'Zero Delay'
        },
        {
          step: '04 / Nachbestellung',
          system: 'Lieferanten-Dispatch',
          iconName: 'notification',
          action: 'Automatischer Bestellvorschlag bei Mindestbestand',
          badge: 'Auto-Order'
        }
      ],
      terminalLogs: [
        '[19:54:28.109] 🛒 POS_EVENT: Barcode scanned (SKU-SHISHA-9941)',
        '[19:54:28.140] ⚡ n8n_CONTROLLER: Inventory stock level updated (5 -> 4 units)',
        '[19:54:28.210] 🔄 OMNI_SYNC: Shopify & local POS synced across 2 endpoints',
        '[19:54:28.280] ✅ STATUS: Minimum threshold safe. No supplier re-order required.'
      ],
      mockToast: {
        app: 'Store Cockpit',
        title: 'Bestände synchronisiert',
        body: 'Verkauf erfasst. Lagerbestand auf Shopify & Ladenkasse innerhalb von 0.1s abgeglichen.'
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

  // Auto-cycling pulse through nodes
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
    const iconClass = `w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110 text-emerald-300' : 'text-zinc-400'}`;
    switch (type) {
      case 'trigger': return <Zap className={iconClass} />;
      case 'logic': return <Cpu className={iconClass} />;
      case 'database': return <Database className={iconClass} />;
      case 'notification': return <MessageSquare className={iconClass} />;
    }
  };

  return (
    <section id="architektur" className="py-24 sm:py-32 border-b border-white/[0.04] bg-[#09090b] relative overflow-hidden">
      
      {/* Dynamic Background Light Field */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span>Interaktive Automation Pipeline &bull; Live Simulation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Workflows, die lautlos für dich arbeiten.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Keine Theorie, sondern handfeste Datenflüsse. Klicke dich durch die Live-Szenarien und sieh zu, wie Webhooks, n8n und APIs manuelle Arbeit in Sekundenbruchteilen erledigen.
          </p>
        </div>

        {/* Top Control Bar: Scenarios & Live Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
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
                      ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 font-semibold shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                      : 'bg-[#111113] border border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/[0.12]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-zinc-600'}`} />
                  <span>{sc.title}</span>
                </button>
              );
            })}
          </div>

          {/* Engine Controls: Run Manual & Auto-Play Pause */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-lg bg-[#111113] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5"
              title={isPlaying ? 'Auto-Cycle anhalten' : 'Auto-Cycle starten'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-zinc-400" />}
              <span className="hidden sm:inline text-[11px]">{isPlaying ? 'Auto-Play: ON' : 'Pausiert'}</span>
            </button>

            <button
              onClick={handleManualTrigger}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-sans font-semibold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.25)] flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Event jetzt auslösen</span>
            </button>
          </div>
        </div>

        {/* Central Pipeline Board */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#111113] p-5 sm:p-8 relative shadow-2xl overflow-hidden">
          
          {/* Subtle Top Info Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.06]">
            <div>
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                <span>{currentScenario.tag}</span>
                <span className="text-zinc-600">&bull;</span>
                <span className="text-zinc-400 font-normal">End-to-End Testumgebung</span>
              </div>
              <p className="mt-1 text-sm text-zinc-300 font-sans max-w-2xl leading-relaxed">
                {currentScenario.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-[#09090b] border border-white/[0.06] text-zinc-400 shrink-0 self-start sm:self-auto">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Gesamtlaufzeit: <strong className="text-emerald-300 font-semibold">&lt; 240 ms</strong></span>
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
                        ? 'bg-[#16161b] border-emerald-500/60 shadow-[0_0_25px_rgba(16,185,129,0.18)] scale-[1.02] ring-1 ring-emerald-500/30'
                        : isPast
                        ? 'bg-[#111114] border-emerald-500/20 text-zinc-300'
                        : 'bg-[#0d0d0f] border-white/[0.04] text-zinc-500 hover:border-white/10'
                    }`}
                  >
                    <div>
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.04]">
                        <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold ${
                          isActive ? 'text-emerald-400' : isPast ? 'text-zinc-400' : 'text-zinc-600'
                        }`}>
                          {node.step}
                        </span>

                        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${
                          isActive
                            ? 'bg-emerald-950/50 border-emerald-500/40 text-emerald-300 font-semibold animate-pulse'
                            : isPast
                            ? 'bg-white/[0.02] border-white/[0.08] text-zinc-400'
                            : 'bg-black/30 border-white/[0.03] text-zinc-600'
                        }`}>
                          {node.badge}
                        </span>
                      </div>

                      {/* Icon & System Label */}
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border transition-all ${
                          isActive
                            ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_12px_rgba(16,185,129,0.3)]'
                            : isPast
                            ? 'bg-emerald-950/20 border-emerald-500/20 text-emerald-400'
                            : 'bg-white/[0.02] border-white/[0.05] text-zinc-500'
                        }`}>
                          {getNodeIcon(node.iconName, isActive)}
                        </div>

                        <div className={`text-xs font-mono font-bold tracking-tight ${
                          isActive ? 'text-white' : isPast ? 'text-zinc-200' : 'text-zinc-400'
                        }`}>
                          {node.system}
                        </div>
                      </div>

                      {/* Action Description */}
                      <p className={`text-xs font-sans leading-relaxed ${
                        isActive ? 'text-zinc-200 font-medium' : 'text-zinc-400'
                      }`}>
                        {node.action}
                      </p>
                    </div>

                    {/* Active Step Indicator Pill at bottom */}
                    <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono">
                      {isActive ? (
                        <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>Verarbeitet...</span>
                        </div>
                      ) : isPast ? (
                        <div className="flex items-center gap-1 text-emerald-400/80">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Abgeschlossen</span>
                        </div>
                      ) : (
                        <span className="text-zinc-600">Bereit</span>
                      )}
                    </div>

                    {/* Flow arrow right (desktop) */}
                    {idx < currentScenario.nodes.length - 1 && (
                      <div className={`hidden md:flex items-center justify-center absolute -right-2.5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#111113] border z-20 transition-all ${
                        isPast ? 'border-emerald-500/50 text-emerald-400' : 'border-white/[0.08] text-zinc-600'
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
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-950/80 to-[#111114] border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.25)] flex items-start gap-3.5 animate-in fade-in slide-in-from-top-3 duration-300">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                <Bell className="w-5 h-5 animate-bounce" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                    {currentScenario.mockToast.app} &bull; Gerade eben
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500">240ms nach Auslösung</span>
                </div>
                <div className="text-sm font-sans font-semibold text-white mt-0.5">
                  {currentScenario.mockToast.title}
                </div>
                <p className="text-xs text-zinc-300 font-sans mt-0.5 truncate">
                  {currentScenario.mockToast.body}
                </p>
              </div>
            </div>
          )}

          {/* Real-Time Live Execution Terminal */}
          <div className="mt-6 rounded-xl bg-[#070709] border border-white/[0.08] p-4 font-mono text-xs overflow-hidden">
            <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/[0.06] text-zinc-500 text-[11px]">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-300 font-semibold">Live Event Log Stream</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
              </div>
              <span className="text-zinc-500">n8n Execution Engine v1.82</span>
            </div>

            <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
              {currentScenario.terminalLogs.slice(0, logIndex).map((log, lIdx) => (
                <div 
                  key={lIdx} 
                  className={`flex items-start gap-2 transition-all duration-200 ${
                    lIdx === logIndex - 1 ? 'text-emerald-300 font-semibold' : 'text-zinc-400'
                  }`}
                >
                  <span className="text-emerald-500 select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
