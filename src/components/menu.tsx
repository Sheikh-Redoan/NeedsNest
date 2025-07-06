"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Menu() {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="py-4">
      <ul className="flex gap-10 text-lg font-normal justify-start text-stone-950 font-Poppins leading-7">
        <li className="relative">
          {" "}
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
          <Link href="#how-it-works">How it Works</Link>
        </li>
        <li>
          <Link href="#pricing">Pricing Plans</Link>
        </li>
        <li>
          <Link href="#faq">FAQ</Link>
        </li>
        <li>
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>
    </section>
  );
}
