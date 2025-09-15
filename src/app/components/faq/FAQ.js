"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "What is BlueCompute?",
    answer:
      "BlueCompute provides cloud-based and on-premises retail software solutions designed to improve visibility, planning, forecasting, and merchandising.",
  },
  {
    question: "What kinds of products / solutions does BlueCompute offer?",
    answer:
      "We offer solutions like RevealNext (advanced analytics), AI Merchandising Assistant, SecureVault (security suite), plus modules for planogram compliance, audits, benchmarking, and more.",
  },
  {
    question: "Can I integrate BlueCompute with my existing systems?",
    answer:
      "Yes — BlueCompute supports integration with ERP systems, distributor accounting platforms, and other enterprise tools.",
  },
  {
    question: "Where is BlueCompute deployed?",
    answer:
      "We provide both cloud and on-premises deployment options, with flexible licensing models (SaaS subscription or perpetual).",
  },
  {
    question: "How do I get started?",
    answer:
      "You can reach us via the Contact page or at sales@bluecompute.com to request a demo or early access.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16" id="faq">
      <div className="max-w-6xl mx-auto px-4 lg:grid lg:grid-cols-3 lg:gap-12">
        {/* Left side (title/intro) */}
        <div className="mb-8 lg:mb-0 lg:col-span-1 flex items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4">FAQ</h2>
            <p className="text-gray-600">
              Find quick answers to common questions about BlueCompute products
              and services.
            </p>
          </div>
        </div>

        {/* Right side (accordion) */}
        <div className="lg:col-span-2 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center cursor-pointer justify-between p-4 text-left font-medium text-lg"
              >
                {faq.question}
                <Image
                src={'/arrow-down-sign-to-navigate.svg'}
                alt="down arrow"
                height={10}
                width={10}
                className={`transform transition-transform ${
                    openIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                />
                
              </button>
              {openIndex === index && (
                <div className="p-4 border-t text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
