import { useEffect, useRef, useState } from 'react'

// Returns [ref, shown]. Without IntersectionObserver the content simply shows.
// State (not classList) so a re-render of the element cannot wipe the revealed state.
export function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(() => !('IntersectionObserver' in window))
  useEffect(() => {
    const el = ref.current
    if (!el || shown) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [shown])
  return [ref, shown]
}
