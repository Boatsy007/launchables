'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reasons = [
  {
    n: '01',
    title: 'Fast Turnaround',
    body: 'Most agencies take 3–4 months. We deliver in 2–4 weeks without cutting corners. Your time to market is our competitive advantage.',
  },
  {
    n: '02',
    title: 'Modern Design',
    body: 'Every pixel is intentional. We design websites that look premium, feel professional, and make visitors trust you instantly.',
  },
  {
    n: '03',
    title: 'Built to Convert',
    body: "Beautiful means nothing if it doesn't sell. Every layout, headline, and button is designed to turn visitors into enquiries.",
  },
  {
    n: '04',
    title: 'SEO Focused',
    body: 'We build for Google from day one — perfect Core Web Vitals, semantic HTML, structured data. Your site ranks because it was built to rank.',
  },
  {
    n: '05',
    title: 'Local Australian Support',
    body: "We're based in Australia. No offshoring. No handoff to juniors. A dedicated local team that genuinely cares about your results.",
  },
]

export default function WhyLaunchables() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why" style={{ backgroundColor: '#ffffff', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(240px, 380px) 1fr',
            gap: 'clamp(40px, 8vw, 120px)',
            alignItems: 'start',
          }}
        >
          {/* Left: heading */}
          <div style={{ position: 'sticky', top: 100 }}>
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
                marginBottom: 16,
              }}
            >
              Why Launchables
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0A0A0A',
                margin: 0,
              }}
            >
              The agency that actually delivers.
            </motion.h2>
          </div>

          {/* Right: reasons */}
          <div>
            {reasons.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr',
                  gap: 24,
                  padding: '32px 0',
                  borderTop: '1px solid rgba(0,0,0,0.07)',
                }}
              >
                {/* Number */}
                <span style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.72rem',
                  color: '#CCCCCC',
                  letterSpacing: '0.08em',
                  paddingTop: 3,
                }}>
                  {r.n}
                </span>
                {/* Content */}
                <div>
                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: '#0A0A0A',
                    margin: '0 0 10px',
                    letterSpacing: '-0.01em',
                  }}>
                    {r.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: '#666666',
                    margin: 0,
                  }}>
                    {r.body}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Last border */}
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
