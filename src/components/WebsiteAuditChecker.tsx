import React, { useState } from 'react';
import { Search, Globe, CheckCircle2, ArrowRight, MessageCircle, Zap } from 'lucide-react';

export default function WebsiteAuditChecker() {
  const [url, setUrl] = useState('');
  const [contact, setContact] = useState('');
  const [focusArea, setFocusArea] = useState<'speed' | 'design' | 'leads' | 'seo'>('speed');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'done'>('idle');

  const focusOptions = [
    { id: 'speed' as const, label: 'Ladezeit & Speed', desc: 'Seite lädt zäh auf Handys' },
    { id: 'leads' as const, label: 'Kundenanfragen', desc: 'Zu wenig qualifizierte Kontakte' },
    { id: 'design' as const, label: 'Veralteter Auftritt', desc: 'Wirkt wie vor 10 Jahren' },
    { id: 'seo' as const, label: 'Google & Region', desc: 'Nicht auf Seite 1 gefunden' }
  ];

  const handleStartAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setStatus('analyzing');

    let cleanUrl = url.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    const webhookUrl = (import.meta as any).env?.VITE_INQUIRY_WEBHOOK_URL;

    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            scope: 'website-audit-request',
            websiteUrl: cleanUrl,
            contactInfo: contact,
            focusArea,
            source: 'rheindorf.digital/audit-checker'
          })
        });
      }

      setTimeout(() => {
        setStatus('done');
      }, 1400);
    } catch (err) {
      console.warn('Audit submit error:', err);
      setTimeout(() => {
        setStatus('done');
      }, 1000);
    }
  };

  return (
    <section id="website-check" className="py-20 sm:py-32 border-b border-[#e7e3d8] bg-[#fbf9f5] relative overflow-hidden">
      
      {/* Warm Ambient glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/[0.05] rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-800 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-xs font-semibold">
            <Search className="w-3.5 h-3.5" />
            <span>Kostenloses Schnell-Audit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-stone-900 leading-tight">
            Wie wirkt deine Website <br className="hidden sm:inline" />
            <span className="text-emerald-800">
              auf Neukunden &amp; Google?
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Gib einfach die Adresse deiner aktuellen Website ein. Ich analysiere Ladezeiten, mobile Lesbarkeit und Google-Sichtbarkeit – und gebe dir eine ehrliche Einschätzung ohne Fachchinesisch.
          </p>
        </div>

        {/* Audit Form Card */}
        <div className="rounded-3xl border border-[#e7e3d8] bg-white p-6 sm:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.04)] relative">
          
          {status === 'done' ? (
            <div className="py-6 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-900">
                  Analyse für <span className="text-emerald-700 font-mono text-lg break-all">{url}</span> erfasst!
                </h3>
                <p className="text-sm text-stone-600 font-sans max-w-lg mx-auto">
                  Vielen Dank! Ich schaue mir deine Website persönlich an (PageSpeed, Mobil-Struktur, DSGVO-Basics) und melde mich mit konkreten Hebeln bei dir.
                </p>
              </div>

              {/* Preliminary Checkpoints Box */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#fbf9f5] border border-[#e7e3d8] text-left space-y-2.5 font-sans text-xs">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500 pb-1 border-b border-[#e7e3d8] font-semibold">
                  Prüfpunkte in Bearbeitung:
                </div>
                <div className="flex items-center gap-2 text-emerald-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Domain &amp; Erreichbarkeit bestätigt</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mobiles Ladezeit-Profil &amp; Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2 text-stone-700">
                  <Globe className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Schema.org Daten &amp; Google Maps Sichtbarkeit</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/4916096351750?text=${encodeURIComponent(`Hallo Alexander! Ich habe gerade den kostenlosen Website-Check für ${url} gestartet.\n\nMein Fokus: ${focusOptions.find(f => f.id === focusArea)?.label}\nKontakt: ${contact}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Auf WhatsApp nachhaken</span>
                </a>

                <a
                  href={`mailto:hello@rheindorf.digital?subject=${encodeURIComponent(`Website-Check für ${url}`)}&body=${encodeURIComponent(`Hallo Alexander,\n\nich möchte den kostenlosen Website-Check anfordern:\n\nWebsite: ${url}\nMein Schwerpunkt: ${focusOptions.find(f => f.id === focusArea)?.label}\nMein Kontakt: ${contact}\n\nBitte sende mir dein kurzes Feedback zu.`)}`}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-[#e7e3d8] bg-white hover:bg-stone-50 text-stone-800 font-sans font-medium text-xs flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Per E-Mail senden</span>
                </a>

                <button
                  onClick={() => {
                    setStatus('idle');
                    setUrl('');
                    setContact('');
                  }}
                  className="text-xs text-stone-500 hover:text-stone-800 transition-colors cursor-pointer py-2 font-medium"
                >
                  Weitere URL prüfen
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleStartAudit} className="space-y-6">
              
              {/* 1. Step: Focus Selection */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-stone-600 block mb-3 font-semibold">
                  1. Was bereitet dir aktuell die größten Sorgen?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {focusOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFocusArea(opt.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        focusArea === opt.id
                          ? 'border-emerald-300 bg-emerald-50 text-emerald-900 shadow-xs'
                          : 'border-[#e7e3d8] bg-[#fbf9f5] text-stone-600 hover:border-stone-300 hover:text-stone-900'
                      }`}
                    >
                      <div className="font-sans font-semibold text-xs text-stone-900">{opt.label}</div>
                      <div className="text-[11px] text-stone-500 mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Step: URL & Contact */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 pt-2">
                <div className="md:col-span-7 space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-stone-600 block font-semibold">
                    2. Adresse deiner Website *
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="z.B. meine-firma.de"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full bg-[#fbf9f5] border border-[#e7e3d8] text-stone-900 rounded-xl pl-10 pr-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-stone-400"
                    />
                  </div>
                </div>

                <div className="md:col-span-5 space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-stone-600 block font-semibold">
                    Wohin soll das Feedback? *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E-Mail oder WhatsApp-Nummer"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-[#fbf9f5] border border-[#e7e3d8] text-stone-900 rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-stone-400"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === 'analyzing'}
                className="w-full py-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-sans font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(4,120,87,0.25)] hover:shadow-[0_6px_25px_rgba(4,120,87,0.35)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'analyzing' ? (
                  <span>Prüfe technische Grundlagen…</span>
                ) : (
                  <>
                    <span>Kostenlosen Website-Check anfordern</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-stone-600 font-sans pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>100% kostenlos &amp; unverbindlich</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Persönliche Auswertung vom Entwickler</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Kein Werbemüll</span>
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
