import assets from "@/assets";
import Image from "next/image";
import React from "react";

const steps = [
  {
    id: 1,
    step: "Step 1: Post Your Need",
    title: "Create a Need",
    description:
      "Tell us what you’re looking for—like “used sedan under 10 lakhs”—and set your city",
    image: assets.step1,
  },
  {
    id: 2,
    step: "Step 2: Get Matched",
    title: "See Offers Nearby",
    description:
      "We connect you to trusted providers based on your need and location.",
    image: assets.step2,
  },
  {
    id: 3,
    step: "Step 3: Choose and Chat",
    title: "Pick the Best Fit",
    description:
      "Compare offers, chat instantly, and finalize the deal right from the app.",
    image: assets.step3,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="py-12 container-div">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h1 className="text-[40px] font-semibold">How It Works</h1>
          <p className="text-2xl font-normal">
            Get started in just a few simple steps.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-background-color shadow-md rounded-xl p-5 text-center max-w-sm h-full flex flex-col items-center justify-center"
            >
              <p className="text-2xl font-medium">{step.step}</p>
              <div className="w-[257px] h-[287px] flex items-center justify-center mb-4">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
              <h3 className="text-[32px] font-medium mt-2">{step.title}</h3>
              <p className="text-[16px] mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
