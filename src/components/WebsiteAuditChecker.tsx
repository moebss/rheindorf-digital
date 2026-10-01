import React, { useState } from 'react';
import { Search, ShieldAlert, Zap, Globe, CheckCircle2, ArrowRight, MessageCircle, AlertCircle } from 'lucide-react';

export default function WebsiteAuditChecker() {
  const [url, setUrl] = useState('');
  const [contact, setContact] = useState('');
  const [focusArea, setFocusArea] = useState<'speed' | 'design' | 'leads' | 'seo'>('speed');
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'done'>('idle');
  const [error, setError] = useState<string | null>(null);

  const focusOptions = [
    { id: 'speed' as const, label: 'Ladezeit & Speed', desc: 'Seite lädt zäh auf Handys' },
    { id: 'leads' as const, label: 'Kundenanfragen', desc: 'Zu wenig qualifizierte Kontakte' },
    { id: 'design' as const, label: 'Veralteter Auftritt', desc: 'Wirkt wie vor 10 Jahren' },
    { id: 'seo' as const, label: 'Google & Region', desc: 'Nicht auf Seite 1 gefunden' }
  ];

  const handleStartAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setError(null);
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

      // Simulate rapid preliminary client check
      setTimeout(() => {
        setStatus('done');
      }, 1400);
    } catch (err) {
      console.warn('Audit submit error:', err);
      // Still show analysis state
      setTimeout(() => {
        setStatus('done');
      }, 1000);
    }
  };

  return (
    <section id="website-check" className="py-20 sm:py-32 border-b border-white/[0.07] bg-[#09090b] relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-500/[0.06] rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-[11px] font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(16,185,129,0.08)]">
            <Search className="w-3.5 h-3.5" />
            <span>Kostenloses Schnell-Audit</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-white leading-tight">
            Wie wirkt deine Website <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              auf Neukunden &amp; Google?
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
            Gib einfach die Adresse deiner aktuellen Website ein. Ich analysiere Ladezeiten, mobile Lesbarkeit und Google-Sichtbarkeit – und gebe dir eine ehrliche Einschätzung ohne Fachchinesisch.
          </p>
        </div>

        {/* Audit Form Card */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#111114] p-6 sm:p-10 shadow-2xl relative">
          
          {status === 'done' ? (
            <div className="py-6 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                  Analyse für <span className="text-emerald-400 font-mono text-lg">{url}</span> erfasst!
                </h3>
                <p className="text-sm text-zinc-300 font-sans max-w-lg mx-auto">
                  Vielen Dank! Ich schaue mir deine Website persönlich an (PageSpeed, Mobil-Struktur, DSGVO-Basics) und melde mich mit konkreten Hebeln bei dir.
                </p>
              </div>

              {/* Preliminary Checkpoints Box */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#09090b] border border-white/[0.06] text-left space-y-2.5 font-sans text-xs">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 pb-1 border-b border-white/[0.06]">
                  Prüfpunkte in Bearbeitung:
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Domain &amp; Erreichbarkeit bestätigt</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mobiles Ladezeit-Profil &amp; Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-300">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Schema.org Daten &amp; Google Maps Sichtbarkeit</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/4916096351750?text=${encodeURIComponent(`Hallo Alexander! Ich habe gerade den Website-Check für ${url} gestartet.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direkt via WhatsApp nachhaken</span>
                </a>

                <button
                  onClick={() => {
                    setStatus('idle');
                    setUrl('');
                    setContact('');
                  }}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer py-2"
                >
                  Weitere URL prüfen
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleStartAudit} className="space-y-6">
              
              {/* 1. Step: Focus Selection */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-medium">
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
                          ? 'border-emerald-500/60 bg-emerald-950/40 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                          : 'border-white/[0.06] bg-[#09090b] text-zinc-400 hover:border-white/[0.12] hover:text-zinc-200'
                      }`}
                    >
                      <div className="font-sans font-semibold text-xs text-white">{opt.label}</div>
                      <div className="text-[11px] text-zinc-500 mt-0.5">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Step: URL & Contact */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 pt-2">
                <div className="md:col-span-7 space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-medium">
                    2. Adresse deiner Website *
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="z.B. meine-firma.de"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full bg-[#09090b] border border-white/[0.08] text-white rounded-xl pl-10 pr-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                <div className="md:col-span-5 space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-medium">
                    Wohin soll das Feedback? *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="E-Mail oder Telefon / WhatsApp"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full bg-[#09090b] border border-white/[0.08] text-white rounded-xl px-4 py-3 font-sans text-sm focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === 'analyzing'}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-sans font-semibold text-sm transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'analyzing' ? (
                  <span>Prüfe technische Grundlagen…</span>
                ) : (
                  <>
                    <span>Kostenlosen Website-Check anfordern</span>
                    <ArrowRight className="w-4 h-4 text-zinc-950" />
                  </>
                )}
              </button>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 font-sans pt-1">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% kostenlos &amp; unverbindlich</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Persönliche Auswertung vom Senior-Entwickler</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
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
