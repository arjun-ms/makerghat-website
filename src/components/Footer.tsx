import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4A3A80] text-[#F1EEF9] px-6 md:px-16 py-16 flex flex-col md:flex-row justify-between gap-12 border-t-[8px] border-[#362C5F]">
      <div className="w-full md:w-1/4 flex flex-col">
        <h3 className="font-parkinsans font-bold text-4xl text-white leading-tight">Connect<br />with Us</h3>
        <div className="mt-8 space-y-4 font-outfit text-base">
          <Link href="#" className="block hover:text-white">About Us</Link>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>+91 9447756484</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>info@makerghat.org</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col">
        <h4 className="font-parkinsans font-semibold text-xl text-white mb-6">Resources</h4>
        <ul className="space-y-4 font-outfit text-base">
          <li><Link href="#" className="hover:text-white">Blueprint to our makerspaces</Link></li>
          <li><Link href="#" className="hover:text-white">IGNITE Incubator Program</Link></li>
          <li><Link href="#" className="hover:text-white">MakerGaon Fellowship</Link></li>
          <li><Link href="#" className="hover:text-white">Curriculum Resources</Link></li>
          <li><Link href="#" className="hover:text-white">Dashboard</Link></li>
          <li><Link href="#" className="hover:text-white">Reports</Link></li>
        </ul>
      </div>

      <div className="w-full md:w-1/4 flex flex-col">
        <h4 className="font-parkinsans font-semibold text-xl text-white mb-6">FAQs</h4>
        <ul className="space-y-4 font-outfit text-base">
          <li><Link href="#" className="hover:text-white">Space</Link></li>
          <li><Link href="#" className="hover:text-white">Curriculum</Link></li>
          <li><Link href="#" className="hover:text-white">Training</Link></li>
          <li><Link href="#" className="hover:text-white">Evidence</Link></li>
        </ul>
      </div>

      <div className="w-full md:w-1/4 flex flex-col items-start md:items-end">
        <div className="flex items-center gap-2 mb-12">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="#F1805E" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          </svg>
          <span className="font-parkinsans font-bold text-3xl text-white">Maker<br/>Ghat</span>
        </div>
        
        <button className="bg-[#F1805E] text-white px-8 py-3 rounded-[20px] font-outfit text-base mb-8 hover:opacity-90 transition-opacity">
          Subscribe to our newsletter
        </button>

        <div className="flex gap-4 mb-4">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">I</div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">F</div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">Y</div>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">L</div>
        </div>

        <p className="text-sm font-outfit md:text-right mt-4 opacity-80 max-w-[250px]">
          MakerGhat and its assets are licensed under CC BY-SA4.0
        </p>
      </div>
    </footer>
  );
}

