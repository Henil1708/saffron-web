// src/components/OurTeam.jsx
import React from "react";
import TextWithBgVec from "../shared/TextWithBgVec";

const OurTeam = () => {
  const doctors = [
    {
      id: "doc-1",
      name: "Dr. Nitin Patel",
      education: "DNB Ortho FIAS (Pune)",
      position: "Joint Replacement Surgeon Arthroscopy Surgeon",
      image: "1.png",
    },
    {
      id: "doc-2",
      name: "Dr. Keyur Patel",
      education: "MS Ortho, FIAS (USA)",
      position: "Joint Replacement Surgeon Arthroscopy Surgeon",
      image: "2.png",
    },
    {
      id: "doc-3",
      name: "Dr. Kunjal Patel",
      education: "(MS. Ortho)",
      position: "Arthroscopy & Sports Injury Specialist",
      image: "3.png",
    },
    {
      id: "doc-4",
      name: "Dr. Sagar Sharma",
      education: "Spine Surgeon",
      position: "MBBS, MS, FISS, FIESS",
      medals: ["Orthopaedics", "Gold Medalist"],
      image: "4.png",
    },
    {
      id: "doc-5",
      name: "Dr. Archanch Shah",
      education: "MD Anesthesia",
      position: "Anesthesiologist & Pain Management Specialist",
      image: "5.png",
    },
  ];

  return (
    <section>
      <div className="bg-gradient-to-r from-[#009899] to-[#03BBBC] py-8 sm:py-12 md:py-[118px] ">
        <TextWithBgVec
          text="Our Team"
          className="
          text-white font-bold 
          text-[20px]  md:text-[38px] lg:text-[40px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
          -mt-4 sm:-mt-6 md:-mt-52 lg:-mt-40
          z-10
          mb-15
        "
        />
        <h2
          className="
          text-center 
          text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]
          font-bold 
          leading-[28px] sm:leading-[36px] md:leading-[44px] lg:leading-[52.34px]
          text-white
        "
        >
          Experts that Serve their Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-6 container mx-auto md:my-20 my-10 px-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="flex flex-col items-center justify-center rounded-lg w-full sm:w-1/2 md:w-1/4 "
            >
              {/* Image */}
              <div className="w-1/2">
                <img
                  src={`/images/doctors/${doctor.image}`}
                  alt={doctor.name}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
              </div>
              {/* Doctor Info */}
              <div className="w-full text-center h-full rounded-3xl border overflow-hidden bg-white text-black">
                <h3 className="text-2xl font-bold text-white py-4 bg-gradient-to-r from-[#00ABAC] to-[#036666]">
                  {doctor.name}
                </h3>
                <div className="p-3 px-4">
                  <p className="mt-2 text-sm sm:text-base">
                    {doctor.education}
                  </p>
                  <p className="mt-1 text-sm sm:text-base">{doctor.position}</p>
                  {doctor.medals && (
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {doctor.medals.map((medal, idx) => (
                        <span key={idx} className="px-3 py-1  rounded-full">
                          ({medal})
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
