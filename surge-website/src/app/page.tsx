"use client";

import Image from "next/image";
import ImageBlock from "../components/ImageBlock";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Blue Background */}
      <section className="bg-text-blue py-12 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Description Text */}
          <div className="flex-1">
            <p className="text-white text-heading-md font-body leading-relaxed">
              Surge is a student-led electric motorcycle engineering team at UC Berkeley. 
              We design, build, and test high-performance electric motorcycles, giving students 
              hands-on experience in vehicle systems, manufacturing, and integration. Our work 
              emphasizes sound engineering, practical fabrication, and real-world performance.
            </p>
          </div>

          {/* Right - Bike Image with Border */}
          <div className="flex-shrink-0">
            <ImageBlock
              src="/images/bikePlaceholder.png"
              alt="Surge electric motorcycle"
              width={450}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-3 bg-text-yellow" />

      {/* Bike Introduction Section - White Background */}
      <section className="bg-white py-12 px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="flex flex-col md:flex-row justify-evenly">
            <h1 className="text-display md:text-display-xl md:mb-8 font-display text-text-blue">
              INTRODUCING
            </h1>
            <h1 className="text-display md:text-display-xl md:mb-8 font-display italic text-black">
              Thunderbird
            </h1>
          </div>

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left - Stats Text */}
            <div className="flex-1">
              <p className="text-heading-md font-body text-black leading-relaxed">
                Our current bike is Surge’s first project and foundation. Built on a 2006 
                Honda CBR600RR purchased with a failed engine, the platform was stripped of 
                all combustion components and repurposed as the basis for a full electric 
                conversion. This project is allowing the team to learn through hands-on design, 
                fabrication, and integration, and will directly inform future fully custom 
                electric superbike builds.
              </p>
            </div>

            {/* Right - Bike Image */}
            <div className="flex-shrink-0">
              <ImageBlock
                src="/images/bikePlaceholder.png"
                alt="CBR electric motorcycle"
                width={400}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}