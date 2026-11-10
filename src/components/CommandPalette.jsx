import { useMemo, useState } from 'react'
import { MagnifyingGlass, ArrowElbowDownLeft } from '@phosphor-icons/react'
import Modal from './Modal.jsx'
import { projects } from '../data/projects.js'
import { team } from '../data/team.js'

const sections = [['Work', '#work'], ['Team', '#team'], ['Top of page', '#top']]

// Every result is a plain action so keyboard and click share one path.
function Inner({ onPick }) {
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)

  const items = useMemo(() => {
    const all = [
      ...sections.map(([label, href]) => ({ group: 'Go to', label, run: { type: 'hash', href } })),
      ...projects.map((p) => ({ group: 'Projects', label: p.title, hint: p.kind, run: { type: 'project', item: p } })),
      ...team.map((m) => ({ group: 'People', label: m.name, hint: 'Profile', run: { type: 'member', item: m } })),
      ...team.map((m) => ({ group: 'Links', label: `${m.name} on GitHub`, run: { type: 'url', href: `https://github.com/${m.github}` } })),
      ...team.map((m) => ({ group: 'Links', label: `${m.name} on LinkedIn`, run: { type: 'url', href: `https://www.linkedin.com/in/${m.linkedin}` } })),
    ]
    const t = q.trim().toLowerCase()
    return t ? all.filter((i) => i.label.toLowerCase().includes(t) || i.group.toLowerCase().includes(t)) : all
  }, [q])

  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, items.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)) }
    else if (e.key === 'Enter' && items[idx]) { e.preventDefault(); onPick(items[idx].run) }
  }

  return (
    <div className="palette-body">
      <div className="palette-input">
        <MagnifyingGlass size={20} aria-hidden="true" />
        <label htmlFor="palette-q" className="sr">Search the site</label>
        <input
          id="palette-q"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={items[idx] ? `opt-${idx}` : undefined}
          value={q}
          onChange={(e) => { setQ(e.target.value); setIdx(0) }}
          onKeyDown={onKey}
          placeholder="Search projects, people, sections"
          autoComplete="off"
        />
      </div>
      <ul id="palette-list" role="listbox" className="palette-list">
        {items.map((it, i) => (
          <li key={`${it.group}-${it.label}`} id={`opt-${i}`} role="option" aria-selected={i === idx} className={i === idx ? 'on' : ''}
            onPointerMove={() => setIdx(i)} onClick={() => onPick(it.run)}>
            <span className="palette-group">{it.group}</span>
            <span className="palette-label">{it.label}</span>
            {it.hint && <span className="tag">{it.hint}</span>}
            {i === idx && <ArrowElbowDownLeft size={16} aria-hidden="true" />}
          </li>
        ))}
        {items.length === 0 && <li className="palette-empty">Nothing matches "{q}". Try a project name or a person.</li>}
      </ul>
    </div>
  )
}

export default function CommandPalette({ view, onClose, onPick }) {
  return (
    <Modal open={view.open} onClose={onClose} label="Search" className="palette" hideClose initialFocus="#palette-q">
      <Inner key={view.n} onPick={onPick} />
    </Modal>
  )
}
