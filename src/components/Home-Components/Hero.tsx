"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import Image from "next/image";

export const Hero = () => {
  return (
    <Section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-custom-deep-black/40 via-custom-pirate-red/40 to-custom-pirate-red/80"
    >
      {/* Background Image Overlay */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-10">
        <Image
          src="/img/crew/crew.webp"
          alt="mugiwara crew"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Hero Content */}
      <Container className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-center">
        <h1 className="font-one-piece text-custom-straw-yellow text-6xl md:text-8xl font-bold mb-6">
          MUGIWARA CREW
        </h1>

        <p className="font-body text-xl md:text-2xl max-w-2xl mb-10 text-custom-white-sail font-bold">
          Join the journey to find the legendary One Piece and become the King
          of Pirates!
        </p>

        <div className="flex space-x-4">
          <button className="px-8 py-3 bg-custom-pirate-red font-one-piece drop-shadow-custom-deep-black drop-shadow-xs rounded-full font-bold transition-all hover:scale-105 text-custom-white-sail">
            JOIN THE CREW
          </button>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-custom-straw-yellow"
            fill="none"
            stroke="var(--color-custom-white-sail)"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </Section>
  );
};
