import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function MinimalInquiry() {
  const [selectedScope, setSelectedScope] = useState<string>('webdesign');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const scopes = [
    { id: 'webdesign', label: 'Website / Web-App', sub: 'Design & schnelles Frontend' },
    { id: 'automation', label: 'Prozess-Automation', sub: 'n8n & Schnittstellen' },
    { id: 'full-system', label: 'Beides kombiniert', sub: 'Website + interne Workflows' },
    { id: 'maintenance', label: 'Laufende Wartung', sub: 'Monitoring & Support' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 sm:py-32 border-b border-white/[0.07] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest uppercase text-emerald-400">
            [ KONTAKT ]
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-5xl font-sans font-semibold tracking-tight text-white">
            Projekt anfragen oder kurz sprechen.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Schreib mir eine Nachricht oder melde dich direkt per WhatsApp oder Anruf. Ich antworte dir verlässlich innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Two Columns: Inquiry Form & Direct Channels */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Col: Scope-Based Intake Form */}
          <div className="lg:col-span-7 rounded-3xl border border-white/[0.08] bg-[#111114] p-5 sm:p-8 lg:p-10 shadow-2xl">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-sans font-semibold text-white">
                  Nachricht erhalten.
                </h3>
                <p className="mt-2 text-sm text-zinc-400 font-sans max-w-md">
                  Vielen Dank! Ich schaue mir deine Angaben an und melde mich zeitnah bei dir zurück.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-mono text-emerald-400 underline cursor-pointer"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Scope Selection */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3">
                    Was hast du vor?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {scopes.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedScope(s.id)}
                        className={`p-3 min-h-[50px] rounded-xl text-left font-mono transition-all border cursor-pointer flex flex-col justify-center ${
                          selectedScope === s.id
                            ? 'bg-emerald-950/60 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                            : 'bg-[#09090b] text-zinc-400 border-white/10 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        <span className="text-xs">{s.label}</span>
                        <span className="text-[10px] text-zinc-400 font-sans mt-0.5">{s.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Contact Details with iOS Safari 16px font-size protection */}
                <div className="space-y-4 pt-2 border-t border-white/[0.06]">
                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-white placeholder:text-zinc-600 font-sans text-base sm:text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-white placeholder:text-zinc-600 font-sans text-base sm:text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5">
                        Telefon / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+49 170 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-white placeholder:text-zinc-600 font-sans text-base sm:text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block mb-1.5">
                      Kurze Beschreibung
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Worum geht es bei deinem Projekt? Was soll gebaut oder automatisiert werden?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#09090b] border border-white/10 text-white placeholder:text-zinc-600 font-sans text-base sm:text-sm focus:outline-none focus:border-emerald-500/80 focus:ring-1 focus:ring-emerald-500/30 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 min-h-[48px] rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 text-zinc-950 font-mono text-xs uppercase tracking-wider font-bold hover:from-emerald-300 hover:to-emerald-400 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.99] shadow-lg shadow-emerald-500/25"
                >
                  <span>Nachricht absenden</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Col: Direct Channels */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Direct Channels Card */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-5 sm:p-8 space-y-4 sm:space-y-6">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                Direktkontakt
              </div>

              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="mailto:hello@rheindorf.digital" 
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#09090b] hover:border-emerald-500/30 transition-all group min-h-[48px]"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">E-Mail</div>
                    <div className="text-sm font-sans font-medium text-white group-hover:text-emerald-400 transition-colors">
                      hello@rheindorf.digital
                    </div>
                  </div>
                </a>

                <a 
                  href="tel:+4916096351750" 
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#09090b] hover:border-emerald-500/30 transition-all group min-h-[48px]"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">Telefon / WhatsApp</div>
                    <div className="text-sm font-sans font-medium text-white group-hover:text-emerald-400 transition-colors">
                      +49 160 96351750
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-[#09090b] min-h-[48px]">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-zinc-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500">Standort</div>
                    <div className="text-sm font-sans font-medium text-white">
                      Kerpen &amp; Köln (NRW) • Bundesweit
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Dev Promise */}
            <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-5 sm:p-8">
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 font-semibold">
                Direktkontakt
              </div>
              <h4 className="text-lg font-sans font-semibold text-white">
                Kein Agentur-Filter
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Du sprichst bei jedem Schritt direkt mit Alexander Rheindorf — dem Entwickler, der dein Projekt plant, gestaltet und programmiert.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
