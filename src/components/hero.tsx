import React from 'react';
import bannerImage from '../assets/banner.jpg';
import type { StaticImageData } from 'next/image';

export default function Hero(): React.ReactElement {
  const image: StaticImageData = bannerImage;

  return (
    <div
      className='relative flex flex-col items-center z-1 justify-center py-[100px] after:content-[""] after:absolute after:inset-0 after:bg-[#000000]/80 after:z-[-1] bg-cover bg-center'
      style={{ backgroundImage: `url(${image.src})` }}
    >
      <p className='px-7 py-2 bg-white/30 rounded-[34px] backdrop-blur-[10px] inline-flex justify-center items-center gap-2.5 mb-[20px] text-white'>
        Real product from verified providers
      </p>
      <h2 className="max-w-[848px] text-center justify-start text-slate-100 text-6xl font-bold font-Poppins leading-[74px]">
        Find the right provider for what you need – Fast.
      </h2>
      <p className="text-center justify-start text-slate-100 text-xl font-normal font-Poppins leading-normal pt-3 pb-10">No calls. No spam. Just real offers from verified providers—on your terms.</p>
      <div className='flex gap-10'>
        <button className="bg-primary-color rounded-xl inline-flex justify-center items-center gap-3 px-[28px] py-[14px]  text-white text-lg font-semibold font-Poppins leading-7 cursor-pointer">
          Post a Need
        </button>
        <button className="bg-primary-color/10 rounded-xl inline-flex justify-center items-center gap-3 px-[28px] py-[14px]  text-white text-lg font-semibold font-Poppins leading-7 cursor-pointer border border-primary-color hover:bg-primary-color/20 transition-colors duration-300">
          Join as Salesperson
        </button>
      </div>
    </div>
  );
}