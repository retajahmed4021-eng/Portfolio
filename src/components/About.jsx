import { Check } from 'lucide-react'
import Section from './Section'
import { about } from '../data/content'

export default function About() {
  return (
    <Section id="about" title={about.title}>
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 leading-relaxed lg:col-span-3">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="rounded-2xl border border-accent/20 bg-plum/60 p-7 lg:col-span-2">
          <h3 className="font-display text-xl text-white">What I focus on</h3>
          <ul className="mt-5 space-y-3">
            {about.focus.map((f) => (
              <li key={f} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{f}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
