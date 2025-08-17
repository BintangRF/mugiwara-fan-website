"use client";

import React from "react";
import { Section } from "./Section";
import Image from "next/image";

export const LoadingCover = () => {
  return (
    <Section className="relative bg-custom-pirate-red w-screen h-screen flex items-center justify-center">
      {/* Image di atas loader */}
      <Image
        src="/img/icon.png"
        alt="Mugiwara Jolly Roger"
        width={300}
        height={300}
        draggable={false}
        unoptimized
        priority
        className="relative z-10"
      />

      <h1 className="font-one-piece text-5xl text-custom-white-sail absolute bottom-16 flex items-center">
        Loading
        <span className="dot-animation">.</span>
        <span className="dot-animation delay-300">.</span>
        <span className="dot-animation delay-600">.</span>
      </h1>
    </Section>
  );
};
