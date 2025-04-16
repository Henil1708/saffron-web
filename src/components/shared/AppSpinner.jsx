// src/components/AppSpinner.jsx
import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import spinnerData from "../../animation/loading.json"; // make sure this JSON lives under src/
import Image from "next/image";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function AppSpinner() {
  const lottieRef = useRef(null);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="w-56 ">
        <Lottie
          lottieRef={lottieRef}
          animationData={spinnerData}
          loop={true} // play only once
          autoplay
        />
      </div>
      <div className="block relative w-28 md:w-36 lg:w-48">
        {/* your logo */}
        <Image
          src="/images/logo-header.svg"
          alt="Logo"
          layout="responsive"
          width={104}
          height={25}
          priority
        />
      </div>
    </div>
  );
}
