"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

// It's a React convention to use PascalCase for component names.
export default function Menu() {
  // Explicitly type the state hook. `isDropdownOpen` will always be a boolean.
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="py-4">
      {/* Use 'relative' for positioning the dropdown */}
      <ul className="flex gap-10 text-lg font-normal justify-start text-stone-950 font-Poppins leading-7">
        {/* Categories item with onClick event */}
        <li className="relative">
          {" "}
          {/* Use 'relative' for positioning the dropdown */}
          <p
            className="flex justify-center items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            Categories <IoIosArrowDown />
          </p>
          {/* The Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-10">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Category 1
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Category 2
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Category 3
              </li>
            </ul>
          )}
        </li>
        <li>
          <p>About</p>
        </li>
        <li>
          <p>How it Works</p>
        </li>
        <li>
          <p>Pricing Plans</p>
        </li>
        <li>
          <p>FAQ</p>
        </li>
        <li>
          <p>Contact Us</p>
        </li>
      </ul>
    </section>
  );
}
