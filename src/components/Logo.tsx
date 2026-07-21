import React from "react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} id="ali-logo-container">
      {/* Fond rond turquoise */}
      <div className="absolute inset-0 bg-turquoise-500 rounded-full flex items-center justify-center shadow-md border border-white/20 transition-all duration-300 hover:scale-105">
        {/* Ordinateur Bleu Marine au centre */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-1/2 h-1/2 text-marine-900 drop-shadow-sm"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </div>

      {/* Texte circulaire optionnel ou badge à côté */}
      <div className="sr-only">ASSOCIATION DES LEADERS INFORMATICIENS ALI</div>
    </div>
  );
}
