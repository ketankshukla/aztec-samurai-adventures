"use client";

import { useEffect, useCallback, useRef } from "react";
import {
  X,
  Swords,
  BookOpen,
  Users,
  Sparkles,
  ScrollText,
  Heart,
} from "lucide-react";
import type { Character } from "@/data/characters";

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const alignmentConfig = {
  Hero: {
    label: "Hero",
    bg: "bg-emerald-500/20",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
  },
  Villain: {
    label: "Villain",
    bg: "bg-red-500/20",
    text: "text-red-400",
    border: "border-red-500/30",
  },
  Neutral: {
    label: "Neutral",
    bg: "bg-amber-500/20",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
  Cosmic: {
    label: "Cosmic",
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    border: "border-purple-500/30",
  },
};

export default function CharacterModal({
  character,
  onClose,
  onPrev,
  onNext,
}: CharacterModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever the character changes
  useEffect(() => {
    if (character && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [character]);

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

  // Prevent pinch-zoom gestures on the modal
  useEffect(() => {
    if (!character) return;
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    const preventGestureStart = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("touchmove", preventZoom, { passive: false });
    document.addEventListener("gesturestart", preventGestureStart);
    document.addEventListener("gesturechange", preventGestureStart);
    document.addEventListener("gestureend", preventGestureStart);
    return () => {
      document.removeEventListener("touchmove", preventZoom);
      document.removeEventListener("gesturestart", preventGestureStart);
      document.removeEventListener("gesturechange", preventGestureStart);
      document.removeEventListener("gestureend", preventGestureStart);
    };
  }, [character]);

  if (!character) return null;

  const alignment = alignmentConfig[character.alignment];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal container */}
      <div
        className="relative w-full sm:max-w-3xl max-h-[100vh] sm:max-h-[95vh] overflow-hidden sm:rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, #FFD700 0%, #B8860B 20%, #FFD700 40%, #DAA520 60%, #FFD700 80%, #B8860B 100%)",
          padding: "2px",
        }}
      >
        <div
          className="sm:rounded-[14px] overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-50 w-11 h-11 rounded-full bg-black/70 border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/90 hover:border-white/50 transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Nav arrows */}
          <button
            onClick={onPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 hover:border-white/40 transition-all duration-200"
          >
            <span className="text-2xl font-bold">&#8249;</span>
          </button>
          <button
            onClick={onNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 hover:border-white/40 transition-all duration-200"
          >
            <span className="text-2xl font-bold">&#8250;</span>
          </button>

          {/* Scrollable content */}
          <div
            ref={scrollRef}
            className="overflow-y-auto max-h-[100vh] sm:max-h-[95vh]"
          >
            {/* Full character portrait — uncropped */}
            <div className="relative">
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-auto"
              />
            </div>

            {/* Character name & info below the image */}
            <div className="px-5 sm:px-10 pt-8 pb-4">
              {/* Alignment badge */}
              <div className="mb-4">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-sm uppercase tracking-[0.2em] font-bold border ${alignment.bg} ${alignment.text} ${alignment.border}`}
                >
                  {alignment.label}
                </span>
              </div>

              {/* Name */}
              <h2
                className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif tracking-wider mb-2"
                style={{
                  color: "#FFD700",
                  textShadow: `0 0 30px ${character.accentColor}44, 0 0 60px ${character.accentColor}22`,
                }}
              >
                {character.name}
              </h2>

              {/* Title */}
              <p className="text-xl sm:text-2xl text-white/80 font-serif tracking-wide mb-2">
                {character.title}
              </p>

              {/* Role */}
              <p className="text-base sm:text-lg text-[#40E0D0] tracking-wider uppercase font-semibold">
                {character.role}
              </p>

              {/* Description */}
              <p className="text-base text-white/50 mt-2 tracking-wide italic">
                {character.description}
              </p>
            </div>

            {/* Quote banner */}
            {character.quote !== "—" && (
              <div
                className="mx-5 sm:mx-10 my-4 px-6 py-5 rounded-xl border"
                style={{
                  borderColor: `${character.accentColor}25`,
                  background: `linear-gradient(135deg, ${character.accentColor}10, transparent, ${character.accentColor}08)`,
                }}
              >
                <p className="text-center text-white/80 italic font-serif text-lg sm:text-xl leading-relaxed">
                  &ldquo;{character.quote}&rdquo;
                </p>
              </div>
            )}

            {/* Content sections */}
            <div className="px-5 sm:px-10 py-6 space-y-8">
              {/* First Appearance + Books */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div
                  className="rounded-xl p-5 border"
                  style={{
                    borderColor: `${character.accentColor}15`,
                    background: `linear-gradient(135deg, ${character.accentColor}08, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-[#FFD700]" />
                    <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#FFD700] font-bold">
                      First Appearance
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-white/70">
                    {character.firstAppearance}
                  </p>
                </div>
                <div
                  className="rounded-xl p-5 border"
                  style={{
                    borderColor: `${character.accentColor}15`,
                    background: `linear-gradient(135deg, ${character.accentColor}08, transparent)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-[#40E0D0]" />
                    <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#40E0D0] font-bold">
                      Appears In ({character.booksAppearedIn.length} Books)
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {character.booksAppearedIn.map((book) => (
                      <span
                        key={book}
                        className="text-sm px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
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
                  <ScrollText className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#FFD700] font-bold">
                    Backstory
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  {character.backstory}
                </p>
              </div>

              {/* Physical Description */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#FFD700] font-bold">
                    Physical Description
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed italic">
                  {character.physicalDescription}
                </p>
              </div>

              {/* Abilities */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Swords className="w-5 h-5 text-[#40E0D0]" />
                  <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#40E0D0] font-bold">
                    Abilities & Powers
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {character.abilities.map((ability, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: character.accentColor }}
                      />
                      <span className="text-base text-white/70 leading-relaxed">
                        {ability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Character Arc */}
              <div
                className="rounded-xl p-6 border"
                style={{
                  borderColor: `${character.accentColor}20`,
                  background: `linear-gradient(135deg, ${character.accentColor}06, transparent, ${character.accentColor}04)`,
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-[#FFD700]" />
                  <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#FFD700] font-bold">
                    Character Arc
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                  {character.characterArc}
                </p>
              </div>

              {/* Key Relationships */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-[#40E0D0]" />
                  <h3 className="text-sm sm:text-base uppercase tracking-[0.15em] text-[#40E0D0] font-bold">
                    Key Relationships
                  </h3>
                </div>
                <div className="space-y-3">
                  {character.keyRelationships.map((rel, i) => {
                    const dashIndex = rel.indexOf(" — ");
                    const personName =
                      dashIndex > -1 ? rel.substring(0, dashIndex) : rel;
                    const description =
                      dashIndex > -1 ? rel.substring(dashIndex + 3) : "";
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-3 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                      >
                        <span
                          className="text-base font-bold flex-shrink-0"
                          style={{ color: character.accentColor }}
                        >
                          {personName}
                        </span>
                        {description && (
                          <span className="text-base text-white/60">
                            {description}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom filigree */}
            <div className="px-5 sm:px-10 pb-8">
              <div className="flex items-center justify-center gap-3">
                <div
                  className="h-[1px] w-16 sm:w-24"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #FFD700)",
                  }}
                />
                <div className="flex gap-1">
                  <div
                    className="w-2 h-2 rotate-45"
                    style={{ backgroundColor: "#40E0D0" }}
                  />
                  <div
                    className="w-2 h-2 rotate-45"
                    style={{ backgroundColor: "#FFD700" }}
                  />
                  <div
                    className="w-2 h-2 rotate-45"
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
              <p className="text-center text-white/30 text-sm mt-4 tracking-widest uppercase">
                Aztec Samurai Adventures · Character #{character.id} of 30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
