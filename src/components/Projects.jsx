import { ArrowUpRight, Github, ImageIcon } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/content'

function LinkButton({ href, children, icon: Icon, primary }) {
  if (!href) {
    return <span className="btn btn-disabled" aria-disabled="true" title="Link coming soon"><Icon className="h-4 w-4" />{children}</span>
  }
  return <a href={href} target="_blank" rel="noreferrer" className={`btn ${primary ? 'btn-primary' : 'btn-ghost'}`}><Icon className="h-4 w-4" />{children}</a>
}

function ProjectCard({ p }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-plum/60 transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(168,121,217,0.2)]">
      {p.image ? (
        <img src={p.image} alt={`${p.name} screenshot`} className="aspect-[16/10] w-full object-cover" />
      ) : (
        <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 border-b border-white/10 bg-[repeating-linear-gradient(135deg,rgba(168,121,217,0.08)_0_12px,transparent_12px_24px)] text-mute">
          <ImageIcon className="h-8 w-8 text-accent/70" />
          <span className="text-sm">Screenshot placeholder</span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-white">{p.name}</h3>
        
        <p className="mt-3 leading-relaxed">{p.text}</p>
        {p.features.length > 0 && (
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm marker:text-accent">
            {p.features.map((f) => <li key={f}>{f}</li>)}
          </ul>
        )}
        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tech.map((t) => <li key={t} className="rounded-full bg-accent/15 px-3 py-1 text-xs text-lavender">{t}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <LinkButton href={p.liveUrl} icon={ArrowUpRight} primary>Live Demo</LinkButton>
          <LinkButton href={p.githubUrl} icon={Github}>GitHub</LinkButton>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <Section id="projects" tone="alt" title="Featured Projects" intro="Screenshots and links are placeholders until the final assets are added.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
      </div>
    </Section>
  )
}
