import { useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import { projects, kinds } from '../data/projects.js'
import Reveal from './Reveal.jsx'

// An index, not a gallery: one typographic row per project with a small thumbnail. Hover fills the row in coral.
function Row({ p, n, onOpen }) {
  return (
    <button type="button" className="work-row" onClick={(e) => onOpen(p, e.currentTarget)} aria-haspopup="dialog">
      <span className="work-num" aria-hidden="true">{String(n + 1).padStart(2, '0')}</span>
      <span className="work-main">
        <span className="work-title">{p.title}</span>
        <span className="work-tagline">{p.tagline}</span>
      </span>
      <span className="work-meta">
        <span>{p.kind}</span>
        <span>{p.year}</span>
      </span>
      <span className="work-thumb"><img src={`./images/${p.cover}`} alt="" loading="lazy" /></span>
      <span className="work-open" aria-label="Open case"><ArrowUpRight size={32} aria-hidden="true" /></span>
    </button>
  )
}

export default function Work({ onOpen }) {
  const [kind, setKind] = useState('All')
  const list = projects.filter((p) => kind === 'All' || p.kind === kind)
  return (
    <section id="work" className="work-section">
      <div className="section work-head">
        <Reveal as="h2" className="h2">Work</Reveal>
        <Reveal as="p" className="section-lead">Everything we have built together. Open a project for the story, the screens and the demo film.</Reveal>
        {kinds.length > 1 && (
          <div className="filters" role="group" aria-label="Filter projects">
            {['All', ...kinds].map((k) => (
              <button key={k} type="button" className="tab" aria-pressed={kind === k} onClick={() => setKind(k)}>{k}</button>
            ))}
          </div>
        )}
      </div>
      <ul className="work-list">
        {list.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 80}>
            <Row p={p} n={i} onOpen={onOpen} />
          </Reveal>
        ))}
      </ul>
      {kind === 'All' && <p className="work-more">More to come. New projects land here when completed.</p>}
    </section>
  )
}
