export default function Stats() {
  const stats = [
    {
      value: "10K+",
      text: "Professionals Trained For Exceptional Career Success",
    },
    {
      value: "200+",
      text: "Sessions Delivered With Unmatched Learning Excellence",
    },
    {
      value: "5K+",
      text: "Active Learners Engaged In Dynamic Courses",
    },
  ];

  return (
    <section id="stats" className="py-24 bg-[#f5f7fb] text-center">
      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Our <span className="text-blue-600">Track Record</span>
      </h2>

      <p className="mt-3 text-gray-600 text-sm md:text-base">
        The Numbers Behind{" "}
        <span className="text-blue-600 font-medium">Our Success</span>
      </p>

      {/* STATS */}
      <div className="mt-16 grid md:grid-cols-3 max-w-6xl mx-auto px-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center px-6 relative"
          >
            {/* NUMBER BADGE */}
            <div className="px-6 py-2 bg-blue-100 text-blue-600 font-semibold rounded-full text-lg">
              {item.value}
            </div>

            {/* TEXT */}
            <p className="mt-4 text-gray-700 text-sm leading-relaxed max-w-xs">
              {item.text}
            </p>

            {/* DIVIDER */}
            {i !== stats.length - 1 && (
              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}