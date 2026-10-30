import { Mail, Linkedin, Github, Briefcase } from 'lucide-react'
import Section from './Section'
import { contact } from '../data/content'

const icons = { mail: Mail, linkedin: Linkedin, github: Github, upwork: Briefcase }

export default function Contact() {
  return (
    <Section id="contact" title={contact.title} intro={contact.text}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {contact.links.map((l) => {
          const Icon = icons[l.icon]
          const body = (
            <>
              <Icon className="h-6 w-6 shrink-0 text-accent" />
              <span className="min-w-0">
                <span className="block font-semibold text-white">{l.label}</span>
                <span className={`block truncate text-sm ${l.value ? '' : 'italic text-mute/60'}`}>{l.value || l.placeholder}</span>
              </span>
            </>
          )
          const cls = 'flex items-center gap-4 rounded-2xl border border-white/10 bg-plum/60 p-5 transition duration-300'
          return (
            <li key={l.label}>
              {l.href ? (
                <a href={l.href} target="_blank" rel="noreferrer" className={`${cls} hover:border-accent/50 hover:shadow-[0_0_32px_rgba(168,121,217,0.2)]`}>{body}</a>
              ) : (
                <div className={`${cls} border-dashed`}>{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
