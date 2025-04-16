// src/components/HeroSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HeroSection = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  const slides = [
    {
      id: 1,
      image: "/images/slides/1.png",
      title: "Welcome to Our Website",
      subtitle: "Experience innovation and excellence.",
    },
    {
      id: 2,
      image: "/images/slides/2.png",
      title: "Transforming Healthcare",
      subtitle: "Advanced solutions for a brighter future.",
    },
    {
      id: 3,
      image: "/images/slides/3.png",
      title: "Innovate. Inspire. Impact.",
      subtitle: "Leading the way in surgical innovation.",
    },
    // {
    //   id: 4,
    //   image: "/images/slides/4.png",
    //   title: "Innovate. Inspire. Impact.",
    //   subtitle: "Leading the way in surgical innovation.",
    // },
  ];

  return (
    <section className="relative  h-[20vh]  md:h-[600px]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative  h-[20vh] md:h-[600px] outline-none"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
