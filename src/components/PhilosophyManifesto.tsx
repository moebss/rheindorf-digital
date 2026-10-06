import React from 'react';
import { Sparkles, Code2, Cpu, UserCheck, Shield } from 'lucide-react';

export default function PhilosophyManifesto() {
  const principles = [
    {
      index: '01',
      title: 'Klarheit vor Schnickschnack.',
      desc: 'Keine verwirrenden Animationen, die von deinem Angebot ablenken. Gute Gestaltung schafft sofortiges Vertrauen und sorgt dafür, dass Besucher einfach zum Hörer greifen oder eine Anfrage abschicken.',
      tag: 'Klarheit',
      icon: Sparkles,
      bg: 'bg-white'
    },
    {
      index: '02',
      title: 'Sauberer Code statt Plugin-Friedhof.',
      desc: 'Kein überladenes WordPress mit 40 Plugins, die Sicherheitslücken aufreißen. Moderner React-Code lädt blitzschnell, stürzt nicht ab und funktioniert auch nach Jahren noch zuverlässig.',
      tag: 'Handwerk',
      icon: Code2,
      bg: 'bg-[#f7f4ed]'
    },
    {
      index: '03',
      title: 'Automation statt Tipparbeit.',
      desc: 'Wiederkehrende Datenübertragungen zwischen Kontaktformular, Kalender, E-Mail und Buchhaltung gehören automatisiert. Software soll deinen Alltag entlasten — ohne händische Fleißarbeit.',
      tag: 'Effizienz',
      icon: Cpu,
      bg: 'bg-[#f5f0e6]'
    },
    {
      index: '04',
      title: 'Verlässlicher Partner vor Ort.',
      desc: 'Ich sitze in Kerpen bei Köln und bin greifbar. Bei Fragen, Wartung oder neuen Ideen sprichst du direkt mit mir persönlich – ohne Callcenter, Agentur-Wasserkopf oder anonyme Tickets.',
      tag: 'Persönlich',
      icon: UserCheck,
      bg: 'bg-white'
    }
  ];

  return (
    <section id="prinzipien" className="py-24 sm:py-32 border-b border-[#e4ded2] bg-[#f8f5ee] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
              Arbeitsweise &bull; Mein Versprechen
            </span>
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-display font-bold tracking-tight text-stone-900 leading-tight">
              Worauf du dich bei mir verlassen kannst.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Keine künstlichen Buzzwords, keine leeren Versprechungen. Vier handfeste Gründe, warum Unternehmen und Betriebe im Rheinland direkt mit mir zusammenarbeiten.
          </p>
        </div>

        {/* Editorial Architectural Grid with Varied Textures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div 
                key={p.index}
                className={`p-6 sm:p-8 rounded-2xl border border-[#e7e3d8] ${p.bg} flex flex-col justify-between hover:border-emerald-400 hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] transition-all duration-300 shadow-xs group relative overflow-hidden`}
              >
                {/* Large Subtle Numeral Watermark in Background */}
                <div 
                  aria-hidden="true" 
                  className="absolute -top-3 -right-2 text-6xl sm:text-7xl font-mono font-black text-stone-900/[0.04] group-hover:text-emerald-700/[0.08] transition-colors pointer-events-none select-none"
                >
                  {p.index}
                </div>

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200/80">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-2xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-800">
                        {p.index} / Prinzip
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 bg-white font-semibold shadow-2xs">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg sm:text-xl font-display font-bold text-stone-900 tracking-tight">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-mono text-stone-500">
                  <span>Qualitätsversprechen</span>
                  <span className="text-emerald-700 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Garantie ✓
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Pull-Quote Banner */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl border border-[#ded7c8] bg-[#f7f3ea] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#ded7c8] flex items-center justify-center text-emerald-700 shrink-0 shadow-2xs">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-display font-bold text-stone-900 text-base sm:text-lg">
                Kein Agentur-Wasserkopf. Keine Subunternehmer.
              </div>
              <p className="text-xs sm:text-sm text-stone-700 font-sans mt-1 leading-relaxed">
                Von der ersten Beratung bis zur letzten Zeile Code sprichst du immer direkt mit mir als deinem festen Ansprechpartner. Schnelle Entscheidungen, direkte Abstimmung und absolute Verlässlichkeit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
