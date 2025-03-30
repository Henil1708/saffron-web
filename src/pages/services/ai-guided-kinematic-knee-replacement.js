import Layout from "dizilus/components/Layout";
import Image from "next/image";
import React from "react";

const AiKKRPage = () => {
  return (
    <Layout>
      {/* First Section */}
      <div className="bg-gradient-to-r from-[#009899] to-[#03BBBC]">
        <section className="container mx-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 py-10">
            <div className="relative w-[106.47px] h-[254.32px] mx-auto">
              <Image
                src={"/images/services/1.svg"}
                objectFit="contain"
                fill
                alt="Service Icon"
              />
            </div>
            <h3 className="text-3xl font-bold text-center text-white">
              AI-guided Kinematic <br /> Knee Replacement
            </h3>
            <p className="text-center text-white font-light text-2xl mt-10">
              Precision and Personalization for Better Knee Health. AI-guided
              Kinematic Knee Replacement (KKR) combines artificial intelligence
              and advanced imaging to create a patient-specific surgery plan.
              This method offers higher accuracy, better outcomes, and quicker
              recovery compared to traditional Total Knee Replacement (TKR).
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full h-[659px] relative">
              <Image
                src={"/images/services/right-1.svg"}
                fill
                objectFit="contain"
                alt="Illustration"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Second Section */}
      <section className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[50px]">
        <div className="w-full lg:w-1/2 py-10 lg:py-20 pl-4 lg:pl-52">
          <ul className="mt-4 sm:mt-[31px] space-y-4">
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Enhanced Precision:</span> AI
                provides real-time feedback to ensure accurate knee implant
                alignment, tailored to your anatomy, improving function and
                longevity.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Personalized Approach:</span> Unlike
                TKR, which uses standard templates, KKR customizes the procedure
                based on your knee's natural movement.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Faster Recovery:</span> With minimal
                tissue disruption, KKR results in less pain, shorter hospital
                stays, and quicker rehabilitation.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Improved Functionality:</span> KR
                restores natural knee motion, reducing stiffness and discomfort
                common with TKR.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Long-Term Durability:</span> AI’s
                precision reduces the risk of implant wear and loosening,
                ensuring better durability and fewer revision surgeries.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-[600px] relative ml-auto">
            <Image
              src={"/images/services/right-1-sec-2.svg"}
              fill
              alt="Additional Illustration"
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-gradient-to-r from-[#009899] to-[#03BBBC]">
        <div className="container mx-auto py-10 px-4 lg:pl-52">
          <h3 className="text-white font-bold text-3xl mb-10">
            Why Choose AI-Assisted Knee Replacement?
          </h3>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Advanced Technology:</span> AI and
            robotics enhance precision for better implant placement.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Natural Movement Restored:</span>{" "}
            Improves comfort by replicating the knee’s natural motion.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Quicker Recovery:</span> Reduced tissue
            damage leads to faster healing.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Better Long-Term Results:</span> AI
            reduces wear and loosening, minimizing future complications.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AiKKRPage;
