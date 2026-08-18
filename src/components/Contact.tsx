import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Bot, Sparkles, MessageSquare, Clock, ShieldCheck, Lock, ArrowUpRight } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface ContactProps {
  onOpenDatenschutz?: () => void;
}

export default function Contact({ onOpenDatenschutz }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('webdesign');
  const [message, setMessage] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(true);
  const [honeypot, setHoneypot] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;
    if (!acceptedPrivacy) return;
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#04060A] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Plexify Big Headline Box */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="plexify-pill text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>// Direkter Draht zum Entwickler</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.05]">
            Let's make something <br />
            <span className="text-emerald-400">great work together.</span>
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Keine Account-Manager, kein Vorzimmer. Du sprichst direkt mit Alexander Rheindorf über deine neue High-End Website oder deinen 24/7 KI-Telefonassistenten.
          </p>
        </div>

        {/* Contact Layout Box */}
        <div className="plexify-card bg-[#080C14] border-white/15 p-6 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Info Panel (5 cols) */}
          <div className="lg:col-span-5 bg-[#04060A] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10 w-fit">
                <img
                  src={alexanderProfileImg}
                  alt="Alexander Rheindorf"
                  className="w-11 h-11 rounded-xl object-cover border border-emerald-400"
                />
                <div>
                  <span className="font-display font-bold text-white text-sm block">Alexander Rheindorf</span>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">Inhaber & Lead Developer</span>
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                
                {/* Phone */}
                <a
                  href="tel:016096351750"
                  className="flex items-center gap-3.5 p-4 bg-[#0D1322] border border-white/10 rounded-2xl hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">DIREKTER ANRUF:</span>
                    <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                      +49 (0) 160 96351750
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/4916096351750?text=Hallo%20Alexander!%20Ich%20interessiere%20mich%20f%C3%BCr%20ein%20Webdesign-%20oder%20KI-Projekt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 bg-[#0D1322] border border-white/10 rounded-2xl hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">WHATSAPP CHAT:</span>
                    <span className="font-bold text-white group-hover:text-[#25D366] transition-colors">
                      Jetzt Chat Starten ➔
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:hello@rheindorf.digital"
                  className="flex items-center gap-3.5 p-4 bg-[#0D1322] border border-white/10 rounded-2xl hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">E-MAIL:</span>
                    <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                      hello@rheindorf.digital
                    </span>
                  </div>
                </a>

              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Studio: 50169 Kerpen · Köln & ganz NRW</span>
            </div>

          </div>

          {/* Right Form Panel (7 cols) */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#04060A] border border-emerald-500/40 p-8 sm:p-12 rounded-3xl text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Vielen Dank für deine Anfrage!</h3>
                <p className="font-mono text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
                  Ich habe deine Nachricht erhalten und melde mich innerhalb von 24 Stunden persönlich bei dir.
                </p>
                <div className="pt-4">
                  <a
                    href="tel:016096351750"
                    className="plexify-btn plexify-btn-primary text-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Dringend? Direkt anrufen (0160 96351750)</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Honeypot Spam Protection */}
                <input
                  type="text"
                  name="website_honeypot"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                    Schnell-Anfrage
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Beschreibe kurz dein Vorhaben
                  </h3>
                </div>

                {/* Interest Selector */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    Interesse an:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'webdesign', label: 'High-End Web' },
                      { id: 'ki', label: 'KI-Telefonie' },
                      { id: 'komplett', label: 'Komplettpaket' }
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setInterest(opt.id)}
                        className={`py-3 px-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                          interest === opt.id
                            ? 'bg-white text-slate-950 border-white shadow-xl'
                            : 'bg-[#04060A] text-slate-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-400">Name / Ansprechpartner *</label>
                    <input
                      type="text"
                      required
                      placeholder="z.B. Markus Schmitz"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#04060A] border border-white/10 focus:border-emerald-500 rounded-2xl px-4 py-3.5 text-white font-mono text-xs outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-400">Telefonnummer *</label>
                    <input
                      type="tel"
                      required
                      placeholder="z.B. 0172 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#04060A] border border-white/10 focus:border-emerald-500 rounded-2xl px-4 py-3.5 text-white font-mono text-xs outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400">E-Mail-Adresse</label>
                  <input
                    type="email"
                    placeholder="z.B. info@betrieb-schmitz.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#04060A] border border-white/10 focus:border-emerald-500 rounded-2xl px-4 py-3.5 text-white font-mono text-xs outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400">Nachricht / aktuelle Website (optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Erzähle kurz von deinem Betrieb oder deinen aktuellen Herausforderungen..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#04060A] border border-white/10 focus:border-emerald-500 rounded-2xl px-4 py-3 text-white font-mono text-xs outline-none transition-colors resize-none"
                  />
                </div>

                {/* DSGVO Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="privacy-check"
                    required
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-slate-700 bg-[#04060A] text-emerald-500 focus:ring-emerald-500 cursor-pointer accent-emerald-500"
                  />
                  <label htmlFor="privacy-check" className="font-mono text-[11px] text-slate-400 leading-relaxed cursor-pointer select-none">
                    Ich willige ein, dass meine Angaben zur Kontaktaufnahme gemäß der{' '}
                    <button
                      type="button"
                      onClick={onOpenDatenschutz}
                      className="text-emerald-400 underline hover:text-emerald-300 inline cursor-pointer"
                    >
                      Datenschutzerklärung
                    </button>{' '}
                    verarbeitet werden.
                  </label>
                </div>

                {/* Submit Button (Plexify Style) */}
                <button
                  type="submit"
                  className="plexify-btn plexify-btn-primary w-full shadow-2xl"
                >
                  <Send className="w-4 h-4" />
                  <span>Kostenloses Erstgespräch anfordern</span>
                </button>

                <p className="font-mono text-[10px] text-slate-500 text-center flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% unverbindlich · DSGVO-konform · Rückmeldung in &lt; 24h</span>
                </p>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
