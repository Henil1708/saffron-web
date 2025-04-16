// components/MobileServicesPopover.jsx
import { useState } from "react";
import Link from "next/link";

const MobileServicesPopover = ({ onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-black text-base font-bold focus:outline-none"
      >
        Our Services
      </button>
      {isOpen && (
        <ul className="mt-2 ml-4 border-l border-gray-300 pl-4">
          <li>
            <Link
              href="/services/ai-guided-kinematic-knee-replacement"
              className="block text-black text-[12px] font-medium py-1"
              onClick={onLinkClick}
            >
              AI-guided Kinematic Knee Replacement
            </Link>
          </li>
          <li>
            <Link
              href="/services/fracture-management"
              className="block text-black text-[12px] font-medium py-1"
              onClick={onLinkClick}
            >
              Fracture Management
            </Link>
          </li>
          <li>
            <Link
              href="/services/arthroscopic-surgery"
              className="block text-black text-[12px] font-medium py-1"
              onClick={onLinkClick}
            >
              Arthroscopic Surgery
            </Link>
          </li>
          <li>
            <Link
              href="/services/hip-replacement"
              className="block text-black text-[12px] font-medium py-1"
              onClick={onLinkClick}
            >
              Hip Replacement
            </Link>
          </li>
          <li>
            <Link
              href="/services/spine-surgery"
              className="block text-black text-[12px] font-medium py-1"
              onClick={onLinkClick}
            >
              Spine Surgery
            </Link>
          </li>
          <li>
            <Link
              href="/services/revision-joint-replacement-surgery"
              className="block text-black text-[12px] font-medium py-1"
              onClick={onLinkClick}
            >
              Revision Joint Replacement Surgery
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileServicesPopover;
