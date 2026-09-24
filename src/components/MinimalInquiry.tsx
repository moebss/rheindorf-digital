import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, MessageCircle } from 'lucide-react';
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
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Kontakt</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Lass uns sprechen.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Schreib mir, wo dein Engpass liegt. Ich melde mich innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Two Columns: Inquiry Form & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Col: Scope-Based Intake Form */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.06] bg-[#111113] p-6 sm:p-8 transition-colors">
            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-zinc-300 mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Anfrage erfolgreich!
                </h3>
                <p className="text-sm text-zinc-400 font-sans max-w-sm">
                  Vielen Dank{formData.name ? `, ${formData.name}` : ''}! Ich melde mich in Kürze bei dir.
                </p>

                <div className="mt-8 w-full space-y-3">
                  <a
                    href={whatsappConfirmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-5 bg-[#25D366] text-white font-sans font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-colors hover:bg-[#20ba59]"
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
                  className="mt-8 text-xs font-sans text-zinc-500 hover:text-white transition-colors"
                >
                  ← Zurück zum Formular
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Scope Selection */}
                <div>
                  <label className="text-xs font-sans text-zinc-500 uppercase tracking-wider block mb-3">
                    Worum geht es?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {scopes.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelectedScope(s.id)}
                        className={`rounded-lg border p-3 text-left text-sm font-sans transition-colors ${
                          selectedScope === s.id
                            ? 'border-white/[0.15] bg-white/[0.04] text-white'
                            : 'border-white/[0.06] bg-[#0a0a0c] text-zinc-400 hover:border-white/[0.1]'
                        }`}
                      >
                        <div className="font-medium">{s.label}</div>
                        <div className="text-xs text-zinc-500 mt-1">{s.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Contact Details */}
                <div className="space-y-4 pt-4 border-t border-white/[0.04]">
                  <div>
                    <label className="text-xs font-sans text-zinc-500 uppercase tracking-wider block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0a0a0c] border border-white/[0.06] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-white/[0.15] focus:ring-0 transition-colors placeholder:text-zinc-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-sans text-zinc-500 uppercase tracking-wider block mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0a0a0c] border border-white/[0.06] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-white/[0.15] focus:ring-0 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-sans text-zinc-500 uppercase tracking-wider block mb-2">
                        Telefon (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+49 170 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#0a0a0c] border border-white/[0.06] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-white/[0.15] focus:ring-0 transition-colors placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-sans text-zinc-500 uppercase tracking-wider block mb-2">
                      Nachricht (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Beschreibe kurz dein Anliegen..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0a0a0c] border border-white/[0.06] text-white rounded-lg px-4 py-3 font-sans text-sm focus:outline-none focus:border-white/[0.15] focus:ring-0 transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-zinc-950 hover:bg-zinc-200 font-sans font-medium text-sm py-3 rounded-lg transition-colors"
                >
                  Anfrage senden
                </button>

                <div className="flex flex-wrap items-center justify-between text-xs font-sans text-zinc-600 pt-2 gap-2">
                  <span>Persönliche Antwort &lt; 24h</span>
                  <span>100% DSGVO-konform</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Col: Direct Channels */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4 pt-2">
            
            <div className="flex items-center gap-4 pb-6 border-b border-white/[0.04]">
              <img
                src={alexanderProfileImg}
                alt="Alexander Rheindorf"
                className="w-12 h-12 rounded-full object-cover object-[center_18%] border border-white/[0.06]"
              />
              <div>
                <div className="text-base font-sans font-medium text-white">Alexander Rheindorf</div>
                <div className="text-sm font-sans text-zinc-500">Direkter Ansprechpartner</div>
              </div>
            </div>

            <div className="space-y-2">
              <a 
                href="mailto:hello@rheindorf.digital" 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/[0.03] text-sm font-sans text-zinc-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-zinc-500" />
                <span>hello@rheindorf.digital</span>
              </a>

              <a 
                href="tel:+4916096351750" 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/[0.03] text-sm font-sans text-zinc-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-zinc-500" />
                <span>+49 160 96351750</span>
              </a>

              <a 
                href="https://wa.me/4916096351750" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/[0.03] text-sm font-sans text-zinc-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-zinc-500" />
                <span>WhatsApp Nachricht senden</span>
              </a>

              <div className="flex items-center gap-3 p-3 text-sm font-sans text-zinc-300">
                <MapPin className="w-4 h-4 text-zinc-500" />
                <span>Kerpen &amp; Köln (NRW)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
