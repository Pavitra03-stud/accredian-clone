// "use client";

// import { Lightbulb, Settings, Boxes } from "lucide-react";

// export default function CatFramework() {
//   return (
//     <section
//       id="cat" // 🔥 REQUIRED for navbar scroll highlight
//       className="py-20 bg-white relative overflow-hidden scroll-mt-24"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
//           The <span className="text-blue-600">CAT Framework</span>
//         </h2>
//         <p className="text-gray-500 mt-3">
//           Our Proven Approach to{" "}
//           <span className="text-blue-600">Learning Excellence</span>
//         </p>

//         {/* Circles */}
//         <div className="grid md:grid-cols-3 gap-12 mt-16 relative z-10">
          
//           {/* Concept */}
//           <div className="flex flex-col items-center">
//             <div className="w-44 h-44 rounded-full border-[4px] border-blue-500 flex flex-col items-center justify-center bg-white shadow-sm">
//               <Lightbulb className="text-blue-600 mb-2" size={28} />
//               <h3 className="font-semibold text-lg">Concept</h3>
//               <p className="text-sm text-gray-500 px-4 mt-1 text-center">
//                 Foundational knowledge for deep subject understanding.
//               </p>
//             </div>
//           </div>

//           {/* Application */}
//           <div className="flex flex-col items-center">
//             <div className="w-44 h-44 rounded-full border-[4px] border-blue-500 flex flex-col items-center justify-center bg-white shadow-sm">
//               <Boxes className="text-blue-600 mb-2" size={28} />
//               <h3 className="font-semibold text-lg">Application</h3>
//               <p className="text-sm text-gray-500 px-4 mt-1 text-center">
//                 Practical implementation through real-world scenarios.
//               </p>
//             </div>
//           </div>

//           {/* Tools */}
//           <div className="flex flex-col items-center">
//             <div className="w-44 h-44 rounded-full border-[4px] border-blue-500 flex flex-col items-center justify-center bg-white shadow-sm">
//               <Settings className="text-blue-600 mb-2" size={28} />
//               <h3 className="font-semibold text-lg">Tools</h3>
//               <p className="text-sm text-gray-500 px-4 mt-1 text-center">
//                 Resources and techniques for effective skill mastery.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Curve */}
//       <svg
//         className="absolute left-1/2 -translate-x-1/2 top-[160px] w-[1000px] z-0"
//         height="260"
//         viewBox="0 0 1200 260"
//         fill="none"
//       >
//         <path
//           d="
//             M100,130
//             C250,60 350,60 500,130
//             C650,190 750,190 900,130
//             C1000,80 1100,80 1100,130
//           "
//           stroke="#2F80ED"
//           strokeWidth="5"
//           fill="none"
//           strokeLinecap="round"
//         />

//         {/* dots */}
//         <circle cx="100" cy="130" r="6" fill="#2F80ED" />
//         <circle cx="500" cy="130" r="6" fill="#2F80ED" />
//         <circle cx="900" cy="130" r="6" fill="#2F80ED" />
//         <circle cx="1100" cy="130" r="6" fill="#2F80ED" />
//       </svg>
//     </section>
//   );
// }


"use client";

import { Lightbulb, Settings, Boxes } from "lucide-react";

export default function CatFramework() {
  return (
    <section
      id="cat"
      className="py-24 bg-[#f3f6fb] relative scroll-mt-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-900">
          The <span className="text-blue-600">CAT Framework</span>
        </h2>
        <p className="text-gray-500 mt-3">
          Our Proven Approach to{" "}
          <span className="text-blue-600">Learning Excellence</span>
        </p>

        {/* CONTENT */}
        <div className="relative mt-20 flex justify-between items-center">

          {/* CURVE SVG */}
          <svg
            className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[220px]"
            viewBox="0 0 1200 220"
            fill="none"
          >
            <path
              d="
                M100,110
                C200,10 400,10 500,110
                S800,210 900,110
                S1100,10 1100,110
              "
              stroke="#2F80ED"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
            />

            {/* DOTS */}
            <circle cx="100" cy="110" r="6" fill="#2F80ED" />
            <circle cx="500" cy="110" r="6" fill="#2F80ED" />
            <circle cx="900" cy="110" r="6" fill="#2F80ED" />
          </svg>

          {/* ITEMS */}
          <div className="grid grid-cols-3 w-full relative z-10">

            {/* CONCEPT */}
            <div className="flex flex-col items-center">
              <div className="w-52 h-52 rounded-full border-[5px] border-blue-500 flex flex-col items-center justify-center bg-white shadow-md">
                <Lightbulb className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-xl text-black">Concept</h3>
                <p className="text-sm text-gray-600 px-6 mt-2 text-center">
                  Foundational knowledge for deep subject understanding.
                </p>
              </div>
            </div>

            {/* APPLICATION */}
            <div className="flex flex-col items-center">
              <div className="w-52 h-52 rounded-full border-[5px] border-blue-500 flex flex-col items-center justify-center bg-white shadow-md">
                <Boxes className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-xl text-black">Application</h3>
                <p className="text-sm text-gray-600 px-6 mt-2 text-center">
                  Practical implementation through real-world scenarios.
                </p>
              </div>
            </div>

            {/* TOOLS */}
            <div className="flex flex-col items-center">
              <div className="w-52 h-52 rounded-full border-[5px] border-blue-500 flex flex-col items-center justify-center bg-white shadow-md">
                <Settings className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-xl text-black">Tools</h3>
                <p className="text-sm text-gray-600 px-6 mt-2 text-center">
                  Resources and techniques for effective skill mastery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}