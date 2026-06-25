import { motion } from 'framer-motion'
import { Armchair, Check, Monitor, Music, ShieldCheck, Sparkles } from 'lucide-react'
import { interiorFeatures } from '../data/cars.js'
import RenderVideo from './RenderVideo.jsx'
import SectionHeader from './SectionHeader.jsx'

const icons = [
  <Sparkles size={17} />,
  <Monitor size={17} />,
  <Armchair size={17} />,
  <ShieldCheck size={17} />,
  <Music size={17} />
]

export default function InteriorExperience() {
  return (
    <section id="interior" className="relative overflow-hidden px-4 py-24 md:px-8">
      <div className="absolute right-[-10rem] top-1/3 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute left-[-8rem] bottom-10 h-[26rem] w-[26rem] rounded-full bg-white/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Interior experience"
          title="The cabin should feel quiet before the drive starts."
          description="The interior section uses the BMW i7-style render loop as the anchor, then explains comfort through direct, readable feature cards."
        />

        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="video-frame-edge relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/[0.045] p-3 shadow-panel backdrop-blur-2xl"
          >
            <RenderVideo
              src="/media/render/interior-loop.mp4"
              title="BMW i7-inspired luxury cabin render"
              overlay="soft"
              className="aspect-[16/11] rounded-[2.3rem] lg:aspect-auto lg:h-full lg:min-h-[560px]"
              videoClassName="motion-safe:animate-kenburns-subtle"
            >
              <div className="flex h-full flex-col justify-between p-5 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="light-sweep w-max rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-200 backdrop-blur-xl">
                    i7 cabin render
                  </span>
                  <span className="w-max rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-zinc-200 backdrop-blur-xl">
                    Ambient cabin film
                  </span>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: 0.18 }}
                  className="max-w-md rounded-[1.7rem] border border-white/10 bg-black/48 p-5 backdrop-blur-2xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Interior loop
                  </p>
                  <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                    Light, glass, and silence.
                  </h3>
                </motion.div>
              </div>
            </RenderVideo>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-panel backdrop-blur-2xl md:p-8"
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent" />
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-sky-300/10 blur-2xl" />

            <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">
              Designed around calm interaction.
            </h3>

            <p className="mt-4 leading-8 text-zinc-400">
              Premium UX is not only visual polish. It is a clear hierarchy of what the driver sees, controls, and ignores.
            </p>

            <ul className="mt-8 grid gap-4">
              {interiorFeatures.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ x: 4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="premium-card-hover flex gap-3 rounded-2xl border border-white/10 bg-black/24 p-4 text-zinc-300"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-300/10 text-sky-300">
                    {icons[index] ?? <Check size={17} />}
                  </span>
                  <span className="pt-1 text-sm leading-6">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}