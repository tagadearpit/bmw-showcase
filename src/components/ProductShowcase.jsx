import { motion } from 'framer-motion'
import { BatteryCharging, BrainCircuit, Shield, Sparkles } from 'lucide-react'
import RenderVideo from './RenderVideo.jsx'
import SectionHeader from './SectionHeader.jsx'

const pillars = [
  {
    icon: <BatteryCharging size={20} />,
    title: 'Electric composure',
    copy: 'Fast charging, calm torque delivery, and route-aware range logic for daily confidence.'
  },
  {
    icon: <BrainCircuit size={20} />,
    title: 'Digital intelligence',
    copy: 'A cockpit surface that reduces friction instead of adding screens for show.'
  },
  {
    icon: <Shield size={20} />,
    title: 'Safety systems',
    copy: 'Driver assistance, structural confidence, and low-distraction interaction patterns.'
  },
  {
    icon: <Sparkles size={20} />,
    title: 'Material restraint',
    copy: 'Glass, metal, leather, and light used with discipline rather than visual noise.'
  }
]

export default function ProductShowcase() {
  return (
    <section id="showcase" className="relative overflow-hidden px-4 py-28 md:px-8">
      <div className="absolute inset-x-0 top-1/3 mx-auto h-72 max-w-5xl rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Rendered product film"
          title="A launch-page rhythm built around real motion."
          description="The main reveal is not a static illustration. It uses a local rendered MP4 loop inside a restrained glass and chrome frame."
        />

        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 44, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="video-frame-edge relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/[0.045] p-3 shadow-panel backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-metal-sheen opacity-80" />
            <div className="absolute -inset-20 bg-sky-500/10 blur-3xl" />

            <RenderVideo
              src="/media/render/showcase-loop.mp4"
              title="BMW M8 Competition studio showcase render"
              overlay="card"
              className="aspect-[16/10] rounded-[2.25rem]"
              videoClassName="motion-safe:animate-kenburns-subtle"
            >
              <div className="flex h-full flex-col justify-between p-5 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="light-sweep rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sky-200 backdrop-blur-xl">
                    M8 Competition
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl">
                    Studio render loop
                  </span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                  className="max-w-lg rounded-[1.7rem] border border-white/10 bg-black/44 p-5 backdrop-blur-2xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Showcase loop
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                    Light reveals the surface.
                  </h3>
                </motion.div>
              </div>
            </RenderVideo>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {pillars.map((pillar, index) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="premium-card-hover rounded-3xl border border-white/10 bg-white/[0.045] p-5 shadow-panel backdrop-blur-2xl"
              >
                <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-full bg-sky-300/10 text-sky-300">
                  {pillar.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{pillar.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}