import Image from "next/image";
import Link from "next/link";
import React from "react";
import assets from "@/assets";
import { X } from "lucide-react";
import Menu from "./menu";

type MobileNavProps = {
  closeMobileMenu: () => void;
  drawerRef: React.RefObject<HTMLDivElement>;
  isMobileMenuOpen: boolean;
};

export default function MobileNav({
  closeMobileMenu,
  drawerRef,
  isMobileMenuOpen,
}: MobileNavProps) {
  return (
    <div
      className="fixed inset-0 bg-gray-300/30 backdrop-blur-sm z-40 md:hidden"
      onClick={closeMobileMenu}
    >
      <div
        ref={drawerRef}
        className={`fixed top-0 left-0 w-70 xs:w-72 sm:w-80 h-full bg-white shadow-lg p-6 transition-all duration-500 ease-in-out z-50
              ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <div
        ref={drawerRef}
        className={`fixed top-0 left-0 w-70 xs:w-72 sm:w-80 h-full bg-white shadow-lg p-6 transition-[left,right,width] duration-500 ease-linear z-50
              ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
      > */}
        <div className="flex justify-between items-center mb-6">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={closeMobileMenu}
          >
            <div className="w-[36px] h-[36px]">
              <Image
                src={assets.logo}
                alt="NeedsNest Logo"
                className="w-full h-full object-contain"
                width={100}
                height={100}
              />
            </div>
            <h1 className="text-blue-600 text-2xl font-normal">NeedsNest</h1>
          </Link>
          <button onClick={closeMobileMenu} aria-label="Close Mobile Menu">
            <X />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <Menu fromMobileNav={true} />
      </div>
    </div>
  );
}
