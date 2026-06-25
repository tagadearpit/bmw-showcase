import { Github, Linkedin, Mail } from 'lucide-react'

const links = [
  { label: 'Models', href: '#models' },
  { label: 'Showcase Film', href: '#showcase' },
  { label: 'Interior', href: '#interior' },
  { label: 'Configure', href: '#configure' },
  { label: 'Compare', href: '#compare' },
  { label: 'Demo Form', href: '#test-drive' }
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/10 font-bold text-white">BC</span>
            <div>
              <p className="font-display text-lg font-semibold text-white">Bavaria Concept</p>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">BMW-inspired video portfolio</p>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
            BMW-inspired concept website for portfolio and educational purposes. Not affiliated with BMW AG. Model names, specifications, prices, and UI content are used as concept references and should be verified before any commercial use.
          </p>
        </div>

        <div className="md:text-right">
          <div className="flex flex-wrap gap-3 md:justify-end">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-5 flex gap-3 md:justify-end">
            <a aria-label="Open Arpit Tagade GitHub profile" href="https://github.com/tagadearpit" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
              <Github size={18} />
            </a>
            <a aria-label="Open Arpit Tagade LinkedIn profile" href="https://www.linkedin.com/in/tagadearpit" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
              <Linkedin size={18} />
            </a>
            <a aria-label="Email Arpit Tagade" href="mailto:arpittagade5@gmail.com" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
