import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Zap, ExternalLink } from 'lucide-react';
import nawrathImg from '../images/media_1786374893160.png';
import alyasImg from '../images/media_1786244838088.png';
import banditImg from '../images/media_1786244763224.png';
import nailsImg from '../images/media_1786372914462.png';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

interface NeoSelectedWorksProps {
  onOpenContact: () => void;
  onSelectCaseStudy: (id: string) => void;
}

export default function NeoSelectedWorks({ onOpenContact, onSelectCaseStudy }: NeoSelectedWorksProps) {
  const projects = [
    {
      id: 'nawrath-bad',
      title: 'AZ HEIZUNG & BAD',
      category: 'SHK MEISTERBETRIEB & BADPLANER',
      metric: '+340% ANFRAGEN',
      img: nawrathImg,
      liveUrl: 'https://moebss.github.io/az-heizung-sanitaer/',
    },
    {
      id: 'alyas-barber',
      title: 'ALYAS BARBERSHOP',
      category: 'GENTLEMEN SALON & WHATSAPP',
      metric: '0.3S LADEZEIT',
      img: alyasImg,
      liveUrl: 'https://moebss.github.io/alyas-barbershop-horrem/',
    },
    {
      id: 'burning-bandit',
      title: 'THE BURNING BANDIT',
      category: 'HIGH-END TATTOO & CRAFT',
      metric: '+180% NEUKUNDEN',
      img: banditImg,
      liveUrl: 'https://moebss.github.io/the-burning-bandit-kerpen/',
    },
    {
      id: 'nails-shop',
      title: 'THE NAILS SHOP',
      category: 'BOUTIQUE NAIL SPA & STUDIO',
      metric: 'TOP #1 GOOGLE MAPS',
      img: nailsImg,
      liveUrl: 'https://moebss.github.io/the-nails-shop-horrem/',
    },
  ];

  return (
    <section id="works" className="border-b border-white/15 bg-[#050505] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Left Side: Massive Stacked Title Block */}
        <div className="lg:col-span-3 p-6 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/15 bg-[#0A0A0A]">
          <div>
            <h2 className="font-anton text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.88] tracking-tight">
              <span className="text-white block">SELECTED</span>
              <span className="text-[#D4FF00] block mt-1">WORKS</span>
            </h2>
            <div className="text-3xl sm:text-4xl text-[#0044FF] font-black mt-2">↗</div>
          </div>

          <div className="pt-8 space-y-3 font-mono text-xs text-slate-400">
            <p>
              Maßgeschneiderte React-Websites mit 100/100 Google PageSpeed und messbarem Kundenwachstum.
            </p>
            <div className="text-[#D4FF00] font-bold">
              // 4 LIVE PRODUCTION PLATFORMS
            </div>
          </div>
        </div>

        {/* Right Side: Horizontal Grid Showcase */}
        <div className="lg:col-span-9 p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((proj, idx) => (
            <div
              key={proj.id}
              data-cursor="view"
              className="neo-card flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => {
                playSuccessSound();
                onSelectCaseStudy(proj.id);
              }}
            >
              {/* Browser Preview Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black border-b border-white/10">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Metric Floating Badge */}
                <div className="absolute top-3 left-3 bg-black/90 border border-[#D4FF00]/50 text-[#D4FF00] px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                  {proj.metric}
                </div>
              </div>

              {/* Card Meta & Title */}
              <div className="p-5 flex items-start justify-between gap-4 bg-[#0A0A0A]">
                <div>
                  <h3 className="font-anton text-xl sm:text-2xl text-white tracking-wide group-hover:text-[#D4FF00] transition-colors">
                    {proj.title}
                  </h3>
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block mt-1">
                    {proj.category}
                  </span>
                </div>

                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    playClickSound();
                  }}
                  className="w-9 h-9 bg-white/10 group-hover:bg-[#D4FF00] group-hover:text-black text-white rounded flex items-center justify-center transition-colors shrink-0"
                  title="Live im Browser öffnen"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}

          {/* 4th Action Card */}
          <div className="sm:col-span-2 xl:col-span-3 flex items-center justify-between p-6 bg-[#0044FF] text-white">
            <div className="font-anton text-2xl sm:text-3xl tracking-wide uppercase">
              SEHEN SIE ALLE 4 LIVE-PROJEKTE IM DETAIL
            </div>
            <button
              onClick={() => {
                playSuccessSound();
                onSelectCaseStudy('nawrath-bad');
              }}
              className="w-12 h-12 bg-[#D4FF00] text-black hover:bg-white flex items-center justify-center font-bold text-xl transition-transform hover:scale-105 cursor-pointer shrink-0"
            >
              ➔
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
