import { ArrowUpRight } from '@phosphor-icons/react'
import { team, photoOf, initialsOf } from '../data/team.js'
import Reveal from './Reveal.jsx'

// One angled band for the whole team, one column per person.
export default function Team({ onOpen }) {
  return (
    <section id="team" className="team-section">
      <div className="section team-head">
        <Reveal as="h2" className="h2">Team</Reveal>
        <Reveal as="p" className="section-lead">Four students from Umeå University studying Interaction Technology and Design.</Reveal>
      </div>
      <Reveal className="band">
        <ul className="band-cols">
          {team.map((m) => (
            <li key={m.name}>
              <button type="button" className="col" onClick={(e) => onOpen(m, e.currentTarget)} aria-haspopup="dialog">
                <span className="col-photo">
                  <span className="ph">
                    {photoOf(m)
                      ? <img src={photoOf(m)} alt="" width="480" height="600" loading="lazy" />
                      : <span className="monogram">{initialsOf(m)}</span>}
                  </span>
                </span>
                <span className="col-name">{m.name}</span>
                <span className="col-go">View profile <ArrowUpRight size={18} aria-hidden="true" /></span>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
