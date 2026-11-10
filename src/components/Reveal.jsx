import { useReveal } from '../hooks/useReveal.js'

export default function Reveal({ as = 'div', delay = 0, className = '', children, ...rest }) {
  const Tag = as
  const [ref, shown] = useReveal()
  return (
    <Tag ref={ref} className={`reveal${shown ? ' in' : ''} ${className}`} style={{ '--d': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
