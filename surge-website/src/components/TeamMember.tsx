"use client";

import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  linkedIn?: string;
  imageSrc?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: {
    circle: "w-32 h-32",
    image: 128,
    name: "text-2xl",
    text: "text-base",
  },
  md: {
    circle: "w-48 h-48",
    image: 192,
    name: "text-3xl",
    text: "text-lg",
  },
  lg: {
    circle: "w-64 h-64",
    image: 256,
    name: "text-4xl",
    text: "text-xl",
  },
};

export default function TeamMember({
  name,
  role,
  linkedIn,
  imageSrc,
  size = "md",
}: TeamMemberProps) {
  const styles = sizeClasses[size];

  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${styles.circle} rounded-full overflow-hidden bg-text-blue`}>
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={`${name} headshot`}
            width={styles.image}
            height={styles.image}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <h3 className={`font-display ${styles.name} text-text-primary mt-6`}>
        {name}
      </h3>

      <p className={`font-body ${styles.text} text-text-primary mt-1`}>
        {role}
      </p>

      {linkedIn && (
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-body ${styles.text} text-text-primary hover:text-accent transition-colors duration-normal mt-1`}
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}