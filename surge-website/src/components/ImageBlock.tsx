"use client";

import Image from "next/image";

interface ImageBlockProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function ImageBlock({
  src,
  alt = "",
  width = 400,
  height = 300,
  className = "",
}: ImageBlockProps) {
  return (
    <div className={`inline-block ${className}`}>
      <div className="border-4 border-text-yellow">
        <div className="border-4 border-text-blue">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="block"
          />
        </div>
      </div>
    </div>
  );
}