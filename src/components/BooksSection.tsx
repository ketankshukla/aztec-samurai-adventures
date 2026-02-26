"use client";

import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";
import { Tablet, BookMarked, BookOpen, Library } from "lucide-react";

const boxSets = [
  {
    id: 1,
    title: "Act I — The Rising",
    subtitle: "Books 1–4",
    image: "/images/box-sets/box-set-1-landscape.png",
    bookIndices: [0, 1, 2, 3],
  },
  {
    id: 2,
    title: "Act II — The Fracture",
    subtitle: "Books 5–8",
    image: "/images/box-sets/box-set-2-landscape.png",
    bookIndices: [4, 5, 6, 7],
  },
  {
    id: 3,
    title: "Act III — The Reckoning",
    subtitle: "Books 9–12",
    image: "/images/box-sets/box-set-3-landscape.png",
    bookIndices: [8, 9, 10, 11],
  },
];

export default function BooksSection() {
  const { openBook } = useBook();

  return (
    <section id="books" className="relative py-20 sm:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(64,224,208,0.04),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {boxSets.map((boxSet) => (
          <div key={boxSet.id} className="mb-20 last:mb-0">
            {/* Box set cover — full width */}
            <div className="group rounded-xl overflow-hidden shadow-professional border border-white/10 hover-lift mb-4">
              <img
                src={boxSet.image}
                alt={`${boxSet.title} — ${boxSet.subtitle}`}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* 4 books side by side, aligned with box set above */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {boxSet.bookIndices.map((bookIndex) => {
                const book = books[bookIndex];
                return (
                  <div
                    key={book.id}
                    className="group glass rounded-xl overflow-hidden hover-lift"
                  >
                    {/* Book cover image */}
                    <div
                      className="relative overflow-hidden cursor-pointer"
                      onClick={() => openBook(bookIndex)}
                    >
                      <img
                        src={book.coverImage}
                        alt={`Book ${book.roman}: ${book.title}`}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-turquoise text-sm font-medium flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="p-2 sm:p-3 flex flex-col gap-2">
                      <a
                        href={book.kindleUrl || "https://www.amazon.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg bg-[#FF9900] py-2 px-3 text-xs sm:text-sm font-bold tracking-wide text-black transition-all duration-200 hover:bg-[#e68a00] active:scale-95"
                      >
                        <Tablet className="h-3.5 w-3.5 shrink-0" />
                        Buy Kindle
                      </a>
                      <a
                        href={book.paperbackUrl || "https://www.amazon.com"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 w-full rounded-lg border border-turquoise/40 bg-turquoise/10 py-2 px-3 text-xs sm:text-sm font-bold tracking-wide text-turquoise transition-all duration-200 hover:bg-turquoise/20 hover:border-turquoise/60 active:scale-95"
                      >
                        <BookMarked className="h-3.5 w-3.5 shrink-0" />
                        Buy Paperback
                      </a>
                      <button
                        onClick={() => openBook(bookIndex)}
                        className="flex items-center justify-center gap-1.5 rounded-full border border-turquoise/30 bg-turquoise/5 px-3 py-2 text-xs sm:text-sm font-medium text-turquoise transition-all hover:border-turquoise/60 hover:bg-turquoise/10"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Book Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Buy Complete Series */}
        <div className="text-center mt-12">
          <p className="font-serif text-xs tracking-[0.25em] uppercase text-turquoise/50 mb-4">
            Own the complete series
          </p>
          <a
            href="https://www.amazon.com/dp/B0GPDGDV58"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#FF9900] px-8 py-3 text-sm font-bold tracking-wide text-black transition-all duration-200 hover:bg-[#e68a00] hover:shadow-lg hover:shadow-[#FF9900]/20 active:scale-95"
          >
            <Library className="h-4 w-4 shrink-0" />
            Buy The Complete Series on Amazon
          </a>
        </div>
      </div>
    </section>
  );
}
