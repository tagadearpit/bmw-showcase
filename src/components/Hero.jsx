import { motion } from 'framer-motion'
import { ArrowRight, Gauge, Play, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import RenderVideo from './RenderVideo.jsx'

const headline = ['Precision', 'made', 'visible.']

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-dvh overflow-hidden">
      <RenderVideo
        src="/media/render/hero-loop.mp4"
        title="BMW performance car cinematic hero render"
        eager
        overlay="cinema"
        className="min-h-dvh"
        videoClassName="scale-[1.06] motion-safe:animate-kenburns-subtle"
      >
        <div className="absolute inset-0 z-[3]">
          <div className="absolute left-0 top-[22%] h-px w-full bg-gradient-to-r from-transparent via-sky-300/35 to-transparent" />
          <div className="absolute bottom-[20%] left-0 h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
          <div className="absolute right-[8%] top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-white/10 lg:block">
            <div className="motion-orbit absolute inset-8 rounded-full border border-sky-300/12" />
            <div className="motion-orbit-reverse absolute inset-20 rounded-full border border-white/8" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-dvh items-center px-4 pb-20 pt-32 md:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="light-sweep mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-sm text-zinc-200 shadow-panel backdrop-blur-2xl"
              >
                <Sparkles size={16} className="text-sky-300" />
                Video-first BMW-inspired portfolio concept
              </motion.div>

              <h1 className="font-display text-5xl font-semibold tracking-[-0.075em] text-white sm:text-6xl lg:text-8xl">
                {headline.map((word, index) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 42, filter: 'blur(16px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{
                      duration: 0.85,
                      delay: 0.08 + index * 0.13,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className="mr-4 inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.46 }}
                className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl"
              >
                A premium BMW-model showcase built around rendered motion, controlled glass surfaces, and Apple-style product storytelling.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.58 }}
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
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white backdrop-blur-2xl transition hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                >
                  <Play size={16} className="transition group-hover:scale-110" />
                  Configure Your Drive
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.82, duration: 0.8 }}
                className="mt-10 flex flex-wrap gap-3 text-sm text-zinc-300"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
                  <ShieldCheck size={16} className="text-sky-300" />
                  Portfolio concept — not affiliated with BMW AG
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative lg:mb-8"
            >
              <div className="absolute -inset-5 rounded-[2.5rem] bg-sky-500/10 blur-3xl" />
              <div className="relative grid gap-3 rounded-[2rem] border border-white/10 bg-black/30 p-4 shadow-panel backdrop-blur-2xl sm:grid-cols-3">
                <HeroMetric icon={<Zap size={17} />} value="617 hp" label="M peak output" delay={0} />
                <HeroMetric icon={<Gauge size={17} />} value="3.1s" label="0–100 km/h" delay={0.08} />
                <HeroMetric icon={<Sparkles size={17} />} value="625 km" label="EV range" delay={0.16} />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.button
          type="button"
          onClick={() => scrollTo('models')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500 transition hover:text-zinc-200 md:flex"
        >
          Scroll
          <span className="relative h-12 w-px overflow-hidden bg-white/10">
            <span className="absolute left-0 top-0 h-5 w-px animate-shimmer-line bg-sky-300" />
          </span>
        </motion.button>
      </RenderVideo>
    </section>
  )
}

function HeroMetric({ icon, value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.72 + delay, duration: 0.55 }}
      className="light-sweep rounded-3xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-2xl"
    >
      <div className="mb-3 inline-grid h-9 w-9 place-items-center rounded-full bg-sky-300/10 text-sky-300">
        {icon}
      </div>
      <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-400">{label}</p>
    </motion.div>
  )
}