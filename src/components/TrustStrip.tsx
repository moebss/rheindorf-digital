import React from 'react';
import { Gauge, PhoneCall, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

export default function TrustStrip() {
  const metrics = [
    {
      num: '100%',
      label: 'Google PageSpeed Score',
      sub: 'Top-Rankings & 0% Absprungrate',
      icon: Gauge,
      color: 'text-emerald-400'
    },
    {
      num: '24/7',
      label: 'KI-Telefonassistent',
      sub: 'Nimmt jeden Anruf auf der Baustelle an',
      icon: PhoneCall,
      color: 'text-white'
    },
    {
      num: '< 0.4s',
      label: 'Ladezeit auf Smartphones',
      sub: 'Handcodierter Headless React Code',
      icon: Zap,
      color: 'text-emerald-400'
    },
    {
      num: '+340%',
      label: 'Mehr Anfragen',
      sub: 'Durch 1-Klick-Buchung & WhatsApp-Routing',
      icon: TrendingUp,
      color: 'text-white'
    }
  ];

  const marqueeItems = [
    'UX/UI BRANDING & DESIGN',
    '24/7 KI-VOICE TELEFONIE',
    'HEADLESS REACT 19 & VITE 6',
    'GOOGLE MAPS 3-PACK SEO',
    '100% FESTPREISGARANTIE',
    '14 TAGE GO-LIVE STANDARD',
    '100% DSGVO & § 5 DDG KONFORM'
  ];

  return (
    <section className="py-20 bg-[#030712] border-t border-b border-white/10 relative overflow-hidden">
      
      {/* 4 Large Metrics Numbers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="luxury-card p-8 text-center space-y-3 relative group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-emerald-400 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`font-display font-black text-4xl sm:text-5xl ${m.color}`}>
                  {m.num}
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">{m.label}</h4>
                  <p className="font-mono text-xs text-slate-400 mt-1">{m.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Continuous Marquee Ticker */}
      <div className="overflow-hidden border-t border-white/5 pt-8">
        <div className="animate-ticker-smooth font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 px-6 shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="hover:text-emerald-400 transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
