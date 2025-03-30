// src/components/HeroSection.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
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
      image: "/images/slides/1.jpg",
      title: "Welcome to Our Website",
      subtitle: "Experience innovation and excellence.",
    },
    {
      id: 2,
      image: "/images/slides/2.jpg",
      title: "Transforming Healthcare",
      subtitle: "Advanced solutions for a brighter future.",
    },
    {
      id: 3,
      image: "/images/slides/3.jpg",
      title: "Innovate. Inspire. Impact.",
      subtitle: "Leading the way in surgical innovation.",
    },
    {
      id: 4,
      image: "/images/slides/4.jpg",
      title: "Innovate. Inspire. Impact.",
      subtitle: "Leading the way in surgical innovation.",
    },
  ];

  return (
    <section className="relative h-[60vh] md:h-[1027px]">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-full outline-none">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority
            />
            {/* Gradient overlay for improved text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
            {/* Slide text overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-white text-base md:text-2xl">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
