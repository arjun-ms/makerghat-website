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
        
        <div className="max-w-[1440px] mx-auto px-4 md:px-0">
          
          {/* Tabs Layer */}
          <div className="flex items-end relative z-10 w-full overflow-x-auto hide-scrollbar pt-[20px]">
            {/* Active Tab */}
            <div className="relative flex-shrink-0 z-40">
              <div 
                className="bg-[#FAF5E8] px-[40px] pt-[18px] pb-[16px] flex items-center justify-center cursor-pointer relative rounded-t-[16px]"
              >
                <span className="font-bold text-[18px] text-black">MakerGhat story</span>
              </div>
            </div>
            
            {/* Inactive Tab 1 */}
            <div className="relative flex-shrink-0 z-30">
              <div 
                className="bg-[#F2EDFA] px-[40px] pt-[18px] pb-[16px] flex items-center justify-center cursor-pointer relative rounded-t-[16px]"
              >
                <span className="text-[18px] text-black font-medium">MakerGhat team</span>
              </div>
            </div>
            
            {/* Inactive Tab 2 */}
            <div className="relative flex-shrink-0 z-20">
              <div 
                className="bg-[#FFF2CC] px-[40px] pt-[18px] pb-[16px] flex items-center justify-center cursor-pointer relative rounded-t-[16px]"
              >
                <span className="text-[18px] text-black font-medium">Support system</span>
              </div>
            </div>
            
            {/* Inactive Tab 3 */}
            <div className="relative flex-shrink-0 z-10">
              <div 
                className="bg-[#FCEAE5] px-[40px] pt-[18px] pb-[16px] flex items-center justify-center cursor-pointer relative rounded-t-[16px]"
              >
                <span className="text-[18px] text-black font-medium">Volunteers & Alumni</span>
              </div>
            </div>
          </div>

          {/* Main Content Container */}
          <div id="timeline-main-container" className="bg-[#FAF5E8] relative z-20 w-full overflow-visible shadow-[0px_10px_30px_rgba(0,0,0,0.05)] rounded-tr-[16px] rounded-b-[16px] rounded-bl-[16px] rounded-tl-none md:rounded-tl-none">
            
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

      {/* Above Footer Landscape */}
      <div className="w-full relative leading-none text-[0] mt-[-2px] mb-[-2px] z-10">
        <img 
          src="/images/extracted/above-the-footbar.png" 
          alt="Village landscape silhouette" 
          className="w-full h-auto object-cover block m-0 p-0" 
        />
      </div>

      <Footer />
    </div>
  );
}
