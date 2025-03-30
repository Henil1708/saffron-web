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
                src={"/images/services/2.svg"}
                objectFit="contain"
                fill
                alt="Service Icon"
              />
            </div>
            <h3 className="text-2xl font-bold text-center text-white">
              Fracture <br /> Management
            </h3>
            <p className="text-center text-white font-light text-md mt-5">
              Effective Care for Broken Bones We offer timely, effective care
              for fractures to ensure proper healing and a smooth recovery.
              Whether you need a cast or surgery, we’ve got you covered.
            </p>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={"/images/services/right-2.png"}
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
                <span className="font-bold">Fast Diagnosis:</span> Quick
                assessment to determine the extent of the injury.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Accurate Imaging:</span> X-rays and
                scans to guide treatment.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Comprehensive Treatment:</span>{" "}
                Includes casts, splints, and surgery when necessary.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Post-Surgery Rehab:</span> Physical
                therapy for restoring strength and flexibility.
              </span>
            </li>
            <li className="flex gap-3 sm:gap-[16px] text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[30px] font-normal text-black">
              <span className="w-[14px] h-[14px] rounded-full bg-[#EB6B1D] mt-2"></span>
              <span className="flex-1">
                <span className="font-bold">Quick Healing:</span> Minimizes
                recovery time and supports bone healing.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="w-full h-full aspect-square relative ml-auto">
            <Image
              src={"/images/services/right-2-sec-2.png"}
              fill
              objectFit="contain"
              alt="Additional Illustration"
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="bg-gradient-to-r from-[#009899] to-[#03BBBC]">
        <div className="container mx-auto py-10 px-4 lg:pl-52">
          <h3 className="text-white font-bold text-3xl mb-10">
            Why Choose Our Fracture Care?
          </h3>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Immediate Attention:</span> Fast
            diagnosis and treatment.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Comprehensive Treatment:</span>From
            casts to surgery, we offer complete fracture care.
          </p>
          <p className="text-white mb-8 text-xl">
            <span className="font-bold">Faster Recovery: </span> Post-treatment
            rehabilitation to get you back on your feet quickly.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FractureManagementPage;
