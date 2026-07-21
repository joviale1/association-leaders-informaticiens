import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Smartphone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { ALI_CONFIG } from "../config";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "accueil", label: "Accueil" },
    { id: "propos", label: "À Propos" },
    { id: "bureau", label: "Le Bureau" },
    { id: "annuaire", label: "Annuaire des Membres" },
    { id: "tarifs", label: "Formations & Tarifs" },
    { id: "evenements", label: "Événements" },
    { id: "devenir-membre", label: "Devenir Membre" },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top utility bar with quick contacts */}
      <div className="bg-marine-950 text-white/85 text-xs py-2 px-4 hidden md:flex justify-between items-center border-b border-white/5 font-medium tracking-wide z-50 relative">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 hover:text-turquoise-500 transition-colors">
            <Smartphone className="w-3.5 h-3.5 text-turquoise-500" />
            <span>{ALI_CONFIG.contact.phone1}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-turquoise-500 transition-colors">
            <Mail className="w-3.5 h-3.5 text-turquoise-500" />
            <span>{ALI_CONFIG.contact.email}</span>
          </div>
          <div className="flex items-center gap-1.5 hover:text-turquoise-500 transition-colors">
            <MapPin className="w-3.5 h-3.5 text-turquoise-500" />
            <span>{ALI_CONFIG.contact.address}</span>
          </div>
        </div>
        <div className="text-[#D62828] font-bold tracking-wider animate-pulse text-[11px]">
          {ALI_CONFIG.contact.devise}
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header
        className={`fixed top-0 md:top-8 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-marine-900/95 backdrop-blur-md shadow-lg border-b border-turquoise-500/10 py-2.5"
            : "bg-transparent py-4 md:py-5"
        }`}
        id="ali-fixed-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand text */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleItemClick("accueil")}
          >
            <Logo className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base sm:text-lg tracking-tight leading-none group-hover:text-turquoise-500 transition-colors">
                ALI <span className="text-[#D62828] font-bold">BÉNIN</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-white/60 font-semibold tracking-wider uppercase mt-1 leading-none hidden xs:block">
                Association des Leaders Informaticiens
              </span>
            </div>
          </div>

          {/* Desktop Nav menu centered */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-marine-950/40 rounded-full px-1.5 py-1 border border-white/5">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-2 xl:px-3.5 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-turquoise-500 text-marine-900 shadow-md font-bold scale-105"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call to action on the right (desktop) */}
          <div className="hidden lg:block">
            <button
              onClick={() => handleItemClick("devenir-membre")}
              className="bg-[#D62828] hover:bg-[#b51f1f] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105"
            >
              Rejoindre l'ALI
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleItemClick("devenir-membre")}
              className="xs:block hidden bg-[#D62828] hover:bg-[#b51f1f] text-white text-[11px] font-bold uppercase px-3 py-2 rounded-full shadow-md"
            >
              Rejoindre
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-marine-950/98 backdrop-blur-lg border-b border-turquoise-500/10 absolute top-full left-0 right-0 overflow-hidden shadow-2xl"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {menuItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-turquoise-500 text-marine-900 shadow-md"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
                
                {/* Visual Devise in mobile menu */}
                <div className="pt-4 border-t border-white/5 text-center">
                  <div className="text-[#D62828] font-black tracking-widest text-xs uppercase py-2 bg-white/5 rounded-lg">
                    {ALI_CONFIG.contact.devise}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
