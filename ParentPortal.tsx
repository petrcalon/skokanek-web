import React, { useState } from 'react';
import { useRegistrationsStore } from '../store';
import { COURSES } from '../constants';
import { Search, Shield, User, Mail, Calendar, Settings, CheckCircle2, AlertCircle, Trash2, TrendingUp, DollarSign, Award, RefreshCw, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ParentPortal: React.FC = () => {
  const { registrations, updateRegistrationStatus, deleteRegistration, getCourseOccupancy } = useRegistrationsStore();
  
  // Search state
  const [searchEmail, setSearchEmail] = useState('');
  const [searchResult, setSearchResult] = useState<any[] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Admin access state
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');
  const [selectedAdminFilter, setSelectedAdminFilter] = useState('all');

  // Handle parent search
  const handleParentSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    if (!searchEmail.trim()) {
      setSearchResult([]);
      return;
    }
    
    const term = searchEmail.toLowerCase().trim();
    const filtered = registrations.filter(
      r => r.email.toLowerCase().includes(term) || r.childName.toLowerCase().includes(term) || r.parentName.toLowerCase().includes(term)
    );
    setSearchResult(filtered);
  };

  // Quick select email for parents to try
  const handleQuickSearch = (email: string) => {
    setSearchEmail(email);
    const filtered = registrations.filter(r => r.email.toLowerCase() === email.toLowerCase());
    setHasSearched(true);
    setSearchResult(filtered);
  };

  // Admin lock login
  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === 'Skokanek528') {
      setIsAdminMode(true);
      setAdminError('');
    } else {
      setAdminError('Nesprávné heslo. Tip: Použijte demo tlačítko níže!');
    }
  };

  const handleAdminBypass = () => {
    setIsAdminMode(true);
    setAdminError('');
  };

  // Metrics calculators
  const statsApprovedCount = registrations.filter(r => r.status === 'approved').length;
  const statsPendingCount = registrations.filter(r => r.status === 'pending').length;
  
  const statsTotalRevenue = registrations
    .filter(r => r.status === 'approved')
    .reduce((acc, curr) => acc + curr.price, 0);

  const getCourseTitle = (courseId: string) => {
    const matched = COURSES.find(c => c.id === courseId);
    return matched ? matched.title : courseId;
  };

  // Filter registrations in admin mode
  const filteredRegsForAdmin = selectedAdminFilter === 'all' 
    ? registrations 
    : registrations.filter(r => r.courseId === selectedAdminFilter);

  return (
    <section id="portal-rodicu" className="py-24 bg-slate-900 text-slate-100 relative overflow-hidden">
      {/* Dynamic graphic grids */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-400 font-extrabold tracking-widest uppercase text-xs px-4 py-1.5 bg-white/5 border border-white/10 rounded-full inline-block"
          >
            Klientský & Trenérský systém
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl md:text-5xl font-heading font-black text-white tracking-tight"
          >
            Portál Skokánek
          </motion.h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm">
            Zkontrolujte si stav přihlášky nebo vstupte do rychlé administrace lektorů.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Parent lookup panel (7 cols if not admin) */}
          <div className={`lg:col-span-12 ${isAdminMode ? 'hidden' : 'lg:col-span-7'} space-y-8`}>
            
            {/* Search Box Card */}
            <div className="bg-slate-800/80 border border-slate-700/60 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold font-heading mb-4 text-white flex items-center gap-2">
                <Search className="w-6 h-6 text-emerald-400" />
                Sledování přihlášených dětí
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
                Zadejte e-mail nebo jméno dítěte, které jste vyplnili v přihlášce, pro okamžité ověření stavu platby a rezervace místa.
              </p>

              <form onSubmit={handleParentSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
                <div className="relative flex-grow">
                  <input 
                    type="text"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    placeholder="E-mail rodiče nebo jméno dítěte..."
                    className="w-full bg-slate-900/60 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all pl-10"
                  />
                  <User className="absolute left-3.5 top-3.5 text-slate-500 w-4 h-4" />
                </div>
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors cursor-pointer shrink-0"
                >
                  Vyhledat
                </button>
              </form>

              {/* Demo quick tests hooks */}
              <div className="pt-4 border-t border-slate-700/40 text-xs text-slate-400">
                <span className="font-semibold block sm:inline mr-2 text-slate-300">Vyzkoušejte demo e-maily:</span>
                <div className="inline-flex flex-wrap gap-2 mt-2 sm:mt-0">
                  <button 
                    type="button" 
                    onClick={() => handleQuickSearch('jana.mala@example.cz')}
                    className="bg-slate-700/60 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-md cursor-pointer"
                  >
                    jana.mala@example.cz
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleQuickSearch('muller.r@seznam.cz')}
                    className="bg-slate-700/60 hover:bg-slate-700 text-slate-200 px-3 py-1 rounded-md cursor-pointer"
                  >
                    muller.r@seznam.cz
                  </button>
                </div>
              </div>
            </div>

            {/* Verification Results Display */}
            <AnimatePresence mode="wait">
              {hasSearched && searchResult && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6"
                >
                  <h4 className="text-lg font-heading font-black text-slate-300">Výsledky hledání ({searchResult.length})</h4>
                  
                  {searchResult.length === 0 ? (
                    <div className="bg-slate-800/40 border border-slate-700/40 p-8 rounded-2xl text-center">
                      <AlertCircle className="w-12 h-12 text-slate-500 mx-auto mb-3" />
                      <p className="text-slate-300 font-bold mb-1">Nenalezena žádná přihláška</p>
                      <p className="text-slate-500 text-xs text-wrap">Zkontrolujte překlepy nebo vyplňte přihlášku v dolní části webu.</p>
                    </div>
                  ) : (
                    searchResult.map((reg) => (
                      <div 
                        key={reg.id} 
                        className="bg-slate-800 border-2 border-slate-700/80 rounded-3xl p-6 sm:p-8"
                      >
                        {/* Status Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700/50 mb-6">
                          <div>
                            <span className="font-mono text-xs text-emerald-400 block font-bold">{reg.id}</span>
                            <h5 className="text-xl font-heading font-extrabold text-white">{reg.childName}</h5>
                            <span className="text-xs text-slate-400">Přihlášeno do: <strong className="text-slate-200 font-bold">{getCourseTitle(reg.courseId)}</strong></span>
                          </div>
                          
                          <div>
                            {reg.status === 'approved' && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase">
                                <CheckCircle2 className="w-4 h-4" />
                                Schváleno a rezervováno
                              </span>
                            )}
                            {reg.status === 'pending' && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-black uppercase shadow-inner">
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                Čeká na zpracování
                              </span>
                            )}
                            {reg.status === 'cancelled' && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-xs font-black uppercase">
                                <XCircle className="w-4 h-4" />
                                Stornováno
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Details content split */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                          <div>
                            <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Informace o dítěti:</p>
                            <ul className="space-y-1.5 text-xs text-slate-300">
                              <li>Datum narození: <strong className="text-white font-semibold">{new Date(reg.childBirthDate).toLocaleDateString('cs-CZ')}</strong></li>
                              <li>Zákonný zástupce: <strong className="text-white font-semibold">{reg.parentName}</strong></li>
                              <li>Telefon: <strong className="text-white font-semibold">{reg.phone}</strong></li>
                              <li>Poznámka: <span className="text-slate-400 italic block mt-0.5">"{reg.note || 'žádná omezující specifikace'}"</span></li>
                            </ul>
                          </div>

                          {/* Payment Instructions Card */}
                          <div className="bg-slate-900/60 p-4 rounded-2xl border border-slate-700/60">
                            <p className="text-[10px] font-black uppercase text-emerald-400 tracking-wider mb-2">Pokyny k platbě školného:</p>
                            {reg.status === 'cancelled' ? (
                              <p className="text-xs text-slate-400">Přihláška byla stornována, platbu neprovádějte.</p>
                            ) : (
                              <div className="space-y-2 text-[11px] text-slate-300">
                                <div className="flex justify-between">
                                  <span>Částka k úhradě:</span>
                                  <strong className="text-white text-xs">{reg.price.toLocaleString('cs-CZ')} Kč</strong>
                                </div>
                                <div className="flex justify-between">
                                  <span>Číslo účtu:</span>
                                  <strong className="text-white font-mono text-xs">2300123456 / 2010</strong>
                                </div>
                                <div className="flex justify-between">
                                  <span>Variabilní symbol:</span>
                                  <strong className="text-white font-mono text-xs">{reg.id.replace(/\D/g, '') || '2026001'}</strong>
                                </div>
                                <div className="flex justify-between">
                                  <span>Zpráva pro příjemce:</span>
                                  <strong className="text-white text-xs">Skokánek {reg.childName.split(' ')[0]}</strong>
                                </div>
                                <div className="pt-2 text-[10px] text-slate-400 border-t border-slate-800 italic">
                                  Zápisné uhraďte nejpozději do 14 dnů od schválení přihlášky na účet.
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Interactive Absence excuse action - REMOVED */}
                        <div className="pt-4 border-t border-slate-700/40 opacity-0 h-0 overflow-hidden hidden" />
                      </div>
                    ))
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Admin password gate (5 cols if not admin) */}
          <div className={`lg:col-span-12 ${isAdminMode ? 'col-span-12' : 'lg:col-span-5'}`}>
            
            {/* Password Login if NOT authenticated */}
            {!isAdminMode ? (
              <div className="bg-slate-800/60 border border-slate-700/60 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
                <h3 className="text-xl font-bold font-heading mb-4 text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-sky-400" />
                  Přihlášení lektora
                </h3>
                <p className="text-slate-300 text-xs mb-6Leading-relaxed">
                  Zabezpečená zóna pro trenéry k rychlé editaci docházek, schvalování přihlášek a sledování vytíženosti sálů.
                </p>

                <form onSubmit={handleAdminAuth} className="space-y-4 mb-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-2">Administrační heslo</label>
                    <input 
                      type="password"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-900/60 border border-slate-700 focus:border-sky-500 rounded-xl px-4 py-3 text-sm text-white outline-none"
                    />
                  </div>
                  
                  {adminError && (
                    <p className="text-xs text-rose-400 font-bold">{adminError}</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    Odemknout Administraci
                  </button>
                </form>
              </div>
            ) : (
              
              /* REVEAL FULL ADMINISTRATION DASHBOARD INSTRUCTOR DESK */
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-800 border border-slate-700 p-6 sm:p-8 rounded-3xl"
              >
                {/* Header Admin info */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-700/60 mb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <h3 className="text-2xl font-black font-heading text-white">Lektorská Administrace</h3>
                    </div>
                    <span className="text-xs text-slate-400">Přihlášen jako: <strong className="text-slate-200">Mgr. Jiří Šplíchal</strong></span>
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsAdminMode(false);
                      setAdminPassword('');
                    }}
                    className="text-xs bg-slate-700 hover:bg-slate-600 text-slate-300 font-bold px-4.5 py-2 rounded-xl border border-slate-600 transition-colors cursor-pointer"
                  >
                    Odhlásit se
                  </button>
                </div>

                {/* Dashboard Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-xs text-slate-400 font-bold uppercase">
                      <Award className="w-4 h-4 text-emerald-400" />
                      <span>Schváleno</span>
                    </div>
                    <p className="text-3xl font-heading font-black text-white">{statsApprovedCount}</p>
                    <span className="text-[10px] text-slate-500">potvrzených rezervací</span>
                  </div>
                  
                  <div className="bg-slate-900/40 p-4 rounded-2xl border border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5 text-xs text-slate-400 font-bold uppercase">
                      <RefreshCw className="w-4 h-4 text-amber-400" />
                      <span>Čeká na zápis</span>
                    </div>
                    <p className="text-3xl font-heading font-black text-white">{statsPendingCount}</p>
                    <span className="text-[10px] text-slate-500">ke schválení / stornu</span>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-500/10 to-sky-500/10 p-4 rounded-2xl border border-emerald-500/20">
                    <div className="flex items-center gap-2 mb-1.5 text-xs text-emerald-400 font-bold uppercase">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Obrat kurzů</span>
                    </div>
                    <p className="text-2xl font-heading font-black text-emerald-400">{statsTotalRevenue.toLocaleString('cs-CZ')} Kč</p>
                    <span className="text-[10px] text-slate-400">vygenerované zápisné</span>
                  </div>
                </div>

                {/* Database Table Section */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h4 className="text-lg font-heading font-extrabold text-white">Přihlášky dětí v systému</h4>
                    
                    {/* Course Filter Dropdown */}
                    <select
                      value={selectedAdminFilter}
                      onChange={(e) => setSelectedAdminFilter(e.target.value)}
                      className="bg-slate-900 text-xs font-semibold text-slate-300 border border-slate-700 rounded-lg px-3 py-1.5 outline-none"
                    >
                      <option value="all">Všechny skupiny</option>
                      {COURSES.map(c => (
                        <option key={c.id} value={c.id}>{c.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* List Wrapper (Scrollable on small screens) */}
                  <div className="overflow-x-auto rounded-2xl border border-slate-700/60">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-900 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                        <tr>
                          <th className="px-4 py-3">Jméno dítěte</th>
                          <th className="px-4 py-3">Skupina</th>
                          <th className="px-4 py-3">Kontakt rodič</th>
                          <th className="px-4 py-3">Datum zápisu</th>
                          <th className="px-4 py-3 text-right">Změna stavu</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-700/40 bg-slate-900/20">
                        {filteredRegsForAdmin.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-4 py-8 text-center text-slate-500">
                              Žádní přihlášení v této sekci
                            </td>
                          </tr>
                        ) : (
                          filteredRegsForAdmin.map((reg) => (
                            <tr key={reg.id} className="hover:bg-slate-700/20 transition-colors">
                              <td className="px-4 py-4.5 font-bold text-white">
                                <span className="block font-mono text-[9px] text-emerald-400 font-normal">{reg.id}</span>
                                {reg.childName}
                                <span className="block font-normal text-[10px] text-slate-400">nar. {new Date(reg.childBirthDate).toLocaleDateString('cs-CZ')}</span>
                              </td>
                              <td className="px-4 py-4.5">
                                <span className="font-semibold text-slate-200">{getCourseTitle(reg.courseId)}</span>
                              </td>
                              <td className="px-4 py-4.5">
                                <span className="block text-slate-300">{reg.parentName}</span>
                                <span className="block text-[10px] text-slate-400">{reg.phone}</span>
                              </td>
                              <td className="px-4 py-4.5 text-slate-400">
                                {new Date(reg.registeredAt).toLocaleDateString('cs-CZ')}
                              </td>
                              <td className="px-4 py-4.5 text-right whitespace-nowrap">
                                <div className="flex justify-end gap-1.5">
                                  {/* Approve btn */}
                                  <button
                                    onClick={() => updateRegistrationStatus(reg.id, 'approved')}
                                    className={`px-2 py-1 rounded font-bold text-[10px] uppercase transition-colors ${
                                      reg.status === 'approved' 
                                        ? 'bg-emerald-500/20 text-emerald-400 pointer-events-none' 
                                        : 'bg-slate-700 hover:bg-emerald-600/30 text-emerald-400'
                                    }`}
                                    title="Schválit přihlášku"
                                  >
                                    Schválit
                                  </button>
                                  
                                  {/* Cancel trigger */}
                                  <button
                                    onClick={() => updateRegistrationStatus(reg.id, 'cancelled')}
                                    className={`px-2 py-1 rounded font-bold text-[10px] uppercase transition-colors ${
                                      reg.status === 'cancelled' 
                                        ? 'bg-rose-500/20 text-rose-400 pointer-events-none' 
                                        : 'bg-slate-700 hover:bg-rose-600/30 text-rose-400'
                                    }`}
                                    title="Stornovat přihlášku"
                                  >
                                    Storno
                                  </button>

                                  <button
                                    onClick={() => deleteRegistration(reg.id)}
                                    className="p-1 text-slate-500 hover:text-rose-400 rounded transition-colors ml-1"
                                    title="Smazat úplně"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Instruction footer */}
                  <div className="pt-4 border-t border-slate-700/60 text-xs text-slate-400 italic">
                     * Změny schválení se okamžitě projeví v kapacitních lištách nahoře i v sekci Parent Lookup klientského vyhledávače.
                  </div>
                </div>
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ParentPortal;
