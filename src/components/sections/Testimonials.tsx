'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: "Launchables built our website in 2 weeks and it immediately ranked on page one. We've seen a 340% increase in organic traffic.",
    name: 'Sarah K.',
    role: 'Director',
    company: 'Apex Plumbing',
    initials: 'SK',
    color: '#FF5C00',
  },
  {
    quote: "The best investment we've made. Our social media went from 200 to 15,000 followers in 90 days. Incredible results.",
    name: 'Marcus T.',
    role: 'Owner',
    company: 'Nova Coffee',
    initials: 'MT',
    color: '#7C3AED',
  },
  {
    quote: "Honest, fast, and genuinely talented. Our rebrand and new website drove a 3× increase in enquiries within the first month.",
    name: 'Emily R.',
    role: 'Owner',
    company: 'The Styling Room',
    initials: 'ER',
    color: '#DB2777',
  },
  {
    quote: "Their SEO work put us at #1 for our main keyword in 8 weeks. We've never had so many leads. Highly recommend.",
    name: 'Tom B.',
    role: 'Director',
    company: 'Greenpath Landscaping',
    initials: 'TB',
    color: '#16A34A',
  },
  {
    quote: "From first call to live website in 3 weeks. The design blew me away. Our customers constantly compliment how professional we look.",
    name: 'Priya M.',
    role: 'Founder',
    company: 'CleanPro Services',
    initials: 'PM',
    color: '#059669',
  },
  {
    quote: "We've worked with agencies that charge double and deliver a fraction of the quality. Launchables are genuinely world class.",
    name: 'James W.',
    role: 'CEO',
    company: 'Summit Events',
    initials: 'JW',
    color: '#0284C7',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#FF5C00">
          <path d="M7 1l1.5 3 3.3.5-2.4 2.3.6 3.2L7 8.5l-3 1.5.6-3.2L2.2 4.5 5.5 4z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: '#F8F7F4', padding: '120px 24px' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 64 }}>
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
            Client Stories
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
            Results our clients love.
          </motion.h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 20,
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.1)' }}
              style={{
                background: '#ffffff',
                borderRadius: 20,
                padding: '32px',
                border: '1px solid rgba(17,17,17,0.06)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
              }}
            >
              <Stars />

              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'rgba(17,17,17,0.75)',
                  margin: '0 0 24px',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: t.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.9rem', color: '#111' }}>
                    {t.name}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(17,17,17,0.45)' }}>
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
