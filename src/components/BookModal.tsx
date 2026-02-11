"use client";

import { useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  BookOpen,
} from "lucide-react";
import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";

export default function BookModal() {
  const { selectedBookIndex, closeBook, goToNextBook, goToPrevBook } =
    useBook();

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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={closeBook}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-dark rounded-2xl animate-fadeInScale"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeBook}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-turquoise/10 transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-cream/70" />
        </button>

        {/* Navigation arrows */}
        {selectedBookIndex > 0 && (
          <button
            onClick={goToPrevBook}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-turquoise/10 transition-all"
            aria-label="Previous book"
          >
            <ChevronLeft className="w-5 h-5 text-turquoise" />
          </button>
        )}
        {selectedBookIndex < books.length - 1 && (
          <button
            onClick={goToNextBook}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-turquoise/10 transition-all"
            aria-label="Next book"
          >
            <ChevronRight className="w-5 h-5 text-turquoise" />
          </button>
        )}

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
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-cream mb-1">
                {book.title}
              </h2>
              <p className="text-cream/50 italic mb-4">{book.subtitle}</p>

              <div className="text-cream/40 text-sm mb-4">
                <span className="text-turquoise font-medium">Focus:</span>{" "}
                {book.focusCharacter}
              </div>

              {/* Epigraph */}
              <blockquote className="border-l-2 border-turquoise/30 pl-4 mb-6">
                <p className="text-cream/60 italic font-serif text-sm">
                  &ldquo;{book.epigraph.quote}&rdquo;
                </p>
                <cite className="text-turquoise/60 text-xs mt-1 block not-italic">
                  — {book.epigraph.author}
                </cite>
              </blockquote>

              {/* Buy buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amazon text-xs px-4 py-2 flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Buy This Book
                </a>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amazon text-xs px-4 py-2 flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Buy Box Set
                </a>
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amazon text-xs px-4 py-2 flex items-center gap-1.5"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  Buy Complete Series
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-8 sm:px-12 py-6 border-t border-white/5">
          <h3 className="text-lg font-bold text-cream mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-turquoise" />
            About This Book
          </h3>
          <p className="text-cream/60 leading-relaxed text-sm">
            {book.elaborateDescription}
          </p>
        </div>

        {/* Chapters */}
        <div className="px-8 sm:px-12 py-6 border-t border-white/5">
          <h3 className="text-lg font-bold text-cream mb-4">
            Chapters ({book.chapters.length})
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {book.chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    backgroundColor: `${book.color}20`,
                    color: book.color,
                  }}
                >
                  {chapter.number}
                </span>
                <span className="text-cream/70 text-sm">{chapter.title}</span>
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
  );
}
