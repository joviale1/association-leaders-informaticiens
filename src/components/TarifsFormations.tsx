import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, BookOpen, Clock, Coins, ChevronRight, HelpCircle, ArrowRight, Printer, Cpu, FileText, CheckCircle } from "lucide-react";
import { ALI_CONFIG, PrestationPrice, TrainingModule } from "../config";

interface TarifsFormationsProps {
  onSelectTraining: (trainingTitle: string) => void;
}

export default function TarifsFormations({ onSelectTraining }: TarifsFormationsProps) {
  const [activeTab, setActiveTab] = useState<"tarifs" | "formations">("formations");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Get categories from prestations
  const categories = ["Tous", ...Array.from(new Set(ALI_CONFIG.prestations.map((p) => p.category)))];

  // Filtered Prestations
  const filteredPrestations = ALI_CONFIG.prestations.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Tous" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Bureautique":
        return <FileText className="w-4 h-4" />;
      case "Impression":
        return <Printer className="w-4 h-4" />;
      case "Technique":
        return <Cpu className="w-4 h-4" />;
      default:
        return <HelpCircle className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#fafbfc] overflow-hidden" id="ali-tarifs-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation / Tab Selector */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-1 bg-turquoise-500/10 text-turquoise-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Catalogue de l'ALI</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-marine-900 tracking-tight">
            Formations & Grille Tarifaire
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-light">
            Découvrez nos tarifs de prestations informatiques de référence (basés sur le PTA) ainsi que nos modules de formation certifiants.
          </p>

          {/* Tab Switcher */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full max-w-md shadow-inner mt-4 border border-slate-200">
            <button
              onClick={() => setActiveTab("formations")}
              className={`flex-1 py-3 text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all ${
                activeTab === "formations"
                  ? "bg-white text-marine-900 shadow-md font-black"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Formations
            </button>
            <button
              onClick={() => setActiveTab("tarifs")}
              className={`flex-1 py-3 text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all ${
                activeTab === "tarifs"
                  ? "bg-white text-marine-900 shadow-md font-black"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Tarifs Prestations
            </button>
          </div>
        </div>

        {/* TAB 1: FORMATIONS (5 Modules) */}
        {activeTab === "formations" && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ALI_CONFIG.formations.map((mod: TrainingModule, index: number) => {
                // Highlighting Sérigraphie textile as featured with distinctive red border
                const isFeatured = mod.title.includes("Sérigraphie");
                return (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`bg-white rounded-3xl p-6 sm:p-8 shadow-md border flex flex-col justify-between transition-all duration-300 relative group ${
                      isFeatured
                        ? "border-[#D62828] ring-2 ring-[#D62828]/10 hover:shadow-2xl"
                        : "border-slate-100 hover:shadow-xl hover:border-turquoise-500/20"
                    }`}
                  >
                    {isFeatured && (
                      <span className="absolute -top-3.5 left-6 bg-[#D62828] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md animate-bounce">
                        Recommandé / Spécial
                      </span>
                    )}

                    <div className="space-y-4">
                      {/* Course badge */}
                      <div className="flex justify-between items-center">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                          Module 0{index + 1}
                        </span>
                        <div className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
                          <Clock className="w-3.5 h-3.5 text-turquoise-500" />
                          <span>{mod.duration}</span>
                        </div>
                      </div>

                      {/* Course Title */}
                      <h3 className="text-xl font-black text-marine-900 leading-tight group-hover:text-turquoise-500 transition-colors">
                        {mod.title}
                      </h3>

                      {/* Divider */}
                      <div className="h-[1px] bg-slate-100 w-full" />

                      {/* Details list */}
                      <div className="space-y-2.5 pt-2">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Au programme :</div>
                        {mod.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                            <CheckCircle className="w-4 h-4 text-turquoise-500 flex-shrink-0 mt-0.5" />
                            <span className="font-light">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom layout with price & action */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Frais d'inscription</span>
                        <span className="text-lg font-black text-marine-900">{mod.price}</span>
                      </div>
                      <button
                        onClick={() => onSelectTraining(mod.title)}
                        className={`inline-flex items-center gap-1 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          isFeatured
                            ? "bg-[#D62828] hover:bg-[#b51f1f] text-white shadow-md shadow-[#D62828]/10"
                            : "bg-turquoise-500 hover:bg-turquoise-600 text-marine-950 shadow-md shadow-turquoise-500/10"
                        }`}
                      >
                        <span>S'inscrire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: TARIFS PRESTATIONS */}
        {activeTab === "tarifs" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            
            {/* Search & Category Filter Header bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
              
              {/* Search field */}
              <div className="relative w-full sm:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Rechercher une prestation..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-xl text-sm border border-slate-200 focus:outline-none focus:border-turquoise-500 focus:ring-2 focus:ring-turquoise-500/10"
                />
              </div>

              {/* Category pill filters */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
                <Filter className="w-4 h-4 text-slate-400 flex-shrink-0 hidden md:block" />
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? "bg-marine-900 text-white shadow"
                        : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

            </div>

            {/* Price Table list */}
            <div className="bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest w-[60%]">Désignation de la Prestation</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest hidden md:table-cell">Catégorie</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Tarif National ALI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPrestations.length > 0 ? (
                      filteredPrestations.map((p, idx) => (
                        <tr
                          key={p.id}
                          className={`border-b border-slate-100 hover:bg-slate-50/50 transition-colors ${
                            idx % 2 === 0 ? "bg-white" : "bg-slate-50/20"
                          }`}
                        >
                          <td className="px-6 py-4.5">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-slate-50 text-slate-400 flex-shrink-0">
                                {getCategoryIcon(p.category)}
                              </div>
                              <span className="font-semibold text-marine-900 text-sm sm:text-base leading-snug">
                                {p.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4.5 hidden md:table-cell">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                              {p.category}
                            </span>
                          </td>
                          <td className="px-6 py-4.5 text-right">
                            <span className="font-extrabold text-[#D62828] text-sm sm:text-base whitespace-nowrap bg-[#D62828]/5 px-3 py-1 rounded-lg">
                              {p.price}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="px-6 py-12 text-center text-slate-400 font-light">
                          Aucune prestation ne correspond à votre recherche.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pricing Disclaimer */}
            <div className="p-4.5 rounded-2xl bg-slate-100 text-center text-xs text-slate-500 border border-slate-200">
              <span className="font-bold">Note administrative :</span> Ces tarifs sont fixés d'un commun accord par l'Association des Leaders Informaticiens du Bénin (ALI) afin de garantir la qualité des livrables et le respect du travail informatique.
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
