'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const testimonials = [
  {
    quote: "Launchables built our website in 2 weeks and it immediately ranked on page one. We've seen a 340% increase in organic traffic.",
    name: 'Sarah K.',
    role: 'Director',
    company: 'Apex Plumbing',
    initials: 'SK',
  },
  {
    quote: "The best investment we've made. Our social media went from 200 to 15,000 followers in 90 days. Incredible results.",
    name: 'Marcus T.',
    role: 'Owner',
    company: 'Nova Coffee',
    initials: 'MT',
  },
  {
    quote: "Honest, fast, and genuinely talented. Our rebrand and new website drove a 3× increase in enquiries within the first month.",
    name: 'Emily R.',
    role: 'Owner',
    company: 'The Styling Room',
    initials: 'ER',
  },
  {
    quote: "Their SEO work put us at #1 for our main keyword in 8 weeks. We've never had so many leads.",
    name: 'Tom B.',
    role: 'Director',
    company: 'Greenpath Landscaping',
    initials: 'TB',
  },
  {
    quote: "From first call to live website in 3 weeks. The design blew me away. Our customers constantly compliment how professional we look.",
    name: 'Priya M.',
    role: 'Founder',
    company: 'CleanPro Services',
    initials: 'PM',
  },
  {
    quote: "We've worked with agencies that charge double and deliver a fraction of the quality. Launchables are genuinely world class.",
    name: 'James W.',
    role: 'CEO',
    company: 'Summit Events',
    initials: 'JW',
  },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 20 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#ffffff">
          <path d="M6 1l1.2 2.6 2.8.4-2 2 .5 2.8L6 7.5 3.5 8.8l.5-2.8-2-2 2.8-.4z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="testimonials" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(80px, 10vw, 120px) 0' }}>
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
            Client Stories
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
              maxWidth: 480,
            }}
          >
            Results our clients love.
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '40px 32px',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                paddingLeft: i % 3 === 0 ? 0 : 32,
                paddingRight: (i + 1) % 3 === 0 ? 0 : 32,
              }}
            >
              <Stars />

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: '#666666',
                margin: '0 0 28px',
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <span style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: '0.7rem',
                    color: 'rgba(255,255,255,0.5)',
                  }}>
                    {t.initials}
                  </span>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: '#ffffff',
                    marginBottom: 2,
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.75rem',
                    color: '#444444',
                  }}>
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
