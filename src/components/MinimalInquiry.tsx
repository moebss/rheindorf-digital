import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Sparkles, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface MinimalInquiryProps {
  prefill?: { scope?: string; message?: string };
}

export default function MinimalInquiry({ prefill }: MinimalInquiryProps = {}) {
  const [activeTab, setActiveTab] = useState<'direct' | 'form'>('direct');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState(prefill?.message || '');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');

  // Build WhatsApp URL with context if prefilled
  const defaultWhatsAppText = 'Hallo Alexander! Ich interessiere mich für ein Projekt und möchte mich unverbindlich austauschen.';
  const whatsappText = prefill?.message
    ? `Hallo Alexander! Ich habe mir folgendes Projekt konfiguriert:\n\n${prefill.message}\n\nKönnen wir dazu kurz sprechen?`
    : defaultWhatsAppText;
  
  const whatsappUrl = `https://wa.me/4916096351750?text=${encodeURIComponent(whatsappText)}`;

  // Build Mailto URL
  const mailSubject = prefill?.scope 
    ? `Projektanfrage (${prefill.scope}) • rheindorf.digital` 
    : 'Projektanfrage • rheindorf.digital';
  
  const mailBody = prefill?.message
    ? `Hallo Alexander,\n\nich habe mir folgendes Projekt konfiguriert:\n\n${prefill.message}\n\nBitte melde dich bei mir.\n\nViele Grüße`
    : `Hallo Alexander,\n\nich möchte mich unverbindlich zu einem Projekt austauschen.\n\nMeine Kontaktdaten:\nName: \nTelefon: \n\nViele Grüße`;

  const mailtoUrl = `mailto:hello@rheindorf.digital?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact) return;
    setStatus('submitting');

    const webhookUrl = (import.meta as any).env?.VITE_INQUIRY_WEBHOOK_URL;
    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            scope: prefill?.scope || 'quick-inquiry',
            name,
            contact,
            message: message || prefill?.message || 'Unverbindliche Anfrage',
            source: 'rheindorf.digital/kontakt'
          })
        });
      }
      setTimeout(() => setStatus('done'), 800);
    } catch (err) {
      console.warn('Form submit error:', err);
      setTimeout(() => setStatus('done'), 500);
    }
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#f8f5ee] border-t border-[#ded7c8] relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-4">
          <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-800 font-medium inline-block">
            Kontakt &bull; Direkter Draht
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
            Lass uns sprechen.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Keine Warteschleifen, kein Callcenter. Schreib mir einfach auf WhatsApp, ruf direkt an oder sende ein kurzes 3-Felder-Formular ab. Ich antworte persönlich innerhalb von 24 Stunden.
          </p>
        </div>

        {/* Optional Prefill Banner if user configured via Calculator */}
        {prefill?.message && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 font-sans flex items-start gap-3 shadow-2xs max-w-lg mx-auto">
            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold">Deine Projektauswahl ist vorgemerkt:</span>
              <p className="text-stone-700 mt-1 line-clamp-2 italic">„{prefill.message}“</p>
              <span className="text-[11px] font-mono text-emerald-800 block mt-1">
                Wird automatisch an deine WhatsApp-, Mail- oder Formular-Nachricht angehängt.
              </span>
            </div>
          </div>
        )}

        {/* The Personal Contact Card */}
        <div className="max-w-lg mx-auto rounded-3xl border border-[#e7e3d8] bg-white p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.04)]">
          
          {/* Header Row: Profile Avatar + Name + Subtitle */}
          <div className="flex items-center gap-4 pb-5 border-b border-[#e7e3d8]">
            <div className="relative shrink-0">
              <img
                src={alexanderProfileImg}
                alt="Alexander Rheindorf"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-[center_18%] border border-[#e7e3d8] shadow-xs"
              />
              <span 
                className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-xs" 
                title="Erreichbar & aktiv"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-stone-900 tracking-tight">
                Alexander Rheindorf
              </h3>
              <div className="text-xs sm:text-sm font-mono text-emerald-800 font-medium mt-0.5">
                Inhaber &bull; Senior-Entwickler
              </div>
            </div>
          </div>

          {/* Contact Mode Selector Tabs */}
          <div className="grid grid-cols-2 gap-2 mt-5 p-1 bg-[#fbf9f5] rounded-xl border border-[#e7e3d8]">
            <button
              onClick={() => setActiveTab('direct')}
              className={`py-2 px-3 rounded-lg text-xs font-sans font-medium transition-all cursor-pointer ${
                activeTab === 'direct'
                  ? 'bg-white text-stone-900 font-semibold shadow-xs border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Direktkontakt
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`py-2 px-3 rounded-lg text-xs font-sans font-medium transition-all cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-white text-stone-900 font-semibold shadow-xs border border-stone-200'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Kurznachricht senden
            </button>
          </div>

          {activeTab === 'direct' ? (
            /* Action List for Direct Contact */
            <div className="mt-5 space-y-3">
              {/* WhatsApp */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-emerald-300 bg-[#ecfdf5] hover:bg-[#d1fae5] text-sm sm:text-base font-sans text-emerald-900 font-semibold transition-all group shadow-2xs hover:shadow-xs cursor-pointer min-h-[44px]"
              >
                <MessageCircle className="w-5 h-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="flex-1 truncate">Direkt via WhatsApp schreiben &rarr;</span>
              </a>

              {/* E-Mail */}
              <a 
                href={mailtoUrl}
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-[#e7e3d8] bg-white hover:border-emerald-300 hover:bg-[#faf8f3] text-sm sm:text-base font-sans text-stone-800 transition-all shadow-2xs group cursor-pointer min-h-[44px]"
              >
                <Mail className="w-5 h-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium truncate">hello@rheindorf.digital</span>
              </a>

              {/* Phone */}
              <a 
                href="tel:+4916096351750"
                className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-[#e7e3d8] bg-white hover:border-emerald-300 hover:bg-[#faf8f3] text-sm sm:text-base font-sans text-stone-800 transition-all shadow-2xs group cursor-pointer min-h-[44px]"
              >
                <Phone className="w-5 h-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium truncate">+49 160 96351750</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-[#e7e3d8] bg-[#fbf9f5] text-xs sm:text-sm font-sans text-stone-600 shadow-2xs min-h-[44px]">
                <MapPin className="w-5 h-5 text-stone-400 shrink-0" />
                <span>Kerpen &amp; Köln (NRW) &bull; Remote weltweit</span>
              </div>
            </div>
          ) : (
            /* Integrated Quick 3-Field Form */
            <div className="mt-5">
              {status === 'done' ? (
                <div className="py-6 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-stone-900 font-sans">Anfrage erfolgreich erhalten!</h4>
                    <p className="text-xs text-stone-600 mt-1 max-w-xs mx-auto">
                      Vielen Dank, {name}! Ich schaue mir dein Anliegen an und melde mich innerhalb von 24 Stunden bei dir.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setName('');
                      setContact('');
                      setMessage('');
                    }}
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-medium cursor-pointer"
                  >
                    Weitere Nachricht verfassen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitForm} className="space-y-3.5">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-600 block mb-1 font-semibold">
                      Dein Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Markus Weber"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#fbf9f5] border border-[#e7e3d8] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-600 block mb-1 font-semibold">
                      Telefonnummer oder E-Mail *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="0170... oder name@firma.de"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      className="w-full bg-[#fbf9f5] border border-[#e7e3d8] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-stone-600 block mb-1 font-semibold">
                      Kurzes Anliegen / Projektwunsch
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Worum geht es in deinem Betrieb?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#fbf9f5] border border-[#e7e3d8] rounded-xl px-3.5 py-2 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-xs sm:text-sm transition-all shadow-[0_4px_15px_rgba(4,120,87,0.25)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <span>Wird übertragen…</span>
                    ) : (
                      <>
                        <span>Nachricht absenden</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Guarantee / Response Time Below Buttons */}
          <div className="mt-6 pt-5 border-t border-stone-200/80 flex items-center justify-between text-xs font-mono text-stone-500">
            <span>Reaktionszeit</span>
            <span className="text-emerald-700 font-semibold">&lt; 24 Stunden persönlich</span>
          </div>

        </div>

        {/* Small Trust Seal under Card */}
        <div className="mt-8 text-center text-xs font-mono text-stone-500">
          Keine versteckten Kosten &bull; Erstgespr&auml;ch 100% kostenfrei &bull; 1:1 Direkter Draht
        </div>

      </div>
    </section>
  );
}
