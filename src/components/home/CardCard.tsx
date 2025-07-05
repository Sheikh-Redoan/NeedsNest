"use client";

import { MessageCircleMore, Heart } from "lucide-react";
import Image from "next/image";
import { Car } from "@/types";
import { cn } from "@/lib/utils";

interface CarCardProps {
  car: Car;
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition-all w-full max-w-sm">
      <div className="relative rounded-md overflow-hidden">
        <Image
          src={car.imageUrl}
          alt={car.name}
          width={400}
          height={200}
          className="rounded-md object-cover w-full h-[180px]"
        />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow">
          <Heart size={18} className="text-gray-500" />
        </button>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-600">📍 {car.location}</p>
        <h3 className="font-semibold text-lg">{car.name}</h3>
        <p className="text-sm text-gray-500">{car.description}</p>
        <p className="text-base font-semibold mt-2">{car.priceRange}</p>

        <button
          className={cn(
            "mt-3 w-full flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-md",
            car.isActive
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          )}
        >
          Chat
          <MessageCircleMore size={16} />
        </button>
      </div>
    </div>
  );
};
