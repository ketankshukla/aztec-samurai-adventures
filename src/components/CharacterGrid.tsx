"use client";

import { useState, useCallback } from "react";
import { characters } from "@/data/characters";
import CharacterModal from "@/components/CharacterModal";

export default function CharacterGrid() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedCharacter =
    selectedIndex !== null ? characters[selectedIndex] : null;

  const openCharacter = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const closeCharacter = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  const goToNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev !== null && prev < characters.length - 1 ? prev + 1 : prev
    );
  }, []);

  return (
    <section className="relative py-0">
      {/* Background continuity */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,215,0,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Golden frame container */}
        <div className="relative rounded-2xl overflow-hidden">
          {/* Outer golden border */}
          <div
            className="p-[3px] rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, #FFD700 0%, #B8860B 20%, #FFD700 40%, #DAA520 60%, #FFD700 80%, #B8860B 100%)",
            }}
          >
            {/* Inner border with dark gap */}
            <div className="p-[2px] rounded-[14px] bg-obsidian/90">
              <div
                className="p-[2px] rounded-[12px]"
                style={{
                  background:
                    "linear-gradient(135deg, #DAA520 0%, #FFD700 30%, #B8860B 50%, #FFD700 70%, #DAA520 100%)",
                }}
              >
                {/* Content area */}
                <div className="rounded-[10px] bg-obsidian/95 p-4 sm:p-6">
                  {/* Section heading */}
                  <div className="text-center mb-6">
                    <p className="text-[#40E0D0] text-xs uppercase tracking-[0.2em] font-medium mb-2">
                      Aztec Samurai Adventures
                    </p>
                    <h2
                      className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif tracking-wide"
                      style={{
                        color: "#FFD700",
                        textShadow:
                          "0 0 20px rgba(255,215,0,0.3), 0 2px 4px rgba(0,0,0,0.5)",
                      }}
                    >
                      The Characters
                    </h2>
                    {/* Aztec filigree divider */}
                    <div className="flex items-center justify-center gap-3 mt-3">
                      <div
                        className="h-[1px] w-16 sm:w-24"
                        style={{
                          background:
                            "linear-gradient(to right, transparent, #FFD700)",
                        }}
                      />
                      <div className="flex gap-1">
                        <div
                          className="w-1.5 h-1.5 rotate-45"
                          style={{ backgroundColor: "#40E0D0" }}
                        />
                        <div
                          className="w-1.5 h-1.5 rotate-45"
                          style={{ backgroundColor: "#FFD700" }}
                        />
                        <div
                          className="w-1.5 h-1.5 rotate-45"
                          style={{ backgroundColor: "#40E0D0" }}
                        />
                      </div>
                      <div
                        className="h-[1px] w-16 sm:w-24"
                        style={{
                          background:
                            "linear-gradient(to left, transparent, #FFD700)",
                        }}
                      />
                    </div>
                  </div>

                  {/* 6 rows x 5 columns grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
                    {characters.map((character, index) => (
                      <div
                        key={character.id}
                        className="group relative rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
                        onMouseEnter={() => setHoveredId(character.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        onClick={() => openCharacter(index)}
                        style={{
                          boxShadow:
                            hoveredId === character.id
                              ? "0 0 20px rgba(255,215,0,0.4), 0 0 40px rgba(255,215,0,0.1)"
                              : "0 2px 8px rgba(0,0,0,0.3)",
                          border:
                            hoveredId === character.id
                              ? "1px solid rgba(255,215,0,0.5)"
                              : "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {/* Character portrait image */}
                        <div className="relative aspect-[2/3] overflow-hidden">
                          <img
                            src={character.image}
                            alt={`${character.name} — ${character.title}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Gradient overlay for name */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                          {/* Character name overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 text-center">
                            <p
                              className="text-[10px] sm:text-xs md:text-sm font-bold font-serif tracking-wider leading-tight"
                              style={{
                                color: "#FFD700",
                                textShadow:
                                  "0 0 10px rgba(255,215,0,0.5), 0 1px 3px rgba(0,0,0,0.8)",
                              }}
                            >
                              {character.name}
                            </p>
                            <p className="text-[8px] sm:text-[10px] md:text-xs text-white/70 mt-0.5 leading-tight">
                              {character.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom filigree divider */}
                  <div className="flex items-center justify-center gap-3 mt-6">
                    <div
                      className="h-[1px] w-16 sm:w-24"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #FFD700)",
                      }}
                    />
                    <div className="flex gap-1">
                      <div
                        className="w-1.5 h-1.5 rotate-45"
                        style={{ backgroundColor: "#40E0D0" }}
                      />
                      <div
                        className="w-1.5 h-1.5 rotate-45"
                        style={{ backgroundColor: "#FFD700" }}
                      />
                      <div
                        className="w-1.5 h-1.5 rotate-45"
                        style={{ backgroundColor: "#40E0D0" }}
                      />
                    </div>
                    <div
                      className="h-[1px] w-16 sm:w-24"
                      style={{
                        background:
                          "linear-gradient(to left, transparent, #FFD700)",
                      }}
                    />
                  </div>
                  <p className="text-center text-white/30 text-[10px] sm:text-xs mt-3 tracking-widest uppercase">
                    30 Characters · 12 Books · 3 Acts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CharacterModal
        character={selectedCharacter}
        onClose={closeCharacter}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </section>
  );
}
