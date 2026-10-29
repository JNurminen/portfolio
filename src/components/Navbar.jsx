import { useState } from 'react'
import { profile } from '../data.js'

const links = [
  { href: '#about', label: 'Minä' },
  { href: '#skills', label: 'Taidot' },
  { href: '#experience', label: 'Kokemus' },
  { href: '#education', label: 'Koulutus' },
  { href: '#projects', label: 'Projektit' },
  { href: '#contact', label: 'Yhteystiedot' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#" className="font-semibold text-white">
          {profile.name}
        </a>

        <button
          className="text-slate-300 sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Avaa valikko"
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>

        <ul className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-300 transition hover:text-emerald-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="flex flex-col gap-4 border-t border-slate-800 px-4 py-4 sm:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-emerald-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
