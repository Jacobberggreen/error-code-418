export const isMac = /Mac|iPhone|iPad/.test(navigator.platform)
export const modKey = isMac ? '⌘' : 'Ctrl'
export const calm = () => matchMedia('(prefers-reduced-motion: reduce)').matches
