import React from 'react';
import Image from 'next/image';

const timelineNodes = [
  {
    year: '2018',
    image: '/images/extracted/powai_1.png',
  },
  {
    year: '2019',
    image: '/images/extracted/3d_1.png',
  },
  {
    year: '2020',
    image: '/images/extracted/tel_1.png',
  },
  {
    year: '2021',
    image: '/images/extracted/tn3_1.png',
  },
  {
    year: '2022',
    image: '/images/extracted/part_3_1.png',
  },
  {
    year: '2023',
    image: '/images/extracted/storytelling_1.png',
  },
  {
    year: '2024',
    image: '/images/extracted/Group_259.png',
  },
  {
    year: '2025',
    image: '/images/extracted/ignite-02_1.png',
  },
  {
    year: '2026',
    image: '/images/extracted/dd_(discovery_diary_book).png',
  }
];

export default function MobileTimeline() {
  return (
    <div className="block lg:hidden w-full max-w-md mx-auto mt-10 px-4">
      
      {/* 1. Our Mission */}
      <div className="mb-16">
        <h3 className="font-semibold text-2xl md:text-[32px] text-mg-purple mb-4">Our mission</h3>
        <p className="text-base md:text-[18px] leading-relaxed text-black font-normal mb-8">
          Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
        </p>
        <div className="w-full h-[250px] relative">
          <Image src="/images/extracted/tower_1@2x.png" alt="Our mission" fill className="object-contain" />
        </div>
      </div>

      {/* 2. Why Making */}
      <div className="mb-16">
        <h3 className="font-semibold text-2xl md:text-[32px] text-mg-purple mb-4">Why making?</h3>
        <p className="text-base md:text-[18px] leading-relaxed text-black font-normal mb-8">
          Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
        </p>
        <div className="w-full h-[250px] relative">
          <Image src="/images/extracted/pbl_1.png" alt="Why making" fill className="object-contain" />
        </div>
      </div>

      {/* 3. How did MG start */}
      <div className="mb-16">
        <h3 className="font-semibold text-2xl md:text-[32px] text-mg-purple mb-4">How did MG start</h3>
        <p className="text-base md:text-[18px] leading-relaxed text-black font-normal mb-8">
          MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </p>
        <div className="w-full h-[250px] relative">
          <Image src="/images/extracted/Frame_733.png" alt="How MG started" fill className="object-cover rounded-[10px]" />
        </div>
      </div>

      {/* Vertical Timeline Stack */}
      <div className="relative border-l-4 border-mg-green ml-4 pl-8 py-8 space-y-16">
        {timelineNodes.map((node) => (
          <div key={node.year} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[42px] top-4 w-5 h-5 bg-mg-purple rounded-full border-4 border-[#F9F4E8]"></div>
            
            <div className="bg-[#E7E2F8] inline-flex items-center px-5 py-2 rounded-[20px] mb-4 shadow-sm">
              <span className="font-bold text-2xl text-mg-purple">{node.year}</span>
              <span className="text-mg-purple text-xl ml-2">▼</span>
            </div>
            
            <div className="w-full h-[200px] relative">
              <Image src={node.image} alt={node.year} fill className="object-contain object-left" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
