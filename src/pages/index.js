// src/pages/index.js
import AIKkr from "dizilus/components/Home/AIKkr";
import HeroSection from "dizilus/components/Home/HeroSection";
import OurServices from "dizilus/components/Home/OurServices";
import OurTeam from "dizilus/components/Home/OurTeam";
import PatientStories from "dizilus/components/Home/PatientStories";
import USPs from "dizilus/components/Home/USPs";
import Layout from "dizilus/components/Layout";
import SEO from "dizilus/components/SEO";
import Jumbotron from "dizilus/components/shared/Jumbotron";

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Informative Website - Home"
        description="Welcome to our informative website, rich in content and imagery."
        keywords="informative, website, images, SEO"
      />
      {/* Hero Section with a fading carousel */}
      <HeroSection />

      {/* Our Services Section */}
      <OurServices />

      {/* Our Team Section */}
      <OurTeam />

      {/* AI-KKR Section */}
      <AIKkr />

      {/* USPs Section */}
      <USPs />

      {/* Patient Stories Section */}
      <PatientStories />

      {/* Jumbotron with a call to action (reusable) */}
      <Jumbotron
        title="Join Us Today!"
        description="Get in touch and learn how we can help you achieve your goals."
        buttonText="Contact Us"
        buttonLink="/contact-us"
      />
    </Layout>
  );
}
