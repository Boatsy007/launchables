'use client'
import { motion } from 'framer-motion'

const SERVICES = [
  {
    n: '01',
    title: 'Website Design',
    description: 'Custom websites designed to convert visitors into customers. Mobile-first, SEO-optimised, built to last.',
    tags: ['Custom Design', 'SEO', 'CMS', 'Analytics'],
  },
  {
    n: '02',
    title: 'Social Media Management',
    description: 'Content creation, daily posting, community management and growth strategy across all major platforms.',
    tags: ['Instagram', 'TikTok', 'Facebook', 'LinkedIn'],
  },
  {
    n: '03',
    title: 'Business Launch Kits',
    description: 'Everything a new business needs to go from idea to operating: website, branding, social media, and strategy.',
    tags: ['Branding', 'Website', 'Social', 'Strategy'],
  },
  {
    n: '04',
    title: 'SEO & Growth',
    description: 'Rank on Google, drive organic traffic, and convert it — built into every site we create from day one.',
    tags: ['On-page SEO', 'Technical SEO', 'Local SEO', 'Analytics'],
  },
  {
    n: '05',
    title: 'Pre-built Websites',
    description: 'Premium, industry-specific websites ready to launch in days, not weeks. Customised to your brand.',
    tags: ['Trades', 'Hospitality', 'Health', 'Services'],
  },
]

function Row({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: 'grid',
        gridTemplateColumns: '64px 1fr auto',
        gap: '0 clamp(20px, 4vw, 48px)',
        padding: 'clamp(24px, 3vw, 36px) 0',
        borderBottom: '1px solid var(--border)',
        alignItems: 'start',
        cursor: 'default',
      }}
      whileHover={{ backgroundColor: 'rgba(255,255,255,0.01)' }}
    >
      {/* Number */}
      <span style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.72rem',
        fontWeight: 400,
        color: 'var(--muted)',
        letterSpacing: '0.05em',
        paddingTop: 4,
      }}>
        {s.n}
      </span>

      {/* Content */}
      <div>
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 600,
          fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          marginBottom: 10,
        }}>
          {s.title}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          color: 'var(--secondary)',
          maxWidth: 520,
          marginBottom: 16,
        }}>
          {s.description}
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {s.tags.map(t => (
            <span key={t} style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 400,
              color: 'var(--muted)',
              padding: '3px 10px',
              border: '1px solid var(--border)',
              borderRadius: 4,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <a href="#contact" style={{
        color: 'var(--muted)',
        paddingTop: 4,
        transition: 'color 0.2s, transform 0.2s',
        display: 'inline-block',
      }}
        onMouseEnter={e => {
          e.currentTarget.style.color = 'var(--text)'
          e.currentTarget.style.transform = 'translate(3px,-3px)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'var(--muted)'
          e.currentTarget.style.transform = 'translate(0,0)'
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.5 14.5l11-11M7 3.5h7.5V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(40px, 6vw, 60px)' }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.72rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--muted)',
            marginBottom: 20,
          }}>
            Services
          </p>
          <h2 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--text)',
          }}>
            What we do
          </h2>
        </motion.div>

        <div style={{ borderTop: '1px solid var(--border)' }}>
          {SERVICES.map((s, i) => <Row key={s.n} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}
