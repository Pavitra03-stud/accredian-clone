"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "stats", label: "Stats" },
  { id: "clients", label: "Clients" },
  { id: "edge", label: "Accredian Edge" },
  { id: "cat", label: "CAT" },
  { id: "how", label: "How It Works" },
  { id: "faq", label: "FAQs" },
  { id: "testimonials", label: "Testimonials" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex flex-col leading-tight">
            <h1 className="text-blue-600 font-bold text-xl">
              accredian
            </h1>
            <span className="text-[11px] text-gray-500">
              credentials that matter
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 ml-16">
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="relative pb-1">
                <span
                  className={`text-sm ${
                    active === item.id
                      ? "text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </span>

                {active === item.id && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-600"></span>
                )}
              </a>
            ))}
          </div>

          {/* DESKTOP BUTTON */}
    

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={26}  className="text-black"/>
          </button>
        </div>
      </nav>

      {/* RIGHT SIDE PANEL MENU */}
      {open && (
        <>
          {/* OVERLAY (light blur like original) */}
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-40"
            onClick={() => setOpen(false)}
          />

          {/* PANEL */}
          <div className="fixed top-20 right-6 w-64 bg-white rounded-xl shadow-xl z-50 p-6 space-y-4">

            {/* CLOSE */}
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)}>
                <X size={22} className="text-black"/>
              </button>
            </div>

            {/* MENU ITEMS */}
            {sections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block text-sm ${
                  active === item.id
                    ? "text-blue-600 font-medium underline"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}