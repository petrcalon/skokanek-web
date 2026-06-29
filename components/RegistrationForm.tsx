import React, { useState } from 'react';
import { ClipboardCheck, ExternalLink, Sparkles, Loader2, Info } from 'lucide-react';
import { motion } from 'motion/react';

const RegistrationForm: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf2C08O4f1ZcH5AioAnDBCXo4rRi5oHG_oWmFxBl3z4naR39Q/viewform?usp=dialog";
  const embedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf2C08O4f1ZcH5AioAnDBCXo4rRi5oHG_oWmFxBl3z4naR39Q/viewform?embedded=true";

  return (
    <section id="prihlaska" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-12 right-0 w-96 h-96 bg-emerald-50 opacity-50 rounded-full pointer-events-none blur-3xl translate-x-1/3"></div>
      <div className="absolute bottom-12 left-0 w-96 h-96 bg-sky-50 opacity-50 rounded-full pointer-events-none blur-3xl -translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-extrabold tracking-widest uppercase text-sm px-4 py-1.5 bg-emerald-50 rounded-full inline-flex items-center gap-2"
          >
            <ClipboardCheck className="w-4 h-4" />
            Rychlá registrace
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Přihláška do kurzu Skokánek
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-base">
            Pro maximální pohodlí a bezpečné zpracování vašich dat využíváme prověřený Google Formulář. 
            Vyplňte jej přímo na této stránce nebo jej otevřete v samostatném okně.
          </p>
        </div>

        {/* CTA Banner & External Link option */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-100 mb-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sky-50 rounded-2xl text-sky-500 shrink-0 mt-1">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-black text-slate-900 text-lg">Otevřít v novém okně</h3>
              <p className="text-slate-500 text-sm mt-1 max-w-xl">
                Pokud vyplňujete přihlášku na mobilním telefonu nebo tabletu, doporučujeme otevřít formulář na celé obrazovce pro pohodlnější zápis údajů.
              </p>
            </div>
          </div>
          
          <a
            href={formUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-black rounded-2xl shadow-lg shadow-sky-500/20 active:scale-95 transition-all text-sm w-full md:w-auto shrink-0 cursor-pointer"
          >
            Spustit na Google Forms
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Embedded Iframe Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100 relative min-h-[750px] flex flex-col"
        >
          {/* Form Top Bar Styling */}
          <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-black tracking-wider uppercase text-slate-300">Zabezpečený přihlašovací formulář</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">Google Workspace Integration</span>
          </div>

          {/* Loader */}
          {loading && (
            <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-20">
              <Loader2 className="w-10 h-10 text-sky-500 animate-spin" />
              <p className="text-sm font-bold text-slate-600 animate-pulse">Načítání přihlašovacího formuláře...</p>
            </div>
          )}

          {/* Iframe */}
          <div className="flex-grow w-full h-[750px] relative">
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full border-0"
              onLoad={() => setLoading(false)}
              title="Přihláška do kurzu Skokánek"
            >
              Načítání...
            </iframe>
          </div>

          {/* Footer of the Frame */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 text-center shrink-0">
            <p className="text-slate-400 text-xs flex items-center justify-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              Vaše osobní údaje jsou zpracovány plně v souladu se zásadami ochrany osobních údajů (GDPR).
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RegistrationForm;
