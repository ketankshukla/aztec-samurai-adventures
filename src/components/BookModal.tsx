"use client";

import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";

export default function BookModal() {
  const { selectedBookIndex, closeBook, goToNextBook, goToPrevBook } =
    useBook();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever the book changes
  useEffect(() => {
    if (selectedBookIndex !== null && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [selectedBookIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedBookIndex === null) return;
      if (e.key === "Escape") closeBook();
      if (e.key === "ArrowRight") goToNextBook();
      if (e.key === "ArrowLeft") goToPrevBook();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBookIndex, closeBook, goToNextBook, goToPrevBook]);

  if (selectedBookIndex === null) return null;

  const book = books[selectedBookIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4"
      onClick={closeBook}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal wrapper — nav arrows live here so they stay fixed */}
      <div
        className="relative z-10 w-full sm:max-w-4xl max-h-[100vh] sm:max-h-[90vh] sm:rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeBook}
          className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/70 border border-white/30 flex items-center justify-center hover:bg-black/90 hover:border-white/50 transition-all"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-cream/80" />
        </button>

        {/* Navigation arrows — positioned on the non-scrolling wrapper */}
        {selectedBookIndex > 0 && (
          <button
            onClick={goToPrevBook}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 hover:border-white/40 transition-all"
            aria-label="Previous book"
          >
            <ChevronLeft className="w-6 h-6 text-turquoise" />
          </button>
        )}
        {selectedBookIndex < books.length - 1 && (
          <button
            onClick={goToNextBook}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 hover:border-white/40 transition-all"
            aria-label="Next book"
          >
            <ChevronRight className="w-6 h-6 text-turquoise" />
          </button>
        )}

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="overflow-y-auto max-h-[100vh] sm:max-h-[90vh] glass-dark sm:rounded-2xl animate-fadeInScale"
        >
          {/* Header with gradient */}
          <div
            className="relative p-8 sm:p-12 pb-6"
            style={{
              background: `linear-gradient(135deg, ${book.color}15, transparent, ${book.color}08)`,
            }}
          >
            <div className="flex flex-col sm:flex-row gap-8 items-start">
              {/* Book cover */}
              <div className="w-40 sm:w-48 flex-shrink-0">
                <img
                  src={book.coverImage}
                  alt={`Book ${book.roman}: ${book.title}`}
                  className="w-full h-auto rounded-lg shadow-professional border border-white/10"
                />
              </div>

              {/* Book info */}
              <div className="flex-1">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium border mb-3"
                  style={{
                    borderColor: `${book.color}44`,
                    color: book.color,
                  }}
                >
                  {book.act}
                </div>
                <h2 className="text-2xl sm:text-4xl font-bold font-serif text-cream mb-1">
                  Book {book.roman}: {book.title}
                </h2>
                <p className="text-cream/50 italic text-base mb-4">
                  {book.subtitle}
                </p>

                <div className="text-cream/40 text-base mb-4">
                  <span className="text-turquoise font-medium">Focus:</span>{" "}
                  {book.focusCharacter}
                </div>

                {/* Epigraph */}
                <blockquote className="border-l-2 border-turquoise/30 pl-4 mb-6">
                  <p className="text-cream/60 italic font-serif text-base">
                    &ldquo;{book.epigraph.quote}&rdquo;
                  </p>
                  <cite className="text-turquoise/60 text-sm mt-1 block not-italic">
                    — {book.epigraph.author}
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-8 sm:px-12 py-6 border-t border-white/5">
            <h3 className="text-lg font-bold text-cream mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-turquoise" />
              About This Book
            </h3>
            <p className="text-cream/60 leading-relaxed text-base">
              {book.elaborateDescription}
            </p>
          </div>

          {/* Chapters */}
          <div className="px-8 sm:px-12 py-6 border-t border-white/5">
            <h3 className="text-lg font-bold text-cream mb-4">
              Chapters ({book.chapters.length})
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {book.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${book.color}20`,
                      color: book.color,
                    }}
                  >
                    {chapter.number}
                  </span>
                  <div>
                    <span className="text-cream/70 text-base font-medium">
                      {chapter.title}
                    </span>
                    <p className="text-cream/40 text-sm mt-0.5 leading-relaxed">
                      {chapter.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer nav */}
          <div className="px-8 sm:px-12 py-6 border-t border-white/5 flex items-center justify-between">
            <button
              onClick={goToPrevBook}
              disabled={selectedBookIndex === 0}
              className="text-sm text-cream/40 hover:text-turquoise disabled:opacity-30 disabled:hover:text-cream/40 transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Book
            </button>
            <span className="text-cream/30 text-xs">
              Book {selectedBookIndex + 1} of {books.length}
            </span>
            <button
              onClick={goToNextBook}
              disabled={selectedBookIndex === books.length - 1}
              className="text-sm text-cream/40 hover:text-turquoise disabled:opacity-30 disabled:hover:text-cream/40 transition-colors flex items-center gap-1"
            >
              Next Book
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
