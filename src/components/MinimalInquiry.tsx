import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, MessageCircle, ArrowUpRight, AlertCircle } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface MinimalInquiryProps {
  prefill?: { scope?: string; message?: string };
}

export default function MinimalInquiry({ prefill }: MinimalInquiryProps = {}) {
  const [selectedScope, setSelectedScope] = useState<string>('webdesign');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (prefill?.scope) {
      setSelectedScope(prefill.scope);
    }
    if (prefill?.message) {
      setFormData(prev => ({ ...prev, message: prefill.message || prev.message }));
    }
  }, [prefill]);

  const scopes = [
    { id: 'webdesign', label: 'Website / Web-App', sub: 'Design & schnelles Frontend' },
    { id: 'automation', label: 'Prozess-Automation', sub: 'n8n & Schnittstellen' },
    { id: 'full-system', label: 'Beides kombiniert', sub: 'Website + interne Workflows' },
    { id: 'maintenance', label: 'Laufende Wartung', sub: 'Monitoring & Support' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Spam Protection: If honeypot is filled, silently ignore
    if (honeypot) {
      console.warn('Bot submission blocked');
      setSubmitted(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl = (import.meta as any).env?.VITE_INQUIRY_WEBHOOK_URL;
      
      if (!webhookUrl) {
        console.warn('VITE_INQUIRY_WEBHOOK_URL is not configured.');
        setSubmitted(true);
        return;
      }

      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          scope: selectedScope,
          ...formData,
          source: 'rheindorf.digital'
        })
      });

      if (!res.ok) {
        throw new Error(`Server-Fehler: Status ${res.status}`);
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Inquiry error:', err);
      setSubmitError('Die Anfrage konnte leider nicht übertragen werden. Bitte kontaktiere mich direkt per WhatsApp oder E-Mail.');
    } finally {
      setIsSubmitting(false);
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
    <section id="kontakt" className="py-24 sm:py-32 bg-[#fbf9f5] border-t border-[#e7e3d8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold">
            Kontakt &bull; Erstgespräch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-stone-900 tracking-tight">
            Lass uns sprechen.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Schreib mir kurz, wo dein Engpass liegt. Ich analysiere dein Anliegen und melde mich innerhalb von 24 Stunden persönlich.
          </p>
        </div>

        {/* Two Columns: Inquiry Form & Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Col: Scope-Based Intake Form */}
          <div className="lg:col-span-7 rounded-2xl border border-[#e7e3d8] bg-white p-6 sm:p-8 transition-colors shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 mb-4 shadow-xs">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold text-stone-900 mb-2">
                  Anfrage vorbereitet!
                </h3>
                <p className="text-sm text-stone-600 font-sans max-w-md">
                  Vielen Dank{formData.name ? `, ${formData.name}` : ''}! Deine Projektdaten sind zusammengestellt. Sende sie mir jetzt mit 1 Klick direkt über deinen bevorzugten Kanal:
                </p>

                <div className="mt-8 w-full space-y-3">
                  <a
                    href={whatsappConfirmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white font-sans font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Jetzt per WhatsApp an Alexander senden</span>
                  </a>
                  <a
                    href={mailtoConfirmUrl}
                    className="w-full py-3 px-5 border border-[#e7e3d8] bg-white text-stone-800 hover:text-stone-950 hover:bg-stone-50 font-sans font-medium text-sm rounded-xl flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <Mail className="w-4 h-4 text-emerald-700" />
                    <span>Per E-Mail an hello@rheindorf.digital senden</span>
                  </a>
                </div>

                <div className="mt-6 p-3 rounded-xl bg-[#fbf9f5] border border-[#e7e3d8] text-xs font-sans text-stone-500 max-w-sm">
                  💡 Du erreichst mich auch jederzeit direkt unter <strong className="text-stone-900">0160 96351750</strong>.
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs font-sans text-stone-500 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  ← Zurück zum Formular
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Scope Selection */}
                <div>
                  <label className="text-xs font-sans text-stone-600 uppercase tracking-wider block mb-3 font-semibold">
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
                            ? 'border-emerald-500 bg-emerald-50/70 text-stone-900 shadow-xs font-semibold'
                            : 'border-[#e7e3d8] bg-[#fbf9f5] text-stone-600 hover:border-stone-300 hover:text-stone-900'
                        }`}
                      >
                        <div className="font-semibold text-stone-900">{s.label}</div>
                        <div className="text-xs text-stone-500 mt-1">{s.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Contact Details */}
                <div className="space-y-4 pt-4 border-t border-[#e7e3d8]">
                  <div>
                    <label className="text-xs font-sans text-stone-600 uppercase tracking-wider block mb-2 font-semibold">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dein Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#fbf9f5] border border-[#e7e3d8] text-stone-900 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 transition-colors placeholder:text-stone-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-sans text-stone-600 uppercase tracking-wider block mb-2 font-semibold">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@beispiel.de"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#fbf9f5] border border-[#e7e3d8] text-stone-900 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 transition-colors placeholder:text-stone-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-sans text-stone-600 uppercase tracking-wider block mb-2 font-semibold">
                        Telefon / WhatsApp (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+49 170 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#fbf9f5] border border-[#e7e3d8] text-stone-900 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 transition-colors placeholder:text-stone-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-sans text-stone-600 uppercase tracking-wider block mb-2 font-semibold">
                      Nachricht (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Beschreibe kurz dein Anliegen oder deinen aktuellen Engpass..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#fbf9f5] border border-[#e7e3d8] text-stone-900 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600/20 transition-colors placeholder:text-stone-400"
                    />
                  </div>
                </div>

                {/* Honeypot - invisible to humans, catches bots */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="absolute -left-[9999px] opacity-0 h-0 w-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                {/* Error Message */}
                {submitError && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-sans">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                    <div>
                      <p>{submitError}</p>
                      <div className="mt-3 flex gap-3">
                        <a href={whatsappConfirmUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 font-medium underline">
                          → WhatsApp
                        </a>
                        <a href={mailtoConfirmUrl} className="text-emerald-700 hover:text-emerald-800 font-medium underline">
                          → E-Mail
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm py-4 rounded-xl transition-all shadow-[0_4px_20px_rgba(4,120,87,0.25)] hover:shadow-[0_6px_25px_rgba(4,120,87,0.35)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span>Wird gesendet…</span>
                  ) : (
                    <>
                      <span>Anfrage unverbindlich senden</span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center justify-between text-xs font-sans text-stone-500 pt-2 gap-2">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-medium">
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
            
            <div className="flex items-center gap-4 pb-6 border-b border-[#e7e3d8]">
              <div className="relative">
                <img
                  src={alexanderProfileImg}
                  alt="Alexander Rheindorf"
                  className="w-14 h-14 rounded-full object-cover object-[center_18%] border border-[#e7e3d8] shadow-xs"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-600 border-2 border-white" />
              </div>
              <div>
                <div className="text-base font-sans font-bold text-stone-900">Alexander Rheindorf</div>
                <div className="text-xs font-mono text-emerald-800 font-medium">Direkter Ansprechpartner &bull; Inhaber</div>
              </div>
            </div>

            <div className="space-y-2.5">
              <a 
                href="https://wa.me/4916096351750?text=Hallo%20Alexander,%20ich%20m%C3%B6chte%20ein%20Projekt%20anfragen." 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-sm font-sans text-emerald-900 transition-all group shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold">Direkt via WhatsApp schreiben →</span>
              </a>

              <a 
                href="mailto:hello@rheindorf.digital" 
                className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e3d8] bg-white hover:border-emerald-300 hover:bg-[#fbf9f5] text-sm font-sans text-stone-800 transition-colors shadow-2xs"
              >
                <Mail className="w-4 h-4 text-emerald-700" />
                <span>hello@rheindorf.digital</span>
              </a>

              <a 
                href="tel:+4916096351750" 
                className="flex items-center gap-3 p-3.5 rounded-xl border border-[#e7e3d8] bg-white hover:border-emerald-300 hover:bg-[#fbf9f5] text-sm font-sans text-stone-800 transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>+49 160 96351750</span>
              </a>

              <div className="flex items-center gap-3 p-3.5 text-sm font-sans text-stone-600 border border-[#e7e3d8] rounded-xl bg-white shadow-2xs">
                <MapPin className="w-4 h-4 text-stone-400" />
                <span>Kerpen &amp; Köln (NRW) &bull; Remote weltweit</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
