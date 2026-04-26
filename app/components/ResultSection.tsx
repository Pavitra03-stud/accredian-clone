"use client";

import { BarChart3, Monitor, Play } from "lucide-react";

export default function DeliverResults() {
  return (
    <section id ="how" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How We{" "}
          <span className="text-blue-600">Deliver Results</span> That Matter?
        </h2>

        <p className="text-gray-500 mt-3">
          A Structured Three-Step Approach to{" "}
          <span className="text-blue-600">Skill Development</span>
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          
          {/* Card 1 */}
          <div className="relative bg-gray-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            
            {/* Number */}
            <div className="absolute top-4 left-4 w-7 h-7 rounded-full border border-blue-300 text-blue-600 text-sm flex items-center justify-center font-medium">
              1
            </div>

            {/* Side Accent */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-blue-600 rounded-r"></div>

            {/* Icon */}
            <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
              <BarChart3 size={22} />
            </div>

            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Skill Gap Analysis
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Assess team skill gaps and developmental needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative bg-gray-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            
            <div className="absolute top-4 left-4 w-7 h-7 rounded-full border border-blue-300 text-blue-600 text-sm flex items-center justify-center font-medium">
              2
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-blue-600 rounded-r"></div>

            <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
              <Monitor size={22} />
            </div>

            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Customized Training Plan
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Create a tailored roadmap addressing organizational goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative bg-gray-50 border border-blue-100 rounded-xl p-8 shadow-sm hover:shadow-md transition">
            
            <div className="absolute top-4 left-4 w-7 h-7 rounded-full border border-blue-300 text-blue-600 text-sm flex items-center justify-center font-medium">
              3
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-16 bg-blue-600 rounded-r"></div>

            <div className="w-14 h-14 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md">
              <Play size={22} />
            </div>

            <h3 className="mt-6 font-semibold text-lg text-gray-900">
              Flexible Program Delivery
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Deliver adaptable programs aligned with industry and organizational needs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}