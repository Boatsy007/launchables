'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    label: 'Discover',
    heading: 'Discovery',
    description:
      "We start by understanding your business, goals, and target audience. You leave with a clear project roadmap and a shared vision for what we're building.",
  },
  {
    number: '02',
    label: 'Design',
    heading: 'Design',
    description:
      'Our team crafts a custom design that reflects your brand and is optimised for conversions. Every pixel is intentional. You approve before we build.',
  },
  {
    number: '03',
    label: 'Build',
    heading: 'Build',
    description:
      'We develop your website with clean, fast code. SEO-optimised from the ground up. Mobile-first, fully responsive, and tested across all devices.',
  },
  {
    number: '04',
    label: 'Launch',
    heading: 'Launch',
    description:
      "We handle everything — hosting, domain, final checks, and go-live. Then we're here for ongoing support as your business grows.",
  },
]

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" style={{ backgroundColor: '#F8F7F4', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 72 }}>
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
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#111111',
              margin: 0,
              maxWidth: 480,
            }}
          >
            From idea to live in four simple steps.
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 0,
            position: 'relative' as const,
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '40px 32px',
                position: 'relative' as const,
                borderLeft: i > 0 ? '1px solid rgba(17,17,17,0.08)' : 'none',
              }}
            >
              {/* Step number */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: i === 0 ? '#FF5C00' : 'rgba(17,17,17,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: i === 0 ? '#ffffff' : 'rgba(17,17,17,0.4)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {step.number}
                </span>
              </div>

              {/* Label */}
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.18em',
                  color: '#FF5C00',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: 8,
                }}
              >
                {step.label}
              </span>

              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                  fontSize: '1.3rem',
                  color: '#111111',
                  margin: '0 0 12px',
                  letterSpacing: '-0.01em',
                }}
              >
                {step.heading}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'rgba(17,17,17,0.5)',
                  margin: 0,
                }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
