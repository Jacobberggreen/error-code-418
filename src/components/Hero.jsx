import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { calm } from '../platform.js'

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    if (calm()) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-in', { y: 28, opacity: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out' })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section id="top" className="hero" ref={root}>
      <h1 className="hero-in" aria-label="Team Error code 418">
        <span className="hero-line">
          <em className="script" aria-hidden="true">Team</em>
          <span className="hero-name">Error code</span>{' '}
          <span className="hero-num">418</span>
        </span>
      </h1>
    </section>
  )
}
