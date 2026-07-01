'use client'

import { motion } from 'framer-motion'

const ACCENT = '#AAFF00'

export default function FinalCTA() {
  return (
    <section id="contact" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 5vw, 72px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#444', marginBottom: 20 }}>
            Ready to grow?
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(3.5rem, 9vw, 10rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            margin: '0 0 32px',
          }}>
            Let's build something great.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.4)', margin: '0 auto 48px', maxWidth: 480 }}>
            Book a free discovery call and we'll show you exactly how we can help your business grow online.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:hello@launchables.com.au"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '16px 36px', borderRadius: '9999px',
                background: ACCENT, color: '#0A0A0A',
                fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 700,
                textDecoration: 'none', transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Book A Discovery Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#portfolio"
              style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '16px 36px', borderRadius: '9999px',
                border: '1.5px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
                fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 600,
                textDecoration: 'none', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = ACCENT
                el.style.color = ACCENT
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.2)'
                el.style.color = '#ffffff'
              }}
            >
              View Our Work
            </a>
          </div>

          <div style={{ display: 'flex', gap: 48, justifyContent: 'center', marginTop: 72, paddingTop: 48, borderTop: '1px solid rgba(255,255,255,0.07)', flexWrap: 'wrap' }}>
            {[
              { val: '150+', label: 'Australian businesses' },
              { val: '3 wks', label: 'Average delivery' },
              { val: '5.0★', label: 'Average rating' },
            ].map(s => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#ffffff', letterSpacing: '-0.03em', marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#444444' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
