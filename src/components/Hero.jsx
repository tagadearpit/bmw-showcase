import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import CarVisual from './CarVisual.jsx'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 md:px-8">
      <div className="absolute inset-x-0 top-24 mx-auto h-[36rem] max-w-5xl rounded-full bg-sky-500/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl"
          >
            <Sparkles size={16} className="text-sky-300" />
            Apple-style automotive portfolio concept
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl"
          >
            Engineered silence. Released as motion.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
          >
            A premium German luxury-inspired showcase for electric, performance, and executive-class vehicles. Built for portfolio presentation, not official brand use.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              onClick={() => scrollTo('models')}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Explore Models
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('configure')}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Configure Concept
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-400"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <ShieldCheck size={16} className="text-sky-300" />
              Concept only — not affiliated with BMW AG
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute inset-x-6 top-10 h-52 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel backdrop-blur-2xl md:p-10">
            <div className="absolute inset-0 bg-metal-sheen opacity-80" />
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
            <CarVisual color="#1a66ff" variant="sedan" className="relative z-10 animate-float" />
            <div className="relative z-10 mt-6 grid grid-cols-3 gap-3">
              {[
                ['617 hp', 'Peak output'],
                ['3.1s', '0–100 km/h'],
                ['625 km', 'Range']
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl">
                  <p className="font-display text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
