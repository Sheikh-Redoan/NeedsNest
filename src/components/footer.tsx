import assets from "@/assets";
import { AtSign, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact">
      {/* Footer Nav Section */}
      <section className="bg-white border-t border-[#E8E8E8] py-25">
        <div className="container-div flex flex-col items-start md:items-center md:flex-row justify-between max-md:gap-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-[44px] h-[44px]">
                <Image
                  src={assets.logo}
                  alt="NeedsNest Logo"
                  width={100}
                  height={100}
                />
              </div>
              <h1 className="text-2xl font-normal">NeedsNest</h1>
            </div>
            <p className="text-sm leading-[120%] max-w-sm mt-4">
              Absolutely. We use secure login and encryption protocols to
              protect your personal data and only share what&apos;s necessary to
              complete the connection between users.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
            {/* Section 1: Navigation Links */}
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                How It Works
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Post a Need
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Become a Provider
              </a>
            </div>

            {/* Section 2: Legal Links */}
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                FAQ
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 text-base"
              >
                Terms of Service
              </a>
            </div>

            {/* Section 3: Contact Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gray-600 mr-3 mt-1" />
                  <p className="text-gray-700 text-base max-w-sm md:max-w-52">
                    23 Murray St, New York, NY 10007, USA
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-600 mr-3" />
                  <p className="text-gray-700 text-base">+880-123-456789</p>
                </div>
                <div className="flex items-center">
                  <AtSign className="h-5 w-5 text-gray-600 mr-3" />
                  <p className="text-gray-700 text-base">
                    support@needsnest.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-[#004964] py-5">
        <div className="container-div flex justify-between items-center">
          <p className="text-[16px] font-normal text-white">
            Copyright © 2023 Bala- All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <FaFacebook className="w-6 h-6 text-white" />
            <FaInstagram className="w-6 h-6 text-white" />
            <FaTwitter className="w-6 h-6 text-white" />
          </div>
        </div>
      </section>
    </footer>
  );
}
