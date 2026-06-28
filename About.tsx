import React from 'react';
import { Smile, Target, Sparkles, Compass, ShieldAlert, Award } from 'lucide-react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="o-programu" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic decoration circles */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-emerald-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section with scroll trigger animation */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-500 font-extrabold tracking-widest uppercase text-sm px-4 py-1.5 bg-emerald-50 rounded-full inline-block"
          >
            Filozofie zdravého pohybu
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Co dělá Skokánek výjimečným?
          </motion.h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-sky-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Narrative & Image Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="space-y-6 text-lg text-slate-600 leading-relaxed"
          >
            <p className="text-xl font-medium text-slate-800">
              Skokánek nejsou jen obyčejné sportovní tréninky. Je to <strong className="text-emerald-500 font-bold">promyšlený koncept všestranné přípravy</strong> dětí, který klade na první místo přirozenou tvořivou hru a všestranný rozvoj těla.
            </p>
            <p>
              Náš přístup striktně respektuje věkové možnosti dětí. Důsledně se vyhýbáme předčasné sportovní specializaci (např. pouze fotbal, pouze atletika), která přetěžuje mladý organismus. Učíme děti základy gymnastiky, atletické obratnosti, koordinaci s míčem a především to, jak se hýbat zdravě a s chutí.
            </p>
            <p>
              Věříme, že nejlepší vztah k pohybu na celý život se buduje v dětství skrze <strong className="text-slate-950">radost a pozitivní zážitky</strong>. V tělocvičně neuslyšíte pískání přísných rozkazů. Budujeme rodinné bezpečné prostředí, kde každé dítě zažívá pocit osobního úspěchu bez ohledu na talent.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 50 }}
            className="relative"
          >
            {/* Elegant multi-colored blob under image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500 to-sky-400 rounded-3xl opacity-25 blur-2xl transform rotate-2"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white transform hover:rotate-1 transition-transform duration-500">
              <img 
                src="https://lh3.googleusercontent.com/d/1H56F-t9g3J2QkdfgCtNQVMCTBstzbJXZ" 
                alt="Děti se radují v pohybu se Skokánkem" 
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md p-4 rounded-2xl border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-sm">Záruka všestranné kvality</h4>
                  <p className="text-xs text-slate-300">Respektujeme fyziologii dětí pod dohledem fyzioterapeutů.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Three Core Pillars Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Compass,
              title: 'Všestranná obratnost',
              desc: 'Cvičení navržená tak, aby zapojila každou svalovou skupinu. Rozvíjíme koordinaci obratných pohybů hlavy, rukou a nohou, což je základ pro jakýkoliv budoucí sport.',
              color: 'border-emerald-100 bg-emerald-50/20 text-emerald-600',
              badgeColor: 'bg-emerald-500'
            },
            {
              icon: Smile,
              title: 'Hravé prostředí',
              desc: 'Trénink je převlečený za velké dobrodružství. Děti zdolávají opičí dráhy, překonávají vesmírné překážky a plní zábavné pohybové mise.',
              color: 'border-sky-100 bg-sky-50/20 text-sky-600',
              badgeColor: 'bg-sky-500'
            },
            {
              icon: Target,
              title: 'Zdravé sebevědomí',
              desc: 'Soutěžíme zdravým stylem. Děti se učí překonávat samy sebe, odstraňují strach z kotoulu, učí se bezpečně padat a bez zábran spolupracovat v týmu.',
              color: 'border-amber-100 bg-amber-50/20 text-amber-600',
              badgeColor: 'bg-amber-500'
            }
          ].map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.05)" }}
              className={`p-8 rounded-3xl border border-slate-100 bg-white transition-all duration-300`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white ${pillar.badgeColor} shadow-md`}>
                <pillar.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{pillar.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mascot + Values Split Cards Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Mascot "Skoky" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">🐸</span>
                <div>
                  <h3 className="text-2xl font-heading font-extrabold text-emerald-950">Seznamte se s maskotem Skokym!</h3>
                  <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Hrdina tréninků</span>
                </div>
              </div>
              <p className="text-emerald-900 leading-relaxed mb-6 font-medium text-sm">
                Skoky je veselý zelený žabák ze starého příborského rybníka, který se usadil v naší tělocvičně. Miluje skákání ze všeho nejvíc, ale občas potřebuje pomoc od dětí! 
              </p>
              <p className="text-emerald-800 text-xs leading-relaxed">
                Abychom podpořili motivaci, zapojujeme do tréninků jemnou gamifikaci: děti s žabákem Skokym na konci každé lekce „krmí klíšťata“ do rákosí překážkovým během, dostávají krásné samolepky do svého skákacího deníčku a sbírají žabí body (takzvané „Skoky“). Není to o pořadí, ale o zapojení každého dítěte!
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-emerald-200/50 flex justify-between items-center bg-white/40 p-4 rounded-2xl">
              <span className="text-xs font-bold text-emerald-950">Aktuální sezónní výzva:</span>
              <span className="text-xs font-black text-emerald-600 bg-white px-3 py-1 rounded-full shadow-sm">Žabákův Velký Skok 2026</span>
            </div>
          </motion.div>

          {/* Card 2: Core Club Promise Vow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between text-white"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                  <ShieldAlert className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-extrabold text-white">Vlajkový slib Skokánka</h3>
                  <span className="text-xs bg-orange-500/20 text-orange-400 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Náš slib rodičům</span>
                </div>
              </div>

              <ul className="space-y-4 text-xs font-medium text-slate-300">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-bold shrink-0">✔ 1.</span>
                  <div>
                    <strong className="text-emerald-400 block font-bold text-sm">Každý se smí a dokáže zapojit</strong>
                    Žádné zklamání z toho, že dítě neumí kotrmelec. Do naší rodiny bereme každého bez náročných talentovek.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-sky-400 font-bold shrink-0">✔ 2.</span>
                  <div>
                    <strong className="text-sky-400 block font-bold text-sm">Radost z pokroku převyšuje medaile</strong>
                    Učíme samostatnosti a oslavujeme i drobné úspěchy dětí, jako je překonání ostychu před novou hrou.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 font-bold shrink-0">✔ 3.</span>
                  <div>
                    <strong className="text-orange-400 block font-bold text-sm">Padat a chybovat je normální</strong>
                    Vytváříme prostředí plné humoru, kde neexistuje posmívání. Pády učíme zvládat s bezpečným úsměvem.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-[11px] text-slate-400 italic text-center">
              „Neformujeme olympijské vítěze na sílu, budujeme zdravá a šťastná těla pro spokojený život.“
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
