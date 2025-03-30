// src/components/OurTeam.jsx
import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";

const OurTeam = () => {
  return (
    <section className="relative">
      <TextWithBgVec
        text="Our Team"
        className="
          text-white font-bold 
          text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          w-[80%] sm:w-[364px] 
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
          absolute -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-[30px]
          z-50
        "
      />

      <div className="bg-[#03BBBC] pt-8 sm:pt-12 md:pt-[118px]">
        <h2
          className="
          text-center 
          text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]
          font-bold 
          leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[52.34px]
          text-white
        "
        >
          Experts that Serve their Expertise
        </h2>
      </div>
    </section>
  );
};

export default OurTeam;
