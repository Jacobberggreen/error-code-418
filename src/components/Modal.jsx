import { useEffect, useRef } from 'react'
import { X } from '@phosphor-icons/react'
import { calm } from '../platform.js'

// Native <dialog>: focus trap, Escape and inert background come for free.
// Stays mounted so the exit animation can play; callers render the content only when they have some.
export default function Modal({ open, onClose, label, className = '', initialFocus, hideClose, children }) {
  const dlg = useRef(null)

  useEffect(() => {
    const d = dlg.current
    if (open) {
      if (!d.open) {
        d.showModal()
        if (initialFocus) d.querySelector(initialFocus)?.focus()
      }
      document.documentElement.classList.add('locked')
    } else if (d.open) {
      d.classList.add('closing')
      const t = setTimeout(() => {
        d.classList.remove('closing')
        d.close()
        if (!document.querySelector('dialog[open]')) document.documentElement.classList.remove('locked')
      }, calm() ? 0 : 220)
      return () => clearTimeout(t)
    }
  }, [open, initialFocus])

  return (
    <dialog
      ref={dlg}
      className={`modal ${className}`}
      aria-label={label}
      onCancel={(e) => { e.preventDefault(); onClose() }}
      onClick={(e) => { if (e.target === dlg.current) onClose() }}
    >
      {!hideClose && (
        <button type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close">
          <X size={20} aria-hidden="true" />
        </button>
      )}
      {children}
    </dialog>
  )
}
