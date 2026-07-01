'use client'
import { motion } from 'framer-motion'

const PILLARS = [
  {
    heading: 'Built properly.\nBuilt once.',
    body: 'We don\'t use page builders or templates. Every site is hand-coded for performance, speed and longevity.',
  },
  {
    heading: 'Less meetings.\nMore building.',
    body: 'A clear brief. A clear process. We don\'t drag projects out. You\'ll have a live website in 2–4 weeks.',
  },
  {
    heading: 'No agency\nbullshit.',
    body: 'We don\'t over-promise or under-deliver. We give you an honest scope, a fair price and exceptional work.',
  },
  {
    heading: 'We\'re obsessed\nwith results.',
    body: 'Traffic. Leads. Revenue. That\'s what matters. Every decision we make is pointed at one thing — growth.',
  },
]

export default function WhyLimner() {
  return (
    <section id="why" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(48px, 6vw, 72px)' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 20 }}>
            Why SSSHHH
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--text)',
          }}>
            We don't sell.<br />We deliver.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 240px), 1fr))',
          borderTop: '1px solid var(--border)',
        }}>
          {PILLARS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: 'clamp(28px, 3vw, 40px) clamp(20px, 2.5vw, 32px)',
                borderRight: i < PILLARS.length - 1 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                color: 'var(--text)',
                marginBottom: 16,
                whiteSpace: 'pre-line',
              }}>
                {p.heading}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'var(--secondary)',
              }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
