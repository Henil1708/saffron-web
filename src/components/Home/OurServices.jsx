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
    imageDimensions: "h-[110px] w-[69px]",
  },
  {
    id: 2,
    title: "Fracture Management",
    description: "Comprehensive care for complex fractures.",
    link: "/services/fracture-management",
    imgUrl: "/images/services/2.svg",
    imageDimensions: "h-[100px] w-[99.92px]",
  },
  {
    id: 3,
    title: "Arthroscopic Surgery",
    description: "Minimally invasive techniques for quicker recovery.",
    link: "/services/arthroscopic-surgery",
    imgUrl: "/images/services/3.svg",
    imageDimensions: "h-[94px] w-[94px]",
  },
  {
    id: 4,
    title: "Hip Replacement",
    description: "Precision hip replacement with advanced technology.",
    link: "/services/hip-replacement",
    imgUrl: "/images/services/4.svg",
    imageDimensions: "h-[97px] w-[101.85px]",
  },
  {
    id: 5,
    title: "Spine Surgery",
    description: "State-of-the-art techniques for spinal health.",
    link: "/services/spine-surgery",
    imgUrl: "/images/services/5.svg",
    imageDimensions: "h-[130.26px] w-[42px]",
  },
  {
    id: 6,
    title: "Revision Joint Replacement Surgery",
    description: "Expert care for complex revision surgeries.",
    link: "/services/revision-joint-replacement-surgery",
    imgUrl: "/images/services/6.svg",
    imageDimensions: "h-[110px] w-[69px]",
  },
];

const OurServices = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      <TextWithBgVec
        text="Our Services"
        className="text-white font-bold text-3xl md:text-5xl lg:text-6xl mx-auto px-4 md:px-8 lg:px-16 max-w-full leading-tight md:leading-snug -mt-12 z-50"
      />
      <div className="max-w-full md:max-w-[1041px] mx-auto relative mt-8 md:mt-16 mb-12 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
