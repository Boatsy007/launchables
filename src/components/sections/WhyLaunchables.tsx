'use client'

import { motion } from 'framer-motion'

const ACCENT = '#AAFF00'

const CLIENT_LOGOS = [
  'Apex Plumbing', 'Nova Coffee', 'The Styling Room', 'Greenpath',
  'CleanPro', 'Summit Health', 'Swept Services', 'Mode Fashion',
  'Apex Plumbing', 'Nova Coffee', 'The Styling Room', 'Greenpath',
  'CleanPro', 'Summit Health', 'Swept Services', 'Mode Fashion',
]

function WebsiteCollage() {
  const cards = [
    { bg: 'linear-gradient(135deg,#0d1929,#091420)', accent: '#2BAEF5', label: 'Commercial' },
    { bg: 'linear-gradient(135deg,#1a0c04,#0d0603)', accent: '#D97706', label: 'Hospitality' },
    { bg: 'linear-gradient(135deg,#0a1628,#071020)', accent: '#2563EB', label: 'Trades' },
    { bg: 'linear-gradient(135deg,#1a0a14,#0d0509)', accent: '#DB2777', label: 'Beauty' },
    { bg: 'linear-gradient(135deg,#061a0c,#030d06)', accent: '#16A34A', label: 'Landscape' },
  ]

  return (
    <div style={{ position: 'relative', height: 420, width: '100%' }}>
      {cards.map((c, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: 220,
            height: 150,
            background: c.bg,
            borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.08)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            top: [20, 100, 200, 60, 260][i],
            left: [0, 120, 40, 220, 160][i],
            transform: `rotate(${[-3, 2, -1.5, 3, -2][i]}deg)`,
            transition: 'transform 0.3s ease',
          }}
        >
          <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ width: 40, height: 5, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }} />
            <div style={{ display: 'flex', gap: 6 }}>
              {[24, 30, 20].map((w, j) => <div key={j} style={{ width: w, height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 2 }} />)}
            </div>
          </div>
          <div style={{ padding: '12px 12px', flex: 1 }}>
            <div style={{ width: '60%', height: 8, background: c.accent, opacity: 0.8, borderRadius: 2, marginBottom: 6 }} />
            <div style={{ width: '80%', height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 2, marginBottom: 4 }} />
            <div style={{ width: '55%', height: 5, background: 'rgba(255,255,255,0.07)', borderRadius: 2, marginBottom: 14 }} />
            <div style={{ display: 'flex', gap: 6 }}>
              <div style={{ width: 56, height: 20, background: c.accent, borderRadius: 3 }} />
              <div style={{ width: 56, height: 20, background: 'rgba(255,255,255,0.06)', borderRadius: 3, border: '1px solid rgba(255,255,255,0.1)' }} />
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: 6, right: 10 }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function WhyLaunchables() {
  return (
    <section id="why" style={{ backgroundColor: '#ffffff' }}>
      {/* Logo ticker */}
      <div style={{
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '20px 0',
        overflow: 'hidden',
      }}>
        <div className="ticker-track" style={{ display: 'flex', gap: 64, width: 'max-content' }}>
          {CLIENT_LOGOS.map((logo, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#BBBBBB',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* Agency intro */}
      <div style={{ padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 72px)' }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#888888',
              marginBottom: 16,
              letterSpacing: '0.01em',
            }}>
              Your Get It Done
            </p>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#0A0A0A',
              margin: '0 0 20px',
            }}>
              Web Design<br />Agency
            </h2>
            <p style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
              letterSpacing: '-0.03em',
              margin: '0 0 24px',
            }}>
              <span style={{ color: ACCENT }}>Get More.</span>{' '}
              <span style={{ color: '#0A0A0A' }}>Launchables.</span>
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#555555',
              margin: '0 0 32px',
              maxWidth: 440,
            }}>
              Professional web design and digital marketing for Australian businesses. We work with{' '}
              <strong style={{ color: '#0A0A0A' }}>SMEs</strong> and{' '}
              <strong style={{ color: '#0A0A0A' }}>established brands</strong> who want results, not excuses.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                borderRadius: '9999px',
                background: ACCENT,
                color: '#0A0A0A',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.95rem',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'transform 0.2s, opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Get A Quote
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <WebsiteCollage />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
