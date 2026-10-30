export default function Section({ id, title, intro, children, tone = 'base' }) {
  return (
    <section id={id} className={`px-5 py-20 sm:py-28 ${tone === 'alt' ? 'bg-plum/50' : ''}`}>
      <div className="mx-auto max-w-6xl">
        {title && (
          <header className="mb-12 max-w-2xl">
            <h2 className="section-title">{title}</h2>
            {intro && <p className="mt-4 leading-relaxed">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
