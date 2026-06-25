import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

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
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
              {car.category} / {car.body}
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

        <div className="relative my-5 aspect-[16/9] overflow-hidden rounded-[1.6rem] border border-white/10 bg-black/30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.28),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="absolute inset-x-8 bottom-8 h-1 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-20 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl" style={{ background: car.color, opacity: 0.28 }} />
          <div className="absolute inset-x-10 top-[44%] h-16 rounded-[999px] border border-white/12 bg-black/45 shadow-[inset_0_0_40px_rgba(255,255,255,0.07)]" />
          <div className="absolute left-[18%] top-[48%] h-14 w-14 rounded-full border-[10px] border-zinc-700 bg-black shadow-[inset_0_0_20px_rgba(255,255,255,0.12)]" />
          <div className="absolute right-[18%] top-[48%] h-14 w-14 rounded-full border-[10px] border-zinc-700 bg-black shadow-[inset_0_0_20px_rgba(255,255,255,0.12)]" />
          <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-zinc-300 backdrop-blur-xl">{car.body}</div>
        </div>

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
    <div className="rounded-2xl bg-black/22 p-3">
      <p className="font-display text-lg font-semibold text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-zinc-500">{label}</p>
    </div>
  )
}
