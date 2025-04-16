// src/pages/about.js
import TextWithBgVec from "dizilus/components/shared/TextWithBgVec";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import OurTeam from "dizilus/components/Home/OurTeam";

export default function About() {
  const doctors = [
    {
      id: "doc-1",
      name: "Dr. Nitin Patel",
      education: "DNB Ortho FIAS (Pune)",
      position: "Joint Replacement Surgeon Arthroscopy Surgeon",
      image: "1.png",
      desc: "<b>Dr. Nitin Patel</b> is a highly qualified orthopaedic surgeon with a DNB in Orthopaedics and a Fellowship in Joint Replacement from Pune. He is dedicated to providing exceptional care and ensuring optimal recovery for his patients.",
    },
    {
      id: "doc-2",
      name: "Dr. Keyur Patel",
      education: "MS Ortho, FIAS (USA)",
      position: "Joint Replacement Surgeon Arthroscopy Surgeon",
      image: "2.png",
      desc: "<b>Dr. Keyur Patel </b>is a distinguished orthopaedic surgeon holding an MS in Orthopaedics and a Fellowship in Joint Replacement from the USA. He offers comprehensive solutions for joint-related issues, ensuring that each patient receives personalized attention and effective treatment.",
    },
    {
      id: "doc-3",
      name: "Dr. Kunjal Patel",
      education: "(MS. Ortho)",
      position: "Arthroscopy & Sports Injury Specialist",
      image: "3.png",
      desc: "<b>Dr. Kunjal Patel</b> specializes in arthroscopy and sports injury management. With extensive expertise in treating joint injuries and performing advanced minimally invasive procedures, Dr. Patel focuses on restoring mobility and enhancing the quality of life for athletes and active individuals.",
    },
    {
      id: "doc-4",
      name: "Dr. Sagar Sharma",
      education: "Spine Surgeon",
      position: "MBBS, MS, FISS, FIESS",
      medals: ["Orthopaedics", "Gold Medalist"],
      image: "4.png",
      desc: "<b>Dr. Sagar Sharma</b> is an accomplished spine surgeon with advanced fellowships in spinal surgery and endoscopic spine surgery. A gold medallist in Orthopaedics, Dr. Sharma is committed to delivering innovative and minimally invasive solutions for spinal disorders.",
    },
    {
      id: "doc-5",
      name: "Dr. Archanch Shah",
      education: "MD Anesthesia",
      position: "Anesthesiologist & Pain Management Specialist",
      image: "5.png",
      desc: "<b>Dr. Archanch Shah</b> is a highly skilled anaesthesiologist specializing in pain management. With extensive experience in administering anaesthesia and managing chronic pain conditions, Dr. Shah is dedicated to ensuring patient comfort and safety throughout medical procedures.",
    },
  ];

  return (
    <Layout>
      <section className="mt-10">
        <div className=" bg-[url('/images/our-team-bg-page.png')] py-8 sm:py-12 md:py-[118px] ">
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
          text-[#00ABAC]
        "
          >
            Experts that Serve their Expertise
          </h2>

          <div className="flex flex-col gap-8  mx-auto md:my-20 my-10 px-4 container">
            {doctors.map((doctor, index) => (
              <div
                key={doctor.id}
                className={` p-10 flex items-center gap-12 rounded-2xl ${
                  (index + 1) % 2 === 0 ? "bg-[#D9D9D9]" : "bg-[#BFEAEA]"
                }`}
              >
                <div
                  className={`flex flex-col items-center justify-center max-h-[401px] rounded-lg w-[353px]  `}
                >
                  {/* Image */}
                  <div>
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
                      <p className="mt-1 text-sm sm:text-base">
                        {doctor.position}
                      </p>
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
                <div className="flex-1 text-[20px]">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: doctor.desc,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
