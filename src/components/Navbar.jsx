import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useActiveSection } from '../hooks/useActiveSection.js'

const navItems = [
  { id: 'models', label: 'Models' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'performance', label: 'Performance' },
  { id: 'configure', label: 'Configure' },
  { id: 'test-drive', label: 'Test Drive' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['hero', ...navItems.map((item) => item.id)])

  const handleNavigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-panel backdrop-blur-2xl md:px-6">
        <button onClick={() => handleNavigate('hero')} className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/10 text-sm font-bold text-white shadow-glow-sm">
            BC
          </span>
          <span className="hidden text-left sm:block">
            <span className="block font-display text-sm font-semibold tracking-wide text-white">Bavaria Concept</span>
            <span className="block text-[10px] uppercase tracking-[0.24em] text-zinc-400">Portfolio Study</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 md:flex">
          {navItems.map((item) => {
            const selected = active === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className="relative rounded-full px-4 py-2 text-sm text-zinc-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              >
                {selected && <motion.span layoutId="activeNav" className="absolute inset-0 rounded-full bg-white/10" />}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </div>

        <button
          onClick={() => handleNavigate('test-drive')}
          className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:inline-flex"
        >
          Request Demo
        </button>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 max-w-7xl rounded-3xl border border-white/10 bg-black/70 p-3 shadow-panel backdrop-blur-2xl md:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigate(item.id)}
              className={`block w-full rounded-2xl px-4 py-3 text-left text-sm ${active === item.id ? 'bg-white/10 text-white' : 'text-zinc-300'}`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </header>
  )
}
