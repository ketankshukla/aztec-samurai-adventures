"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sword } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#books", label: "The Books" },
    { href: "#author", label: "The Author" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-dark shadow-turquoise py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Sword className="w-7 h-7 text-turquoise group-hover:text-turquoise-light transition-colors" />
            <span className="text-lg sm:text-xl font-bold tracking-wide">
              <span className="gradient-text-turquoise">AZTEC SAMURAI</span>
              <span className="text-cream/60 ml-2 hidden sm:inline">ADVENTURES</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/70 hover:text-turquoise transition-colors duration-300 text-sm uppercase tracking-widest font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amazon text-sm px-6 py-2"
            >
              Buy on Amazon
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream/70 hover:text-turquoise transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-turquoise/10 animate-fadeInUp">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream/70 hover:text-turquoise transition-colors text-sm uppercase tracking-widest"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amazon text-sm px-6 py-2 text-center"
              >
                Buy on Amazon
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
