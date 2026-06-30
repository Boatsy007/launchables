import type { ReactNode } from 'react'

interface GlassPanelProps {
  children: ReactNode
  className?: string
  dark?: boolean
}

export default function GlassPanel({ children, className = '', dark = false }: GlassPanelProps) {
  return (
    <div
      className={[
        dark ? 'glass-dark' : 'glass',
        'rounded-2xl',
        'p-6',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
