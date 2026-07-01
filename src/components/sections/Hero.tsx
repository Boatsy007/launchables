import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ y: '102%', opacity: 0 }}
        animate={{ y: '0%', opacity: 1 }}
        transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100svh',
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 'clamp(80px, 12vw, 140px) clamp(20px, 4vw, 48px) clamp(48px, 6vw, 72px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.35,
        pointerEvents: 'none',
      }} />

      <motion.div style={{ y, opacity, position: 'relative', zIndex: 2 }}>
        {/* Headline */}
        <div style={{ marginBottom: 'clamp(24px, 4vw, 40px)' }}>
          <Reveal delay={0.1}>
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(3.8rem, 10vw, 11.5rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
              display: 'block',
            }}>
              We build
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(3.8rem, 10vw, 11.5rem)',
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              color: 'var(--text)',
            }}>
              websites.
            </h1>
          </Reveal>
        </div>

        {/* Divider + tagline row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            alignItems: 'end',
            gap: 'clamp(24px, 4vw, 48px)',
            borderTop: '1px solid var(--border)',
            paddingTop: 'clamp(20px, 3vw, 32px)',
          }}
        >
          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontWeight: 400,
              color: 'var(--secondary)',
              lineHeight: 1.6,
              maxWidth: 460,
            }}>
              Premium websites and digital marketing for Australian businesses ready to grow.
            </p>
          </div>

          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexShrink: 0, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text)',
                padding: '11px 24px',
                border: '1px solid var(--border-lg)',
                borderRadius: 8,
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--text)'
                e.currentTarget.style.color = 'var(--bg)'
                e.currentTarget.style.borderColor = 'var(--text)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.borderColor = 'var(--border-lg)'
              }}
            >
              Start Project
            </a>
            <a
              href="#portfolio"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 400,
                color: 'var(--muted)',
                padding: '11px 24px',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              See Our Work →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
