// needsnest/src/shared/Navbar.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Drop from '@/assets/Drop.svg';
import User from '@/assets/profile.svg';
import "@/app/globals.css"; // Ensure global styles are imported

import { Search } from 'lucide-react';

// Assuming you have a logo file at `src/assets/logo.png`
import Logo from '@/assets/logo.png'; 

const Nav: React.FC = () => {
  return (
    <nav className="self-stretch px-14 py-5 bg-white  flex justify-between items-center gap-10">
      
      {/* Logo and Brand Name */}
      <Link href="/" className="flex items-center gap-2">
          <div className="w-40 h-20 relative">
            <Image 
              src={Logo} 
              alt="NeedsNest Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
      </Link>

      {/* Search Bar */}
      <div className="flex-1 max-w-[717px]">
        <div className="flex items-center w-full px-5 py-2.5 bg-slate-100 rounded-full border border-neutral-200">
          <input
            type="text"
            placeholder="Search product"
            className="flex-1 bg-transparent placeholder:text-stone-500 text-lg font-light font-Poppins focus:outline-none text-black"
            aria-label="Search product"
          />
          <Search className="w-6 h-6 text-neutral-500" />
        </div>
      </div>

      {/* Action Icons & Sign In */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5 cursor-pointer w-8 h-8 bg-primary-color rounded-full justify-center">
          <Image src={Drop} alt='Drop icon' className="w-3 h-4 "/>
        </div>
        
        <div className="w-px h-8 bg-stone-300" />

        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src={User} alt="User icon" className="w-8 h-8 "/>
          <div className="flex flex-col">
            <span className="text-neutral-500 text-sm font-Poppins leading-tight">
              Sign In
            </span>
            <span className="text-zinc-900 text-base font-Poppins leading-tight">
              Account
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;