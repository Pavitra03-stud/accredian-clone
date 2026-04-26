import Image from "next/image";

export default function Partners() {
  const logos = [
    "/reliance.jpg",
    "/hcl.jpg",
    "/ibm.jpg",
    "/crif.jpg",
    "/adp.jpg",
    "/bayer.jpg",
  ];

  return (
    <section id="clients" className="py-24 bg-[#f5f7fb] text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Our Proven <span className="text-blue-600">Partnerships</span>
      </h2>

      <p className="mt-3 text-gray-600">
        Successful Collaborations With the{" "}
        <span className="text-blue-600 font-medium">
          Industry’s Best
        </span>
      </p>

      {/* Logos */}
      <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 items-center justify-items-center px-6">

        {logos.map((logo, i) => (
          <div
            key={i}
            className="w-[140px] h-[60px] flex items-center justify-center"
          >
            <Image
              src={logo}
              alt="partner logo"
              width={120}
              height={50}
              className="object-contain"
            />
          </div>
        ))}

      </div>
    </section>
  );
}