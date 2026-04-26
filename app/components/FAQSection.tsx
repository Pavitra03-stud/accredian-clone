"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import EnquiryModal from "../components/EnquiryModal"; // adjust path if needed

const faqData = {
  course: [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      q: "What domain specializations are available?",
      a: "We offer programs in AI, Data Science, Product, Leadership and more.",
    },
  ],
  delivery: [
    {
      q: "Can the courses be customized for specific industries or teams?",
      a: "Yes, programs are tailored based on industry and business goals.",
    },
    {
      q: "Who are the instructors for these programs?",
      a: "Top industry experts and practitioners.",
    },
    {
      q: "What formats are the programs delivered in?",
      a: "Live, hybrid, and self-paced formats.",
    },
  ],
  misc: [
    {
      q: "What is the ideal team size for corporate training?",
      a: "Flexible for both small and large teams.",
    },
    {
      q: "How do we get started with Accredian?",
      a: "Click 'Enquire Now' to connect with an advisor.",
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState("course");
  const [openIndex, setOpenIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false); // ⭐ NEW

  return (
    <>
      <section id="faq" className="py-20 px-6 md:px-24 bg-white">

        {/* TITLE */}
        <h2 className="text-3xl font-semibold text-center mb-14 text-black">
          Frequently Asked{" "}
          <span className="text-blue-600">Questions</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-12">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4 md:w-[320px]">
            {[
              { key: "course", label: "About the Course" },
              { key: "delivery", label: "About the Delivery" },
              { key: "misc", label: "Miscellaneous" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setOpenIndex(0);
                }}
                className={`text-left px-6 py-4 rounded-xl border transition ${
                  activeTab === tab.key
                    ? "bg-gray-100 text-blue-600 shadow-sm border-gray-200"
                    : "bg-white text-gray-500 border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1">
            {faqData[activeTab as keyof typeof faqData].map(
              (item, index) => (
                <div key={index} className="border-b border-gray-200 py-5">

                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? -1 : index)
                    }
                    className="flex justify-between items-center w-full text-left"
                  >
                    <span
                      className={`text-lg font-medium ${
                        openIndex === index
                          ? "text-blue-600"
                          : "text-gray-800"
                      }`}
                    >
                      {item.q}
                    </span>

                    {openIndex === index ? (
                      <ChevronUp className="text-gray-500" />
                    ) : (
                      <ChevronDown className="text-gray-500" />
                    )}
                  </button>

                  {/* ANSWER */}
                  {openIndex === index && (
                    <p className="mt-3 text-gray-600 leading-relaxed max-w-2xl">
                      {item.a}
                    </p>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setOpenModal(true)} // ⭐ OPEN MODAL
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg shadow"
          >
            Enquire Now
          </button>
        </div>
      </section>

      {/* MODAL */}
      <EnquiryModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}