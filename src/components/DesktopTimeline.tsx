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
    <div id="desktop-timeline" className="hidden lg:block relative w-full max-w-[1440px] mx-auto aspect-[1440/3200] overflow-visible">
      {/* 
        This absolute div holds the exact 1440x3200 pixel layout.
        CSS transforms scale it down so it fits gracefully without wrapping on screens narrower than 1440px.
      */}
      <div className="absolute top-0 left-0 w-[1440px] h-[3200px] origin-top-left [transform:scale(min(1,calc(100vw/1440)))]">

      {/* SVG Backbone with dashed overlay */}
      <div className="absolute z-0 pointer-events-none" style={getStyle('Vector 61')}>
        <Image src="/images/extracted/combined-green-line.svg" alt="Combined Green Path" fill className="object-contain object-top" />
      </div>

      {/* Decorative Elements */}
      {/* Bulb sits above the green line */}
      <img src="/images/extracted/bulb.png" alt="bulb" className="absolute top-[117px] left-[819px] w-[113px] object-contain z-10 pointer-events-none" />
      
      {/* Paper aeroplane is at left -40px (half outside) */}
      <img src="/images/extracted/paper-aeroplane.png" alt="paper aeroplane" className="absolute top-[343px] left-[-40px] w-[90px] object-contain z-50 pointer-events-none" />
      
      {/* Yellow-orange line stretched to span between the outer plane and the bulb */}
      <img src="/images/extracted/yellow-orange-line.png" alt="yellow-orange line" className="absolute top-[191px] left-[50px] w-[802px] object-contain z-0 pointer-events-none" />
      
      {/* Diode is positioned just to the left of "Why making?" and rotated -55deg */}
      <img src="/images/extracted/diode.png" alt="diode" className="absolute top-[363px] left-[688px] w-[41px] object-contain z-10 pointer-events-none" style={{ transform: 'rotate(-54.97deg)' }} />
      
      {/* Scissors */}
      <img src="/images/extracted/scissors.png" alt="scissors" className="absolute top-[441px] left-[590px] w-[129px] object-contain z-10 pointer-events-none" />
      
      {/* Green circle is to the left of the scissors */}
      <img src="/images/extracted/green-circle.png" alt="green circle" className="absolute top-[477px] left-[544px] w-[24px] object-contain z-10 pointer-events-none" />
      
      {/* Other small decorations */}
      <img src="/images/extracted/green-hexagon.png" alt="green hexagon" className="absolute top-[87px] left-[657px] w-[63px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/sparkling star.png" alt="sparkling star" className="absolute top-[10px] right-[54px] w-[55px] object-contain z-10 pointer-events-none" />



      {/* Top section elements */}
      <div className="absolute top-[80px] left-[80px] w-[450px] z-10">
        <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-4">Our mission</h3>
        <p className="text-[16px] leading-[26px] text-[#4A4A4A] font-medium pr-10">
          Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
        </p>
      </div>

      <div className="absolute z-10" style={{ top: coordsData['tower 1'].y - 800, right: 0, width: coordsData['tower 1'].width, height: coordsData['tower 1'].height }}>
        <Image src="/images/extracted/tower_1@2x.png" alt="Kids Building Tower" fill className="object-cover rounded-tl-none rounded-bl-none rounded-r-[16px]" />
        <img src="/images/extracted/Rectangle 1042 (redline).png" alt="red line" className="absolute left-[-2px] top-0 h-full w-[5px] z-20 object-cover rounded-full" />
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

      <div className="absolute top-[680px] left-[180px] w-[450px] z-10">
        <h3 className="font-semibold text-[36px] md:text-[32px] leading-[39px] text-[#4A3B80] mb-4">How did MG start</h3>
        <p className="text-[16px] leading-[26px] text-[#362B5E] font-medium pr-10">
          MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </p>
      </div>

      {/* Group picture */}
      <div className="absolute z-10" style={{ top: '680px', left: '701px', width: '592px', height: '403px' }}>
        <Image src="/images/extracted/group-picture.png" alt="How MG started" fill className="object-cover rounded-[16px]" />
      </div>

      {/* 2.2 Section Decorators */}
      <div className="absolute top-[884px] left-[180px] z-10 pointer-events-none">
        <img src="/images/extracted/Group 423 (arrows,questionmarks,magnifyglass,green-steps).png" alt="Group 423" className="w-[530px] object-contain" />
      </div>
      <img src="/images/extracted/yellow-up-3-arrows.png" alt="yellow up arrows" className="absolute top-[1200px] left-[60px] w-[50px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/tools.png" alt="tools" className="absolute top-[1270px] left-[483px] w-[60px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/money on hand.png" alt="money on hand" className="absolute top-[1270px] left-[850px] w-[70px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/green Ellipse 137.png" alt="green Ellipse" className="absolute top-[1280px] left-[1180px] w-[140px] object-contain z-0 pointer-events-none" />
      <img src="/images/extracted/red-double-arrow.png" alt="red double arrow 1" className="absolute top-[1130px] left-[660px] w-[60px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/red-double-arrow.png" alt="red double arrow 2" className="absolute top-[1490px] left-[750px] w-[30px] object-contain z-10 pointer-events-none transform rotate-180" />

      {/* Lower timeline reference decorators */}
      <img src="/images/extracted/red-state.png" alt="orange state behind 2022" className="absolute top-[1778px] left-[372px] w-[160px] object-contain z-[5] pointer-events-none" />
      <img src="/images/extracted/red-double-arrow.png" alt="red down arrows near 2022" className="absolute top-[2042px] left-[145px] w-[30px] object-contain z-10 pointer-events-none rotate-90" />
      <img src="/images/extracted/yellow-circle-board.png" alt="yellow circle behind 2023" className="absolute top-[1844px] left-[948px] w-[210px] object-contain z-[5] pointer-events-none" />
      <img src="/images/extracted/STEM.png" alt="STEM circles" className="absolute top-[2036px] left-[508px] w-[82px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/hand.png" alt="hand icon" className="absolute top-[2038px] left-[790px] w-[58px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/red-double-arrow.png" alt="red down arrows near 2023" className="absolute top-[1816px] left-[1290px] w-[30px] object-contain z-10 pointer-events-none rotate-90" />
      <img src="/images/extracted/red-double-arrow.png" alt="red small arrows near 2026" className="absolute top-[2478px] left-[570px] w-[30px] object-contain z-10 pointer-events-none" />
      <img src="/images/extracted/jigsaw_puzzle_piece.png" alt="yellow puzzle behind 2026" className="absolute top-[2586px] left-[842px] w-[112px] object-contain z-[5] pointer-events-none" />
      <img src="/images/extracted/red-state.png" alt="orange state behind 2026" className="absolute top-[2590px] left-[892px] w-[130px] object-contain z-[5] pointer-events-none" />
      <img src="/images/extracted/red-double-arrow.png" alt="red down arrows near 2026" className="absolute top-[2544px] left-[1300px] w-[30px] object-contain z-10 pointer-events-none rotate-90" />
      <img src="/images/extracted/rocket.png" alt="rocket icon" className="absolute top-[2210px] left-[1292px] w-[54px] object-contain z-10 pointer-events-none" />

      {/* 2018 */}
      <div className="absolute z-10" style={getStyle('powai 1')}>
         <Image src="/images/extracted/powai_1.png" alt="2018" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2018')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2018 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2019 */}
      <div className="absolute z-10" style={getStyle('3d 1')}>
         <Image src="/images/extracted/3d_1.png" alt="2019" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2019')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2019 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2020 */}
      <div className="absolute z-10" style={getStyle('tel 1')}>
         <Image src="/images/extracted/tel_1.png" alt="2020" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2020')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2020 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2021 */}
      <div className="absolute z-10" style={{ top: `${2304 - Y_OFFSET}px`, left: '239px', width: '216px', height: '292px' }}>
         <Image src="/images/extracted/test_3_1.png" alt="2021" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2021')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2021 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2022 */}
      <div className="absolute z-10" style={getStyle('part 3 1')}>
         <Image src="/images/extracted/part_3_1.png" alt="2022" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2022')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2022 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2023 */}
      <div className="absolute z-10" style={getStyle('pbl 1')}>
         <Image src="/images/extracted/pbl_1.png" alt="2023" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2023')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2023 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2025 (Figma order has 2025 before 2024!) */}
      <div className="absolute z-10" style={getStyle('storytelling 1')}>
         <Image src="/images/extracted/storytelling_1.png" alt="2025" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2025')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2025 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2024 */}
      <div className="absolute z-10" style={getStyle('ignite-02 1')}>
         <Image src="/images/extracted/ignite-02_1.png" alt="2024" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2024')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2024 <span className="text-[20px]">▼</span></span>
      </div>

      {/* 2026 */}
      <div className="absolute z-10" style={getStyle('dd 1')}>
         <Image src="/images/extracted/dd_1.png" alt="2026" fill className="object-contain" />
      </div>
      <div className="absolute bg-[#F3EFE0] inline-flex items-center justify-center rounded-[20px] shadow-sm z-20" style={getYearStyle('2026')}>
         <span className="font-bold text-[36px] text-mg-purple flex items-center gap-2">2026 <span className="text-[20px]">▼</span></span>
      </div>

      </div>
    </div>
  );
}
