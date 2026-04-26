"use client";
import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
  description: string;
};

export default function Programs() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    fetch("/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  }, []);

  return (
    <section id="programs" className="py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Programs
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {programs.map((prog) => (
          <div
            key={prog.id}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {prog.title}
            </h3>
            <p className="text-gray-600">{prog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}