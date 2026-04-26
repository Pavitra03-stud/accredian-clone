"use client";

import { useState } from "react";
import Image from "next/image";
import EnquiryModal from "../components/EnquiryModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="px-6 md:px-16 py-10 bg-white">
        <div className="bg-[#eaf1fb] rounded-3xl px-8 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-black">Next-Gen </span>
              <span className="text-blue-600">Expertise</span>
              <br />
              <span className="text-black">For Your </span>
              <span className="text-blue-600">Enterprise</span>
            </h1>

            <p className="mt-5 text-gray-700 text-lg">
              Cultivate high-performance teams through expert learning.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-700">
              {["Tailored Solutions", "Industry Insights", "Expert Guidance"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {item}
                </span>
              ))}
            </div>

            {/* BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Enquire Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/hero.jpg"
                alt="hero"
                width={500}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* MODAL */}
      <EnquiryModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}