import React from 'react';
import Image from 'next/image';

export default function TeamSection() {
  const categories = [
    { name: "MakerGhat team", image: "/images/additive.png" },
    { name: "Support system", image: "/images/storytelling.png" },
    { name: "Volunteers & Alumni", image: "/images/ignite.png" },
  ];

  return (
    <section className="px-6 md:px-12 py-16 md:py-24 bg-white text-center">
      <h2 className="font-parkinsans font-bold text-3xl md:text-4xl text-mg-purple mb-12">
        Behind MakerGhat
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
        {categories.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center w-full md:w-1/3 group cursor-pointer">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
              <Image src={cat.image} alt={cat.name} fill className="object-cover" />
            </div>
            <h3 className="font-parkinsans font-semibold text-xl text-mg-purple group-hover:text-mg-orange transition-colors">
              {cat.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
