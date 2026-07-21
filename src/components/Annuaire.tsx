import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Phone, MapPin, Building2, Award, Users, RefreshCw, Star, ArrowLeft } from "lucide-react";
import { MEMBERS_DATA, Member } from "../data/members";
import { ALI_CONFIG } from "../config";

interface AnnuaireProps {
  onBackToHome: () => void;
}

export default function Annuaire({ onBackToHome }: AnnuaireProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Tous");

  // Séparer et trier les membres
  const processedMembers = useMemo(() => {
    // Les 11 membres du Bureau (gardent leur ordre officiel)
    const bureauList = MEMBERS_DATA.filter((m) => m.isBureau);

    // Les autres membres triés par ordre alphabétique
    const othersList = MEMBERS_DATA.filter((m) => !m.isBureau).sort((a, b) =>
      a.name.localeCompare(b.name, "fr", { sensitivity: "base" })
    );

    return [...bureauList, ...othersList];
  }, []);

  // Extraire les villes uniques pour un filtre rapide optionnel d'expérience utilisateur (en plus de la barre de recherche)
  const cities = useMemo(() => {
    const list = processedMembers
      .map((m) => m.city)
      .filter((c): c is string => !!c && c !== "Bénin");
    return ["Tous", ...Array.from(new Set(list))].sort();
  }, [processedMembers]);

  // Filtrer en direct par recherche et par ville
  const filteredMembers = useMemo(() => {
    return processedMembers.filter((member) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        member.name.toLowerCase().includes(query) ||
        (member.center && member.center.toLowerCase().includes(query)) ||
        (member.city && member.city.toLowerCase().includes(query)) ||
        (member.phone && member.phone.includes(query));

      const matchesCity =
        selectedCity === "Tous" ||
        (member.city && member.city.toLowerCase() === selectedCity.toLowerCase());

      return matchesSearch && matchesCity;
    });
  }, [processedMembers, searchQuery, selectedCity]);

  // Réinitialiser les filtres
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCity("Tous");
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-[#fafbfc] text-[#0B2545] relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-turquoise-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] rounded-full bg-marine-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation / Back Button */}
        <div className="mb-8">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-turquoise-600 hover:text-turquoise-700 transition-colors bg-turquoise-500/5 hover:bg-turquoise-500/10 px-4 py-2 rounded-full cursor-pointer"
            id="ali-annuaire-back-btn"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-turquoise-500/10 border border-turquoise-500/30 text-turquoise-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>134 membres actifs</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-marine-900 tracking-tight" id="ali-annuaire-title">
            Nos Membres
          </h1>

          <p className="text-base sm:text-lg text-marine-900/60 font-medium max-w-xl mx-auto italic tracking-wide">
            « {ALI_CONFIG.contact.devise} »
          </p>
        </div>

        {/* Search and Filters panel */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-marine-900/5 border border-marine-900/5 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-marine-900/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher par nom, centre, entreprise, ville..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-marine-900 placeholder-marine-900/40 focus:outline-none focus:ring-2 focus:ring-turquoise-500/40 focus:border-turquoise-500 transition-all font-medium"
                id="ali-annuaire-search-input"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-marine-900/40 hover:text-marine-900 text-xs font-bold bg-slate-200/50 hover:bg-slate-200 px-2 py-1 rounded"
                >
                  Effacer
                </button>
              )}
            </div>

            {/* City Quick Filter */}
            <div className="w-full md:w-64">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-marine-900 font-medium focus:outline-none focus:ring-2 focus:ring-turquoise-500/40 focus:border-turquoise-500 transition-all cursor-pointer"
                id="ali-annuaire-city-select"
              >
                <option value="Tous">Toutes les localités</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Info & Stats inside the filter */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-2 text-xs font-semibold text-marine-900/50">
            <div>
              {filteredMembers.length} membre{filteredMembers.length > 1 ? "s" : ""} trouvé{filteredMembers.length > 1 ? "s" : ""}
            </div>
            {(searchQuery || selectedCity !== "Tous") && (
              <button
                onClick={handleResetFilters}
                className="text-turquoise-600 hover:text-turquoise-700 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Réinitialiser les filtres</span>
              </button>
            )}
          </div>
        </div>

        {/* Members Cards Grid */}
        <AnimatePresence mode="popLayout">
          {filteredMembers.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
              id="ali-members-grid"
            >
              {filteredMembers.map((member: Member) => {
                // Déterminer s'il a un centre valide
                const hasCenter = member.center && member.center !== "Néant" && member.center !== "Nul n’empêche le destin de se réaliser" && member.center !== "Calavi";

                return (
                  <motion.div
                    key={member.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-3xl border border-marine-900/5 p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
                    id={`ali-member-card-${member.id}`}
                  >
                    {/* Bureau status indicator (Top Right role badge) */}
                    {member.isBureau && member.role && (
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 text-amber-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm animate-pulse">
                          <Star className="w-3 h-3 fill-amber-500" />
                          <span>{member.role}</span>
                        </span>
                      </div>
                    )}

                    {/* Member Core Info */}
                    <div className="space-y-4">
                      {/* Avatar initials fallback */}
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold shadow-inner ${
                          member.isBureau 
                            ? "bg-amber-500 text-white" 
                            : "bg-turquoise-500/10 text-turquoise-600"
                        }`}>
                          {member.name.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="font-extrabold text-marine-900 tracking-tight text-lg group-hover:text-turquoise-600 transition-colors leading-tight">
                            {member.name}
                          </h3>
                          {member.city && (
                            <div className="flex items-center gap-1 text-marine-900/55 text-xs font-semibold mt-1">
                              <MapPin className="w-3.5 h-3.5 text-[#D62828]" />
                              <span>{member.city}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Center / Enterprise details section */}
                      {hasCenter && (
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-1.5">
                          <div className="flex items-start gap-2">
                            <Building2 className="w-4 h-4 text-turquoise-600 mt-0.5 shrink-0" />
                            <div className="text-xs">
                              <div className="font-bold text-marine-900/80 uppercase tracking-wide">
                                Centre / Entreprise
                              </div>
                              <div className="text-marine-900 font-medium mt-0.5 leading-relaxed">
                                {member.center}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Footer Contact Info */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-[11px] font-black uppercase text-marine-900/40 tracking-wider">
                        Contact Direct
                      </div>
                      {member.phone && member.phone !== "Non renseigné" ? (
                        <a
                          href={`tel:${member.phone.replace(/\s+/g, "")}`}
                          className="inline-flex items-center gap-1.5 bg-turquoise-500 hover:bg-turquoise-600 text-marine-950 font-bold px-4 py-2 rounded-full text-xs shadow-md shadow-turquoise-500/10 hover:shadow-turquoise-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>{member.phone}</span>
                        </a>
                      ) : (
                        <span className="text-xs text-marine-900/40 font-medium italic">
                          Non renseigné
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-16 bg-white border border-dashed border-slate-200 rounded-3xl max-w-md mx-auto"
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-marine-900/40" />
              </div>
              <h3 className="font-extrabold text-lg text-marine-900">Aucun membre trouvé</h3>
              <p className="text-sm text-marine-900/50 mt-1 max-w-xs mx-auto">
                Nous n'avons trouvé aucun membre correspondant à votre recherche. Essayez un autre terme ou réinitialisez les filtres.
              </p>
              <button
                onClick={handleResetFilters}
                className="mt-5 bg-turquoise-500 hover:bg-turquoise-600 text-marine-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all"
              >
                Réinitialiser les filtres
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
