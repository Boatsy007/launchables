'use client'
import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "They built our site in two weeks. It looked better than agencies that quoted us $30k. Ranked on page one within a month.",
    name: 'Sarah K.',
    co: 'Apex Plumbing, Sydney',
  },
  {
    quote: "No meetings. No runaround. We gave them a brief, they came back with something extraordinary. Every time.",
    name: 'Marcus T.',
    co: 'Nova Coffee, Melbourne',
  },
  {
    quote: "I've worked with four agencies. SSSHHH is the first one that actually delivered what they promised, on time.",
    name: 'Emily R.',
    co: 'The Styling Room, Brisbane',
  },
  {
    quote: "Our social media went from 200 to 15,000 followers in 90 days. I don't know how they did it. I just know it worked.",
    name: 'Tom B.',
    co: 'Greenpath Landscaping',
  },
  {
    quote: "The ROI on our website has been insane. We're booked out 6 weeks ahead and it's been 2 months.",
    name: 'Chris M.',
    co: 'Swept Services, QLD',
  },
  {
    quote: "If you want someone to talk to you about brand strategy and digital journeys — call someone else. If you want results — call these guys.",
    name: 'James W.',
    co: 'Summit Health',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(40px, 6vw, 64px)' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 20 }}>
            Clients
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--text)',
            }}>
              The work<br />speaks.
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ display: 'flex' }}>
                {['#2a2a2a','#323232','#3a3a3a','#424242'].map((c, i) => (
                  <div key={i} style={{
                    width: 28, height: 28, borderRadius: '50%',
                    background: c, border: '2px solid var(--bg)',
                    marginLeft: i === 0 ? 0 : -8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, fontWeight: 600, color: 'var(--secondary)' }}>
                      {['SK','MT','ER','TB'][i]}
                    </span>
                  </div>
                ))}
              </div>
              <div>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 500, color: 'var(--text)' }}>5.0</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', color: 'var(--muted)' }}>150+ clients</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
          gap: 'clamp(1px, 0.2vw, 1px)',
          borderTop: '1px solid var(--border)',
          borderLeft: '1px solid var(--border)',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              style={{
                padding: 'clamp(24px, 3vw, 36px)',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                lineHeight: 1.75,
                color: 'var(--secondary)',
                marginBottom: 24,
                fontStyle: 'italic',
              }}>
                "{t.quote}"
              </p>
              <div>
                <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text)', marginBottom: 2 }}>{t.name}</p>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--muted)' }}>{t.co}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
