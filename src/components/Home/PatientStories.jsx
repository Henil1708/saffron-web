// src/components/PatientStories.jsx
import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";

const PatientStories = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <TextWithBgVec
        text="Patient Stories"
        className="
          text-white font-bold 
          text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          w-[80%] sm:w-[364px]
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
          -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10
          z-50
        "
      />
      <div className="mt-16 mb-12 sm:mt-20 sm:mb-16">
        <h3
          className="
          text-center 
          font-bold 
          text-[#3C3C3B] 
          text-[24px] sm:text-[32px] md:text-[40px]
          leading-[28px] sm:leading-[36px] md:leading-[44.4px]
          max-w-[789px] mx-auto
        "
        >
          Make Your Decision and Visit Us Today to Live a Pain-Free Life by
          Tomorrow!
        </h3>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-[1038px] mx-auto h-[300px] sm:h-[400px] md:h-[545px]">
          <div className="bg-teal-400 rounded-[47px]"></div>
          <div className="bg-teal-400 rounded-[47px]"></div>
          <div className="bg-teal-400 rounded-[47px]"></div>
        </div>
      </div>
    </section>
  );
};

export default PatientStories;
