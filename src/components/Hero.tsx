import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Smartphone, Laptop, Sparkles } from "lucide-react";
import { ALI_CONFIG } from "../config";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden gradient-bg text-white"
    >
      {/* Abstract Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Decorative Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full bg-turquoise-500/10 blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#D62828]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8 text-left">
          
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-turquoise-500/10 border border-turquoise-500/30 text-turquoise-500 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            <span>Association à but non lucratif — Abomey-Calavi</span>
          </motion.div>

          {/* Main Title & Slogan */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white"
            >
              Association des Leaders Informaticiens
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-4 bg-white/5 backdrop-blur-sm border-l-4 border-turquoise-500 rounded-r-xl max-w-xl"
            >
              <div className="text-xl sm:text-2xl font-black text-turquoise-500 tracking-wide uppercase">
                {ALI_CONFIG.contact.devise}
              </div>
            </motion.div>
          </div>

          {/* Description text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed font-light"
          >
            Unir les acteurs de l'informatique pour un Bénin numérique plus fort.
            Ensemble, nous partageons nos expertises, harmonisons nos tarifs et favorisons le développement technologique à Abomey-Calavi et partout au Bénin.
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col xs:flex-row gap-4 w-full xs:w-auto"
          >
            <button
              onClick={onJoinClick}
              className="group bg-[#D62828] hover:bg-[#b51f1f] text-white font-bold tracking-wide uppercase px-8 py-4 rounded-xl shadow-lg shadow-[#D62828]/20 transition-all duration-300 hover:scale-102 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Devenir Membre</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>
            <a
              href="#tarifs"
              className="bg-white/10 hover:bg-white/15 text-white font-semibold tracking-wide px-8 py-4 rounded-xl border border-white/10 transition-all duration-300 hover:scale-102 text-center"
            >
              Voir les Formations
            </a>
          </motion.div>

          {/* Quick Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 border-t border-white/5 w-full max-w-md text-left"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-black text-turquoise-500">100%</div>
              <div className="text-xs text-white/50 font-semibold uppercase mt-1 tracking-wider">Apolitique</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-turquoise-500">8+</div>
              <div className="text-xs text-white/50 font-semibold uppercase mt-1 tracking-wider">Postes Bureau</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-turquoise-500">Calavi</div>
              <div className="text-xs text-white/50 font-semibold uppercase mt-1 tracking-wider">Siège Social</div>
            </div>
          </motion.div>

        </div>

        {/* Right column - Tech Visual Decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:flex justify-center items-center"
        >
          <div className="relative w-full max-w-[380px] aspect-square rounded-3xl bg-gradient-to-tr from-turquoise-500/20 to-transparent p-[1px] shadow-2xl">
            <div className="absolute inset-0 bg-marine-950/80 backdrop-blur-sm rounded-3xl overflow-hidden flex flex-col p-6 border border-white/5">
              
              {/* Fake Terminal UI decoration */}
              <div className="flex gap-1.5 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#D62828]/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-turquoise-500/80" />
              </div>

              {/* Central Graphic */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                <div className="relative w-24 h-24 rounded-full bg-turquoise-500/10 flex items-center justify-center border border-turquoise-500/30">
                  <Laptop className="w-10 h-10 text-turquoise-500 animate-pulse" />
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-turquoise-500/20 animate-spin" style={{ animationDuration: "12s" }} />
                </div>
                
                <div className="text-center">
                  <h3 className="font-extrabold text-white text-lg">ALI Bénin</h3>
                  <p className="text-xs text-white/60 mt-1">Plateforme des Informaticiens</p>
                </div>

                <div className="bg-white/5 rounded-xl p-3 w-full border border-white/5 text-center">
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Unité - Force - Solidarité</div>
                  <div className="text-xs text-turquoise-500 font-bold mt-1">Abomey-Calavi, Bénin</div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
