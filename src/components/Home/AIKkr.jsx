// src/components/AIKkr.jsx
import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";
import Image from "next/image";

const AIKkr = () => {
  return (
    <section>
      <TextWithBgVec
        text="AI-KKR"
        className="
          text-white font-bold 
          text-[20px]  md:text-[38px] lg:text-[40px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          w-[80%] sm:w-[364px] 
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
          -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10
          z-10
        "
      />
      <div className="max-w-[1061px] mx-auto px-4">
        <h3
          className="
          text-center 
          text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px]
          font-medium 
          leading-[28px] sm:leading-[40px] md:leading-[45.6px]
          text-[#3C3C3B]
          mt-8 sm:mt-12 md:mt-[70px]
        "
        >
          AI-Guided Kinematic Knee Replacement (KKR)
          <br />– A Smarter Approach to Knee Health
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-[37px] mt-8 sm:mt-[70px]">
          <div className="flex-1">
            <p
              className="
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[24px] sm:leading-[28px] md:leading-[30px]
              font-normal text-[#3C3C3B]
            "
            >
              AI-Guided Kinematic Knee Replacement (KKR) is an advanced knee
              surgery that improves accuracy using artificial intelligence.
              Unlike standard Total Knee Replacement (TKR), which follows a
              fixed template, KKR adjusts to the patient’s natural knee
              movement.
            </p>
            <h3
              className="
              text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]
              font-bold text-white bg-[#00ABAC] 
              w-fit px-4 sm:px-[23px] mt-4 sm:mt-[42px]
            "
            >
              AI-Guided
            </h3>
            <ul className="mt-4 sm:mt-[31px] space-y-4">
              <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
                <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
                <span className="flex-1">
                  AI-Assisted Precision: AI analyses CT scan of knee joint to
                  help plan and guide the Kinematic Knee Replacement.
                </span>
              </li>
              <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black mt-6 sm:mt-[37px]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
                <span className="flex-1">
                  Restoring Natural Motion: The implant is positioned to match
                  how the patient’s knee used to move.
                </span>
              </li>
              <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black mt-6 sm:mt-[37px]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
                <span className="flex-1">
                  Faster Recovery: More accurate placement can reduce discomfort
                  and improve early movement.
                </span>
              </li>
              <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black my-6 sm:my-[37px]">
                <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
                <span className="flex-1">
                  Longer-Lasting Results: Better alignment means less wear on
                  the implant over time.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-[397px] relative h-[250px] sm:h-[350px] md:h-[464.42px] bg-amber-100">
            <Image
              src="/images/doctors/dr-nitin-patel.png"
              fill
              alt="Doctor Nitin Patel"
            />
          </div>
        </div>
        <p
          className="
          text-[16px] sm:text-[20px] md:text-[24px]
          mb-6 sm:mb-[97px] 
          leading-[20px] sm:leading-[28px] md:leading-[36px]
          font-normal text-[#3C3C3B]
        "
        >
          KKR helps patients move with more ease, experience less pain, and
          return to daily life sooner than with traditional methods.
        </p>
      </div>
    </section>
  );
};

export default AIKkr;
