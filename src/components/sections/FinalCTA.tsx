'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="cta"
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(80px, 10vw, 120px) 0',
        borderTop: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#AAAAAA',
                marginBottom: 20,
              }}
            >
              Ready to grow?
            </motion.p>

            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: '0%' } : {}}
                transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.035em',
                  color: '#0A0A0A',
                  margin: '0 0 28px',
                }}
              >
                Ready to grow your business?
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#888888',
                maxWidth: 480,
                margin: 0,
              }}
            >
              Let's build something great. Book a free discovery call and we'll show you exactly how we can help your business grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{
                display: 'flex',
                gap: 48,
                marginTop: 48,
                paddingTop: 40,
                borderTop: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              {[
                { val: '200+', label: 'Australian businesses' },
                { val: '3 wks', label: 'Average delivery' },
                { val: '5★', label: 'Average rating' },
              ].map(s => (
                <div key={s.val}>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    color: '#0A0A0A',
                    letterSpacing: '-0.03em',
                    marginBottom: 4,
                  }}>
                    {s.val}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#AAAAAA' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 200 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                padding: '16px 32px',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: '#0A0A0A',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.01em',
              }}
            >
              Book A Discovery Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#0A0A0A',
                background: 'transparent',
                border: '1px solid rgba(0,0,0,0.15)',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.01em',
              }}
            >
              View Our Work
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
