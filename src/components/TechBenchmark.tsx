import React from 'react';
import { Zap, Gauge, Cpu, ShieldCheck, CheckCircle2, XCircle, Code2, ArrowUpRight } from 'lucide-react';

export default function TechBenchmark() {
  return (
    <section className="py-24 sm:py-32 bg-[#04060A] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[450px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Plexify Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="plexify-pill text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4">
            <Gauge className="w-3.5 h-3.5" />
            <span>// Lighthouse Benchmark & Speed</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
            Performance entscheidet über <br />
            <span className="text-emerald-400">Kauf oder Absprung.</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            53% aller Smartphone-Nutzer verlassen eine Website, wenn sie länger als 3 Sekunden lädt. Rheindorf Digital Websites laden in unter 0.4 Sekunden.
          </p>
        </div>

        {/* Comparison Grid (Plexify Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Legacy WordPress / Template Card */}
          <div className="plexify-card bg-[#080C14] border-rose-500/20 p-8 sm:p-10 space-y-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
                08/15 Agentur (WordPress)
              </span>
              <span className="font-mono text-rose-400 text-xs font-bold">Ladezeit: 3.8s – 5.2s</span>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-6 p-6 bg-[#04060A] rounded-2xl border border-rose-500/20">
              <div className="w-20 h-20 rounded-full border-4 border-rose-500/60 flex items-center justify-center font-display text-3xl font-black text-rose-400 shrink-0">
                38
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-white text-lg">Google PageSpeed Score</h4>
                <p className="text-xs font-mono text-rose-300">Schlechte Platzierung bei Google & hoher Absprung auf Mobilgeräten</p>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-3 font-mono text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>35+ überladene WordPress-Plugins & ständige Sicherheitslücken</span>
              </div>
              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>Träge PHP-Server mit Datenbank-Latenzen bei jedem Seitenaufruf</span>
              </div>
              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>US-CDNs & Abmahnrisiken durch externe Font-Server</span>
              </div>
            </div>
          </div>

          {/* Rheindorf Digital Stack Card */}
          <div className="plexify-card bg-[#080C14] border-emerald-500/40 p-8 sm:p-10 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/20 px-3 py-1 rounded-full border border-emerald-500/40 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Rheindorf Digital Standard</span>
              </span>
              <span className="font-mono text-emerald-400 text-xs font-bold">Ladezeit: &lt; 0.4s FCP</span>
            </div>

            {/* Score Ring */}
            <div className="flex items-center gap-6 p-6 bg-[#04060A] rounded-2xl border border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
              <div className="w-20 h-20 rounded-full border-4 border-emerald-400 flex items-center justify-center font-display text-3xl font-black text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)] shrink-0">
                100
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-white text-lg">Google PageSpeed Score</h4>
                <p className="text-xs font-mono text-emerald-300">Top-Rankings, 0% Ladehemmung & maximale Lead-Conversion</p>
              </div>
            </div>

            {/* Bullets */}
            <div className="space-y-3 font-mono text-xs text-slate-200 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Vite 6, React 19 & Tailwind CSS 4 – schlanker, nativer Highspeed-Code</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>100% DSGVO (§ 5 DDG) mit self-hosted Schriftarten in DE</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Schema.org JSON-LD für sofortige Google Maps 3-Pack Anerkennung</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
