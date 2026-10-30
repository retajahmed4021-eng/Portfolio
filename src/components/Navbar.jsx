import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, person } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
       <h2 className="font-display text-2xl font-bold tracking-wide text-white">
            Retaj<span className="text-[#A879D9]">.</span>
          </h2>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className="text-sm transition hover:text-lavender">{n.label}</a></li>
          ))}
        </ul>
        <button className="md:hidden text-lavender" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-white/5 bg-ink px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block py-3 text-lavender">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
