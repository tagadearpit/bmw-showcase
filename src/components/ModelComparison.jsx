import { motion } from 'framer-motion'
import { useState } from 'react'
import { cars } from '../data/cars.js'
import SectionHeader from './SectionHeader.jsx'

export default function ModelComparison({ onDetails }) {
  const [selected, setSelected] = useState(cars[0].id)
  const selectedCar = cars.find((car) => car.id === selected) ?? cars[0]

  return (
    <section id="compare" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Compare models"
          title="Make the next action obvious."
          description="Comparison is more useful when the selected model has a strong visual state and direct actions."
        />

        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-3">
            {cars.slice(0, 4).map((car) => (
              <button
                key={car.id}
                type="button"
                onClick={() => setSelected(car.id)}
                className={`w-full rounded-3xl border p-5 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${
                  selected === car.id ? 'border-sky-300/60 bg-sky-300/10 shadow-glow-sm' : 'border-white/10 bg-white/[0.04] hover:bg-white/[0.07]'
                }`}
              >
                <p className="font-display text-xl font-semibold text-white">{car.name}</p>
                <p className="mt-2 text-sm text-zinc-400">{car.tagline}</p>
              </button>
            ))}
          </div>

          <motion.div
            key={selectedCar.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-5 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">Selected model</p>
                <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.04em] text-white">{selectedCar.name}</h3>
              </div>
              <button
                onClick={() => onDetails(selectedCar)}
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                View Details
              </button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <CompareMetric label="Power" value={`${selectedCar.hp} hp`} />
              <CompareMetric label="0–100" value={selectedCar.acceleration} />
              <CompareMetric label="Top speed" value={selectedCar.topSpeed} />
              <CompareMetric label="Price" value={selectedCar.price} />
            </div>
            <p className="mt-6 leading-8 text-zinc-400">{selectedCar.description}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function CompareMetric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="font-display text-2xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-500">{label}</p>
    </div>
  )
}
