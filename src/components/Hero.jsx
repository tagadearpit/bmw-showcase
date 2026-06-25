import { motion } from 'framer-motion'
import { ArrowRight, Play, ShieldCheck, Sparkles } from 'lucide-react'
import RenderVideo from './RenderVideo.jsx'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-dvh overflow-hidden">
      <RenderVideo
        src="/media/render/hero-loop.mp4"
        title="BMW performance car cinematic hero render"
        eager
        overlay="hero"
        className="min-h-dvh"
        videoClassName="scale-[1.02]"
      >
        <div className="flex min-h-dvh items-center px-4 pb-20 pt-32 md:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm text-zinc-200 shadow-panel backdrop-blur-2xl"
              >
                <Sparkles size={16} className="text-sky-300" />
                Video-first BMW-inspired portfolio concept
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl lg:text-8xl"
              >
                Precision made visible.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18 }}
                className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
              >
                A premium BMW-model showcase built around rendered motion, controlled glass surfaces, and Apple-style product storytelling.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => scrollTo('models')}
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  Explore Models
                  <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo('configure')}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white backdrop-blur-2xl transition hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <Play size={16} />
                  Configure Your Drive
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.52, duration: 0.8 }}
                className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-300"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <ShieldCheck size={16} className="text-sky-300" />
                  Portfolio concept — not affiliated with BMW AG
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-3 rounded-[2rem] border border-white/10 bg-black/28 p-4 shadow-panel backdrop-blur-2xl sm:grid-cols-3 lg:mb-8"
            >
              <HeroMetric value="617 hp" label="M peak output" />
              <HeroMetric value="3.1s" label="0–100 km/h" />
              <HeroMetric value="625 km" label="EV range" />
            </motion.div>
          </div>
        </div>
      </RenderVideo>
    </section>
  )
}

function HeroMetric({ value, label }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-2xl">
      <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">{label}</p>
    </div>
  )
}
