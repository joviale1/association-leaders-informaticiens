import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserPlus, User, Phone, Briefcase, MapPin, Send, MessageSquare, Mail, CheckCircle2, Sparkles } from "lucide-react";
import { ALI_CONFIG } from "../config";

interface FormProps {
  prefilledInterest: string;
}

export default function DevenirMembreForm({ prefilledInterest }: FormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    specialty: "",
    city: "",
    interest: "Adhésion Simple / Devenir membre",
  });

  const [submitMethod, setSubmitMethod] = useState<"whatsapp" | "email">("whatsapp");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync prefilled interest from parent
  useEffect(() => {
    if (prefilledInterest) {
      setFormData((prev) => ({ ...prev, interest: prefilledInterest }));
    }
  }, [prefilledInterest]);

  const interestOptions = [
    "Adhésion Simple / Devenir membre",
    "Module 1: Initiation à l'informatique & MS Word",
    "Module 2: Maîtrise d'Excel (Intermédiaire)",
    "Module 3: Bureautique Complète",
    "Module 4: Infographie & Design (Photoshop / Illustrator)",
    "Module 5: Sérigraphie Complète & Impression Textile",
    "Événement: Formation Graphisme (Photoshop / InDesign)",
    "Événement: Sortie Officielle des Leaders Informaticiens",
    "Autre projet ou demande d'information",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Le nom et prénom sont requis";
    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis";
    } else if (!/^[+0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Numéro invalide (ex: +229 97 00 00 00 ou 97000000)";
    }
    if (!formData.specialty.trim()) newErrors.specialty = "Veuillez préciser votre spécialité / domaine d'activité";
    if (!formData.city.trim()) newErrors.city = "La ville de résidence est requise";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);

    // Formatted message content in French
    const message = `Bonjour Secrétaire de l'ALI Bénin,

Je souhaite m'inscrire ou devenir membre de l'association. Voici mes informations :
- Nom & Prénom : ${formData.name}
- Téléphone : ${formData.phone}
- Spécialité : ${formData.specialty}
- Ville : ${formData.city}
- Intérêt principal / Module : ${formData.interest}

Merci de confirmer mon inscription.`;

    // Construct Redirect URLs
    if (submitMethod === "whatsapp") {
      // Encode for WhatsApp API
      const whatsappUrl = `https://wa.me/22997000000?text=${encodeURIComponent(message)}`;
      setTimeout(() => {
        window.open(whatsappUrl, "_blank");
      }, 1500);
    } else {
      // Encode for Mailto client
      const mailtoUrl = `mailto:${ALI_CONFIG.contact.email}?subject=${encodeURIComponent(
        `Inscription ALI - ${formData.name}`
      )}&body=${encodeURIComponent(message)}`;
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1500);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden" id="ali-register-section">
      {/* Decorative Lights */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-turquoise-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D62828]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 bg-turquoise-500/10 text-turquoise-600 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <UserPlus className="w-3.5 h-3.5" />
            <span>Formulaire Unique</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-marine-900 tracking-tight">
            Devenir Membre / S'inscrire
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-light">
            Remplissez ce formulaire en quelques secondes pour rejoindre l'ALI ou vous inscrire à un module de formation. Vos données seront directement transmises à notre secrétariat.
          </p>
        </div>

        {/* Form Container with interactive animations */}
        <div className="bg-[#f8fafc] rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-xl max-w-2xl mx-auto text-left">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Field: Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-turquoise-500" />
                    Nom & Prénom(s)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: AGOSSOU Patrice"
                    className={`w-full bg-white px-4 py-3 rounded-xl text-sm sm:text-base border ${
                      errors.name ? "border-[#D62828] focus:ring-1 focus:ring-[#D62828]" : "border-slate-200 focus:border-turquoise-500"
                    } focus:outline-none focus:ring-2 focus:ring-turquoise-500/10 transition-all`}
                  />
                  {errors.name && <p className="text-xs font-bold text-[#D62828]">{errors.name}</p>}
                </div>

                {/* Field: Phone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-turquoise-500" />
                    Numéro de Téléphone / WhatsApp
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ex: +229 97 00 00 00"
                    className={`w-full bg-white px-4 py-3 rounded-xl text-sm sm:text-base border ${
                      errors.phone ? "border-[#D62828] focus:ring-1 focus:ring-[#D62828]" : "border-slate-200 focus:border-turquoise-500"
                    } focus:outline-none focus:ring-2 focus:ring-turquoise-500/10 transition-all`}
                  />
                  {errors.phone && <p className="text-xs font-bold text-[#D62828]">{errors.phone}</p>}
                </div>

                {/* Grid layout for Specialty & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Specialty */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4 text-turquoise-500" />
                      Spécialité / Métier
                    </label>
                    <input
                      type="text"
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      placeholder="Ex: Étudiant / Graphiste / Dépanneur"
                      className={`w-full bg-white px-4 py-3 rounded-xl text-sm sm:text-base border ${
                        errors.specialty ? "border-[#D62828] focus:ring-1 focus:ring-[#D62828]" : "border-slate-200 focus:border-turquoise-500"
                      } focus:outline-none focus:ring-2 focus:ring-turquoise-500/10 transition-all`}
                    />
                    {errors.specialty && <p className="text-xs font-bold text-[#D62828]">{errors.specialty}</p>}
                  </div>

                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-turquoise-500" />
                      Ville de Résidence
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Ex: Abomey-Calavi"
                      className={`w-full bg-white px-4 py-3 rounded-xl text-sm sm:text-base border ${
                        errors.city ? "border-[#D62828] focus:ring-1 focus:ring-[#D62828]" : "border-slate-200 focus:border-turquoise-500"
                      } focus:outline-none focus:ring-2 focus:ring-turquoise-500/10 transition-all`}
                    />
                    {errors.city && <p className="text-xs font-bold text-[#D62828]">{errors.city}</p>}
                  </div>
                </div>

                {/* Field: Interest selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-turquoise-500" />
                    Intérêt Particulier / Choix d'activité
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-white px-4 py-3 rounded-xl text-sm sm:text-base border border-slate-200 focus:border-turquoise-500 focus:outline-none focus:ring-2 focus:ring-turquoise-500/10 transition-all"
                  >
                    {interestOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submission Mode Selection */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 block">
                    Mode d'envoi préféré
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setSubmitMethod("whatsapp")}
                      className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                        submitMethod === "whatsapp"
                          ? "bg-turquoise-500/10 border-turquoise-500 text-turquoise-600 font-bold"
                          : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-wider font-semibold">Par WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitMethod("email")}
                      className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all ${
                        submitMethod === "email"
                          ? "bg-[#D62828]/5 border-[#D62828] text-[#D62828] font-bold"
                          : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-xs uppercase tracking-wider font-semibold">Par Email</span>
                    </button>
                  </div>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full bg-marine-900 hover:bg-marine-950 text-white font-bold uppercase tracking-wider py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-marine-900/10 transition-all duration-300 hover:scale-102 cursor-pointer"
                >
                  <span>Envoyer mon inscription</span>
                  <Send className="w-4 h-4" />
                </button>

              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="p-4 rounded-full bg-green-100 text-green-500">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                
                <h3 className="text-2xl font-black text-marine-900">
                  Formulaire Validé !
                </h3>
                
                <p className="text-sm text-slate-500 max-w-md font-light leading-relaxed">
                  Merci, <span className="font-bold text-marine-950">{formData.name}</span>. Votre formulaire a été généré avec succès. Nous vous redirigeons vers votre client <span className="font-bold text-turquoise-500">{submitMethod === "whatsapp" ? "WhatsApp" : "Email"}</span> pour finaliser l'envoi.
                </p>

                <div className="p-3.5 rounded-xl bg-slate-100 text-[11px] text-slate-500 italic max-w-sm">
                  "Si la redirection ne s'exécute pas, veuillez vérifier que vos bloqueurs de popups sont désactivés."
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-xs font-bold text-turquoise-600 uppercase tracking-widest hover:underline cursor-pointer"
                >
                  ← Modifier mes informations
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
