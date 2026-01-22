"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/team", label: "Team" },
  { href: "/bikes", label: "Bikes" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/join", label: "Join" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-text-yellow border-y-6 border-text-blue">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-30">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 outline-none">
            {/* Replace with your actual logo */}
            <div className="flex flex-col items-center">
              <Image
                src="/images/logo.png"
                alt="SURGE Electric Motorcycles at Berkeley"
                width={150}
                height={60}
                className="h-20 md:h-27 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-10">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 outline-none"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-text-blue block"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-text-blue block"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-text-blue block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t-4 border-text-blue"
          >
            <div className="flex flex-col items-center py-4 gap-2">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

/* Desktop Nav Link */
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`
        font-display text-display-xl lg:text-display text-text-blue uppercase
        hover:scale-110
        transition-transform duration-normal
        outline-none
      `}
    >
      {children}
    </Link>
  );
}

/* Mobile Nav Link */
interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileNavLink({ href, children, onClick }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="font-display text-display text-text-blue uppercase py-0 px-6 hover:bg-text-blue hover:text-text-yellow transition-colors duration-normal outline-none"
    >
      {children}
    </Link>
  );
}