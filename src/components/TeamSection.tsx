import React from 'react';
import Image from 'next/image';

export default function TeamSection() {
  const categories = [
    { name: "MakerGhat team", image: "/images/extracted/powai_1.png" },
    { name: "Support system", image: "/images/extracted/storytelling_1.png" },
    { name: "Volunteers & Alumni", image: "/images/extracted/ignite-02_1.png" },
  ];

  return (
    <section className="px-6 md:px-[90px] py-16 md:py-24 bg-[#FCFBF7] text-center w-full max-w-[1440px] mx-auto">
      <h2 className="font-outfit font-bold text-[32px] md:text-[40px] text-mg-purple mb-[60px]">
        Behind MakerGhat
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-[80px]">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center group cursor-pointer">
            <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden mb-6">
              <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 768px) 180px, 220px" className="object-cover" />
            </div>
            <h3 className="font-outfit font-medium text-[20px] text-mg-purple">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
