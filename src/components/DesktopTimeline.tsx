import React from 'react';
import Image from 'next/image';

const timelineNodes = [
  {
    year: '2018',
    side: 'left',
    top: 980,
    left: 50,
    image: '/images/extracted/powai_1.png',
    decor: '/images/extracted/tools.png',
    decorPos: 'bottom-[-60px] right-[50px] w-[80px] h-[80px]',
  },
  {
    year: '2019',
    side: 'right',
    top: 980,
    right: 150,
    image: '/images/extracted/3d_1.png',
    decor: '/images/extracted/money_on_hand.png',
    decorPos: 'bottom-[-60px] left-[-30px] w-[80px] h-[80px]',
    bgDecor: '/images/extracted/green_Ellipse_137.png',
    bgDecorPos: '-right-[80px] top-[0px] w-[250px] h-[250px] -z-10',
  },
  {
    year: '2021',
    side: 'left',
    top: 1320,
    left: 150,
    image: '/images/extracted/tn3_1.png',
    decor: '/images/extracted/taj-mahal.png',
    decorPos: 'bottom-[-60px] right-[20px] w-[100px] h-[100px]',
    bgDecor: '/images/extracted/green_state.png',
    bgDecorPos: '-left-[80px] -z-10 w-[280px] h-[280px]',
    icon: '/images/extracted/red-double-arrow.png',
    iconPos: '-left-[70px] top-[15px] w-[40px] h-[40px]',
  },
  {
    year: '2020',
    side: 'right',
    top: 1320,
    right: 150,
    image: '/images/extracted/tel_1.png',
    decor: '/images/extracted/virus.png',
    decorPos: 'bottom-[0px] left-[-90px] w-[90px] h-[90px]',
    icon: '/images/extracted/red-double-arrow.png',
    iconPos: '-left-[70px] top-[15px] w-[40px] h-[40px] transform rotate-180',
  },
  {
    year: '2022',
    side: 'left',
    top: 1680,
    left: 50,
    image: '/images/extracted/part_3_1.png',
    bgDecor: '/images/extracted/red-state.png',
    bgDecorPos: '-left-[60px] -z-10 w-[280px] h-[280px]',
  },
  {
    year: '2023',
    side: 'right',
    top: 1750,
    right: 50,
    image: '/images/extracted/storytelling_1.png',
    decor: '/images/extracted/pen-paper-degree.png',
    decorPos: 'bottom-[20px] left-[-120px] w-[100px] h-[100px]',
    bgDecor: '/images/extracted/yellow-circle-board.png',
    bgDecorPos: '-left-[100px] -top-[40px] -z-10 w-[300px] h-[300px]',
  },
  {
    year: '2025',
    side: 'left',
    top: 2050,
    left: 100,
    image: '/images/extracted/ignite-02_1.png',
    decor: '/images/extracted/STEM.png',
    decorPos: 'bottom-[60px] right-[-140px] w-[120px] h-[120px]',
    bgDecor: '/images/extracted/Purple_Rectangle.png',
    bgDecorPos: '-left-[60px] top-[40px] -z-10 w-[200px] h-[200px]',
  },
  {
    year: '2024',
    side: 'right',
    top: 2150,
    right: 100,
    image: '/images/extracted/Group_259.png',
    decor: '/images/extracted/rocket.png',
    decorPos: 'top-[-20px] right-[-20px] w-[60px] h-[60px]',
    imageContainerClass: 'w-[400px] h-[250px] relative mt-4',
    containerClass: 'w-[400px]'
  },
  {
    year: '2026',
    side: 'left',
    top: 2420,
    left: 450,
    image: '/images/extracted/dd_(discovery_diary_book).png',
    bgDecor: '/images/extracted/jigsaw_puzzle_piece.png',
    bgDecorPos: '-left-[140px] top-[40px] -z-10 w-[160px] h-[160px]',
    containerClass: 'w-[400px]',
    imageContainerClass: 'w-[400px] h-[250px] relative'
  }
];

export default function DesktopTimeline() {
  return (
    <div className="hidden lg:block relative mx-auto mt-[100px] w-[1228px] h-[2657px]">
      
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

      {/* 3. How did MG start */}
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
