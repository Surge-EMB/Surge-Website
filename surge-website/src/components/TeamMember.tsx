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
    name: "text-heading-md font-display",
    text: "text-small font-body",
  },
  md: {
    circle: "w-48 h-48",
    image: 192,
    name: "text-heading-lg font-display",
    text: "text-body font-body",
  },
  lg: {
    circle: "w-64 h-64",
    image: 256,
    name: "text-heading-xl font-display",
    text: "text-subheading font-body",
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

      <h3 className={`${styles.name}`}>
        {name}
      </h3>

      <p className={`${styles.text}`}>
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