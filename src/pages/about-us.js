// src/pages/about.js
import TextWithBgVec from "dizilus/components/shared/TextWithBgVec";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us - Informative Website"
        description="Learn more about our mission and team."
        keywords="about, mission, team, informative website"
      />
      <section className="relative bg-[url('/images/about-us-bg.webp')] bg-cover bg-center py-12">
        <TextWithBgVec
          text="About Us"
          className="
            text-white font-bold 
            text-[20px]  md:text-[38px] lg:text-[40px]
            mx-auto 
            px-6 sm:px-10 md:px-20 
            w-[80%] sm:w-[364px] 
            leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[75px]
            absolute -top-4 sm:-top-6 md:-top-8 lg:-top-12
            z-10
          "
        />
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h2 className="text-[#00ABAC] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Saffron Orthopaedic Hospital
            </h2>
            <p className="text-[#EB6B1D] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mt-4">
              A Place Where We Fight <br /> for Bone Health
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6">
              At Saffron Orthopaedic Hospital, we are committed to delivering
              health solutions that contribute to patients’ wellness. We are the
              first hospital in East Ahmedabad that provides artificial
              intelligence-guided kinematic knee replacement that makes a real
              difference in a patient's life. It’s our motto to “Move Freely,
              Live Fully” and this motto drives and inspires us to offer the
              best in our solutions. Our founders have more than 10 years of
              experience in this field which helps us care for our patients
              through every pain. We believe that everyone has the right to live
              happily and we put our best possible efforts to make this
              possible. In these 10 years, we have gained the trust of more than
              12000 patients, this is the identity of our hospital.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/about-us-section.webp"
                fill
                className="object-contain right-0"
                alt="About Us Section Image"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
