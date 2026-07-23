/**
 * Configuration de l'Association des Leaders Informaticiens (ALI)
 * Ce fichier sert de système de gestion de contenu statique simple pour les mises à jour.
 */

export interface BureauMember {
  id: string;
  name: string;
  role: string;
  isCompleted: boolean;
  photoUrl?: string;
}

export interface PrestationPrice {
  id: string;
  name: string;
  price: string;
  category: string;
  note?: string; // Optional helper text e.g. "10 F à partir de 100 copies"
}

export interface ReliureTarif {
  pages: string;
  serodoPrice: string;
  serodoCode: string;
  anneauxPrice: string;
  anneauxCode: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  duration: string;
  price: string;
  details: string[];
}

export interface AliEvent {
  id: string;
  title: string;
  date: string;
  price: string;
  details: string;
  icon: string;
  whatsappLink: string;
}

export const ALI_CONFIG = {
  // Coordonnées de l'association
  contact: {
    phone1: "01 44 67 31 46", // Président (AGOSSOU Patrice)
    phone2: "01 66 11 21 14", // Secrétaire Général (ZOSSOUNGBO A. Fidèle)
    presidentPhone: "01 44 67 31 46",
    sgPhone: "01 66 11 21 14",
    whatsapp: "01 44 67 31 46", // WhatsApp
    email: "leadersinformaticiens@gmail.com",
    address: "Agamandin, Abomey-Calavi, Bénin",
    apolitiqueInfo: "Association à caractère apolitique et à but non lucratif",
    devise: "ENSEMBLE, ON EST PLUS FORT !!",
  },

  // Liens des réseaux sociaux
  socials: {
    facebook: "https://facebook.com",
    whatsappGroup: "https://chat.whatsapp.com/ExempleGroupAli",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },

  // Liste des membres du bureau (SGC simple pour mise à jour)
  bureau: [
    {
      id: "pres",
      role: "Président",
      name: "AGOSSOU Patrice",
      isCompleted: true,
    },
    {
      id: "vpres",
      role: "Vice-Président",
      name: "ZANNOU Janvier",
      isCompleted: true,
    },
    {
      id: "sg",
      role: "Secrétaire Général",
      name: "ZOSSOUNGBO A. Fidèle",
      isCompleted: true,
    },
    {
      id: "sga",
      role: "Secrétaire Général Adjoint",
      name: "OROUNLA Benoît",
      isCompleted: true,
    },
    {
      id: "tg",
      role: "Trésorière Générale",
      name: "SEMEVO DÉO-GRACIA",
      isCompleted: true,
    },
    {
      id: "tga",
      role: "Trésorier Général Adjoint",
      name: "DAH-GLANON Xavier",
      isCompleted: true,
    },
    {
      id: "cmr",
      role: "Chargé de la mobilisation des ressources",
      name: "AGBANGNONDE Mathieu",
      isCompleted: true,
    },
    {
      id: "cc",
      role: "Chargée de la Communication",
      name: "GODONOU Flora",
      isCompleted: true,
    },
    {
      id: "cc2",
      role: "Conseillère à la communication",
      name: "HOUETCHENOU H. Mahouclo",
      isCompleted: true,
    },
    {
      id: "cc3",
      role: "Premier Commissaire au Compte",
      name: "ADDA Apollinaire",
      isCompleted: true,
    },
    {
      id: "cc4",
      role: "Deuxième Commissaire au Compte",
      name: "ADJOVI Mirelle",
      isCompleted: true,
    },
  ] as BureauMember[],

  // Grille Tarifaire des prestations (PTA - Standard Bénin)
  prestations: [
    { id: "p1", name: "Saisie A4 + Impression blanc noir", price: "300 F", category: "Saisie & Impression" },
    { id: "p2", name: "Saisie A4 + Impression couleur", price: "400 F", category: "Saisie & Impression" },
    { id: "p3", name: "Saisie A3 + Impression blanc noir", price: "500 F", category: "Saisie & Impression" },
    { id: "p4", name: "Saisie A3 + Impression couleur", price: "700 F", category: "Saisie & Impression" },
    { id: "p5", name: "Impression blanc noir A4", price: "50 F", category: "Impression" },
    { id: "p6", name: "Impression blanc noir A3", price: "100 F", category: "Impression" },
    { id: "p7", name: "Impression couleur A4", price: "100 F", category: "Impression" },
    { id: "p8", name: "Impression couleur A3", price: "250 F", category: "Impression" },
    { id: "p9", name: "Photocopie blanc noir A4", price: "15 F", category: "Photocopie", note: "10 F à partir de 100 copies" },
    { id: "p10", name: "Photocopie Blanc Noir A3", price: "75 F", category: "Photocopie" },
    { id: "p11", name: "Photocopie Couleur A3", price: "200 F", category: "Photocopie" },
    { id: "p12", name: "Photocopie Couleur A4", price: "100 F", category: "Photocopie" },
    { id: "p13", name: "Scannage A4", price: "150 F", category: "Scannage & Plastification" },
    { id: "p14", name: "Impression couleur + Plastification CIP PF", price: "700 F", category: "Scannage & Plastification" },
    { id: "p15", name: "Impression couleur + Plastification CIP GF", price: "800 F", category: "Scannage & Plastification" },
    { id: "p16", name: "Impression couleur + Plastification A4", price: "1 500 F", category: "Scannage & Plastification" },
    { id: "p17", name: "Frappe document A4 recto verso (dactylographie)", price: "500 F", category: "Saisie & Impression", note: "500 F la page recto-verso" },
    { id: "p18", name: "Photo d’identité (8 copies)", price: "1 000 F", category: "Services Photo" },
    { id: "p19", name: "Conception et impression bâche", price: "8 000 F / m²", category: "Conception & Impression" },
    { id: "p20", name: "Conception et impression autocollant", price: "10 000 F / m²", category: "Conception & Impression" },
    { id: "p21", name: "Réalisation de carte d’invitation (version numérique)", price: "5 000 F", category: "Conception & Impression" },
    { id: "p22", name: "Réalisation et impression de carte d’invitation", price: "100 F à 200 F / unité", category: "Conception & Impression", note: "100 F, 150 F ou 200 F l'unité selon le format" },
    { id: "p23", name: "Maintenance & Dépannage matériel informatique", price: "À partir de 3 000 F", category: "Technique" },
    { id: "p24", name: "Installation de système d'exploitation & logiciels", price: "5 000 F", category: "Technique" },
  ] as PrestationPrice[],

  // Grille Tarifaire des Reliures
  reliures: [
    { pages: "1-20", serodoPrice: "300 FCFA", serodoCode: "1-2", anneauxPrice: "350 FCFA", anneauxCode: "1" },
    { pages: "20-40", serodoPrice: "350 FCFA", serodoCode: "3", anneauxPrice: "400 FCFA", anneauxCode: "2" },
    { pages: "40-60", serodoPrice: "400 FCFA", serodoCode: "4", anneauxPrice: "450 FCFA", anneauxCode: "3" },
    { pages: "60-80", serodoPrice: "450 FCFA", serodoCode: "5", anneauxPrice: "500 FCFA", anneauxCode: "4" },
    { pages: "80-100", serodoPrice: "500 FCFA", serodoCode: "6", anneauxPrice: "550 FCFA", anneauxCode: "5" },
    { pages: "100-130", serodoPrice: "650 FCFA", serodoCode: "7", anneauxPrice: "700 FCFA", anneauxCode: "6" },
    { pages: "131-160", serodoPrice: "750 FCFA", serodoCode: "8", anneauxPrice: "800 FCFA", anneauxCode: "7" },
    { pages: "161-200", serodoPrice: "1 200 FCFA", serodoCode: "9", anneauxPrice: "1 250 FCFA", anneauxCode: "8" },
    { pages: "201-259", serodoPrice: "1 500 FCFA", serodoCode: "10", anneauxPrice: "1 550 FCFA", anneauxCode: "9" },
    { pages: "259-320", serodoPrice: "2 000 FCFA", serodoCode: "11", anneauxPrice: "2 050 FCFA", anneauxCode: "10" },
  ] as ReliureTarif[],

  // Modules de formation de l'ALI
  formations: [
    {
      id: "f1",
      title: "Initiation WORD",
      duration: "1 mois",
      price: "10 000 FCFA",
      details: ["WORD"]
    },
    {
      id: "f2",
      title: "Opération de saisie (OPS)",
      duration: "3 mois",
      price: "25 000 FCFA",
      details: ["WINDOWS", "PAINT", "WORD", "EXCEL"]
    },
    {
      id: "f3",
      title: "Opération de saisie (OPS) et bureautique",
      duration: "6 mois",
      price: "60 000 FCFA",
      details: ["WINDOWS", "WORD", "EXCEL", "POWERPOINT", "PUBLISHER", "PAINT"]
    },
    {
      id: "f4",
      title: "Opération de saisie (OPS), bureautique et Graphisme",
      duration: "1 an",
      price: "130 000 FCFA",
      details: ["WINDOWS", "WORD", "EXCEL", "POWERPOINT", "PUBLISHER", "PAINT", "INTERNET", "PHOTOSHOP", "In DESIGN"]
    },
    {
      id: "f5",
      title: "Opération de saisie (OPS), bureautique, Graphisme et Sérigraphie",
      duration: "1 an 3 mois",
      price: "160 000 FCFA",
      details: ["WINDOWS", "WORD", "EXCEL", "POWERPOINT", "PUBLISHER", "PAINT", "INTERNET", "PHOTOSHOP", "In DESIGN", "Sérigraphie"]
    }
  ] as TrainingModule[],

  // Événements à venir
  evenements: [
    {
      id: "ev1",
      title: "Formation Graphisme (Photoshop / InDesign)",
      date: "Du 03 Août au 03 Septembre 2026",
      price: "15 000 F / logiciel",
      details: "Une formation intensive d'un mois pour maîtriser les outils essentiels de la création graphique. Idéal pour les débutants et les personnes souhaitant se professionnaliser.",
      icon: "Palette",
      whatsappLink: "https://wa.me/2290144673146?text=Bonjour%20je%20souhaite%20m'inscrire%20à%20la%20Formation%20Graphisme",
    },
    {
      id: "ev2",
      title: "Sortie Officielle des Leaders Informaticiens",
      date: "Samedi 19 Décembre 2026 (Provisoire)",
      price: "6 000 F (Solo) / 10 000 F (Couple)",
      details: "La grande rencontre annuelle d'intégration et de réseautage de l'ALI. Le tarif inclut : Tee-shirt + Casquette de l'association + un somptueux déjeuner.",
      icon: "PartyPopper",
      whatsappLink: "https://wa.me/2290144673146?text=Bonjour%20je%20souhaite%20réserver%20ma%20place%20pour%20la%20Sortie%20Officielle%20de%20l'ALI",
    }
  ] as AliEvent[],
};
