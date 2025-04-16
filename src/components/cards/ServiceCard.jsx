import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";
import Link from "next/link";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center md:h-[293px] h-full md:aspect-square rounded-[41px] max-w-[291.2px] relative bg-[#00ABAC] p-4 mx-auto">
        <img
          src={service.imgUrl}
          alt={service.name}
          className={`w-20 ${service.imageDimensions}`}
        />
        <h3 className="font-bold md:text-[24px] text-xs mt-[30px] text-white text-center px-1">
          {service.title}
        </h3>
      </div>
      <Link href={service?.link} className="w-fit">
        <TextWithBgVec
          text="Learn More"
          className="text-white font-bold text-xs md:text-[30px] mx-auto w-[210px] leading-[45px] px-[17px] absolute bottom-5"
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
