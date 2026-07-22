import React, { useState } from "react";
import { LOGO_DATA_URL } from "../assets/logoDataUrl";
import logoImg from "../assets/logo.jpg";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  const [imgSrc, setImgSrc] = useState<string>(LOGO_DATA_URL);
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    if (imgSrc === LOGO_DATA_URL) {
      // Intenter fallback sur l'image statique si le dataURL échoue
      setImgSrc(logoImg || "/logo.jpg");
    } else {
      setImgError(true);
    }
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} id="ali-logo-container">
      {!imgError ? (
        <img
          src={imgSrc}
          alt="ALI Bénin Logo"
          onError={handleError}
          className="w-full h-full object-cover rounded-full shadow-md border border-turquoise-500/80 transition-all duration-300 hover:scale-105"
        />
      ) : (
        <div className="w-full h-full bg-turquoise-500 rounded-full flex items-center justify-center shadow-md border border-white/20 text-marine-900 font-black text-xs">
          ALI
        </div>
      )}
      <div className="sr-only">ASSOCIATION DES LEADERS INFORMATICIENS ALI</div>
    </div>
  );
}
