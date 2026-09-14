import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DesktopTimeline from '@/components/DesktopTimeline';
import MobileTimeline from '@/components/MobileTimeline';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-[#F9F4E8] overflow-x-hidden font-outfit">
      <Navbar />

      <main className="w-full relative pb-20">
        
        {/* Overlapping Tabs Layer - matching exact background color */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-12 overflow-x-auto">
          <div className="flex items-end relative z-10 w-max lg:w-full pb-2">
            <div className="bg-[#F9F4E8] px-[42px] py-[14px] rounded-t-[20px] flex-shrink-0 z-40 relative h-[56px] min-w-[231px] flex items-center justify-center cursor-pointer shadow-[0px_-2px_10px_rgba(0,0,0,0.05)]">
              <span className="font-semibold text-[18px] text-black">MakerGhat story</span>
            </div>
            <div className="bg-mg-light-purple/20 px-[42px] py-[14px] rounded-t-[20px] flex-shrink-0 -ml-[32px] z-30 relative h-[56px] min-w-[254px] flex items-center justify-center cursor-pointer">
              <span className="text-[18px] text-black text-center">MakerGhat team</span>
            </div>
            <div className="bg-yellow-100 px-[68px] py-[14px] rounded-t-[20px] flex-shrink-0 -ml-[32px] z-20 relative h-[56px] min-w-[231px] flex items-center justify-center cursor-pointer">
              <span className="text-[18px] text-black">Support system</span>
            </div>
            <div className="bg-orange-50 px-[49px] py-[14px] rounded-t-[20px] flex-shrink-0 -ml-[32px] z-10 relative h-[56px] min-w-[231px] flex items-center justify-center cursor-pointer">
              <span className="text-[18px] text-black">Volunteers & Alumni</span>
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-[#F9F4E8] relative z-20 -mt-[1px] pb-[100px] w-full overflow-hidden shadow-[0px_5px_15px_rgba(0,0,0,0.05)]">
          
          <div className="max-w-[1440px] mx-auto px-5 md:px-[80px]">
            {/* Hero Title & Image */}
            <section className="pt-[40px] md:pt-[60px] flex flex-col relative w-full z-10">
              <h1 className="font-bold text-[36px] md:text-[52px] md:leading-[65px] text-mg-purple mb-[40px] z-10 max-w-[927px]">
                The story that built MakerGhat
              </h1>
              <div className="w-full relative h-[250px] md:h-[450px]">
                <Image src="/images/extracted/00_Additive_manufacturing-05_1.png" alt="Hero Background" fill className="object-cover rounded-[10px]" />
              </div>
            </section>
          </div>

          <DesktopTimeline />
          <MobileTimeline />

        </div>
      </main>

      <Footer />
    </div>
  );
}
