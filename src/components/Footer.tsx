"use client";

import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-custom-pirate-red text-custom-white-sail py-10 outline-4 outline-custom-straw-yellow border-t-2 border-custom-warm-dark-brown">
      <div className="container mx-auto px-4 text-center space-y-6">
        {/* Kutipan Epik */}
        <p className="text-2xl md:text-3xl font-extrabold tracking-wide">
          "Di lautan luas, mimpi tidak akan pernah tenggelam."
        </p>

        {/* Deskripsi Tribute */}
        <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
          Sebuah penghormatan untuk petualangan yang tidak pernah padam. Dibuat
          dengan semangat Topi Jerami — Tribute Fanmade One Piece.
        </p>

        {/* Signature kecil */}
        <div className="pt-4 border-t border-custom-straw-yellow/40">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} Mugiwara Tribute — Semua mimpi berlayar
            di samudra yang sama.
          </p>
        </div>
      </div>
    </footer>
  );
};
