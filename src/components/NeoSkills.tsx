import React from 'react';
import { playHoverSound, playClickSound } from '../utils/soundEffects';

export default function NeoSkills() {
  const skills = [
    { name: 'FIGMA' },
    { name: 'REACT 19' },
    { name: 'TAILWIND CSS 4' },
    { name: 'TYPESCRIPT' },
    { name: 'NEXT.JS' },
    { name: '24/7 KI-VOICE' },
    { name: 'GSAP & MOTION' },
    { name: 'RESPONSIVE DESIGN' },
    { name: 'UI/UX DESIGN' },
    { name: 'INTERACTION DESIGN' },
    { name: 'DESIGN SYSTEMS' },
    { name: 'LOCAL SEO 3-PACK' },
    { name: '100/100 LIGHTHOUSE' },
    { name: 'ZERO-COOKIE DSGVO' },
  ];

  return (
    <section className="border-b border-white/15 bg-[#050505] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Left Title: SKILLS I USE */}
        <div className="lg:col-span-4 p-6 sm:p-10 md:p-12 border-b lg:border-b-0 lg:border-r border-white/15 bg-[#0A0A0A] flex items-center justify-between">
          <div>
            <h2 className="font-anton text-5xl sm:text-6xl md:text-7xl uppercase leading-[0.88] tracking-tight">
              <span className="text-white block">SKILLS</span>
              <span className="text-[#D4FF00] block mt-1">I USE</span>
            </h2>
          </div>

          {/* Blue Asterisk Icon Box */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0044FF] text-white flex items-center justify-center font-black text-3xl sm:text-4xl shadow-[0_0_25px_rgba(0,68,255,0.4)] select-none">
            ✳
          </div>
        </div>

        {/* Right Skills Chips Grid */}
        <div className="lg:col-span-8 p-6 sm:p-10 flex flex-wrap gap-3 sm:gap-4 items-center">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              data-cursor="pointer"
              className="neo-chip cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] shadow-[0_0_8px_rgba(212,255,0,0.8)]" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
