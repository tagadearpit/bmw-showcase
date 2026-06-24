export const modelFilters = ['All', 'Electric', 'Performance', 'SUV', 'Sedan', 'Coupé', 'Roadster']

export const cars = [
  {
    id: 'i7-eclipse',
    name: 'Series i7 Eclipse',
    category: 'Electric',
    body: 'Sedan',
    tagline: 'Silent torque with executive calm.',
    description:
      'A long-range electric flagship concept built around quiet acceleration, panoramic cabin light, and a digital-first driving experience.',
    hp: 536,
    acceleration: '4.5s',
    topSpeed: '240 km/h',
    range: '625 km',
    price: '₹1.95 Cr+',
    color: '#1a66ff',
    gradient: 'from-blue-500/40 via-sky-300/10 to-white/10',
    features: ['Executive lounge cabin', 'Adaptive air suspension', 'Panoramic theatre display', 'AI-assisted highway drive'],
    colors: ['Arctic Silver', 'Carbon Black', 'Imperial Blue', 'Frozen White'],
    wheels: ['Aero Monolith 21″', 'Chrome Orbit 22″', 'Shadowline 21″'],
    interiors: ['Ivory Merino', 'Graphite Alcantara', 'Cognac Executive']
  },
  {
    id: 'm8-shadow',
    name: 'M8 Shadowline',
    category: 'Performance',
    body: 'Coupé',
    tagline: 'Track focus, grand touring restraint.',
    description:
      'A performance grand tourer concept with a low stance, sharp aero details, and precise power delivery for high-speed confidence.',
    hp: 617,
    acceleration: '3.1s',
    topSpeed: '305 km/h',
    range: '—',
    price: '₹2.45 Cr+',
    color: '#d5d9df',
    gradient: 'from-zinc-200/30 via-blue-500/10 to-slate-950/20',
    features: ['Carbon aero package', 'Adaptive M differential', 'Ceramic braking system', 'Track telemetry cockpit'],
    colors: ['Frozen Graphite', 'Alpine White', 'Tanzanite Blue', 'Black Sapphire'],
    wheels: ['Forged Blade 20″', 'Carbon Star 21″', 'Track Split 20″'],
    interiors: ['Black Merino', 'Silverstone Performance', 'Midnight Alcantara']
  },
  {
    id: 'x7-aura',
    name: 'X7 Aura',
    category: 'SUV',
    body: 'SUV',
    tagline: 'Large-scale luxury with controlled presence.',
    description:
      'A premium three-row SUV concept designed for long-distance comfort, intelligent traction, and refined family travel.',
    hp: 523,
    acceleration: '4.7s',
    topSpeed: '250 km/h',
    range: '780 km',
    price: '₹1.65 Cr+',
    color: '#21c7ff',
    gradient: 'from-cyan-400/30 via-white/10 to-blue-950/20',
    features: ['Six-seat lounge layout', 'xDrive intelligent traction', 'Skyline glass roof', 'Rear comfort command display'],
    colors: ['Mineral White', 'Deep Sea Blue', 'Oxide Grey', 'Carbon Black'],
    wheels: ['Executive Aero 22″', 'Terrain Luxe 21″', 'Chrome Multi 23″'],
    interiors: ['Tartufo Merino', 'Ivory White', 'Black Extended Leather']
  },
  {
    id: 'z4-current',
    name: 'Z4 Current',
    category: 'Roadster',
    body: 'Roadster',
    tagline: 'Open-air precision, reduced to essentials.',
    description:
      'A compact roadster concept with tight proportions, a driver-first cockpit, and immediate steering response.',
    hp: 382,
    acceleration: '4.1s',
    topSpeed: '250 km/h',
    range: '690 km',
    price: '₹92 Lakh+',
    color: '#f5f7fb',
    gradient: 'from-white/30 via-blue-300/10 to-neutral-950/30',
    features: ['Low centre of gravity', 'Soft-top roof system', 'Driver-focused cockpit', 'Variable sport steering'],
    colors: ['Glacier Silver', 'Portimao Blue', 'Crimson Red', 'Jet Black'],
    wheels: ['Roadster Twin 19″', 'Polished V-Spoke 20″', 'Black Orbit 19″'],
    interiors: ['Black Vernasca', 'Cognac Sport', 'Oyster Contrast']
  },
  {
    id: 'i5-pulse',
    name: 'Series i5 Pulse',
    category: 'Electric',
    body: 'Sedan',
    tagline: 'Electric business class with athletic timing.',
    description:
      'A midsize electric sedan concept balancing range, comfort, and daily performance inside a calm digital cabin.',
    hp: 590,
    acceleration: '3.8s',
    topSpeed: '230 km/h',
    range: '582 km',
    price: '₹1.20 Cr+',
    color: '#3b82f6',
    gradient: 'from-blue-400/35 via-slate-200/10 to-slate-950/30',
    features: ['Fast charge routing', 'Sport boost mode', 'Curved panoramic display', 'Acoustic comfort glazing'],
    colors: ['Brooklyn Grey', 'Electric Blue', 'Pearl White', 'Obsidian Black'],
    wheels: ['Aero Matrix 20″', 'Shadow Turbine 21″', 'Blue Ring 20″'],
    interiors: ['Mocha Comfort', 'Graphite Tech', 'Ivory Minimal']
  },
  {
    id: 'm4-apex',
    name: 'M4 Apex',
    category: 'Performance',
    body: 'Coupé',
    tagline: 'Sharper response for the driver who notices.',
    description:
      'A compact performance coupé concept with aggressive chassis tuning, high-grip braking, and a focused two-door silhouette.',
    hp: 503,
    acceleration: '3.9s',
    topSpeed: '290 km/h',
    range: '—',
    price: '₹1.55 Cr+',
    color: '#0f7cff',
    gradient: 'from-sky-500/40 via-white/10 to-black/30',
    features: ['Competition suspension', 'Carbon bucket seats', 'Launch control', 'Variable exhaust character'],
    colors: ['Isle Blue', 'Frozen White', 'Sao Paulo Yellow', 'Black Sapphire'],
    wheels: ['Competition 19/20″', 'Carbon Twin 20″', 'Forged Track 19″'],
    interiors: ['Black Carbon', 'Kyalami Orange', 'Silverstone Sport']
  }
]

export const interiorFeatures = [
  'Panoramic curved display with low-glare glass',
  'Ambient light choreography with drive-mode states',
  'Acoustic laminated glass and active noise management',
  'AI assistant surface for route, charging, and comfort control',
  'Executive rear console with climate and media controls'
]

export const stats = [
  { label: '0–100 km/h', value: 3.1, suffix: 's', decimals: 1 },
  { label: 'Peak output', value: 617, suffix: ' hp', decimals: 0 },
  { label: 'Electric range', value: 625, suffix: ' km', decimals: 0 },
  { label: 'Top speed', value: 305, suffix: ' km/h', decimals: 0 }
]
    
