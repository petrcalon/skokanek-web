import React from 'react';
import { Play, Video, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  embedUrl: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Ukázka z tréninku – Všestranná obratnost',
    description: 'Nahlédněte do průběhu naší standardní lekce zaměřené na komplexní rozvoj pohybových dovedností.',
    embedUrl: 'https://www.youtube.com/embed/aQ18cdV8M7w'
  },
  {
    id: 'video-2',
    title: 'Hravá gymnastika a opičí dráhy',
    description: 'Jak učíme děti překonávat překážky bezpečně, s jistotou a hlavně s úsměvem na tváři.',
    embedUrl: 'https://www.youtube.com/embed/BkpCCdrgGDU'
  },
  {
    id: 'video-3',
    title: 'Koordinační hry pro nejmenší',
    description: 'Trénink reakční doby, stability a koordinace oka a ruky formou zábavných soutěží.',
    embedUrl: 'https://www.youtube.com/embed/iRMKVAZxL04'
  },
  {
    id: 'video-4',
    title: 'Radost z pohybu a týmový duch',
    description: 'Pohyb pro nás není jen dril, ale hlavně prostor pro radost, nová přátelství a zdravé sebevědomí.',
    embedUrl: 'https://www.youtube.com/embed/TyXRB1q8Bes'
  }
];

const VideoSection: React.FC = () => {
  return (
    <section id="videa" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-50 opacity-40 rounded-full pointer-events-none blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-emerald-50 opacity-40 rounded-full pointer-events-none blur-3xl translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-500 font-extrabold tracking-widest uppercase text-sm px-4 py-1.5 bg-sky-50 rounded-full inline-flex items-center gap-2"
          >
            <Video className="w-4 h-4" />
            Videa z lekcí
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Sledujte naše malé sportovce v akci
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-base">
            Pohyb a smích na každém tréninku. Podívejte se na krátké video sestřihy z našich sportovních kurzů Skokánek.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-[2.5rem] p-4 lg:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group"
            >
              {/* Responsive Video Container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-inner bg-slate-900 border border-slate-200">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Info */}
              <div className="mt-6 flex-grow flex flex-col">
                <h3 className="font-heading font-extrabold text-lg lg:text-xl text-slate-900 group-hover:text-sky-500 transition-colors duration-300 flex items-start gap-2.5">
                  <span className="flex-shrink-0 w-6 h-6 rounded-lg bg-sky-100 text-sky-500 flex items-center justify-center text-xs font-black mt-0.5">
                    {index + 1}
                  </span>
                  {video.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed flex-grow">
                  {video.description}
                </p>
                
                <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                    Kurz Skokánek
                  </span>
                  <a
                    href="https://www.youtube.com/playlist?list=PLJHuEqXE9mBjFiuYE50xg1IMgpZX3HB3K"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sky-500 hover:text-sky-600 transition-colors flex items-center gap-1"
                  >
                    Přehrát na YouTube <Play className="w-3 h-3 fill-current" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
