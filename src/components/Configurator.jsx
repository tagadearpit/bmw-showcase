import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { cars } from '../data/cars.js'
import CarVisual from './CarVisual.jsx'
import SectionHeader from './SectionHeader.jsx'

const colorMap = {
  'Arctic Silver': '#d8dee8',
  'Carbon Black': '#0b1120',
  'Imperial Blue': '#1d4ed8',
  'Frozen White': '#f8fafc',
  'Frozen Graphite': '#64748b',
  'Alpine White': '#f7f7f2',
  'Tanzanite Blue': '#1e3a8a',
  'Black Sapphire': '#020617',
  'Mineral White': '#e5e7eb',
  'Deep Sea Blue': '#0f3b68',
  'Oxide Grey': '#71717a',
  'Glacier Silver': '#cbd5e1',
  'Portimao Blue': '#2563eb',
  'Crimson Red': '#991b1b',
  'Jet Black': '#030712',
  'Brooklyn Grey': '#94a3b8',
  'Electric Blue': '#0ea5e9',
  'Pearl White': '#fafafa',
  'Obsidian Black': '#09090b',
  'Isle Blue': '#0284c7',
  'Sao Paulo Yellow': '#eab308'
}

export default function Configurator({ selectedCar, onSelectCar }) {
  const initialCar = selectedCar ?? cars[0]
  const [carId, setCarId] = useState(initialCar.id)
  const car = useMemo(() => cars.find((item) => item.id === carId) ?? cars[0], [carId])
  const [exterior, setExterior] = useState(car.colors[0])
  const [wheel, setWheel] = useState(car.wheels[0])
  const [interior, setInterior] = useState(car.interiors[0])

  useEffect(() => {
    if (!selectedCar) return
    setCarId(selectedCar.id)
    setExterior(selectedCar.colors[0])
    setWheel(selectedCar.wheels[0])
    setInterior(selectedCar.interiors[0])
  }, [selectedCar])

  const chooseCar = (id) => {
    const next = cars.find((item) => item.id === id) ?? cars[0]
    setCarId(next.id)
    setExterior(next.colors[0])
    setWheel(next.wheels[0])
    setInterior(next.interiors[0])
    onSelectCar?.(next)
  }

  const previewColor = colorMap[exterior] ?? car.color

  return (
    <section id="configure" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Configure your drive"
          title="A simple interactive layer makes the site feel alive."
          description="This configurator is frontend-only. It updates the preview and summary without sending user data anywhere."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-panel backdrop-blur-2xl md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.24),transparent_46%)]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={`${car.id}-${exterior}`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className="relative z-10"
              >
                <CarVisual color={previewColor} variant={car.body} />
              </motion.div>
            </AnimatePresence>
            <div className="relative z-10 mt-6 rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Current configuration</p>
              <h3 className="mt-3 font-display text-3xl font-semibold text-white">{car.name}</h3>
              <div className="mt-4 grid gap-3 text-sm text-zinc-400 sm:grid-cols-3">
                <Summary label="Exterior" value={exterior} />
                <Summary label="Wheels" value={wheel} />
                <Summary label="Interior" value={interior} />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <OptionGroup title="Model">
              {cars.map((item) => (
                <ChoiceButton key={item.id} active={item.id === car.id} onClick={() => chooseCar(item.id)}>
                  {item.name}
                </ChoiceButton>
              ))}
            </OptionGroup>

            <OptionGroup title="Exterior color">
              {car.colors.map((item) => (
                <ChoiceButton key={item} active={item === exterior} onClick={() => setExterior(item)}>
                  <span className="inline-block h-3 w-3 rounded-full border border-white/30" style={{ background: colorMap[item] ?? car.color }} />
                  {item}
                </ChoiceButton>
              ))}
            </OptionGroup>

            <OptionGroup title="Wheel style">
              {car.wheels.map((item) => (
                <ChoiceButton key={item} active={item === wheel} onClick={() => setWheel(item)}>
                  {item}
                </ChoiceButton>
              ))}
            </OptionGroup>

            <OptionGroup title="Interior theme">
              {car.interiors.map((item) => (
                <ChoiceButton key={item} active={item === interior} onClick={() => setInterior(item)}>
                  {item}
                </ChoiceButton>
              ))}
            </OptionGroup>
          </div>
        </div>
      </div>
    </section>
  )
}

function OptionGroup({ title, children }) {
  return (
    <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5 shadow-panel backdrop-blur-2xl">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">{title}</h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  )
}

function ChoiceButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
        active ? 'border-white bg-white text-black' : 'border-white/10 bg-black/20 text-zinc-300 hover:bg-white/10 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}

function Summary({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{label}</p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  )
}
