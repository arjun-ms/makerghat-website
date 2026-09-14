import React from 'react';
import Image from 'next/image';

export default function PartnerSection() {
  return (
    <section className="px-6 md:px-[90px] py-16 md:py-24 bg-[#FCFBF7] flex flex-col md:flex-row items-center justify-between gap-[80px] w-full max-w-[1440px] mx-auto">
      <div className="w-full md:w-1/2 flex flex-col gap-[40px]">
        <h2 className="font-outfit font-bold text-[32px] md:text-[40px] text-mg-purple">Our Partners</h2>
        
        {/* Partner Card */}
        <div className="bg-[#EAE8E8] p-[30px] rounded-[16px] flex flex-col sm:flex-row items-center gap-[30px]">
          <div className="relative w-full sm:w-[140px] h-[140px] rounded-[10px] overflow-hidden flex-shrink-0 bg-gray-200">
            <Image src="/images/extracted/Frame_733.png" alt="STEM Collective" fill sizes="(max-width: 768px) 100vw, 140px" className="object-cover" />
          </div>
          <p className="text-[#333333] text-[16px] md:text-[18px] leading-[26px] font-outfit">
            Partnering with STEM organisations across India by anchoring Shikshagraha STEM Collective
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        {/* Image Mosaic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className="relative h-[120px] rounded-[10px] overflow-hidden bg-gray-200">
            <Image src="/images/extracted/3d_1.png" alt="3d" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="relative h-[120px] rounded-[10px] overflow-hidden bg-gray-200">
            <Image src="/images/extracted/tn3_1.png" alt="tn3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="relative h-[120px] rounded-[10px] overflow-hidden bg-gray-200">
            <Image src="/images/extracted/tel_1.png" alt="tel" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="relative h-[120px] rounded-[10px] overflow-hidden bg-gray-200">
            <Image src="/images/extracted/test_3_1.png" alt="test3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="relative h-[120px] rounded-[10px] overflow-hidden bg-gray-200">
            <Image src="/images/extracted/part_3_1.png" alt="part3" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
          <div className="relative h-[120px] rounded-[10px] overflow-hidden bg-gray-200">
            <Image src="/images/extracted/dd_1.png" alt="dd" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
}
