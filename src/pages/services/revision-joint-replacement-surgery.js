import Layout from "dizilus/components/Layout";
import Image from "next/image";
import React from "react";

const RevisionJoinReplacementSurgeryPage = () => {
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
              Revision Joint <br /> Replacement Surgery
            </h3>
            <p className="text-center text-white font-light text-md mt-5">
              Correcting Previous Implants for Better Results Revision joint
              replacement surgery is for patients whose previous implants have
              failed. We offer a solution to restore function and comfort with
              advanced techniques and durable materials.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={"/images/services/right-6.png"}
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
                <span className="font-bold">Thorough Diagnosis: </span> Detailed
                scans to identify implant issues.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Precise Repairs: </span> Replaces or
                fixes worn-out or loose implants.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Minimized Complications: </span>
                Focus on preserving natural bone for better healing.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Long-Term Benefits: </span>
                Advanced implants reduce wear and extend the life of your joint.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Holistic Care:</span> Post-surgery
                support to ensure smooth recovery.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full aspect-video relative ml-auto">
            <Image
              src={"/images/services/right-6-sec-2.png"}
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
            Why Choose Revision Joint Replacement?
          </h3>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Tailored Solutions:</span> Customized
            care to fix previous implant issues.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Better Outcomes: </span> Enhanced
            durability and fewer complications.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Faster Recovery: </span>Focus on
            reducing pain and improving function quickly.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default RevisionJoinReplacementSurgeryPage;
