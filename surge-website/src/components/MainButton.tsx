"use client";

import { motion } from "framer-motion";

interface MainButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MainButton({ 
  children, 
  onClick,
  className = "" 
}: MainButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        bg-text-yellow text-text-blue 
        hover:bg-text-blue hover:text-text-yellow hover:border-text-yellow
        font-display text-display uppercase tracking-wide
        px-8 py-4 rounded-none border-10 border-text-blue 
        transition-colors duration-normal
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}