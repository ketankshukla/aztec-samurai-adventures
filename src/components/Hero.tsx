"use client";

import { Library } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(64,224,208,0.08),transparent_60%)]" />

      <div className="relative z-10 pt-12 sm:pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Big centered logo */}
          <div className="flex justify-center mb-12 animate-fadeInUp">
            <img
              src="/images/logo.png"
              alt="Aztec Samurai Adventures"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Full-width complete series cover */}
          <div className="animate-fadeInUp mb-8">
            <img
              src="/images/box-sets/complete-series-cover-landscape.png"
              alt="Aztec Samurai Adventures — The Complete Series"
              className="w-full h-auto rounded-xl shadow-professional border border-white/10"
            />
          </div>

          {/* Buy Complete Series button */}
          <div className="text-center">
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
      </div>
    </section>
  );
}
