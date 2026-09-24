import React, { useState } from 'react';
import { 
  GitBranch, 
  Gauge, 
  ArrowUpRight, 
  Sparkles, 
  Clock, 
  Euro, 
  CheckCircle2, 
  TrendingDown, 
  Zap,
  Users
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: (scope?: string, message?: string) => void;
}

export default function RoiCalculator({ onOpenContact }: RoiCalculatorProps) {
  const [activeTab, setActiveTab] = useState<'automation' | 'web'>('automation');

  // Automation Tab State
  const [teamSize, setTeamSize] = useState<number>(3);
  const [manualHoursPerWeek, setManualHoursPerWeek] = useState<number>(5);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  // Automation Calculations
  const weeklyHoursWasted = teamSize * manualHoursPerWeek;
  const monthlyHoursWasted = Math.round(weeklyHoursWasted * 4.33);
  const yearlyWastedCost = Math.round(monthlyHoursWasted * 12 * hourlyRate);
  const potentialSavingsYearly = Math.round(yearlyWastedCost * 0.85); // 85% can be automated

  // Web Performance Tab State
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(1200);
  const [loadTimeSeconds, setLoadTimeSeconds] = useState<number>(4.2);
  const [avgCustomerValue, setAvgCustomerValue] = useState<number>(850);

  // Performance Calculations
  const bouncePenaltyPercent = Math.min(65, Math.max(5, Math.round((loadTimeSeconds - 0.5) * 12)));
  const lostLeadsMonthly = Math.round((monthlyVisitors * (bouncePenaltyPercent / 100)) * 0.03);
  const lostRevenueYearly = Math.round(lostLeadsMonthly * avgCustomerValue * 12);

  return (
    <section id="rechner" className="py-20 sm:py-32 border-b border-white/[0.07] bg-[#09090b] relative overflow-hidden">
      
      {/* Luxury Ambient Glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.08)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Impact Cockpit &bull; ROI-Diagnostik</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Wie viel Zeit &amp; Umsatz <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              verlierst du jeden Monat?
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Manuelle Datenpflege im Büro oder abspringende Besucher durch lahme Websites: Berechne in Echtzeit dein handfestes Einsparpotenzial.
          </p>
        </div>

        {/* Diagnostic Mode Switcher */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="p-1.5 rounded-2xl bg-[#111114] border border-white/[0.08] inline-flex gap-2">
            <button
              onClick={() => setActiveTab('automation')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'automation'
                  ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>1. Prozess- &amp; Workflow-Automation</span>
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'web'
                  ? 'bg-emerald-500 text-zinc-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Gauge className="w-4 h-4" />
              <span>2. Website-Speed &amp; Conversion</span>
            </button>
          </div>
        </div>

        {/* Active Tab Content */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-6 sm:p-10 lg:p-12 shadow-2xl">
          
          {activeTab === 'automation' ? (
            /* TAB 1: AUTOMATION IMPACT */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Sliders Left Column */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Slider 1: Team Size */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      Teammitglieder mit Büro- / Datenaufgaben
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-400 bg-emerald-950/30 px-3 py-1 rounded-lg border border-emerald-500/20">
                      {teamSize} {teamSize === 1 ? 'Person' : 'Personen'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                    <span>1 Person</span>
                    <span>10 Personen</span>
                    <span>20 Personen</span>
                  </div>
                </div>

                {/* Slider 2: Hours per Week */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      Manuelle Datenpflege pro Person / Woche (CRM, Mails, Rechnungen)
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-white bg-white/[0.04] px-3 py-1 rounded-lg border border-white/10">
                      {manualHoursPerWeek} Std. / Woche
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={manualHoursPerWeek}
                    onChange={(e) => setManualHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                    <span>1 Std.</span>
                    <span>8 Std. (1 Arbeitstag)</span>
                    <span>15 Std.</span>
                  </div>
                </div>

                {/* Slider 3: Hourly Rate */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Euro className="w-3.5 h-3.5 text-emerald-400" />
                      Durchschnittlicher interner Stundensatz (€)
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-white bg-white/[0.04] px-3 py-1 rounded-lg border border-white/10">
                      {hourlyRate} € / Std.
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="110"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                    <span>25 €</span>
                    <span>55 €</span>
                    <span>110 €</span>
                  </div>
                </div>

                {/* Strategy Insight Callout */}
                <div className="p-4 rounded-2xl bg-[#16161a] border border-white/[0.06] text-xs font-sans text-zinc-300 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">Der Automations-Hebel:</strong>{' '}
                    Mit n8n-Workflows und APIs werden Adressen, Rechnungen und Statuswechsel lautlos im Hintergrund synchronisiert – ohne dass dein Team auch nur ein einziges Mal Copy-Paste machen muss.
                  </div>
                </div>

              </div>

              {/* Result Right Column */}
              <div className="lg:col-span-5 rounded-2xl border border-emerald-500/30 bg-[#0d0d10] p-6 sm:p-8 flex flex-col justify-between text-center space-y-6 shadow-xl relative overflow-hidden">
                
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center justify-center gap-1.5">
                    <TrendingDown className="w-4 h-4 text-rose-400" />
                    <span>Aktuelle Kosten durch manuelle Arbeit</span>
                  </span>
                  
                  <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                    {yearlyWastedCost.toLocaleString('de-DE')} €
                  </div>
                  <span className="text-xs font-mono text-zinc-500 block">
                    verbranntes Jahresgehalt ({monthlyHoursWasted} Std./Monat)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-left space-y-1">
                  <span className="text-[11px] font-mono uppercase text-emerald-400 font-bold block">
                    ✓ Realisierbares Einsparpotenzial:
                  </span>
                  <div className="text-2xl font-mono font-bold text-emerald-300">
                    ca. {potentialSavingsYearly.toLocaleString('de-DE')} € / Jahr
                  </div>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    Gewonnene Zeit für Neukundengewinnung &amp; eigentliche Facharbeit.
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact(
                    'automation',
                    `ROI-Diagnose Automation: Geschätztes Einsparpotenzial ca. ${potentialSavingsYearly.toLocaleString('de-DE')} € / Jahr bei ${teamSize} Mitarbeitern (~${weeklyHoursWasted}h/Woche manuelle Aufgaben).`
                  )}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>15-Min. Audit für dein Team anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

              </div>

            </div>
          ) : (
            /* TAB 2: WEB PERFORMANCE IMPACT */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              {/* Sliders Left Column */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Slider 1: Monthly Visitors */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-emerald-400" />
                      Monatliche Website-Besucher
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-emerald-400 bg-emerald-950/30 px-3 py-1 rounded-lg border border-emerald-500/20">
                      {monthlyVisitors.toLocaleString('de-DE')} Besucher
                    </span>
                  </div>
                  <input
                    type="range"
                    min="200"
                    max="10000"
                    step="100"
                    value={monthlyVisitors}
                    onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                    <span>200 Besucher</span>
                    <span>5.000 Besucher</span>
                    <span>10.000 Besucher</span>
                  </div>
                </div>

                {/* Slider 2: Current Load Time */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-rose-400" />
                      Geschätzte Ladezeit deiner aktuellen Seite auf Smartphones
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-rose-400 bg-rose-950/30 px-3 py-1 rounded-lg border border-rose-500/20">
                      {loadTimeSeconds.toFixed(1)} Sekunden
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.8"
                    max="7.0"
                    step="0.1"
                    value={loadTimeSeconds}
                    onChange={(e) => setLoadTimeSeconds(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-400"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                    <span>0.8s (Schnell)</span>
                    <span>3.5s (Agentur-Durchschnitt)</span>
                    <span>7.0s (Sehr langsam)</span>
                  </div>
                </div>

                {/* Slider 3: Customer Value */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Euro className="w-3.5 h-3.5 text-emerald-400" />
                      Durchschnittlicher Auftragswert / Kundenwert (€)
                    </label>
                    <span className="font-mono text-sm sm:text-base font-bold text-white bg-white/[0.04] px-3 py-1 rounded-lg border border-white/10">
                      {avgCustomerValue.toLocaleString('de-DE')} €
                    </span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="5000"
                    step="50"
                    value={avgCustomerValue}
                    onChange={(e) => setAvgCustomerValue(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                    <span>150 €</span>
                    <span>2.500 €</span>
                    <span>5.000 €</span>
                  </div>
                </div>

                {/* Strategy Insight Callout */}
                <div className="p-4 rounded-2xl bg-[#16161a] border border-white/[0.06] text-xs font-sans text-zinc-300 flex items-start gap-3">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">Google Core Web Vitals Benchmark:</strong>{' '}
                    53% der mobilen Nutzer brechen den Besuch ab, wenn eine Seite länger als 3 Sekunden lädt. Eine Reduktion auf unter 0.5s verdoppelt nachweislich die Interaktionsrate.
                  </div>
                </div>

              </div>

              {/* Result Right Column */}
              <div className="lg:col-span-5 rounded-2xl border border-rose-500/30 bg-[#0d0d10] p-6 sm:p-8 flex flex-col justify-between text-center space-y-6 shadow-xl relative overflow-hidden">
                
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-rose-400 flex items-center justify-center gap-1.5">
                    <TrendingDown className="w-4 h-4" />
                    <span>Verlorene Neukunden-Anfragen</span>
                  </span>
                  
                  <div className="text-3xl sm:text-5xl font-mono font-bold text-white tracking-tight">
                    ~ {lostLeadsMonthly * 12} Leads
                  </div>
                  <span className="text-xs font-mono text-zinc-500 block">
                    pro Jahr verloren durch Ladehemmung (~{bouncePenaltyPercent}% Absprung)
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-left space-y-1">
                  <span className="text-[11px] font-mono uppercase text-rose-400 font-bold block">
                    Geschätzter entgangener Jahresumsatz:
                  </span>
                  <div className="text-2xl font-mono font-bold text-rose-300">
                    ca. {lostRevenueYearly.toLocaleString('de-DE')} € / Jahr
                  </div>
                  <p className="text-xs text-zinc-400 font-sans mt-1">
                    Umsatz, der heute unbemerkt zu Wettbewerbern abwandert.
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact(
                    'webdesign',
                    `ROI-Diagnose Web-Performance: Entgangener Umsatz ca. ${lostRevenueYearly.toLocaleString('de-DE')} € / Jahr durch ${loadTimeSeconds}s Ladezeit (~${lostLeadsMonthly * 12} verlorene Leads/Jahr).`
                  )}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold shadow-lg shadow-emerald-500/25 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <span>Website-Speed-Audit anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
