import Section from './Section'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" tone="alt" title="Technical skills" intro="The tools I use to build, and the ones I'm still learning.">
      <ul className="flex flex-wrap gap-3">
        {skills.map((s) => {
          const learning = s.status === 'Learning'
          return (
            <li key={s.name} className={`flex items-center gap-3 rounded-full border px-5 py-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(168,121,217,0.3)] ${learning ? 'border-dashed border-accent/50' : 'border-accent/30 bg-ink/40'}`}>
              <span className="font-semibold text-white">{s.name}</span>
              {learning && <span className="text-xs text-accent">Learning</span>}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
