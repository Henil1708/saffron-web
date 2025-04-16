// components/ServicesPopover.jsx
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const ServicesPopover = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex items-center" ref={popoverRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative text-black text-xs md:text-sm  hover:underline font-bold focus:outline-none cursor-pointer ${
          isOpen ? "text-[#00ABAC]" : "text-black"
        }`}
      >
        Our Services
        {isOpen && (
          <span className="absolute -right-4 top-1/2 -translate-y-1/3 ml-1">
            <Image
              src="/icons/drop-down-icon.svg"
              alt="Dropdown Icon"
              width={12}
              height={12}
            />
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-[300px] w-[168px] bg-white border-t-[4px] border-[#00ABAC] shadow-lg z-20">
          <ul className="py-2">
            <li>
              <Link
                href="/services/ai-guided-kinematic-knee-replacement"
                className="block px-4 py-2 hover:bg-gray-100 text-[12px] font-medium"
              >
                AI-guided Kinematic Knee Replacement
              </Link>
            </li>
            <li>
              <Link
                href="/services/fracture-management"
                className="block px-4 py-2 hover:bg-gray-100 text-[12px] font-medium"
              >
                Fracture Management
              </Link>
            </li>
            <li>
              <Link
                href="/services/arthroscopic-surgery"
                className="block px-4 py-2 hover:bg-gray-100 text-[12px] font-medium"
              >
                Arthroscopic Surgery
              </Link>
            </li>
            <li>
              <Link
                href="/services/hip-replacement"
                className="block px-4 py-2 hover:bg-gray-100 text-[12px] font-medium"
              >
                Hip Replacement
              </Link>
            </li>
            <li>
              <Link
                href="/services/spine-surgery"
                className="block px-4 py-2 hover:bg-gray-100 text-[12px] font-medium"
              >
                Spine Surgery
              </Link>
            </li>
            <li>
              <Link
                href="/services/revision-joint-replacement-surgery"
                className="block px-4 py-2 hover:bg-gray-100 text-[12px] font-medium"
              >
                Revision Joint Replacement Surgery
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ServicesPopover;
