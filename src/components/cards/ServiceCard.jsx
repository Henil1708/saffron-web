import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";

const ServiceCard = ({ service }) => {
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center h-[293px] rounded-[41px] max-w-[291.2px] relative bg-[#00ABAC] p-4 mx-auto">
        <img
          src={service.imgUrl}
          alt={service.name}
          className={`w-20 ${service.imageDimensions}`}
        />
        <h3 className="font-bold text-[24px] mt-[30px] text-white text-center px-1">
          {service.title}
        </h3>
      </div>
      <TextWithBgVec
        text="Learn More"
        className="text-white font-bold text-[30px] mx-auto w-[210px] leading-[45px] px-[17px] absolute bottom-5"
      />
    </div>
  );
};

export default ServiceCard;
