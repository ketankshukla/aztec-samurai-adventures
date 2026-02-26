export interface Chapter {
  number: number;
  title: string;
  summary: string;
}

export interface Book {
  id: number;
  roman: string;
  title: string;
  subtitle: string;
  act: string;
  focusCharacter: string;
  epigraph: { quote: string; author: string };
  description: string;
  elaborateDescription: string;
  coverImage: string;
  chapters: Chapter[];
  color: string;
  kindleUrl?: string;
  paperbackUrl?: string;
}

export const books: Book[] = [
  {
    id: 1,
    roman: "I",
    title: "Sunblade Rising",
    subtitle: "A Blade Forged in Light",
    act: "Act I — The Rising",
    focusCharacter: "Itzil (Commander)",
    epigraph: {
      quote: "The blade that protects is sharper than the blade that conquers.",
      author: "Korvain, Last Grandmaster of the Sun-Blade Order",
    },
    description:
      "The Dominion attacks. A reluctant warrior discovers she is the prophesied Blade-Bearer. She must assemble a team and fight a war she never wanted.",
    elaborateDescription:
      "When Dominion soldiers raid her village and steal the Ember Core — one of seven sacred relics — Itzil, a young warrior-in-training at the Sun-Blade temple, is thrust into a prophecy she doesn't want. Trained by the aging grandmaster Korvain, she must learn to manifest the Sun-Blade, a weapon forged from pure sunlight and conviction. Gathering allies — the cocky scout Kaelen, the glory-seeking duelist Jagren, the quiet engineer Torvane, and the compassionate healer Neyla — Itzil leads her first strike against a Dominion outpost and comes face to face with Nightshade, a blood-magic assassin who offers her a deal she refuses. As Volzentar deploys his beast commander Gravok, the horizon darkens with the shadow of an army that will test everything Itzil believes about leadership, courage, and sacrifice.",
    coverImage: "/images/book-covers/book1-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPDH3C5B",
    paperbackUrl: "https://www.amazon.com/dp/B0GPJN79DV",
    color: "#40e0d0",
    chapters: [
      {
        number: 1,
        title: "The Edge of Smoke",
        summary:
          "Itzil trains with Korvain at the Sun-Blade temple. Dominion soldiers raid the village below — her first real combat. The raid was a diversion to breach the temple.",
      },
      {
        number: 2,
        title: "Fire in the Valley",
        summary:
          "The Ember Core is stolen from the temple vault. Korvain reveals the seven relics can open the Great Gate. Itzil is sent to gather allies.",
      },
      {
        number: 3,
        title: "The Ember Core",
        summary:
          "Amalura briefs Itzil on relic locations. Itzil departs with an escort. That night, golden light flickers in her palms for the first time.",
      },
      {
        number: 4,
        title: "The Prophecy She Doesn't Want",
        summary:
          "Amalura reveals the Sun-Blade prophecy — Itzil may be the bearer. She learns the last bearer died sealing the Gate three centuries ago.",
      },
      {
        number: 5,
        title: "First Light",
        summary:
          "Korvain trains Itzil in Sun-Blade manifestation. The blade responds to clarity of purpose, not force. She achieves sustained manifestation for the first time.",
      },
      {
        number: 6,
        title: "Whispers from the Dominion",
        summary:
          "First villain POV. Volzentar receives the Ember Core. He orders Nightshade to find the new blade-bearer. Gravok is deployed to the border.",
      },
      {
        number: 7,
        title: "The Road to War",
        summary:
          "Itzil reaches the frontier outpost of Ashmark and recruits Kaelen — a bitter, brilliant scout whose entire unit was wiped out by the Dominion.",
      },
      {
        number: 8,
        title: "The Scout",
        summary:
          "Kaelen's POV. He assesses the team with a scout's eye, demonstrates tracking skills, and begins to respect Itzil's leadership.",
      },
      {
        number: 9,
        title: "The Duelist and the Engineer",
        summary:
          "Jagren is recruited from a fighting pit; Torvane from his border forge. The five-person team is established for the first time.",
      },
      {
        number: 10,
        title: "The Healer's Burden",
        summary:
          "Neyla works in a refugee camp, haunted by her ash-oathed family. Itzil recruits her with the possibility that ash-oaths can be reversed.",
      },
      {
        number: 11,
        title: "The First Camp",
        summary:
          "The full team's first night together. Kaelen proposes raiding Thornspire for intelligence. He secretly witnesses Itzil's Sun-Blade practice.",
      },
      {
        number: 12,
        title: "March to Thornspire",
        summary:
          "Kaelen scouts the route and maps Thornspire's layout. The infiltration plan is finalized — Torvane disables wards, Kaelen enters alone.",
      },
      {
        number: 13,
        title: "The Thornspire Raid",
        summary:
          "The team executes the infiltration at 3 AM. Neyla discovers she can interact with blood-magic. Intelligence is extracted revealing Nightshade's name.",
      },
      {
        number: 14,
        title: "Escape from Thornspire",
        summary:
          "Dominion tracking beasts pursue the team. They escape through a freezing river. Kaelen's respect for Itzil's leadership deepens.",
      },
      {
        number: 15,
        title: "The Intelligence",
        summary:
          "The stolen intelligence reveals relic positions and Dominion plans. Korvain warns about Nightshade. The team arranges smuggler transport to the coast.",
      },
      {
        number: 16,
        title: "The Border Crossing",
        summary:
          "Jagren's POV. He confronts the reality of war vs. arena fighting. A destroyed, emptied village shifts his motivation from glory to purpose.",
      },
      {
        number: 17,
        title: "The Blood Orator",
        summary:
          "At the coastal temple, Itzil encounters Nightshade face-to-face. Nightshade offers a deal using weaponized truth. Itzil refuses and the Sun-Blade shatters her blood-magic.",
      },
      {
        number: 18,
        title: "Cracks in the Armor",
        summary:
          "Itzil secures the Tide Pearl and receives a vision of the Great Gate straining. The team extracts while Torvane collapses the road behind them.",
      },
      {
        number: 19,
        title: "Race to the Coast",
        summary:
          "Nightshade reports to Volzentar, profiling each hero. Volzentar marks Neyla for elimination and deploys Gravok's beasts as a combat test.",
      },
      {
        number: 20,
        title: "The Tide Pearl",
        summary:
          "Gravok's war-beasts attack. The Sun-Blade's golden light causes the dark-magic-controlled beasts to flinch. The team escapes through a narrow gorge.",
      },
      {
        number: 21,
        title: "The Beach Battle",
        summary:
          "The Sun-Blade undergoes a dramatic power surge. The team witnesses its full manifestation. Kaelen theorizes the blade could close the Gate itself.",
      },
      {
        number: 22,
        title: "The Sun-Blade Speaks",
        summary:
          "The team returns to the temple. Itzil demonstrates the blade for Korvain — the best performance in three centuries. Two weeks of training begins.",
      },
      {
        number: 23,
        title: "Nightshade's Report",
        summary:
          "War council plans the Starshard mission. Amalura theorizes relic resonance. The team declares readiness. Korvain reveals quiet pride in Itzil.",
      },
      {
        number: 24,
        title: "The Horizon Darkens",
        summary:
          "The night before departure. Kaelen shares his dead unit's names. Itzil says goodbye to Korvain. The team marches toward the Shattered Peaks as VASTRIX whispers 'Soon.'",
      },
    ],
  },
  {
    id: 2,
    roman: "II",
    title: "The Mirror Siege",
    subtitle: "Reflections of Betrayal",
    act: "Act I — The Rising",
    focusCharacter: "Kaelen (Scout)",
    epigraph: {
      quote: "Trust is a mirror — once cracked, every reflection is a lie.",
      author: "Miyako, The Exile Sensei",
    },
    description:
      "Gravok attacks three cities via mirror-portals. Kaelen goes behind enemy lines to destroy the mirror-anchor. The Dominion's portal engineer Dalrignon is revealed as a butcher.",
    elaborateDescription:
      "Gravok's beast army strikes three cities simultaneously through mirror-portals — shimmering doorways that let his forces appear anywhere. Kaelen infiltrates Dominion territory alone, discovering the portals are powered by crystallized human souls. In the occupied town of Mirravale, he meets Miyako — an exile sensei who teaches him the shadow-step technique. Together they destroy the mirror-anchor, collapsing every portal across the continent. Itzil defeats and captures Gravok, choosing mercy over execution. But in the aftermath, Amalura examines the anchor fragments and goes pale: these devices are older than the Dominion. The enemy is collecting parts to rebuild the Great Gate — a sealed portal to something terrible. A captured officer whispers a name that chills the blood: Serenthar, the Weeping One.",
    coverImage: "/images/book-covers/book2-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GP9NW42M",
    paperbackUrl: "https://www.amazon.com/dp/B0GPP97B6S",
    color: "#6366f1",
    chapters: [
      {
        number: 1,
        title: "The Army on the Move",
        summary:
          "Gravok's army marches on three cities. Itzil refuses to abandon any, splitting forces. Kaelen is sent behind enemy lines to find the force multiplier.",
      },
      {
        number: 2,
        title: "Mirrors and Smoke",
        summary:
          "Kaelen infiltrates Dominion territory and discovers twenty-six mirror-portals enabling instant troop transport. He escapes Gravok and collapses delivering the intel.",
      },
      {
        number: 3,
        title: "The Beast Commander",
        summary:
          "Kaelen recovers and is authorized for deep infiltration to find the portal anchor. The emotional weight between him and Itzil deepens as he departs alone.",
      },
      {
        number: 4,
        title: "Three-Front Defense",
        summary:
          "Itzil redesigns the three-city defense using Torvane's signal mirrors. Amalura challenges Itzil about her concern for Kaelen going beyond tactical necessity.",
      },
      {
        number: 5,
        title: "The Occupied Town",
        summary:
          "Kaelen infiltrates occupied Mirravale and discovers Miyako — a shadow-school master covertly sabotaging Dominion operations. The mirror-anchor is powered by a trapped soul.",
      },
      {
        number: 6,
        title: "The Exile Sensei",
        summary:
          "Miyako reveals her backstory as an exile sensei. She begins teaching Kaelen the shadow-step technique and commits to joining the alliance.",
      },
      {
        number: 7,
        title: "The Glass House",
        summary:
          "Kaelen and Miyako infiltrate the glass house. Miyako uses the shadow-step to strike the anchor. The crystal cracks, all portals collapse, and the trapped soul is freed.",
      },
      {
        number: 8,
        title: "The Portal Engineer",
        summary:
          "Dalrignon feels his portals die and begins redesigning with distributed anchors. He reads ancient texts about the Great Gate and writes: BUILD FASTER.",
      },
      {
        number: 9,
        title: "The Siege of Aravalle",
        summary:
          "Gravok's army besieges Aravalle. Itzil holds a breached gate alone for eleven minutes. The portals collapse mid-battle and Jagren's reinforcements arrive.",
      },
      {
        number: 10,
        title: "The Anchor Falls",
        summary:
          "Kaelen and Miyako flee the collapsing glass house. Edren's soul is released into the stars. Distant cheering confirms the portals are down across the continent.",
      },
      {
        number: 11,
        title: "The Beast Falls",
        summary:
          "Itzil leads the counterattack. She defeats Gravok in single combat and chooses mercy — capturing him alive. The Dominion army surrenders.",
      },
      {
        number: 12,
        title: "The Duelist's Glory",
        summary:
          "Jagren duels Gravok's elite lieutenant Thornmaw and wins — but the victory feels hollow. Neyla's quiet wisdom begins transforming him from performer to warrior.",
      },
      {
        number: 13,
        title: "Prisoner of War",
        summary:
          "Itzil interrogates Gravok, who reveals four relics in Dominion hands and warns that Volzentar will now target the people Itzil loves.",
      },
      {
        number: 14,
        title: "Miyako Joins",
        summary:
          "Kaelen arrives with Miyako. She assesses the team and delivers a hard truth: they fight as individuals, not a unit. Coordinated combat training begins.",
      },
      {
        number: 15,
        title: "Torvane's Machines",
        summary:
          "Torvane builds devices from portal fragments. His detector picks up an ancient signal — the Great Gate's standby resonance. Dalrignon reverse-engineered his tech from it.",
      },
      {
        number: 16,
        title: "Older Than the Dominion",
        summary:
          "Amalura reveals the Gate connects to a dying dimension housing a vast intelligence. The Dominion thinks they use the Gate — the Gate is using them.",
      },
      {
        number: 17,
        title: "Nightshade's Lament",
        summary:
          "Nightshade discovers Kaelen's unit was betrayed by a traitor, not just ambushed. She plans to weaponize this secret to fracture the team.",
      },
      {
        number: 18,
        title: "The Interrogation",
        summary:
          "Gravok describes the Weeping One beneath the Dominion palace. She prophesied that 'the one who forges the blade a second time' would unmake everything.",
      },
      {
        number: 19,
        title: "The Shadow-Step",
        summary:
          "Kaelen struggles with shadow-step training until Miyako confronts his guilt. He releases the weight and achieves twenty seconds of perfect invisibility.",
      },
      {
        number: 20,
        title: "Neyla's Discovery",
        summary:
          "Neyla discovers her healing magic can suppress ash-oath sigils for two seconds. If perfected, half the Dominion's enslaved army could be freed.",
      },
      {
        number: 21,
        title: "War Council",
        summary:
          "Itzil presents the full strategic picture. A diplomatic mission to neutral nations is planned. Kaelen affirms Itzil as 'someone worth following.'",
      },
      {
        number: 22,
        title: "Dalrignon's Rage",
        summary:
          "Dalrignon designs a Gate filter with a 2.7% failure probability. He dismisses the ancient builders' warnings and accelerates the timeline.",
      },
      {
        number: 23,
        title: "The Weeping One",
        summary:
          "Volzentar consults Serenthar, who prophesies the blade-forger hidden by insignificance. The Gate will open. The filter will fail. The odds are not zero.",
      },
      {
        number: 24,
        title: "The Horizon Widens",
        summary:
          "Victory aftermath. Korvain orders the team to find Zariel for diplomacy. Kaelen and Itzil share a quiet moment of trust. The war moves from battlefields to courts.",
      },
    ],
  },
  {
    id: 3,
    roman: "III",
    title: "Ash Oaths",
    subtitle: "Bonds Written in Blood",
    act: "Act I — The Rising",
    focusCharacter: "Zariel (Diplomat-Spymaster)",
    epigraph: {
      quote:
        "The deadliest weapon in any war is not a blade — it is a well-placed word.",
      author: "Zariel, before the Grand Summit",
    },
    description:
      "Zariel attends a summit of neutral nations. He must outmaneuver Pearlvaine, the Dominion's demon-bound diplomat, while Itzil strikes at Helisar's ash-oath factory.",
    elaborateDescription:
      "Diplomacy becomes the battlefield as Zariel faces Pearlvaine — a demon-bound diplomat who doesn't lie but rearranges truths with devastating precision. At the Grand Summit of neutral nations, Zariel needs proof of Dominion atrocities: a freed ash-oath slave to testify. While he works the political arena, Itzil leads a strike against Helisar's 'sanctuary' — actually an ash-oath factory run by a fallen saint whose gentle kindness masks utter monstrosity. The freed slave's testimony devastates Pearlvaine's position, but the demon-diplomat pivots: she holds Zariel's younger sister hostage. Zariel makes the hardest choice of his life — the alliance over his sister's safety. Kaelen's rescue mission succeeds. Three of five neutral nations join the alliance. But Volzentar has been watching through a spy, and he knows every detail of their plans.",
    coverImage: "/images/book-covers/book3-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPN6SNVQ",
    paperbackUrl: "https://www.amazon.com/dp/B0GPPWBMKL",
    color: "#c9913b",
    chapters: [
      {
        number: 1,
        title: "The Golden Tongue",
        summary:
          "Zariel arrives at the neutral summit in Veranthos. He must convince five nations to join the alliance against the Dominion's demon-bound diplomat Pearlvaine.",
      },
      {
        number: 2,
        title: "The Demon Diplomat",
        summary:
          "Pearlvaine is introduced — she doesn't lie but rearranges truths with devastating precision. Zariel realizes he can't out-talk her without proof of Dominion atrocities.",
      },
      {
        number: 3,
        title: "The Grand Summit",
        summary:
          "The summit formally opens. Pearlvaine offers comfortable lies about Dominion prosperity. Zariel needs a freed ash-oath slave to testify — living proof.",
      },
      {
        number: 4,
        title: "Zariel's Gambit",
        summary:
          "Zariel sends word to Itzil: he needs a freed ash-oath victim to testify at the summit. Itzil dispatches a strike team to Helisar's territory.",
      },
      {
        number: 5,
        title: "The Fallen Saint",
        summary:
          "Itzil's team infiltrates Gracehold, a Dominion town run by Helisar. The residents appear content but blank — their inner lives erased by ash-oaths.",
      },
      {
        number: 6,
        title: "The Saint's Mask",
        summary:
          "Helisar discovers the team and confronts Itzil philosophically — arguing ash-oaths remove the burden of freedom. Itzil counters that unchosen mercy is control.",
      },
      {
        number: 7,
        title: "The Liberation",
        summary:
          "Neyla supports the freed slave Corwen as the team evacuates through the cathedral at dawn, escaping during the guard rotation gap Kaelen timed.",
      },
      {
        number: 8,
        title: "The Escape from Gracehold",
        summary:
          "Helisar activates pursuit with tireless ash-oath soldiers. Kaelen navigates the team downriver to outpace them and deliver Corwen to the summit.",
      },
      {
        number: 9,
        title: "The Testimony",
        summary:
          "Corwen testifies at the summit — his account of ash-oath enslavement devastates Pearlvaine's position. The neutral nations are shaken.",
      },
      {
        number: 10,
        title: "Pearlvaine's Pivot",
        summary:
          "Pearlvaine receives contingency authorization: use Zariel's sister Essara as a hostage. Trade his withdrawal for her safe return.",
      },
      {
        number: 11,
        title: "The Sister",
        summary:
          "Zariel faces an impossible choice — five nations or his sister. Korvain asks what he would tell Essara to do if the roles were reversed.",
      },
      {
        number: 12,
        title: "Zariel's Choice",
        summary:
          "Zariel chooses the alliance over his sister's safety. He authorizes a rescue mission and commits fully to the diplomatic campaign.",
      },
      {
        number: 13,
        title: "The Rescue Plan",
        summary:
          "Kaelen plans the rescue of Essara from Facility Twelve. The team operates from a fisherman's cottage three miles from the facility.",
      },
      {
        number: 14,
        title: "The Infiltration",
        summary:
          "Kaelen and Miyako infiltrate Facility Twelve at midnight through a drainage tunnel. They locate Essara and extract her under fire.",
      },
      {
        number: 15,
        title: "The Breakout",
        summary:
          "Jagren creates a diversion at the north gate with flash charges. He retreats with discipline rather than fighting — honoring non-lethal principles.",
      },
      {
        number: 16,
        title: "The Reunion",
        summary:
          "Zariel and Essara reunite at the harbor. She tells him she would have been ashamed if he'd traded the alliance for her. The delegations witness the moment.",
      },
      {
        number: 17,
        title: "The Vote",
        summary:
          "The summit votes on the Allied Compact. Three of five neutral nations commit forces to the alliance. Pearlvaine has departed — outmaneuvered.",
      },
      {
        number: 18,
        title: "Pearlvaine's Retreat",
        summary:
          "Pearlvaine processes her defeat and reports to Volzentar. He reassigns her to finding fracture lines in the coalition's incompatible national interests.",
      },
      {
        number: 19,
        title: "The Ash-Oath Decoded",
        summary:
          "Amalura discovers ash-oaths are conduits draining life-force to power the Great Gate. Every enslavement shortens the timeline to activation.",
      },
      {
        number: 20,
        title: "The Alliance Forms",
        summary:
          "The allied camp grows to 15,000 warriors. Itzil integrates three military cultures. Neyla trains twelve healer-students in oath-breaking.",
      },
      {
        number: 21,
        title: "The Spy",
        summary:
          "Kaelen discovers a Dominion spy in the alliance. He sets a counter-intelligence trap with three versions of false intelligence and identifies the traitor.",
      },
      {
        number: 22,
        title: "Volzentar Knows",
        summary:
          "Volzentar reveals the alliance's strategy is compromised. He plans to lure them to Fortress Ashfall — prepared with hidden troops and sorcery arrays.",
      },
      {
        number: 23,
        title: "Marching Orders",
        summary:
          "The 15,000-strong alliance army marches south. The Ashrun Corridor falls in three days — their first combined victory. Morale surges.",
      },
      {
        number: 24,
        title: "The Gates of Ashfall",
        summary:
          "Fortress Ashfall looms massive. Jagren leads fighters through the open gate and discovers underground passages and sorcery traps. He orders immediate withdrawal.",
      },
    ],
  },
  {
    id: 4,
    roman: "IV",
    title: "The Starless Crown",
    subtitle: "The Darkness Unveiled",
    act: "Act I — The Rising",
    focusCharacter: "Jagren (Duelist)",
    epigraph: {
      quote: "Glory is a lie the living tell about the dead.",
      author: "Jagren, after the Siege of Fortress Ashfall",
    },
    description:
      "The allied army attacks Fortress Ashfall and walks into Volzentar's trap. Jagren's glory-seeking shatters as he faces the true cost of war.",
    elaborateDescription:
      "The allied army's offensive against Fortress Ashfall goes too well — because it's a trap. Nightshade seals the retreat with blood-wards. The Ashvanar brothers unleash dark magic. Hundreds die. Jagren, who dreamed of glory, leads a desperate breakout and kills one of the Ashvanar brothers in a brutal duel — the first villain killed. He nearly dies himself, saved only by Neyla's healing. Volzentar arrives in person, offering 'merciful surrender' with terrifyingly logical arguments. Itzil refuses. Serenthar makes her first physical appearance — she predicted the battle's outcome before it began. Torvane engineers a controlled explosion and Skyren provides aerial evacuation, but the alliance loses a third of its army. Two neutral nations are conquered while the heroes were trapped. The boy who wanted glory found horror instead.",
    coverImage: "/images/book-covers/book4-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPN7Q1B2",
    paperbackUrl: "https://www.amazon.com/dp/B0GPQGD3NQ",
    color: "#ef4444",
    chapters: [
      {
        number: 1,
        title: "The Jaws of the Trap",
        summary:
          "The allied army attacks Fortress Ashfall. The initial assault goes too well — the fortress is under-defended. Jagren leads the vanguard inside.",
      },
      {
        number: 2,
        title: "Outside the Walls",
        summary:
          "Volzentar's trap springs. Nightshade seals the retreat with blood-wards. The Ashvanar brothers unleash dark magic. The army is surrounded.",
      },
      {
        number: 3,
        title: "The Warlord Arrives",
        summary:
          "Volzentar arrives in person — his first confrontation with Itzil. He offers 'merciful surrender' with terrifyingly logical arguments.",
      },
      {
        number: 4,
        title: "Volzentar's Speech",
        summary:
          "Itzil refuses Volzentar's surrender terms. He is intrigued rather than angry. Serenthar predicted the battle's outcome before it began.",
      },
      {
        number: 5,
        title: "Kaelen in the Dark",
        summary:
          "Kaelen infiltrates the fortress interior searching for the blood-ward anchor room. He fights through corridors using shadow-step bursts.",
      },
      {
        number: 6,
        title: "The Duelist's Crucible",
        summary:
          "Jagren duels Ashvanar sorcerer Savren — speed vs. magic. He fights not for glory but to buy the vanguard breathing room.",
      },
      {
        number: 7,
        title: "The Ward Falls",
        summary:
          "Kaelen destroys the blood-ward anchor. Nightshade screams as magical feedback surges through her. The blood-wards collapse across the fortress.",
      },
      {
        number: 8,
        title: "The Breach",
        summary:
          "Itzil orders the full assault. The allied army breaches from every direction with the Sun-Blade blazing through the main corridor.",
      },
      {
        number: 9,
        title: "The Remaining Brother",
        summary:
          "Korrath, the surviving Ashvanar twin, channels grief into an uncontrolled sorcery storm. Torvane's ward-disruptor weakens but can't stop it.",
      },
      {
        number: 10,
        title: "Skyren's Entrance",
        summary:
          "Skyren is introduced — a Pyrrath golden hawk rider bonded to Cielovar. She dives through magical lightning to rescue wounded soldiers.",
      },
      {
        number: 11,
        title: "The Controlled Retreat",
        summary:
          "Torvane manages the retreat as an engineering project. Delayed explosive charges collapse approach roads, preventing Dominion pursuit.",
      },
      {
        number: 12,
        title: "The Butcher's Bill",
        summary:
          "Casualty count: 1,612 dead, 2,347 wounded — a third of the army. Itzil takes full responsibility for walking them into Volzentar's trap.",
      },
      {
        number: 13,
        title: "Serenthar Sees",
        summary:
          "Serenthar's POV. The demon-bound seer watches every possible outcome simultaneously. She sees Jagren's kill, Itzil's speech, the branching futures.",
      },
      {
        number: 14,
        title: "Jagren's Silence",
        summary:
          "Jagren hasn't spoken in two days after killing the Ashvanar brother. The loudest person in the alliance is silent, staring at his hands.",
      },
      {
        number: 15,
        title: "The Conquered Nations",
        summary:
          "Two neutral nations fall while the alliance was trapped at Ashfall. Queen Thessaly is captured and ash-oathed. The war grows darker.",
      },
      {
        number: 16,
        title: "The Second Trap",
        summary:
          "Intelligence arrives: Rainara, a water-knot mystic, is captured by Relicara. Her invitation is an obvious trap — but they can't leave Rainara behind.",
      },
      {
        number: 17,
        title: "Korvain's Counsel",
        summary:
          "Korvain advises: 'This is where wars are lost — not in battles but in the silence after.' He tells Itzil to give the army the hard truth.",
      },
      {
        number: 18,
        title: "Rallying the Broken",
        summary:
          "Itzil addresses the battered army in the rain. She admits fear and failure, then tells them why they fight: for the names the ash-oaths erased.",
      },
      {
        number: 19,
        title: "Planning the Counter",
        summary:
          "Kaelen and Zariel plan the Rainara rescue in layers — a visible approach from the north, a covert approach through drainage tunnels from the south.",
      },
      {
        number: 20,
        title: "Nightshade Reports",
        summary:
          "Nightshade reports to Volzentar: the alliance lost a third of its army but Itzil rallied them through honest leadership. She's more resilient than calculated.",
      },
      {
        number: 21,
        title: "The Dawn After",
        summary:
          "Neyla works without sleep healing hundreds. Miyako finds her depleting herself and teaches her to refill before pouring from an empty cup.",
      },
      {
        number: 22,
        title: "The Star That Fell",
        summary:
          "Itzil notices a void in the sky above the Dominion capital — the Starless Crown. The Great Gate's presence is thinning the barrier between worlds.",
      },
      {
        number: 23,
        title: "The Separated Paths",
        summary:
          "Itzil reorganizes for Act II. She assigns each team member a critical objective — rescue, diversion, fortification, intelligence, healing.",
      },
      {
        number: 24,
        title: "The Message",
        summary:
          "Two messages arrive: Kaelen approaching Relicara's territory knowing it's a trap, and Volzentar's black letter in silver ink delivered by crow.",
      },
    ],
  },
  {
    id: 5,
    roman: "V",
    title: "The Serpent's Gambit",
    subtitle: "A Spy Among Shadows",
    act: "Act II — The Fracture",
    focusCharacter: "Kaelen (Scout-Spy)",
    epigraph: {
      quote:
        "The serpent does not strike where you look — it strikes where you don't.",
      author: "Valdremor, The Architect",
    },
    description:
      "Valdremor takes personal command. Kaelen infiltrates a Dominion stronghold to steal a relic. The enemy is smarter, patient, and always three steps ahead.",
    elaborateDescription:
      "Act II opens with Valdremor — the Architect — taking personal command of Dominion operations. Where Volzentar ruled by charisma and force, Valdremor operates through cold logic and precise strategy. He dispatches forces to seize the fifth relic at Relicara, a sacred cathedral. Kaelen leads the infiltration team while Itzil's forces create a diversion. Rainara, a water-magic wielder freed from Dominion captivity, joins the team and proves devastatingly effective. But Valdremor anticipated every move. The relic is taken by Dominion forces in a surgical strike that makes the heroes' diversion irrelevant. Solkren, a master armorer, begins forging weapons capable of countering Dominion magic. The alliance strengthens even as the enemy coils tighter.",
    coverImage: "/images/book-covers/book5-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPN6L8M6",
    paperbackUrl: "https://www.amazon.com/dp/B0GPPP47ML",
    color: "#22c55e",
    chapters: [
      {
        number: 1,
        title: "The Serpent's Plan",
        summary:
          "Kaelen devises a counter-trap to rescue Rainara from Relicara's fortress. Decoy team draws attention while the real team infiltrates underground.",
      },
      {
        number: 2,
        title: "Relicara's Cathedral",
        summary:
          "Relicara's fortress is a cathedral of stolen artifacts. The team scouts its defenses and discovers the relic collector's obsessive nature.",
      },
      {
        number: 3,
        title: "The Diversion",
        summary:
          "Jagren and Skyren create a spectacular visible approach at the western gate — pure theater to draw guards away from the infiltration point.",
      },
      {
        number: 4,
        title: "The Architect Arrives",
        summary:
          "Valdremor makes his first in-person appearance. He demands Relicara's relics, telling her coldly she was never going to keep anything.",
      },
      {
        number: 5,
        title: "Valdremor Takes Command",
        summary:
          "Relicara's identity collapses as Valdremor reveals she was a warehouse, not a collector. Twenty years of obsessive labor exposed as someone else's property.",
      },
      {
        number: 6,
        title: "The Infiltration",
        summary:
          "Kaelen and Zariel navigate to Rainara's cell. Kaelen picks a seven-pin lock in seven seconds, bypassing magical wards by using no magic at all.",
      },
      {
        number: 7,
        title: "Rainara Unleashed",
        summary:
          "Rainara's water-knot magic roars back. She dissolves the vault's magical wards by pushing water into the crystal conduits. 'Water defeats almost everything eventually.'",
      },
      {
        number: 8,
        title: "The Relic Taken",
        summary:
          "The extraction succeeds — too flawlessly. Kaelen plants false intelligence. Valdremor's escort departed during the rescue, indifferent. He let them go.",
      },
      {
        number: 9,
        title: "Relicara Breaks",
        summary:
          "Stripped of relics by both heroes and Valdremor, Relicara snaps. She self-destructs her fortress — broken, not killed. She'll return desperate.",
      },
      {
        number: 10,
        title: "The Return",
        summary:
          "The rescue team returns. Itzil meets Rainara for the first time. Kaelen warns that Valdremor left the relic deliberately — he's tracking them.",
      },
      {
        number: 11,
        title: "Rainara's Fury",
        summary:
          "Rainara demonstrates full power — water walls, ice blades, blinding fog. She's a force multiplier, but her personal anger is consuming and reckless.",
      },
      {
        number: 12,
        title: "The Tracking Sigil",
        summary:
          "Amalura discovers a molecular-level tracking sigil inside the stolen relic. Valdremor has known their location since the rescue. His masterwork.",
      },
      {
        number: 13,
        title: "Emergency Protocol",
        summary:
          "The alliance evacuates in seven hours. The tracked relic goes to a decoy base at Greystone. The real base relocates to Thornhaven.",
      },
      {
        number: 14,
        title: "Valdremor's Map",
        summary:
          "Valdremor watches the tracking sigil move on his luminous map. He smiles — the first villain smile in the series. He doesn't fall for the deception.",
      },
      {
        number: 15,
        title: "Miyako's Training",
        summary:
          "Miyako trains the combined army using unconventional methods — blindfolding infantry, dismounting cavalry — forcing each culture to understand the other.",
      },
      {
        number: 16,
        title: "The Relic's Power",
        summary:
          "Itzil tests the Starshard with the Sun-Blade — tenfold amplification. She can see ash-oath threads across the continent. The power is intoxicating.",
      },
      {
        number: 17,
        title: "Zariel's Intelligence",
        summary:
          "Zariel maps the Dominion's internal fractures. The villains don't all agree — Relicara resented being used, Valdremor considers Volzentar undisciplined.",
      },
      {
        number: 18,
        title: "Solkren's Forge",
        summary:
          "Itzil visits Solkren the armorer at midnight. The quiet, scarred man barely speaks but his craftsmanship is extraordinary. 'Words are your weapon. This is mine.'",
      },
      {
        number: 19,
        title: "The Decoy Battle",
        summary:
          "A 500-soldier Dominion probe follows the tracking sigil to Greystone Pass. Kaelen is ready — Torvane's traps destroy the probe in twelve minutes.",
      },
      {
        number: 20,
        title: "Nightshade's Obsession",
        summary:
          "Nightshade studies the team's bonds — love makes them unpredictable. She identifies the vulnerability: break the bonds between them, break the team.",
      },
      {
        number: 21,
        title: "The Calm",
        summary:
          "Itzil and Kaelen share a night watch. The Starless Crown is visible and growing — more than half complete. Four months until it closes.",
      },
      {
        number: 22,
        title: "The Alliance Strengthens",
        summary:
          "New volunteers arrive daily — refugees, deserters, freed ash-oath soldiers. Neyla scales oath-breaking to 30 per week. Skyren reports the Crown at 40%.",
      },
      {
        number: 23,
        title: "Valdremor's Patience",
        summary:
          "Valdremor completes his surgical assault plan. He briefs Nightshade: 'Your objective is the old woman. Everything else is secondary.'",
      },
      {
        number: 24,
        title: "The Serpent Coils",
        summary:
          "Dominion communications go dark overnight. Kaelen recognizes the silence: 'Something big is coming.' Itzil orders maximum alert and emergency evacuation prep.",
      },
    ],
  },
  {
    id: 6,
    roman: "VI",
    title: "Rain of Obsidian",
    subtitle: "Tides of Dark Magic",
    act: "Act II — The Fracture",
    focusCharacter: "Rainara (Water-Magic Warrior)",
    epigraph: {
      quote: "When the obsidian rain falls, even the sun hides.",
      author: "Ancient Proverb of Solquetal",
    },
    description:
      "Valdremor launches a devastating attack. Korvain falls in battle. Amalura is captured. The alliance fractures as the team is scattered across the continent.",
    elaborateDescription:
      "Valdremor's precision strikes shatter the allied base in a coordinated assault of obsidian projectiles and dark sorcery. Korvain, the aging grandmaster, fights his last battle — buying time for the evacuation while his old body finally fails him. Nightshade captures Amalura, the alliance's greatest scholar, to extract the location of the remaining relics. The team is scattered into three groups across the continent. Rainara tracks the fragments of her people's water-magic through corrupted rivers. Skyren flies reconnaissance while Korvain clings to life. Neyla makes a breakthrough in reversing ash-oaths. Miyako resolves to fight rather than hide. As the groups struggle to reunite, Helisar expands his ash-oath operations and Serenthar whispers through Amalura's dreams. The long dark has begun.",
    coverImage: "/images/book-covers/book6-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPMBVC1B",
    paperbackUrl: "https://www.amazon.com/dp/B0GPPQ2PZR",
    color: "#8b5cf6",
    chapters: [
      {
        number: 1,
        title: "The Obsidian Sky",
        summary:
          "Valdremor attacks the allied base with surgical precision — obsidian shards rain from the sky, cutting through wards. Rainara's water-magic is the primary defense.",
      },
      {
        number: 2,
        title: "Valdremor's Precision",
        summary:
          "The assault is methodical and overwhelming. Valdremor targets communications first, then supply lines, then escape routes. He assigns three sorcerer teams to suppress Rainara.",
      },
      {
        number: 3,
        title: "The Defense",
        summary:
          "Rainara fights three sorcerer teams simultaneously — each attacking a different property of water. She holds the dome for fifteen minutes while Kaelen fights beside her.",
      },
      {
        number: 4,
        title: "The Scattering",
        summary:
          "Itzil orders dispersal into three groups: Group A north to Thalendor, Group B east as diversion, Group C south to Coravel with non-combatants.",
      },
      {
        number: 5,
        title: "Korvain's Last Fight",
        summary:
          "Korvain and Amalura work in the intelligence vault. Dominion soldiers breach the corridor. Korvain draws his staff-blade and fights like the grandmaster he was.",
      },
      {
        number: 6,
        title: "Nightshade Takes Amalura",
        summary:
          "Nightshade appears via blood-portal and paralyzes Korvain. She takes Amalura alive — 'The old woman's mind is worth more than your entire army.'",
      },
      {
        number: 7,
        title: "The Diversion",
        summary:
          "Group B executes the diversion — Kaelen uses shadow-step at multiple positions, Rainara creates a false river, Skyren drops explosives. 2,000 soldiers commit to pursuit.",
      },
      {
        number: 8,
        title: "Group A Evacuates",
        summary:
          "Itzil leads 4,000 soldiers through a northern tunnel in a fighting retreat. Jagren commands the rearguard with cold efficiency. Torvane collapses the entrance behind them.",
      },
      {
        number: 9,
        title: "Group C Flees",
        summary:
          "Zariel, Neyla, and Miyako escort 300 non-combatants south to Coravel. Miyako scouts ahead, silently neutralizing two Dominion patrols.",
      },
      {
        number: 10,
        title: "Korvain Recovered",
        summary:
          "Korvain arrives at Thalendor on a stretcher — alive but broken. He tells Itzil that Amalura surrendered to save his life. His body is failing.",
      },
      {
        number: 11,
        title: "Scattered and Alone",
        summary:
          "Group B survives in the eastern wilderness. Rainara can feel Amalura's moisture signature 400 miles north — stationary, being transported to a detention tower.",
      },
      {
        number: 12,
        title: "Amalura in Chains",
        summary:
          "Amalura is held in a comfortable cell — but everything is weaponized. The pillow has a listening spell, books are propaganda, food is drugged. She eats sparingly.",
      },
      {
        number: 13,
        title: "Valdremor's Method",
        summary:
          "Valdremor interrogates Amalura through daily conversations — not torture, but pattern-mapping. By day 14, he has a partial copy of her knowledge structure.",
      },
      {
        number: 14,
        title: "Rainara's Tracking",
        summary:
          "Rainara's water-sense expands to miles. She discovers the planetary water system is sick — the Starless Crown's dark magic contaminating rivers globally.",
      },
      {
        number: 15,
        title: "Skyren's Flight",
        summary:
          "Skyren flies a three-day solo mission north through hostile territory, evading hawk-killers and war-raptors. The Starless Crown is visible at 45% from altitude.",
      },
      {
        number: 16,
        title: "Korvain's Decline",
        summary:
          "Korvain can't walk without support. 'I'm dying, Itzil.' His final lesson: leadership is presence. 'Show up. Every time. Even when you don't know the answer.'",
      },
      {
        number: 17,
        title: "Regrouping",
        summary:
          "Itzil coordinates the alliance's convergence on Hidden Valley. Three groups move through hostile territory. Rainara maintains a water-communication network connecting all groups.",
      },
      {
        number: 18,
        title: "Neyla's Breakthrough",
        summary:
          "Neyla discovers the resonance frequency technique — matching the ash-oath's harmonic shatters the binding cleanly. She frees a woman named Sera.",
      },
      {
        number: 19,
        title: "Miyako's Resolve",
        summary:
          "Miyako trains at midnight, pushing her 63-year-old body hard. Her home city is under Helisar's control. The shame of running decades ago has never left.",
      },
      {
        number: 20,
        title: "The Water Message",
        summary:
          "Kaelen and Rainara piece together the full picture through the water network — Amalura in a detention tower, Valdremor extracting knowledge, Crown accelerating.",
      },
      {
        number: 21,
        title: "The Reunion",
        summary:
          "The scattered alliance reunites at Hidden Valley. Itzil sees Kaelen across the valley and walks toward him, pace accelerating. Not a hug — a grip. He holds back.",
      },
      {
        number: 22,
        title: "Helisar's Expansion",
        summary:
          "Helisar operates 12 ash-oath facilities processing 200 conversions daily. But the oaths are weakening — flickers of awareness in the newly-oathed.",
      },
      {
        number: 23,
        title: "Serenthar and Amalura",
        summary:
          "Serenthar visits Amalura in detention. 'Between us, we hold the shape of every possible future.' Amalura: 'Then you know how this ends.' Serenthar weeps.",
      },
      {
        number: 24,
        title: "The Long Dark",
        summary:
          "Strategic review: Amalura captured, Korvain dying, army halved, Crown at 50%. For the first time, the council discusses the possibility of defeat.",
      },
    ],
  },
  {
    id: 7,
    roman: "VII",
    title: "Feathers and Bone",
    subtitle: "Wings of Defiance",
    act: "Act II — The Fracture",
    focusCharacter: "Skyren (Aerial Scout)",
    epigraph: {
      quote: "Between feathers and bone, the sky remembers who dared to fly.",
      author: "Skyren, riding Cielovar over the burning continent",
    },
    description:
      "Skyren leads an aerial campaign while Miyako infiltrates Helisar's factory city. The exile sensei makes her final stand. A beloved mentor dies protecting the future.",
    elaborateDescription:
      "Skyren takes center stage as the alliance's aerial operations become critical. Riding her hawk Cielovar, she coordinates reconnaissance and evacuation across the war-torn continent. Meanwhile, Miyako — the exile sensei who taught Kaelen the shadow-step — descends into Helisar's factory city to destroy his ash-oath production from within. Neyla pushes her healing abilities to their limits reversing mass ash-oaths. Helisar is fascinated by Neyla's power and attempts to study her. Miyako's infiltration succeeds, but at a terrible cost: she makes her final stand to protect the team's escape, fulfilling her redemption arc from exile to hero. Her death galvanizes the alliance. As the army mobilizes for the march south, Korvain and Miyako share one last conversation about duty and sacrifice.",
    coverImage: "/images/book-covers/book7-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPNN49SY",
    paperbackUrl: "https://www.amazon.com/dp/B0GPPTRQGH",
    color: "#ec4899",
    chapters: [
      {
        number: 1,
        title: "Wings Over War",
        summary:
          "Skyren flies reconnaissance across the continent, mapping devastation and troop positions. Each flight is a gauntlet of hawk-killers and war-raptors.",
      },
      {
        number: 2,
        title: "Miyako's Decision",
        summary:
          "Miyako asks to return to Kanezawa — her home city now under Helisar's control. Her farewell to Itzil: 'You don't need to be perfect. You just need to be there.'",
      },
      {
        number: 3,
        title: "Skyren's Mission",
        summary:
          "Skyren flies Miyako south on a two-day journey. They bond over shared survivor's guilt. Miyako: 'The picture looks different from up close. Don't forget to land.'",
      },
      {
        number: 4,
        title: "The Factory City",
        summary:
          "Kanezawa is beautiful and wrong — clean streets, ordered people, no laughter. Neyla feels the wrongness through her healing sense. Miyako recognizes enslaved faces.",
      },
      {
        number: 5,
        title: "The Saint's Welcome",
        summary:
          "Helisar appears — gentle, warm, welcoming. Miyako trembles with contained rage. She sees familiar faces among the enslaved: the flower seller, the teacher, a former student.",
      },
      {
        number: 6,
        title: "The Plan",
        summary:
          "Three objectives: free slaves, shut down factory, evacuate survivors. Key target: destroy the central oath-anchor in the temple basement to weaken every oath simultaneously.",
      },
      {
        number: 7,
        title: "Neyla vs. The Oaths",
        summary:
          "Neyla begins reversing oaths pre-dawn using the resonance frequency technique. Freed people wake confused and crying. After the anchor weakens, reversals accelerate.",
      },
      {
        number: 8,
        title: "Helisar's Fascination",
        summary:
          "Helisar discovers the reversals — not angry but fascinated. 'Someone is healing the oath away.' He wants to study the healer, not kill her.",
      },
      {
        number: 9,
        title: "Miyako's Descent",
        summary:
          "Miyako descends into the temple basement via shadow-step, passing soul-siphon conduits. She finds the oath-anchor: a massive dark crystal pulsing with thousands of enslaved signatures.",
      },
      {
        number: 10,
        title: "The Anchor Falls",
        summary:
          "The anchor cracks — shockwave of dark energy. Every oath in the city weakens simultaneously. Enslaved people stumble, blink, begin to remember. Cascading liberation.",
      },
      {
        number: 11,
        title: "Skyren's Evacuation",
        summary:
          "Skyren coordinates aerial evacuation with twelve hawks — colored smoke marking safe corridors, dive-bombing pursuit. Five thousand freed people stream through the eastern wall.",
      },
      {
        number: 12,
        title: "Neyla's Limit",
        summary:
          "Neyla has freed 200+ people but her reserves are empty — body shaking, vision blurring. She refuses to leave the hundreds still enslaved. 'I can't leave them.'",
      },
      {
        number: 13,
        title: "Miyako's Stand",
        summary:
          "Miyako fights her way up from the basement level by level, wound by wound. Shadow-step failing due to concussion. Raw skill only. Each level harder than the last.",
      },
      {
        number: 14,
        title: "The Exile Returns",
        summary:
          "Miyako breaks through a twenty-guard formation by entering the gaps between soldiers. She reaches the temple doors and kicks them open. Sunlight.",
      },
      {
        number: 15,
        title: "The Pursuit",
        summary:
          "Skyren covers the final evacuation — twelve hawks marking corridors, dropping smoke on Dominion reinforcements. The evacuation column crosses the river to safety.",
      },
      {
        number: 16,
        title: "Helisar's Loss",
        summary:
          "Helisar surveys the ruins. Anchor destroyed, thousands freed. He connects the shadow-school bladework to Kanezawa's exile. He doesn't understand why anyone would return pain.",
      },
      {
        number: 17,
        title: "The Reunion",
        summary:
          "All three groups converge at Hidden Valley. Miyako arrives on a stretcher. Korvain reaches for her hand — two old warriors. The last time all ten heroes are together.",
      },
      {
        number: 18,
        title: "The Race for the Relic",
        summary:
          "Intelligence: the Dominion needs the Sunheart relic at the original Sun-Blade temple. Valdremor's forces are already moving. It's a race for the endgame.",
      },
      {
        number: 19,
        title: "Miyako's Wounds",
        summary:
          "Neyla examines Miyako — cracked ribs, nerve damage, weakened heart. 'You need to stop.' Miyako: 'You can't heal this. Don't waste your gift on me.'",
      },
      {
        number: 20,
        title: "Korvain and Miyako",
        summary:
          "Two old warriors at twilight. 'You went back.' 'I had to.' 'Was it enough?' 'It was what I could do.' Light and shadow, both running out of time.",
      },
      {
        number: 21,
        title: "The Army Mobilizes",
        summary:
          "The army marches south through high desert. Rainara extracts groundwater to sustain the force. Skyren detects a Dominion force on a parallel course.",
      },
      {
        number: 22,
        title: "Miyako's Last Lesson",
        summary:
          "Miyako teaches Kaelen the shadow-fade — the shadow school's highest technique, becoming indistinguishable from the environment. Kaelen achieves it for three seconds.",
      },
      {
        number: 23,
        title: "The Ambush",
        summary:
          "A Dominion screening force blocks the southern road. Miyako fights in the forward line despite injuries — still devastating, pure economy. The alliance punches through.",
      },
      {
        number: 24,
        title: "Feathers and Bone",
        summary:
          "Miyako dies — not in battle but from wounds, surrounded by the people she saved. To Itzil: 'You don't need to be perfect. You just need to be there.' First hero death.",
      },
    ],
  },
  {
    id: 8,
    roman: "VIII",
    title: "The Shattered Blade",
    subtitle: "Forged Through Fire",
    act: "Act II — The Fracture",
    focusCharacter: "Itzil (Commander)",
    epigraph: {
      quote:
        "A blade does not choose to break. It breaks when the hand that holds it forgets why it fights.",
      author: "Korvain's final words to Itzil",
    },
    description:
      "The midpoint of the saga. The Sun-Blade shatters. Korvain dies. Itzil hits rock bottom and must decide if she can continue without her mentor, her weapon, or her hope.",
    elaborateDescription:
      "The darkest book of the saga. Racing south to reach an ancient temple that holds the Sunheart — a relic that could turn the war — Itzil confronts Nightshade in a brutal duel. The assassin uses a dark ritual to corrupt the Sun-Blade's light, and the weapon shatters in Itzil's hands. Without her blade, Itzil fights with nothing but her fists and her will. In the aftermath, Korvain — wounded, declining, but still teaching — speaks his last words and dies peacefully in Itzil's arms. This is rock bottom. The blade is broken, the mentor is gone, the army is demoralized. Kaelen's words pierce the darkness: 'You don't need a blade to be who you are.' Solkren notices something in the shattered fragments. Valdremor broadcasts a message offering merciful surrender. The army must decide. Itzil makes a promise at Korvain's pyre: they will march to the Dominion capital and end this war.",
    coverImage: "/images/book-covers/book8-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPNJ3MHK",
    paperbackUrl: "https://www.amazon.com/dp/B0GPPNMHL8",
    color: "#f59e0b",
    chapters: [
      {
        number: 1,
        title: "The Race South",
        summary:
          "The alliance races south toward the Sun-Blade temple. Miyako's death is days old. Korvain rides in a wagon — mind sharp, body failing.",
      },
      {
        number: 2,
        title: "Korvain's Last Map",
        summary:
          "Korvain briefs Itzil on the temple's three levels. The wards test the bearer's soul, not combat. 'It shows you what you fear most. If you lie, it kills you.'",
      },
      {
        number: 3,
        title: "Nightshade's Pursuit",
        summary:
          "Nightshade leads the Dominion force south. Valdremor's plan: let the heroes reach the temple first. If the trial kills the bearer, walk in.",
      },
      {
        number: 4,
        title: "The Temple Ruins",
        summary:
          "The alliance arrives first. Temple ruins are breathtaking — sun-glyphs, golden vines, sacred ground. Torvane establishes defenses. Dominion one day behind.",
      },
      {
        number: 5,
        title: "The Trial of Fears",
        summary:
          "Three chambers, three fears. Her team dead. Herself as Volzentar. Emptiness — just a girl in the dark. Itzil passes by accepting fear without denial.",
      },
      {
        number: 6,
        title: "The Sunheart",
        summary:
          "Itzil touches the Sunheart in the Heart Chamber. A vision: the Great Gate fully open, VASTRIX pressing through — not a creature but a FORCE wearing a crown of dead stars.",
      },
      {
        number: 7,
        title: "The Battle for the Temple",
        summary:
          "Full battle at the temple ruins. Kaelen coordinates defense. Jagren holds the south. Torvane's traps devastate the east. Rainara creates water-barriers west.",
      },
      {
        number: 8,
        title: "The Ashvanar's Fury",
        summary:
          "The surviving Ashvanar brother attacks with berserk rage — lightning, earthquakes, cascading fire. He screams his dead brother's name with every spell.",
      },
      {
        number: 9,
        title: "Nightshade Strikes",
        summary:
          "Nightshade deploys a corrosion spell targeting the blade's core resonance through blood-mirrors. Subtle, invisible, eating the blade from within.",
      },
      {
        number: 10,
        title: "The Blade Falters",
        summary:
          "The Sun-Blade is flickering — dark threads in the golden light. Each swing costs more energy. Nightshade walks through the battle toward Itzil.",
      },
      {
        number: 11,
        title: "Itzil vs. Nightshade",
        summary:
          "The duel of the series. Each strike weakens the blade further. Nightshade doesn't need to win — just endure while the corrosion does its work.",
      },
      {
        number: 12,
        title: "The Blade Shatters",
        summary:
          "The Sun-Blade explodes — golden light collapses inward, erupts outward. Itzil is thrown ten feet. She looks at her hand: a hilt. No blade. Golden shards cooling, dying.",
      },
      {
        number: 13,
        title: "Fighting with Nothing",
        summary:
          "Itzil fights without the blade — fists, kicks, scavenged sword. She doesn't win but doesn't die. Every technique Korvain and Miyako taught her.",
      },
      {
        number: 14,
        title: "The Aftermath",
        summary:
          "Itzil collects blade fragments on hands and knees. The fragments are cold — no golden light. Just metal. She arranges them in the blade's shape. Incomplete.",
      },
      {
        number: 15,
        title: "Korvain's Last Night",
        summary:
          "Korvain asks to see the fragments. She shows him, trying not to cry. 'It's gone.' He touches a fragment, closes his eyes, and smiles: 'The blade broke. Good.'",
      },
      {
        number: 16,
        title: "Korvain Dies",
        summary:
          "Korvain sleeps peacefully. At dawn, Itzil wakes. He's still. His hand is cold. Second hero death — peaceful, not in battle. The last grandmaster is gone.",
      },
      {
        number: 17,
        title: "The Lowest Point",
        summary:
          "Blade shattered, Korvain dead, Miyako dead, Amalura captive, army depleted, Crown at 60%. Itzil goes through the motions of command with empty eyes.",
      },
      {
        number: 18,
        title: "Kaelen's Words",
        summary:
          "Kaelen finds Itzil: 'Are you done? Because I'm not. The blade is broken. Korvain is gone. And you're still HERE. Just you is enough.' First kiss — desperate, raw, real.",
      },
      {
        number: 19,
        title: "Solkren Notices",
        summary:
          "Solkren examines the blade fragments — they still resonate. Not dead but dormant. Like seeds. The blade was DESIGNED to break, to be reforged into something greater.",
      },
      {
        number: 20,
        title: "Valdremor's Transmission",
        summary:
          "Valdremor receives the report: Sun-Blade destroyed. He doesn't need the Sunheart — ash-oath energy can substitute. He accelerates Gate preparations.",
      },
      {
        number: 21,
        title: "The Army Decides",
        summary:
          "Itzil emerges from grief: 'The blade is broken. But I'm not. And neither are we.' She presents the honest situation — they need to rescue Amalura.",
      },
      {
        number: 22,
        title: "Planning Act III",
        summary:
          "Kaelen maps the next phase: rescue Amalura, reforge the blade, disrupt the Gate, defeat Vastrix. 'Any one is nearly impossible. All four is insane.'",
      },
      {
        number: 23,
        title: "The Sky Breaks",
        summary:
          "The Starless Crown jumps to 65% — visible worldwide. Dominion deserters bring intel: Gate being forced open, Valdremor burning ash-oath slaves at accelerating rate.",
      },
      {
        number: 24,
        title: "The Promise",
        summary:
          "Itzil and Kaelen at the edge of camp, looking at the Crown. Partners. Equals. The blade fragments are warm — faintly, like something alive. Solkren is working.",
      },
    ],
  },
  {
    id: 9,
    roman: "IX",
    title: "The Forge of Souls",
    subtitle: "The Price of Power",
    act: "Act III — The Reckoning",
    focusCharacter: "Solkren (Armorer)",
    epigraph: {
      quote:
        "Every blade remembers the fire that made it. This one will remember the souls who chose to burn.",
      author: "Solkren, Master Armorer",
    },
    description:
      "Solkren reforges the Sun-Blade using the shattered fragments and the memories of every team member. Amalura is rescued. The march to the Dominion capital begins.",
    elaborateDescription:
      "Solkren reveals his secret: he can reforge the Sun-Blade, but not with metal alone. The new blade must be forged from the memories and essence of those who fight beside Itzil. Each team member contributes a memory to the forge — their deepest truth, their reason for fighting. Itzil contributes her memory of Korvain. Kaelen contributes his survivor's guilt. Jagren sacrifices his vanity. Neyla offers her compassion. Rainara burns her rage. In parallel, Kaelen leads a daring rescue mission to extract Amalura from Dominion captivity. The rescue succeeds, but Nightshade's fury is unleashed. The new Sun-Blade is born — different from the original, carrying the weight and warmth of every soul who forged it. Amalura reveals what she learned in captivity: the Great Gate's true nature and the role of the oracle Serenthar. The army marches toward the Dominion capital.",
    coverImage: "/images/book-covers/book9-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPNK9W5D",
    paperbackUrl: "https://www.amazon.com/dp/B0GPPRDRC9",
    color: "#f97316",
    chapters: [
      {
        number: 1,
        title: "The Armorer's Secret",
        summary:
          "Solkren reveals the blade fragments still resonate — dormant, not dead. Ancient texts prove the blade was always meant to break and be reforged.",
      },
      {
        number: 2,
        title: "The Proposal",
        summary:
          "Solkren explains the soul-forge: each hero gives a defining memory to the blade. Risk for contributors: emotional discomfort. Risk for Solkren: it could kill him.",
      },
      {
        number: 3,
        title: "Parallel Mission: The Rescue",
        summary:
          "Kaelen leads the rescue team — himself, Jagren, Rainara — into enemy territory. Shadow-fade extending to eight seconds. Rainara masks their trail.",
      },
      {
        number: 4,
        title: "The Forge Begins",
        summary:
          "Solkren transforms a volcanic cave into the soul-forge workshop. Blade fragments arranged in crystalline pattern. Sunheart suspended above.",
      },
      {
        number: 5,
        title: "Itzil's Memory",
        summary:
          "Itzil contributes Korvain's last lesson. She gives up her need for a mentor — not the love, but the dependency.",
      },
      {
        number: 6,
        title: "Kaelen's Memory / The Infiltration",
        summary:
          "Kaelen contributes remotely while infiltrating the detention tower. His memory: the night his unit died. He gives up his fear of belonging.",
      },
      {
        number: 7,
        title: "Jagren's Memory",
        summary:
          "Jagren contributes while fighting gate guards. His memory: the arena glory. He gives up his need to be seen — keeps the lesson of horror at Fortress Ashfall.",
      },
      {
        number: 8,
        title: "Neyla's Memory",
        summary:
          "Neyla contributes her family — the last time she saw them before the ash-oaths. She gives up her crushing grief. Not the love — the paralyzing weight.",
      },
      {
        number: 9,
        title: "Rainara, Skyren, Zariel",
        summary:
          "Three rapid contributions: Rainara gives vengeance, Skyren gives escape, Zariel gives the need to always be right. Each keeps the lesson, loses the poison.",
      },
      {
        number: 10,
        title: "Torvane's Memory",
        summary:
          "Torvane gives his need to control — the compulsion to engineer every outcome. What remains: willingness to build without guarantees.",
      },
      {
        number: 11,
        title: "The Armorer's Sacrifice",
        summary:
          "Solkren gives his invisibility — the safety of being no one — while controlling the forge. All nine threads blaze. The Sunheart cracks. The metal screams.",
      },
      {
        number: 12,
        title: "Finding Amalura",
        summary:
          "Kaelen finds Amalura in the detention tower — sitting upright, alert, unsurprised. 'Took you long enough.' Her mind is a fortress.",
      },
      {
        number: 13,
        title: "The Extraction",
        summary:
          "The rescue team extracts Amalura. Jagren clears the exit with disciplined fury. Rainara floods corridors and disrupts blood-wards by diluting the magic with water.",
      },
      {
        number: 14,
        title: "Nightshade's Fury",
        summary:
          "Nightshade discovers the escape and pursues via blood-portals. She catches the team at a river crossing — this was her personal responsibility.",
      },
      {
        number: 15,
        title: "The New Blade",
        summary:
          "Solkren presents the reforged blade — nine colored threads woven through golden metal. When Itzil takes it, she FEELS everyone. Every soul-thread tangible.",
      },
      {
        number: 16,
        title: "Amalura Returns",
        summary:
          "Amalura reunites with the alliance. Asks about Korvain. The silence tells her. 'When?' 'Three weeks ago.' 'Good. He earned rest.' She doesn't cry — not in front of anyone.",
      },
      {
        number: 17,
        title: "Valdremor's Anger",
        summary:
          "Valdremor receives the news: Amalura escaped AND blade reforged. His two greatest victories undone. For the first time, he loses composure.",
      },
      {
        number: 18,
        title: "Vastrix Speaks",
        summary:
          "The entire continent hears it — not with ears, with minds. 'I SEE YOU. ALL OF YOU. AND I AM HUNGRY.' Soldiers drop to their knees. Children cry.",
      },
      {
        number: 19,
        title: "The Strategic Picture",
        summary:
          "Full war council. Crown at 75%. Gate partially open. Kaelen maps the endgame: march on the capital, free slaves, defeat the Dominion, confront Vastrix.",
      },
      {
        number: 20,
        title: "The March Begins",
        summary:
          "Itzil addresses the army: 'Some of us won't come back. But if we don't march, NO ONE comes back.' The army moves north toward the Dominion capital.",
      },
      {
        number: 21,
        title: "Solkren's Reflection",
        summary:
          "On the march, Solkren adjusts to being visible. People approach him — soldiers thank him, officers ask opinions. He's uncomfortable but quietly proud.",
      },
      {
        number: 22,
        title: "Amalura's Errors",
        summary:
          "Amalura briefs the team on errors she planted in Valdremor's data: wrong corrosion frequency, Gate calculation 15% too low, relic location displaced 200 miles.",
      },
      {
        number: 23,
        title: "The Eve of Battle",
        summary:
          "Army camps within sight of the Dominion capital. The fissure dominates the sky — Crown at 78%. Soldiers write letters, sharpen blades, hold each other, pray.",
      },
      {
        number: 24,
        title: "The Gate Screams",
        summary:
          "Dawn breaks red. Vastrix's shadow visible through the fissure — bigger than a continent. The reforged blade flares, pushing back the psychic assault for everyone in range.",
      },
    ],
  },
  {
    id: 10,
    roman: "X",
    title: "The Mirror Queen",
    subtitle: "Realm of Shattered Glass",
    act: "Act III — The Reckoning",
    focusCharacter: "Neyla (Healer-Warrior)",
    epigraph: {
      quote: "To heal the world, you must first enter the wound.",
      author: "Neyla, at the Mirror Threshold",
    },
    description:
      "Neyla confronts Mirathane, the Mirror Queen, inside a dimension of stolen souls. The liberation campaign begins. The siege of the Dominion capital approaches.",
    elaborateDescription:
      "The allied army begins its liberation campaign, freeing conquered cities as it marches toward the Dominion capital. Valdremor counters with surgical precision, making every mile costly. Mirathane — the Mirror Queen, who traps souls in a dimension of reflections — emerges as a terrifying obstacle. Neyla must enter the mirror dimension to free thousands of enslaved souls, confronting her deepest fears about the limits of healing. Inside the mirror, she discovers that Mirathane is herself a prisoner — trapped by Serenthar centuries ago. Neyla frees her, and the mass liberation weakens the Great Gate's power source. The Dominion begins to fracture as officers defect and supply lines collapse. Rainara heals the poisoned rivers. Skyren scouts the capital's defenses. As the siege preparations begin, Valdremor reveals his final contingency.",
    coverImage: "/images/book-covers/book10-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPNRBXMK",
    paperbackUrl: "https://www.amazon.com/dp/B0GPQG1CNC",
    color: "#14b8a6",
    chapters: [
      {
        number: 1,
        title: "The Liberation Campaign",
        summary:
          "The allied army advances toward the capital, freeing conquered cities. Neyla reverses ash-oaths in seconds — each freed person drains the Gate's power.",
      },
      {
        number: 2,
        title: "Valdremor's Counter",
        summary:
          "Valdremor detects the power drain: 'She's more dangerous than the Sun-Blade.' He deploys Mirathane — a mirrorcraft assassin who kills through reflections.",
      },
      {
        number: 3,
        title: "The First Strike",
        summary:
          "Neyla's water bowl explodes — a mirror-bright blade nearly takes her head off. One inch from death. Mirathane's first strike through a reflective surface.",
      },
      {
        number: 4,
        title: "Mirathane's World",
        summary:
          "Mirathane's POV. She exists in the Mirror-Realm — a shattered glass dimension. Cold, precise, barely human. Her demon-bond replaced emotions with geometric certainty.",
      },
      {
        number: 5,
        title: "The Second Strike",
        summary:
          "Kaelen detects light distortions with shadow-sense. Mirathane adapts: strikes from a polished courtyard stone aimed at Neyla's back. The threat is everywhere reflective.",
      },
      {
        number: 6,
        title: "Amalura's Revelation",
        summary:
          "Amalura explains the Mirror-Realm holds trapped ash-oath souls. Neyla must enter to free them en masse. Rainara escorts as bodyguard — water-magic works there.",
      },
      {
        number: 7,
        title: "Entering the Mirror",
        summary:
          "Neyla touches a still pool and falls through the world. The Mirror-Realm: shattered glass sky, recursive reflections, shifting ground. Beautiful and horrifying.",
      },
      {
        number: 8,
        title: "Mirathane Attacks",
        summary:
          "Mirathane materializes in her domain — terrifying, flowing from surface to surface. Rainara fights her: water floods mirrors, warps portals, blocks escape routes.",
      },
      {
        number: 9,
        title: "Freeing Souls",
        summary:
          "While Rainara fights, Neyla works. Ten freed. Fifty. A hundred. She discovers chaining: free one soul and its energy helps free the next. Cascade effect.",
      },
      {
        number: 10,
        title: "Mirathane Cornered",
        summary:
          "Mirathane is losing — her domain collapsing, mirrors dissolving. Rainara creates a trap: a water-sphere encasing a mirror-wall. Mirathane is caught half in, half out.",
      },
      {
        number: 11,
        title: "The Assassin's Prison",
        summary:
          "Neyla discovers Mirathane's demon-bond was imposed in childhood. The child still exists beneath the assassin. Neyla leaves a healing ward: 'If you change your mind, the door is open.'",
      },
      {
        number: 12,
        title: "The Mass Liberation",
        summary:
          "The cascade continues in the physical world. Weakened oaths crack easily. The Gate's energy plummets. The Starless Crown flickers. VASTRIX SCREAMS across both dimensions.",
      },
      {
        number: 13,
        title: "The Gate Weakens",
        summary:
          "Immediate effects: Crown stutters, fissure narrows, Vastrix's psychic pressure lessens. Soldiers stand taller. Ash-oath slaves waking across the continent.",
      },
      {
        number: 14,
        title: "Neyla's New Sight",
        summary:
          "Neyla wakes changed — she can see soul-threads, golden connections between all living things. The reforged blade's nine colored threads are visible to her. Beautiful.",
      },
      {
        number: 15,
        title: "The Push",
        summary:
          "The allied army capitalizes with rapid strikes. Dominion morale collapses where ash-oaths failed. Soldiers lay down weapons. The Dominion pulls back to the capital.",
      },
      {
        number: 16,
        title: "The Dominion Fractures",
        summary:
          "Zariel's disinformation campaign bears fruit. Regional governors surrender. Military commanders defect. The Dominion's monolithic facade cracks from within.",
      },
      {
        number: 17,
        title: "Rainara's Healing",
        summary:
          "After the Mirror-Realm, Rainara's rage has cooled — shifted from vengeance to guardianship. She patrols the army's water supply, detecting and purifying poisoned wells.",
      },
      {
        number: 18,
        title: "The Outer Defenses",
        summary:
          "The army reaches the capital's outer defenses — fortifications, trenches, ward-barriers. Every remaining Dominion force consolidated here. Itzil assigns assault teams.",
      },
      {
        number: 19,
        title: "Skyren's Reconnaissance",
        summary:
          "Most dangerous flight of the war. Anti-air batteries every hundred yards. Cielovar dodges everything. Maps the capital: Gate at dead center, fissure fifty yards wide.",
      },
      {
        number: 20,
        title: "The Eve of the Siege",
        summary:
          "Night before the siege. Itzil walks the camp visiting each hero. Soldiers write letters, sharpen blades, hold each other, pray, drink, sit in silence.",
      },
      {
        number: 21,
        title: "Torvane's Preparations",
        summary:
          "Torvane deploys siege engines, ward-disruptors, explosive charges. Special creation: mobile ward-shield powered by relic energy — protects advancing columns from sorcery.",
      },
      {
        number: 22,
        title: "Valdremor Prepares",
        summary:
          "Valdremor in his Spire of Glass — prepared but with flawed data from Amalura's sabotage. Still brilliant with layered redundancies, but his foundations are wrong.",
      },
      {
        number: 23,
        title: "The Siege Begins",
        summary:
          "Dawn assault. Thalendor infantry behind ward-shields. Pyrrath cavalry flanks. Dominion responds with everything: arrows, sorcery, war-beasts, blood-wards.",
      },
      {
        number: 24,
        title: "Through the Breach",
        summary:
          "Street fighting in the capital's outskirts. Nightshade's blood-ward soldiers fight like automatons. Neyla reverses blood-wards on captured soldiers — each one freed is one less enemy.",
      },
    ],
  },
  {
    id: 11,
    roman: "XI",
    title: "Crown of Stars",
    subtitle: "The Final Siege",
    act: "Act III — The Reckoning",
    focusCharacter: "Itzil (Commander)",
    epigraph: {
      quote:
        "The crown was never meant to rule. It was meant to open the door.",
      author: "Amalura, in the Dominion Palace",
    },
    description:
      "The final battle. The siege of the Dominion capital. Every villain falls. The Great Gate opens. Serenthar walks through. The Starless Crown shatters in a burst of golden light.",
    elaborateDescription:
      "The allied army breaches the Dominion capital's walls. Inside, every remaining villain makes their last stand. Nightshade commands her personal army of shadow-warriors. Itzil defeats her in a duel that costs everything. The Ashvanar brothers fall. Valdremor offers surrender terms — logical, reasonable, and refused. Amalura outmaneuvers him intellectually, destroying his contingency plans one by one. In the palace, Serenthar's true nature is revealed: she is not evil, but ancient, tired, and bound to the Gate by the Starless Crown. She offers the heroes a choice. Volunteers step forward. Dalrignon makes his last stand defending the Gate. The final confrontation: Itzil's Sun-Blade versus Vastrix, the demon commander. The blade blazes with the light of every soul who forged it. Serenthar walks through the Gate and seals it from the other side. The Crown shatters. Dawn breaks.",
    coverImage: "/images/book-covers/book11-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPN4WNB1",
    paperbackUrl: "https://www.amazon.com/dp/B0GPQ9RXPP",
    color: "#a855f7",
    chapters: [
      {
        number: 1,
        title: "The Inner Wall",
        summary:
          "Itzil leads the assault on the inner wall. Nightshade commands a 4,000-strong blood-ward army. The reforged blade severs blood-wards one at a time.",
      },
      {
        number: 2,
        title: "Nightshade's Army",
        summary:
          "Nightshade sustains 4,000 blood-ward connections from a tower. Exhausting, draining. She watches Neyla freeing soldiers: 'That healer undoes everything I build.'",
      },
      {
        number: 3,
        title: "Itzil vs. Nightshade",
        summary:
          "Round three. Nightshade fights with everything: blood-whips, shields, portals. But the reforged blade resonates — each strike disrupts blood-magic fundamentally.",
      },
      {
        number: 4,
        title: "The Wards Fall",
        summary:
          "4,000 blood-ward soldiers freeze, blink, collapse. Fear and pain return simultaneously. Nightshade staggers — power source severed. Stripped of everything.",
      },
      {
        number: 5,
        title: "The Inner Wall Falls",
        summary:
          "Blood-wards broken, inner wall defense collapses. Freed soldiers lay down weapons. Kaelen coordinates urban advance — shadow-fade lasts 12 seconds now.",
      },
      {
        number: 6,
        title: "The Ashvanar's End",
        summary:
          "Gravos — completely mad — fortifies a sorcery tower. He wants to overload it in a suicide attack that could level a city block. Must be stopped.",
      },
      {
        number: 7,
        title: "Valdremor's Gambit",
        summary:
          "Everything has fallen. Valdremor recalculates and realizes Amalura sabotaged his data. He's been making decisions based on lies for months.",
      },
      {
        number: 8,
        title: "The Palace Gates",
        summary:
          "The army reaches the palace. Gold and obsidian doors sealed with wards. Itzil cuts through — nine soul-threads blaze. The doors shatter.",
      },
      {
        number: 9,
        title: "Valdremor's Offer",
        summary:
          "Valdremor offers to close the Gate himself in exchange for exile. His argument is terrifyingly logical — someone has to go through the one-way trip.",
      },
      {
        number: 10,
        title: "The Refusal",
        summary:
          "Itzil refuses: 'No exile. No escape. You answer for what you've done.' Valdremor is genuinely surprised — he didn't model moral conviction as a factor.",
      },
      {
        number: 11,
        title: "Amalura's Revenge",
        summary:
          "Amalura counters Valdremor's ward using his own safety phrase — learned during captivity. 'You stole my knowledge. But knowledge is only half of wisdom.'",
      },
      {
        number: 12,
        title: "Serenthar's Chamber",
        summary:
          "Descent into the depths beneath the palace. Dark corridors, air that tastes of tears. They find Serenthar — ancient, alien, weeping. Ember-red eyes.",
      },
      {
        number: 13,
        title: "The Oracle's Truth",
        summary:
          "Serenthar's full POV. She has seen every future. In every one where the Gate closes, someone walks through and doesn't come back.",
      },
      {
        number: 14,
        title: "Serenthar's Offer",
        summary:
          "Serenthar offers to walk through the Gate and find the keystone — she opened it, it remembers her. 'Close it and I die regardless. Let me die usefully.'",
      },
      {
        number: 15,
        title: "The Volunteers",
        summary:
          "Multiple heroes volunteer to fight Vastrix. Jagren: 'Let me fight for something real.' Kaelen: 'I'll go.' Itzil: 'It should be me.' Everyone steps forward.",
      },
      {
        number: 16,
        title: "Preparing the Assault",
        summary:
          "Tactical plan: Rainara left flank, Jagren right with infantry, Itzil center with blade. Torvane deploys devices. Amalura and Serenthar prepare the ritual.",
      },
      {
        number: 17,
        title: "The Last Night",
        summary:
          "Itzil and Kaelen on the palace terrace. They talk about after — not the battle. 'A house somewhere. With a view.' 'As long as you're in it.'",
      },
      {
        number: 18,
        title: "Dalrignon's Last Stand",
        summary:
          "Dalrignon has fortified the plaza with micro-portals — soldiers teleport into walls and sky. Killing field of spatial distortion. The advance stalls.",
      },
      {
        number: 19,
        title: "The Gate Plaza",
        summary:
          "The army reaches the plaza. Gate at center — black stone arch, fissure blazing. Vastrix visible: shadow the size of the sky, eyes like dead stars. Psychic pressure crushing.",
      },
      {
        number: 20,
        title: "The Remaining Villains",
        summary:
          "Helisar turns against the Dominion, helps Neyla break last oaths. Killed by a stray Vastrix bolt. 'Tell them... I remembered their names.' Redemptive death.",
      },
      {
        number: 21,
        title: "The Blade vs. Vastrix",
        summary:
          "Itzil charges the Gate. Blade meets Vastrix's energy — golden light against crimson darkness. It HURTS Vastrix — but it's like stabbing an ocean.",
      },
      {
        number: 22,
        title: "Serenthar Walks Through",
        summary:
          "Serenthar walks toward the Gate — reality parts for her. She opened it; it remembers. Pauses at the threshold. Looks back. Weeps one final time — from relief.",
      },
      {
        number: 23,
        title: "The Keystone Falls",
        summary:
          "Itzil holds Vastrix while Serenthar finds the keystone. Every hero fights as one: Kaelen spots threats, Jagren cuts tendrils, Rainara drowns dark energy, Neyla heals.",
      },
      {
        number: 24,
        title: "The Crown Breaks",
        summary:
          "The Gate collapses. Fissure seals. Vastrix caught half-through — trapped. Itzil drives the blade into its heart. Nine colors blazing. The blade SINGS like every sunrise.",
      },
    ],
  },
  {
    id: 12,
    roman: "XII",
    title: "The Sun That Never Sets",
    subtitle: "Dawn of a New World",
    act: "Act III — The Reckoning",
    focusCharacter: "All Characters",
    epigraph: {
      quote:
        "We did not fight for a world without darkness. We fought for a world that remembers the light.",
      author: "Itzil, at the Memorial Garden",
    },
    description:
      "The aftermath. Healing, rebuilding, and resolution. Every character finds their peace. The saga closes with a letter to the reader and a single golden shard.",
    elaborateDescription:
      "The final book is a gentle landing after twelve books of war. Every character gets their resolution: Itzil chooses to stay and rebuild rather than rule. Kaelen finds purpose beyond survival. Jagren puts away his dueling blade and chooses to teach. Neyla heals the last ash-oath slaves in a ceremony where thousands speak their names. Rainara cleanses the poisoned rivers. Torvane rebuilds the capital's infrastructure for community, not control. Skyren flies one last reconnaissance — the world is hurt but healing. Solkren forges door hinges instead of weapons. Amalura catalogs the Dominion's knowledge, annotating Valdremor's journals with wry corrections. Even Valdremor finds something like peace in his cell. Time jumps forward — one year, five years, ten years. A new generation of warriors trains at a rebuilt Sun-Blade temple. Itzil and Kaelen watch the sunset. In the final chapter, a young warrior finds a single golden shard in the ruins — warm, pulsing with light. A new blade? A new beginning? The reader decides.",
    coverImage: "/images/book-covers/book12-cover.png",
    kindleUrl: "https://www.amazon.com/dp/B0GPNM97PJ",
    color: "#eab308",
    chapters: [
      {
        number: 1,
        title: "Dawn",
        summary:
          "The morning after. Capital silent for the first time in decades. Golden snow — shattered Starless Crown. Gate is rubble. Sky is clear blue. Everyone survived.",
      },
      {
        number: 2,
        title: "The Captured",
        summary:
          "Zariel manages the aftermath — prisoners, surrenders, power vacuum. Valdremor is cooperative but not repentant, acknowledging the new reality with cold logic.",
      },
      {
        number: 3,
        title: "Neyla's Last Patients",
        summary:
          "Medical aftermath — thousands wounded. Ash-oath reversals continue; many dissolve on their own with the Gate destroyed. Neyla frees the last enslaved one by one.",
      },
      {
        number: 4,
        title: "Jagren's Reckoning",
        summary:
          "Jagren walks the battlefield counting the dead. Stands where the Ashvanar brothers fell. Doesn't feel victorious. Feels heavy.",
      },
      {
        number: 5,
        title: "Rainara Heals the Water",
        summary:
          "Rainara kneels at the capital's river — tainted by Gate corruption for years. Purifies strand by strand, layer by layer. Hours of patient, gentle work.",
      },
      {
        number: 6,
        title: "Torvane Rebuilds",
        summary:
          "Torvane plans reconstruction — not repairs, improvements. Dominion built for control; he rebuilds for community. First project: clean water to all districts equally.",
      },
      {
        number: 7,
        title: "Skyren's Last Flight",
        summary:
          "Last reconnaissance — not for war, for closure. From altitude: smoke clearing, refugees returning, scars remaining. But also: people planting in ashes, children playing.",
      },
      {
        number: 8,
        title: "Solkren in Peace",
        summary:
          "Solkren forges tools, not weapons. Hammers, plowshares, nails, hinges. People come to his forge to be near the armorer who forged the blade. He doesn't hide anymore.",
      },
      {
        number: 9,
        title: "Amalura Endures",
        summary:
          "Amalura catalogs the Dominion palace library — largest collection on the continent. Mid-eighties, frailer than ever, but her mind is a fortress. Dictates to three scribes.",
      },
      {
        number: 10,
        title: "Valdremor's Silence",
        summary:
          "Last villain POV. Clean cell. Reviews his life analytically. The variable he never modeled: the heroes' love for each other. Feels something unfamiliar. Respect.",
      },
      {
        number: 11,
        title: "The Freed",
        summary:
          "Ceremony at the Gate plaza — rubble cleared, memorial garden planted. Thousands of freed ash-oath slaves attend. Neyla: 'You remember your names. That's the first step.'",
      },
      {
        number: 12,
        title: "Gravok's Sunrise",
        summary:
          "Itzil visits Gravok. He's changed — a tired man who misses the sky. 'Was it worth it?' 'No. I only knew the roar of battle. It sounds like purpose. It's not.'",
      },
      {
        number: 13,
        title: "Political Settlement",
        summary:
          "Zariel leads peace negotiations — reparations, territory, justice, revenge. 'Fairness is what we build over decades. Today, we build the framework.'",
      },
      {
        number: 14,
        title: "Itzil's Choice",
        summary:
          "Allied nations offer Itzil a crown. She refuses: 'I didn't fight a tyrant to become one.' Proposes instead a Sun-Blade Academy — not warriors, but teachers.",
      },
      {
        number: 15,
        title: "Kaelen's Purpose",
        summary:
          "Kaelen builds an intelligence network — not for war, for prevention. Early warning systems, diplomatic posts. Headquarters near the academy. Close enough to walk home.",
      },
      {
        number: 16,
        title: "The Memorial",
        summary:
          "Obsidian pillars with thousands of names — heroes and villains, soldiers and civilians. Korvain's name. Miyako's name. Serenthar's. Not sorted by side.",
      },
      {
        number: 17,
        title: "One Year Later",
        summary:
          "Neyla opens a healing academy. Torvane completes the water system. Rainara patrols coastlines. Skyren establishes an aerial courier service. Jagren teaches discipline.",
      },
      {
        number: 18,
        title: "Amalura's Library",
        summary:
          "Amalura establishes the Great Library. Sun-Blade texts next to Valdremor's journals. History doesn't choose favorites. Prickly, demanding — the best teacher they'll ever have.",
      },
      {
        number: 19,
        title: "Itzil and Kaelen",
        summary:
          "Three years later. Married — simply, privately, team present. House with a view. Argue about strategy at dinner. Train at dawn. Sit on the porch at sunset.",
      },
      {
        number: 20,
        title: "Five Years Later",
        summary:
          "Peace has held. Nations trade, argue, cooperate — messy, imperfect, alive. Neyla's academy: hundreds trained. Torvane's capital: beautiful. Rainara's oceans: clear.",
      },
      {
        number: 21,
        title: "The Young Warrior",
        summary:
          "Seven years later. A young person stands before Itzil — talented, scared, unsure. The way Itzil once stood before Korvain. The torch passes.",
      },
      {
        number: 22,
        title: "Ten Years Later",
        summary:
          "Itzil in her thirties — still strong, still sharp, but gentler. Kaelen's hair grey at temples. Still can't cook. Morning training, afternoon teaching, evening walks.",
      },
      {
        number: 23,
        title: "Letter to the Reader",
        summary:
          "Breaks the fourth wall. Thanks the reader for walking the journey. Reflects on every hero — what they taught, what they became.",
      },
      {
        number: 24,
        title: "The Shard",
        summary:
          "Sequel tease. Somewhere far away — unmapped, barren, colorless. A child walks alone through a landscape older than the Gate. A warm, golden shard pulses in the dust.",
      },
    ],
  },
];
