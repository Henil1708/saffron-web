// src/components/PatientStories.jsx
import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";

const PatientStories = ({ isDark = false }) => {
  return (
    <section className="mt-10">
      {/* <div
        className={`pb-8 ${isDark ? " mt-8" : ""} ${
          isDark ? "bg-gradient-to-r from-[#009899] to-[#03BBBC]" : ""
        }`}
      > */}
      <div
        className={`${
          isDark ? "bg-gradient-to-r from-[#009899] to-[#03BBBC]" : ""
        } py-8 sm:py-12 md:py-[118px] `}
      >
        <TextWithBgVec
          text="Patient Stories"
          className={`text-white font-bold 
          text-[20px]  md:text-[38px] lg:text-[40px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
          -mt-4 sm:-mt-6  ${isDark ? "md:-mt-40" : "md:-mt-50"}

          z-10
          mb-15`}
        />
        <div className="my-12">
          <h3
            className={`
          text-center 
          font-bold 
          ${isDark ? "text-white" : "text-[#3C3C3B] "}
          text-[24px] sm:text-[32px] md:text-[40px]
          leading-[28px] sm:leading-[36px] md:leading-[44.4px]
          max-w-[789px] mx-auto
          `}
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
      </div>
    </section>
  );
};

export default PatientStories;
