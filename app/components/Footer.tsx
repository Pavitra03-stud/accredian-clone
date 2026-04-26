"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import EnquiryModal from "../components/EnquiryModal";

export default function Footer() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <footer className="bg-[#0f1115] md:bg-white text-white md:text-black px-6 py-10">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              accredian
            </h2>
            <p className="text-sm text-gray-500">
              credentials that matter
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-5 mt-5 text-gray-500 text-lg">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
              <FaTwitter className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-blue-600 cursor-pointer" />
              <FaYoutube className="hover:text-blue-600 cursor-pointer" />
            </div>
          </div>

          {/* RIGHT CTA */}
          <div className="text-left md:text-right">
            <button
              onClick={() => setOpenModal(true)} // ✅ OPEN MODAL
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow"
            >
              Enquire Now
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Speak with our Advisor
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* LINKS SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* ACCREDIAN */}
          <div>
            <h3 className="font-semibold mb-3">Accredian</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-600 cursor-pointer">About</li>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
              <li className="hover:text-blue-600 cursor-pointer">
                Why Accredian
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>

            <p className="text-gray-600 text-sm">
              Email us:{" "}
              <span className="text-blue-600">
                enterprise@accredian.com
              </span>
            </p>

            <p className="text-gray-600 text-sm mt-2 leading-relaxed max-w-md">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
              Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-300 my-8"></div>

        <p className="text-center text-gray-500 text-sm">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </p>
      </footer>

      {/* MODAL */}
      <EnquiryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}