import React, { useState, useEffect } from 'react';
import { COURSES } from '../constants';
import { FormData } from '../types';
import { useRegistrationsStore } from '../store';
import { CheckCircle, AlertCircle, Sparkles, ChevronRight, ChevronLeft, Calendar, User, Heart, Send, Coins } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const RegistrationForm: React.FC = () => {
  const { addRegistration, getCourseOccupancy } = useRegistrationsStore();
  
  // Forms state
  const [formData, setFormData] = useState<FormData>({
    courseId: '',
    childName: '',
    childBirthDate: '',
    parentName: '',
    email: '',
    phone: '',
    note: '',
    gdpr: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [newRegId, setNewRegId] = useState('');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  // Auto-fill course listener when clicked from the catalog above
  useEffect(() => {
    const handleAutoSelect = (e: any) => {
      if (e.detail) {
        setFormData(prev => ({ ...prev, courseId: e.detail }));
        setCurrentStep(1); // Reset to first step if they were elsewhere
      }
    };
    window.addEventListener('skokanek_course_selected', handleAutoSelect);

    const storedAuto = sessionStorage.getItem('skokanek_auto_course');
    if (storedAuto) {
      setFormData(prev => ({ ...prev, courseId: storedAuto }));
      sessionStorage.removeItem('skokanek_auto_course');
    }

    return () => window.removeEventListener('skokanek_course_selected', handleAutoSelect);
  }, []);

  // Recalculate price dynamically based on course
  useEffect(() => {
    const matchedCourse = COURSES.find(c => c.id === formData.courseId);
    if (!matchedCourse) {
      setCalculatedPrice(0);
      return;
    }
    setCalculatedPrice(matchedCourse.price);
  }, [formData.courseId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, gdpr: e.target.checked }));
  };

  const nextStep = () => {
    // Basic step validation
    if (currentStep === 1) {
      if (!formData.courseId || !formData.childName || !formData.childBirthDate) {
        alert('Prosím vyplňte výběr kurzu, jméno dítěte a datum narození.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.parentName || !formData.email || !formData.phone) {
        alert('Prosím vyplňte jméno zástupce, e-mail a funkční telefonní číslo.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdpr) {
      alert('Musíte udělit souhlas se zpracováním osobních údajů.');
      return;
    }

    setStatus('submitting');
    
    // Simulate real database write delay
    setTimeout(() => {
      // Save it dynamically to stores
      const finalReg = addRegistration({
        ...formData
      });
      
      setNewRegId(finalReg.id);
      setStatus('success');
      setCurrentStep(1);
    }, 1500);
  };

  const restartForm = () => {
    setStatus('idle');
    setFormData({
      courseId: '',
      childName: '',
      childBirthDate: '',
      parentName: '',
      email: '',
      phone: '',
      note: '',
      gdpr: false,
    });
  };

  // Success output showing variables symbol and QR instructions
  if (status === 'success') {
    const variableSymbol = newRegId.replace(/\D/g, '') || '2026101';
    
    return (
      <section id="prihlaska" className="py-24 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 text-white relative">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl text-slate-800"
          >
            {/* Animated glowing check emblem */}
            <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-500 animate-pulse">
              <CheckCircle className="w-12 h-12" />
            </div>

            <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 mb-2">Máme vás zapsané!</h2>
            <p className="text-sm text-emerald-600 font-bold uppercase tracking-wider mb-6">Nezávazná přihláška úspěšně uložena</p>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Povedlo se! Přihláška pro dítě <strong className="text-slate-900 font-bold">{formData.childName}</strong> byla úspěšně odeslána. Přidělili jsme jí kód <strong className="text-slate-900 font-bold">{newRegId}</strong> a stav je nyní <strong className="text-amber-500 font-black">ČEKÁ NA SCHVÁLENÍ</strong>. Brzy se vám ozveme zpět s potvrzením místa.
            </p>

            {/* Simulated Payment details directly in receipt */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 mb-8 text-left space-y-4">
              <div className="flex justify-between items-center pb-2.5 border-b border-slate-200">
                <span className="text-xs font-bold text-slate-400 uppercase"> Platební pokyny (Školné)</span>
                <span className="text-xs font-mono font-bold text-emerald-600">ID: {newRegId}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="text-xs space-y-2 text-slate-600">
                  <div>
                    <span className="block font-medium text-slate-400">Částka k zaplacení:</span>
                    <strong className="text-slate-900 text-sm font-black">{calculatedPrice.toLocaleString('cs-CZ')} Kč</strong>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-400">Variabilní symbol:</span>
                    <strong className="text-slate-900 text-sm font-mono font-bold">{variableSymbol}</strong>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-400">Číslo účtu:</span>
                    <strong className="text-slate-900 text-sm font-mono font-bold">2300123456 / 2010</strong>
                  </div>
                  <div>
                    <span className="block font-medium text-slate-400">Zpráva pro příjemce:</span>
                    <strong className="text-slate-900 text-xs">Skokánek {formData.childName.split(' ')[0]}</strong>
                  </div>
                </div>

                {/* Styled Vector QR Code Mockup */}
                <div className="flex flex-col items-center justify-center p-3.5 bg-white border border-slate-200 rounded-xl shadow-inner text-center">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider mb-2">QR Platba v bance</span>
                  
                  {/* Real beautiful SVG pixel matrix representing QR code */}
                  <svg className="w-28 h-28 text-slate-900" viewBox="0 0 100 100" fill="currentColor">
                    {/* Corners */}
                    <rect x="0" y="0" width="25" height="25" fill="#0ea5e9" />
                    <rect x="4" y="4" width="17" height="17" fill="white" />
                    <rect x="8" y="8" width="9" height="9" fill="#0ea5e9" />

                    <rect x="75" y="0" width="25" height="25" fill="#0ea5e9" />
                    <rect x="79" y="4" width="17" height="17" fill="white" />
                    <rect x="83" y="8" width="9" height="9" fill="#0ea5e9" />

                    <rect x="0" y="75" width="25" height="25" fill="#0ea5e9" />
                    <rect x="4" y="79" width="17" height="17" fill="white" />
                    <rect x="8" y="83" width="9" height="9" fill="#0ea5e9" />

                    {/* Styled random pixels to make it look 100% authentic */}
                    <rect x="35" y="5" width="8" height="8" />
                    <rect x="45" y="15" width="12" height="6" />
                    <rect x="62" y="3" width="6" height="15" />
                    <rect x="30" y="32" width="15" height="4" />
                    <rect x="38" y="42" width="6" height="12" />
                    <rect x="52" y="35" width="10" height="10" />
                    <rect x="70" y="40" width="15" height="8" />
                    <rect x="10" y="38" width="12" height="12" />
                    
                    <rect x="30" y="60" width="18" height="6" />
                    <rect x="55" y="58" width="6" height="18" />
                    <rect x="68" y="65" width="14" height="6" />
                    <rect x="15" y="62" width="6" height="6" />
                    <rect x="40" y="75" width="10" height="10" />
                    <rect x="75" y="85" width="15" height="10" />
                    <rect x="60" y="88" width="8" height="4" />
                  </svg>
                  
                  <span className="text-[8px] text-slate-500 font-bold block mt-2">Pokyny platí po odeslání e-mailu</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={restartForm}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-6 py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer shrink-0"
              >
                Poslat další přihlášku dítěte
              </button>
              <a 
                href="#portal-rodicu"
                className="inline-flex items-center justify-center border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 px-6 py-3 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Zpět do Rodičovského portálu
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="prihlaska" className="py-24 bg-gradient-to-br from-slate-900 via-slate-850 to-emerald-950 text-white relative overflow-hidden">
      {/* Dynamic bubbles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500 opacity-5 rounded-full pointer-events-none blur-3xl translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500 opacity-5 rounded-full pointer-events-none blur-3xl -translate-x-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content with micro-badges */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Nezávazná rezervace okamžitě online
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black mb-4 tracking-tight text-white">
            Přihláška do kurzu
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Vyberte si skupinu. Po kliknutí vás náš systém provede celým formulářem v pár krocích. První trénink u nás je vždy zkušební a zcela zdarma.
          </p>
        </div>

        {/* Stepped Progress Bar Indicator */}
        <div className="max-w-md mx-auto mb-10 flex justify-between items-center text-xs font-bold text-slate-300 relative px-4">
          {/* Connector Lane bar */}
          <div className="absolute top-4 left-0 right-0 h-1 bg-slate-700 rounded-full -z-10" />
          <div 
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
            className="absolute top-4 left-0 h-1 bg-emerald-400 rounded-full transition-all duration-300 -z-10" 
          />

          {[
            { step: 1, label: 'Dítě & Skupina' },
            { step: 2, label: 'Kontakty rodiče' },
            { step: 3, label: 'Zdraví & Slib' }
          ].map((s) => (
            <div key={s.step} className="flex flex-col items-center gap-2">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                currentStep >= s.step 
                  ? 'bg-emerald-400 text-slate-950 font-black scale-105 shadow-md shadow-emerald-400/20' 
                  : 'bg-slate-800 text-slate-400'
              }`}>
                {s.step}
              </div>
              <span className={`text-[10px] ${currentStep >= s.step ? 'text-emerald-400 font-extrabold' : 'text-slate-500'}`}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Registration form card container */}
        <form onSubmit={handleSubmit} className="bg-white text-slate-800 rounded-3xl shadow-2xl p-6 sm:p-10 relative">
          
          <AnimatePresence mode="wait">
            {/* STEP 1: Child details & Course */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <User className="text-emerald-500 w-5 h-5 shrink-0" />
                  <h3 className="text-xl font-heading font-black text-slate-900">Vyberte variantu</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Select Course dropdown */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Výběr sportovní skupiny *</label>
                    <div className="relative">
                      <select 
                        name="courseId" 
                        value={formData.courseId} 
                        onChange={handleChange} 
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all appearance-none text-slate-800 cursor-pointer"
                      >
                        <option value="" disabled>Zvolte skupinu pro dítě</option>
                        {COURSES.map(c => {
                          const spots = getCourseOccupancy(c.id);
                          const isFull = spots.left === 0;
                          return (
                            <option key={c.id} value={c.id} disabled={isFull}>
                              {c.title} – {c.ageGroup} {isFull ? '(Přihlášky uzavřeny)' : `(Kapacita: volných ${spots.left} míst)`}
                            </option>
                          );
                        })}
                      </select>
                      <div className="absolute right-4 top-4.5 pointer-events-none text-slate-400 w-4 h-4 border-r-2 border-b-2 border-slate-400 transform rotate-45" />
                    </div>
                  </div>

                  {/* Child complete name */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Jméno a příjmení dítěte *</label>
                    <input 
                      type="text" 
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      required
                      placeholder="např. Jakub Šplíchal"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  {/* Child Birthdate */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Datum narození dítěte *</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        name="childBirthDate"
                        value={formData.childBirthDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none transition-all text-slate-800 cursor-pointer"
                      />
                    </div>
                  </div>


                </div>
              </motion.div>
            )}

            {/* STEP 2: Parent Contacts */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Calendar className="text-emerald-500 w-5 h-5 shrink-0" />
                  <h3 className="text-xl font-heading font-black text-slate-900">Zákonný zástupce & Spojení</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Parent name */}
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Jméno a příjmení zástupce *</label>
                    <input 
                      type="text" 
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      placeholder="např. Mgr. Jana Šplíchalová"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  {/* Parent Email */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">E-mail rodiče *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jana.mala@priklad.cz"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  {/* Parent Phone */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Mobilní telefon rodiče *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+420 777 123 456"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Medical Notes & Consent */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
                  <Heart className="text-rose-500 w-5 h-5 shrink-0" />
                  <h3 className="text-xl font-heading font-black text-slate-900">Zdravotní dokumentace & Odeslání</h3>
                </div>

                <div className="space-y-4">
                  {/* Notes inputs */}
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-wider mb-2">
                      Zdravotní stav či omezení (Astma, léky, alergie apod.)
                    </label>
                    <textarea 
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows={3.5}
                      placeholder="Mírné astma / léky s sebou / potíže s koordinací... popřípadě nechejte prázdné."
                      className="w-full px-4 py-3 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-emerald-500 outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Stat check on prices */}
                  {calculatedPrice > 0 && (
                    <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl flex justify-between items-center text-xs">
                      <div>
                        <span className="text-slate-400 font-bold block">Vypočítané pololetní školné:</span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Coins className="w-4 h-4 text-amber-500" />
                          <strong className="text-slate-900 font-black text-sm">{calculatedPrice.toLocaleString('cs-CZ')} Kč</strong>
                        </div>
                      </div>
                      <span className="text-[10px] text-slate-400 text-right leading-snug">První lekce je zkušební<br/>a zcela zdarma!</span>
                    </div>
                  )}

                  {/* GDPR */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        name="gdpr"
                        checked={formData.gdpr}
                        onChange={handleCheckbox}
                        required
                        className="mt-1 w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-400 cursor-pointer"
                      />
                      <span className="text-[11px] text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">
                        Odesláním nezávazné přihlášky uděluji <strong className="text-slate-900 font-bold">souhlas se zpracováním osobních údajů</strong> dítěte i zástupce za účelem bezpečného vedení sportovního klubu Skokánek. Souhlasím se všeobecnými podmínkami a schválením zkušební lekce.
                      </span>
                    </label>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form Actions Footer buttons control */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
            
            {/* Back button */}
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all inline-flex items-center gap-1 cursor-pointer"
              >
                <ChevronLeft size={16} />
                Zpět
              </button>
            ) : (
              <div />
            )}

            {/* Forward/Submit control */}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-6 py-3 rounded-xl text-xs transition-all inline-flex items-center gap-1cursor-pointer"
              >
                Pokračovat
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm transition-all shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2 cursor-pointer shrink-0 disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Odesílám rezervaci...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Odeslat nezávaznou přihlášku
                  </>
                )}
              </button>
            )}

          </div>

        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
