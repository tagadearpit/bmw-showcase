import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { stats } from '../data/cars.js'
import { useCountUp } from '../hooks/useCountUp.js'
import SectionHeader from './SectionHeader.jsx'

export default function PerformanceStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-120px' })

  return (
    <section id="performance" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Measured emotion"
          title="Numbers that support the experience."
          description="Performance is presented with minimal hierarchy: large, readable, and restrained."
        />
        <div ref={ref} className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} inView={inView} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, inView, index }) {
  const value = useCountUp(stat.value, inView)
  const display = stat.decimals ? value.toFixed(stat.decimals) : Math.round(value).toLocaleString('en-IN')

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-panel backdrop-blur-2xl"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/70 to-transparent" />
      <p className="font-display text-5xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
        {display}
        <span className="text-2xl text-sky-200">{stat.suffix}</span>
      </p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{stat.label}</p>
    </motion.div>
  )
}
