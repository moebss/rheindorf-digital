import React, { useState } from 'react';
import { TrendingDown, ArrowRight, ArrowUpRight, Sparkles, PhoneOff, DollarSign, ShieldAlert, CheckCircle2, Zap } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: () => void;
}

export default function RoiCalculator({ onOpenContact }: RoiCalculatorProps) {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(6);
  const [avgOrderValue, setAvgOrderValue] = useState<number>(450);

  // Conversion rate of missed calls to lost customers ~ 50%
  const monthlyLostLeads = Math.round(missedCallsPerWeek * 4.33 * 0.5);
  const monthlyLostRevenue = Math.round(monthlyLostLeads * avgOrderValue);
  const yearlyLostRevenue = monthlyLostRevenue * 12;

  return (
    <section id="rechner" className="py-24 sm:py-32 bg-[#04060A] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Plexify Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="plexify-pill text-rose-400 bg-rose-500/10 border-rose-500/20 mb-4">
            <PhoneOff className="w-3.5 h-3.5 text-rose-400" />
            <span>// ROI- & Potenzial-Rechner</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
            Wie viel Umsatz verlierst du durch <br />
            <span className="text-rose-400">unbeantwortete Anrufe?</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Wenn das Telefon auf der Baustelle oder im Kundentermin klingelt, ruft der Neukunde meist direkt den nächsten Betrieb bei Google an.
          </p>
        </div>

        {/* Calculator Plexify Card */}
        <div className="max-w-5xl mx-auto plexify-card bg-[#080C14] border-white/15 p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Sliders (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Missed calls */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                  Verpasste Anrufe pro Woche
                </label>
                <span className="font-mono text-xl sm:text-2xl font-black text-white bg-[#04060A] px-4 py-1.5 rounded-2xl border border-white/10">
                  {missedCallsPerWeek} Anrufe
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={missedCallsPerWeek}
                onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-[#0D1322] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>1 Anruf/Woche</span>
                <span>12 Anrufe</span>
                <span>25 Anrufe/Woche</span>
              </div>
            </div>

            {/* Slider 2: Average Order Value */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                  Durchschnittlicher Auftragswert (€)
                </label>
                <span className="font-mono text-xl sm:text-2xl font-black text-emerald-400 bg-[#04060A] px-4 py-1.5 rounded-2xl border border-white/10">
                  {avgOrderValue.toLocaleString('de-DE')} €
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="3500"
                step="50"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full h-2 bg-[#0D1322] rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>50 € (z.B. Salon)</span>
                <span>1.500 € (Handwerk)</span>
                <span>3.500 € (Sanierung)</span>
              </div>
            </div>

            <div className="p-5 bg-[#04060A] rounded-2xl border border-white/10 text-xs font-mono text-slate-300 space-y-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                Der Rheindorf Digital Hebel:
              </span>
              <p className="leading-relaxed text-slate-400">
                Unser 24/7 KI-Telefonassistent nimmt <strong>100%</strong> dieser Anrufe entgegen, beantwortet Detailfragen und bucht den Termin sofort in deinen Kalender ein.
              </p>
            </div>

          </div>

          {/* Result Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#0D1322] border border-rose-500/30 p-8 rounded-3xl text-center space-y-6 shadow-2xl relative overflow-hidden">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 flex items-center justify-center gap-1.5">
                <TrendingDown className="w-4 h-4" />
                <span>Geschätzter Umsatzverlust</span>
              </span>
              
              <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight">
                {monthlyLostRevenue.toLocaleString('de-DE')} €
              </div>
              <span className="text-xs font-mono text-slate-400 block">jeden einzelnen Monat</span>
            </div>

            <div className="bg-[#04060A] p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase">Auf das Jahr hochgerechnet:</span>
              <div className="font-display font-bold text-2xl text-rose-400">
                ca. {yearlyLostRevenue.toLocaleString('de-DE')} € / Jahr
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="plexify-btn plexify-btn-primary w-full"
            >
              <span>Umsatz-Lücke jetzt schließen</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
