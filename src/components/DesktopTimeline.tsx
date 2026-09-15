import React from 'react';
import Image from 'next/image';
import coordsData from '../data/timeline-coords.json';

// We offset Y by 800px because the Figma root starts at 0, 
// but our DesktopTimeline container represents the section starting below the hero
const Y_OFFSET = 800;

export default function DesktopTimeline() {
  const getStyle = (key: string) => {
    const node = (coordsData as Record<string, any>)[key];
    if (!node) return { display: 'none' };
    return {
      top: `${node.y - Y_OFFSET}px`,
      left: `${node.x}px`,
      width: `${node.width}px`,
      height: `${node.height}px`
    };
  };

  const getYearStyle = (year: string) => {
    const node = (coordsData as Record<string, any>)[year];
    if (!node) return { display: 'none' };
    return {
      top: `${node.y - Y_OFFSET}px`,
      left: `${node.x}px`,
      // Add slight padding to text bubble since Figma extracts just the text bounding box
      padding: '8px 24px'
    };
  };

  return (
    <div id="desktop-timeline" className="hidden lg:block relative w-full h-[3200px]">
      
      {/* SVG Backbone with dashed overlay */}
      <div className="absolute z-0 pointer-events-none" style={getStyle('Vector 61')}>
        <Image src="/images/extracted/green-line.svg" alt="Green Path" fill className="object-contain object-top" />
        <Image src="/images/extracted/white-dashed-line-top-of-green-line.svg" alt="Dashed Path" fill className="object-contain object-top" />
      </div>

      {/* Top section elements */}
      <div className="absolute top-[80px] left-[80px] w-[450px] z-10">
        <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-4">Our mission</h3>
        <p className="text-[16px] leading-[26px] text-[#4A4A4A] font-medium pr-10">
          Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
        </p>
      </div>

      <div className="absolute z-10" style={getStyle('tower 1')}>
        <Image src="/images/extracted/tower_1@2x.png" alt="Kids Building Tower" fill className="object-cover rounded-[16px]" />
      </div>

      <div className="absolute z-10" style={getStyle('tn3 1')}>
        <Image src="/images/extracted/tn3_1.png" alt="Why Making" fill className="object-contain" />
      </div>
      
      <div className="absolute top-[359px] right-[150px] w-[420px] z-10">
        <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-4">Why making?</h3>
        <p className="text-[16px] leading-[26px] text-[#4A4A4A] font-medium">
          Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
        </p>
      </div>

      {/* Group picture */}
      <div className="absolute z-10" style={{ top: '630px', left: '701px', width: '592px', height: '403px' }}>
        <Image src="/images/extracted/group-picture.png" alt="How MG started" fill className="object-cover rounded-[16px]" />
      </div>

      {/* 2018 */}
      <div className="absolute z-10" style={getStyle('powai 1')}>
         <Image src="/images/extracted/powai_1.png" alt="2018" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2018')}>
         <span className="font-bold text-[36px] text-mg-purple">2018</span>
      </div>

      {/* 2019 */}
      <div className="absolute z-10" style={getStyle('3d 1')}>
         <Image src="/images/extracted/3d_1.png" alt="2019" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2019')}>
         <span className="font-bold text-[36px] text-mg-purple">2019</span>
      </div>

      {/* 2020 */}
      <div className="absolute z-10" style={getStyle('tel 1')}>
         <Image src="/images/extracted/tel_1.png" alt="2020" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2020')}>
         <span className="font-bold text-[36px] text-mg-purple">2020</span>
      </div>

      {/* 2021 */}
      <div className="absolute z-10" style={{ top: `${2304 - Y_OFFSET}px`, left: '239px', width: '216px', height: '292px' }}>
         <Image src="/images/extracted/test_3_1.png" alt="2021" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2021')}>
         <span className="font-bold text-[36px] text-mg-purple">2021</span>
      </div>

      {/* 2022 */}
      <div className="absolute z-10" style={getStyle('part 3 1')}>
         <Image src="/images/extracted/part_3_1.png" alt="2022" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2022')}>
         <span className="font-bold text-[36px] text-mg-purple">2022</span>
      </div>

      {/* 2023 */}
      <div className="absolute z-10" style={getStyle('pbl 1')}>
         <Image src="/images/extracted/pbl_1.png" alt="2023" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2023')}>
         <span className="font-bold text-[36px] text-mg-purple">2023</span>
      </div>

      {/* 2025 (Figma order has 2025 before 2024!) */}
      <div className="absolute z-10" style={getStyle('storytelling 1')}>
         <Image src="/images/extracted/storytelling_1.png" alt="2025" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2025')}>
         <span className="font-bold text-[36px] text-mg-purple">2025</span>
      </div>

      {/* 2024 */}
      <div className="absolute z-10" style={getStyle('ignite-02 1')}>
         <Image src="/images/extracted/ignite-02_1.png" alt="2024" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2024')}>
         <span className="font-bold text-[36px] text-mg-purple">2024</span>
      </div>

      {/* 2026 */}
      <div className="absolute z-10" style={getStyle('dd 1')}>
         <Image src="/images/extracted/dd_1.png" alt="2026" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#E7E2F8] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2026')}>
         <span className="font-bold text-[36px] text-mg-purple">2026</span>
      </div>

    </div>
  );
}
