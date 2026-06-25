import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Gauge, Power, ShieldCheck, Sparkles } from 'lucide-react'

const phases = [
  { label: 'Wake systems', value: '00' },
  { label: 'Calibrate surface', value: '01' },
  { label: 'Engage motion', value: '02' },
  { label: 'Reveal drive', value: '03' }
]

export default function IntroSequence({ onComplete }) {
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)
  const hasCompleted = useRef(false)
  const leaveTimer = useRef(null)

  const completeIntro = useCallback(() => {
    if (hasCompleted.current) return

    hasCompleted.current = true
    setIsLeaving(true)

    leaveTimer.current = window.setTimeout(() => {
      onComplete?.()
    }, prefersReducedMotion ? 120 : 900)
  }, [onComplete, prefersReducedMotion])

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const phaseTimers = prefersReducedMotion
      ? []
      : [
          window.setTimeout(() => setPhase(1), 900),
          window.setTimeout(() => setPhase(2), 2050),
          window.setTimeout(() => setPhase(3), 3350)
        ]

    const autoCompleteTimer = window.setTimeout(
      completeIntro,
      prefersReducedMotion ? 900 : 5350
    )

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        completeIntro()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.documentElement.style.overflow = previousOverflow
      window.clearTimeout(autoCompleteTimer)
      phaseTimers.forEach(window.clearTimeout)

      if (leaveTimer.current) {
        window.clearTimeout(leaveTimer.current)
      }

      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [completeIntro, prefersReducedMotion])

  return (
    <AnimatePresence>
      {!isLeaving && (
        <motion.section
          role="dialog"
          aria-modal="true"
          aria-label="BMW concept cinematic intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.025, filter: 'blur(10px)' }}
          transition={{ duration: prefersReducedMotion ? 0.12 : 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#020204] text-white"
        >
          {!prefersReducedMotion && (
            <video
              className="absolute inset-0 h-full w-full scale-[1.08] object-cover opacity-40 motion-safe:animate-kenburns-subtle"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src="/media/render/hero-loop.mp4" type="video/mp4" />
            </video>
          )}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(14,165,233,0.24),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.10),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.54),rgba(0,0,0,0.96))]" />
          <div className="cinema-noise absolute inset-0 opacity-[0.08]" />
          <div className="intro-scanline absolute inset-0 opacity-35" />

          {!prefersReducedMotion && (
            <>
              <motion.div
                aria-hidden="true"
                initial={{ x: 0 }}
                animate={{ x: phase >= 3 ? '-108%' : 0 }}
                transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-y-0 left-0 z-20 w-1/2 border-r border-white/10 bg-[linear-gradient(90deg,#020204_0%,#05070d_70%,rgba(14,165,233,0.12)_100%)]"
              />
              <motion.div
                aria-hidden="true"
                initial={{ x: 0 }}
                animate={{ x: phase >= 3 ? '108%' : 0 }}
                transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-y-0 right-0 z-20 w-1/2 border-l border-white/10 bg-[linear-gradient(270deg,#020204_0%,#05070d_70%,rgba(14,165,233,0.12)_100%)]"
              />
            </>
          )}

          <div className="relative z-30 flex min-h-dvh items-center justify-center px-5">
            <div className="grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:block"
              >
                <div className="relative aspect-square max-w-[440px]">
                  <div className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.025] shadow-[0_0_120px_rgba(14,165,233,0.18)] backdrop-blur-sm" />
                  <div className="motion-orbit absolute inset-8 rounded-full border border-sky-300/20" />
                  <div className="motion-orbit-reverse absolute inset-16 rounded-full border border-white/10" />
                  <div className="absolute inset-24 rounded-full border border-white/10 bg-black/45 shadow-panel backdrop-blur-2xl" />

                  <div className="absolute inset-0 grid place-items-center">
                    <motion.div
                      animate={prefersReducedMotion ? false : { scale: [1, 1.04, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                      className="grid h-32 w-32 place-items-center rounded-full border border-sky-300/30 bg-sky-300/10 text-sky-200 shadow-[0_0_70px_rgba(14,165,233,0.35)]"
                    >
                      <Power size={38} />
                    </motion.div>
                  </div>

                  <div className="absolute bottom-10 left-1/2 w-64 -translate-x-1/2 rounded-3xl border border-white/10 bg-black/45 p-4 text-center backdrop-blur-2xl">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-zinc-500">
                      Sequence
                    </p>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={phase}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.28 }}
                        className="mt-2 text-sm font-semibold text-white"
                      >
                        {phases[phase]?.label}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              <div className="text-center lg:text-left">
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65 }}
                  className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200 shadow-panel backdrop-blur-2xl lg:mx-0"
                >
                  <Sparkles size={14} className="text-sky-300" />
                  Cinematic model study
                </motion.div>

                <motion.p
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.15 }}
                  className="text-xs font-semibold uppercase tracking-[0.46em] text-sky-200/90"
                >
                  Bavaria Concept
                </motion.p>

                <motion.h1
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 26, filter: 'blur(16px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.05, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 max-w-4xl font-display text-6xl font-semibold tracking-[-0.085em] text-white sm:text-7xl lg:text-8xl xl:text-9xl"
                >
                  Motion before metal.
                </motion.h1>

                <motion.p
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.55 }}
                  className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg lg:mx-0"
                >
                  A BMW-inspired experience where the first impression is not a static screen, but an ignition sequence: light, glass, surface, then speed.
                </motion.p>

                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="mt-9 grid gap-3 sm:grid-cols-3"
                >
                  <IntroChip icon={<Gauge size={16} />} label="Opening" value="Ignition reveal" />
                  <IntroChip icon={<ShieldCheck size={16} />} label="Concept" value="Not official BMW" />
                  <IntroChip icon={<Sparkles size={16} />} label="Motion" value="4 render loops" />
                </motion.div>

                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 1.05 }}
                  className="mt-10"
                >
                  <div className="mx-auto h-[3px] max-w-md overflow-hidden rounded-full bg-white/10 lg:mx-0">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-white to-blue-500"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{
                        duration: prefersReducedMotion ? 0.2 : 4.1,
                        delay: prefersReducedMotion ? 0 : 0.55,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    />
                  </div>

                  <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                    <button
                      type="button"
                      onClick={completeIntro}
                      className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                      Enter experience
                      <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                    </button>

                    <button
                      type="button"
                      onClick={completeIntro}
                      className="min-h-11 rounded-full border border-white/14 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
                    >
                      Skip intro
                    </button>

                    <span className="hidden pt-3 text-xs text-zinc-500 sm:inline">
                      Esc also skips
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

function IntroChip({ icon, label, value }) {
  return (
    <div className="light-sweep rounded-3xl border border-white/10 bg-black/35 p-4 text-left shadow-panel backdrop-blur-2xl">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-sky-300/20 bg-sky-300/10 text-sky-200">
        {icon}
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  )
}