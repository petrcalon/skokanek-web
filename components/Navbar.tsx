import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram, Youtube, Sparkles, UserCheck } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      window.history.pushState(null, "", href);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-slate-900/90 text-white shadow-xl backdrop-blur-md py-2 border-b border-white/10' 
        : 'bg-white/95 text-slate-900 shadow-sm py-4 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-sky-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter uppercase">
                SKOKÁNEK<span className="text-emerald-500">.</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                  scrolled 
                    ? 'text-slate-200 hover:text-emerald-400 hover:bg-white/5' 
                    : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
                {item.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] uppercase font-black tracking-wider bg-orange-500 text-white rounded-full animate-bounce">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          {/* Action Button & Socials (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2 border-r border-slate-300/30 pr-4">
              <a href="#" className={`text-slate-400 hover:text-sky-500 transition-colors ${scrolled ? 'hover:text-sky-400' : ''}`}><Facebook size={18} /></a>
              <a href="#" className={`text-slate-400 hover:text-pink-500 transition-colors ${scrolled ? 'hover:text-pink-400' : ''}`}><Instagram size={18} /></a>
              <a href="#" className={`text-slate-400 hover:text-red-500 transition-colors ${scrolled ? 'hover:text-red-400' : ''}`}><Youtube size={18} /></a>
            </div>
            
            <a 
              href="#prihlaska"
              onClick={(e) => handleNavClick(e, '#prihlaska')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 text-white text-sm font-bold rounded-xl shadow-md hover:bg-emerald-600 hover:shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <UserCheck size={16} />
              Přihláška
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl focus:outline-none transition-colors ${
                scrolled ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-slate-800'
              }`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`md:hidden absolute w-full left-0 border-b shadow-2xl overflow-hidden ${
              scrolled 
                ? 'bg-slate-950 border-white/10 text-white' 
                : 'bg-white border-slate-100 text-slate-900'
            }`}
          >
            <div className="px-4 pt-4 pb-8 space-y-2 flex flex-col items-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-xl text-lg font-bold w-full text-center transition-all cursor-pointer ${
                    scrolled 
                      ? 'hover:bg-white/5 text-slate-200' 
                      : 'hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <span className="relative inline-flex items-center gap-2">
                    {item.label}
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-[9px] uppercase font-bold tracking-widest bg-orange-500 text-white rounded-full absolute -top-4 -right-12">
                        {item.badge}
                      </span>
                    )}
                  </span>
                </a>
              ))}
              <div className="w-full pt-4 border-t border-slate-500/10 flex flex-col items-center gap-4">
                <a
                  href="#prihlaska"
                  onClick={(e) => handleNavClick(e, '#prihlaska')}
                  className="w-full py-3 bg-emerald-500 text-center text-white font-bold rounded-xl shadow-lg shadow-emerald-500/20 text-sm"
                >
                  Přihlásit se na lekci
                </a>
                <div className="flex space-x-6 pt-2">
                  <a href="#" className="text-blue-600"><Facebook size={22} /></a>
                  <a href="#" className="text-pink-600"><Instagram size={22} /></a>
                  <a href="#" className="text-red-600"><Youtube size={22} /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
