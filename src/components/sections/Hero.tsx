import { motion } from 'framer-motion'

const ACCENT = '#AAFF00'

const SERVICE_LINKS = [
  'Website Design',
  'Social Media Management',
  'SEO & Growth',
  'Website Hosting',
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100dvh',
      backgroundColor: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 clamp(24px, 5vw, 72px)',
      paddingTop: 68,
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1400, width: '100%', margin: '0 auto' }}>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(4.5rem, 12vw, 14rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            margin: '0 0 28px',
          }}
        >
          We build<br />websites.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 6vw, 7rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            color: ACCENT,
            marginBottom: 'clamp(48px, 8vw, 96px)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          So your business grows.<span className="cursor-blink" style={{ marginLeft: 4, opacity: 1 }}>_</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: 'clamp(20px, 3vw, 56px)',
            flexWrap: 'wrap',
            paddingTop: 28,
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {SERVICE_LINKS.map((s) => (
            <a
              key={s}
              href="#services"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(0.78rem, 1.1vw, 0.95rem)',
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                transition: 'color 0.2s',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
            >
              {s}
              <span style={{ opacity: 0.5 }}>→</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
