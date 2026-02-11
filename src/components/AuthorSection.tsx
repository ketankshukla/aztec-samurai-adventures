"use client";

import { BookOpen, Swords, Users, Map } from "lucide-react";

export default function AuthorSection() {
  const stats = [
    { icon: BookOpen, label: "Books", value: "12" },
    { icon: Swords, label: "Chapters", value: "288" },
    { icon: Users, label: "Characters", value: "30" },
    { icon: Map, label: "Acts", value: "3" },
  ];

  return (
    <section id="author" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-light to-obsidian" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(64,224,208,0.06),transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Author info */}
          <div className="animate-fadeInUp">
            <div className="inline-block px-4 py-1.5 rounded-full border border-turquoise/20 bg-turquoise/5 mb-6">
              <span className="text-turquoise text-xs uppercase tracking-widest font-medium">
                About the Author
              </span>
            </div>

            {/* Author photo */}
            <div className="mb-6">
              <img
                src="/images/ketan-shukla.jpeg"
                alt="Ketan Shukla"
                className="w-40 h-40 rounded-full object-cover border-2 border-turquoise/30 shadow-turquoise"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-6">
              <span className="heading-gradient">Ketan Shukla</span>
            </h2>

            <div className="space-y-4 text-cream/60 leading-relaxed text-base">
              <p>
                Ketan Shukla is a writer who loves a good story — whether
                he&rsquo;s building one from scratch or pulling one apart to see
                how it works. The <em>Aztec Samurai Adventures</em> is his
                twelve-book YA epic fantasy saga, blending Mesoamerican
                mythology with samurai warrior traditions into a tale of war,
                sacrifice, and hope.
              </p>
              <p>
                This series took years of careful planning and countless
                rewrites. Thirty characters, each with their own arc. Twelve
                books, each with twenty-four chapters. Three acts that build on
                each other from the first page to the last. It was a labour of
                love — sometimes exhausting, always worth it.
              </p>
              <p>
                When he&rsquo;s not writing fiction, Ketan writes non-fiction
                series about the ideas that fascinate him. You can find his
                other work at{" "}
                <a
                  href="https://repetition.ketanshukla.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turquoise hover:text-turquoise-light underline underline-offset-2 transition-colors"
                >
                  The Repetition Series
                </a>{" "}
                and{" "}
                <a
                  href="https://reality.ketanshukla.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-turquoise hover:text-turquoise-light underline underline-offset-2 transition-colors"
                >
                  Reality Without Belief
                </a>
                . He believes the best writing — fiction or non-fiction — comes
                from genuine curiosity and the willingness to sit with a problem
                until it teaches you something.
              </p>
            </div>

            {/* Dedication */}
            <div className="mt-8 p-6 glass rounded-xl">
              <p className="text-cream/50 italic font-serif text-center text-base">
                &ldquo;For every reader who ever picked up a sword in their
                imagination and fought for a world worth saving.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: Stats & Series info */}
          <div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-6 text-center hover-lift"
                >
                  <stat.icon className="w-8 h-8 text-turquoise mx-auto mb-3" />
                  <div className="text-3xl font-bold text-cream font-serif">
                    {stat.value}
                  </div>
                  <div className="text-cream/40 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Series structure */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-bold text-cream mb-4">
                Series Structure
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-turquoise/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Act I — The Rising
                    </p>
                    <p className="text-cream/40 text-xs">
                      Books 1–4: Itzil assembles her team, fights the first
                      battles, and confronts the warlord Volzentar.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Act II — The Fracture
                    </p>
                    <p className="text-cream/40 text-xs">
                      Books 5–8: Valdremor the Architect strikes. Mentors fall.
                      The blade shatters. The darkest hour arrives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-amber-500/60 mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-cream font-medium text-sm">
                      Act III — The Reckoning
                    </p>
                    <p className="text-cream/40 text-xs">
                      Books 9–12: The blade is reforged. The march to the
                      capital. The final siege. Dawn breaks over a new world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
