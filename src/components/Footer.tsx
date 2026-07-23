import React from "react";
import { MapPin, Smartphone, Mail, Facebook, ExternalLink, ShieldCheck, HeartHandshake } from "lucide-react";
import { ALI_CONFIG } from "../config";
import Logo from "./Logo";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-marine-950 text-white/70 text-sm border-t border-white/5 relative overflow-hidden" id="ali-main-footer">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-turquoise-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Primary Footer content split into grids */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Column 1: Brand & Desc */}
        <div className="md:col-span-5 space-y-5 text-left">
          <div className="flex items-center gap-3">
            <Logo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-tight leading-none">
                ALI <span className="text-[#D62828] font-bold">BÉNIN</span>
              </span>
              <span className="text-[9px] text-white/50 font-semibold tracking-wider uppercase mt-1">
                Association des Leaders Informaticiens
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light max-w-sm">
            L'Association des Leaders Informaticiens (ALI) œuvre quotidiennement pour l'harmonisation des services informatiques, l'équipement en matériel de pointe et le partage continu de compétences technologiques à Abomey-Calavi.
          </p>

          <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] font-semibold text-turquoise-400 flex items-center gap-2 max-w-xs">
            <ShieldCheck className="w-4 h-4 text-[#D62828] flex-shrink-0" />
            <span>{ALI_CONFIG.contact.apolitiqueInfo}</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="text-xs font-black uppercase tracking-widest text-white">Liens Utiles</h4>
          <ul className="space-y-2.5 text-xs sm:text-sm font-light">
            <li>
              <button onClick={() => onNavigate("accueil")} className="hover:text-turquoise-500 transition-colors cursor-pointer text-left">
                Accueil
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("propos")} className="hover:text-turquoise-500 transition-colors cursor-pointer text-left">
                Notre Vision & Objectifs
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("bureau")} className="hover:text-turquoise-500 transition-colors cursor-pointer text-left">
                Le Bureau Exécutif
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("tarifs")} className="hover:text-turquoise-500 transition-colors cursor-pointer text-left">
                Formations & Grille Tarifaire
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate("evenements")} className="hover:text-turquoise-500 transition-colors cursor-pointer text-left">
                Agenda des Événements
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact & Info */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h4 className="text-xs font-black uppercase tracking-widest text-white">Siège & Contacts</h4>
          
          <div className="space-y-3.5 text-xs sm:text-sm font-light">
            
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4.5 h-4.5 text-turquoise-500 flex-shrink-0 mt-0.5" />
              <span>{ALI_CONFIG.contact.address}</span>
            </div>

            <div className="flex items-start gap-2.5">
              <Smartphone className="w-4.5 h-4.5 text-turquoise-500 flex-shrink-0 mt-1" />
              <div className="flex flex-col gap-1 text-xs sm:text-sm">
                <div>
                  <span className="font-semibold text-white/90">Président : </span>
                  <a href={`tel:${ALI_CONFIG.contact.phone1.replace(/\s+/g, '')}`} className="hover:text-turquoise-500 transition-colors font-mono">
                    {ALI_CONFIG.contact.phone1}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white/90">Secrétaire Général : </span>
                  <a href={`tel:${ALI_CONFIG.contact.phone2.replace(/\s+/g, '')}`} className="hover:text-turquoise-500 transition-colors font-mono">
                    {ALI_CONFIG.contact.phone2}
                  </a>
                </div>
                <div>
                  <span className="font-semibold text-white/90">Trésorière Générale (SD) : </span>
                  <span className="text-white/80 font-medium">{ALI_CONFIG.contact.treasurerName}</span>{" "}
                  <a href={`tel:${ALI_CONFIG.contact.treasurerPhone.replace(/\s+/g, '')}`} className="hover:text-turquoise-500 transition-colors font-mono">
                    ({ALI_CONFIG.contact.treasurerPhone})
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4.5 h-4.5 text-turquoise-500 flex-shrink-0" />
              <a href={`mailto:${ALI_CONFIG.contact.email}`} className="hover:text-turquoise-500 transition-colors">
                {ALI_CONFIG.contact.email}
              </a>
            </div>

          </div>

          {/* Social icons */}
          <div className="pt-4 flex items-center gap-3">
            <a
              href={ALI_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-turquoise-500 hover:text-marine-950 rounded-xl border border-white/10 transition-all shadow"
              aria-label="Facebook Link"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={ALI_CONFIG.socials.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-white/5 hover:bg-green-600 hover:text-white rounded-xl border border-white/10 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all shadow"
              aria-label="WhatsApp Group Link"
            >
              <span>Groupe Officiel</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Secondary Copyright bar */}
      <div className="border-t border-white/5 bg-marine-950/85 py-6 px-4 text-center text-xs text-white/40 font-semibold tracking-wider relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {currentYear} ALI Bénin — Tous droits réservés.</span>
          <div className="flex items-center gap-1.5 text-white/50">
            <span>Devise : </span>
            <span className="text-turquoise-500 font-extrabold uppercase">{ALI_CONFIG.contact.devise}</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
