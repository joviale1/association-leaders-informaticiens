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
      name: "OROULA Benoît",
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
    { id: "p1", name: "Saisie de texte simple (la page)", price: "200 F", category: "Bureautique" },
    { id: "p2", name: "Saisie complexe avec tableaux / formules (la page)", price: "400 F", category: "Bureautique" },
    { id: "p3", name: "Impression A4 Noir & Blanc (la page)", price: "100 F", category: "Impression" },
    { id: "p4", name: "Impression A4 Couleur (la page)", price: "200 F", category: "Impression" },
    { id: "p5", name: "Photocopie A4 Noir & Blanc (la page)", price: "25 F", category: "Impression" },
    { id: "p6", name: "Photocopie A4 Couleur (la page)", price: "150 F", category: "Impression" },
    { id: "p7", name: "Reliure simple (1 à 50 feuilles)", price: "300 F", category: "Reliure & Finition" },
    { id: "p8", name: "Reliure simple (51 à 100 feuilles)", price: "500 F", category: "Reliure & Finition" },
    { id: "p9", name: "Plastification format A4", price: "500 F", category: "Reliure & Finition" },
    { id: "p10", name: "Numérisation de document / Scan (la page)", price: "100 F", category: "Bureautique" },
    { id: "p11", name: "Maintenance & Dépannage matériel informatique", price: "À partir de 3 000 F", category: "Technique" },
    { id: "p12", name: "Installation de système d'exploitation & logiciels", price: "5 000 F", category: "Technique" },
  ] as PrestationPrice[],

  // Modules de formation de l'ALI
  formations: [
    {
      id: "f1",
      title: "Initiation à l'informatique & MS Word",
      duration: "2 semaines",
      price: "10 000 F",
      details: ["Prise en main de l'ordinateur", "Windows & navigation", "Mise en page professionnelle sur Word", "Saisie rapide"]
    },
    {
      id: "f2",
      title: "Maîtrise d'Excel (Niveau Intermédiaire)",
      duration: "3 semaines",
      price: "15 000 F",
      details: ["Formules et fonctions de base", "Gestion de tableaux de données", "Création de graphiques", "Mise en page de tableaux"]
    },
    {
      id: "f3",
      title: "Bureautique Complète (Word + Excel + PowerPoint)",
      duration: "1 mois",
      price: "25 000 F",
      details: ["Rapports professionnels", "Présentations percutantes", "Tableurs avancés", "Raccourcis productivité"]
    },
    {
      id: "f4",
      title: "Infographie & Design (Photoshop / Illustrator)",
      duration: "1 mois",
      price: "30 000 F",
      details: ["Retouche d'images", "Création d'affiches & flyers", "Logo & identité visuelle", "Formats d'exportation"]
    },
    {
      id: "f5",
      title: "Sérigraphie Complète & Impression Textile",
      duration: "1,5 mois",
      price: "160 000 F",
      details: ["Techniques d'insolation de cadres", "Mélanges de peintures textiles", "Impression manuelle & mécanique", "Gestion d'un atelier de sérigraphie"]
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
