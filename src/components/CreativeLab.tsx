import React, { useState } from 'react';
import { Sparkles, Palette, Sliders, Volume2, VolumeX, Zap, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { playClickSound, playHoverSound, playSuccessSound, toggleSound } from '../utils/soundEffects';

interface CreativeLabProps {
  onOpenContact: () => void;
}

export default function CreativeLab({ onOpenContact }: CreativeLabProps) {
  const [activeTheme, setActiveTheme] = useState<'emerald' | 'cyan' | 'violet' | 'sunset' | 'mono'>('emerald');
  const [blurIntensity, setBlurIntensity] = useState<number>(20);
  const [activeFont, setActiveFont] = useState<'grotesk' | 'sans' | 'mono'>('grotesk');
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [activePreviewTab, setActivePreviewTab] = useState<'ui' | 'code'>('ui');

  const themes = [
    {
      id: 'emerald',
      name: 'Cyber Obsidian',
      color: '#10b981',
      secondary: '#059669',
      borderHover: 'rgba(16, 185, 129, 0.4)',
      glow: 'rgba(16, 185, 129, 0.25)',
      desc: 'High-Impact Dark Luxury mit Smaragd-Akzenten',
    },
    {
      id: 'cyan',
      name: 'Electric Cyan',
      color: '#06b6d4',
      secondary: '#0891b2',
      borderHover: 'rgba(6, 182, 212, 0.4)',
      glow: 'rgba(6, 182, 212, 0.25)',
      desc: 'Ultra-Modern Tech Vibe für führende Betriebe',
    },
    {
      id: 'violet',
      name: 'Neon Violet',
      color: '#8b5cf6',
      secondary: '#7c3aed',
      borderHover: 'rgba(139, 92, 246, 0.4)',
      glow: 'rgba(139, 92, 246, 0.25)',
      desc: 'Kreativ, mutig und unkonventionell',
    },
    {
      id: 'sunset',
      name: 'Solar Gold',
      color: '#f59e0b',
      secondary: '#d97706',
      borderHover: 'rgba(245, 158, 11, 0.4)',
      glow: 'rgba(245, 158, 11, 0.25)',
      desc: 'Warme, exklusive Boutique-Atmosphäre',
    },
    {
      id: 'mono',
      name: 'Titanium Mono',
      color: '#ffffff',
      secondary: '#94a3b8',
      borderHover: 'rgba(255, 255, 255, 0.4)',
      glow: 'rgba(255, 255, 255, 0.2)',
      desc: 'Radikaler Minimalismus im Schweizer Stil',
    },
  ];

  const handleThemeChange = (themeId: 'emerald' | 'cyan' | 'violet' | 'sunset' | 'mono') => {
    setActiveTheme(themeId);
    playSuccessSound();

    const selected = themes.find((t) => t.id === themeId);
    if (!selected) return;

    document.documentElement.style.setProperty('--color-accent-green', selected.color);
    document.documentElement.style.setProperty('--color-accent-cyan', selected.secondary);
    document.documentElement.style.setProperty('--color-studio-border-hover', selected.borderHover);
  };

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) playClickSound();
  };

  return (
    <section id="studio-lab" className="py-24 sm:py-32 bg-[#030712] border-t border-white/10 relative overflow-hidden">
      
      {/* Dynamic Background Glow reacting to active theme */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[180px] pointer-events-none -z-10 transition-colors duration-700"
        style={{
          backgroundColor: themes.find((t) => t.id === activeTheme)?.glow || 'rgba(16, 185, 129, 0.15)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-10">
          <div className="space-y-4 max-w-2xl">
            <div className="luxury-pill">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// The Creative Studio Lab</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.05]">
              LIVE DESIGN <br />
              <span style={{ color: themes.find((t) => t.id === activeTheme)?.color }}>PLAYGROUND.</span>
            </h2>

            <p className="text-xs sm:text-sm font-mono text-slate-300 leading-relaxed">
              Spiele live mit Farb-Tokens, Glas-Refraktion und Sound-Feedback. Erlebe, wie maßgeschneiderte Designsysteme deine Marke unverwechselbar machen.
            </p>
          </div>

          {/* Sound FX Toggle Pill */}
          <button
            onClick={handleSoundToggle}
            data-cursor="sound"
            className={`luxury-pill cursor-pointer transition-all ${
              soundOn
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                : 'bg-white/5 border-white/10 text-slate-400'
            }`}
          >
            {soundOn ? <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
            <span>UI Sound FX: {soundOn ? 'AKTIV' : 'STUMM'}</span>
          </button>
        </div>

        {/* Studio Sandbox Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Control 1: Accent Color Matrix */}
            <div className="luxury-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase font-bold tracking-wider">
                <Palette className="w-4 h-4 text-emerald-400" />
                <span>01 // Dynamic Accent Palette</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleThemeChange(t.id as any)}
                    onMouseEnter={playHoverSound}
                    data-cursor="pointer"
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col gap-2 ${
                      activeTheme === t.id
                        ? 'border-white bg-white/10 shadow-lg scale-[1.02]'
                        : 'border-white/10 bg-[#070D1B] hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="w-4 h-4 rounded-full shadow-md"
                        style={{ backgroundColor: t.color }}
                      />
                      {activeTheme === t.id && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div>
                      <div className="font-display font-bold text-xs text-white">{t.name}</div>
                      <div className="text-[10px] font-mono text-slate-400 truncate">{t.color}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Glassmorphism Blur Slider */}
            <div className="luxury-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 uppercase font-bold tracking-wider">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>02 // Glass Refraction & Blur</span>
                </div>
                <span className="text-emerald-400">{blurIntensity}px</span>
              </div>

              <input
                type="range"
                min="0"
                max="40"
                value={blurIntensity}
                onChange={(e) => {
                  setBlurIntensity(Number(e.target.value));
                  playHoverSound();
                }}
                className="w-full accent-emerald-400 cursor-ew-resize bg-white/10 h-2 rounded-lg"
              />

              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>0px (Flat Raw)</span>
                <span>20px (Balanced)</span>
                <span>40px (Deep Frost)</span>
              </div>
            </div>

            {/* Control 3: Typography Archetype */}
            <div className="luxury-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300 uppercase font-bold tracking-wider">
                <Sliders className="w-4 h-4 text-violet-400" />
                <span>03 // Typography Hierarchy</span>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-1">
                {[
                  { id: 'grotesk', label: 'Space Grotesk', sub: 'Tech-Forward' },
                  { id: 'sans', label: 'Plus Jakarta', sub: 'Clean Modern' },
                  { id: 'mono', label: 'Space Mono', sub: 'Editorial Code' },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => {
                      setActiveFont(f.id as any);
                      playClickSound();
                    }}
                    onMouseEnter={playHoverSound}
                    data-cursor="pointer"
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      activeFont === f.id
                        ? 'border-emerald-400 bg-emerald-500/10 text-white'
                        : 'border-white/10 bg-[#070D1B] text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="font-bold text-xs block truncate">{f.label}</span>
                    <span className="text-[9px] font-mono text-slate-500 block">{f.sub}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Live Rendered Sandbox Card */}
          <div className="lg:col-span-6 sticky top-24">
            <div
              className="p-8 sm:p-10 rounded-3xl border shadow-2xl transition-all duration-500 relative overflow-hidden"
              style={{
                backdropFilter: `blur(${blurIntensity}px)`,
                backgroundColor: 'rgba(7, 13, 27, 0.85)',
                borderColor: themes.find((t) => t.id === activeTheme)?.borderHover || 'rgba(255,255,255,0.1)',
                boxShadow: `0 25px 60px -15px ${themes.find((t) => t.id === activeTheme)?.glow || 'rgba(0,0,0,0.5)'}`,
              }}
            >
              {/* Sandbox Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: themes.find((t) => t.id === activeTheme)?.color }}
                  />
                  <span className="font-mono text-xs font-bold text-white uppercase">
                    Live Sandbox Output
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => {
                      setActivePreviewTab('ui');
                      playClickSound();
                    }}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-colors cursor-pointer ${
                      activePreviewTab === 'ui' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    UI Output
                  </button>
                  <button
                    onClick={() => {
                      setActivePreviewTab('code');
                      playClickSound();
                    }}
                    className={`px-3 py-1 rounded-lg font-mono text-[11px] transition-colors cursor-pointer ${
                      activePreviewTab === 'code' ? 'bg-white/20 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Token JSON
                  </button>
                </div>
              </div>

              {activePreviewTab === 'ui' ? (
                <div className="space-y-6">
                  <div
                    className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase border"
                    style={{
                      backgroundColor: `${themes.find((t) => t.id === activeTheme)?.color}15`,
                      borderColor: `${themes.find((t) => t.id === activeTheme)?.color}40`,
                      color: themes.find((t) => t.id === activeTheme)?.color,
                    }}
                  >
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>Selected: {themes.find((t) => t.id === activeTheme)?.name}</span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-4xl text-white tracking-tight leading-snug font-black ${
                      activeFont === 'grotesk'
                        ? 'font-display'
                        : activeFont === 'mono'
                        ? 'font-mono'
                        : 'font-sans'
                    }`}
                  >
                    Crafting Websites that Outperform & Convert.
                  </h3>

                  <p className="font-mono text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {themes.find((t) => t.id === activeTheme)?.desc}. Vollständig responsiv, blitzschnell handcodiert und für maximale Kundengewinnung optimiert.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => {
                        playSuccessSound();
                        onOpenContact();
                      }}
                      onMouseEnter={playHoverSound}
                      data-cursor="pointer"
                      className="w-full sm:w-auto font-display font-black text-xs uppercase px-6 py-3.5 rounded-full text-slate-950 transition-transform duration-200 hover:scale-105 cursor-pointer flex items-center justify-center gap-2 shadow-xl"
                      style={{
                        backgroundColor: themes.find((t) => t.id === activeTheme)?.color || '#ffffff',
                      }}
                    >
                      <span>Design anfragen</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[11px] font-mono text-slate-400 text-center">
                      Lighthouse Score: 100/100 · 0.3s FCP
                    </span>
                  </div>
                </div>
              ) : (
                <pre className="p-4 rounded-2xl bg-[#030712] border border-white/10 font-mono text-[11px] text-emerald-400 overflow-x-auto leading-relaxed">
{JSON.stringify(
  {
    theme: themes.find((t) => t.id === activeTheme)?.name,
    accentPrimary: themes.find((t) => t.id === activeTheme)?.color,
    accentSecondary: themes.find((t) => t.id === activeTheme)?.secondary,
    glassBlur: `${blurIntensity}px`,
    typography: activeFont === 'grotesk' ? 'Space Grotesk' : activeFont === 'mono' ? 'Space Mono' : 'Plus Jakarta Sans',
    performance: '0.38s FCP / 100 PageSpeed',
    soundFeedback: soundOn ? 'Enabled (Web Audio Synth)' : 'Disabled',
  },
  null,
  2
)}
                </pre>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
