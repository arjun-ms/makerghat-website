"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-mg-purple text-mg-light-purple px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between gap-12">
      <div className="w-full md:w-1/3">
        <h3 className="font-parkinsans font-bold text-3xl mb-6 text-white">Connect with Us</h3>
        <p className="text-lg mb-2">Email: info@makerghat.org</p>
        <p className="text-lg mb-6">+91 9447756484</p>
        <div className="flex flex-col gap-4">
          <h4 className="font-parkinsans font-semibold text-xl text-white">Subscribe to our newsletter</h4>
          <form className="flex flex-col sm:flex-row w-full max-w-sm gap-2 sm:gap-0" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter" className="sr-only">Email Address</label>
            <input id="newsletter" type="email" placeholder="Email Address" className="px-4 py-2 sm:rounded-l-md rounded-md sm:rounded-r-none text-black focus:outline-none w-full" required />
            <button type="submit" className="bg-mg-orange text-white px-6 py-2 sm:rounded-r-md rounded-md sm:rounded-l-none font-semibold whitespace-nowrap">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-8 sm:gap-4 md:justify-around">
        <div>
          <h4 className="font-parkinsans font-semibold text-xl text-white mb-4">About Us</h4>
          <ul className="space-y-2">
            <li><Link href="#">Space</Link></li>
            <li><Link href="#">Evidence</Link></li>
            <li><Link href="#">Curriculum</Link></li>
            <li><Link href="#">Training</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-parkinsans font-semibold text-xl text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="#">Blueprint to our makerspaces</Link></li>
            <li><Link href="#">Curriculum Resources</Link></li>
            <li><Link href="#">IGNITE Incubator Program</Link></li>
            <li><Link href="#">MakerGaon Fellowship</Link></li>
            <li><Link href="#">Dashboard</Link></li>
            <li><Link href="#">Reports</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-parkinsans font-semibold text-xl text-white mb-4">FAQs</h4>
        </div>
      </div>
    </footer>
  );
}
