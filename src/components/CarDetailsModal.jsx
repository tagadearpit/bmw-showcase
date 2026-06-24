import { AnimatePresence, motion } from 'framer-motion'
import { X, Gauge, Zap, IndianRupee, Route } from 'lucide-react'
import { useEffect, useRef } from 'react'
import CarVisual from './CarVisual.jsx'

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
          <button className="absolute inset-0 bg-black/80 backdrop-blur-xl" aria-label="Close car details" onClick={onClose} />
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

            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className={`relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-gradient-to-br ${car.gradient} p-4 md:p-8`}>
                <div className="absolute inset-0 bg-metal-sheen" />
                <CarVisual color={car.color} variant={car.body} className="relative z-10" />
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
                    onClick={() => onConfigure(car)}
                    className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                  >
                    Configure Model
                  </button>
                  <button
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
