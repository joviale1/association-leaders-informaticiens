import React from "react";

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} id="ali-logo-container">
      <img
        src="/logo.jpg"
        alt="ALI Bénin Logo"
        className="w-full h-full object-cover rounded-full shadow-md border border-turquoise-500/80 transition-all duration-300 hover:scale-105"
      />
      <div className="sr-only">ASSOCIATION DES LEADERS INFORMATICIENS ALI</div>
    </div>
  );
}
