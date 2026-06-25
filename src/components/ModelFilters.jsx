import { motion } from 'framer-motion'
import { modelFilters } from '../data/cars.js'

export default function ModelFilters({ activeFilter, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {modelFilters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className="relative rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
        >
          {activeFilter === filter && <motion.span layoutId="activeFilter" className="absolute inset-0 rounded-full bg-white text-black" />}
          <span className={`relative z-10 ${activeFilter === filter ? 'text-black' : ''}`}>{filter}</span>
        </button>
      ))}
    </div>
  )
}
