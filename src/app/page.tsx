import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] overflow-x-hidden font-outfit">
      <Navbar />

      <main className="max-w-[1440px] mx-auto px-5 md:px-[80px] pt-12 relative pb-20">
        
        {/* Overlapping Tabs Layer */}
        <div className="flex items-end relative z-10 w-full">
          <div className="bg-mg-cream px-[42px] py-[14px] rounded-t-[20px] flex-shrink-0 z-40 relative h-[56px] min-w-[231px] flex items-center justify-center cursor-pointer shadow-[2px_0px_5px_rgba(0,0,0,0.05)]">
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

        {/* Main Content Container */}
        <div className="bg-mg-cream rounded-tr-[20px] rounded-b-[20px] rounded-bl-[20px] relative z-20 -mt-[1px] pb-[100px] overflow-hidden">
          
          {/* Hero Title & Image */}
          <section className="pt-[40px] md:pt-[60px] flex flex-col relative w-full z-10 px-6 md:px-[46px]">
            <h1 className="font-bold text-[36px] md:text-[52px] md:leading-[65px] text-mg-purple mb-[40px] z-10 max-w-[927px]">
              The story that built MakerGhat
            </h1>
            <div className="w-full relative h-[250px] md:h-[450px]">
              <Image src="/images/extracted/00_Additive_manufacturing-05_1.png" alt="Hero Background" fill className="object-cover rounded-[10px]" />
            </div>
          </section>

          {/* Infographic Container */}
          <div className="relative w-full max-w-[1228px] mx-auto mt-20" style={{ height: '2657px' }}>
            
            {/* The giant squiggly SVG line */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
              <Image src="/images/extracted/Vector_62.svg" alt="Path" fill className="object-contain object-top" />
            </div>

            {/* Content Blocks Positioned Absolutely */}

            {/* 1. Our Mission */}
            <div className="absolute top-[0px] left-[50px] w-[350px] z-10">
              <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-6">Our mission</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
              </p>
              <div className="absolute -top-[20px] right-[20px] w-[60px] h-[60px]">
                 <Image src="/images/extracted/green-hexagon.png" alt="Decoration" fill className="object-contain" />
              </div>
            </div>
            
            <div className="absolute top-[0px] right-[20px] w-[450px] h-[300px] z-10">
              <Image src="/images/extracted/tower_1@2x.png" alt="Our mission" fill className="object-contain" />
              <div className="absolute -top-[30px] right-[50px] w-[40px] h-[40px]">
                 <Image src="/images/extracted/sparkling_star.png" alt="Star" fill className="object-contain" />
              </div>
              <div className="absolute top-[80px] -left-[80px] w-[80px] h-[80px]">
                 <Image src="/images/extracted/bulb.png" alt="Bulb" fill className="object-contain" />
              </div>
            </div>

            {/* 2. Why Making */}
            <div className="absolute top-[350px] left-[0px] w-[450px] h-[300px] z-10">
              <Image src="/images/extracted/pbl_1.png" alt="Why making" fill className="object-contain" />
              <div className="absolute -top-[40px] -left-[40px] w-[91px] h-[41px]">
                <Image src="/images/extracted/paper-aeroplane.png" alt="Aeroplane" fill className="object-contain" />
              </div>
              <div className="absolute bottom-[20px] -right-[40px] w-[50px] h-[50px]">
                <Image src="/images/extracted/green-circle.png" alt="Circle" fill className="object-contain" />
              </div>
            </div>

            <div className="absolute top-[380px] right-[100px] w-[350px] z-10">
              <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-6">Why making?</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
              </p>
              <div className="absolute top-[20px] -left-[120px] w-[50px] h-[50px]">
                <Image src="/images/extracted/diode.png" alt="Diode" fill className="object-contain" />
              </div>
              <div className="absolute bottom-[-100px] -left-[140px] w-[80px] h-[80px]">
                <Image src="/images/extracted/scissors.png" alt="Scissors" fill className="object-contain" />
              </div>
            </div>

            {/* 3. How did MG start */}
            <div className="absolute top-[750px] left-[50px] w-[350px] z-10">
              <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-6">How did MG start</h3>
              <p className="text-[18px] leading-[28px] text-black font-normal">
                MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
              </p>
              <div className="absolute bottom-[-100px] right-[0px] w-[200px] h-[100px]">
                <Image src="/images/extracted/Group_423_(arrows,questionmarks,magnifyglass,green-steps).png" alt="Decor" fill className="object-contain" />
              </div>
            </div>

            <div className="absolute top-[720px] right-[20px] w-[500px] h-[350px] z-10">
              <Image src="/images/extracted/Frame_733.png" alt="How MG started" fill className="object-contain rounded-[10px]" />
            </div>

            {/* TIMELINE NODES */}
            
            {/* 2018 (Left) */}
            <div className="absolute top-[1130px] left-[50px] w-[300px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm relative">
                 <span className="font-bold text-[32px] text-mg-purple">2018</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
                 <div className="absolute -left-[50px] top-[10px] w-[40px] h-[40px]">
                    <Image src="/images/extracted/yellow-up-3-arrows.png" alt="Icon" fill className="object-contain" />
                 </div>
               </div>
               <div className="w-[300px] h-[200px] relative">
                 <Image src="/images/extracted/powai_1.png" alt="2018" fill className="object-contain" />
               </div>
               <div className="absolute bottom-[-30px] right-[20px] w-[60px] h-[60px]">
                  <Image src="/images/extracted/tools.png" alt="Wrench" fill className="object-contain" />
               </div>
            </div>

            {/* 2019 (Right) */}
            <div className="absolute top-[1130px] right-[100px] w-[300px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm">
                 <span className="font-bold text-[32px] text-mg-purple">2019</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
               </div>
               <div className="w-[300px] h-[200px] relative">
                 <Image src="/images/extracted/3d_1.png" alt="2019" fill className="object-contain" />
                 <div className="absolute -right-[30px] top-[0px] w-[150px] h-[150px] -z-10">
                    <Image src="/images/extracted/green_Ellipse_137.png" alt="Background" fill className="object-contain" />
                 </div>
               </div>
               <div className="absolute bottom-[-20px] left-[-40px] w-[60px] h-[60px]">
                  <Image src="/images/extracted/money_on_hand.png" alt="Rupee" fill className="object-contain" />
               </div>
            </div>

            {/* 2021 (Left) */}
            <div className="absolute top-[1480px] left-[150px] w-[300px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm relative">
                 <span className="font-bold text-[32px] text-mg-purple">2021</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
                 <div className="absolute -left-[50px] top-[20px] w-[30px] h-[30px]">
                    <Image src="/images/extracted/red-double-arrow.png" alt="Icon" fill className="object-contain" />
                 </div>
               </div>
               <div className="w-[300px] h-[200px] relative">
                 <Image src="/images/extracted/tn3_1.png" alt="2021" fill className="object-contain" />
                 <div className="absolute -left-[50px] -z-10 w-[200px] h-[200px]">
                    <Image src="/images/extracted/green_state.png" alt="Map" fill className="object-contain opacity-50" />
                 </div>
               </div>
               <div className="absolute bottom-[-40px] right-[0px] w-[80px] h-[80px]">
                  <Image src="/images/extracted/taj-mahal.png" alt="Taj" fill className="object-contain" />
               </div>
            </div>

            {/* 2020 (Right) */}
            <div className="absolute top-[1480px] right-[100px] w-[300px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm relative">
                 <span className="font-bold text-[32px] text-mg-purple">2020</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
                 <div className="absolute -left-[50px] top-[10px] w-[30px] h-[30px]">
                    <Image src="/images/extracted/red-double-arrow.png" alt="Icon" fill className="object-contain transform rotate-180" />
                 </div>
               </div>
               <div className="w-[300px] h-[200px] relative">
                 <Image src="/images/extracted/tel_1.png" alt="2020" fill className="object-contain" />
               </div>
               <div className="absolute bottom-[20px] left-[-60px] w-[60px] h-[60px]">
                  <Image src="/images/extracted/virus.png" alt="Virus" fill className="object-contain" />
               </div>
            </div>

            {/* 2022 (Left) */}
            <div className="absolute top-[1830px] left-[50px] w-[300px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm">
                 <span className="font-bold text-[32px] text-mg-purple">2022</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
               </div>
               <div className="w-[300px] h-[200px] relative">
                 <Image src="/images/extracted/part_3_1.png" alt="2022" fill className="object-contain" />
                 <div className="absolute -left-[30px] -z-10 w-[200px] h-[200px]">
                    <Image src="/images/extracted/red-state.png" alt="Map" fill className="object-contain opacity-50" />
                 </div>
               </div>
            </div>

            {/* 2023 (Right) */}
            <div className="absolute top-[1850px] right-[50px] w-[300px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm">
                 <span className="font-bold text-[32px] text-mg-purple">2023</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
               </div>
               <div className="w-[300px] h-[200px] relative">
                 <Image src="/images/extracted/storytelling_1.png" alt="2023" fill className="object-contain" />
                 <div className="absolute -left-[50px] top-[0px] -z-10 w-[200px] h-[200px]">
                    <Image src="/images/extracted/yellow-circle-board.png" alt="Map" fill className="object-contain" />
                 </div>
               </div>
               <div className="absolute bottom-[20px] left-[-80px] w-[60px] h-[60px]">
                  <Image src="/images/extracted/pen-paper-degree.png" alt="Degree" fill className="object-contain" />
               </div>
            </div>

            {/* 2025 (Left) */}
            <div className="absolute top-[2150px] left-[100px] w-[300px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm">
                 <span className="font-bold text-[32px] text-mg-purple">2025</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
               </div>
               <div className="w-[300px] h-[200px] relative">
                 <Image src="/images/extracted/ignite-02_1.png" alt="2025" fill className="object-contain" />
                 <div className="absolute -left-[50px] top-[30px] -z-10 w-[150px] h-[150px]">
                    <Image src="/images/extracted/Purple_Rectangle.png" alt="Decor" fill className="object-contain" />
                 </div>
               </div>
               <div className="absolute bottom-[80px] right-[-100px] w-[80px] h-[80px]">
                  <Image src="/images/extracted/STEM.png" alt="STEM" fill className="object-contain" />
               </div>
            </div>

            {/* 2024 (Right) */}
            <div className="absolute top-[2280px] right-[100px] w-[350px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm">
                 <span className="font-bold text-[32px] text-mg-purple">2024</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
               </div>
               <div className="w-[350px] h-[200px] relative mt-4">
                 <Image src="/images/extracted/Group_259.png" alt="2024" fill className="object-contain" />
               </div>
               <div className="absolute top-[0px] right-[0px] w-[40px] h-[40px]">
                  <Image src="/images/extracted/rocket.png" alt="Rocket" fill className="object-contain" />
               </div>
            </div>

            {/* 2026 (Right/Center) */}
            <div className="absolute top-[2520px] right-[300px] w-[400px] z-10">
               <div className="bg-mg-light-purple/20 inline-block px-6 py-2 rounded-[20px] mb-4 shadow-sm relative -left-[100px]">
                 <span className="font-bold text-[32px] text-mg-purple">2026</span>
                 <span className="text-mg-purple text-2xl ml-2">▼</span>
               </div>
               <div className="w-[300px] h-[200px] relative absolute top-[50px] right-[-50px]">
                 <Image src="/images/extracted/dd_(discovery_diary_book).png" alt="2026" fill className="object-contain" />
                 <div className="absolute -left-[100px] top-[20px] -z-10 w-[120px] h-[120px]">
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
