import assets from "@/assets";
import Image from "next/image";
import React from "react";

export default function TestimonialCard() {
  return (
    <div className="flex-shrink-0 bg-white w-110 rounded-xl p-5 m-3 border border-gray-100">
      <div className="flex items-center mb-4">
        <Image
          src={assets.user}
          alt="Leslie Alexander"
          className="w-12 h-12 rounded-full mr-3"
          width={40}
          height={40}
        />
        <div>
          <p className="font-semibold text-gray-900">Leslie Alexander</p>
          <p className="text-sm text-gray-600">UI UX Designer</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 text-sm">
        Real feedback from people who found exactly what they needed — and those
        who helped provide it. Real feedback from people who found exactly what
        they needed — and those who helped provide it.
      </p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.208-6.001 5.855 1.416 8.293L12 18.896l-7.415 3.895 1.416-8.293-6.001-5.855 8.332-1.208z" />
            </svg>
          ))}
        </div>
        <span>Reviewed on 27/06/2025</span>
      </div>
    </div>
  );
}
