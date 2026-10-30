import { person } from '../data/content'

const d = (ms) => ({ animationDelay: `${ms}ms` })

function CodeWindow() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-10 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />
      <div className="float relative overflow-hidden rounded-2xl border border-accent/30 bg-plum shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-lavender/50" />
          <span className="h-2.5 w-2.5 rounded-full bg-mute/40" />
          <span className="ml-3 text-xs text-mute">Hero.jsx</span>
        </div>
        <pre className="overflow-x-auto p-5 text-[13px] leading-7 text-mute"><code>{`function Hero() {
  return (
    <section className="responsive">
      <h1>Clean, usable,</h1>
      <p>and designed to fit
        every screen.</p>
      <Button>Let's talk</Button>
    </section>
  )
}`}</code></pre>
        <div className="grid grid-cols-3 gap-3 border-t border-white/10 p-5" aria-hidden="true">
          <div className="h-12 rounded-lg bg-gradient-to-br from-accent to-accent/20" />
          <div className="h-12 rounded-lg bg-lavender/20" />
          <div className="h-12 rounded-lg bg-ink/60" />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="hero-in text-lg text-lavender" style={d(0)}>{person.name}</p>
          <h1 className="hero-in mt-4 font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl" style={d(120)}>{person.heading}</h1>
          <p className="hero-in mt-5 text-xl text-accent" style={d(240)}>{person.title}.</p>
          <p className="hero-in mt-5 max-w-xl leading-relaxed" style={d(360)}>{person.intro}</p>
          <div className="hero-in mt-9 flex flex-wrap gap-4" style={d(480)}>
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
        </div>
        <div className="hero-in" style={d(400)}><CodeWindow /></div>
      </div>
    </section>
  )
}
