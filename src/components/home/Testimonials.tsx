"use client";

import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const [translateX1, setTranslateX1] = useState(0);
  const [translateX2, setTranslateX2] = useState(-1000); // Start from left
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollSpeed = 0.5;
    let animationFrameId1: number;
    let animationFrameId2: number;

    const animateRight = () => {
      setTranslateX1((prev) => {
        if (containerRef1.current) {
          const containerWidth = containerRef1.current.scrollWidth / 2;
          // Reset to 0 when we've scrolled the width of one set
          if (Math.abs(prev) >= containerWidth) {
            return 0;
          }
        }
        return prev - scrollSpeed;
      });
      animationFrameId1 = requestAnimationFrame(animateRight);
    };

    const animateLeft = () => {
      setTranslateX2((prev) => {
        if (containerRef2.current) {
          const containerWidth = containerRef2.current.scrollWidth / 2;
          // Reset to negative containerWidth when we've scrolled one full set
          if (prev >= 0) {
            return -containerWidth;
          }
        }
        return prev + scrollSpeed;
      });
      animationFrameId2 = requestAnimationFrame(animateLeft);
    };

    // Start animations after a small delay
    const timeoutId = setTimeout(() => {
      animationFrameId1 = requestAnimationFrame(animateRight);
      animationFrameId2 = requestAnimationFrame(animateLeft);
    }, 100);

    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="py-25">
      <div className="max-w-md mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">
          Users about us
        </h2>
        <p className="text-gray-600 text-lg">
          Real feedback from people who found exactly what they needed
        </p>
      </div>

      {/* First Row: Scrolls Right */}
      <div className="overflow-hidden mb-4">
        <div
          ref={containerRef1}
          className="flex"
          style={{
            transform: `translateX(${translateX1}px)`,
            width: "fit-content",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <TestimonialCard key={`row1-${i}`} />
          ))}
          {[...Array(10)].map((_, i) => (
            <TestimonialCard key={`row1-duplicate-${i}`} />
          ))}
        </div>
      </div>

      {/* Second Row: Scrolls Left */}
      <div className="overflow-hidden">
        <div
          ref={containerRef2}
          className="flex"
          style={{
            transform: `translateX(${translateX2}px)`,
            width: "fit-content",
          }}
        >
          {[...Array(10)].map((_, i) => (
            <TestimonialCard key={`row2-${i}`} />
          ))}
          {[...Array(10)].map((_, i) => (
            <TestimonialCard key={`row2-duplicate-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
