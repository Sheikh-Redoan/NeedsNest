"use client";

import { MessageCircleMore, Egg } from "lucide-react";
import Image from "next/image";
import { Car } from "@/types";
import { cn } from "@/lib/utils";
import { TfiLocationPin } from "react-icons/tfi";

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <article className="rounded-xl bg-white border border-background-color/10 p-5 shadow-sm hover:shadow-md transition-all w-full max-w-sm">
      <div className="relative w-full max-w-sm">
        {/* Clipped Image */}
        <div className="inverted-radius w-full h-48">
          <Image
            src={car.imageUrl}
            alt="Car"
            width={400}
            height={400}
            className="size-full object-cover"
          />
        </div>

        {/* Top-right Circular Button */}
        <button className="absolute top-0 right-2.5 z-10 p-[9px] rounded-full bg-[#EDEDED] shadow-md flex items-center justify-center">
          <Egg className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <p className="flex items-center gap-2 text-xs font-normal">
          <TfiLocationPin size={12} /> {car.location}
        </p>
        <h3 className="font-semibold text-[20px]">{car.name}</h3>
        <p className="text-sm font-normal">{car.description}</p>
        <p className="text-[20px] font-medium mt-2">{car.priceRange}</p>

        <button
          className={cn(
            "mt-3 w-full flex items-center justify-center gap-2 text-lg font-medium px-5 py-[10px] rounded-md",
            car.isActive
              ? "bg-blue-500 text-white"
              : "bg-background-color hover:bg-gray-200"
          )}
        >
          Chat
          <MessageCircleMore size={16} />
        </button>
      </div>
    </article>
  );
};
