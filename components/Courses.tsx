import React from 'react';
import { COURSES } from '../constants';
import { Baby, Rabbit, Trophy, Footprints, Calendar, MapPin, Coins, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const IconMap: Record<string, React.FC<any>> = {
  Baby,
  Rabbit,
  Trophy,
  Footprints
};

const Courses: React.FC = () => {

  const handleSelectCourse = (courseId: string) => {
    // Save selected course in sessionStorage to auto-populate the registration dropdown inside RegistrationForm
    sessionStorage.setItem('skokanek_auto_course', courseId);
    
    // Dispatch a custom event to notify the form in real-time
    const event = new CustomEvent('skokanek_course_selected', { detail: courseId });
    window.dispatchEvent(event);

    // Scroll smoothly to form
    const element = document.getElementById('prihlaska');
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
    <section id="skupiny" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-500 font-extrabold tracking-widest uppercase text-sm px-4 py-1.5 bg-sky-50 rounded-full inline-block"
          >
            Přehled našich skupin
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-heading font-black text-slate-900 tracking-tight"
          >
            Sportovní kurzy pro rok 2026/2027
          </motion.h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto text-base">
            Kurzy probíhají ve dvou pololetích: <strong>říjen–únor</strong> a <strong>březen–červen</strong>. Každý kurz se skládá z 15 lekcí. Kapacita skupin je omezena pro individuální přístup.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-sky-500 to-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, idx) => {
            const IconComponent = IconMap[course.icon] || Baby;

            return (
              <motion.div 
                key={course.id} 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 50, delay: idx * 0.1 }}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden flex flex-col justify-between border border-slate-100 transition-all duration-300 group"
              >
                <div>
                  {/* Glowing header accent band */}
                  <div className={`h-3 ${course.color} w-full`} />
                  
                  <div className="p-6 pb-0">
                    {/* Badge + Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-2xl ${course.color} bg-opacity-10 text-slate-900 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-8 h-8 ${course.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-black tracking-wider uppercase text-slate-400">Věk dětí</span>
                        <span className="text-base font-black font-heading text-slate-800">{course.ageGroup}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black font-heading text-slate-900 mb-2 truncate group-hover:text-sky-600 transition-colors">
                      {course.title}
                    </h3>
                    
                    <span className="inline-block text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-2.5 py-1 rounded-md mb-4">
                      {course.gender}
                    </span>

                    {/* Short Description */}
                    <p className="text-slate-600 text-xs leading-relaxed mb-6 h-[72px] overflow-hidden line-clamp-4">
                      {course.description}
                    </p>

                    {/* Parameters Checklist Card */}
                    <div className="space-y-2.5 border-t border-b border-slate-100 py-4 mb-6">
                      <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <Calendar className="w-4.5 h-4.5 text-slate-400 shrink-0" />
                        <span>{course.schedule}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <MapPin className="w-4.5 h-4.5 text-slate-400 shrink-0 select-none" />
                        <span className="truncate">{course.location}</span>
                      </div>
                      <div className="flex items-center gap-2.2 text-xs font-medium text-slate-700">
                        <Coins className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                        <span className="font-bold text-slate-900">{course.price.toLocaleString('cs-CZ')} Kč</span>
                        <span className="text-slate-400 font-normal">/ pololetí</span>
                      </div>
                      <div className="text-[10px] text-slate-500 leading-relaxed bg-slate-50/70 p-2.5 rounded-xl border border-slate-100 mt-2">
                        Platba za kurz musí být uhrazena nejpozději den před zahájením kurzu na účet školy <strong className="text-slate-700">131313410/0300</strong>.
                      </div>
                    </div>

                    {/* Bullet Benefits checklist */}
                    <div className="space-y-1.5 mb-6">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Rozvíjené schopnosti:</p>
                      {course.benefits.slice(0, 3).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Capacity Counter + Action Button at the bottom */}
                <div className="p-6 pt-0 mt-auto">
                  
                  {/* Course Capacity Display */}
                  <div className="mb-6 flex items-center justify-between bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                    <span className="text-slate-500 text-xs font-semibold">Kapacita kurzu:</span>
                    <span className="text-slate-900 text-sm font-black font-heading">{course.capacity} dětí</span>
                  </div>

                  {/* Enroll button */}
                  <button 
                    onClick={() => handleSelectCourse(course.id)}
                    className="block text-center w-full py-3 px-4 rounded-xl font-extrabold text-sm transition-all cursor-pointer border-2 border-slate-200 text-slate-700 hover:border-sky-500 hover:bg-sky-50 hover:text-sky-600"
                  >
                    Vybrat & Přihlásit
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
