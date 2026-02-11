"use client";

import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";
import { ShoppingCart, BookOpen } from "lucide-react";

const boxSets = [
  {
    id: 1,
    title: "Act I — The Rising",
    subtitle: "Books 1–4",
    image: "/box-set-1-landscape.png",
    bookIndices: [0, 1, 2, 3],
  },
  {
    id: 2,
    title: "Act II — The Fracture",
    subtitle: "Books 5–8",
    image: "/box-set-2-landscape.png",
    bookIndices: [4, 5, 6, 7],
  },
  {
    id: 3,
    title: "Act III — The Reckoning",
    subtitle: "Books 9–12",
    image: "/box-set-3-landscape.png",
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
        {/* Box Sets Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {boxSets.map((boxSet) => (
            <div key={boxSet.id} className="flex flex-col">
              {/* Box set image */}
              <div className="group rounded-xl overflow-hidden shadow-professional border border-white/10 hover-lift">
                <img
                  src={boxSet.image}
                  alt={`${boxSet.title} — ${boxSet.subtitle}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Buy Box Set button */}
              <div className="mt-4 text-center">
                <a
                  href="https://www.amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amazon inline-flex items-center justify-center gap-2 text-sm px-6 py-2.5 w-full"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy This Box Set on Amazon
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Individual Books — grouped under each box set */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {boxSets.map((boxSet) => (
            <div key={boxSet.id} className="flex flex-col gap-6">
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
                    <div className="p-4 flex gap-2">
                      <a
                        href="https://www.amazon.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-amazon text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Buy This Book on Amazon
                      </a>
                      <button
                        onClick={() => openBook(bookIndex)}
                        className="flex-shrink-0 text-xs py-2.5 px-4 rounded-lg border border-turquoise/20 text-turquoise hover:bg-turquoise/10 transition-all duration-300 flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Details
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
