import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import alexanderProfileImg from '../images/profile.jpg';

interface MinimalInquiryProps {
  prefill?: { scope?: string; message?: string };
}

export default function MinimalInquiry({ prefill }: MinimalInquiryProps = {}) {
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

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-[#f8f5ee] border-t border-[#ded7c8] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-4">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md font-semibold inline-block">
            Kontakt &bull; Direkter Draht
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-stone-900 tracking-tight leading-tight">
            Lass uns sprechen.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-sans leading-relaxed">
            Kein mühsames Formular-Abtippen, keine Warteschleife. Schreib mir einfach kurz auf WhatsApp, per Mail oder ruf direkt an. Ich antworte persönlich innerhalb von 24 Stunden.
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
                Wird automatisch an deine WhatsApp- oder Mail-Nachricht angehängt.
              </span>
            </div>
          </div>
        )}

        {/* The Direct Personal Contact Card */}
        <div className="max-w-lg mx-auto rounded-2xl border border-[#e7e3d8] bg-white p-6 sm:p-8 shadow-[0_12px_35px_rgba(0,0,0,0.04)]">
          
          {/* Header Row: Profile Avatar + Name + Subtitle */}
          <div className="flex items-center gap-4 pb-6 border-b border-[#e7e3d8]">
            <div className="relative shrink-0">
              <img
                src={alexanderProfileImg}
                alt="Alexander Rheindorf"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-[center_18%] border border-[#e7e3d8] shadow-xs"
              />
              {/* Online Status Dot */}
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
                Direkter Ansprechpartner &bull; Inhaber
              </div>
            </div>
          </div>

          {/* Action List */}
          <div className="mt-6 space-y-3">
            
            {/* 1. WhatsApp Button (Prominent Highlight) */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-emerald-300 bg-[#ecfdf5] hover:bg-[#d1fae5] text-sm sm:text-base font-sans text-emerald-900 font-semibold transition-all group shadow-2xs hover:shadow-xs cursor-pointer min-h-[44px]"
            >
              <MessageCircle className="w-5 h-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="flex-1 truncate">Direkt via WhatsApp schreiben &rarr;</span>
            </a>

            {/* 2. E-Mail Button */}
            <a 
              href={mailtoUrl}
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-[#e7e3d8] bg-white hover:border-emerald-300 hover:bg-[#faf8f3] text-sm sm:text-base font-sans text-stone-800 transition-all shadow-2xs group cursor-pointer min-h-[44px]"
            >
              <Mail className="w-5 h-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-medium truncate">hello@rheindorf.digital</span>
            </a>

            {/* 3. Phone Call Button */}
            <a 
              href="tel:+4916096351750"
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-[#e7e3d8] bg-white hover:border-emerald-300 hover:bg-[#faf8f3] text-sm sm:text-base font-sans text-stone-800 transition-all shadow-2xs group cursor-pointer min-h-[44px]"
            >
              <Phone className="w-5 h-5 text-emerald-700 shrink-0 group-hover:scale-110 transition-transform" />
              <span className="font-medium truncate">+49 160 96351750</span>
            </a>

            {/* 4. Location Row */}
            <div className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl border border-[#e7e3d8] bg-white text-xs sm:text-sm font-sans text-stone-600 shadow-2xs min-h-[44px]">
              <MapPin className="w-5 h-5 text-stone-400 shrink-0" />
              <span>Kerpen &amp; Köln (NRW) &bull; Remote weltweit</span>
            </div>

          </div>

          {/* Guarantee / Response Time Below Buttons */}
          <div className="mt-6 pt-5 border-t border-stone-200/80 flex items-center justify-between text-xs font-mono text-stone-500">
            <span>Reaktionszeit</span>
            <span className="text-emerald-700 font-semibold">&lt; 24 Stunden persönlich</span>
          </div>

        </div>

        {/* Small Trust Seal under Card */}
        <div className="mt-8 text-center text-xs font-sans text-stone-500">
          💡 Keine versteckten Kosten &bull; Erstes Beratungsgespräch immer 100% kostenfrei und unverbindlich.
        </div>

      </div>
    </section>
  );
}
