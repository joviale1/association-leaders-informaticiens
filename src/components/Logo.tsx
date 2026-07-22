import React, { useState } from "react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} id="ali-logo-container">
      {!imgError ? (
        <img
          src="/logo.jpg"
          alt="ALI Bénin Logo"
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
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
