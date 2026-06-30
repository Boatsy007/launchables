'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LOGOS = ['LORDE', 'STAX.', 'AURORA', 'bloom', 'VENTURE', 'MOMENTUM']

function LogoStrip() {
  return (
    <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', padding: '32px 0 0', marginTop: 64 }}>
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.7rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: '0.18em',
        color: '#AAAAAA',
        marginBottom: 28,
        textAlign: 'center',
      }}>
        Trusted by Australian businesses
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(24px, 4vw, 64px)', flexWrap: 'wrap' }}>
        {LOGOS.map((logo, i) => (
          <motion.span
            key={logo}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            style={{
              fontFamily: logo === 'bloom' ? 'Georgia, serif' : 'Space Grotesk, sans-serif',
              fontWeight: logo === 'bloom' ? 400 : 700,
              fontStyle: logo === 'bloom' ? 'italic' : 'normal',
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
              color: '#CCCCCC',
              letterSpacing: logo === 'bloom' ? '0' : '0.05em',
            }}
          >
            {logo}
          </motion.span>
        ))}
      </div>
    </div>
  )
}

function MonitorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="18" height="13" rx="2"/>
      <path d="M7 19h8M11 16v3"/>
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#0A0A0A" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 16l4-5 4 3 4-7"/>
      <rect x="2" y="2" width="18" height="18" rx="2"/>
    </svg>
  )
}

const services = [
  {
    icon: <MonitorIcon />,
    title: 'Website Design',
    description: 'Custom, high-performance websites built to convert visitors into customers.',
    features: ['Mobile-first design', 'SEO optimised', 'Fast loading', 'Built to convert'],
  },
  {
    icon: <ChartIcon />,
    title: 'Social Media Management',
    description: 'Strategic content and management that grows your brand and audience.',
    features: ['Content creation', 'Community management', 'Paid advertising', 'Monthly reporting'],
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" style={{ backgroundColor: '#ffffff', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 360px) 1fr',
            gap: 'clamp(32px, 5vw, 80px)',
            alignItems: 'start',
          }}
        >
          <div style={{ paddingTop: 4 }}>
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
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: '#0A0A0A',
                margin: 0,
              }}
            >
              Everything you need to build and grow online.
            </motion.h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.06)' }}
                style={{
                  border: '1px solid rgba(0,0,0,0.09)',
                  borderRadius: 16,
                  padding: '28px 24px',
                  background: '#ffffff',
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  background: '#F5F5F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  {s.icon}
                </div>

                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#0A0A0A',
                  margin: '0 0 8px',
                  letterSpacing: '-0.01em',
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.83rem',
                  lineHeight: 1.65,
                  color: '#888888',
                  margin: '0 0 20px',
                }}>
                  {s.description}
                </p>

                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {s.features.map(f => (
                    <li key={f} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.8rem',
                      color: '#666666',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-6" stroke="#0A0A0A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <LogoStrip />
        </motion.div>
      </div>
    </section>
  )
}
