import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar, Palette, PartyPopper, Clock, MapPin, Ticket, ArrowRight, Sparkles } from "lucide-react";
import { ALI_CONFIG, AliEvent } from "../config";

interface EventsProps {
  onRegisterEvent: (eventTitle: string) => void;
}

export default function Events({ onRegisterEvent }: EventsProps) {
  // Target dates:
  // Event 1: August 3, 2026
  // Event 2: December 19, 2026
  const targetDates = {
    ev1: new Date("2026-08-03T08:00:00").getTime(),
    ev2: new Date("2026-12-19T09:00:00").getTime(),
  };

  // State to store remaining time
  const [countdown, setCountdown] = useState({
    ev1: { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false },
    ev2: { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: false },
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const nextCountdowns = { ...countdown };

      // EV1
      const diff1 = targetDates.ev1 - now;
      if (diff1 > 0) {
        nextCountdowns.ev1 = {
          days: Math.floor(diff1 / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff1 / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff1 / 1000 / 60) % 60),
          seconds: Math.floor((diff1 / 1000) % 60),
          isOver: false,
        };
      } else {
        nextCountdowns.ev1.isOver = true;
      }

      // EV2
      const diff2 = targetDates.ev2 - now;
      if (diff2 > 0) {
        nextCountdowns.ev2 = {
          days: Math.floor(diff2 / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff2 / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff2 / 1000 / 60) % 60),
          seconds: Math.floor((diff2 / 1000) % 60),
          isOver: false,
        };
      } else {
        nextCountdowns.ev2.isOver = true;
      }

      setCountdown(nextCountdowns);
    };

    // Run first calculation
    calculateTimeLeft();

    // Set interval
    const intervalId = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(intervalId);
  }, []); // Stable primitive state dependencies

  const getEventIcon = (iconName: string) => {
    switch (iconName) {
      case "Palette":
        return <Palette className="w-6 h-6 text-turquoise-500" />;
      case "PartyPopper":
        return <PartyPopper className="w-6 h-6 text-[#D62828]" />;
      default:
        return <Calendar className="w-6 h-6 text-turquoise-500" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-marine-950 text-white relative overflow-hidden" id="ali-events-section">
      {/* Decorative Lights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-turquoise-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#D62828]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <span className="inline-flex items-center gap-1.5 bg-turquoise-500/10 border border-turquoise-500/30 text-turquoise-400 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Notre Agenda Actif</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Événements à Venir en 2026
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-light">
            Participez à nos formations temporaires exceptionnelles et rejoignez la communauté active de l'ALI lors de nos grands événements annuels.
          </p>
        </div>

        {/* 2 Event Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {ALI_CONFIG.evenements.map((ev: AliEvent, idx: number) => {
            const eventKey = ev.id as "ev1" | "ev2";
            const timer = countdown[eventKey];
            const isFirst = idx === 0;

            return (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, x: isFirst ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-marine-900/80 backdrop-blur-sm rounded-3xl border border-white/5 overflow-hidden shadow-2xl flex flex-col justify-between"
              >
                
                {/* Event header/Image replacement with SVG and color layout */}
                <div className={`p-6 sm:p-8 flex items-center justify-between relative overflow-hidden bg-gradient-to-r ${
                  isFirst ? "from-turquoise-500/15 via-transparent" : "from-[#D62828]/15 via-transparent"
                } to-transparent border-b border-white/5`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-md">
                      {getEventIcon(ev.icon)}
                    </div>
                    <div className="text-left">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        isFirst ? "bg-turquoise-500/10 text-turquoise-400" : "bg-[#D62828]/15 text-[#D62828]"
                      }`}>
                        {isFirst ? "Formation Spéciale" : "Rassemblement ALI"}
                      </span>
                      <h3 className="font-extrabold text-white text-base sm:text-lg tracking-tight mt-1.5 leading-snug">
                        {ev.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Event core info & descriptions */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-6">
                  
                  <p className="text-sm text-white/70 leading-relaxed font-light">
                    {ev.details}
                  </p>

                  {/* Metadata grid */}
                  <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-turquoise-500" />
                      <div>
                        <div className="text-white/40 font-bold uppercase text-[9px] tracking-wider">Date & Heure</div>
                        <div className="text-white font-medium mt-0.5">{ev.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Ticket className="w-4 h-4 text-[#D62828]" />
                      <div>
                        <div className="text-white/40 font-bold uppercase text-[9px] tracking-wider">Frais de Participation</div>
                        <div className="text-[#D62828] font-extrabold mt-0.5">{ev.price}</div>
                      </div>
                    </div>
                  </div>

                  {/* Countdown display */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 flex flex-col items-center justify-center space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/55 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-turquoise-500 animate-spin" style={{ animationDuration: "10s" }} />
                      Temps restant avant l'événement
                    </span>

                    {timer.isOver ? (
                      <div className="text-sm font-bold text-[#D62828] uppercase tracking-wider py-1">L'événement a commencé !</div>
                    ) : (
                      <div className="grid grid-cols-4 gap-2 w-full max-w-xs text-center pt-1.5">
                        <div className="bg-white/5 rounded-xl p-1.5">
                          <div className="text-lg font-black text-white">{timer.days}</div>
                          <div className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Jours</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-1.5">
                          <div className="text-lg font-black text-white">{timer.hours}</div>
                          <div className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Heures</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-1.5">
                          <div className="text-lg font-black text-white">{timer.minutes}</div>
                          <div className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Min</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-1.5">
                          <div className="text-lg font-black text-turquoise-500">{timer.seconds}</div>
                          <div className="text-[8px] text-white/40 uppercase tracking-widest font-bold">Sec</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Button actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <button
                      onClick={() => onRegisterEvent(ev.title)}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl border border-white/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>S'inscrire via formulaire</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <a
                      href={ev.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#D62828] hover:bg-[#b51f1f] text-white font-bold uppercase tracking-wider text-xs py-3.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md transition-all duration-300 hover:scale-102 cursor-pointer"
                    >
                      <span>S'inscrire par WhatsApp</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
