'use client'

import { motion } from 'framer-motion'

const ACCENT = '#AAFF00'

const testimonials = [
  { quote: "Launchables built our website in 2 weeks and it ranked on page one. We've seen a 340% increase in organic traffic.", name: 'Sarah K.', role: 'Director, Apex Plumbing', initials: 'SK' },
  { quote: "The best investment we've made. Our social media went from 200 to 15,000 followers in 90 days. Incredible results.", name: 'Marcus T.', role: 'Owner, Nova Coffee', initials: 'MT' },
  { quote: "Honest, fast, and genuinely talented. Our rebrand drove a 3× increase in enquiries within the first month.", name: 'Emily R.', role: 'Owner, The Styling Room', initials: 'ER' },
  { quote: "Their SEO work put us at #1 for our main keyword in 8 weeks. We've never had so many leads.", name: 'Tom B.', role: 'Director, Greenpath Landscaping', initials: 'TB' },
  { quote: "From first call to live website in 3 weeks. The design blew me away. Customers constantly compliment how professional we look.", name: 'Priya M.', role: 'Founder, CleanPro Services', initials: 'PM' },
  { quote: "We've worked with agencies that charge double and deliver a fraction of the quality. Launchables are genuinely world class.", name: 'James W.', role: 'CEO, Summit Health', initials: 'JW' },
]

function Stars() {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 13 13" fill={ACCENT}>
          <path d="M6.5 1l1.3 2.8 3 .4-2.15 2.1.5 3L6.5 7.9 3.85 9.3l.5-3L2.2 4.2l3-.4z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ backgroundColor: '#0A0A0A', padding: 'clamp(72px, 8vw, 100px) clamp(24px, 5vw, 72px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 56 }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.18em', color: '#444', marginBottom: 14 }}>
            Client Stories
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5vw, 5.5rem)',
            lineHeight: 0.92,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            margin: 0,
          }}>
            Results our<br />clients love.
          </h2>
        </motion.div>

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
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '36px 28px',
                borderRight: (i + 1) % 3 !== 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                paddingLeft: i % 3 === 0 ? 0 : 28,
                paddingRight: (i + 1) % 3 === 0 ? 0 : 28,
              }}
            >
              <Stars />
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', lineHeight: 1.75, color: '#555555', margin: '0 0 24px' }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: ACCENT,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.7rem', color: '#0A0A0A' }}>{t.initials}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#ffffff', marginBottom: 2 }}>{t.name}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: '#444444' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
