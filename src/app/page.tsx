import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import TeamSection from '@/components/TeamSection';
import PartnerSection from '@/components/PartnerSection';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-mg-light-cream overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-mg-light-cream text-center">
        <h1 className="font-parkinsans font-bold text-4xl md:text-5xl text-mg-purple mb-6">
          The story that built MakerGhat
        </h1>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-mg-dark-purple">
          MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.
        </p>
      </section>

      {/* How did MG start */}
      <section className="px-6 md:px-12 py-12 md:py-20 bg-white flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 md:pr-12">
          <h2 className="font-parkinsans font-semibold text-3xl md:text-4xl text-mg-purple mb-4 md:mb-6">How did MG start</h2>
          <p className="text-base md:text-lg text-mg-dark-purple mb-4">
            MG origin story featuring founders, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden shadow-inner bg-gray-200">
          <Image src="/images/dd-1.png" alt="How MG started" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <Timeline />

      {/* Mission & Vision */}
      <section className="px-6 md:px-12 py-16 md:py-20 bg-white flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-0">
          <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/powai-1.png" alt="Our mission" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="font-parkinsans font-semibold text-3xl md:text-4xl text-mg-purple mb-4 md:mb-6">Our mission</h2>
            <p className="text-base md:text-lg text-mg-dark-purple">
              Our mission is to make hands-on, maker-centered learning accessible across India, empowering young people to think critically, build confidently, and solve real-world problems beyond traditional classrooms.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 md:gap-0">
          <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-200">
            <Image src="/images/pbl-1.png" alt="Why making" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 md:pr-12">
            <h2 className="font-parkinsans font-semibold text-3xl md:text-4xl text-mg-purple mb-4 md:mb-6">Why making?</h2>
            <p className="text-base md:text-lg text-mg-dark-purple">
              Making bridges the gap between knowledge and application through experiential learning. It builds 21st-century skills that empowers our youth to become confident job-seekers and entrepreneurs.
            </p>
          </div>
        </div>
      </section>

      <TeamSection />
      
      <PartnerSection />

      <Footer />
      
      <div className="bg-mg-dark-purple text-center py-4 text-xs md:text-sm text-mg-light-purple px-4">
        MakerGhat and its assets are licensed under CC BY-SA4.0
      </div>
    </div>
  );
}
