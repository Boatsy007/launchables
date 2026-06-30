import { motion } from 'framer-motion'

// ─── Browser Mockup ───────────────────────────────────────────────────────────
function BrowserMockup() {
  return (
    <div
      style={{
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.08)',
        background: '#1A1A1A',
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          height: 42,
          background: '#242424',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: 8,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#EF4444', display: 'block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#F59E0B', display: 'block' }} />
        <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#22C55E', display: 'block' }} />
        <div
          style={{
            flex: 1,
            marginLeft: 12,
            height: 26,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 12,
          }}
        >
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>
            yourwebsite.com.au
          </span>
        </div>
      </div>

      {/* Website preview */}
      <div style={{ padding: '28px 24px', minHeight: 320 }}>
        {/* Nav mockup */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <div style={{ width: 90, height: 10, background: 'rgba(255,255,255,0.12)', borderRadius: 5 }} />
          <div style={{ display: 'flex', gap: 12 }}>
            {[60, 50, 55, 40].map((w, i) => (
              <div key={i} style={{ width: w, height: 8, background: 'rgba(255,255,255,0.07)', borderRadius: 4 }} />
            ))}
          </div>
          <div style={{ width: 70, height: 28, background: '#FF5C00', borderRadius: 20 }} />
        </div>

        {/* Hero text mockup */}
        <div style={{ maxWidth: 340, marginBottom: 24 }}>
          <div style={{ width: '90%', height: 18, background: 'rgba(255,255,255,0.15)', borderRadius: 6, marginBottom: 10 }} />
          <div style={{ width: '70%', height: 18, background: 'rgba(255,255,255,0.15)', borderRadius: 6, marginBottom: 18 }} />
          <div style={{ width: '100%', height: 9, background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginBottom: 6 }} />
          <div style={{ width: '80%', height: 9, background: 'rgba(255,255,255,0.06)', borderRadius: 4, marginBottom: 20 }} />
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ width: 90, height: 32, background: '#FF5C00', borderRadius: 20 }} />
            <div style={{ width: 100, height: 32, background: 'rgba(255,255,255,0.08)', borderRadius: 20, border: '1px solid rgba(255,255,255,0.12)' }} />
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
          {[
            { val: '340%', label: 'More leads' },
            { val: '3 wks', label: 'Delivery' },
            { val: '100', label: 'Lighthouse' },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '12px 14px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#FF5C00', fontFamily: 'Space Grotesk, sans-serif', marginBottom: 3 }}>{s.val}</div>
              <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Animated headline ────────────────────────────────────────────────────────
const HEADLINE = ['Websites Built', 'To Grow Your', 'Business.']

function AnimatedHeadline() {
  return (
    <h1
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
        lineHeight: 1.05,
        color: '#111111',
        letterSpacing: '-0.03em',
        margin: 0,
      }}
    >
      {HEADLINE.map((line, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'block' }}
        >
          {i === 2 ? (
            <span style={{ color: '#FF5C00' }}>{line}</span>
          ) : line}
        </motion.span>
      ))}
    </h1>
  )
}

// ─── Main Hero ────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        backgroundColor: '#F8F7F4',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Subtle gradient background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55%',
          height: '70%',
          background: 'radial-gradient(ellipse, rgba(255,92,0,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '-10%',
          width: '40%',
          height: '50%',
          background: 'radial-gradient(ellipse, rgba(255,122,92,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
        }} />
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          width: '100%',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Text content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 28,
              }}
            >
              <span style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#FF5C00',
              }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.7rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#FF5C00',
              }}>
                Premium Web Design Studio · Australia
              </span>
            </motion.div>

            {/* Headline */}
            <div style={{ marginBottom: 24 }}>
              <AnimatedHeadline />
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: 'rgba(17,17,17,0.58)',
                maxWidth: '400px',
                marginBottom: 36,
              }}
            >
              We design premium websites that generate leads, and manage social media that grows businesses. Built for Australian business owners who want results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(255,92,0,0.4)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  backgroundColor: '#FF5C00',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: '0 8px 32px rgba(255,92,0,0.3)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>

              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.03, backgroundColor: 'rgba(17,17,17,0.06)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 28px',
                  borderRadius: '9999px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#111111',
                  backgroundColor: 'rgba(17,17,17,0.04)',
                  border: '1px solid rgba(17,17,17,0.1)',
                  textDecoration: 'none',
                  fontFamily: "'Inter', sans-serif",
                  transition: 'background-color 0.2s ease',
                }}
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Trust signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 40,
              }}
            >
              <div style={{ display: 'flex' }}>
                {['#FF5C00', '#7C3AED', '#059669', '#0284C7'].map((c, i) => (
                  <div
                    key={i}
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: c,
                      border: '2px solid #F8F7F4',
                      marginLeft: i === 0 ? 0 : -8,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#fff',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {['SK', 'MT', 'PM', 'JW'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#FF5C00">
                      <path d="M6 1l1.3 2.6 2.9.4-2.1 2 .5 2.9L6 7.5 3.4 8.9l.5-2.9L2 4l2.9-.4z" />
                    </svg>
                  ))}
                </div>
                <span style={{ fontSize: '0.78rem', color: 'rgba(17,17,17,0.5)', fontFamily: 'Inter, sans-serif' }}>
                  Trusted by 200+ Australian businesses
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right: Browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: -20,
                right: -16,
                zIndex: 20,
                background: 'white',
                borderRadius: 16,
                padding: '12px 16px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 10, background: '#FF5C00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2l1.6 3.3 3.6.5-2.6 2.5.6 3.6L9 10.2l-3.2 1.7.6-3.6L4 5.8l3.6-.5z" fill="white" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#111', fontFamily: 'Space Grotesk, sans-serif' }}>95+ Lighthouse</div>
                <div style={{ fontSize: 11, color: 'rgba(17,17,17,0.45)', fontFamily: 'Inter, sans-serif' }}>Performance score</div>
              </div>
            </motion.div>

            {/* Second floating badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: 20,
                left: -20,
                zIndex: 20,
                background: 'white',
                borderRadius: 14,
                padding: '10px 14px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div style={{ width: 32, height: 32, borderRadius: 8, background: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.5 3.5 6.5-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#111', fontFamily: 'Space Grotesk, sans-serif' }}>Launched in 3 weeks</div>
                <div style={{ fontSize: 10, color: 'rgba(17,17,17,0.4)', fontFamily: 'Inter, sans-serif' }}>On time, every time</div>
              </div>
            </motion.div>

            <BrowserMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
