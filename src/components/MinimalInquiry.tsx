import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const webhookUrl = (import.meta as any).env?.VITE_INQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            scope: selectedScope,
            ...formData,
            source: 'rheindorf.digital'
          })
        });
      } catch (err) {
        console.warn('Webhook dispatch error:', err);
      }
    }
  };

  const selectedScopeLabel = scopes.find(s => s.id === selectedScope)?.label || selectedScope;
  const whatsappConfirmUrl = `https://wa.me/4916096351750?text=${encodeURIComponent(
    `Hallo Alexander! Ich habe gerade eine Anfrage gesendet:\n\n👤 Name: ${formData.name}\n✉️ E-Mail: ${formData.email}\n📞 Tel: ${formData.phone || '-'}\n🎯 Bereich: ${selectedScopeLabel}\n💬 Anliegen: ${formData.message || '-'}`
  )}`;

  const mailtoConfirmUrl = `mailto:hello@rheindorf.digital?subject=${encodeURIComponent(
    `Projektanfrage von ${formData.name} (${selectedScopeLabel})`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\nBereich: ${selectedScopeLabel}\n\nNachricht:\n${formData.message}`
  )}`;

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#09090b] border-t border-white/[0.04]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-medium">Kontakt &bull; Erstgespräch</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Lass uns sprechen.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Schreib mir kurz, wo dein Engpass liegt. Ich analysiere dein Anliegen und melde mich innerhalb von 24 Stunden persönlich.
          </p>
        </div>

        {/* Two Columns: Inquiry Form & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Col: Scope-Based Intake Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#111113] p-6 sm:p-8 transition-colors shadow-2xl">
            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Anfrage erfolgreich erfasst!
                </h3>
                <p className="text-sm text-zinc-300 font-sans max-w-sm">
                  Vielen Dank{formData.name ? `, ${formData.name}` : ''}! Ich melde mich in Kürze persönlich bei dir.
                </p>

                <div className="mt-8 w-full space-y-3">
                  <a
                    href={whatsappConfirmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-semibold text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Auf WhatsApp anpingen</span>
                  </a>
                  <a
                    href={mailtoConfirmUrl}
                    className="w-full py-2.5 px-5 border border-white/[0.1] text-zinc-300 hover:text-white hover:bg-white/[0.04] font-sans font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Per E-Mail öffnen</span>
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs font-sans text-zinc-500 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  ← Zurück zum Formular
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Scope Selection */}
                <div>
                  <label className="text-xs font-sans text-zinc-400 uppercase tracking-wider block mb-3 font-medium">
                    Worum geht es?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {scopes.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedScope(s.id)}
                        className={`rounded-xl border p-3.5 text-left text-sm font-sans transition-all cursor-pointer ${
                          selectedScope === s.id
                            ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.12)]'
                            : 'border-white/[0.06] bg-[#0a0a0c] text-zinc-400 hover:border-white/[0.12] hover:text-zinc-200'
                        }`}
                      >
                        <div className="font-semibold text-white">{s.label}</div>
                        <div className="text-xs text-zinc-400 mt-1">{s.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Contact Details */}
                <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                  <div>
                    <label className="text-xs font-sans text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0a0a0c] border border-white/[0.08] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-sans text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0a0a0c] border border-white/[0.08] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-sans text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
                        Telefon / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+49 170 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0a0a0c] border border-white/[0.08] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-sans text-zinc-400 uppercase tracking-wider block mb-2 font-medium">
                      Nachricht (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Beschreibe kurz dein Anliegen oder deinen aktuellen Engpass..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0a0a0c] border border-white/[0.08] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-sans font-semibold text-sm py-3.5 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Anfrage senden</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-950" />
                </button>

                <div className="flex flex-wrap items-center justify-between text-xs font-sans text-zinc-400 pt-2 gap-2">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Persönliche Antwort garantiert &lt; 24h</span>
                  </span>
                  <span>100% DSGVO-konform</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Col: Direct Channels */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4 pt-2">
            
            <div className="flex items-center gap-4 pb-6 border-b border-white/[0.06]">
              <div className="relative">
                <img
                  src={alexanderProfileImg}
                  alt="Alexander Rheindorf"
                  className="w-13 h-13 rounded-full object-cover object-[center_18%] border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#111113]" />
              </div>
              <div>
                <div className="text-base font-sans font-semibold text-white">Alexander Rheindorf</div>
                <div className="text-xs font-mono text-emerald-400">Direkter Ansprechpartner &bull; Inhaber</div>
              </div>
            </div>

            <div className="space-y-2.5">
              <a 
                href="https://wa.me/4916096351750?text=Hallo%20Alexander,%20ich%20m%C3%B6chte%20ein%20Projekt%20anfragen." 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-500/25 bg-emerald-950/25 hover:bg-emerald-900/35 text-sm font-sans text-emerald-300 transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="font-medium">Direkt via WhatsApp schreiben →</span>
              </a>

              <a 
                href="mailto:hello@rheindorf.digital" 
                className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-[#0a0a0c] hover:border-emerald-500/30 hover:text-white text-sm font-sans text-zinc-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>hello@rheindorf.digital</span>
              </a>

              <a 
                href="tel:+4916096351750" 
                className="flex items-center gap-3 p-3.5 rounded-xl border border-white/[0.06] bg-[#0a0a0c] hover:border-emerald-500/30 hover:text-white text-sm font-sans text-zinc-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+49 160 96351750</span>
              </a>

              <div className="flex items-center gap-3 p-3.5 text-sm font-sans text-zinc-400 border border-white/[0.04] rounded-xl bg-[#0a0a0c]/50">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>Kerpen &amp; Köln (NRW) &bull; Remote weltweit</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
