import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PhotoItem {
  src: string;
  title: string;
  desc: string;
  tag: string;
}

const GALLERY_PHOTOS: PhotoItem[] = [
  {
    src: 'https://lh3.googleusercontent.com/d/1v2lVCGzW9uO-q2vh9ttHinUQasgJaQOI',
    title: 'Hraní na opičích drahách',
    desc: 'Děti rozvíjejí přirozený šplh, obratnost a stabilitu těla v bezpečně polstrované opičí dráze.',
    tag: 'Zábava'
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1Yzg1NKxc1eltLvV7YWlYNtRufHyROOGu',
    title: 'Motivační High-Five',
    desc: 'Trenéři s dětmi budují rodinné pouto založené na povzbuzení a vzájemném respektu.',
    tag: 'Spolupráce'
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1EIKcXPaX6ilqEDI_CuzOB6wUy7M2-cm6',
    title: 'Gymnastická rovnováha',
    desc: 'Nácvik správného postavení trupu, balancování a kontrolovaných rotací u Klokánků.',
    tag: 'Gymnastika'
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1Jq_t7mD1eqQachZKIjG8U6KkdyMSS3sJ',
    title: 'Dívčí taneční lekce',
    desc: 'Ladné rytmické pohyby, moderní gymnastika a tance doprovázené dětskou hudbou.',
    tag: 'Tanec & Estetika'
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1Dpfu4BKAsaXZvRAREBLwzyPhOxtW8hi6',
    title: 'Atletické sprinty',
    desc: 'Rozvoj dynamického startu a zdravého odrazu během veselých překážkových her.',
    tag: 'Atletika'
  },
  {
    src: 'https://lh3.googleusercontent.com/d/1v2lVCGzW9uO-q2vh9ttHinUQasgJaQOI',
    title: 'Míčové hry',
    desc: 'Výtvarné hry stimulující motorickou zdatnost a prostorovou orientaci nejmenších.',
    tag: 'Míčové hry'
  }
];

const Gallery: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : (prev as number) - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx === null) return;
    setActiveIdx((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : (prev as number) + 1));
  };

  return (
    <section id="fotogalerie" className="py-24 bg-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-extrabold tracking-widest uppercase text-sm px-4 py-1.5 bg-emerald-50 rounded-full inline-block"
          >
            Fotogalerie
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Nahlédněte na naše tréninky
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Bento Grid layout optimalizovaný pro 6 fotek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[220px]">
          {GALLERY_PHOTOS.map((photo, index) => {
            // Determine grid span variables for exquisite bento layouts
            let gridSpan = 'lg:col-span-2 lg:row-span-1';
            if (index === 0) gridSpan = 'lg:col-span-4 lg:row-span-2'; // Large accent card
            if (index === 1) gridSpan = 'lg:col-span-2 lg:row-span-2'; // Tall accent card
            if (index === 4) gridSpan = 'lg:col-span-3 lg:row-span-1';
            if (index === 5) gridSpan = 'lg:col-span-3 lg:row-span-1';

            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                onClick={() => setActiveIdx(index)}
                className={`${gridSpan} relative group overflow-hidden rounded-3xl bg-slate-200 shadow-lg cursor-pointer border border-white`}
              >
                {/* Photo Element */}
                <img 
                  src={photo.src} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Dark overlay showing on hover with texts */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400 mb-1">
                    {photo.tag}
                  </span>
                  <h4 className="text-white font-heading font-bold text-lg mb-1 flex items-center gap-1.5 leading-snug">
                    {photo.title}
                    <ZoomIn size={16} className="text-slate-300 shrink-0" />
                  </h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed line-clamp-2">
                    {photo.desc}
                  </p>
                </div>

                {/* Static indicator badge shown only on corners */}
                <div className="absolute top-4 left-4 bg-slate-950/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase border border-white/10 group-hover:opacity-0 transition-opacity">
                  {photo.tag}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX DIALOG OVERLAY */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIdx(null)}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Toolbar Control */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center text-white z-50">
              <span className="text-xs sm:text-sm font-bold font-mono tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md flex items-center gap-2">
                <ImageIcon className="w-4.5 h-4.5 text-emerald-400" />
                Fotka {activeIdx + 1} z {GALLERY_PHOTOS.length}
              </span>
              <button 
                onClick={() => setActiveIdx(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Left Caret */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-40 select-none border border-white/5"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Picture focus container */}
            <div className="relative max-w-5xl max-h-[75vh] flex flex-col items-center">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img 
                  src={GALLERY_PHOTOS[activeIdx].src} 
                  alt={GALLERY_PHOTOS[activeIdx].title} 
                  className="max-h-[65vh] max-w-full md:max-w-4xl object-contain select-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Label Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent p-6 text-white text-left">
                  <span className="text-[10px] uppercase font-black text-emerald-400 tracking-wider mb-1 block">
                    {GALLERY_PHOTOS[activeIdx].tag}
                  </span>
                  <h3 className="font-heading font-black text-lg md:text-xl mb-1 text-white">
                    {GALLERY_PHOTOS[activeIdx].title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-3xl">
                    {GALLERY_PHOTOS[activeIdx].desc}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Caret */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer z-40 select-none border border-white/5"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
