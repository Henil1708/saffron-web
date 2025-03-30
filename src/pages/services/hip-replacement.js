import Layout from "dizilus/components/Layout";
import Image from "next/image";
import React from "react";

const HipReplacementPage = () => {
  return (
    <Layout>
      {/* First Section */}
      <div className="bg-gradient-to-r from-[#009899] to-[#03BBBC]">
        <section className=" mx-auto flex flex-col lg:flex-row justify-center">
          <div className="w-full  py-10 flex-1/2 max-w-[500px] w-full mx-auto">
            <div className="relative w-[156.47px] aspect-square mx-auto mb-5">
              <Image
                src={"/images/services/4.svg"}
                objectFit="contain"
                fill
                alt="Service Icon"
              />
            </div>
            <h3 className="text-2xl font-bold text-center text-white">
              Hip
              <br /> Replacement
            </h3>
            <p className="text-center text-white font-light text-md mt-5">
              Restore Comfort and Mobility Hip replacement surgery restores
              function to a damaged hip joint, helping you live without pain and
              move freely again. Our advanced techniques ensure a smooth
              recovery with lasting results.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={"/images/services/right-4.png"}
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
                <span className="font-bold">Custom Implants: </span> Designed to
                fit your body for the best possible fit and comfort.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Muscle-Preserving: </span> Our
                approach minimizes damage to muscles, allowing quicker recovery.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Improved Mobility: </span> Restores
                hip function, making it easier to walk and move.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Long-Lasting Results: </span>
                Durable implants reduce the need for future surgeries.
                inflammation.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Pain-Free Living:</span> Relieves
                joint pain and discomfort.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full aspect-video relative ml-auto">
            <Image
              src={"/images/services/right-4-sec-2.png"}
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
            Why Choose Hip Replacement Surgery?{" "}
          </h3>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Personalized Care:</span> Custom
            implants for the best fit.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Faster Recovery: </span> Muscle-friendly
            techniques promote quicker healing.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Improved Mobility: </span>Get back to
            activities with less pain and more freedom.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default HipReplacementPage;
