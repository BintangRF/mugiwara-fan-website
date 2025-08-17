"use client";

import React, { useEffect, useMemo } from "react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Container } from "../Container";
import { dummyBounties } from "@/data/DummyBounties";

export const Bounties = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 8,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 8 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 8, spacing: 8 },
      },
    },
    renderMode: "performance",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (slider?.current) {
        slider.current.next();
      }
    }, 700);

    return () => {
      clearInterval(interval);
    };
  }, [slider]);

  return (
    <Section id="bounties" className="bg-custom-pirate-red">
      <Container>
        <SectionTitle preTitle="Wanted" title="Bounties" align="center">
          Koleksi poster buronan kru Topi Jerami dengan nilai bounty yang terus
          meningkat!
        </SectionTitle>

        <div ref={sliderRef} className="keen-slider mt-8">
          {dummyBounties.map((bounty) => (
            <div
              key={bounty.id}
              className="keen-slider__slide flex items-center justify-center"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={bounty.imgSrc}
                  alt={`Bounty ${bounty.id}`}
                  className="object-cover drop-shadow-custom-deep-black drop-shadow-2xl border-2 border-custom-white-sail"
                  fill
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
