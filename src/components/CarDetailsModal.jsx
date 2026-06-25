import { AnimatePresence, motion } from 'framer-motion'
import { X, Gauge, Zap, IndianRupee, Route } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function CarDetailsModal({ car, onClose, onConfigure, onTestDrive }) {
  const closeRef = useRef(null)

  useEffect(() => {
    if (!car) return undefined
    const previousActive = document.activeElement
    closeRef.current?.focus()
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
      previousActive?.focus?.()
    }
  }, [car, onClose])

  return (
    <AnimatePresence>
      {car && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="car-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="absolute inset-0 bg-black/82 backdrop-blur-xl" aria-label="Close car details" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-canvas-panel p-5 shadow-panel md:p-8"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              aria-label="Close details modal"
            >
              <X size={18} />
            </button>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className={`relative min-h-[430px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${car.gradient} p-6 md:p-8`}>
                <div className="absolute inset-0 bg-metal-sheen" />
                <div className="absolute inset-x-8 top-8 h-32 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-40 w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: car.color, opacity: 0.24 }} />
                <div className="absolute inset-x-10 bottom-20 h-1 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent" />
                <div className="absolute bottom-28 left-1/2 h-32 w-[78%] -translate-x-1/2 rounded-[999px] border border-white/10 bg-black/45 shadow-[inset_0_0_70px_rgba(255,255,255,0.08)]" />
                <div className="absolute bottom-[7.7rem] left-[20%] h-20 w-20 rounded-full border-[14px] border-zinc-700 bg-black shadow-[inset_0_0_24px_rgba(255,255,255,0.12)]" />
                <div className="absolute bottom-[7.7rem] right-[20%] h-20 w-20 rounded-full border-[14px] border-zinc-700 bg-black shadow-[inset_0_0_24px_rgba(255,255,255,0.12)]" />
                <div className="relative z-10 flex h-full min-h-[360px] flex-col justify-between">
                  <span className="w-max rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200 backdrop-blur-xl">
                    {car.category} / {car.body}
                  </span>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/42 p-5 backdrop-blur-2xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Model preview</p>
                    <p className="mt-2 font-display text-3xl font-semibold tracking-[-0.04em] text-white">{car.name}</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300">{car.category} / {car.body}</p>
                <h2 id="car-modal-title" className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                  {car.name}
                </h2>
                <p className="mt-5 leading-8 text-zinc-400">{car.description}</p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <ModalSpec icon={<Zap size={17} />} label="Power" value={`${car.hp} hp`} />
                  <ModalSpec icon={<Gauge size={17} />} label="0–100" value={car.acceleration} />
                  <ModalSpec icon={<Route size={17} />} label="Range" value={car.range} />
                  <ModalSpec icon={<IndianRupee size={17} />} label="Price" value={car.price} />
                </div>

                <div className="mt-7">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-300">Key features</h3>
                  <ul className="mt-4 space-y-3 text-sm text-zinc-400">
                    {car.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => onConfigure(car)}
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    Configure Model
                  </button>
                  <button
                    type="button"
                    onClick={() => onTestDrive(car)}
                    className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    Demo Test Drive Form
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function ModalSpec({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-3 text-sky-300">{icon}</div>
      <p className="font-display text-xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-500">{label}</p>
    </div>
  )
}
