"use client";

import Image from "next/image";
import Link from "next/link";
import Drop from "@/assets/Drop.svg";
import User from "@/assets/profile.svg";
import "@/app/globals.css";
import { Menu } from "lucide-react";
import assets from "@/assets";
import React, { useEffect, useRef, useState } from "react";
import SearchInput from "./search-input";
import MobileNav from "./mobile-nav";

const Nav = () => {
  const [query, setQuery] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const drawerRef = useRef<HTMLDivElement>(null!);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    console.log({ query });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close drawer when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="w-full self-stretch flex justify-between items-center gap-10">
      {/* Mobile menu */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Logo and Brand Name */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-[36px] md:w-[44px] h-[36px] md:h-[44px]">
          <Image
            src={assets.logo}
            alt="NeedsNest Logo"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-primary-color text-2xl font-normal">NeedsNest</h1>
      </Link>

      {/* Search Bar */}
      <div className="max-md:hidden flex-1 max-w-[717px]">
        <SearchInput value={query} onChange={handleQueryChange} />
      </div>

      {/* Action Icons & Sign In */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5 cursor-pointer w-8 h-8 bg-primary-color rounded-full justify-center max-md:hidden">
          <Image src={Drop} alt="Drop icon" className="w-3 h-4 " />
        </div>

        <div className="w-px h-8 bg-stone-300 max-md:hidden" />

        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src={User} alt="User icon" className="w-6 mdw-8 h-6 md:h-8 " />
          <div className="flex flex-col max-md:hidden">
            <span className="text-neutral-500 text-sm font-Poppins leading-tight">
              Sign In
            </span>
            <span className="text-zinc-900 text-base font-Poppins leading-tight">
              Account
            </span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay and Content */}
      {isMobileMenuOpen && (
        <MobileNav
          isMobileMenuOpen={isMobileMenuOpen}
          drawerRef={drawerRef}
          closeMobileMenu={closeMobileMenu}
        />
      )}
    </nav>
  );
};

export default Nav;
