"use client";

import { useStories } from "@/hooks/useGetStories";
import React, { useMemo } from "react";
import Image from "next/image";
import { Section } from "../Section";
import { SectionTitle } from "../SectionTitle";
import { Container } from "../Container";
import { Tilt } from "react-tilt";
import { Card } from "../Card";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const Stories = () => {
  const { data } = useStories.useGet();

  const eggHeadDesc =
    "The Straw Hat Pirates arrive at Egghead, the futuristic island of Dr. Vegapunk. As they explore his advanced laboratory, they learn shocking truths about the world, Vegapunk’s research, and the mysteries of the Void Century. Meanwhile, the World Government targets Vegapunk for elimination, sending powerful forces including CP0. The crew is drawn into a dangerous conflict that connects ancient history, revolutionary movements, and the future of the seas.";

  const newData = useMemo(() => {
    return data?.map((story) => {
      if (story?.description === "-") {
        return {
          ...story,
          description: eggHeadDesc,
        };
      }
      return story;
    });
  }, [data]);

  return (
    <Section id="story" className="bg-custom-pirate-red">
      <Container>
        <SectionTitle preTitle="One Piece" title="Stories" align="center">
          Kisah perjalanan Luffy dan kru Topi Jerami dalam mencari One Piece,
          dibagi ke dalam beberapa arc penuh aksi dan emosi.
        </SectionTitle>

        <div className="mt-16 flex flex-col">
          {newData?.map((arc: any, index: number) => (
            <div
              key={arc.id}
              className={`h-full flex flex-col lg:flex-row items-center gap-10 p-3.5 border-dashed border-custom-white-sail ${
                index % 2 === 1
                  ? "lg:flex-row-reverse border-l-4 border-b-4"
                  : "border-r-4 border-b-4"
              }`}
            >
              {/* Image */}
              <Tilt options={defaultOptions}>
                <Card>
                  <Image
                    src={`/img/story/${arc.id}.png`}
                    alt={arc.title}
                    className="object-cover"
                    height={500}
                    width={500}
                    layout="contain"
                    priority
                    unoptimized
                  />
                </Card>
              </Tilt>

              {/* Text */}
              <div className="w-full lg:w-1/2 text-custom-white-sail">
                <h3 className="text-3xl font-extrabold text-custom-straw-yellow mb-4 flex items-center text-nowrap gap-5">
                  {arc.title}

                  <span className="h-[2px] w-full bg-custom-straw-yellow rounded-full"></span>
                </h3>
                <p className="text-lg leading-relaxed text-justify">
                  {arc.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
