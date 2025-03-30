import Layout from "dizilus/components/Layout";
import Image from "next/image";
import React from "react";

const SpineSurgeryPage = () => {
  return (
    <Layout>
      {/* First Section */}
      <div className="bg-gradient-to-r from-[#009899] to-[#03BBBC]">
        <section className=" mx-auto flex flex-col lg:flex-row justify-center">
          <div className="w-full  py-10 flex-1/2 max-w-[500px] w-full mx-auto">
            <div className="relative w-[156.47px] aspect-square mx-auto mb-5">
              <Image
                src={"/images/services/5.svg"}
                objectFit="contain"
                fill
                alt="Service Icon"
              />
            </div>
            <h3 className="text-2xl font-bold text-center text-white">
              Spine Surgery
            </h3>
            <p className="text-center text-white font-light text-md mt-5">
              Comprehensive Care for Spine Health Our spine surgery services are
              designed to relieve pain and restore mobility using advanced,
              minimally invasive techniques. We focus on quick recovery and
              effective treatment for a range of spine conditions.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={"/images/services/right-5.png"}
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
                <span className="font-bold">Minimally Invasive: </span> Small
                incisions reduce pain and recovery time.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Precision Imaging: </span> Advanced
                imaging technology ensures accurate diagnosis.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Comprehensive Treatment: </span>
                Conditions treated include herniated discs, spinal stenosis, and
                scoliosis.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Faster Recovery: </span>
                Less tissue disruption leads to quicker healing and less
                discomfort.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Team Approach:</span>Our specialists
                work together to provide holistic care tailored to your needs.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full aspect-video relative ml-auto">
            <Image
              src={"/images/services/right-5-sec-2.png"}
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
            Why Choose Our Spine Surgery?
          </h3>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Advanced Techniques:</span> Minimally
            invasive methods ensure less pain and quicker recovery.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Personalized Care: </span> Treatment is
            customized for your specific spine condition.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Better Outcomes: </span>Fast recovery
            with minimal complications.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SpineSurgeryPage;
