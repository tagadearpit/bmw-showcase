export const modelFilters = ['All', 'Electric', 'Performance', 'SUV', 'Sedan', 'Coupé', 'Roadster']

export const cars = [
  {
    id: 'm4-competition',
    name: 'BMW M4 Competition',
    category: 'Performance',
    body: 'Coupé',
    tagline: 'Compact aggression with controlled theatre.',
    description:
      'A driver-focused performance coupé presented as a cinematic concept for this portfolio site. Sharp stance, instant response, and a cockpit that puts the main controls within reach.',
    hp: 503,
    acceleration: '3.9s',
    topSpeed: '290 km/h',
    range: '—',
    price: '₹1.55 Cr+ concept',
    color: '#0f7cff',
    gradient: 'from-sky-500/38 via-white/10 to-black/35',
    features: ['Competition-tuned chassis', 'Carbon-inspired cabin package', 'Launch control experience', 'Performance telemetry surfaces'],
    colors: ['Portimao Blue', 'Frozen White', 'Black Sapphire', 'Brooklyn Grey'],
    wheels: ['Competition 19/20″', 'Carbon Twin 20″', 'Forged Track 19″'],
    interiors: ['Black Carbon', 'Kyalami Orange', 'Silverstone Sport']
  },
  {
    id: 'm8-competition',
    name: 'BMW M8 Competition Coupé',
    category: 'Performance',
    body: 'Coupé',
    tagline: 'Grand touring restraint with M-level force.',
    description:
      'A flagship coupé experience built around long-distance speed, deep body reflections, and a low, composed silhouette suited for the product showcase section.',
    hp: 617,
    acceleration: '3.1s',
    topSpeed: '305 km/h',
    range: '—',
    price: '₹2.45 Cr+ concept',
    color: '#d5d9df',
    gradient: 'from-zinc-200/28 via-blue-500/10 to-slate-950/32',
    features: ['Grand touring cabin', 'Carbon aero detailing', 'Adaptive M differential', 'Ceramic braking package'],
    colors: ['Frozen Graphite', 'Alpine White', 'Tanzanite Blue', 'Black Sapphire'],
    wheels: ['Forged Blade 20″', 'Carbon Star 21″', 'Track Split 20″'],
    interiors: ['Black Merino', 'Silverstone Performance', 'Midnight Alcantara']
  },
  {
    id: 'i7-xdrive60',
    name: 'BMW i7 xDrive60',
    category: 'Electric',
    body: 'Sedan',
    tagline: 'Executive silence with theatre-grade cabin light.',
    description:
      'A luxury electric sedan concept emphasizing quiet torque, rear-seat calm, ambient lighting, and a high-resolution digital cabin experience.',
    hp: 536,
    acceleration: '4.5s',
    topSpeed: '240 km/h',
    range: '625 km',
    price: '₹1.95 Cr+ concept',
    color: '#1a66ff',
    gradient: 'from-blue-500/38 via-sky-300/10 to-white/10',
    features: ['Executive lounge cabin', 'Adaptive air comfort', 'Panoramic theatre display', 'AI-assisted highway experience'],
    colors: ['Arctic Silver', 'Carbon Black', 'Imperial Blue', 'Frozen White'],
    wheels: ['Aero Monolith 21″', 'Chrome Orbit 22″', 'Shadowline 21″'],
    interiors: ['Ivory Merino', 'Graphite Alcantara', 'Cognac Executive']
  },
  {
    id: 'i4-m50',
    name: 'BMW i4 M50',
    category: 'Electric',
    body: 'Sedan',
    tagline: 'Electric daily performance in a low, clean form.',
    description:
      'A modern electric gran coupé concept used for the configurator experience, balancing digital precision, color choice, and compact luxury.',
    hp: 536,
    acceleration: '3.9s',
    topSpeed: '225 km/h',
    range: '510 km',
    price: '₹1.00 Cr+ concept',
    color: '#3b82f6',
    gradient: 'from-blue-400/35 via-slate-200/10 to-slate-950/30',
    features: ['Sport boost feel', 'Fast-charge route planning', 'Curved panoramic display', 'Acoustic comfort glazing'],
    colors: ['Brooklyn Grey', 'Electric Blue', 'Pearl White', 'Obsidian Black'],
    wheels: ['Aero Matrix 20″', 'Shadow Turbine 21″', 'Blue Ring 20″'],
    interiors: ['Mocha Comfort', 'Graphite Tech', 'Ivory Minimal']
  },
  {
    id: 'xm-label',
    name: 'BMW XM Label',
    category: 'SUV',
    body: 'SUV',
    tagline: 'Large-scale presence with performance geometry.',
    description:
      'A bold SUV concept for visitors who want power, volume, and visual dominance without losing premium material restraint.',
    hp: 738,
    acceleration: '3.8s',
    topSpeed: '282 km/h',
    range: '88 km EV',
    price: '₹2.60 Cr+ concept',
    color: '#21c7ff',
    gradient: 'from-cyan-400/28 via-white/10 to-blue-950/24',
    features: ['Hybrid performance character', 'Large-format luxury cabin', 'xDrive-inspired traction', 'Geometric exterior lighting'],
    colors: ['Mineral White', 'Deep Sea Blue', 'Oxide Grey', 'Carbon Black'],
    wheels: ['Executive Aero 22″', 'Terrain Luxe 21″', 'Chrome Multi 23″'],
    interiors: ['Tartufo Merino', 'Ivory White', 'Black Extended Leather']
  },
  {
    id: 'z4-m40i',
    name: 'BMW Z4 M40i',
    category: 'Roadster',
    body: 'Roadster',
    tagline: 'Open-air precision, reduced to essentials.',
    description:
      'A compact roadster concept with tight proportions, a driver-first cockpit, and immediate steering response for open-road storytelling.',
    hp: 382,
    acceleration: '4.1s',
    topSpeed: '250 km/h',
    range: '690 km',
    price: '₹92 Lakh+ concept',
    color: '#f5f7fb',
    gradient: 'from-white/30 via-blue-300/10 to-neutral-950/30',
    features: ['Low centre of gravity', 'Soft-top roof system', 'Driver-focused cockpit', 'Variable sport steering'],
    colors: ['Glacier Silver', 'Portimao Blue', 'Crimson Red', 'Jet Black'],
    wheels: ['Roadster Twin 19″', 'Polished V-Spoke 20″', 'Black Orbit 19″'],
    interiors: ['Black Vernasca', 'Cognac Sport', 'Oyster Contrast']
  }
]

export const interiorFeatures = [
  'Ambient lighting that shifts gently with the cabin mood',
  'Curved digital cockpit with reduced-glare visual hierarchy',
  'Premium leather, metal, and glass surfaces with quiet reflections',
  'Intelligent driving assistant surfaces for route and comfort control',
  'Immersive sound and acoustic glass for a calmer long-distance cabin'
]

export const stats = [
  { label: '0–100 km/h', value: 3.1, suffix: 's', decimals: 1 },
  { label: 'Peak output', value: 617, suffix: ' hp', decimals: 0 },
  { label: 'Electric range', value: 625, suffix: ' km', decimals: 0 },
  { label: 'Top speed', value: 305, suffix: ' km/h', decimals: 0 }
]
