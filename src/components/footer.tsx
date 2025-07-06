import assets from "@/assets";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section>
      <div className="bg-white border-t border-[#E8E8E8]">
        <div className="py-16 container-div flex flex-col items-center md:flex-row justify-between">
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

          <div className="flex gap-8 items-start">
            <div>nav links here</div>
            <div>nav links here</div>
            <div>nav links here</div>
          </div>
        </div>
      </div>
    </section>
  );
}
