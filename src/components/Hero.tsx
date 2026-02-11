"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, BookOpen, ShoppingCart } from "lucide-react";
import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";
import Header from "./Header";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { openBook } = useBook();

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % books.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + books.length) % books.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <Header />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,224,208,0.08),transparent_60%)]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-turquoise/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-turquoise/3 rounded-full blur-3xl" />

      <div className="relative z-10 flex-1 flex items-center pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text content */}
            <div className="text-center lg:text-left animate-fadeInUp">
              <div className="inline-block px-4 py-1.5 rounded-full border border-turquoise/20 bg-turquoise/5 mb-6">
                <span className="text-turquoise text-xs sm:text-sm uppercase tracking-widest font-medium">
                  A Twelve-Book Epic Fantasy Saga
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                <span className="heading-gradient font-serif">Aztec Samurai</span>
                <br />
                <span className="text-cream">Adventures</span>
              </h1>

              <p className="text-cream/60 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-4 font-serif italic">
                &ldquo;Spear, steel, and sun-magic against warlords, sorcerers, and demons
                who seek to conquer, enslave, and erase.&rdquo;
              </p>

              <p className="text-cream/40 text-sm mb-8 max-w-lg mx-auto lg:mx-0">
                By Ketan Shukla — 12 Books &middot; 288 Chapters &middot; One Epic War
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amazon flex items-center justify-center gap-2 text-base"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Buy This Series on Amazon
                </a>
                <button
                  onClick={() => openBook(currentSlide)}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-turquoise/30 text-turquoise hover:bg-turquoise/10 transition-all duration-300 font-medium"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore Book {books[currentSlide].roman}
                </button>
              </div>
            </div>

            {/* Right: Book carousel */}
            <div
              className="relative flex flex-col items-center"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Book cover display */}
              <div className="relative w-64 sm:w-72 lg:w-80 aspect-[2/3] mb-8">
                {books.map((book, index) => (
                  <div
                    key={book.id}
                    className={`absolute inset-0 transition-all duration-700 cursor-pointer ${
                      index === currentSlide
                        ? "opacity-100 scale-100 z-10"
                        : index === (currentSlide + 1) % books.length
                        ? "opacity-30 scale-90 translate-x-16 z-0"
                        : index === (currentSlide - 1 + books.length) % books.length
                        ? "opacity-30 scale-90 -translate-x-16 z-0"
                        : "opacity-0 scale-75 z-0"
                    }`}
                    onClick={() => {
                      if (index === currentSlide) openBook(index);
                      else setCurrentSlide(index);
                    }}
                  >
                    <div
                      className="w-full h-full rounded-lg shadow-professional overflow-hidden border border-white/10"
                      style={{
                        background: `linear-gradient(135deg, ${book.color}22, #141414, ${book.color}11)`,
                      }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                        <div
                          className="text-6xl font-serif font-bold mb-4"
                          style={{ color: book.color }}
                        >
                          {book.roman}
                        </div>
                        <h3 className="text-xl font-bold text-cream mb-2">
                          {book.title}
                        </h3>
                        <p className="text-cream/50 text-sm italic">
                          {book.subtitle}
                        </p>
                        <div className="mt-4 px-3 py-1 rounded-full text-xs font-medium border"
                          style={{ borderColor: `${book.color}44`, color: book.color }}>
                          {book.act}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-6">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-turquoise/10 transition-all"
                  aria-label="Previous book"
                >
                  <ChevronLeft className="w-5 h-5 text-turquoise" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {books.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-turquoise w-6"
                          : "bg-cream/20 hover:bg-cream/40"
                      }`}
                      aria-label={`Go to book ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-turquoise/10 transition-all"
                  aria-label="Next book"
                >
                  <ChevronRight className="w-5 h-5 text-turquoise" />
                </button>
              </div>

              {/* Current book info */}
              <div className="mt-6 text-center">
                <p className="text-turquoise font-medium text-sm">
                  Book {books[currentSlide].roman} — {books[currentSlide].title}
                </p>
                <p className="text-cream/40 text-xs mt-1">
                  Focus: {books[currentSlide].focusCharacter}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-turquoise/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-turquoise/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
