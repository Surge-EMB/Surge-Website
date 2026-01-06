"use client";

import GalleryBlock from "./GalleryBlock";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface BikePageBlockProps {
  title: string;
  bodyText: string;
  images: GalleryImage[];
  variant?: "header" | "body";
  galleryWidth?: number;
  galleryHeight?: number;
  className?: string;
}

export default function BikePageBlock({
  title,
  bodyText,
  images,
  variant = "body",
  galleryWidth = 400,
  galleryHeight = 300,
  className = "",
}: BikePageBlockProps) {
  const titleStyles = {
    header: "text-display-lg md:text-display-xl",
    body: "text-display md:text-display-lg",
  };

  return (
    <div
      className={`flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8 ${className}`}
    >
      {/* Text content */}
      <div className="flex-1 md:max-w-[50%]">
        <h2
          className={`${titleStyles[variant]} font-display text-text-blue italic mb-4`}
        >
          {title}
        </h2>
        <p className="font-body italic text-black leading-relaxed">{bodyText}</p>
      </div>

      {/* Gallery - appears on right on desktop, bottom on mobile */}
      <div className="order-last md:order-none flex-shrink-0">
        <GalleryBlock
          images={images}
          width={galleryWidth}
          height={galleryHeight}
        />
      </div>
    </div>
  );
}