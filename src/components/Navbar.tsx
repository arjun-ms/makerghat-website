import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-6 bg-white border-b border-gray-100">
      <div className="font-parkinsans font-bold text-2xl text-mg-purple">MakerGhat</div>
      
      {/* Mobile Menu Button (Placeholder for behavior) */}
      <div className="md:hidden text-mg-purple">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      <div className="hidden md:flex gap-8 text-lg">
        <Link href="#" className="hover:text-mg-purple">About us</Link>
        <Link href="#" className="hover:text-mg-purple flex items-center gap-1">
          Curriculum
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <Link href="#" className="hover:text-mg-purple flex items-center gap-1">
          Training
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <Link href="#" className="hover:text-mg-purple">Evidence</Link>
        <Link href="#" className="hover:text-mg-purple flex items-center gap-1">
          Programs
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </Link>
        <Link href="#" className="hover:text-mg-purple">Get involved</Link>
      </div>
    </nav>
  );
}
