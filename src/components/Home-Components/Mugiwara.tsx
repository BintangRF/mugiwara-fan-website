"use client";

import React from "react";
import { Section } from "../Section";
import { Container } from "../Container";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { SectionTitle } from "../SectionTitle";
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

export const Mugiwara = () => {
  return (
    <Section
      id="mugiwara"
      className="bg-gradient-to-b from-custom-pirate-red/80 to-custom-pirate-red"
    >
      <Container className="text-white flex flex-col md:flex-row items-center gap-12">
        {/* Gambar/Ilustrasi grup */}

        <Tilt options={defaultOptions}>
          <Card>
            <Image
              src="/img/crew/crew.png"
              alt="Mugiwara Pirates Ship"
              layout="contain"
              height={500}
              width={500}
              className="object-cover object-center"
            />
          </Card>
        </Tilt>

        {/* Informasi Grup */}
        <div className="w-full md:w-1/2">
          <SectionTitle
            preTitle="Petualangan Grand Line"
            title="Bajak Laut Mugiwara"
            align="left"
            className="text-justify!"
          >
            Bajak Laut Topi Jerami, yang dikenal sebagai Mugiwara Pirates,
            adalah kru pemberani dan penuh petualangan yang dipimpin oleh Monkey
            D. Luffy. Mereka berlayar di Grand Line untuk mencari harta
            legendaris <strong>One Piece</strong>, menentang tirani serta
            kejahatan, dan menjalin persahabatan dengan banyak orang sepanjang
            perjalanan mereka.
            <p className="text-lg leading-relaxed mt-5">
              Dengan semangat kebebasan serta tekad untuk mewujudkan impian
              setiap anggotanya, Bajak Laut Mugiwara menjadi simbol keberanian,
              kesetiaan, dan petualangan tak terbatas di lautan luas.
            </p>
          </SectionTitle>
        </div>
      </Container>
    </Section>
  );
};
