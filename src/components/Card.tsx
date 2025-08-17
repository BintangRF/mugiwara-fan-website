import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = (props: Readonly<CardProps>) => {
  return (
    <div
      className={`${props.className} w-full relative h-full rounded-xl shadow-2xl bg-custom-white-sail border-2 border-custom-warm-dark-brown outline-custom-straw-yellow outline-8`}
    >
      {props.children}
    </div>
  );
};
