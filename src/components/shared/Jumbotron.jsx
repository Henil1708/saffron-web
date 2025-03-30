// src/components/Jumbotron.jsx
import React from "react";
import Link from "next/link";

const Jumbotron = ({ buttonText, buttonLink }) => {
  return (
    <section className="relative pt-6 sm:pt-8 md:pt-12 lg:pt-[24px] pb-6 sm:pb-8 md:pb-12 lg:pb-[29px] bg-[url('/images/bones-bg.png')] bg-no-repeat bg-cover bg-center text-white text-center">
      <div className="relative z-20 max-w-[864px] mx-auto px-4">
        <h2 className="font-bold text-[28px] sm:text-[32px] md:text-[40px]">
          Make Your Decision and Visit Us Today to
        </h2>
        <p className="font-bold text-[40px] sm:text-[48px] md:text-[60px] leading-[48px] sm:leading-[56px] md:leading-[72px] mb-2">
          Live a Pain-Free Life by Tomorrow!
        </p>
        <Link
          href={buttonLink}
          className="inline-block border border-white px-4 sm:px-6 md:px-[19.88px] font-semibold py-2 sm:py-3 md:py-[9px] rounded-full text-[20px] sm:text-[22px] md:text-[26px] transition text-white"
        >
          {buttonText}
        </Link>
      </div>
      <div className="absolute inset-0 bg-[#EB6B1D] opacity-[0.89]"></div>
    </section>
  );
};

export default Jumbotron;
