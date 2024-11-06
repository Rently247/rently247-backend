"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 text-gray-800 pb-2 border-b border-gray-200 ${
        isScrolled ? "shadow-md border-black" : ""
      }`}
      style={{ backgroundColor: isScrolled ? "rgba(222, 224, 250)" : "white" }}
      aria-label="Primary Navigation"
    >
      <div className="container mx-auto px-6 py-3 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-semibold">
          <div style={{ width: "120px", height: "40px" }}>
            <a
              href="/"
              className="flex items-center"
              aria-label="Rently247 Home"
            >
              <Image
                src="/logo.png"
                alt="Rently247"
                width={120}
                height={40}
                objectFit="contain"
              />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="flex space-x-4 items-center">
            {["Properties", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`/${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-300 hover:text-gray-700`}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/login"
                className={`py-2 px-4 text-sm font-medium rounded-md transition-colors duration-300 bg-gray-800 text-white hover:bg-gray-900`}
              >
                Log in
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className={`py-2 px-4 ml-2 text-sm font-medium rounded-md border transition-colors duration-300border-gray-800 text-gray-800 hover:bg-gray-200 ${
                  isScrolled ? "border-gray-900" : ""
                }`}
              >
                Sign up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
