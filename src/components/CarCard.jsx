import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import CarVisual from './CarVisual.jsx'

export default function CarCard({ car, onDetails }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-panel backdrop-blur-2xl"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${car.gradient} opacity-60 transition group-hover:opacity-100`} />
      <div className="absolute inset-0 bg-metal-sheen opacity-0 transition group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
              {car.category}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.03em] text-white">{car.name}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{car.tagline}</p>
          </div>
          <button
            type="button"
            onClick={() => onDetails(car)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            aria-label={`View details for ${car.name}`}
          >
            <ArrowUpRight size={18} />
          </button>
        </div>

        <CarVisual color={car.color} variant={car.body} className="my-4" />

        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-sm">
          <Spec label="Power" value={`${car.hp} hp`} />
          <Spec label="0–100" value={car.acceleration} />
          <Spec label="Speed" value={car.topSpeed} />
        </div>
      </div>
    </motion.article>
  )
}

function Spec({ label, value }) {
  return (
    <div className="rounded-2xl bg-black/20 p-3">
      <p className="font-display text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</p>
    </div>
  )
}
