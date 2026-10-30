import { person, nav } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-sm sm:flex-row">
        <p>© {new Date().getFullYear()} {person.name}. {person.title}.</p>
        <ul className="flex gap-6">
          {nav.map((n) => <li key={n.href}><a href={n.href} className="transition hover:text-lavender">{n.label}</a></li>)}
        </ul>
      </div>
    </footer>
  )
}
