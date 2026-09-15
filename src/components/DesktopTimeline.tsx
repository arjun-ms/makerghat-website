import React from 'react';
import Image from 'next/image';

const timelineNodes = [
  {
    year: '2018',
    side: 'left',
    top: 1191, // Above Y=1202 line
    left: 215,
    image: '/images/extracted/powai_1.png',
    decor: '/images/extracted/tools.png',
    decorPos: 'bottom-[40px] right-[-60px] w-[60px] h-[60px]',
    icon: '/images/extracted/yellow-up-3-arrows.png',
    iconPos: 'left-[-90px] top-[271px] w-[70px] h-[100px]'
  },
  {
    year: '2019',
    side: 'right',
    top: 1191, // Above Y=1202 line
    right: 199,
    image: '/images/extracted/3d_1.png',
    decor: '/images/extracted/money_on_hand.png',
    decorPos: 'bottom-[60px] left-[-70px] w-[80px] h-[80px]',
    bgDecor: '/images/extracted/green_Ellipse_137.png',
    bgDecorPos: '-right-[199px] top-[291px] w-[250px] h-[250px] -z-10',
    icon: '/images/extracted/red-double-arrow.png', // red double arrows going down-ish? Wait, 2019 has down arrows in the reference? Let's skip red-double-arrow if unsure, 2019 has red down arrows in 2..png
    iconPos: 'right-[-80px] top-[291px] w-[20px] h-[40px] transform rotate-90'
  },
  {
    year: '2020',
    side: 'right',
    top: 1551, // Adjusted top
    right: 199,
    image: '/images/extracted/tel_1.png',
    decor: '/images/extracted/virus.png',
    decorPos: 'bottom-[0px] left-[-70px] w-[70px] h-[70px]',
    icon: '/images/extracted/red-double-arrow.png',
    iconPos: 'top-[-50px] left-[-80px] w-[30px] h-[30px] transform rotate-180'
  },
  {
    year: '2021',
    side: 'left',
    top: 1751, // Adjusted top
    left: 215,
    image: '/images/extracted/tn3_1.png',
    decor: '/images/extracted/taj-mahal.png',
    decorPos: 'bottom-[-30px] right-[79px] w-[100px] h-[100px]',
    bgDecor: '/images/extracted/green_state.png',
    bgDecorPos: '-left-[225px] -top-[271px] -z-10 w-[280px] h-[280px]',
    icon: '/images/extracted/red-double-arrow.png',
    iconPos: '-left-[195px] top-[371px] w-[20px] h-[40px] transform rotate-90'
  },
  {
    year: '2022',
    side: 'left',
    top: 1851, // Above Y=1832 line
    left: 215,
    image: '/images/extracted/part_3_1.png',
    bgDecor: '/images/extracted/red-state.png',
    bgDecorPos: '-left-[225px] -top-[271px] -z-10 w-[280px] h-[280px]',
  },
  {
    year: '2023',
    side: 'right',
    top: 1951, // Above Y=1984 line
    right: 199,
    image: '/images/extracted/storytelling_1.png',
    decor: '/images/extracted/pen-paper-degree.png',
    decorPos: 'bottom-[40px] left-[-90px] w-[80px] h-[80px]',
    bgDecor: '/images/extracted/yellow-circle-board.png',
    bgDecorPos: '-left-[225px] -top-[271px] -z-10 w-[300px] h-[300px]',
  },
  {
    year: '2025',
    side: 'left',
    top: 2231, // Above Y=2320 line
    left: 215,
    image: '/images/extracted/ignite-02_1.png',
    decor: '/images/extracted/STEM.png',
    decorPos: 'top-[271px] right-[-100px] w-[100px] h-[100px]',
    bgDecor: '/images/extracted/Purple_Rectangle.png',
    bgDecorPos: '-left-[165px] top-[271px] -z-10 w-[200px] h-[200px]',
    icon: '/images/extracted/red-double-arrow.png',
    iconPos: 'top-[231px] left-[-70px] w-[20px] h-[40px] transform rotate-90'
  },
  {
    year: '2024',
    side: 'right',
    top: 2331, // Above Y=2320 line
    right: 199,
    image: '/images/extracted/Group_259.png',
    decor: '/images/extracted/rocket.png',
    decorPos: 'top-[-40px] right-[-40px] w-[60px] h-[60px]',
    imageContainerClass: 'w-[400px] h-[250px] relative mt-4',
    containerClass: 'w-[400px]',
    icon: '/images/extracted/red-double-arrow.png',
    iconPos: 'top-[-40px] left-[-40px] w-[30px] h-[30px] transform rotate-180'
  },
  {
    year: '2026',
    side: 'left',
    top: 2591, // Above Y=2616 line
    left: 585,
    image: '/images/extracted/dd_(discovery_diary_book).png',
    bgDecor: '/images/extracted/jigsaw_puzzle_piece.png',
    bgDecorPos: '-left-[275px] top-[271px] -z-10 w-[160px] h-[160px]',
    containerClass: 'w-[400px]',
    imageContainerClass: 'w-[400px] h-[250px] relative',
    icon: '/images/extracted/red-double-arrow.png',
    iconPos: 'right-[-40px] top-[231px] w-[20px] h-[40px] transform rotate-90'
  }
];

export default function DesktopTimeline() {
  return (
    <div id="desktop-timeline" className="hidden lg:block relative w-full h-[3200px]">
      
      {/* SVG Backbone with dashed overlay (Exact Figma coordinates adjusted by -800px offset) */}
      <div className="absolute top-[231px] left-[135px] w-[1226px] h-[2655px] pointer-events-none z-0">
        <Image src="/images/extracted/green-line.svg" alt="Green Path" fill className="object-contain object-top" />
        <Image src="/images/extracted/white-dashed-line-top-of-green-line.svg" alt="Dashed Path" fill className="object-contain object-top" />
      </div>

      {/* 1. Our Mission (Top Left) */}
      <div className="absolute top-[80px] left-[80px] w-[450px] z-10">
        <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-4">Our mission</h3>
        <p className="text-[16px] leading-[26px] text-[#4A4A4A] font-medium pr-10">
          Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
        </p>
      </div>

      <div className="absolute top-[60px] left-[490px] w-[80px] h-[80px] z-10">
        <Image src="/images/extracted/green-hexagon.png" alt="Decoration" fill className="object-contain" />
      </div>

      <div className="absolute top-[220px] left-[40px] w-[100px] h-[50px] z-10">
        <Image src="/images/extracted/paper-aeroplane.png" alt="Aeroplane" fill className="object-contain" />
      </div>

      {/* Tower image (top right) - Exact Figma coordinates adjusted by -800px offset */}
      <div className="absolute top-[41px] left-[1069px] w-[292px] h-[194px] z-10">
        <Image src="/images/extracted/tower_1@2x.png" alt="Kids Building Tower" fill className="object-cover rounded-[16px]" />
        <div className="absolute -top-[10px] right-[-10px] w-[40px] h-[40px]">
           <Image src="/images/extracted/sparkling_star.png" alt="Star" fill className="object-contain" />
        </div>
      </div>
      
      <div className="absolute top-[371px] right-[379px] w-[200px] h-[100px] z-0 pointer-events-none">
        <Image src="/images/extracted/yellow-orange-line.png" alt="Line" fill className="object-contain" />
      </div>

      {/* Bulb at inner corner (X=655, Y=308) */}
      <div className="absolute top-[501px] left-[750px] w-[80px] h-[80px] z-20">
         <Image src="/images/extracted/bulb.png" alt="Bulb" fill className="object-contain" />
      </div>

      {/* PBL image on the Y=308 horizontal line */}
      <div className="absolute top-[366px] left-[265px] w-[350px] h-[180px] z-10">
        <Image src="/images/extracted/pbl_1.png" alt="PBL" fill className="object-contain" />
      </div>

      {/* 2. Why Making (Middle Right) - Below Y=308 line, right of X=5 line */}
      <div className="absolute top-[631px] right-[179px] w-[420px] z-10">
        <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-4">Why making?</h3>
        <p className="text-[16px] leading-[26px] text-[#4A4A4A] font-medium">
          Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
        </p>
        <div className="absolute top-[-30px] -left-[215px] w-[50px] h-[50px]">
          <Image src="/images/extracted/diode.png" alt="Diode" fill className="object-contain" />
        </div>
        <div className="absolute bottom-[-60px] -left-[275px] w-[70px] h-[70px]">
          <Image src="/images/extracted/scissors.png" alt="Scissors" fill className="object-contain" />
        </div>
      </div>

      {/* Green circle at bottom left corner (X=5, Y=878) */}
      <div className="absolute top-[1079px] left-[-25px] w-[60px] h-[60px] z-20">
        <Image src="/images/extracted/green-circle.png" alt="Circle" fill className="object-contain" />
      </div>

      {/* 3. How did MG start - Above Y=878 horizontal line */}
      <div className="absolute top-[931px] left-[195px] w-[380px] z-10">
        <h3 className="font-semibold text-[32px] leading-[39px] text-mg-purple mb-4">How did MG start</h3>
        <p className="text-[16px] leading-[26px] text-[#4A4A4A] font-medium">
          MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </p>
      </div>

      {/* Group 423 under the text, near X=5, Y=878 */}
      <div className="absolute top-[1051px] left-[195px] w-[280px] h-[120px] z-10">
        <Image src="/images/extracted/Group_423_(arrows,questionmarks,magnifyglass,green-steps).png" alt="Decor" fill className="object-contain" />
      </div>

      {/* Founders group picture on right shelf, above Y=878 */}
      <div className="absolute top-[751px] right-[129px] w-[550px] h-[350px] z-10">
        <Image src="/images/extracted/group-picture.png" alt="How MG started" fill className="object-cover rounded-[16px]" />
      </div>

      {/* Timeline Nodes */}
      {timelineNodes.map((node) => (
        <div 
          key={node.year} 
          className={`absolute z-10 ${node.containerClass || 'w-[350px]'}`}
          style={{ 
            top: `${node.top}px`, 
            ...(node.side === 'left' ? { left: `${node.left}px` } : { right: `${node.right}px` })
          }}
        >
           <div className="bg-[#E7E2F8] inline-flex items-center px-6 py-2 rounded-[20px] mb-6 shadow-sm relative">
             <span className="font-bold text-[36px] text-mg-purple">{node.year}</span>
             <span className="text-mg-purple text-2xl ml-3">▼</span>
             {node.icon && (
               <div className={`absolute ${node.iconPos}`}>
                  <Image src={node.icon} alt="Icon" fill className="object-contain" />
               </div>
             )}
           </div>
           <div className={node.imageContainerClass || "w-[350px] h-[250px] relative"}>
             <Image src={node.image} alt={node.year} fill className="object-contain z-10" />
             {node.bgDecor && (
               <div className={`absolute ${node.bgDecorPos}`}>
                  <Image src={node.bgDecor} alt="Background" fill className="object-contain" />
               </div>
             )}
           </div>
           {node.decor && (
             <div className={`absolute ${node.decorPos}`}>
                <Image src={node.decor} alt="Decoration" fill className="object-contain" />
             </div>
           )}
        </div>
      ))}

    </div>
  );
}
