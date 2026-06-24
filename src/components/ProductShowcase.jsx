import { motion } from 'framer-motion'
import { BrainCircuit, BatteryCharging, Shield, Sparkles } from 'lucide-react'
import { cars } from '../data/cars.js'
import CarVisual from './CarVisual.jsx'
import SectionHeader from './SectionHeader.jsx'

const pillars = [
  { icon: <BatteryCharging size={20} />, title: 'Electric composure', copy: 'Fast charging, calm torque delivery, and route-aware range logic.' },
  { icon: <BrainCircuit size={20} />, title: 'Digital intelligence', copy: 'A cockpit surface that reduces friction instead of adding screens for show.' },
  { icon: <Shield size={20} />, title: 'Safety systems', copy: 'Driver assistance, structural confidence, and low-distraction interaction patterns.' },
  { icon: <Sparkles size={20} />, title: 'Material restraint', copy: 'Glass, metal, leather, and light used with discipline rather than visual noise.' }
]

export default function ProductShowcase() {
  const flagship = cars[0]

  return (
    <section id="showcase" className="relative overflow-hidden px-4 py-28 md:px-8">
      <div className="absolute inset-x-0 top-1/3 mx-auto h-72 max-w-5xl rounded-full bg-blue-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Product story"
          title="A launch-page rhythm, built for scroll."
          description="The design uses large negative space, focused copy, and cinematic surfaces. UI transitions stay subtle while visual depth comes from light, reflection, and scale."
        />

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-panel backdrop-blur-2xl md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.32),transparent_42%)]" />
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <CarVisual color={flagship.color} variant={flagship.body} className="max-w-5xl" />
          </motion.div>
          <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-xl"
              >
                <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-full bg-sky-300/10 text-sky-300">{pillar.icon}</div>
                <h3 className="font-display text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{pillar.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
