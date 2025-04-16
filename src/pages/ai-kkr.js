// src/pages/about.js
import TextWithBgVec from "dizilus/components/shared/TextWithBgVec";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";

export default function AiKKR() {
  const cards = [
    {
      id: "ai-kkr-1",
      title: "Enhanced Precision",
      description:
        "AI-guided systems provide real-time feedback during surgery, ensuring accurate knee joint alignment tailored to the patient’s natural anatomy. This leads to better functionality and longevity of the implant.",
    },
    {
      id: "ai-kkr-2",
      title: "Personalized Approach",
      description:
        "Kinematic knee replacement focuses on restoring the patient’s natural knee motion by replicating the original joint kinematics, improving post-surgery comfort and mobility compared to the one-size-fits-all approach of TKR.",
    },
    {
      id: "ai-kkr-3",
      title: "Faster Recovery",
      description:
        "With improved surgical accuracy and minimal disruption to surrounding tissues, patients experience reduced pain, shorter hospital stays, and quicker rehabilitation timelines.",
    },
    {
      id: "ai-kkr-4",
      title: "Improved Long - Term Outcomes",
      description:
        "AI assistance reduces the risk of implant wear and loosening, leading to greater durability and patient satisfaction, minimizing the need for revision surgeries.",
    },
  ];

  return (
    <Layout>
      <SEO
        title="About Us - Informative Website"
        description="Learn more about our mission and team."
        keywords="about, mission, team, informative website"
      />
      <section className="relative bg-gradient-to-r from-[#009899] to-[#03BBBC]  py-8 px-4">
        <TextWithBgVec
          text="AI-KKR"
          className="
            text-white font-bold 
            text-xl sm:text-2xl md:text-3xl lg:text-4xl
            mx-auto 
            px-4 sm:px-6 md:px-8 
            w-[80%] sm:w-[300px] 
            leading-tight sm:leading-snug md:leading-normal lg:leading-normal
            absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6
            z-10
          "
        />
        <h1 className="container mx-auto text-4xl sm:text-5xl md:text-6xl text-white mb-6 mt-12">
          First, Let understand these{" "}
          <span className="font-bold">words individually.</span>
        </h1>
        <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-8">
          {/* Left Column – Text Content */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-[#EB6B1D] bg-white w-fit px-4 mt-4">
              AI-Guided
            </h3>
            <p className="mt-4 text-white text-base sm:text-lg md:text-xl lg:text-xl">
              Artificial Intelligence (AI) refers to advanced computer
              algorithms capable of analyzing vast amounts of data and assisting
              in decision-making.
            </p>
            <h4 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mt-6">
              Role in Surgery:
            </h4>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  AI-Assisted Precision: AI analyses CT scan of knee joint to
                  help plan and guide the Kinematic Knee Replacement.
                </span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Restoring Natural Motion: The implant is positioned to match
                  how the patient’s knee used to move.
                </span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Faster Recovery: More accurate placement can reduce discomfort
                  and improve early movement.
                </span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Longer-Lasting Results: Better alignment means less wear on
                  the implant over time.
                </span>
              </li>
            </ul>
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-[#EB6B1D] bg-white w-fit px-4 mt-6">
              Kinematic
            </h3>
            <p className="mt-4 text-white text-base sm:text-lg md:text-xl lg:text-xl">
              Kinematics refers to motion and movement patterns.
            </p>
            <h4 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mt-6">
              Relevance in Knee Replacement:
            </h4>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-xl mt-3">
              Kinematic knee replacement restores the patient's natural knee
              movement. It aligns the prosthetic components based on the
              patient’s unique anatomy rather than using a standardized
              approach.
            </p>
            <h4 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mt-6">
              Techniques Used:
            </h4>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Personalized mapping of the knee joint's ligaments and bone
                  structure.
                </span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Ensuring the implant mimics the original motion of the natural
                  knee.
                </span>
              </li>
            </ul>
            <h4 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mt-6">
              Benefits:
            </h4>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>Enhances knee functionality and range of motion.</span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Reduces wear and tear on the prosthetic, increasing its
                  lifespan.
                </span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Provides a more natural feel and movement post-surgery.
                </span>
              </li>
            </ul>
            <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold text-[#EB6B1D] bg-white w-fit px-4 mt-6">
              Knee Replacement
            </h3>
            <p className="mt-4 text-white text-base sm:text-lg md:text-xl lg:text-xl">
              Knee replacement surgery involves replacing damaged parts of the
              knee joint with artificial components.
            </p>
            <h4 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mt-6">
              Process:
            </h4>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Removal of damaged cartilage and bone from the joint.
                </span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>
                  Replacement with metal or plastic components replicating
                  natural joint movement.
                </span>
              </li>
            </ul>
            <h4 className="text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold mt-6">
              Benefits:
            </h4>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>Relieves pain.</span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>Restores function.</span>
              </li>
              <li className="flex gap-2 text-sm sm:text-base md:text-lg text-white mt-3">
                <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
                <span>Improves overall quality of life.</span>
              </li>
            </ul>
          </div>
          {/* Right Column – Image Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 relative">
            <div className="w-full max-w-md mx-auto relative aspect-[1.17] ">
              <Image
                src="/images/doctors/dr-nitin-patel.png"
                fill
                alt="Doctor Nitin Patel"
                className="object-contain"
              />
            </div>
            <div className=" right-0 bottom-0">
              <div className="w-full mx-auto mt-auto relative aspect-[9/16]">
                <Image
                  src="/images/bone-ai-kkr.webp"
                  fill
                  alt="Bone AI-KKR"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/images/ai-guided-vs.webp')] bg-cover bg-bottom min-h-[400px] md:min-h-[600px] flex items-center justify-center py-8">
        <div className="container mx-auto px-4">
          <h3 className="text-[#00ABAC] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Ai-guided KKR vs TKR
          </h3>
          <ul className="mt-3 space-y-3">
            <li className="flex gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-black">
              <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
              <span>
                KKR uses AI and robotics for highly accurate implant alignment,
                while TKR relies on manual expertise and standard tools, leading
                to potential variations.
              </span>
            </li>
            <li className="flex gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-black">
              <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
              <span>
                KKR personalizes the procedure based on the patient’s natural
                knee movement, whereas TKR follows a generalized method using
                standard templates.
              </span>
            </li>
            <li className="flex gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-black">
              <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
              <span>
                KKR allows faster recovery due to precise alignment and minimal
                tissue damage, while TKR recovery may take longer due to greater
                tissue trauma.
              </span>
            </li>
            <li className="flex gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-black">
              <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
              <span>
                KKR offers a more natural range of motion, reducing stiffness,
                while TKR may feel less natural and lead to discomfort.
              </span>
            </li>
            <li className="flex gap-2 text-xs sm:text-sm md:text-base lg:text-lg text-black">
              <span className="w-3 h-3 rounded-full bg-[#EB6B1D] mt-1"></span>
              <span>
                KKR is more expensive due to advanced technology, whereas TKR is
                more affordable and widely available.
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#009899] to-[#03BBBC] py-12 md:py-16">
        <TextWithBgVec
          text="A New Era in Knee Care: Moving Beyond Traditional Replacement"
          className="
            text-white font-bold 
            text-base sm:text-base md:text-md lg:text-xl
            mx-auto 
            px-4 sm:px-6 md:px-8 
            w-[80%] sm:w-[300px] 
            leading-tight sm:leading-snug md:leading-normal lg:leading-normal
            absolute -top-2 sm:-top-3 md:-top-4 lg:-top-6
            z-10
          "
        />
        <div className="container mx-auto px-4">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Reasons why AI-guided Kinematic Knee Replacement is preferred over
            TKR
          </h2>
          <div className="lg:max-w-[800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#008182] rounded-lg p-6 flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {card.title}
                </h3>
                <p className="text-white font-light">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
