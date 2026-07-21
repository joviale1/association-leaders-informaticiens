import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Bureau from "./components/Bureau";
import TarifsFormations from "./components/TarifsFormations";
import Events from "./components/Events";
import DevenirMembreForm from "./components/DevenirMembreForm";
import Footer from "./components/Footer";
import Annuaire from "./components/Annuaire";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "annuaire">("home");
  const [activeSection, setActiveSection] = useState("accueil");
  const [prefilledInterest, setPrefilledInterest] = useState("");

  // Smooth scroll handler to target section ID or switch pages
  const handleNavigation = (sectionId: string) => {
    if (sectionId === "annuaire") {
      setCurrentPage("annuaire");
      setActiveSection("annuaire");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (currentPage !== "home") {
      setCurrentPage("home");
      setActiveSection(sectionId);
      setTimeout(() => {
        const targetElement = document.getElementById(
          sectionId === "propos" 
            ? "ali-vision-section" 
            : sectionId === "bureau"
            ? "ali-bureau-section"
            : sectionId === "tarifs"
            ? "ali-tarifs-section"
            : sectionId === "evenements"
            ? "ali-events-section"
            : sectionId === "devenir-membre"
            ? "ali-register-section"
            : "accueil"
        );

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      const targetElement = document.getElementById(
        sectionId === "propos" 
          ? "ali-vision-section" 
          : sectionId === "bureau"
          ? "ali-bureau-section"
          : sectionId === "tarifs"
          ? "ali-tarifs-section"
          : sectionId === "evenements"
          ? "ali-events-section"
          : sectionId === "devenir-membre"
          ? "ali-register-section"
          : "accueil"
      );

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setActiveSection(sectionId);
    }
  };

  // Callback to select training from TarifsFormations or Events and smooth scroll to form
  const handleSelectInterest = (interestTitle: string) => {
    setPrefilledInterest(interestTitle);
    
    if (currentPage !== "home") {
      setCurrentPage("home");
      setTimeout(() => {
        const target = document.getElementById("ali-register-section");
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);
    } else {
      // Smooth scroll to register section
      const target = document.getElementById("ali-register-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // IntersectionObserver to auto-detect and highlight the active visible section
  useEffect(() => {
    if (currentPage !== "home") return;

    const sectionIds = [
      { id: "accueil", elementId: "accueil" },
      { id: "propos", elementId: "ali-vision-section" },
      { id: "bureau", elementId: "ali-bureau-section" },
      { id: "tarifs", elementId: "ali-tarifs-section" },
      { id: "evenements", elementId: "ali-events-section" },
      { id: "devenir-membre", elementId: "ali-register-section" },
    ];

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when the section occupies a good portion of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedSection = sectionIds.find((sec) => sec.elementId === entry.target.id);
          if (matchedSection) {
            setActiveSection(matchedSection.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((sec) => {
      const el = document.getElementById(sec.elementId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-[#0B2545] font-sans overflow-x-hidden antialiased">
      {/* Sticky, fixed header navigation */}
      <Header onNavigate={handleNavigation} activeSection={activeSection} />

      {/* Main visual sections */}
      <main className="flex-grow">
        {currentPage === "annuaire" ? (
          <Annuaire onBackToHome={() => handleNavigation("accueil")} />
        ) : (
          <>
            {/* Section 1: Hero */}
            <Hero onJoinClick={() => handleNavigation("devenir-membre")} />

            {/* Section 2: Notre Vision & Nos Objectifs (combined beautifully in Vision) */}
            <Vision />

            {/* Section 3: Le Bureau */}
            <Bureau onJoinClick={() => handleNavigation("devenir-membre")} />

            {/* Section 4: Formations & Tarifs */}
            <TarifsFormations onSelectTraining={handleSelectInterest} />

            {/* Section 5: Événements */}
            <Events onRegisterEvent={handleSelectInterest} />

            {/* Section 6: Devenir Membre Form */}
            <DevenirMembreForm prefilledInterest={prefilledInterest} />
          </>
        )}
      </main>

      {/* Section 7: Footer */}
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}
