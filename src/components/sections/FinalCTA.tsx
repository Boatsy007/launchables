'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 72px)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--muted)', marginBottom: 20 }}>
            Ready to grow?
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
            color: 'var(--text)',
            margin: '0 0 32px',
          }}>
            Let's build<br />something.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--secondary)', margin: '0 auto 48px', maxWidth: 440 }}>
            No sales pitch. No agency theatre. Just a straight conversation about what you need and whether we're the right fit.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@ssshhh.com.au"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 32px', borderRadius: 8,
                background: 'var(--text)', color: 'var(--bg)',
                fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 600,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Get in touch
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#portfolio"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '14px 32px', borderRadius: 8,
                border: '1px solid var(--border-lg)',
                color: 'var(--text)',
                background: 'transparent',
                fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 500,
                textDecoration: 'none', transition: 'background 0.25s ease, border-color 0.25s ease, color 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--text)'
                el.style.color = 'var(--bg)'
                el.style.borderColor = 'var(--text)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = 'var(--text)'
                el.style.borderColor = 'var(--border-lg)'
              }}
            >
              View Our Work
            </a>
          </div>

          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 72, paddingTop: 48, borderTop: '1px solid var(--border)', flexWrap: 'wrap' }}>
            {[
              { val: '150+', label: 'Australian businesses' },
              { val: '3 wks', label: 'Average delivery' },
              { val: '5.0★', label: 'Average rating' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--text)', letterSpacing: '-0.03em', marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
