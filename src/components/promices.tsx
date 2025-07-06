// src/app/Promises.tsx
"use client";
import React from "react";
import PromisesLock from "@/assets/icons/PromisesLock.png";
import PromisesMessage from "@/assets/icons/promisesMessage.png";
import PormisesHandshak from "@/assets/icons/pormisesHandshak.png";
import { TPromiseItem } from "@/types";
import Image from "next/image";
const promiseData: TPromiseItem[] = [
  {
    // Use the imported SVG component directly instead of ReactSVG.
    icon: (
      <Image src={PromisesLock} alt="" className="w-7 h-7 fill-yellow-400" />
    ),
    title: "Privacy First",
    description:
      "No calls. No spam. Just real offers from verified providers—on your terms.",
  },
  {
    icon: <Image src={PromisesMessage} alt="" className="w-7 h-7 fill-white" />,
    title: "Secure Communication",
    description:
      "No calls. No spam. Just real offers from verified providers—on your terms.",
  },
  {
    icon: (
      <Image
        src={PormisesHandshak}
        alt=""
        className="w-7 h-7 fill-yellow-500"
      />
    ),
    title: "Trust and Transparency",
    description:
      "No calls. No spam. Just real offers from verified providers—on your terms.",
  },
];

export default function Promises() {
  return (
    <section className="w-full container-div grid grid-cols-1 md:grid-cols-3 items-center gap-7 pt-25">
      {promiseData.map((item) => (
        <div
          key={item.title}
          className="flex-1 p-7 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-6"
        >
          <div className="w-14 h-14 bg-zinc-800 rounded-full flex justify-center items-center">
            {item.icon}
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
            <h3 className="text-zinc-800 text-2xl font-medium font-Poppins leading-7">
              {item.title}
            </h3>
            <p className="self-stretch text-zinc-600 text-base font-normal font-Poppins leading-normal">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
