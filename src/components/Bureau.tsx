import React from "react";
import { motion } from "motion/react";
import { Users, User, ArrowUpRight, ShieldAlert, Sparkles, CircleDot } from "lucide-react";
import { ALI_CONFIG, BureauMember } from "../config";

interface BureauProps {
  onJoinClick: () => void;
}

export default function Bureau({ onJoinClick }: BureauProps) {
  // Helper to generate initials for avatar
  const getInitials = (name: string) => {
    if (name === "À compléter") return "+";
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  return (
    <section className="py-20 sm:py-28 bg-marine-900 text-white relative overflow-hidden" id="ali-bureau-section">
      {/* Decorative Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-turquoise-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-1.5 bg-turquoise-500/10 border border-turquoise-500/30 text-turquoise-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Gouvernance & Leadership</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Le Bureau Exécutif de l'ALI
          </h2>
          
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-light">
            Une équipe de leaders dévoués à l'épanouissement des informaticiens et au rayonnement du numérique à Abomey-Calavi.
          </p>
        </div>

        {/* Bureau Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {ALI_CONFIG.bureau.map((member: BureauMember, index: number) => {
            const isCompleted = member.isCompleted;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 ${
                  isCompleted
                    ? "bg-marine-950/80 border border-turquoise-500/20 shadow-lg shadow-black/10"
                    : "bg-transparent border border-dashed border-white/10 hover:border-turquoise-500/30"
                }`}
              >
                {/* Active Indicator or Vacant warning */}
                <div className="absolute top-4 right-4 flex items-center gap-1">
                  {isCompleted ? (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                  ) : (
                    <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-white/50 font-semibold tracking-wider">
                      Vacant
                    </span>
                  )}
                </div>

                {/* Avatar circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold mb-5 shadow-inner relative transition-all duration-300 ${
                    isCompleted
                      ? "bg-gradient-to-tr from-turquoise-600 to-turquoise-500 text-marine-950"
                      : "bg-white/5 border border-white/10 text-white/40 group-hover:bg-turquoise-500/10 group-hover:text-turquoise-400"
                  }`}
                >
                  {isCompleted ? (
                    <span>{getInitials(member.name)}</span>
                  ) : (
                    <User className="w-8 h-8 opacity-45" />
                  )}
                </div>

                {/* Role */}
                <span className="text-xs font-bold text-turquoise-500 uppercase tracking-widest mb-1">
                  {member.role}
                </span>

                {/* Name */}
                <h3
                  className={`text-base font-extrabold tracking-tight ${
                    isCompleted ? "text-white" : "text-white/40 italic"
                  }`}
                >
                  {member.name}
                </h3>

                {/* Action or description */}
                <div className="mt-5 w-full pt-4 border-t border-white/5 flex-1 flex flex-col justify-end">
                  {isCompleted ? (
                    <span className="text-xs text-white/50 font-medium">Membre Exécutif Actif</span>
                  ) : (
                    <button
                      onClick={onJoinClick}
                      className="inline-flex items-center justify-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white/60 hover:text-turquoise-400 transition-colors cursor-pointer"
                    >
                      <span>Postuler</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic callout banner for empty positions */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-turquoise-500/10 via-transparent to-turquoise-500/5 border border-turquoise-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-left"
        >
          <div className="space-y-2">
            <h4 className="text-lg font-black text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-turquoise-500 animate-spin" style={{ animationDuration: "8s" }} />
              Vous souhaitez rejoindre le bureau exécutif de l'ALI ?
            </h4>
            <p className="text-sm text-white/70 max-w-2xl font-light">
              Certains postes d'adjoints et de chargés de mission sont actuellement vacants ou ouverts aux candidatures. Si vous êtes un professionnel ou passionné rigoureux, rejoignez-nous !
            </p>
          </div>
          <button
            onClick={onJoinClick}
            className="whitespace-nowrap bg-turquoise-500 hover:bg-turquoise-600 text-marine-950 font-bold uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-103 cursor-pointer"
          >
            Postuler Maintenant
          </button>
        </motion.div>

      </div>
    </section>
  );
}
