import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-[#4A3B7F] font-outfit text-white relative">
      <div className="w-full relative h-[110px] -mt-[110px]">
        <Image src="/images/extracted/Frame_269.png" alt="City Skyline" fill className="object-cover object-bottom" />
      </div>
      <div className="max-w-[1440px] mx-auto px-6 md:px-[90px] py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Column 1: Connect with Us */}
          <div className="flex flex-col gap-6">
            <h2 className="font-bold text-[32px] md:text-[40px] leading-[1.2]">
              Connect<br />with Us
            </h2>
            <Link href="/about" className="text-[16px] hover:underline">About Us</Link>
            <div className="flex flex-col gap-3 mt-4">
              <a href="tel:+919447756484" className="flex items-center gap-3 text-[16px] hover:text-mg-orange transition-colors">
                <FaPhoneAlt /> +91 9447756484
              </a>
              <a href="mailto:info@makerghat.org" className="flex items-center gap-3 text-[16px] hover:text-mg-orange transition-colors">
                <FaEnvelope /> info@makerghat.org
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[20px] mb-2">Resources</h3>
            <Link href="/blueprint" className="text-[16px] hover:underline text-gray-200">Blueprint to our makerspaces</Link>
            <Link href="/ignite" className="text-[16px] hover:underline text-gray-200">IGNITE Incubator Program</Link>
            <Link href="/fellowship" className="text-[16px] hover:underline text-gray-200">MakerGaon Fellowship</Link>
            <Link href="/curriculum" className="text-[16px] hover:underline text-gray-200">Curriculum Resources</Link>
            <Link href="/dashboard" className="text-[16px] hover:underline text-gray-200">Dashboard</Link>
            <Link href="/reports" className="text-[16px] hover:underline text-gray-200">Reports</Link>
          </div>

          {/* Column 3: FAQs */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-[20px] mb-2">FAQs</h3>
            <Link href="/space" className="text-[16px] hover:underline text-gray-200">Space</Link>
            <Link href="/curriculum" className="text-[16px] hover:underline text-gray-200">Curriculum</Link>
            <Link href="/training" className="text-[16px] hover:underline text-gray-200">Training</Link>
            <Link href="/evidence" className="text-[16px] hover:underline text-gray-200">Evidence</Link>
          </div>

          {/* Column 4: Logo & Newsletter */}
          <div className="flex flex-col gap-6 md:items-end">
            <div className="text-[32px] font-bold flex items-center gap-2">
              <span className="text-mg-orange">✋</span>
              Maker<br/>Ghat
            </div>
            <button className="bg-mg-orange text-white px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors w-full md:w-auto">
              Subscribe to our newsletter
            </button>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-mg-orange transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-mg-orange transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-mg-orange transition-colors">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-mg-orange transition-colors">
                <FaLinkedinIn size={16} />
              </a>
            </div>
            <div className="text-[12px] text-gray-300 text-right mt-8">
              MakerGhat and its assets are licensed<br/>under CC BY-SA 4.0
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
