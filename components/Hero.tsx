import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';
import { ChevronRight, HeartHandshake, Zap, Trophy, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative h-[95vh] min-h-[650px] w-full overflow-hidden bg-slate-900 text-white" id="home">
      {/* Dynamic Background Slides with AnimatePresence */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={HERO_IMAGES[currentSlide]}
              alt={`Skokánek slide ${currentSlide + 1}`}
              className="w-full h-full object-cover select-none"
              referrerPolicy="no-referrer"
            />
            {/* Ambient gradients to guarantee maximum text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Hero Content Grid */}
      <div className="absolute inset-0 flex items-center z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Decorative Small badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider mb-6 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              Zápis do kurzů pololetí 2026/2027 spuštěn
            </motion.div>

            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 80 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black leading-tight mb-6 tracking-tight drop-shadow-md text-white"
            >
              Rozhýbejte svět <br />
              svých dětí se <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">Skokánkem!</span>
            </motion.h1>

            {/* Description Card */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-slate-100 mb-8 font-medium leading-relaxed drop-shadow-lg max-w-2xl border-l-4 border-sky-400 pl-4 py-1"
            >
              Všestranná sportovní příprava zaměřená na přirozený pohyb, obratnost a upřímnou radost u dětí věku 4 až 11 let. Kurzy, ze kterých se vrací vysmáté, spokojené a plné zdravé sebedůvěry.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={(e) => handleScroll(e, 'prihlaska')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-[1.03] active:scale-95 shadow-lg shadow-orange-500/20 group cursor-pointer"
              >
                Chci přihlásit dítě
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button 
                onClick={(e) => handleScroll(e, 'skupiny')}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white border-2 border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 rounded-2xl transition-all cursor-pointer backdrop-blur-sm"
              >
                Prohlédnout kurzy
              </button>
            </motion.div>

            {/* Values badges inside Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-3 max-w-lg mt-12 pt-8 border-t border-white/10 text-xs text-slate-300"
            >
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Bez tlaku na výkon</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-sky-400 shrink-0" />
                <span>Všestranný rozvoj</span>
              </div>
              <div className="flex items-center gap-2">
                <Play className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Zkušební lekce zdarma</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Progress Dots Indicator */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center space-x-3">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex items-center justify-center p-2 focus:outline-none cursor-pointer"
            aria-label={`Přejít na snímek ${index + 1}`}
          >
            <div className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-emerald-400 w-8' 
                : 'bg-white/20 group-hover:bg-white/60 w-3'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
