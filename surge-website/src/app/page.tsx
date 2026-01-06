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
              Welcome to Surge, UC Berkeley’s premier electric motorcycle racing team.
               We are a club of students tied together by a passion for designing, engineering,
               and fabricating cutting-edge electric vehicles from the ground up. 
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
              CBR Name
            </h1>
          </div>

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            {/* Left - Stats Text */}
            <div className="flex-1">
              <p className="text-heading-md font-body text-black leading-relaxed">
                This bike is the founding project of Surge and 
                represents a full ground-up electric motorcycle conversion. We began with a 2006 Honda 
                CBR600RR purchased in non-running condition and stripped the platform down to the frame to 
                redesign the drivetrain, energy system, and supporting structure around an electric architecture.
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