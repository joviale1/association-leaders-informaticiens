import React from "react";
import { motion } from "motion/react";
import { MessageSquare, Laptop, Scale, HeartHandshake, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Vision() {
  const objectives = [
    {
      title: "Creuset de Réflexion",
      description: "Servir de cadre d'échange, de partage d'expériences et de réflexion collective pour tous les acteurs et professionnels de l'informatique.",
      icon: MessageSquare,
      color: "bg-turquoise-500/10 text-turquoise-500 border-turquoise-500/20",
    },
    {
      title: "Faciliter l'Équipement",
      description: "Aider nos membres et les structures d'enseignement à acquérir des ordinateurs, imprimantes, consommables et matériels de qualité à tarifs préférentiels.",
      icon: Laptop,
      color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    {
      title: "Harmonisation des Coûts",
      description: "Mettre en place une grille de tarifs harmonisés et équitables pour toutes les prestations informatiques afin d'éviter la concurrence déloyale au Bénin.",
      icon: Scale,
      color: "bg-[#D62828]/10 text-[#D62828] border-[#D62828]/20",
    },
    {
      title: "Entraide & Solidarité",
      description: "Promouvoir une vraie synergie d'entraide, de soutien moral, technique et professionnel entre tous les membres actifs de l'association.",
      icon: HeartHandshake,
      color: "bg-green-500/10 text-green-400 border-green-500/20",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#f8fafc] overflow-hidden" id="ali-vision-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: NOTRE VISION (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column - Beautiful Vision content */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 bg-turquoise-500/15 text-turquoise-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Notre Vision Globale</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-marine-900 tracking-tight">
              Promouvoir l'Excellence Informatique au Bénin
            </h2>
            
            <div className="h-1.5 w-20 bg-turquoise-500 rounded-full" />
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
              Notre vision majeure est de vulgariser les compétences numériques de haut niveau. Pour cela, nous organisons périodiquement des ateliers de formation intensive en informatique directement à la base (élèves, étudiants, jeunes diplômés) ainsi que dans les structures publiques et privées exprimant un besoin d'accompagnement.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-turquoise-500/10 text-turquoise-500 mt-1">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-bold text-marine-900 text-sm sm:text-base">Ateliers Périodiques Gratuits & Abordables</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Formations concrètes sur le terrain pour réduire la fracture numérique au Bénin.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1 rounded-full bg-turquoise-500/10 text-turquoise-500 mt-1">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                </div>
                <div>
                  <h4 className="font-bold text-marine-900 text-sm sm:text-base">Soutien aux Structures Publiques & Privées</h4>
                  <p className="text-xs sm:text-sm text-slate-500">Mise à niveau et formation continue des employés et cadres administratifs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Vision Graphic */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md aspect-video sm:aspect-square bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-turquoise-500/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D62828]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Impact Éducatif / Calavi</div>
                <div className="px-2.5 py-1 rounded-full bg-turquoise-500/10 text-turquoise-500 text-[10px] font-bold">ACTIF</div>
              </div>

              <div className="my-6">
                <div className="text-4xl sm:text-5xl font-black text-marine-900">100%</div>
                <div className="text-sm font-bold text-slate-700 mt-1">Pratique & Professionnel</div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Pas de théorie inutile. Nos leaders partagent leurs savoirs pratiques directement sur des cas réels de dépannage, de design graphique, de bureautique ou de sérigraphie textile.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div className="text-xs text-slate-500 font-semibold">Bénin Numérique 2026</div>
                <ShieldCheck className="w-5 h-5 text-turquoise-500" />
              </div>
            </div>
          </div>

        </div>

        {/* SECTION 2: NOS OBJECTIFS (4 Grid Cards) */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1 bg-[#D62828]/10 text-[#D62828] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Nos Piliers Directeurs</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            Quels sont les objectifs de l'ALI ?
          </h3>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Nous avons structuré notre action autour de quatre engagements fondamentaux pour accompagner l'essor de chaque membre et valoriser le secteur informatique.
          </p>
        </div>

        {/* Objectives Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {objectives.map((obj, idx) => {
            const IconComponent = obj.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-100 flex flex-col text-left space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-3 rounded-xl border w-fit ${obj.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                <h4 className="font-extrabold text-marine-900 text-lg leading-snug">
                  {obj.title}
                </h4>
                
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-1 font-light">
                  {obj.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
