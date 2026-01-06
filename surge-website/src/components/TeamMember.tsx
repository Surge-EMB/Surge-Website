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
    name: "text-heading-md font-display text-black",
    text: "text-small font-body text-black",
  },
  md: {
    circle: "w-48 h-48",
    image: 192,
    name: "text-heading-lg font-display text-black",
    text: "text-body font-body text-black",
  },
  lg: {
    circle: "w-52 h-52",
    image: 256,
    name: "text-heading-xl font-display text-black",
    text: "text-subheading font-body text-black",
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
          className={`font-body ${styles.text} text-black hover:text-accent transition-colors duration-normal mt-1`}
        >
          LinkedIn
        </a>
      )}
    </div>
  );
}