"use client";

import { useEffect, useCallback } from "react";
import { X, Swords, BookOpen, Users, Sparkles, ScrollText, Heart } from "lucide-react";
import type { Character } from "@/data/characters";

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const alignmentConfig = {
  Hero: { label: "Hero", bg: "bg-emerald-500/20", text: "text-emerald-400", border: "border-emerald-500/30" },
  Villain: { label: "Villain", bg: "bg-red-500/20", text: "text-red-400", border: "border-red-500/30" },
  Neutral: { label: "Neutral", bg: "bg-amber-500/20", text: "text-amber-400", border: "border-amber-500/30" },
  Cosmic: { label: "Cosmic", bg: "bg-purple-500/20", text: "text-purple-400", border: "border-purple-500/30" },
};

export default function CharacterModal({ character, onClose, onPrev, onNext }: CharacterModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (character) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [character, handleKeyDown]);

  if (!character) return null;

  const alignment = alignmentConfig[character.alignment];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal container */}
      <div
        className="relative w-full max-w-5xl max-h-[95vh] overflow-hidden rounded-2xl"
        style={{
          background: "linear-gradient(135deg, #FFD700 0%, #B8860B 20%, #FFD700 40%, #DAA520 60%, #FFD700 80%, #B8860B 100%)",
          padding: "2px",
        }}
      >
        <div
          className="rounded-[14px] overflow-hidden"
          style={{ background: "linear-gradient(180deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-black/80 hover:border-white/40 transition-all duration-200"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Nav arrows */}
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/70 hover:border-white/30 transition-all duration-200"
          >
            <span className="text-xl">&#8249;</span>
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-black/70 hover:border-white/30 transition-all duration-200"
          >
            <span className="text-xl">&#8250;</span>
          </button>

          {/* Scrollable content */}
          <div className="overflow-y-auto max-h-[95vh] custom-scrollbar">
            {/* Hero section with portrait */}
            <div className="relative">
              {/* Background gradient overlay */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, rgba(10,10,15,0.3) 30%, rgba(10,10,15,0.85) 65%, rgba(10,10,15,1) 85%)`,
                }}
              />
              <div
                className="absolute inset-0 z-10"
                style={{
                  background: `linear-gradient(to right, rgba(10,10,15,0.7) 0%, transparent 30%, transparent 70%, rgba(10,10,15,0.7) 100%)`,
                }}
              />

              {/* Portrait image */}
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-[400px] sm:h-[500px] object-cover object-top"
              />

              {/* Character info overlaid on portrait */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 pb-6">
                {/* Alignment badge */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold border ${alignment.bg} ${alignment.text} ${alignment.border}`}
                  >
                    {alignment.label}
                  </span>
                </div>

                {/* Name */}
                <h2
                  className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-wider mb-1"
                  style={{
                    color: "#FFD700",
                    textShadow: `0 0 30px ${character.accentColor}44, 0 0 60px ${character.accentColor}22, 0 2px 4px rgba(0,0,0,0.8)`,
                  }}
                >
                  {character.name}
                </h2>

                {/* Title */}
                <p className="text-lg sm:text-xl text-white/80 font-serif tracking-wide mb-1">
                  {character.title}
                </p>

                {/* Role */}
                <p className="text-sm text-[#40E0D0] tracking-wider uppercase">
                  {character.role}
                </p>

                {/* Description */}
                <p className="text-xs text-white/50 mt-1 tracking-wide italic">
                  {character.description}
                </p>
              </div>
            </div>

            {/* Quote banner */}
            {character.quote !== "—" && (
              <div
                className="px-6 sm:px-10 py-5 border-y"
                style={{
                  borderColor: `${character.accentColor}20`,
                  background: `linear-gradient(90deg, transparent, ${character.accentColor}08, transparent)`,
                }}
              >
                <p className="text-center text-white/70 italic font-serif text-sm sm:text-base leading-relaxed">
                  &ldquo;{character.quote}&rdquo;
                </p>
              </div>
            )}

            {/* Content sections */}
            <div className="px-6 sm:px-10 py-8 space-y-8">
              {/* First Appearance + Books */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    borderColor: `${character.accentColor}15`,
                    background: `linear-gradient(135deg, ${character.accentColor}08, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-[#FFD700]" />
                    <h3 className="text-xs uppercase tracking-[0.15em] text-[#FFD700] font-semibold">
                      First Appearance
                    </h3>
                  </div>
                  <p className="text-sm text-white/70">{character.firstAppearance}</p>
                </div>
                <div
                  className="rounded-xl p-4 border"
                  style={{
                    borderColor: `${character.accentColor}15`,
                    background: `linear-gradient(135deg, ${character.accentColor}08, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-[#40E0D0]" />
                    <h3 className="text-xs uppercase tracking-[0.15em] text-[#40E0D0] font-semibold">
                      Appears In ({character.booksAppearedIn.length} Books)
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {character.booksAppearedIn.map((book) => (
                      <span
                        key={book}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/50 border border-white/10"
                      >
                        {book.replace(/Book [IVX]+ — /, "")}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Backstory */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ScrollText className="w-4 h-4 text-[#FFD700]" />
                  <h3 className="text-xs uppercase tracking-[0.15em] text-[#FFD700] font-semibold">
                    Backstory
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {character.backstory}
                </p>
              </div>

              {/* Physical Description */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#FFD700]" />
                  <h3 className="text-xs uppercase tracking-[0.15em] text-[#FFD700] font-semibold">
                    Physical Description
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed italic">
                  {character.physicalDescription}
                </p>
              </div>

              {/* Abilities */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Swords className="w-4 h-4 text-[#40E0D0]" />
                  <h3 className="text-xs uppercase tracking-[0.15em] text-[#40E0D0] font-semibold">
                    Abilities & Powers
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {character.abilities.map((ability, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ backgroundColor: character.accentColor }}
                      />
                      <span className="text-xs text-white/60 leading-relaxed">{ability}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Character Arc */}
              <div
                className="rounded-xl p-5 border"
                style={{
                  borderColor: `${character.accentColor}20`,
                  background: `linear-gradient(135deg, ${character.accentColor}06, transparent, ${character.accentColor}04)`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-4 h-4 text-[#FFD700]" />
                  <h3 className="text-xs uppercase tracking-[0.15em] text-[#FFD700] font-semibold">
                    Character Arc
                  </h3>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {character.characterArc}
                </p>
              </div>

              {/* Key Relationships */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-[#40E0D0]" />
                  <h3 className="text-xs uppercase tracking-[0.15em] text-[#40E0D0] font-semibold">
                    Key Relationships
                  </h3>
                </div>
                <div className="space-y-2">
                  {character.keyRelationships.map((rel, i) => {
                    const dashIndex = rel.indexOf(" — ");
                    const personName = dashIndex > -1 ? rel.substring(0, dashIndex) : rel;
                    const description = dashIndex > -1 ? rel.substring(dashIndex + 3) : "";
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                      >
                        <span
                          className="text-xs font-semibold flex-shrink-0 mt-0.5"
                          style={{ color: character.accentColor }}
                        >
                          {personName}
                        </span>
                        {description && (
                          <span className="text-xs text-white/50">{description}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom filigree */}
            <div className="px-6 sm:px-10 pb-6">
              <div className="flex items-center justify-center gap-3">
                <div
                  className="h-[1px] w-16 sm:w-24"
                  style={{ background: "linear-gradient(to right, transparent, #FFD700)" }}
                />
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: "#40E0D0" }} />
                  <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: "#FFD700" }} />
                  <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: "#40E0D0" }} />
                </div>
                <div
                  className="h-[1px] w-16 sm:w-24"
                  style={{ background: "linear-gradient(to left, transparent, #FFD700)" }}
                />
              </div>
              <p className="text-center text-white/20 text-[10px] mt-3 tracking-widest uppercase">
                Aztec Samurai Adventures · Character #{character.id} of 30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
