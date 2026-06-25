import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { cars } from '../data/cars.js'
import RenderVideo from './RenderVideo.jsx'
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
  const initialCar = selectedCar ?? cars[3] ?? cars[0]
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
    <section id="configure" className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute inset-x-0 top-24 mx-auto h-80 max-w-5xl rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Configure your drive"
          title="A configurator needs movement, not a static product card."
          description="The BMW i4-style render loop provides the visual motion while the controls update the selected model, finish, wheels, and cabin summary."
        />

        <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="video-frame-edge relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/[0.045] p-3 shadow-panel backdrop-blur-2xl"
          >
            <div
              className="absolute -inset-28 opacity-50 blur-3xl transition duration-500"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${previewColor}55, transparent 55%)`
              }}
            />

            <RenderVideo
              src="/media/render/configurator-loop.mp4"
              title="BMW i4 configurator render loop"
              overlay="card"
              className="aspect-[16/11] rounded-[2.3rem] lg:aspect-auto lg:min-h-[660px]"
              videoClassName="motion-safe:animate-kenburns-subtle"
            >
              <div className="flex h-full flex-col justify-between p-5 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="light-sweep rounded-full border border-white/15 bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200 backdrop-blur-xl">
                    Live render preview
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl">
                    Frontend-only configurator
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${car.id}-${exterior}-${wheel}-${interior}`}
                    initial={{ opacity: 0, y: 22, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -14, scale: 0.98 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl rounded-[1.8rem] border border-white/10 bg-black/48 p-5 backdrop-blur-2xl"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                      Current configuration
                    </p>

                    <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                      {car.name}
                    </h3>

                    <div className="mt-5 grid gap-3 text-sm text-zinc-300 sm:grid-cols-3">
                      <Summary label="Exterior" value={exterior} swatch={previewColor} />
                      <Summary label="Wheels" value={wheel} />
                      <Summary label="Interior" value={interior} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </RenderVideo>
          </motion.div>

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
                  <span
                    className="inline-block h-3 w-3 rounded-full border border-white/30"
                    style={{ background: colorMap[item] ?? car.color }}
                  />
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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="premium-card-hover rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5 shadow-panel backdrop-blur-2xl"
    >
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-400">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">{children}</div>
    </motion.div>
  )
}

function ChoiceButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
        active
          ? 'border-white bg-white text-black shadow-[0_0_35px_rgba(255,255,255,0.18)]'
          : 'border-white/10 bg-black/20 text-zinc-300 hover:bg-white/10 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}

function Summary({ label, value, swatch }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
      <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">{label}</p>
      <p className="mt-1 flex items-center gap-2 font-medium text-white">
        {swatch && (
          <span
            className="h-3 w-3 rounded-full border border-white/30 shadow-[0_0_20px_currentColor]"
            style={{ background: swatch }}
          />
        )}
        {value}
      </p>
    </div>
  )
}