import { ArrowUpRight, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import Modal from './Modal.jsx'
import { photoOf, initialsOf } from '../data/team.js'
import { projects } from '../data/projects.js'

export default function MemberDialog({ view, onClose, onOpenProject }) {
  const m = view.item
  const mine = m ? projects.filter((p) => p.people.includes(m.name)) : []
  return (
    <Modal open={view.open} onClose={onClose} label={m?.name} className="case member">
      {m && (
        <div className="case-body">
          <div className="case-art">
            {photoOf(m)
              ? <img className="member-big" src={photoOf(m)} alt={`Portrait of ${m.name}`} width="480" height="480" />
              : <span className="member-big monogram" aria-hidden="true">{initialsOf(m)}</span>}
          </div>
          <div className="case-copy">
            <header className="case-head">
              <p className="kicker">Team · {m.role || 'Umeå University'}</p>
              <h3 className="case-title">{m.name}</h3>
              <p className="case-summary">{m.bio || `${m.role ? `${m.role}, ` : ''}Umeå University.`}</p>
            </header>
            {mine.length > 0 && (
              <div>
                <h4 className="mini-h">Worked on</h4>
                <ul className="worked">
                  {mine.map((p) => (
                    <li key={p.id}>
                      <button type="button" className="link-row" onClick={() => onOpenProject(p)}>
                        <span>{p.title}</span><span className="link-year">{p.year}</span><ArrowUpRight size={20} aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <p className="case-links">
              <a className="btn ghost" href={`https://github.com/${m.github}`} target="_blank" rel="noreferrer">
                <GithubLogo size={18} aria-hidden="true" /> GitHub <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="btn ghost" href={`https://www.linkedin.com/in/${m.linkedin}`} target="_blank" rel="noreferrer">
                <LinkedinLogo size={18} aria-hidden="true" /> LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </p>
          </div>
        </div>
      )}
    </Modal>
  )
}
