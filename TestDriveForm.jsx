import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto mb-12 max-w-3xl ${align === 'left' ? 'text-left' : 'text-center'}`}
    >
      {eyebrow && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">{eyebrow}</p>}
      <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-zinc-400 md:text-lg">{description}</p>}
    </motion.div>
  )
}
