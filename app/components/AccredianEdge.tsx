
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Banknote,
} from "lucide-react";
import { CheckSquare, XSquare, GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

export default function AccredianEdge() {

  // ================= DOMAIN =================
  const domainItems = [
    { title: "Product & Innovation Hub", icon: Lightbulb },
    { title: "Gen-AI Mastery", icon: Brain },
    { title: "Leadership Elevation", icon: Users },
    { title: "Tech & Data Insights", icon: BarChart3 },
    { title: "Operations Excellence", icon: Settings },
    { title: "Digital Enterprise", icon: Globe },
    { title: "Fintech Innovation Lab", icon: Banknote },
  ];

  // ================= COURSE =================
  const courseData = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800",
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800",
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800",
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800",
    },
  ];

  return (
    <section id="edge" className="scroll-mt-28">



   {/* ================= EDGE TIMELINE ================= */}
<section className="py-28 bg-[#F9FAFB] text-center">

  <h2 className="text-4xl font-bold text-gray-900">
    The <span className="text-[#2563EB]">Accredian Edge</span>
  </h2>

  <p className="mt-2 text-gray-500">
    Key Aspects of{" "}
    <span className="text-[#2563EB]">Our Strategic Training</span>
  </p>

  {/* TIMELINE */}
  <div className="mt-24 max-w-7xl mx-auto px-6 relative">

    {/* CENTER LINE */}
    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300"></div>

    <div className="grid grid-cols-7 items-center">
      {[
        {
          title: "Tailored Solutions",
          text: "Programs customized to your organization's goals and challenges.",
          top: true,
          icon: "💡",
        },
        {
          title: "Expert Guidance",
          text: "Learn from industry leaders with real-world success.",
          top: false,
          icon: "👨‍🏫",
        },
        {
          title: "Innovative Framework",
          text: "Proprietary methods for impactful, application-driven results.",
          top: true,
          icon: "⚙️",
        },
        {
          title: "Advanced Technology",
          text: "State-of-the-art LMS for seamless learning experiences.",
          top: false,
          icon: "🌐",
        },
        {
          title: "Diverse Offerings",
          text: "Courses across industries, skill levels, and emerging fields.",
          top: true,
          icon: "📈",
        },
        {
          title: "Proven Impact",
          text: "Trusted by leading organizations for measurable ROI.",
          top: false,
          icon: "🎯",
        },
        {
          title: "Flexible Delivery",
          text: "Online and offline options tailored to your needs.",
          top: true,
          icon: "📦",
        },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">

          {/* TOP */}
          {item.top ? (
            <div className="flex flex-col items-center h-40 justify-end">
              <h4 className="font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 text-center w-44">
                {item.text}
              </p>
              <div className="w-[2px] h-8 bg-[#2563EB] mt-3"></div>
            </div>
          ) : (
            <div className="h-40"></div>
          )}

          {/* CIRCLE */}
          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1E40AF] text-white flex items-center justify-center text-xl shadow-md">
                {item.icon}
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          {!item.top ? (
            <div className="flex flex-col items-center h-40 justify-start mt-4">
              <div className="w-[2px] h-8 bg-[#2563EB] mb-2"></div>
              <h4 className="font-semibold text-gray-900">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 text-center w-44">
                {item.text}
              </p>
            </div>
          ) : (
            <div className="h-40"></div>
          )}

        </div>
      ))}
    </div>
  </div>
</section>


      {/* ================= DOMAIN EXPERTISE ================= */}
      <section className="py-24 bg-[#F9FAFB] text-center">
        
        <h2 className="text-4xl font-bold text-gray-900">
          Our <span className="text-[#2563EB]">Domain Expertise</span>
        </h2>

        <p className="mt-2 text-gray-500">
          <span className="text-[#2563EB]">Specialized Programs</span>{" "}
          Designed to Fuel Innovation
        </p>

        <div className="mt-16 max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          {domainItems.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 
                py-10 flex flex-col items-center justify-center
                hover:shadow-md transition duration-300
                ${i === 6 ? "md:col-span-3 max-w-sm mx-auto" : ""}`}
              >
                <Icon
                  size={36}
                  strokeWidth={2.2}
                  className="text-[#2563EB] mb-4"
                />

                <p className="font-medium text-gray-900">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>


      {/* ================= COURSE SEGMENTATION ================= */}
      <section className="py-24 bg-[#F9FAFB] text-center">
        
        <h2 className="text-4xl font-bold text-gray-900">
          Tailored <span className="text-[#2563EB]">Course Segmentation</span>
        </h2>

        <p className="mt-3 text-gray-600">
          Explore{" "}
          <span className="text-[#2563EB] font-medium">
            Custom-fit Courses
          </span>{" "}
          Designed to Address Every Professional Focus
        </p>

        <div className="mt-16 max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {courseData.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 
              shadow-sm hover:shadow-md transition duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-[#2563EB] font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

          {/* ================= WHO SHOULD JOIN ================= */}
     <section className="w-full bg-gradient-to-r from-[#2F6FD6] to-[#2A64C5] py-20 px-6 md:px-16">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT */}
        <div className="max-w-xl text-white">
          <p className="text-sm opacity-90">Who Should Join?</p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
            Strategic Skill Enhancement
          </h2>

          {/* IMAGE */}
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="people"
              width={320}
              height={320}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-white max-w-xl">

          <div className="flex gap-4 items-start">
            <CheckSquare size={30} />
            <div>
              <h4 className="font-semibold text-lg">
                Tech Professionals
              </h4>
              <p className="text-sm opacity-90 mt-1">
                Enhance expertise, embrace tech, drive innovation.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <XSquare size={30} />
            <div>
              <h4 className="font-semibold text-lg">
                Non-Tech Professionals
              </h4>
              <p className="text-sm opacity-90 mt-1">
                Adapt digitally, collaborate in tech environments.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <GraduationCap size={30} />
            <div>
              <h4 className="font-semibold text-lg">
                Emerging Professionals
              </h4>
              <p className="text-sm opacity-90 mt-1">
                Develop powerful skills for rapid career growth.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Briefcase size={30} />
            <div>
              <h4 className="font-semibold text-lg">
                Senior Professionals
              </h4>
              <p className="text-sm opacity-90 mt-1">
                Strengthen leadership, enhance strategic decisions.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

    </section>
  );
}