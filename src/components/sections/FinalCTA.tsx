'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="cta"
      style={{
        backgroundColor: '#111111',
        padding: '140px 24px',
        position: 'relative' as const,
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(ellipse, rgba(255,92,0,0.12) 0%, transparent 70%)',
        }} />
      </div>

      <div ref={ref} style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase' as const,
            letterSpacing: '0.2em',
            color: '#FF5C00',
            fontFamily: 'Inter, sans-serif',
            marginBottom: 24,
          }}
        >
          Ready to grow?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.035em',
            color: '#ffffff',
            margin: '0 0 20px',
          }}
        >
          Ready to grow your business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 480,
            margin: '0 auto 40px',
          }}
        >
          Let's build something great. Book a free discovery call and we'll show you exactly how we can help your business grow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 16px 48px rgba(255,92,0,0.45)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '16px 36px',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 700,
              color: '#ffffff',
              backgroundColor: '#FF5C00',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 8px 32px rgba(255,92,0,0.35)',
              transition: 'box-shadow 0.3s ease',
            }}
          >
            Book A Discovery Call
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3.5 9h11M10 5l4.5 4L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>

          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 36px',
              borderRadius: '9999px',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#ffffff',
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              textDecoration: 'none',
              fontFamily: 'Inter, sans-serif',
              transition: 'background-color 0.2s ease',
            }}
          >
            View Our Work
          </motion.a>
        </motion.div>

        {/* Trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            justifyContent: 'center',
            marginTop: 56,
          }}
        >
          {[
            { val: '200+', label: 'Australian businesses' },
            { val: '3 wks', label: 'Average delivery' },
            { val: '5★', label: 'Average rating' },
          ].map((s) => (
            <div key={s.val} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1.6rem', color: '#ffffff', marginBottom: 4 }}>
                {s.val}
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
