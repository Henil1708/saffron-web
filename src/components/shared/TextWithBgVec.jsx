// src/components/TextWithBgVec.jsx
import Image from "next/image";
import React from "react";

const TextWithBgVec = ({ text, className }) => {
  // Default responsive typography and layout classes
  const defaultClasses =
    "text-3xl md:text-5xl lg:text-6xl font-bold leading-tight";
  return (
    <div
      className={`text-white text-center relative bg-contain bg-no-repeat bg-center w-fit pointer-events-none ${
        className || defaultClasses
      }`}
    >
      <span className="z-20 relative">{text}</span>
      <Image src="/images/title-bg-vec.svg" alt="" fill className="z-10" />
    </div>
  );
};

export default TextWithBgVec;
