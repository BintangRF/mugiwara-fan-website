"use client";

import { useCrews } from "@/hooks/useGetCrews";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Section } from "../Section";
import { Container } from "../Container";
import { SectionTitle } from "../SectionTitle";
import { dummyAbilities } from "@/data/DummyAbilities";
import { Card } from "../Card";

export const Crews = () => {
  const { data } = useCrews.useGet();
  const [selectedCrew, setSelectedCrew] = useState<any>(null);

  // Merge API data with dummy abilities
  const enrichedData = useMemo(() => {
    return data?.map((crew: any) => {
      if (!crew.fruit && dummyAbilities[crew.id]) {
        return {
          ...crew,
          fruit: {
            name: dummyAbilities[crew.id].ability,
            description: dummyAbilities[crew.id].description,
            type: "Ability",
          },
        };
      }
      return crew;
    });
  }, [data]);

  return (
    <Section id="crew" className="bg-custom-pirate-red">
      <Container>
        <SectionTitle
          preTitle="Straw Hat Pirates"
          title="Meet the Crew"
          align="center"
        >
          The Straw Hat Pirates are a diverse group of adventurers, each with
          unique skills, abilities, and dreams. Discover their backgrounds,
          strengths, and roles aboard the Thousand Sunny.
        </SectionTitle>
      </Container>

      {/* Grid */}
      <Container className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-20">
        {enrichedData?.map((crewMember: any) => (
          <div
            key={crewMember.id}
            className="group relative cursor-pointer h-64"
            onClick={() => setSelectedCrew(crewMember)}
          >
            <Card>
              <Image
                src={`/img/crew/${crewMember.id}.png`}
                alt={crewMember.name}
                className="object-contain transition-transform duration-500 group-hover:blur-sm"
                fill
                unoptimized
              />
            </Card>

            <p className="mt-3 text-center text-2xl font-bold text-custom-white-sail font-one-piece tracking-wide group-hover:text-custom-straw-yellow transition-colors">
              {crewMember.name}
            </p>

            <button className="absolute top-2/5 left-1/2 hidden group-hover:block transform -translate-x-1/2 bg-custom-pirate-red text-custom-white-sail font-bold py-2 px-4 rounded-lg drop-shadow-custom-deep-black drop-shadow-md">
              View Details
            </button>
          </div>
        ))}
      </Container>

      {/* Modal */}
      <Dialog
        open={!!selectedCrew}
        onClose={() => setSelectedCrew(null)}
        className="relative z-50"
      >
        {/* Overlay */}
        <div className="fixed inset-0 bg-custom-deep-black/70 backdrop-blur-sm" />

        {/* Modal Content */}
        <div className="fixed inset-0 flex items-center justify-center p-6">
          <Dialog.Panel className="mx-auto max-w-2xl w-full rounded-2xl bg-custom-deep-black shadow-2xl border-4 border-custom-warm-dark-brown animate-fadeIn max-h-[85%] flex flex-col">
            {selectedCrew && (
              <>
                {/* Header */}
                <Dialog.Title className="text-3xl font-font-one-piece font-bold text-custom-pirate-red p-6 border-b border-custom-warm-dark-brown">
                  {selectedCrew.name}
                </Dialog.Title>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  <div className="flex flex-col md:flex-row gap-6 text-custom-deep-black dark:text-custom-white-sail font-font-body">
                    {/* Image + Basic Info */}
                    <div className="flex-shrink-0">
                      <div className="relative w-40 h-40 border-2 border-custom-straw-yellow rounded-lg overflow-hidden mb-4">
                        <Image
                          src={`/img/crew/${selectedCrew.id}.png`}
                          alt={selectedCrew.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p>
                        <strong>Age:</strong> {selectedCrew.age}
                      </p>
                      <p>
                        <strong>Height:</strong> {selectedCrew.size}
                      </p>
                      <p className="text-custom-pirate-red font-semibold">
                        <strong>Bounty:</strong> {selectedCrew.bounty}
                      </p>
                      <p>
                        <strong>Role:</strong> {selectedCrew.job}
                      </p>
                      <p>
                        <strong>Status:</strong> {selectedCrew.status}
                      </p>
                    </div>

                    {/* Fruit / Ability */}
                    {selectedCrew.fruit && (
                      <div className="flex-1">
                        <h3 className="font-semibold text-custom-straw-yellow">
                          {selectedCrew.fruit.type === "Ability"
                            ? "Ability"
                            : "Devil Fruit"}
                        </h3>
                        <p className="font-bold">
                          {selectedCrew.fruit.name}{" "}
                          {selectedCrew.fruit.type !== "Ability" &&
                            `(${selectedCrew.fruit.type})`}
                        </p>
                        <p className="text-sm mt-2 leading-relaxed text-justify">
                          {selectedCrew.fruit.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-custom-warm-dark-brown flex justify-end">
                  <button
                    onClick={() => setSelectedCrew(null)}
                    className="px-6 py-2 rounded-lg bg-custom-pirate-red text-custom-white-sail hover:bg-custom-straw-yellow hover:text-custom-deep-black font-bold transition-colors"
                  >
                    Close
                  </button>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Section>
  );
};
