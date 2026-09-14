"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 md:px-12 py-6 bg-white border-b border-gray-100">
      <div className="flex-shrink-0">
        <Image 
          src="/images/extracted/maker_ghat_main_top_left_logo.png" 
          alt="MakerGhat Logo" 
          width={180} 
          height={60} 
          className="object-contain"
        />
      </div>
      
      <button 
        aria-label="Toggle Menu" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden text-black focus:outline-none focus:ring-2 focus:ring-mg-orange rounded-md p-1"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          {isMobileMenuOpen ? (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-[15px] font-semibold text-black items-center">
        <Link href="#" className="hover:text-mg-purple">About us</Link>
        <Link href="#" className="hover:text-mg-purple flex items-center gap-1">
          Space
          <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <Link href="#" className="hover:text-mg-purple">Curriculum</Link>
        <Link href="#" className="hover:text-mg-purple">Training</Link>
        <Link href="#" className="hover:text-mg-purple flex items-center gap-1">
          Evidence
          <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <Link href="#" className="hover:text-mg-purple">Programs</Link>
        <Link href="#" className="hover:text-mg-purple flex items-center gap-1">
          Get involved
          <svg width="8" height="5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100 flex flex-col md:hidden z-50">
          <Link href="#" className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">About us</Link>
          <Link href="#" className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Space</Link>
          <Link href="#" className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Curriculum</Link>
          <Link href="#" className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Training</Link>
          <Link href="#" className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Evidence</Link>
          <Link href="#" className="px-6 py-4 border-b border-gray-50 hover:bg-gray-50">Programs</Link>
          <Link href="#" className="px-6 py-4 hover:bg-gray-50">Get involved</Link>
        </div>
      )}
    </nav>
  );
}
