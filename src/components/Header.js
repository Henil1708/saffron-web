// components/Header.jsx
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesPopover from "./ServicesPopover";
import MobileServicesPopover from "./MobileServicesPopover";
import { CiMenuFries } from "react-icons/ci";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto flex items-center justify-between pt-16 pb-14 px-4">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="block relative w-28 md:w-36 lg:w-48">
            <Image
              src="/images/logo-header.svg"
              alt="Logo"
              layout="responsive"
              width={104}
              height={25}
              priority
            />
          </Link>
        </div>
        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="text-black text-xs md:text-sm font-bold hover:underline"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className="text-black text-xs md:text-sm font-bold hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/ai-kkr"
            className="text-black text-xs md:text-sm font-bold hover:underline"
          >
            AI-KKR
          </Link>
          <ServicesPopover />
          <Link
            href="/our-team"
            className="text-black text-xs md:text-sm font-bold hover:underline"
          >
            Our Team
          </Link>
          <Link
            href="/usps"
            className="text-black text-xs md:text-sm font-bold hover:underline"
          >
            USPs
          </Link>
          <Link
            href="/patient-stories"
            className="text-black text-xs md:text-sm font-bold hover:underline"
          >
            Patient Stories
          </Link>
        </nav>
        {/* Right: Contact Button & Mobile Toggle */}
        <div className="flex items-center">
          <Link
            href="/contact-us"
            className="hidden md:block text-white font-semibold bg-[#00ABAC] text-xl md:text-2xl px-4 py-2 rounded-full hover:bg-[#549999]"
          >
            Contact Us
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-4 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <MdClose className="text-xl" />
            ) : (
              <CiMenuFries className="text-xl" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            <li>
              <Link
                href="/"
                className="block text-black text-xs md:text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="block text-black text-xs md:text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/ai-kkr"
                className="block text-black text-xs md:text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                AI-KKR
              </Link>
            </li>
            <li>
              <MobileServicesPopover
                onLinkClick={() => setMobileMenuOpen(false)}
              />
            </li>
            <li>
              <Link
                href="/our-team"
                className="block text-black text-xs md:text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/usps"
                className="block text-black text-xs md:text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                USPs
              </Link>
            </li>
            <li>
              <Link
                href="/patient-stories"
                className="block text-black text-xs md:text-sm font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Patient Stories
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="block text-white font-semibold bg-[#00ABAC] text-base md:text-lg text-center py-2 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
