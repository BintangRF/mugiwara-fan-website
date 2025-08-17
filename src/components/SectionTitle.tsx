import React from "react";

interface SectionTitleProps {
  preTitle?: string;
  title?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
}

export const SectionTitle = (props: Readonly<SectionTitleProps>) => {
  return (
    <div
      className={`flex w-full flex-col text-custom-white-sail ${
        props.className
      } ${props.align === "left" ? "items-start" : "items-center text-center"}`}
    >
      {/* Pre-title */}
      {props.preTitle && (
        <div className="flex items-center gap-3 mb-2">
          <span className="h-[2px] w-8 bg-custom-straw-yellow rounded-full"></span>
          <span className="text-lg font-semibold tracking-widest text-custom-straw-yellow">
            {props.preTitle}
          </span>
          <span className="h-[2px] w-8 bg-custom-straw-yellow rounded-full"></span>
        </div>
      )}

      {/* Title utama */}
      {props.title && (
        <h2
          className={`relative font-one-piece h-14 font-extrabold text-custom-straw-yellow ${
            props.align === "left"
              ? "text-4xl lg:text-5xl"
              : "text-5xl lg:text-6xl"
          }`}
        >
          {props.title}
        </h2>
      )}

      {/* Deskripsi */}
      {props.children && (
        <p className="max-w-2xl mt-4 text-lg leading-relaxed">
          {props.children}
        </p>
      )}
    </div>
  );
};
