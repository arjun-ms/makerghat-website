import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DesktopTimeline from '@/components/DesktopTimeline';
import MobileTimeline from '@/components/MobileTimeline';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-outfit">
      <Navbar />

      <main className="w-full relative pb-20 pt-[60px]">
        
        <div className="max-w-[1228px] mx-auto px-4 md:px-0">
          
          {/* Overlapping Tabs Layer */}
          <div className="flex items-end relative z-10 w-full overflow-x-auto hide-scrollbar">
            {/* Active Tab */}
            <div className="bg-[#F9F4E8] px-[40px] py-[16px] rounded-t-[16px] flex-shrink-0 z-40 relative flex items-center justify-center cursor-pointer shadow-[-4px_-4px_10px_rgba(0,0,0,0.02)]">
              <span className="font-semibold text-[18px] text-black">MakerGhat story</span>
              {/* Right drop shadow onto next tab */}
              <div className="absolute right-[-10px] top-0 bottom-0 w-[10px] bg-gradient-to-r from-[rgba(0,0,0,0.05)] to-transparent pointer-events-none rounded-tr-[16px]"></div>
            </div>
            
            {/* Inactive Tab 1 */}
            <div className="bg-[#EBE7F8] px-[40px] py-[16px] rounded-t-[16px] flex-shrink-0 -ml-[20px] z-30 relative flex items-center justify-center cursor-pointer border border-[#EBE7F8]">
              <span className="text-[18px] text-black text-center font-normal">MakerGhat team</span>
              <div className="absolute right-[-10px] top-0 bottom-0 w-[10px] bg-gradient-to-r from-[rgba(0,0,0,0.03)] to-transparent pointer-events-none rounded-tr-[16px]"></div>
            </div>
            
            {/* Inactive Tab 2 */}
            <div className="bg-[#FDF1D0] px-[40px] py-[16px] rounded-t-[16px] flex-shrink-0 -ml-[20px] z-20 relative flex items-center justify-center cursor-pointer border border-[#FDF1D0]">
              <span className="text-[18px] text-black font-normal">Support system</span>
              <div className="absolute right-[-10px] top-0 bottom-0 w-[10px] bg-gradient-to-r from-[rgba(0,0,0,0.03)] to-transparent pointer-events-none rounded-tr-[16px]"></div>
            </div>
            
            {/* Inactive Tab 3 */}
            <div className="bg-[#F9E4E0] px-[40px] py-[16px] rounded-t-[16px] flex-shrink-0 -ml-[20px] z-10 relative flex items-center justify-center cursor-pointer border border-[#F9E4E0]">
              <span className="text-[18px] text-black font-normal">Volunteers & Alumni</span>
            </div>
          </div>

          {/* Main Content Container */}
          <div className="bg-[#F9F4E8] relative z-20 w-full overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.05)] rounded-tr-[16px] rounded-b-[16px] rounded-bl-[16px] rounded-tl-none md:rounded-tl-none">
            
            {/* Title Section */}
            <section className="pt-[50px] pb-[40px] px-[40px] flex flex-col relative w-full z-10">
              <h1 className="font-bold text-[36px] md:text-[54px] md:leading-[1.2] text-[#3A2A71]">
                The story that built MakerGhat
              </h1>
            </section>

            {/* Edge-to-Edge Hero Image */}
            <div className="w-full relative h-[300px] md:h-[550px]">
              <Image src="/images/extracted/00_Additive_manufacturing-05_1.png" alt="Hero Background" fill className="object-cover" />
            </div>

            <DesktopTimeline />
            <MobileTimeline />

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
