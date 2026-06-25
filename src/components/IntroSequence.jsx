import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Gauge, Power, Sparkles } from 'lucide-react'

export default function IntroSequence({ onComplete }) {
  const prefersReducedMotion = useReducedMotion()
  const [isLeaving, setIsLeaving] = useState(false)
  const hasCompleted = useRef(false)
  const leaveTimer = useRef(null)

  const completeIntro = useCallback(() => {
    if (hasCompleted.current) return

    hasCompleted.current = true
    setIsLeaving(true)

    leaveTimer.current = window.setTimeout(() => {
      onComplete?.()
    }, prefersReducedMotion ? 120 : 620)
  }, [onComplete, prefersReducedMotion])

  useEffect(() => {
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const autoCompleteTimer = window.setTimeout(
      completeIntro,
      prefersReducedMotion ? 900 : 3800
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

      if (leaveTimer.current) {
        window.clearTimeout(leaveTimer.current)
      }

      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [completeIntro, prefersReducedMotion])

  return (
    <motion.section
      role="dialog"
      aria-modal="true"
      aria-label="BMW concept intro animation"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1 }}
      transition={{ duration: prefersReducedMotion ? 0.12 : 0.55, ease: 'easeOut' }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#030306] text-white"
    >
      {!prefersReducedMotion && (
        <video
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover opacity-45"
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

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,0.22),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.35),rgba(0,0,0,0.94))]" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scaleX: 0.35 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 h-px w-[72vw] max-w-5xl origin-center -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
      />

      <div className="relative z-10 flex min-h-dvh flex-col items-center justify-center px-5 text-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-xs font-medium uppercase tracking-[0.26em] text-zinc-200 shadow-panel backdrop-blur-2xl"
        >
          <Sparkles size={14} className="text-sky-300" />
          Performance cinema
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, filter: 'blur(18px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.42em] text-sky-200/90">
            Bavaria Concept
          </p>

          <h1 className="font-display text-5xl font-semibold tracking-[-0.075em] text-white sm:text-7xl lg:text-8xl">
            Ignite the drive.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            A BMW-inspired product experience built around rendered motion, polished glass, and controlled performance storytelling.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-3"
        >
          <IntroChip icon={<Power size={16} />} label="Motion online" value="4 render loops" />
          <IntroChip icon={<Gauge size={16} />} label="Focus" value="BMW models" />
          <IntroChip icon={<Sparkles size={16} />} label="Style" value="Apple-grade UI" />
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.9 }}
          className="mt-10 w-full max-w-md"
        >
          <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-white to-blue-500"
              initial={{ width: '0%' }}
              animate={{ width: isLeaving ? '100%' : '100%' }}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 2.55,
                delay: prefersReducedMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={completeIntro}
              className="min-h-11 rounded-full border border-white/14 bg-white/[0.08] px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/14 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              Enter experience
            </button>

            <span className="hidden text-xs text-zinc-500 sm:inline">
              Esc to skip
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function IntroChip({ icon, label, value }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/35 p-4 text-left shadow-panel backdrop-blur-2xl">
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