"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BikePreviewProps {
  title: string;
  bikeImage: string;
  bikeName: string;
}

const BikePreview: React.FC<BikePreviewProps> = ({
  title,
  bikeImage,
  bikeName,
}) => {
  const bikeSlug = bikeName.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/bikes/${bikeSlug}`} className="block">
      <div className="group flex border-y-6 border-text-yellow cursor-pointer overflow-hidden">
        {/* Title Section */}
        <div className="bg-text-blue flex items-center px-8 md:px-12 py-8 md:py-12 min-w-[40%] md:min-w-[50%]">
          <h2 className="text-text-yellow text-center text-heading-lg lg:text-display-lg font-display">
            {title}
          </h2>
        </div>

        {/* Bike Image Section */}
        <div className="relative flex-1 bg-gray-200 overflow-hidden">
          <div className="relative w-full h-full min-h-[150px] md:min-h-[200px]">
            <Image
              src={bikeImage}
              alt={title}
              fill
              className="object-cover object-center transition-all duration-300"
            />
            {/* Glossy overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-transparent opacity-0 group-hover:opacity-100 group-hover:via-white/40 transition-all duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BikePreview;