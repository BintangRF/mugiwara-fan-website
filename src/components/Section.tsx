import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section(props: Readonly<SectionProps>) {
  return (
    <div
      id={props.id}
      className={`min-h-screen scroll-mt-14 py-4 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
