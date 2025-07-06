"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FaqSection() {
  // Sample FAQ data
  const faqData: FAQItem[] = [
    {
      question: "Is Needs Nest free to use?",
      answer:
        "Customers post a need (like buying a car), and verified providers respond through in-app chat. Simple, secure, and private.",
    },
    {
      question: "How does Needs Nest ensure privacy?",
      answer:
        "We use end-to-end encryption for all communications and do not share your personal data with third parties without your explicit consent.",
    },
    {
      question: "Can I become a provider on Needs Nest?",
      answer:
        "Yes, you can apply to become a verified provider. Our team reviews applications to ensure quality and reliability.",
    },
    {
      question: "What kind of needs can I post?",
      answer:
        "You can post a wide range of needs, from finding services to purchasing specific items. Our platform connects you with various providers.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team via the 'Contact Us' section on our website or by emailing support@needsnest.com.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="pb-25">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-[40px] font-semibold mb-2">
          Everything you need to know
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
              {openIndex === index ? (
                <ChevronDown className="h-6 w-6 text-gray-600" />
              ) : (
                <ChevronRight className="h-6 w-6 text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 pt-2 text-gray-700 text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
