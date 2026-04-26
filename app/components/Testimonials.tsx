"use client";

import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal";

export default function Testimonials() {
  const data = [
    {
      logo: "/adp.jpg",
      text: `"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."`,
    },
    {
      logo: "/bayer.jpg",
      text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
    },
    {
      logo: "/bayer.jpg",
      text: `"Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."`,
    },
    {
      logo: "/reliance.jpg",
      text: `"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."`,
    },
  ];

  const pages = [data.slice(0, 2), data.slice(2, 4)];
  const [active, setActive] = useState(0);

  // ✅ Modal state
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-24 bg-[#F9FAFB] scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 text-center">

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-gray-900">
            Testimonials from{" "}
            <span className="text-blue-600">Our Partners</span>
          </h2>

          <p className="mt-3 text-gray-500">
            What <span className="text-blue-600">Our Clients</span> Are Saying
          </p>

          {/* CARDS */}
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {pages[active].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-8 text-left shadow-sm"
              >
                <img
                  src={item.logo}
                  alt="logo"
                  className="h-10 mb-6 object-contain"
                />

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-8 gap-3">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full ${
                  active === i ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-6 md:px-16 py-16 bg-white">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">

          {/* Background glow */}
          <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute right-20 bottom-0 w-[300px] h-[300px] bg-blue-300/20 rounded-full blur-2xl"></div>

          {/* LEFT */}
          <div className="flex items-start gap-4 z-10">
            <div className="bg-white/20 p-4 rounded-xl">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4-.9L2 17l1.1-3.3A6.964 6.964 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
              </svg>
            </div>

            <div>
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                Want to Learn More About Our Training Solutions?
              </h2>
              <p className="text-blue-100 mt-1 text-sm md:text-base">
                Get Expert Guidance for Your Team’s Success!
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => setOpenModal(true)}
            className="z-10 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2"
          >
            Contact Us
            <span>›</span>
          </button>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      <EnquiryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}