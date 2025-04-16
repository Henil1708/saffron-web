// src/pages/about.js
import TextWithBgVec from "dizilus/components/shared/TextWithBgVec";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";
import PatientStories from "dizilus/components/Home/PatientStories";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us - Informative Website"
        description="Learn more about our mission and team."
        keywords="about, mission, team, informative website"
      />
      <PatientStories isDark={true} />
      <TextWithBgVec
        text="Gallery"
        className="
          text-white font-bold 
          text-[20px]  md:text-[38px] lg:text-[40px]
          mx-auto 
          px-6 sm:px-10 md:px-20 
          leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
         -my-10
          z-10
        "
      />
      <section className="relative bg-[url('/images/about-us-bg.webp')] py-40">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 gap-4">
            {Array.from({ length: 11 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="mb-4 break-inside-avoid ">
                <div className="relative w-full ">
                  <Image
                    src={`/images/gallery/${num}.png`}
                    alt={`Gallery image ${num}`}
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain rounded-3xl"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
