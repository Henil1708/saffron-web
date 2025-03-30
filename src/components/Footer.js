import MainForm from "./forms/MainForm";

// src/components/Footer.js
const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row py-8 sm:py-12 md:py-16 max-w-[1227px] mx-auto px-4 gap-5 justify-between">
        {/* Left Column */}
        <div className="md:w-1/2">
          <p className="max-w-full md:max-w-[924px] text-xl sm:text-2xl md:text-3xl lg:text-3xl">
            Share Your Challenges, and We Will Closely Review Them and Suggest
            the Treatment.
          </p>

          <div className="flex flex-col md:flex-row justify-between my-6 md:my-10 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-4xl font-medium text-[#EB6B1D]">
                Contact Details
              </h3>
              <p className="flex items-center justify-start text-xl sm:text-2xl md:text-2xl font-semibold">
                <img
                  src="/images/call-icon.svg"
                  alt="Call Icon"
                  className="w-8 sm:w-10 md:w-12 aspect-square object-contain"
                />
                <span className="ml-2">+91 90230 34906</span>
              </p>
              <p className="flex items-center justify-start text-xl sm:text-2xl md:text-2xl font-semibold">
                <img
                  src="/images/call-icon.svg"
                  alt="Call Icon"
                  className="w-8 sm:w-10 md:w-12 aspect-square object-contain"
                />
                <span className="ml-2">+91 74340 10109</span>
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <img
                src="/images/qr.svg"
                alt="QR Code"
                className="w-32 sm:w-40 md:w-48 aspect-square object-contain"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl md:text-4xl font-medium text-[#EB6B1D]">
              Meet us here
            </h3>
            <p className="flex items-start justify-start text-xl sm:text-2xl md:text-2xl mt-2">
              <img
                src="/images/location-icon.svg"
                alt="Location Icon"
                className="w-8 sm:w-10 md:w-12 aspect-square object-contain mt-1 sm:mt-2 mr-2"
              />
              419 - 4th floor, Saffron Business park, Opp. Jashodanagar BRTS,
              Jashodanagar Char rasta, Jashodanagar- Ahmedabad 382445
            </p>
          </div>
        </div>

        {/* Right Column (empty, ready for additional content if needed) */}
        <div className="md:w-[40%]">
          <MainForm />
        </div>
      </div>

      <p className="py-4 sm:py-6 text-center text-white bg-[#00ABAC] text-lg sm:text-xl md:text-xl">
        Copyright {new Date().getFullYear()} &copy;SaffronOrthopaedicHospital.
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
