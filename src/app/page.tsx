import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-[#F9F4E8] overflow-x-hidden font-outfit">
      <Navbar />

      <main className="w-full relative pb-20">
        
        {/* Overlapping Tabs Layer - matching exact background color */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-12">
          <div className="flex items-end relative z-10 w-full">
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

          {/* INFINITE TIMELINE CONTAINER - Matches SVG bounds exactly */}
          <div className="relative mx-auto mt-[100px] w-[1228px] h-[2657px]">
            
            {/* SVG Backbone */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              <Image src="/images/extracted/Vector_62.svg" alt="Path" fill className="object-contain object-top" />
            </div>

            {/* 1. Our Mission (y=0) */}
            <div className="absolute top-[-40px] left-[0px] w-[450px] z-10">
              <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-6">Our mission</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
              </p>
              <div className="absolute top-[0px] right-[-100px] w-[80px] h-[80px]">
                 <Image src="/images/extracted/green-hexagon.png" alt="Decoration" fill className="object-contain" />
              </div>
            </div>
            
            <div className="absolute top-[-150px] right-[50px] w-[500px] h-[350px] z-10">
              <Image src="/images/extracted/tower_1@2x.png" alt="Our mission" fill className="object-contain" />
              <div className="absolute -top-[30px] right-[20px] w-[50px] h-[50px]">
                 <Image src="/images/extracted/sparkling_star.png" alt="Star" fill className="object-contain" />
              </div>
              <div className="absolute bottom-[20px] -left-[100px] w-[90px] h-[90px]">
                 <Image src="/images/extracted/bulb.png" alt="Bulb" fill className="object-contain" />
              </div>
            </div>

            {/* 2. Why Making (y=304 is the line below it) */}
            <div className="absolute top-[250px] left-[50px] w-[450px] h-[350px] z-10">
              <Image src="/images/extracted/pbl_1.png" alt="Why making" fill className="object-contain" />
              <div className="absolute -top-[50px] -left-[80px] w-[120px] h-[60px]">
                <Image src="/images/extracted/paper-aeroplane.png" alt="Aeroplane" fill className="object-contain" />
              </div>
              <div className="absolute bottom-[20px] -right-[50px] w-[60px] h-[60px]">
                <Image src="/images/extracted/green-circle.png" alt="Circle" fill className="object-contain" />
              </div>
            </div>

            <div className="absolute top-[280px] right-[50px] w-[400px] z-10">
              <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-6">Why making?</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
              </p>
              <div className="absolute top-[40px] -left-[140px] w-[60px] h-[60px]">
                <Image src="/images/extracted/diode.png" alt="Diode" fill className="object-contain" />
              </div>
              <div className="absolute bottom-[-100px] -left-[180px] w-[100px] h-[100px]">
                <Image src="/images/extracted/scissors.png" alt="Scissors" fill className="object-contain" />
              </div>
            </div>

            {/* 3. How did MG start (y=600 roughly, line crosses below at y=874) */}
            <div className="absolute top-[650px] left-[50px] w-[400px] z-10">
              <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-6">How did MG start</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
              </p>
              <div className="absolute bottom-[-180px] right-[0px] w-[280px] h-[150px]">
                <Image src="/images/extracted/Group_423_(arrows,questionmarks,magnifyglass,green-steps).png" alt="Decor" fill className="object-contain" />
              </div>
            </div>

            <div className="absolute top-[580px] right-[50px] w-[600px] h-[400px] z-10">
              <Image src="/images/extracted/Frame_733.png" alt="How MG started" fill className="object-contain rounded-[10px]" />
            </div>

            {/* 2018 & 2019 (line is at y=1198 below them) */}
            <div className="absolute top-[980px] left-[50px] w-[350px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm">
                 <span className="font-bold text-[36px] text-mg-purple">2018</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
               </div>
               <div className="w-[350px] h-[250px] relative">
                 <Image src="/images/extracted/powai_1.png" alt="2018" fill className="object-contain" />
               </div>
               <div className="absolute bottom-[-60px] right-[50px] w-[80px] h-[80px]">
                  <Image src="/images/extracted/tools.png" alt="Wrench" fill className="object-contain" />
               </div>
            </div>

            <div className="absolute top-[980px] right-[150px] w-[350px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm">
                 <span className="font-bold text-[36px] text-mg-purple">2019</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
               </div>
               <div className="w-[350px] h-[250px] relative">
                 <Image src="/images/extracted/3d_1.png" alt="2019" fill className="object-contain" />
                 <div className="absolute -right-[80px] top-[0px] w-[250px] h-[250px] -z-10">
                    <Image src="/images/extracted/green_Ellipse_137.png" alt="Background" fill className="object-contain" />
                 </div>
               </div>
               <div className="absolute bottom-[-60px] left-[-30px] w-[80px] h-[80px]">
                  <Image src="/images/extracted/money_on_hand.png" alt="Rupee" fill className="object-contain" />
               </div>
            </div>

            {/* 2021 & 2020 (line is at y=1527 below them) */}
            <div className="absolute top-[1320px] left-[150px] w-[350px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm relative">
                 <span className="font-bold text-[36px] text-mg-purple">2021</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
                 <div className="absolute -left-[70px] top-[15px] w-[40px] h-[40px]">
                    <Image src="/images/extracted/red-double-arrow.png" alt="Icon" fill className="object-contain" />
                 </div>
               </div>
               <div className="w-[350px] h-[250px] relative">
                 <Image src="/images/extracted/tn3_1.png" alt="2021" fill className="object-contain" />
                 <div className="absolute -left-[80px] -z-10 w-[280px] h-[280px]">
                    <Image src="/images/extracted/green_state.png" alt="Map" fill className="object-contain" />
                 </div>
               </div>
               <div className="absolute bottom-[-60px] right-[20px] w-[100px] h-[100px]">
                  <Image src="/images/extracted/taj-mahal.png" alt="Taj" fill className="object-contain" />
               </div>
            </div>

            <div className="absolute top-[1320px] right-[150px] w-[350px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm relative">
                 <span className="font-bold text-[36px] text-mg-purple">2020</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
                 <div className="absolute -left-[70px] top-[15px] w-[40px] h-[40px]">
                    <Image src="/images/extracted/red-double-arrow.png" alt="Icon" fill className="object-contain transform rotate-180" />
                 </div>
               </div>
               <div className="w-[350px] h-[250px] relative">
                 <Image src="/images/extracted/tel_1.png" alt="2020" fill className="object-contain" />
               </div>
               <div className="absolute bottom-[0px] left-[-90px] w-[90px] h-[90px]">
                  <Image src="/images/extracted/virus.png" alt="Virus" fill className="object-contain" />
               </div>
            </div>

            {/* 2022 & 2023 (2022 inside the loop at y=1680, 2023 on right at y=1750) */}
            <div className="absolute top-[1680px] left-[50px] w-[350px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm">
                 <span className="font-bold text-[36px] text-mg-purple">2022</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
               </div>
               <div className="w-[350px] h-[250px] relative">
                 <Image src="/images/extracted/part_3_1.png" alt="2022" fill className="object-contain" />
                 <div className="absolute -left-[60px] -z-10 w-[280px] h-[280px]">
                    <Image src="/images/extracted/red-state.png" alt="Map" fill className="object-contain" />
                 </div>
               </div>
            </div>

            <div className="absolute top-[1750px] right-[50px] w-[350px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm">
                 <span className="font-bold text-[36px] text-mg-purple">2023</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
               </div>
               <div className="w-[350px] h-[250px] relative">
                 <Image src="/images/extracted/storytelling_1.png" alt="2023" fill className="object-contain z-10" />
                 <div className="absolute -left-[100px] -top-[40px] -z-10 w-[300px] h-[300px]">
                    <Image src="/images/extracted/yellow-circle-board.png" alt="Map" fill className="object-contain" />
                 </div>
               </div>
               <div className="absolute bottom-[20px] left-[-120px] w-[100px] h-[100px]">
                  <Image src="/images/extracted/pen-paper-degree.png" alt="Degree" fill className="object-contain" />
               </div>
            </div>

            {/* 2025 & 2024 (line is at y=2316 below them) */}
            <div className="absolute top-[2050px] left-[100px] w-[350px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm">
                 <span className="font-bold text-[36px] text-mg-purple">2025</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
               </div>
               <div className="w-[350px] h-[250px] relative">
                 <Image src="/images/extracted/ignite-02_1.png" alt="2025" fill className="object-contain" />
                 <div className="absolute -left-[60px] top-[40px] -z-10 w-[200px] h-[200px]">
                    <Image src="/images/extracted/Purple_Rectangle.png" alt="Decor" fill className="object-contain" />
                 </div>
               </div>
               <div className="absolute bottom-[60px] right-[-140px] w-[120px] h-[120px]">
                  <Image src="/images/extracted/STEM.png" alt="STEM" fill className="object-contain" />
               </div>
            </div>

            <div className="absolute top-[2150px] right-[100px] w-[400px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm">
                 <span className="font-bold text-[36px] text-mg-purple">2024</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
               </div>
               <div className="w-[400px] h-[250px] relative mt-4">
                 <Image src="/images/extracted/Group_259.png" alt="2024" fill className="object-contain" />
               </div>
               <div className="absolute top-[-20px] right-[-20px] w-[60px] h-[60px]">
                  <Image src="/images/extracted/rocket.png" alt="Rocket" fill className="object-contain" />
               </div>
            </div>

            {/* 2026 (Bottom center, line ends below it) */}
            <div className="absolute top-[2420px] left-[450px] w-[400px] z-10">
               <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm">
                 <span className="font-bold text-[36px] text-mg-purple">2026</span>
                 <span className="text-mg-purple text-2xl ml-3">▼</span>
               </div>
               <div className="w-[400px] h-[250px] relative">
                 <Image src="/images/extracted/dd_(discovery_diary_book).png" alt="2026" fill className="object-contain" />
                 <div className="absolute -left-[140px] top-[40px] -z-10 w-[160px] h-[160px]">
                    <Image src="/images/extracted/jigsaw_puzzle_piece.png" alt="Jigsaw" fill className="object-contain" />
                 </div>
               </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
