import { useCallback, useEffect, useRef, useState } from 'react'
import Hero from './components/Hero.jsx'
import Work from './components/Work.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'
import CaseStudy from './components/CaseStudy.jsx'
import MemberDialog from './components/MemberDialog.jsx'
import CommandPalette from './components/CommandPalette.jsx'

// `item` stays set after closing so a dialog can play its exit animation; `n` gives every open a fresh state.
const closed = { item: null, open: false, n: 0 }
const opened = (item) => (v) => ({ item, open: true, n: v.n + 1 })

export default function App() {
  const [caseView, setCase] = useState(closed)
  const [memberView, setMember] = useState(closed)
  const [palette, setPalette] = useState(closed)
  const from = useRef(null)

  // Remember what had focus so closing a dialog puts it back there.
  const remember = (el) => {
    const a = el || document.activeElement
    if (a && !a.closest('dialog')) from.current = a
  }
  const close = (set) => () => {
    set((v) => ({ ...v, open: false }))
    from.current?.focus?.()
  }

  const openProject = useCallback((p, el) => { remember(el); setCase(opened(p)) }, [])
  const openMember = useCallback((m, el) => { remember(el); setMember(opened(m)) }, [])
  const openPalette = useCallback(() => { remember(); setPalette(opened(null)) }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        openPalette()
      }
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [openPalette])

  const pick = (run) => {
    setPalette((v) => ({ ...v, open: false }))
    if (run.type === 'hash') {
      from.current = null
      document.querySelector(run.href)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    } else if (run.type === 'project') setCase(opened(run.item))
    else if (run.type === 'member') setMember(opened(run.item))
    else if (run.type === 'url') window.open(run.href, '_blank', 'noreferrer')
  }

  return (
    <>
      <main>
        <Hero />
        <Work onOpen={openProject} />
        <Team onOpen={openMember} />
      </main>
      <Footer />
      <CaseStudy view={caseView} onClose={close(setCase)} />
      <MemberDialog view={memberView} onClose={close(setMember)} onOpenProject={(p) => { setMember((v) => ({ ...v, open: false })); setCase(opened(p)) }} />
      <CommandPalette view={palette} onClose={close(setPalette)} onPick={pick} />
    </>
  )
}
