import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] overflow-x-hidden font-outfit">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-12 relative">
        
        {/* Overlapping Tabs Layer */}
        <div className="flex items-end relative z-10 w-full overflow-x-auto hide-scrollbar">
          {/* Tab 1: MakerGhat story */}
          <div className="bg-[#F9F4E8] px-[42px] py-[14px] rounded-t-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-shrink-0 z-40 relative h-[56px] min-w-[231px] flex items-center justify-center cursor-pointer">
            <span className="font-semibold text-[18px] text-black">MakerGhat story</span>
          </div>
          {/* Tab 2: MakerGhat team */}
          <div className="bg-[#F1EEF9] px-[42px] py-[14px] rounded-t-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-shrink-0 -ml-[32px] z-30 relative h-[56px] min-w-[254px] flex items-center justify-center cursor-pointer">
            <span className="text-[18px] text-black text-center">MakerGhat team</span>
          </div>
          {/* Tab 3: Support system */}
          <div className="bg-[#FFF3CC] px-[68px] py-[14px] rounded-t-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-shrink-0 -ml-[32px] z-20 relative h-[56px] min-w-[231px] flex items-center justify-center cursor-pointer">
            <span className="text-[18px] text-black">Support system</span>
          </div>
          {/* Tab 4: Volunteers & Alumni */}
          <div className="bg-[#FDEAE5] px-[49px] py-[14px] rounded-t-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-shrink-0 -ml-[32px] z-10 relative h-[56px] min-w-[231px] flex items-center justify-center cursor-pointer">
            <span className="text-[18px] text-black">Volunteers & Alumni</span>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-[#F9F4E8] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-tr-[20px] rounded-b-[20px] rounded-bl-[20px] relative z-20 -mt-[1px] pb-[100px]">
          
          {/* Hero Image & Title */}
          <section className="pt-[100px] flex flex-col relative w-full">
            <h1 className="absolute top-[60px] md:top-[103px] left-6 md:left-[46px] font-bold text-[36px] md:text-[50px] leading-[63px] text-[#2C2C2C] z-10 max-w-[927px]">
              The story that built MakerGhat
            </h1>
            <div className="w-full relative h-[200px] md:h-[393px]">
              <Image src="/images/additive.png" alt="Bambu Lab 3D Printer" fill className="object-cover" />
            </div>
          </section>

          {/* Our Mission */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-12 mt-[80px] md:mt-[160px] px-6 md:px-[90px]">
            <div className="w-full md:w-[402px]">
              <h3 className="font-semibold text-[32px] leading-[39px] text-black mb-6">Our mission</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
              </p>
            </div>
            <div className="w-full md:w-[500px] relative h-[250px] md:h-[400px]">
              <Image src="/images/powai-1.png" alt="Our mission" fill className="object-cover rounded-[20px]" />
            </div>
          </section>

          {/* Why making? */}
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-[80px] md:mt-[160px] px-6 md:px-[90px]">
            <div className="w-full md:w-[500px] relative h-[250px] md:h-[400px]">
              <Image src="/images/pbl-1.png" alt="Why making" fill className="object-cover rounded-[20px]" />
            </div>
            <div className="w-full md:w-[402px]">
              <h3 className="font-semibold text-[32px] leading-[39px] text-black mb-6">Why making?</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
              </p>
            </div>
          </section>

          {/* How did MG start */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-12 mt-[80px] md:mt-[160px] px-6 md:px-[90px]">
            <div className="w-full md:w-[402px]">
              <h3 className="font-semibold text-[32px] leading-[39px] text-black mb-6">How did MG start</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
              </p>
            </div>
            <div className="w-full md:w-[500px] relative h-[250px] md:h-[400px]">
              <Image src="/images/dd-1.png" alt="How MG started" fill className="object-cover rounded-[20px]" />
            </div>
          </section>

          {/* Timeline */}
          <div className="mt-[100px] md:mt-[200px] px-6 md:px-[90px]">
            <Timeline />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
