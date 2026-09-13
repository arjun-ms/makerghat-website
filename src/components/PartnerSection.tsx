import React from 'react';
import Image from 'next/image';

export default function PartnerSection() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 bg-white flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h2 className="font-parkinsans font-bold text-3xl md:text-4xl text-mg-purple mb-4">Our Partners</h2>
        
        {/* Partner Card */}
        <div className="bg-[#E5E3E5] p-6 rounded-lg flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-full sm:w-32 h-32 rounded-md overflow-hidden flex-shrink-0 bg-gray-200 shadow-sm">
            <Image src="/images/partner.png" alt="STEM Collective" fill className="object-cover" />
          </div>
          <p className="text-black text-base md:text-lg font-outfit">
            Partnering with STEM organisations across India by anchoring Shikshagraha STEM Collective
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2">
        {/* Image Mosaic */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/3d.png" alt="3d" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/tn3.png" alt="tn3" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/tel.png" alt="tel" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/test3.png" alt="test3" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/tower.png" alt="tower" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/sant.png" alt="sant" fill className="object-cover" />
          </div>
          <div className="relative h-32 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/part3.png" alt="part3" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
