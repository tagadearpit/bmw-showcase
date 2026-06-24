import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { interiorFeatures } from '../data/cars.js'
import SectionHeader from './SectionHeader.jsx'

export default function InteriorExperience() {
  return (
    <section id="interior" className="px-4 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Interior experience"
          title="The cabin should feel quiet before the engine starts."
          description="A premium vehicle website needs more than exterior images. The UX should explain comfort, systems, and material logic."
        />
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-panel backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_20%,rgba(14,165,233,0.26),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="absolute inset-x-8 top-20 h-36 rounded-full border border-sky-200/20 bg-black/30 shadow-[inset_0_0_80px_rgba(14,165,233,0.12)]" />
            <div className="absolute bottom-10 left-1/2 h-52 w-[82%] -translate-x-1/2 rounded-[3rem] border border-white/10 bg-gradient-to-br from-zinc-900 via-black to-slate-950 shadow-panel" />
            <div className="absolute bottom-24 left-1/2 h-20 w-[52%] -translate-x-1/2 rounded-[2rem] border border-white/10 bg-white/[0.06] backdrop-blur-xl" />
            <div className="absolute bottom-32 left-1/2 h-3 w-[45%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 via-sky-200 to-blue-500 shadow-glow" />
            <div className="absolute bottom-24 left-[24%] h-28 w-28 rounded-full border-[14px] border-zinc-700 bg-black shadow-[inset_0_0_30px_rgba(255,255,255,0.08)]" />
            <div className="absolute right-[18%] top-28 h-24 w-56 rounded-[2rem] border border-white/10 bg-sky-300/10 backdrop-blur-md" />
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.35em] text-sky-200">Ambient cabin render</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-7 shadow-panel backdrop-blur-2xl md:p-10"
          >
            <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">Designed around calm interaction.</h3>
            <p className="mt-4 leading-8 text-zinc-400">
              The interior section uses simple visuals and clear language so visitors understand what the experience feels like without overloading the page.
            </p>
            <ul className="mt-8 space-y-4">
              {interiorFeatures.map((feature) => (
                <li key={feature} className="flex gap-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-zinc-300">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-300/10 text-sky-300">
                    <Check size={15} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
