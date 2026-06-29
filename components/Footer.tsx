import React, { useState } from 'react';
import { Mail, Phone, MapPin, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const Footer: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIdx(openFaqIdx === index ? null : index);
  };

  return (
    <div className="bg-slate-950 text-slate-300">
      
      {/* SECTION A: INTERACTIVE ACCORDION FAQ BLOCK */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="text-center mb-16">
          <span className="text-emerald-400 font-extrabold tracking-widest uppercase text-xs px-4.5 py-1.5 bg-white/5 border border-white/10 rounded-full inline-block">
            Máte dotazy? Odpovíme!
          </span>
          <h3 className="text-2xl sm:text-4xl font-heading font-black text-white mt-4 tracking-tight">
            Často kladené otázky
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-slate-200 hover:text-white flex items-center justify-between gap-4 cursor-pointer outline-none focus:bg-slate-800/40"
                >
                  <span className="flex items-center gap-3 text-sm sm:text-base pr-4">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <div className="px-5 pb-6 pt-1 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-800/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION B: CORE COMPREHENSIVE FOOTER AREA */}
      <footer className="py-16 bg-slate-950 text-slate-400 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Column 1: Brand & Logo concepts */}
            <div className="md:col-span-5 space-y-5">
              <a href="#" className="flex items-center gap-2 block">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-400 flex items-center justify-center">
                  <Sparkles className="w-4.5 h-4.5 text-white" />
                </div>
                <span className="font-heading font-black text-2xl tracking-tighter text-white uppercase">
                  SKOKÁNEK<span className="text-emerald-400">.</span>
                </span>
              </a>
              <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-slate-400">
                Radost z přirozeného pohybu rozhýbáváme u dětí již od roku 2010. Přidejte se do naší velké rodiny v Příboře a pomozte dětem objevovat zdravé návyky plné tvořivosti a her.
              </p>
              

            </div>

            {/* Column 2: Quick navigation */}
            <div className="md:col-span-3">
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6">Navigační body</h4>
              <ul className="space-y-3.5 text-xs font-semibold">
                <li><a href="#o-programu" className="hover:text-emerald-400 transition-colors">O programu & filozofii</a></li>
                <li><a href="#skupiny" className="hover:text-emerald-400 transition-colors">Přehled kurzů</a></li>
                <li><a href="#lektori" className="hover:text-emerald-400 transition-colors">Náš lektorský tým</a></li>
                <li><a href="#fotogalerie" className="hover:text-emerald-400 transition-colors">Momenty ze cvičení</a></li>
                <li><a href="#prihlaska" className="hover:text-emerald-400 transition-colors">Přihlašovací formulář</a></li>
              </ul>
            </div>

            {/* Column 3: Contact coordinates */}
            <div className="md:col-span-4">
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-6">Spojení & Adresa</h4>
              <ul className="space-y-4 text-xs">
                <li className="flex items-start">
                  <MapPin className="mr-3 w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="leading-relaxed">
                    Masarykovo gymnázium Příbor,<br />
                    Jičínská 528, 742 58 Příbor
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 w-5 h-5 text-sky-400 shrink-0" />
                  <a href="tel:+420123456789" className="hover:text-white transition-colors text-slate-300 font-mono font-bold">+420 123 456 789</a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 w-5 h-5 text-orange-400 shrink-0" />
                  <a href="mailto:jiri.splichal@gypri.cz" className="hover:text-white transition-colors text-slate-300 font-bold">jiri.splichal@gypri.cz</a>
                </li>
              </ul>

            </div>

          </div>

          {/* Copyright rules claim */}
          <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>&copy; {new Date().getFullYear()} Skokánek Příbor. Všechna autorská práva vyhrazena.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">Podmínky ochrany PII / GDPR</a>
              <span>&bull;</span>
              <a href="#" className="hover:underline">Všeobecné obchodní podmínky</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
