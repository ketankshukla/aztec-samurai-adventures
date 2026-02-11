export interface Character {
  id: number;
  name: string;
  title: string;
  role: string;
  alignment: "Hero" | "Villain" | "Neutral" | "Cosmic";
  description: string;
  quote: string;
  image: string;
  accentColor: string;
  firstAppearance: string;
  booksAppearedIn: string[];
  abilities: string[];
  physicalDescription: string;
  backstory: string;
  characterArc: string;
  keyRelationships: string[];
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Itzil",
    title: "The Blade Bearer",
    role: "Commander of the Alliance",
    alignment: "Hero",
    description: "Reluctant Prophet · Warrior of the Sun-Blade Order",
    quote: "I must be present, not perfect.",
    image: "/images/character-portraits/01-Itzil.png",
    accentColor: "#FFD700",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book III — Ash Oaths",
      "Book IV — The Starless Crown",
      "Book VI — Rain of Obsidian",
      "Book VIII — The Shattered Blade",
      "Book IX — The Forge of Souls",
      "Book X — The Mirror Throne",
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Sun-Blade manifestation — a weapon forged from pure sunlight and conviction",
      "Golden sunfire projection from hands and blade",
      "Supernatural combat reflexes and warrior instincts",
      "Leadership under impossible pressure",
      "Prophetic connection to the Sun-Blade Order's legacy",
    ],
    physicalDescription:
      "A breathtakingly gorgeous young woman of indigenous Mesoamerican descent in her early 20s. Warm bronze skin with a luminous natural glow. Large, obsidian-black eyes shot through with golden amber striations. Raven-black hair in elaborate warrior braids threaded with turquoise beads, gold rings, and obsidian pins. Wears Mesoamerican-samurai fusion armor with a jade-obsidian katana — the Sun-Blade — that blazes with golden sunfire.",
    backstory:
      "When Dominion soldiers raided her village and stole the Ember Core, Itzil was thrust into a prophecy she didn't want. Trained by the aging grandmaster Korvain, she learned to manifest the Sun-Blade. She gathered a diverse band of allies and led the alliance against the Dominion's tyranny, becoming the reluctant commander of an impossible war.",
    characterArc:
      "From reluctant trainee to prophesied Blade-Bearer to shattered commander to reborn leader. She loses her mentor, her weapon, and her hope, then rebuilds all three from the memories and bonds of those who fight beside her. She learns that leadership is not about perfection but presence.",
    keyRelationships: [
      "Korvain — mentor and father figure",
      "Kaelen — closest ally and eventual partner",
      "Neyla — healer and moral compass",
      "Nightshade — nemesis who shatters her blade",
      "Solkren — the armorer who reforges the Sun-Blade",
    ],
  },
  {
    id: 2,
    name: "Kaelen",
    title: "The Shadow Scout",
    role: "Scout and Infiltrator",
    alignment: "Hero",
    description: "Last Survivor of the 7th Reconnaissance Unit",
    quote: "Trust is a wound I chose to leave open.",
    image: "/images/character-portraits/02-Kaelen.png",
    accentColor: "#6366f1",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book II — The Mirror Siege",
      "Book V — The Serpent's Gambit",
      "Book VIII — The Shattered Blade",
      "Book IX — The Forge of Souls",
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Shadow-step technique — learned from Miyako",
      "Master infiltrator and intelligence gatherer",
      "Dual-heritage combat style",
      "Exceptional survival instincts",
      "Expert at reading people and environments",
    ],
    physicalDescription:
      "A lean, sharp-featured young man of mixed Mesoamerican and Eastern heritage in his mid-20s. Dual-toned features — warm bronze skin with angular bone structure. Dark eyes that miss nothing. Hair partly braided, partly loose. Wears lightweight scout armor designed for speed and silence.",
    backstory:
      "The sole survivor of the 7th Reconnaissance Unit, wiped out by Dominion forces. Kaelen carries survivor's guilt, channeling it into relentless forward motion. He met Miyako in Mirravale, who taught him the shadow-step technique. His infiltration skills became the alliance's most critical covert asset.",
    characterArc:
      "From guilt-ridden survivor to the alliance's most trusted operative. He learns that trust — the thing that terrifies him most — is also the thing that saves him. His words to Itzil after the Sun-Blade shatters help her find the will to continue.",
    keyRelationships: [
      "Itzil — closest ally and the person he trusts most",
      "Miyako — exile sensei who teaches him the shadow-step",
      "Valdremor — nemesis who anticipates his every move",
      "Jagren — rival turned brother-in-arms",
    ],
  },
  {
    id: 3,
    name: "Volzentar",
    title: "The Warlord",
    role: "Emperor of the Dominion",
    alignment: "Villain",
    description: "Charismatic Tyrant · Architect of Conquest",
    quote: "Order is not cruelty. It is mercy with a longer view.",
    image: "/images/character-portraits/03-Volzentar.png",
    accentColor: "#dc2626",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book IV — The Starless Crown",
      "Book VI — Rain of Obsidian",
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Blood-magic enhanced charisma and authority",
      "Strategic genius at continental scale",
      "Iron Crown connection to the Starless Crown",
      "Near-supernatural persuasion",
      "Political manipulation of entire nations",
    ],
    physicalDescription:
      "A terrifyingly charismatic man of mixed heritage in his late 40s. Striking amber-gold eyes with crimson flecks. Sharp, aristocratic bone structure with a precise goatee threaded with silver. Jet-black hair beneath a narrow iron crown with a crimson gemstone. Deep crimson-black military coat with gold and iron trim. No weapons — he is the weapon.",
    backstory:
      "Volzentar built the Dominion from nothing — a continental empire ruled by terrifying charisma and blood-magic authority. He genuinely believes he is saving the world by conquering it, imposing order on chaos. His ash-oath technology enslaves populations while he believes he offers them purpose.",
    characterArc:
      "The charismatic emperor whose conviction never wavers. Not a raving madman but a calm, intelligent tyrant. His downfall comes from the alliance proving that free people fight harder than enslaved ones.",
    keyRelationships: [
      "Valdremor — cold logic to his charismatic fire",
      "Nightshade — his spymaster and most dangerous agent",
      "Itzil — the threat he fears and respects",
      "Serenthar — the oracle bound to the Gate he seeks to open",
    ],
  },
  {
    id: 4,
    name: "Korvain",
    title: "The Last Grandmaster",
    role: "Itzil's Mentor",
    alignment: "Hero",
    description: "Finest Swordsman Alive · Body Failing, Mind Iron",
    quote: "Show up. Every time. Even when you don't know the answer.",
    image: "/images/character-portraits/04-Korvain.png",
    accentColor: "#f59e0b",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book IV — The Starless Crown",
      "Book VI — Rain of Obsidian",
      "Book VII — Feathers and Bone",
      "Book VIII — The Shattered Blade",
    ],
    abilities: [
      "Greatest swordsman of his generation — flawless technique even in decline",
      "Sun-Blade Order mastery spanning decades",
      "Teaching that transforms raw talent into legends",
      "Unshakeable composure under any circumstance",
      "Tactical wisdom from a lifetime of battles",
    ],
    physicalDescription:
      "A weathered man of indigenous Mesoamerican descent in his early 70s. Deeply lined face carved by decades of war. Silver-white hair in a simple warrior's topknot. Warm brown eyes still fierce despite age. Lean but diminished body. Worn Sun-Blade Order robes with a jade-handled katana.",
    backstory:
      "The last surviving grandmaster of the Sun-Blade Order. As the Dominion rose, he watched the Order fall one temple at a time. When Itzil arrived, he recognized the prophecy and devoted his remaining years to training her — teaching not just combat but the philosophy of presence, duty, and showing up.",
    characterArc:
      "The mentor who gives everything. His body fails long before his mind. He fights his last battle buying time for an evacuation, teaches until his final breath, and dies peacefully in Itzil's arms. His last words become the foundation of everything that follows.",
    keyRelationships: [
      "Itzil — his final student and greatest legacy",
      "Miyako — fellow veteran who shares his philosophy of duty",
      "The Sun-Blade Order — the dying tradition he embodies",
    ],
  },
  {
    id: 5,
    name: "Nightshade",
    title: "The Blood Orator",
    role: "Dominion Spymaster",
    alignment: "Villain",
    description: "Blood-Magic Specialist · Architect of Psychological Warfare",
    quote: "Love is a load-bearing wall. Remove it, and the structure falls.",
    image: "/images/character-portraits/05-Nightshade.png",
    accentColor: "#7c3aed",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book IV — The Starless Crown",
      "Book VI — Rain of Obsidian",
      "Book VIII — The Shattered Blade",
      "Book IX — The Forge of Souls",
      "Book XI — The Starless Crown",
    ],
    abilities: [
      "Blood-magic mastery — commands blood in other people's veins",
      "Psychological warfare and intelligence gathering",
      "Blood-ward creation — magical barriers and traps",
      "Shadow-warrior army command",
      "Near-supernatural ability to read and exploit fears",
    ],
    physicalDescription:
      "A strikingly beautiful woman of Eastern descent in her mid-30s. Pale porcelain skin — flawless and unsettling. Deep violet-black eyes with floating crimson embers within. Jet-black hair in a perfect symmetrical curtain threaded with blood-magic conduits. Fitted midnight-black silk coat with crimson lining and blood-magic sigils. A single vial of dark blood at her throat.",
    backstory:
      "The Dominion's deadliest spymaster who weaponized beauty and intelligence into an art form. Her blood-magic allows her to command blood in others' veins, make them tell the truth, or simply stop their hearts. She runs an intelligence network spanning the continent.",
    characterArc:
      "The alliance's most persistent and dangerous enemy. She shatters the Sun-Blade using a dark ritual, commands a shadow-warrior army in the final siege, and fights Itzil in a duel that costs everything. Beauty weaponized — elegant, deadly, and designed to be consumed.",
    keyRelationships: [
      "Volzentar — the emperor she serves with absolute loyalty",
      "Itzil — her nemesis, the one she cannot break",
      "Valdremor — fellow commander with complementary methods",
      "Amalura — the scholar she captures but cannot break",
    ],
  },
  {
    id: 6,
    name: "Valdremor",
    title: "The Architect",
    role: "Dominion Strategic Commander",
    alignment: "Villain",
    description: "Terrifyingly Calm Intellect · Crystal Eye Glowing Violet",
    quote: "Emotion is noise. I listen only to the signal.",
    image: "/images/character-portraits/06-Valdremor.png",
    accentColor: "#8b5cf6",
    firstAppearance: "Book V — The Serpent's Gambit",
    booksAppearedIn: [
      "Book V — The Serpent's Gambit",
      "Book VI — Rain of Obsidian",
      "Book VIII — The Shattered Blade",
      "Book X — The Mirror Throne",
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Strategic genius — anticipates enemy moves with terrifying precision",
      "Crystal prosthetic eye with enhanced perception",
      "Cold, emotionless analysis that eliminates error",
      "Surgical military strikes — never wastes a soldier",
      "Contingency planning — always a backup for the backup",
    ],
    physicalDescription:
      "A gaunt, precise man in his mid-50s. Hollow cheeks, thin lips, one natural grey eye alongside a crystal prosthetic that glows violet. Prematurely grey hair cropped close. Stark, unadorned grey coat — no decoration, no waste. Every element communicates cold efficiency.",
    backstory:
      "Where Volzentar rules by charisma, Valdremor operates through cold logic and precision. He takes command of Dominion operations in Act II and systematically dismantles the alliance's advantages, anticipating every enemy move and never wasting a single soldier.",
    characterArc:
      "The villain always three steps ahead. His precision makes him the most frustrating opponent. His downfall comes when Amalura outmaneuvers him intellectually. Even in defeat, he finds something like peace in his cell.",
    keyRelationships: [
      "Volzentar — the emperor he serves as strategic mind",
      "Amalura — the scholar who ultimately outthinks him",
      "Kaelen — the infiltrator he consistently anticipates",
      "Nightshade — fellow commander, different approach",
    ],
  },
  {
    id: 7,
    name: "Neyla",
    title: "The Healer",
    role: "Healer and Oath-Breaker",
    alignment: "Hero",
    description:
      "Compassionate Healer · Breaker of Ash-Oaths · Seer of Soul-Threads",
    quote: "You cannot pour from an empty cup. Refill first.",
    image: "/images/character-portraits/07-Neyla.png",
    accentColor: "#40E0D0",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book VI — Rain of Obsidian",
      "Book VII — Feathers and Bone",
      "Book IX — The Forge of Souls",
      "Book X — The Mirror Throne",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Miraculous healing — sees and repairs soul-threads",
      "Ash-oath reversal — breaks the Dominion's enslavement magic",
      "Turquoise-gold healing light projection",
      "Soul-thread perception — sees bonds connecting all life",
      "Mirror-dimension entry to free stolen souls",
    ],
    physicalDescription:
      "A luminously beautiful young woman of Mesoamerican descent in her early 20s. Warm brown skin with inner luminescence. Large, compassionate dark eyes. Soft dark hair loosely braided. Pale turquoise healer's robes that glow when she uses her powers. Hands that emanate turquoise-gold light when healing.",
    backstory:
      "Neyla's healing abilities are unlike anything seen in generations — she sees and repairs soul-threads. Her breakthrough in reversing ash-oaths changes the war. Each person she frees weakens the Great Gate's power source.",
    characterArc:
      "From compassionate healer to strategic asset. She enters the mirror dimension to free thousands, confronts Mirathane, and performs the final mass liberation ceremony. She learns that healing the world sometimes means entering the wound.",
    keyRelationships: [
      "Itzil — commander and close friend",
      "Mirathane — the Mirror Queen she frees",
      "Helisar — the fallen saint fascinated by her power",
      "Corwen — the first ash-oath slave she frees",
    ],
  },
  {
    id: 8,
    name: "Jagren",
    title: "The Duelist",
    role: "Vanguard Commander",
    alignment: "Hero",
    description: "Arena Fighter Turned True Warrior · Found Honor in Sacrifice",
    quote: "Glory is a lie the living tell about the dead.",
    image: "/images/character-portraits/08-Jagren.png",
    accentColor: "#ef4444",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book IV — The Starless Crown",
      "Book IX — The Forge of Souls",
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Exceptional dueling combat — arena-trained, lethal",
      "Raw physical power and speed",
      "Vanguard leadership from the absolute front",
      "First to kill a villain — an Ashvanar brother",
      "Transformation from glory-seeker to true warrior",
    ],
    physicalDescription:
      "A powerfully built young man of Mesoamerican descent in his mid-20s. Broad-shouldered, muscular, cocky posture. Battle scars across arms and torso. Short-cropped dark hair. Fierce dark eyes. Heavier combat armor — he fights at the front and takes the hits.",
    backstory:
      "An arena duelist who dreamed of glory. The siege of Fortress Ashfall taught him the true cost of war. He killed one of the Ashvanar brothers in a brutal duel and nearly died himself, saved only by Neyla's healing.",
    characterArc:
      "The boy who wanted glory found horror instead. One of the saga's most powerful transformations. He sacrifices his vanity during the Sun-Blade reforging. After the war, he puts away his dueling blade and chooses to teach.",
    keyRelationships: [
      "Itzil — the commander who teaches him real leadership",
      "Kaelen — rival turned brother-in-arms",
      "Neyla — the healer who saves his life",
      "Savren — the Ashvanar twin whose brother he killed",
    ],
  },
  {
    id: 9,
    name: "Miyako",
    title: "The Exile Sensei",
    role: "Shadow School Master",
    alignment: "Hero",
    description:
      "Grey-Haired Exile · Shadow-Step Master · The Teacher Who Came Home",
    quote: "You don't need to be perfect. You just need to be there.",
    image: "/images/character-portraits/09-Miyako.png",
    accentColor: "#94a3b8",
    firstAppearance: "Book II — The Mirror Siege",
    booksAppearedIn: [
      "Book II — The Mirror Siege",
      "Book VI — Rain of Obsidian",
      "Book VII — Feathers and Bone",
    ],
    abilities: [
      "Shadow-step mastery — near-invisible movement",
      "Decades of martial arts expertise",
      "Master teacher who passes her knowledge forward",
      "Infiltration at the highest level",
      "Iron will forged by years of exile",
    ],
    physicalDescription:
      "A striking woman of Eastern descent in her late 50s. Grey hair in a simple, severe style. Weathered face beautiful in its severity. Lean, wiry build from thirty years of daily training. Dark, practical stealth clothing.",
    backstory:
      "An exile haunted by past failures. When Kaelen found her in Mirravale, she recognized the student she'd been waiting for. She taught him the shadow-step and chose to re-enter the fight she'd fled.",
    characterArc:
      "The teacher who came home. From exile hiding in fear to a warrior making her final stand protecting the next generation. She destroys Helisar's factory at the cost of her life, galvanizing the alliance.",
    keyRelationships: [
      "Kaelen — her student and legacy",
      "Korvain — fellow veteran who shares her philosophy",
      "Helisar — the fallen saint whose factory she destroys",
    ],
  },
  {
    id: 10,
    name: "Solkren",
    title: "The Armorer",
    role: "Master Armorer and Soul-Forger",
    alignment: "Hero",
    description: "The Quiet Man No One Watched · Reforger of the Sun-Blade",
    quote: "Words are your weapon. This is mine.",
    image: "/images/character-portraits/10-Solkren.png",
    accentColor: "#f97316",
    firstAppearance: "Book V — The Serpent's Gambit",
    booksAppearedIn: [
      "Book V — The Serpent's Gambit",
      "Book VIII — The Shattered Blade",
      "Book IX — The Forge of Souls",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Master armorer — forges weapons countering Dominion magic",
      "Soul-forging — incorporates memories into weapons",
      "Sun-Blade reforging — the pivotal act that turns the war",
      "Ancient metallurgical knowledge",
      "Quiet strength through craftsmanship",
    ],
    physicalDescription:
      "A massive, powerfully built man of Mesoamerican descent in his mid-40s. Enormous arms built by decades at the forge. Dark skin gleaming with forge-heat. Burn scars on forearms. Shaved head. Quiet, steady eyes. Heavy leather apron over simple clothing.",
    backstory:
      "The quiet man no one watched. While warriors fought, Solkren worked his forge. When the Sun-Blade shattered, he revealed his secret: the fragments still resonated. The blade was always meant to break and be reforged from the memories of those who fight beside its bearer.",
    characterArc:
      "The unsung hero. His moment comes at the saga's turning point — the reforging. Each team member sacrifices their deepest truth to the forge. The new blade carries every soul who forged it. After the war, he forges door hinges instead of weapons.",
    keyRelationships: [
      "Itzil — the commander whose weapon he reforges",
      "The entire team — each contributes a memory to the reforging",
    ],
  },
  {
    id: 11,
    name: "Amalura",
    title: "The Keeper of Lore",
    role: "Scholar and Strategic Advisor",
    alignment: "Hero",
    description:
      "Ancient Keeper of the Sun-Blade Tradition · Sharp-Tongued, Brilliant",
    quote: "Knowledge is only half of wisdom.",
    image: "/images/character-portraits/11-Amalura.png",
    accentColor: "#22d3ee",
    firstAppearance: "Book II — The Mirror Siege",
    booksAppearedIn: [
      "Book II — The Mirror Siege",
      "Book VI — Rain of Obsidian",
      "Book IX — The Forge of Souls",
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Encyclopedic knowledge of history, magic, and tradition",
      "Strategic analysis and tactical advice",
      "Ancient language translation",
      "Intellectual warfare — outmaneuvers Valdremor",
      "Sharp-tongued wit that cuts as deep as any blade",
    ],
    physicalDescription:
      "A dignified woman of Mesoamerican descent in her late 60s. Silver-streaked dark hair in an elaborate coil. Fierce, intelligent eyes behind reading glasses. Ramrod posture despite age. Scholarly robes with Sun-Blade Order insignia. Always carries a leather satchel of ancient texts.",
    backstory:
      "The alliance's greatest scholar and keeper of accumulated knowledge. Nightshade captures her to extract relic locations. In captivity, she learns the Great Gate's true nature and Serenthar's role.",
    characterArc:
      "The scholar who becomes a weapon. Captured, she refuses to break. Rescued, she brings back war-changing intelligence. In the final siege, she outmaneuvers Valdremor. After the war, she annotates Valdremor's journals with wry corrections.",
    keyRelationships: [
      "Valdremor — the genius she ultimately outthinks",
      "Nightshade — the spymaster who cannot break her",
      "Itzil — the commander she advises and occasionally scolds",
      "Serenthar — the oracle whose nature she uncovers",
    ],
  },
  {
    id: 12,
    name: "Serenthar",
    title: "The Weeping Oracle",
    role: "Demon-Bound Seer",
    alignment: "Neutral",
    description:
      "Ancient Seer Who Sees All Futures · Weeps Because She Cannot Look Away",
    quote: "Between us, we hold the shape of every possible future.",
    image: "/images/character-portraits/12-Serenthar.png",
    accentColor: "#a78bfa",
    firstAppearance: "Book II — The Mirror Siege",
    booksAppearedIn: [
      "Book II — The Mirror Siege",
      "Book IV — The Starless Crown",
      "Book VI — Rain of Obsidian",
      "Book X — The Mirror Throne",
      "Book XI — The Starless Crown",
    ],
    abilities: [
      "Omniscient future-sight — sees every possible timeline",
      "Demon-bound prophecy tied to the Great Gate",
      "Luminous tears that carry visions",
      "Dream communication across distance",
      "The power to seal the Great Gate from the other side",
    ],
    physicalDescription:
      "An ethereally beautiful woman of ageless appearance. Pale, luminous skin with inner glow. Eyes that shift color constantly. Luminous tears permanently trailing down her cheeks. White-silver hair. Simple ancient robes. Surrounded by a faint aurora of shifting light.",
    backstory:
      "An ancient seer bound to the Great Gate by the Starless Crown. She sees every possible future and weeps because she cannot look away. Not evil but ancient, tired, and trapped. Her whispered name chills those who know the old stories.",
    characterArc:
      "The tragic figure at the center of everything. Revealed to be a prisoner, not a villain — bound for centuries. She walks through the Gate and seals it from the other side, finally finding peace.",
    keyRelationships: [
      "Amalura — the scholar who uncovers her true nature",
      "Mirathane — the Mirror Queen she trapped centuries ago",
      "Itzil — the Blade-Bearer who gives her the choice she needs",
      "Vastrix — the cosmic hunger she has held at bay",
    ],
  },
  {
    id: 13,
    name: "Zariel",
    title: "The Diplomat",
    role: "Diplomat-Spymaster",
    alignment: "Hero",
    description:
      "Golden-Tongued Strategist · Every Conversation Is a Chess Match",
    quote: "The deadliest weapon in any war is a well-placed word.",
    image: "/images/character-portraits/13-Zariel.png",
    accentColor: "#c9913b",
    firstAppearance: "Book III — Ash Oaths",
    booksAppearedIn: [
      "Book III — Ash Oaths",
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Masterful diplomacy — turns enemies into allies",
      "Political chess at the highest level",
      "Intelligence network management",
      "Multilingual persuasion",
      "Sacrificing personal happiness for the greater good",
    ],
    physicalDescription:
      "A handsome, charismatic man of mixed heritage in his mid-30s. Sharp, intelligent eyes. Impeccably dressed in diplomatic finery — rich fabrics, gold embroidery. A practiced, disarming smile hiding a calculating mind. Every gesture deliberate.",
    backstory:
      "The alliance's golden-tongued diplomat who treats every conversation as chess. At the Grand Summit, he faced Pearlvaine — a demon-diplomat who rearranges truth. He needed a freed ash-oath slave's testimony to prove Dominion atrocities.",
    characterArc:
      "When Pearlvaine holds his sister Essara hostage, he chooses the alliance over family, trusting Kaelen's rescue. Three of five nations join. His words are as deadly as any blade.",
    keyRelationships: [
      "Pearlvaine — his equal and opposite",
      "Essara — his sister, captured and used against him",
      "Itzil — the commander he represents diplomatically",
      "Kaelen — the scout who rescues his sister",
    ],
  },
  {
    id: 14,
    name: "Rainara",
    title: "The Water Warrior",
    role: "Water-Knot Mystic",
    alignment: "Hero",
    description:
      "Master of All Liquid · Deadliest Individual Combatant After Itzil",
    quote: "Water defeats almost everything eventually.",
    image: "/images/character-portraits/14-Rainara.png",
    accentColor: "#3b82f6",
    firstAppearance: "Book V — The Serpent's Gambit",
    booksAppearedIn: [
      "Book V — The Serpent's Gambit",
      "Book VI — Rain of Obsidian",
      "Book IX — The Forge of Souls",
      "Book X — The Mirror Throne",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Water-knot magic — controls all liquid with devastating precision",
      "Elemental purification of poisoned water",
      "Deadliest individual fighter after Itzil",
      "Rage channeled into precise destruction",
      "Environmental healing on a massive scale",
    ],
    physicalDescription:
      "A powerfully built woman of Mesoamerican descent in her late 20s. Athletic, strong, with fluid martial grace. Dark hair often wet and flowing. Turquoise-blue markings on her arms that glow when channeling. Eyes that shift from brown to aquamarine. Lightweight clothing that moves with water.",
    backstory:
      "Freed from Dominion captivity, Rainara channeled her rage into devastating water-magic combat. She tracked her people's water-magic through corrupted rivers, proving herself the deadliest individual combatant after Itzil.",
    characterArc:
      "From captive to the alliance's most devastating elemental warrior. Her rage transforms into focused purpose. She sacrifices her rage during the reforging and channels pure precision. After the war, she cleanses the continent's waterways.",
    keyRelationships: [
      "Itzil — the commander who freed her",
      "Neyla — the healer whose compassion balances her fury",
      "The rivers — her deepest connection is to water itself",
    ],
  },
  {
    id: 15,
    name: "Torvane",
    title: "The Engineer",
    role: "Alliance Engineer and Inventor",
    alignment: "Hero",
    description: "Quiet Genius · Builder of Impossible Machines",
    quote: "It's not beautiful yet. It's honest. That's different.",
    image: "/images/character-portraits/15-Torvane.png",
    accentColor: "#84cc16",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book IV — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Engineering genius — builds impossible machines",
      "Tactical demolitions at critical moments",
      "Siege weapon design and construction",
      "Infrastructure engineering",
      "Seeing solutions where others see problems",
    ],
    physicalDescription:
      "A wiry, intense young man of Mesoamerican descent in his mid-20s. Lean with dexterous, oil-stained hands. Dark eyes always calculating. Hair often unkempt. Practical clothing with tool loops and pockets. Usually has grease on his face.",
    backstory:
      "The quiet genius who builds impossible machines. Doesn't seek glory — seeks the honest solution. His controlled explosion at Fortress Ashfall enabled the alliance's evacuation.",
    characterArc:
      "The engineer who builds a better world. His arc is about the difference between beauty and honesty. After the war, he rebuilds infrastructure for community rather than control.",
    keyRelationships: [
      "Itzil — values his quiet contributions",
      "Skyren — provides aerial perspective for his designs",
      "Dalrignon — the enemy engineer who is his dark mirror",
    ],
  },
  {
    id: 16,
    name: "Skyren",
    title: "The Hawk Rider",
    role: "Aerial Scout and Courier",
    alignment: "Hero",
    description:
      "Pyrrath Rider Bonded to Golden Hawk Cielovar · Fearless Above the Clouds",
    quote: "The picture looks different from up close. Don't forget to land.",
    image: "/images/character-portraits/16-Skyren.png",
    accentColor: "#eab308",
    firstAppearance: "Book IV — The Starless Crown",
    booksAppearedIn: [
      "Book IV — The Starless Crown",
      "Book VI — Rain of Obsidian",
      "Book VII — Feathers and Bone",
      "Book X — The Mirror Throne",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Near-telepathic bond with war-hawk Cielovar",
      "Aerial combat and reconnaissance mastery",
      "Mounted archery from hawk-back",
      "Strategic aerial coordination",
      "Fearlessness at any altitude",
    ],
    physicalDescription:
      "A wild, fierce young woman of Pyrrath desert heritage in her early 20s. Sun-weathered golden-tan skin. Striking amber eyes matching her hawk's. Wind-tangled dark hair. Lean, athletic build. Lightweight Pyrrath rider's leather with bronze hawk-crest insignia.",
    backstory:
      "A Pyrrath hawk rider bonded to Cielovar, the most magnificent war-hawk alive. Their near-telepathic bond makes them the alliance's most effective aerial team, coordinating reconnaissance and evacuation across the war-torn continent.",
    characterArc:
      "The perspective from above. Skyren sees the war differently — literally. Her aerial view gives unique strategic insight. She flies the last reconnaissance after the war — the world is hurt but healing.",
    keyRelationships: [
      "Cielovar — her bonded war-hawk, partner in everything",
      "Sethara — Pyrrath's desert commander, cultural kin",
      "Torvane — the engineer whose designs she field-tests",
    ],
  },
  {
    id: 17,
    name: "Helisar",
    title: "The Fallen Saint",
    role: "Ash-Oath Master",
    alignment: "Villain",
    description:
      "Gentle, Kind-Eyed, and Utterly Monstrous · The Mercy That Enslaves",
    quote: "Tell them... I remembered their names.",
    image: "/images/character-portraits/17-Helisar.png",
    accentColor: "#fbbf24",
    firstAppearance: "Book III — Ash Oaths",
    booksAppearedIn: [
      "Book III — Ash Oaths",
      "Book VI — Rain of Obsidian",
      "Book VII — Feathers and Bone",
    ],
    abilities: [
      "Ash-oath creation — enslaves while appearing to save",
      "Genuine warmth weaponized as control",
      "Mass manipulation through manufactured gratitude",
      "Making slavery look like salvation",
      "Remembering every name of every person he enslaved",
    ],
    physicalDescription:
      "A gentle-looking man of Mesoamerican descent in his late 50s. Warm brown eyes that genuinely radiate kindness. A caring, fatherly smile. Silver-streaked hair. Soft hands. Simple priestly robes. Nothing suggests the monster he is — he looks like the kindest person you've ever met.",
    backstory:
      "The most unsettling villain in the series. Helisar runs 'Gracehold' — a sanctuary that is actually an ash-oath factory. He genuinely cares about the people he enslaves, remembers every name, and believes he is saving them. His warmth is real, which makes his evil all the more terrible.",
    characterArc:
      "The mercy that enslaves. Proof that genuine kindness can coexist with absolute monstrosity. His sanctuary is exposed by Itzil's strike team and destroyed by Miyako's infiltration.",
    keyRelationships: [
      "Neyla — the healer who reverses his ash-oaths",
      "Miyako — the sensei who destroys his factory and dies doing it",
      "Corwen — the first person freed from his ash-oaths",
      "Volzentar — the emperor who uses his 'mercy' as a weapon",
    ],
  },
  {
    id: 18,
    name: "Gravok",
    title: "The Beast Commander",
    role: "War-Beast General",
    alignment: "Villain",
    description: "Mountain of a Man · Brutal, Direct, Relentless",
    quote: "I only knew the roar of battle. It sounds like purpose. It's not.",
    image: "/images/character-portraits/18-Gravok.png",
    accentColor: "#65a30d",
    firstAppearance: "Book I — Sunblade Rising",
    booksAppearedIn: [
      "Book I — Sunblade Rising",
      "Book II — The Mirror Siege",
      "Book IV — The Starless Crown",
    ],
    abilities: [
      "Command over massive war-beasts",
      "Enormous physical strength and endurance",
      "Brutal, direct military tactics",
      "Mirror-portal coordination for multi-city strikes",
      "Sheer overwhelming force",
    ],
    physicalDescription:
      "An enormous man — nearly seven feet tall, massively muscled. Heavy scars across face and body from years handling war-beasts. Dark skin, shaved head, small fierce eyes. Heavy iron and leather armor. Surrounded by the smell of animals and blood.",
    backstory:
      "Gravok's beast army strikes with overwhelming force. His mirror-portal-coordinated attack on three cities demonstrated the Dominion's terrifying reach. Itzil chose mercy over execution when he was captured.",
    characterArc:
      "The brute who discovers that battle is not purpose. Captured, shown mercy by Itzil. His quote reveals the tragedy beneath the brutality — a man who only knew war and mistook its noise for meaning.",
    keyRelationships: [
      "Volzentar — aimed his rage like a weapon",
      "Itzil — captured him and chose mercy",
      "Dalrignon — the portal engineer who enabled his attacks",
    ],
  },
  {
    id: 19,
    name: "Pearlvaine",
    title: "The Demon Diplomat",
    role: "Dominion Negotiator",
    alignment: "Villain",
    description:
      "Demon-Bonded Silver Tongue · Truth Rearranged With Devastating Precision",
    quote: "I never lie. I simply tell you the truth you want to hear.",
    image: "/images/character-portraits/19-Pearlvaine.png",
    accentColor: "#e879f9",
    firstAppearance: "Book III — Ash Oaths",
    booksAppearedIn: ["Book III — Ash Oaths", "Book XI — The Starless Crown"],
    abilities: [
      "Demon-enhanced persuasion — never lies but rearranges truth",
      "Diplomatic manipulation at the highest level",
      "Hostage-taking and leverage exploitation",
      "Truth-as-weapon",
      "Demon-bond enhancements to perception",
    ],
    physicalDescription:
      "A strikingly elegant woman with demon-enhanced beauty. Unnaturally smooth skin with faint iridescent quality. Eyes that shift color during negotiation. Finest diplomatic attire — silk, pearls, and subtle power. Every movement calculated.",
    backstory:
      "The Dominion's demon-bound diplomat who never lies — she simply tells you the truth you want to hear. At the Grand Summit, she nearly destroyed the alliance's efforts through truth-manipulation.",
    characterArc:
      "Proof that truth can be more dangerous than lies. Her demon-bond gives her the ability to rearrange truth with devastating precision, making her the most dangerous person in any room where words are weapons.",
    keyRelationships: [
      "Zariel — her equal and opposite",
      "Essara — Zariel's sister, whom she takes hostage",
      "Volzentar — the emperor she represents",
    ],
  },
  {
    id: 20,
    name: "Dalrignon",
    title: "The Portal Engineer",
    role: "Mirror-Portal Builder",
    alignment: "Villain",
    description: "Brilliant Amoral Engineer · Sees Atrocity as Innovation",
    quote: "BUILD FASTER.",
    image: "/images/character-portraits/20-Dalrignon.png",
    accentColor: "#06b6d4",
    firstAppearance: "Book II — The Mirror Siege",
    booksAppearedIn: [
      "Book II — The Mirror Siege",
      "Book XI — The Starless Crown",
    ],
    abilities: [
      "Mirror-portal engineering from crystallized souls",
      "Genius-level engineering without moral constraints",
      "Innovation through atrocity",
      "Making the impossible possible at any cost",
      "Feverish, obsessive work ethic",
    ],
    physicalDescription:
      "A wild-eyed, disheveled man in his late 40s. Thin, feverish, hasn't slept in years. Burns and chemical stains on hands. Wild, unkempt hair. Eyes blazing with manic intensity. Stained laboratory coat. Surrounded by blueprints and crystal fragments.",
    backstory:
      "The Dominion's portal engineer, revealed as a butcher. He builds mirror-portals powered by crystallized human souls. He doesn't see atrocity — he sees innovation.",
    characterArc:
      "The mad genius who makes the impossible possible at any cost. Intelligence without empathy. He makes his last stand defending the Gate.",
    keyRelationships: [
      "Gravok — uses his portals for attacks",
      "Valdremor — directs his engineering",
      "Torvane — heroic counterpart who builds to help",
    ],
  },
  {
    id: 21,
    name: "Mirathane",
    title: "The Mirror Queen",
    role: "Mirror-Realm Assassin",
    alignment: "Villain",
    description:
      "Demon-Bonded Killer · Strikes Through Reflections · A Child Imprisoned in Glass",
    quote: "The equation requires your death. Nothing personal.",
    image: "/images/character-portraits/21-Mirathane.png",
    accentColor: "#e2e8f0",
    firstAppearance: "Book X — The Mirror Throne",
    booksAppearedIn: [
      "Book X — The Mirror Throne",
      "Book XI — The Starless Crown",
    ],
    abilities: [
      "Mirror-realm control — traps souls in reflections",
      "Strikes through any reflective surface",
      "Thousands of enslaved souls powering the Gate",
      "Demon-bond enhanced combat",
      "Reality distortion within the mirror dimension",
    ],
    physicalDescription:
      "An ethereally beautiful woman with crystalline features — skin with mirror-like quality. Eyes like fractured mirrors reflecting stolen faces. Silver-white hair moving as if reflected in water. Robes of shattered-mirror fabric. Surrounded by floating reflective fragments.",
    backstory:
      "The Mirror Queen who traps souls in stolen reflections. But she is herself a prisoner — trapped by Serenthar centuries ago, a child imprisoned in glass who became the monster she was forced to be.",
    characterArc:
      "The villain who is also a victim. Neyla enters the mirror and discovers her true nature — not evil but trapped. Neyla frees her, weakening the Great Gate. Her freedom is one of the saga's most unexpected acts of mercy.",
    keyRelationships: [
      "Neyla — the healer who frees her",
      "Serenthar — the oracle who imprisoned her",
      "The thousands of stolen souls — her unwilling prisoners",
    ],
  },
  {
    id: 22,
    name: "Relicara",
    title: "The Relic Collector",
    role: "Artifact Hoarder and Fortress-Keeper",
    alignment: "Villain",
    description: "Obsessive Collector · Cathedral of Stolen Power",
    quote: "You are not a collector. You are a warehouse.",
    image: "/images/character-portraits/22-Relicara.png",
    accentColor: "#a855f7",
    firstAppearance: "Book V — The Serpent's Gambit",
    booksAppearedIn: ["Book V — The Serpent's Gambit"],
    abilities: [
      "Control over vast collection of stolen artifacts",
      "Fortress command — nearly impregnable cathedral",
      "Obsessive knowledge of every artifact's provenance",
      "Artifact-enhanced combat",
      "Possessive will that controls her environment",
    ],
    physicalDescription:
      "A striking woman of Mesoamerican descent in her early 40s. Sharp, angular features with intense dark eyes. Elaborate braided hair interwoven with tiny stolen relics and glowing gems. Layered purple and gold robes. Adorned with stolen artifact jewelry pulsing with different colors.",
    backstory:
      "A fortress-keeper commanding a cathedral-scale chamber of stolen magical artifacts. Relicara loves objects more than people — each relic cataloged, maintained, and protected with obsessive devotion.",
    characterArc:
      "The dragon guarding her hoard. Obsession as villainy — collection turned to control, possession to purpose. Her fortress is a monument to stolen power.",
    keyRelationships: [
      "Valdremor — directs her to seize relics",
      "Kaelen — attempts to steal from her fortress",
      "Rainara — freed near her fortress",
    ],
  },
  {
    id: 23,
    name: "Vastrix",
    title: "The Hunger",
    role: "The Hunger Beyond the Gate",
    alignment: "Cosmic",
    description: "A Dimension Made of Hunger · Crown of Dead Stars",
    quote: "I SEE YOU. ALL OF YOU. AND I AM HUNGRY.",
    image: "/images/character-portraits/23-Vastrix.png",
    accentColor: "#581c87",
    firstAppearance: "Book XI — The Starless Crown",
    booksAppearedIn: ["Book XI — The Starless Crown"],
    abilities: [
      "Cosmic-scale hunger that devours reality",
      "Void manipulation — living darkness",
      "Dead-star crown orbiting its form",
      "Reality distortion",
      "The power to end worlds",
    ],
    physicalDescription:
      "Not a person but a cosmic entity — a humanoid void of absolute darkness cut from reality. Where a face should be, only void with dead starlight. A crown of dead stars orbits its head. Surrounded by space debris and crushed remains of consumed worlds.",
    backstory:
      "The thing beyond the Great Gate. Not a villain but a dimension made of hunger. Serenthar has held it at bay for centuries. The Starless Crown is both prison and key.",
    characterArc:
      "The final threat. Not a person to defeat but a concept to survive. Itzil's Sun-Blade — forged from bonds and memories — blazes against the void with the light of every soul who chose to fight.",
    keyRelationships: [
      "Serenthar — held it at bay for centuries",
      "Itzil — faces it in the final confrontation",
      "The Starless Crown — both prison and summons",
    ],
  },
  {
    id: 24,
    name: "Essara",
    title: "The Unbroken",
    role: "Intelligence Analyst · Zariel's Sister",
    alignment: "Hero",
    description: "Captured and Unbroken · Language Specialist Turned Spy",
    quote: "I would have been ashamed if you'd traded the alliance for me.",
    image: "/images/character-portraits/24-Essara.png",
    accentColor: "#14b8a6",
    firstAppearance: "Book III — Ash Oaths",
    booksAppearedIn: ["Book III — Ash Oaths", "Book XII — The Golden Shard"],
    abilities: [
      "Multilingual intelligence analysis",
      "Psychological resistance to interrogation",
      "Language decryption and code-breaking",
      "Quiet, unbreakable determination",
      "Gathering intelligence while appearing helpless",
    ],
    physicalDescription:
      "A composed young woman of mixed heritage in her mid-20s. Resembles Zariel but quieter, more observational. Dark, intelligent eyes. Practical clothing rather than diplomatic finery. Often overlooked — her greatest asset.",
    backstory:
      "Zariel's younger sister, captured by Pearlvaine as leverage. Despite captivity, she refused to break — her quiet resistance proved invaluable. Kaelen's rescue freed her.",
    characterArc:
      "Strength in many forms — no combat, no magic, no political power. Only her mind and her refusal to surrender.",
    keyRelationships: [
      "Zariel — her brother who chose the alliance over her safety",
      "Pearlvaine — held her captive",
      "Kaelen — rescued her",
    ],
  },
  {
    id: 25,
    name: "Savren",
    title: "The Ashvanar Sorcerer",
    role: "Dominion Battle Mage (Twin)",
    alignment: "Villain",
    description: "Dark Sorcerer · Lightning and Acid · Speed vs. Magic",
    quote: "Power is not the question. Control is.",
    image: "/images/character-portraits/25-Savren.png",
    accentColor: "#4ade80",
    firstAppearance: "Book IV — The Starless Crown",
    booksAppearedIn: [
      "Book IV — The Starless Crown",
      "Book XI — The Starless Crown",
    ],
    abilities: [
      "Lightning and acid sorcery",
      "Twin-bond combat coordination",
      "Cold, precise magical control",
      "Battle-magic at massive scale",
      "Surgical precision with devastating power",
    ],
    physicalDescription:
      "A sharp-featured man of mixed heritage in his early 30s. Lean, elegant, cold grey-green eyes. Dark hair swept back. Battle-mage robes of dark green and black. Hands crackling with contained lightning.",
    backstory:
      "One of the Ashvanar twins serving the Dominion. Savren is the controlled one, wielding lightning and acid with surgical precision. Together with Gravos they are devastating; apart, halved.",
    characterArc:
      "The controlled twin. When Jagren kills Gravos, Savren loses the one person who balanced him. His fall is about losing the relationship that gave his power meaning.",
    keyRelationships: [
      "Gravos — his twin, the other half",
      "Jagren — killed his brother",
      "Volzentar — the emperor they serve",
    ],
  },
  {
    id: 26,
    name: "Gravos",
    title: "The Surviving Ashvanar",
    role: "Dominion Battle Mage (Twin)",
    alignment: "Villain",
    description: "Driven Mad by Grief · Sorcery Uncontrolled",
    quote: "BROTHER!",
    image: "/images/character-portraits/26-Gravos.png",
    accentColor: "#22c55e",
    firstAppearance: "Book IV — The Starless Crown",
    booksAppearedIn: [
      "Book IV — The Starless Crown",
      "Book XI — The Starless Crown",
    ],
    abilities: [
      "Raw, uncontrolled sorcery",
      "Grief-fueled magical amplification",
      "Massive, indiscriminate destruction",
      "Power without control",
      "The tragic weaponization of grief",
    ],
    physicalDescription:
      "Similar to Savren but larger, wilder. After his twin's death — eyes wild, hair unkempt, sorcery crackling uncontrolled. Dark green robes singed and torn. Consuming grief replacing elegance.",
    backstory:
      "The other Ashvanar twin. Where Savren was control, Gravos was power. When Jagren killed Savren, Gravos shattered. His grief drives him mad.",
    characterArc:
      "Power without control. His single-word quote — 'BROTHER!' — is the most emotionally devastating in the series.",
    keyRelationships: [
      "Savren — his twin, killed by Jagren",
      "Jagren — destroyed his world",
      "Volzentar — tries to weaponize his grief",
    ],
  },
  {
    id: 27,
    name: "Corwen",
    title: "The First Freed",
    role: "Freed Ash-Oath Survivor",
    alignment: "Hero",
    description: "Farmer From Gracehold · First Liberated Witness",
    quote: "My name is Corwen. I remember now.",
    image: "/images/character-portraits/27-Corwen.png",
    accentColor: "#fbbf24",
    firstAppearance: "Book III — Ash Oaths",
    booksAppearedIn: ["Book III — Ash Oaths", "Book XII — The Golden Shard"],
    abilities: [
      "Testimony that changes five nations",
      "Ordinary human resilience",
      "The courage to speak after being silenced",
      "The power of being achingly ordinary",
      "Proof that ash-oaths can be broken",
    ],
    physicalDescription:
      "A weathered man of indigenous Mesoamerican descent in his late 30s. Broad, honest farmer's face. Sun-darkened skin, gaunt from servitude. Wide brown eyes with returned consciousness. Fading ash-oath scar on chest. Rough laborer's clothing. Tears streaming from having a will again.",
    backstory:
      "A farmer from Gracehold and the first person freed from an ash-oath by Neyla. An ordinary man who had his will stolen and returned. His testimony changes five nations.",
    characterArc:
      "The most powerful portrait is the most ordinary person. The war is fought BY heroes but FOR people like Corwen.",
    keyRelationships: [
      "Neyla — the healer who freed him",
      "Helisar — the saint who enslaved him",
      "Zariel — uses his testimony diplomatically",
    ],
  },
  {
    id: 28,
    name: "Cielovar",
    title: "The Golden Hawk",
    role: "Skyren's Bonded War-Hawk",
    alignment: "Hero",
    description:
      "Near-Telepathic Bond · Outflies Everything · Wings of Gold and Fire",
    quote: "—",
    image: "/images/character-portraits/28-Cielovar.png",
    accentColor: "#d97706",
    firstAppearance: "Book IV — The Starless Crown",
    booksAppearedIn: [
      "Book IV — The Starless Crown",
      "Book VII — Feathers and Bone",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Twenty-foot wingspan — massive aerial predator",
      "Near-telepathic bond with Skyren",
      "Outflies every other creature",
      "Aerial combat and reconnaissance",
      "Sentient warrior-partner, not a mount",
    ],
    physicalDescription:
      "A magnificent golden war-hawk with twenty-foot wingspan. Deep brown-black primary feathers with barred cream patterns. Golden mantle blazing like polished metal. Cream-white breast with brown streaking. Enormous curved beak. Stunning golden-amber eyes. Talons like scimitars.",
    backstory:
      "The most magnificent creature in the series. Cielovar is not a mount but a sentient partner bonded to Skyren through near-telepathic connection.",
    characterArc:
      "The king of the sky. Represents the freedom the alliance fights for — wild, golden, untameable.",
    keyRelationships: [
      "Skyren — bonded rider and partner",
      "The sky — natural domain",
    ],
  },
  {
    id: 29,
    name: "Brennan",
    title: "Thalendor's Attaché",
    role: "Allied Military Commander",
    alignment: "Hero",
    description: "Stern, Professional · Mountain Warrior Who Does Not Kneel",
    quote: "Can this alliance survive?",
    image: "/images/character-portraits/29-Brennan.png",
    accentColor: "#64748b",
    firstAppearance: "Book XI — The Starless Crown",
    booksAppearedIn: [
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Decades of mountain infantry command",
      "Professional military assessment",
      "Heavy plate combat — endurance over speed",
      "Unshakeable composure",
      "Holding mountain passes against armies",
    ],
    physicalDescription:
      "A broad, imposing man of Northern heritage in his mid-40s. Heavy blue-grey Thalendor plate armor with commander's insignia. Steel-grey eyes. Dark brown hair heavily grey-streaked. Prominent scar from temple across damaged ear. Thick trimmed moustache.",
    backstory:
      "Thalendor's military attaché — a career officer assessing whether the alliance can survive. Not convinced, but present. Thalendor does not kneel.",
    characterArc:
      "Professional skepticism transformed by witnessing the alliance's commitment. Represents nations who join from calculation and stay from respect.",
    keyRelationships: [
      "Itzil — the commander he eventually respects",
      "Sethara — fellow allied commander",
      "The alliance — the institution he evaluates",
    ],
  },
  {
    id: 30,
    name: "Sethara",
    title: "Pyrrath's Commander",
    role: "Allied Desert Commander",
    alignment: "Hero",
    description: "Copper-Haired, Direct · Committed Regardless of Losses",
    quote: "We ride. We fight. We do not count the cost.",
    image: "/images/character-portraits/30-Sethara.png",
    accentColor: "#ea580c",
    firstAppearance: "Book XI — The Starless Crown",
    booksAppearedIn: [
      "Book XI — The Starless Crown",
      "Book XII — The Golden Shard",
    ],
    abilities: [
      "Desert cavalry command — born in the saddle",
      "Mounted combat with curved saber",
      "Recurve bow archery from horseback",
      "Leading charges from the front",
      "Tactical desert warfare",
    ],
    physicalDescription:
      "A fierce, striking woman of desert heritage in her early 30s. Deep golden-tan skin. Amber-green eyes. Thick copper-red hair blazing like fire. Lightweight Pyrrath desert cavalry armor with bronze plates. Cavalry saber at hip, recurve bow across back.",
    backstory:
      "Pyrrath's desert commander who leads cavalry charges from the front. Her copper hair blazes like a battle standard. She counts the cost after, not before.",
    characterArc:
      "The fire from the desert. Pure, uncompromising commitment — she doesn't philosophize, she rides. Her cavalry is the alliance's most mobile force.",
    keyRelationships: [
      "Skyren — cultural kin from Pyrrath",
      "Brennan — fellow commander, opposite temperament",
      "Itzil — the commander she follows without reservation",
    ],
  },
];
