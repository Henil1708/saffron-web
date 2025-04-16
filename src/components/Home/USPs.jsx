// src/components/USPs.jsx
import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";
import Image from "next/image";

const USPs = () => {
  const cardDetails = [
    {
      id: 1,
      title: "Expertise with Experience",
      description:
        "Our team of highly qualified orthopedic surgeons brings years of experience and specialized training in joint replacement and trauma surgery. We are committed to delivering exceptional care backed by our extensive expertise.",
    },
    {
      id: 2,
      title: "Accuracy and Precision",
      description:
        "We utilize advanced techniques to ensure the highest levels of accuracy and precision in every procedure. This approach significantly increases surgical outcomes and patient satisfaction.",
    },
    {
      id: 3,
      title: "Class 100 Modular Operation Theater",
      description:
        "Our Class 100 Modular Operation Theater is designed to maintain an ultra-clean environment, crucial for surgical success. Equipped with advanced filtration systems, it ensures that airborne contaminants are minimized, providing the highest standards of sterility.",
    },
    {
      id: 4,
      title: "Advanced Facilities",
      description:
        "Our advanced facilities include special rooms, suite rooms, premium rooms, stretcher lifts, cashless payment options, and acceptance of Ayushman cards or Mukhyamantri Amrutum cards. We also have IITV facilities for bones and maintain a clean and hygienic hospital premise.",
    },
    {
      id: 5,
      title: "24/7 Support",
      description:
        "Our dedicated team is available 24/7 to assist patients with any queries or emergencies. We prioritize patient care and support, ensuring you have access to medical assistance whenever you need it. We also have a 24/7 open medical store.",
    },
    {
      id: 6,
      title: "Digital X-ray Machine",
      description:
        "These digital X-ray machines provide high-resolution imaging for accurate diagnosis and treatment planning. This advanced technology minimizes radiation exposure while enhancing the clarity of results.",
    },
  ];

  return (
    <section className="relative ">
      <TextWithBgVec
        text="USPs"
        className="
          text-white font-bold 
          text-[20px]  md:text-[38px] lg:text-[40px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          w-[80%] sm:w-[364px] 
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
          absolute -bottom-4 sm:-bottom-6 md:-bottom-[35px]
          z-10
        "
      />
      <div className="bg-[#03BBBC] pt-20 pb-10">
        <div className="max-w-[1035px] mx-auto px-4">
          <h2
            className="
            text-center text-white font-bold 
            text-[20px]  md:text-[38px] lg:text-[40px]
            leading-tight sm:leading-[52.34px]
          "
          >
            Care for Orthopaedic Needs
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-8">
            {cardDetails.map((card) => (
              <div key={card.id} className="space-y-4">
                <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[227px] md:h-[227px] mx-auto">
                  <Image
                    src={`/images/usps-cards/${card.id}.png`}
                    fill
                    alt={card.title}
                  />
                </div>
                <h3
                  className="
                  text-white bg-[#008182] w-fit 
                  py-1 px-2 font-bold 
                  text-[12px] sm:text-[14px] md:text-[16px]
                  leading-normal mx-auto
                "
                >
                  {card.title}
                </h3>
                <p
                  className="
                  text-white text-center 
                  text-[10px] sm:text-[12px] md:text-[12px] 
                  font-medium mt-2
                "
                >
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPs;
