import React from 'react';

export default function Timeline() {
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026];
  
  return (
    <section className="px-6 md:px-12 py-20 bg-mg-cream overflow-x-auto">
      <div className="flex justify-between items-center min-w-[800px] max-w-5xl mx-auto">
        {years.map(year => (
          <div key={year} className="flex flex-col items-center flex-shrink-0 px-4">
            <div className="w-4 h-4 bg-mg-purple rounded-full mb-4"></div>
            <div className="font-parkinsans font-bold text-xl text-mg-purple">{year}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
