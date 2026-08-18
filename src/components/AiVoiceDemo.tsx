import React, { useState, useEffect } from 'react';
import { Bot, Play, Pause, PhoneCall, Volume2, Sparkles, CheckCircle2, Calendar, MessageSquare, Clock, ArrowUpRight, Zap } from 'lucide-react';

export default function AiVoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLine, setCurrentLine] = useState(0);
  const [scenario, setScenario] = useState<'sanitaer' | 'barber' | 'beratung'>('sanitaer');

  const scenarios = {
    sanitaer: {
      title: 'Handwerk & Notdienst',
      tag: 'AZ Badmanufaktur Nawrath',
      caller: 'Herr Schmitz (Köln)',
      conversation: [
        { sender: 'Kunde', time: '00:02', text: 'Guten Tag, Schmitz hier. Bei uns im Keller tropft die Hauptleitung und wir brauchen dringend einen Notdienst.' },
        { sender: 'KI-Assistent', time: '00:06', text: 'Guten Tag Herr Schmitz! Ich nehme den Notfall sofort auf. Ist Wasser im Wohnbereich ausgetreten oder ist das Hauptventil bereits abgedreht?' },
        { sender: 'Kunde', time: '00:12', text: 'Hauptventil ist zu, aber wir bräuchten morgen früh um 08:00 Uhr jemanden vor Ort.' },
        { sender: 'KI-Assistent', time: '00:17', text: 'Verstanden. Ich habe für morgen um 08:00 Uhr einen Express-Slot frei. Ich trage den Termin direkt in den Kalender von Meister Nawrath ein.' },
        { sender: 'Kunde', time: '00:23', text: 'Perfekt, vielen Dank für die schnelle Hilfe!' },
        { sender: 'KI-Assistent', time: '00:27', text: 'Sehr gerne! Die Bestätigung per SMS ist soeben raus. Einen schönen Tag!' }
      ]
    },
    barber: {
      title: 'Salon & Friseur Buchung',
      tag: 'Alyas Barbershop Horrem',
      caller: 'Marco Becker',
      conversation: [
        { sender: 'Kunde', time: '00:02', text: 'Hi, ich würde gerne spontan für Samstag einen Termin für Haarschnitt und Bart buchen.' },
        { sender: 'KI-Assistent', time: '00:06', text: 'Hi Marco! Für Samstag habe ich um 14:30 Uhr oder 16:00 Uhr bei Alyas noch Plätze frei. Welcher passt dir besser?' },
        { sender: 'Kunde', time: '00:11', text: '14:30 Uhr wäre super.' },
        { sender: 'KI-Assistent', time: '00:15', text: 'Alles klar, 14:30 Uhr ist für Haare & Bart eingebucht! Du erhältst in 5 Sekunden deine WhatsApp-Bestätigung.' }
      ]
    },
    beratung: {
      title: 'Badsanierung Vorab-Check',
      tag: 'AZ Badsanierung Köln',
      caller: 'Frau Dr. Weber',
      conversation: [
        { sender: 'Kunde', time: '00:02', text: 'Guten Tag, wir planen eine Komplettsanierung unseres 12qm Badezimmers und wollten nach Vorlaufzeiten fragen.' },
        { sender: 'KI-Assistent', time: '00:07', text: 'Guten Tag Frau Dr. Weber! Bei 12qm Komplettbädern liegt unsere Vorlaufzeit aktuell bei ca. 3 bis 4 Wochen. Möchten Sie vorab unseren 3D-Kostenrechner nutzen oder einen Vor-Ort-Termin vereinbaren?' },
        { sender: 'Kunde', time: '00:16', text: 'Ein Vor-Ort-Termin nächste Woche Dienstag wäre ideal.' },
        { sender: 'KI-Assistent', time: '00:20', text: 'Perfekt. Ich habe Dienstag um 17:00 Uhr für die Besichtigung reserviert und sende Ihnen die Adresse & Checkliste per Mail.' }
      ]
    }
  };

  const activeData = scenarios[scenario];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentLine((prev) => {
          if (prev >= activeData.conversation.length - 1) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeData.conversation.length]);

  const handleScenarioChange = (newScenario: 'sanitaer' | 'barber' | 'beratung') => {
    setIsPlaying(false);
    setCurrentLine(0);
    setScenario(newScenario);
  };

  return (
    <section id="ki-telefonie" className="py-24 sm:py-32 bg-[#04060A] border-t border-white/10 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[650px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Plexify Style) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="plexify-pill text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4">
            <Bot className="w-3.5 h-3.5" />
            <span>// Live Voice AI Studio Terminal</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight mb-4">
            Erlebe deinen <br />
            <span className="text-emerald-400">KI-Telefonassistenten</span> live.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            Kein Anrufbeantworter, kein Band. Natürliche Dialoge in fließendem Deutsch, die Notfälle filtern, Termine direkt buchen und Kunden begeistern.
          </p>
        </div>

        {/* Live Audio & Transcript Terminal Card (Plexify Dark Studio Design) */}
        <div className="max-w-4xl mx-auto plexify-card bg-[#080C14] border-white/15 p-6 sm:p-10 shadow-2xl">
          
          {/* Top Console Controls & Scenario Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
                <PhoneCall className="w-6 h-6 animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#080C14]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                  <span>{activeData.title}</span>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 font-bold px-2 py-0.5 rounded-full border border-emerald-500/30">
                    24/7 LIVE
                  </span>
                </h3>
                <span className="text-xs text-slate-400 font-mono">{activeData.tag}</span>
              </div>
            </div>

            {/* Scenario Buttons */}
            <div className="flex items-center gap-1.5 bg-[#04060A] p-1.5 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar">
              {(['sanitaer', 'barber', 'beratung'] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => handleScenarioChange(key)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    scenario === key
                      ? 'bg-emerald-500 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {key === 'sanitaer' ? 'Handwerk' : key === 'barber' ? 'Barbershop' : 'Beratung'}
                </button>
              ))}
            </div>

          </div>

          {/* Audio Waveform & Player Action Bar */}
          <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10">
            
            {/* Animated Waveform Visualizer */}
            <div className="flex items-center justify-center gap-1.5 h-12 w-full sm:w-auto">
              {[40, 75, 30, 90, 60, 100, 45, 80, 65, 95, 35, 85, 50, 100, 70, 40, 90, 60, 30, 80, 55, 95, 40].map((height, i) => (
                <div
                  key={i}
                  className={`w-1 sm:w-1.5 rounded-full transition-all duration-300 ${
                    isPlaying ? 'bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-slate-800'
                  }`}
                  style={{
                    height: isPlaying ? `${Math.max(20, (height * ((i % 3) + 1)) % 100)}%` : '20%'
                  }}
                />
              ))}
            </div>

            {/* Play / Pause Toggle Button */}
            <button
              onClick={() => {
                if (isPlaying) {
                  setIsPlaying(false);
                } else {
                  setCurrentLine(0);
                  setIsPlaying(true);
                }
              }}
              className="plexify-btn plexify-btn-primary shrink-0 text-xs px-6 py-3"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-slate-950" />}
              <span>{isPlaying ? 'Simulation pausieren' : 'Audio-Dialog abspielen'}</span>
            </button>

          </div>

          {/* Transcript Dialogue Feed */}
          <div className="space-y-4 max-h-[380px] overflow-y-auto pt-6 pr-2 no-scrollbar">
            {activeData.conversation.map((msg, idx) => {
              const isAi = msg.sender === 'KI-Assistent';
              const isCurrent = currentLine === idx && isPlaying;
              return (
                <div
                  key={idx}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                    isAi
                      ? 'bg-[#04060A] border-emerald-500/30 ml-4 sm:ml-10 shadow-lg'
                      : 'bg-[#0D1322] border-white/10 mr-4 sm:mr-10'
                  } ${isCurrent ? 'ring-2 ring-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.25)] scale-[1.01]' : 'opacity-90'}`}
                >
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-mono font-bold flex items-center gap-1.5 ${isAi ? 'text-emerald-400' : 'text-slate-300'}`}>
                      {isAi && <Bot className="w-4 h-4" />}
                      <span>{msg.sender}</span>
                    </span>
                    <span className="text-slate-500 font-mono text-[11px]">{msg.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-mono">
                    {msg.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Feature Highlights beneath Dialogue */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-6 border-t border-white/10">
            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Kalender-Eintrag in Echtzeit</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>SMS-Zusammenfassung an Kunden</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-mono text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% DSGVO & Server in DE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
