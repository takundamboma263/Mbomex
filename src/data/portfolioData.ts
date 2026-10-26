export interface PhotoWork {
  id: string;
  title: string;
  subtitle: string;
  series: string;
  year: number;
  location: string;
  category: 'documentary' | 'portraits' | 'architecture' | 'editorial';
  camera: string;
  lens: string;
  settings: {
    focalLength: string;
    aperture: string;
    shutter: string;
    iso: string;
  };
  story: string;
  exhibition?: string;
  dimensions?: string;
  edition?: string;
  customImageData?: string; // If user uploaded a custom file
  svgArtType?: 'monochrome_portrait' | 'golden_hour_street' | 'brutalist_facade' | 'dusk_market' | 'serengeti_light' | 'london_shadows' | 'artisan_hands' | 'high_desert_minimal';
}

export interface KeynoteTopic {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  duration: string;
  format: 'Keynote' | 'Fireside' | 'Executive Masterclass';
  audience: string;
  description: string;
  takeaways: string[];
  sampleClipTitle?: string;
  quote: string;
}

export interface SpeakingEngagement {
  id: string;
  event: string;
  location: string;
  year: number;
  date: string;
  format: 'Opening Keynote' | 'Closing Keynote' | 'Fireside Chat' | 'Panel & Masterclass';
  attendees: string;
  topic: string;
  status: 'Upcoming' | 'Completed';
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  organization: string;
  eventContext: string;
}

export const TAKUNDA_PROFILE = {
  name: 'Takunda Mboma',
  preferredName: 'Taku',
  title: 'Photographer & International Keynote Speaker',
  shortBio: 'Documentary photographer and keynote speaker exploring the intersection of human dignity, cultural memory, and visual storytelling across global stages.',
  mediumBio: 'Takunda Mboma is an acclaimed visual storyteller and keynote speaker whose documentary photography has been exhibited internationally across Europe and Africa. Bridging nuanced visual reportage with commanding stage oratory, Takunda speaks to global audiences on visual ethics, creative discipline, and using perspective as a transformative leadership tool.',
  extendedBio: `Born in Harare, Zimbabwe and working across London and global creative hubs, Takunda Mboma has dedicated his career to capturing stories that resist simplification. His photography investigates urban transitions, quiet human resilience, and cultural continuity with a deliberate, medium-format and rangefinder discipline.

On international stages—from TEDx and creative leadership summits to corporate executive retreats—Takunda translates the quiet patience of the documentary lens into compelling keynote narratives on empathy, visual literacy, and storytelling as a strategic asset for modern institutions.`,
  email: 'takundamboma73@gmail.com',
  baseLocations: 'London · Harare · Available Globally',
  representation: 'Direct Commissions & Speaking Inquiries',
  keyStats: [
    { label: 'Countries Documented', value: '18+' },
    { label: 'Keynote Engagements', value: '45+' },
    { label: 'Exhibitions & Features', value: '14' },
    { label: 'Audience Reached', value: '40k+' },
  ],
  socials: [
    { name: 'Instagram', url: 'https://instagram.com/takundamboma', handle: '@takundamboma' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/takundamboma', handle: 'takundamboma' },
    { name: 'Substack', url: 'https://takundamboma.substack.com', handle: 'The Still Gaze' },
    { name: 'Email', url: 'mailto:takundamboma73@gmail.com', handle: 'takundamboma73@gmail.com' },
  ],
  gearPhilosophy: 'Leica M11 Rangefinder, Hasselblad 907X 50C, and prime manual lenses. Natural light, measured patience, and zero intrusive staging.',
};

export const INITIAL_PHOTO_WORKS: PhotoWork[] = [
  {
    id: 'pw-01',
    title: 'The Cartographer of Shadows',
    subtitle: 'High Noon at the Mbare Market Concourse',
    series: 'Transit & Memory',
    year: 2026,
    location: 'Harare, Zimbabwe',
    category: 'documentary',
    camera: 'Leica M11',
    lens: 'Leica Summilux-M 35mm f/1.4 ASPH',
    settings: {
      focalLength: '35mm',
      aperture: 'f/2.8',
      shutter: '1/1000s',
      iso: 'ISO 64',
    },
    story: 'Observed during the midday heat when corrugated steel sheds cast sharp diagonal geometries. A solitary textile merchant waits between tides of commuters, wrapped in amber light that transforms everyday patience into monumentality.',
    exhibition: 'Somerset House Curated Selection, 2026',
    dimensions: '120 × 80 cm Archival Pigment Print',
    edition: 'Edition of 7 + 2 AP',
    svgArtType: 'golden_hour_street',
  },
  {
    id: 'pw-02',
    title: 'Portrait of Tendai in Ochre',
    subtitle: 'From the Ongoing Series on Generational Continuity',
    series: 'Portraits of Resilience',
    year: 2025,
    location: 'Bulawayo, Zimbabwe',
    category: 'portraits',
    camera: 'Hasselblad 907X 50C',
    lens: 'XCD 80mm f/1.9',
    settings: {
      focalLength: '80mm (63mm eq)',
      aperture: 'f/2.0',
      shutter: '1/250s',
      iso: 'ISO 100',
    },
    story: 'Tendai has practiced ceramic sculpting for five decades. In her courtyard atelier, soft morning illumination strikes the side of her profile, revealing the subtle dust of clay that has settled into her hands like an elemental archive.',
    exhibition: 'National Gallery of Zimbabwe Contemporary Salon',
    dimensions: '100 × 100 cm Baryta Fine Art Print',
    edition: 'Edition of 5 + 1 AP',
    svgArtType: 'monochrome_portrait',
  },
  {
    id: 'pw-03',
    title: 'Monolith & Mist: Barbican Geometry',
    subtitle: 'Study of Post-War Rhythms and London Morning Light',
    series: 'Brutalist Echoes',
    year: 2025,
    location: 'London, United Kingdom',
    category: 'architecture',
    camera: 'Leica M11 Monochrom',
    lens: 'Leica APO-Summicron-M 50mm f/2 ASPH',
    settings: {
      focalLength: '50mm',
      aperture: 'f/5.6',
      shutter: '1/500s',
      iso: 'ISO 125',
    },
    story: 'Walking through the Barbican Estate during autumn dawn. The stark vertical fluting of bush-hammered concrete acts as a giant optical resonator, slicing through mist and grounding human inhabitants within monolithic quietude.',
    exhibition: 'Architectural Review Annual Showcase',
    dimensions: '140 × 90 cm Diasec Mounted C-Print',
    edition: 'Edition of 10 + 2 AP',
    svgArtType: 'brutalist_facade',
  },
  {
    id: 'pw-04',
    title: 'Dusk Convergence on Victoria Embankment',
    subtitle: 'Long Exposure Study of Movement and Thames Fog',
    series: 'River Cadences',
    year: 2026,
    location: 'London, United Kingdom',
    category: 'documentary',
    camera: 'Sony A7R V',
    lens: 'Sony FE 24-70mm f/2.8 GM II',
    settings: {
      focalLength: '45mm',
      aperture: 'f/8.0',
      shutter: '1/4s (Handheld Gyro)',
      iso: 'ISO 200',
    },
    story: 'As dusk dissolves the city into cobalt gradients, commuter silhouettes blur against old granite balustrades. A meditation on urban speed versus inner solitude.',
    exhibition: 'Independent Gallery London, 2026',
    dimensions: '110 × 75 cm Hahnemühle Photo Rag',
    edition: 'Edition of 8',
    svgArtType: 'london_shadows',
  },
  {
    id: 'pw-05',
    title: 'The Weaver’s Geometry',
    subtitle: 'Hands in Perpetual Motion',
    series: 'The Tactile Archive',
    year: 2025,
    location: 'Mutare, Zimbabwe',
    category: 'editorial',
    camera: 'Hasselblad 907X 50C',
    lens: 'XCD 45mm f/4 P',
    settings: {
      focalLength: '45mm',
      aperture: 'f/4.0',
      shutter: '1/160s',
      iso: 'ISO 400',
    },
    story: 'Commissioned feature on heritage textile craft preserving indigenous weaving traditions. The frame honors the rhythmic tension between raw sisal fibers, weathered fingers, and ancestral mathematical patterns.',
    exhibition: 'Vogue Craft & Heritage Editorial Selection',
    dimensions: '90 × 90 cm Matte Cotton Rag',
    edition: 'Edition of 6',
    svgArtType: 'artisan_hands',
  },
  {
    id: 'pw-06',
    title: 'Threshold of the Karoo Basin',
    subtitle: 'Topographical Study in High Noon Stillness',
    series: 'Terrains of Silence',
    year: 2024,
    location: 'Eastern Cape, South Africa',
    category: 'architecture',
    camera: 'Leica M11',
    lens: 'Leica Elmarit-M 28mm f/2.8 ASPH',
    settings: {
      focalLength: '28mm',
      aperture: 'f/8.0',
      shutter: '1/750s',
      iso: 'ISO 64',
    },
    story: 'A lone corrugated windmill and stone dwelling standing under an unsparing bleached-white horizon. An essay on human perseverance against colossal open space.',
    exhibition: 'Photo Africa Biennial',
    dimensions: '150 × 100 cm Museum Plexiglass Mount',
    edition: 'Edition of 5',
    svgArtType: 'high_desert_minimal',
  },
  {
    id: 'pw-07',
    title: 'The Young Orator of Highfield',
    subtitle: 'Debate Circle at Sunset',
    series: 'Voices of Tomorrow',
    year: 2025,
    location: 'Harare, Zimbabwe',
    category: 'portraits',
    camera: 'Leica M11',
    lens: 'Leica Summilux-M 50mm f/1.4 ASPH',
    settings: {
      focalLength: '50mm',
      aperture: 'f/1.4',
      shutter: '1/320s',
      iso: 'ISO 250',
    },
    story: 'A seventeen-year-old high school debate captain mid-rebuttal under the jacaranda canopy. His gaze is electric, carrying the conviction of a generation actively rewriting its future.',
    exhibition: 'Youth & Identity Fellowship Show',
    dimensions: '100 × 70 cm Baryta Fine Art',
    edition: 'Edition of 8',
    svgArtType: 'dusk_market',
  },
  {
    id: 'pw-08',
    title: 'Golden Hour at the Rift Valley Escarpment',
    subtitle: 'Atmospheric Particulates and Volcanic Strata',
    series: 'Terrains of Silence',
    year: 2024,
    location: 'Great Rift Valley, Kenya',
    category: 'editorial',
    camera: 'Hasselblad 907X 50C',
    lens: 'XCD 90mm f/2.5 V',
    settings: {
      focalLength: '90mm',
      aperture: 'f/5.6',
      shutter: '1/400s',
      iso: 'ISO 100',
    },
    story: 'Captured when geothermal mist interacts with low-angled sun rays, creating tonal gradations of sepia, bronze, and charcoal that resemble charcoal wash drawings.',
    exhibition: 'African Geographic Fine Art Selection',
    dimensions: '135 × 90 cm Archival Canvas Print',
    edition: 'Edition of 5',
    svgArtType: 'serengeti_light',
  },
];

export const KEYNOTE_TOPICS: KeynoteTopic[] = [
  {
    id: 'topic-01',
    title: 'The Lens of Empathy: Visual Storytelling in the Era of Acceleration',
    subtitle: 'Reclaiming Depth, Dignity, and Authentic Connection in a Distracted World',
    tagline: 'How photographic observation teaches leaders to see what algorithms overlook.',
    duration: '45–60 Minutes',
    format: 'Keynote',
    audience: 'Global Leadership Conferences, Creative Summits, Executive Retreats, Universities',
    description: `In an era defined by ephemeral micro-content and algorithmic velocity, our collective capacity for sustained attention has fractured. Drawing from a decade behind the camera in over 18 countries, Takunda unpacks how the discipline of documentary photography—waiting for the light, earning trust in silence, and refusing to commodify human subjects—offers leaders a counter-cultural framework for empathetic decision making and lasting resonance.`,
    takeaways: [
      'The principle of the "Unstaged Moment": Why authentic human resonance always outperforms manufactured perfection.',
      'Framing as an Ethical Act: How the perspectives we choose to highlight or crop out shape institutional culture.',
      'The Power of the Measured Pause: Cultivating creative patience and deep observation amidst corporate urgency.',
    ],
    sampleClipTitle: 'Keynote Excerpt: The Architecture of Trust (London, 2025)',
    quote: 'To photograph someone with dignity is to listen with your eyes before you ask for their image.',
  },
  {
    id: 'topic-02',
    title: 'Perspective as Power: Framing Culture, Identity, and Global Narratives',
    subtitle: 'Challenging Monolithic Tropes Through the Decolonized Gaze',
    tagline: 'Moving beyond single-story paradigms into multidimensional storytelling.',
    duration: '45–60 Minutes',
    format: 'Keynote',
    audience: 'Cultural Institutions, Media Executives, Brand Strategists, Global Nonprofits',
    description: `Who holds the right to tell a community’s story? Takunda examines how visual media has historically reinforced reductive stereotypes of the Global South and diaspora communities, and presents a vibrant, contemporary blueprint for nuanced storytelling. Through striking visual case studies from his international portfolio, he challenges creators and strategists to interrogate their assumptions and build narratives rooted in agency rather than pity.`,
    takeaways: [
      'Dismantling the Single Story: Practical methods to audit visual communications for subconscious bias.',
      'Collaborative Authorship: Shifting from "taking" photographs to "making" portraits in partnership with subjects.',
      'Cultural Nuance at Global Scale: Crafting communications that respect local specificities while achieving universal emotional impact.',
    ],
    sampleClipTitle: 'TEDx Talk: The Dignity of the Gaze',
    quote: 'When you change the distance between the observer and the subject, pity transforms into solidarity.',
  },
  {
    id: 'topic-03',
    title: 'Capturing the Unseen: Craft, Discipline, and Creative Resilience',
    subtitle: 'Sustaining Artistic Longevity in a Hyper-Commercial Landscape',
    tagline: 'The daily rituals, technical mastery, and mindset that sustain vision across decades.',
    duration: '45–75 Minutes',
    format: 'Executive Masterclass',
    audience: 'Creative Directors, Agency Teams, Designers, Photography Festivals, Emerging Artists',
    description: `A masterclass on the unglamorous mechanics of exceptional creative output. Takunda shares the exact creative operating system that has allowed him to deliver both commercial commissions and deeply personal long-term documentary monographs. From managing creative doubt to the rigorous technical discipline of prime lenses and manual metering, this session provides an actionable blueprint for high-retention creative stamina.`,
    takeaways: [
      'The Constraint Advantage: How self-imposed technical limits unlock explosive creative breakthroughs.',
      'Curating Your Inner Archive: Developing an editorial filter to discard the mediocre and champion the essential.',
      'Resilience Under Pressure: Navigating unpredictable field conditions, creative burnout, and market shifts.',
    ],
    sampleClipTitle: 'Masterclass: The Rangefinder Discipline',
    quote: 'Style is not a collection of presets; it is the residue of thousands of honest editorial choices.',
  },
  {
    id: 'topic-04',
    title: 'From Stillness to Stage: Translating Visual Vision into Leadership',
    subtitle: 'Executive Presence, Oratory Precision, and the Art of the Memorable Keynote',
    tagline: 'How visual artists craft unforgettable live experiences that galvanize teams.',
    duration: '40–50 Minutes',
    format: 'Fireside',
    audience: 'C-Suite Executives, Founders, Innovation Leaders, Venture Summits',
    description: `Why do some presentations evaporate from memory within minutes while others ignite lifelong conviction? Takunda pulls back the curtain on how principles of photographic composition—leading lines, tonal contrast, visual cadence, and selective focus—can be directly transposed onto executive communication, keynote architecture, and high-stakes pitching.`,
    takeaways: [
      'Visual Cadence: Pacing oral presentations like an editorial photo essay for maximum retention.',
      'The Zero-Clutter Principle: Stripping away slide decks and jargon to let the core human insight breathe.',
      'Authentic Stage Gravity: Projecting quiet authority and commanding room attention without manufactured hype.',
    ],
    sampleClipTitle: 'Fireside Discussion: The Art of Quiet Authority',
    quote: 'The most powerful voice in the auditorium is rarely the loudest; it is the one that speaks with undeniable clarity.',
  },
];

export const SPEAKING_ENGAGEMENTS: SpeakingEngagement[] = [
  {
    id: 'spk-01',
    event: 'Global Creative & Cultural Summit',
    location: 'London, UK · Queen Elizabeth II Centre',
    year: 2026,
    date: 'Nov 14, 2026',
    format: 'Opening Keynote',
    attendees: '1,400+ delegates',
    topic: 'The Lens of Empathy: Reclaiming Depth in an Accelerated Age',
    status: 'Upcoming',
  },
  {
    id: 'spk-02',
    event: 'International Visual Arts Biennial Symposium',
    location: 'Cape Town, South Africa · Zeitz MOCAA',
    year: 2026,
    date: 'Dec 05, 2026',
    format: 'Closing Keynote',
    attendees: '850+ curators & artists',
    topic: 'Perspective as Power: Framing Continental Futures',
    status: 'Upcoming',
  },
  {
    id: 'spk-03',
    event: 'TEDx King’s Cross',
    location: 'London, UK · St Pancras Auditorium',
    year: 2025,
    date: 'Oct 18, 2025',
    format: 'Opening Keynote',
    attendees: '900+ live / 35k online',
    topic: 'The Dignity of the Gaze: Lessons from 18 Countries',
    status: 'Completed',
  },
  {
    id: 'spk-04',
    event: 'African Leadership Forum',
    location: 'Nairobi, Kenya · Radisson Blu Upper Hill',
    year: 2025,
    date: 'Jun 22, 2025',
    format: 'Opening Keynote',
    attendees: '600+ founders & policy leaders',
    topic: 'Visual Literacy as a Strategic Leadership Asset',
    status: 'Completed',
  },
  {
    id: 'spk-05',
    event: 'Design & Human Futures Congress',
    location: 'Berlin, Germany · Radialsystem V',
    year: 2025,
    date: 'Apr 09, 2025',
    format: 'Fireside Chat',
    attendees: '750+ design leaders',
    topic: 'Craft, Discipline, and Human Resilience in the Age of Synthetic Imagery',
    status: 'Completed',
  },
  {
    id: 'spk-06',
    event: 'Harvard Graduate Council Speaker Series',
    location: 'Cambridge, MA · Virtual Keynote & Masterclass',
    year: 2024,
    date: 'Nov 12, 2024',
    format: 'Panel & Masterclass',
    attendees: '400+ researchers & students',
    topic: 'Documentary Storytelling and Human Rights Advocacy',
    status: 'Completed',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-01',
    quote: 'Takunda delivered the highest-rated keynote in the 12-year history of our summit. His ability to connect the intimacy of his photography with high-level organizational leadership left our 1,200 attendees speechless.',
    name: 'Helena Vance-Carter',
    role: 'Program Director',
    organization: 'Global Creative Leadership Summit',
    eventContext: 'Keynote Speaker, London 2025',
  },
  {
    id: 'test-02',
    quote: 'Taku’s documentary monograph exhibited in our contemporary wing was an extraordinary masterclass in light, restraint, and cultural reverence. He possesses that rare dual gift: a razor-sharp eye and a voice that commands the room.',
    name: 'Dr. Farai Mzembi',
    role: 'Chief Curator of Contemporary Art',
    organization: 'Southern African Arts Foundation',
    eventContext: 'Solo Exhibition & Curator Talk, 2025',
  },
  {
    id: 'test-03',
    quote: 'Working with Takunda on our global editorial campaign was revelatory. His photos captured the quiet strength of our founders without a single moment feeling artificial. An absolute consummate professional.',
    name: 'Julian Thorne',
    role: 'Executive Creative Director',
    organization: 'Monocle & Atelier Media',
    eventContext: 'Editorial Commission, 2025',
  },
];

export const TECHNICAL_RIDER = {
  audio: [
    'Wireless omnidirectional headset microphone (DPA 4066 / 4466 or Shure TwinPlex preferred). No handheld or podium goosenecks.',
    'Dedicated direct DI stereo audio feed from laptop for high-fidelity soundtrack and film cues.',
    'Dedicated audio technician available during 30-minute tech rehearsal.',
  ],
  videoAndVisuals: [
    'Ultra-high-definition 4K (3840×2160) or 1080p 16:9 projection or LED wall calibrated for photography color accuracy (sRGB / DCI-P3).',
    'HDMI / USB-C connection directly to Takunda’s MacBook Pro at lectern or confidence monitor desk.',
    'Stage lighting note: Key light focused strictly on speaker; avoid high-spill front wash that degrades projected photographic contrast.',
  ],
  stagingAndComfort: [
    'Clean, uncluttered stage. No podium requested; freedom to move and engage the audience directly.',
    'Comfort monitor facing speaker displaying presenter notes and countdown timer.',
    'Still room-temperature bottled water (still, non-carbonated).',
  ],
  travelAndHospitality: [
    'Business class travel for international flights exceeding 5 hours; premium economy or direct rail for European routes.',
    'Quiet boutique or 4/5-star accommodation in close proximity to venue.',
    'Private ground transfers between airport, hotel, and speaking venue.',
  ],
};
