// src/components/OurServices.jsx
import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";
import ServiceCard from "../cards/ServiceCard";

// Sample services data
const services = [
  {
    id: 1,
    title: "AI-guided Kinematic Knee Replacement",
    description: "Innovative surgical solutions for precision outcomes.",
    link: "/services/ai-guided-kinematic-knee-replacement",
    imgUrl: "/images/services/1.svg",
    imageDimensions: "h-[72px] w-[45px] md:h-[110px] md:w-[69px]",
  },
  {
    id: 2,
    title: "Fracture Management",
    description: "Comprehensive care for complex fractures.",
    link: "/services/fracture-management",
    imgUrl: "/images/services/2.svg",
    imageDimensions: "h-[65px] w-[65px] md:h-[100px] md:w-[99.92px]",
  },
  {
    id: 3,
    title: "Arthroscopic Surgery",
    description: "Minimally invasive techniques for quicker recovery.",
    link: "/services/arthroscopic-surgery",
    imgUrl: "/images/services/3.svg",
    imageDimensions: "h-[61px] w-[61px] md:h-[94px] md:w-[94px]",
  },
  {
    id: 4,
    title: "Hip Replacement",
    description: "Precision hip replacement with advanced technology.",
    link: "/services/hip-replacement",
    imgUrl: "/images/services/4.svg",
    imageDimensions: "h-[63px] w-[66px] md:h-[97px] md:w-[101.85px]",
  },
  {
    id: 5,
    title: "Spine Surgery",
    description: "State-of-the-art techniques for spinal health.",
    link: "/services/spine-surgery",
    imgUrl: "/images/services/5.svg",
    imageDimensions: "h-[84px] w-[27px] md:h-[130.26px] md:w-[42px]",
  },
  {
    id: 6,
    title: "Revision Joint Replacement Surgery",
    description: "Expert care for complex revision surgeries.",
    link: "/services/revision-joint-replacement-surgery",
    imgUrl: "/images/services/6.svg",
    imageDimensions: "h-[72px] w-[45px] md:h-[110px] md:w-[69px]",
  },
];

const OurServices = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <TextWithBgVec
        text="Our Services"
        className="
          text-white font-bold 
          text-[20px]  md:text-[38px] lg:text-[40px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
          -mt-4 sm:-mt-6 md:-mt-22 
          z-10
          mb-15
        "
      />
      <div className="max-w-full md:max-w-[1041px] mx-auto relative mt-8 md:mt-16 mb-12 md:mb-24">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
