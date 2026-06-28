import React from 'react';
import { INSTRUCTORS } from '../constants';
import { GraduationCap, Award, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const Instructors: React.FC = () => {
  return (
    <section id="lektori" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative backdrop elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-50 rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-extrabold tracking-widest uppercase text-sm px-4 py-1.5 bg-orange-50 rounded-full inline-block"
          >
            Náš trenérský tým
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Kdo vede vaše děti k radosti z pohybu?
          </motion.h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            Certifikovaní pedagogové, zkušení sportovci a hlavně lidé se skvělým vztahem ke světu dětí.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Instructors Row List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div 
              key={instructor.id} 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 50, delay: index * 0.12 }}
              className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col justify-between group hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div>
                {/* Photo frame */}
                <div className="relative mb-6 flex justify-center">
                  <div className="absolute inset-0 bg-orange-500 rounded-full blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform scale-95" />
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-1 right-1/3 bg-orange-500 text-white rounded-full p-1.5 shadow-md border border-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                {/* Trainer Metadata */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black font-heading text-slate-900 leading-tight">
                    {instructor.name}
                  </h3>
                  <p className="text-sm font-bold text-orange-500 mt-1">
                    {instructor.role}
                  </p>
                </div>

                {/* Quote bio description */}
                <p className="text-slate-600 text-sm leading-relaxed text-center mb-6 italic">
                  "{instructor.bio}"
                </p>
              </div>

              {/* Specializations badges list */}
              <div className="mt-auto border-t border-slate-200/55 pt-6 space-y-2.5">
                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-1">
                  Odbor gymnastiky & Certifikace:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {instructor.specialization.map((spec, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="bg-white text-slate-700 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border border-slate-100/80 inline-flex items-center gap-1 hover:border-orange-200 hover:text-orange-600 transition-colors"
                    >
                      {sIdx === 0 && <GraduationCap className="w-3.5 h-3.5 text-orange-400" />}
                      {sIdx === 1 && <Award className="w-3.5 h-3.5 text-sky-400" />}
                      {sIdx === 2 && <Heart className="w-3.5 h-3.5 text-rose-400" />}
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
