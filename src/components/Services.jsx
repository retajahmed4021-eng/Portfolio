import { Monitor, LayoutTemplate, Figma, Wrench, Atom } from 'lucide-react'
import Section from './Section'
import { services } from '../data/content'

const icons = { responsive: Monitor, landing: LayoutTemplate, figma: Figma, fix: Wrench, react: Atom }

export default function Services() {
  return (
    <Section id="services" title="What I Can Do For You">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((s, i) => {
          const Icon = icons[s.icon]
          // 3 on the first row, 2 wider cards on the second
          const span = i < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
          return (
            <article key={s.title} className={`group rounded-2xl border border-white/10 bg-gradient-to-b from-plum to-plum/40 p-7 transition duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_rgba(168,121,217,0.18)] ${span}`}>
              <Icon className="h-7 w-7 text-accent transition group-hover:scale-110" />
              <h3 className="mt-5 font-display text-xl text-white">{s.title}</h3>
              <p className="mt-3 leading-relaxed">{s.text}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}
