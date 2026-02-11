"use client";

import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";
import { ShoppingCart, BookOpen } from "lucide-react";

export default function BooksSection() {
  const { openBook } = useBook();

  return (
    <section id="books" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(64,224,208,0.04),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif mb-4">
            <span className="heading-gradient">The Twelve Books</span>
          </h2>
          <p className="text-cream/50 max-w-2xl mx-auto text-lg">
            Three acts. Twelve books. Two hundred and eighty-eight chapters.
            One war that will reshape a world.
          </p>
          <div className="mt-6 flex justify-center gap-8 text-sm text-cream/40">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-turquoise/60" />
              Act I — The Rising (Books 1–4)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-500/60" />
              Act II — The Fracture (Books 5–8)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500/60" />
              Act III — The Reckoning (Books 9–12)
            </span>
          </div>
        </div>

        {/* Books grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <div
              key={book.id}
              className="group glass rounded-xl overflow-hidden hover-lift"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Book cover */}
              <div
                className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                onClick={() => openBook(index)}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${book.color}18, #0a0a0a, ${book.color}10)`,
                  }}
                >
                  <div
                    className="text-5xl font-serif font-bold mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: book.color }}
                  >
                    {book.roman}
                  </div>
                  <h3 className="text-lg font-bold text-cream mb-1.5">
                    {book.title}
                  </h3>
                  <p className="text-cream/40 text-xs italic mb-3">
                    {book.subtitle}
                  </p>
                  <div
                    className="px-3 py-1 rounded-full text-[10px] font-medium border"
                    style={{
                      borderColor: `${book.color}33`,
                      color: book.color,
                    }}
                  >
                    {book.focusCharacter}
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-turquoise text-sm font-medium flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    View Details
                  </span>
                </div>
              </div>

              {/* Book info */}
              <div className="p-4">
                <p className="text-cream/50 text-xs line-clamp-2 mb-4">
                  {book.description}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => openBook(index)}
                    className="flex-1 text-xs py-2 rounded-lg border border-turquoise/20 text-turquoise hover:bg-turquoise/10 transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Details
                  </button>
                  <a
                    href="https://www.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-amazon text-xs py-2 rounded-lg flex items-center justify-center gap-1.5"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Buy
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Series CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.amazon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amazon inline-flex items-center gap-3 text-lg px-10 py-4"
          >
            <ShoppingCart className="w-6 h-6" />
            Buy the Complete Series on Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
