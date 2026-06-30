'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const reasons = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#FF5C00" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: 'We deliver your website in weeks, not months. Most projects launched in 2–4 weeks without cutting corners.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="16" rx="3" stroke="#FF5C00" strokeWidth="1.5" />
        <path d="M4 11h20" stroke="#FF5C00" strokeWidth="1.5" />
        <path d="M9 16h10M9 19h6" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Modern Design',
    description: "Every pixel is considered. We design websites that look premium and feel professional — the kind that make visitors trust you instantly.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20l4-4 4 3 4-6 4 2" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="8" r="3" stroke="#FF5C00" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Built for Conversions',
    description: 'Beautiful means nothing if it doesn\'t sell. Every layout, headline, and button is designed to turn visitors into enquiries.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="13" cy="13" r="7" stroke="#FF5C00" strokeWidth="1.5" />
        <path d="M18.5 18.5L23 23" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 13h6M13 10v6" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'SEO Focused',
    description: 'We build for Google from day one. Perfect Core Web Vitals, semantic HTML, structured data. Your site ranks because it was built to rank.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 4l4 4-4 4M23 8H15" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Local Australian Support',
    description: "We're based in Australia. No offshoring. No handoff to a junior. You get a dedicated local team that's easy to reach and genuinely cares.",
  },
]

export default function WhyLaunchables() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="why"
      style={{ backgroundColor: '#111111', padding: '120px 24px' }}
    >
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
            Why Launchables
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: 0,
              maxWidth: 640,
            }}
          >
            The agency that actually delivers.
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 2,
          }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              style={{
                padding: '40px 36px',
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.06)',
                transition: 'background-color 0.3s ease',
                cursor: 'default',
              }}
            >
              <div style={{ marginBottom: 20 }}>{r.icon}</div>
              <h3
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                  fontSize: '1.15rem',
                  color: '#ffffff',
                  margin: '0 0 10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.45)',
                  margin: 0,
                }}
              >
                {r.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
