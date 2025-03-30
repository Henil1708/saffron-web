import Layout from "dizilus/components/Layout";
import Image from "next/image";
import React from "react";

const FractureManagementPage = () => {
  return (
    <Layout>
      {/* First Section */}
      <div className="bg-gradient-to-r from-[#009899] to-[#03BBBC]">
        <section className=" mx-auto flex flex-col lg:flex-row justify-center">
          <div className="w-full  py-10 flex-1/2 max-w-[500px] w-full mx-auto">
            <div className="relative w-[156.47px] aspect-square mx-auto mb-5">
              <Image
                src={"/images/services/3.svg"}
                objectFit="contain"
                fill
                alt="Service Icon"
              />
            </div>
            <h3 className="text-2xl font-bold text-center text-white">
              Arthroscopic
              <br /> Surgery
            </h3>
            <p className="text-center text-white font-light text-md mt-5">
              Precise Solutions for Joint Pain Arthroscopic surgery uses small
              instruments and cameras to diagnose and treat joint issues with
              minimal invasion. It offers a quicker, more comfortable recovery
              compared to traditional open surgery.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={"/images/services/right-3.png"}
              fill
              objectFit="contain"
              className="right-0"
              alt="Illustration"
            />
          </div>
        </section>
      </div>

      {/* Second Section */}
      <section className="container mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[50px]">
        <div className="w-full lg:w-1/2 py-10 lg:py-20 pl-4 ">
          <ul className="mt-4 sm:mt-[31px] space-y-4">
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Small Incisions: </span> Minimizes
                scarring and recovery time.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Targeted Treatment: </span> Fixes
                specific joint problems without disturbing surrounding tissues.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Advanced Imaging: </span> Clear
                visuals to guide precise surgery.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Conditions Treated: </span> Includes
                ligament tears, cartilage damage, and joint inflammation.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Quicker Recovery:</span> Reduced
                pain and shorter hospital stays.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full aspect-video relative ml-auto">
            <Image
              src={"/images/services/right-3-sec-2.png"}
              fill
              objectFit="contain"
              alt="Additional Illustration"
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-gradient-to-r from-[#009899] to-[#03BBBC]">
        <div className="container mx-auto py-10 px-4 ">
          <h3 className="text-white font-bold text-3xl mb-10">
            Why Choose Arthroscopic Surgery?
          </h3>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Minimally Invasive:</span> Small cuts
            for quick recovery and less discomfort.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Faster Healing:</span> Smaller incisions
            mean less pain and faster return to daily life.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Effective Treatment: </span>Fixes joint
            issues with precision and minimal risk.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FractureManagementPage;
