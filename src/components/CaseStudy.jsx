import { useState } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react'
import Modal from './Modal.jsx'

function Body({ p }) {
  const [active, setActive] = useState(0)
  const g = p.gallery[active]

  const onTabKey = (e) => {
    const n = p.gallery.length
    const next = { ArrowRight: (active + 1) % n, ArrowLeft: (active - 1 + n) % n, Home: 0, End: n - 1 }[e.key]
    if (next === undefined) return
    e.preventDefault()
    setActive(next)
    e.currentTarget.querySelector(`#tab-${p.gallery[next].id}`)?.focus()
  }

  return (
    <div className="case-body">
      <div className="case-art">
        <div className="case-figure">
        <div key={g.id} className="case-media" role="tabpanel" id={`panel-${g.id}`} aria-labelledby={`tab-${g.id}`}>
          {g.video
            ? <video controls preload="metadata" poster={`./images/${g.poster}`} src={`./images/${g.video}`} />
            : <><img className="case-backdrop" src={`./images/${g.image}`} alt="" aria-hidden="true" /><img src={`./images/${g.image}`} alt={g.alt} /></>}
        </div>
        <div className="tabs" role="tablist" aria-label={`${p.title} walkthrough`} onKeyDown={onTabKey}>
          {p.gallery.map((s, i) => (
            <button key={s.id} id={`tab-${s.id}`} type="button" role="tab" aria-selected={i === active} aria-controls={`panel-${s.id}`} tabIndex={i === active ? 0 : -1} className="tab" onClick={() => setActive(i)}>
              {s.label}
            </button>
          ))}
        </div>
        </div>
      </div>

      <div className="case-copy">
        <header className="case-head">
          <p className="kicker">{p.kind} · {p.year}</p>
          <h3 className="case-title">{p.title}</h3>
          <p className="case-summary">{p.summary}</p>
        </header>

        <div key={`c-${g.id}`} className="case-caption">
          <h4>{g.title}</h4>
          <p>{g.text}</p>
        </div>

        <dl className="facts">
          {p.facts.map((f) => (
            <div key={f.label}><dt>{f.value}</dt><dd>{f.label}</dd></div>
          ))}
        </dl>

        <div className="story">
          {p.story.map((s) => (
            <section key={s.heading}>
              <h4>{s.heading}</h4>
              <p>{s.body}</p>
            </section>
          ))}
        </div>

        <p className="case-links">
          {p.links.map((l) => (
            <a key={l.href} className="btn ghost" href={l.href} target="_blank" rel="noreferrer">{l.label} <ArrowUpRight size={18} aria-hidden="true" /></a>
          ))}
        </p>
      </div>
    </div>
  )
}

export default function CaseStudy({ view, onClose }) {
  return (
    <Modal open={view.open} onClose={onClose} label={view.item ? `${view.item.title} case` : undefined} className="case">
      {/* key: a fresh tab state for every open */}
      {view.item && <Body key={view.n} p={view.item} />}
    </Modal>
  )
}
