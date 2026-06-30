'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    n: '01',
    label: 'Discover',
    heading: 'Discovery',
    description: "We learn your business, goals, and audience. You get a clear roadmap and shared vision for what we're building together.",
  },
  {
    n: '02',
    label: 'Design',
    heading: 'Design',
    description: 'We craft a custom design that reflects your brand and converts visitors. Every pixel is intentional. You approve before we build.',
  },
  {
    n: '03',
    label: 'Build',
    heading: 'Build',
    description: 'We develop with clean, fast code. SEO-optimised from the ground up. Mobile-first, fully responsive, tested on every device.',
  },
  {
    n: '04',
    label: 'Launch',
    heading: 'Launch',
    description: "We handle hosting, domain, final QA, and go-live. Then we're here for ongoing support as your business grows.",
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>

        <div ref={ref} style={{ marginBottom: 72 }}>
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
              color: '#444444',
              marginBottom: 16,
            }}
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#ffffff',
              margin: 0,
              maxWidth: 500,
            }}
          >
            From idea to live in four steps.
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '40px 32px 40px 0',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                paddingLeft: i === 0 ? 0 : 32,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 8,
                  background: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    color: i === 0 ? '#0A0A0A' : '#444444',
                    letterSpacing: '0.05em',
                  }}>
                    {step.n}
                  </span>
                </div>
              </div>

              <span style={{
                display: 'block',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: 10,
              }}>
                {step.label}
              </span>

              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '1.25rem',
                color: '#ffffff',
                margin: '0 0 12px',
                letterSpacing: '-0.02em',
              }}>
                {step.heading}
              </h3>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: '#555555',
                margin: 0,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
