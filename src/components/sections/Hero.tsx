import { motion } from 'framer-motion'

function WebsitePreview() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: '#0e0a07',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        right: '22%', top: '5%',
        width: '50%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(210,130,40,0.28) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 22px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        flexShrink: 0,
        position: 'relative',
        zIndex: 2,
      }}>
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: '0.05em' }}>MODE.</span>
        <div style={{ display: 'flex', gap: 18 }}>
          {['Shop', 'Collections', 'About'].map(l => (
            <span key={l} style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.38)' }}>{l}</span>
          ))}
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Cart (0)</span>
      </div>

      <div style={{ flex: 1, padding: '28px 22px', position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', right: 16, top: 20, bottom: 60, width: '48%', opacity: 0.6 }}>
          <div style={{ position: 'absolute', right: '42%', top: '8%', bottom: '20%', width: 2, background: 'rgba(210,130,40,0.4)', borderRadius: 1 }} />
          <div style={{ position: 'absolute', right: '28%', top: '4%', width: 40, height: 28, background: 'rgba(220,140,50,0.35)', borderRadius: '50% 50% 30% 30%', filter: 'blur(2px)' }} />
          <div style={{ position: 'absolute', right: '26%', top: '12%', width: 50, height: 50, background: 'radial-gradient(circle, rgba(255,160,60,0.45) 0%, transparent 70%)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: '5%', top: '30%', width: '45%', height: '55%', background: 'rgba(140,110,80,0.18)', borderRadius: '40% 40% 20% 20%', border: '1px solid rgba(180,140,90,0.1)' }} />
          <div style={{ position: 'absolute', left: '0%', top: '72%', width: '55%', height: '22%', background: 'rgba(130,100,70,0.2)', borderRadius: '8px 8px 0 0', border: '1px solid rgba(180,140,90,0.08)' }} />
        </div>

        <div style={{ position: 'relative', zIndex: 3 }}>
          <h2 style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 20,
            color: '#ffffff',
            lineHeight: 1.28,
            margin: '0 0 10px',
            maxWidth: 200,
          }}>
            Modern furniture<br />made for living.
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, margin: '0 0 16px', maxWidth: 180 }}>
            Timeless design. Premium materials.<br />Built to last a lifetime.
          </p>
          <button style={{
            background: 'rgba(255,255,255,0.92)',
            color: '#0a0705',
            border: 'none',
            padding: '8px 16px',
            fontSize: 10,
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            cursor: 'pointer',
            borderRadius: 4,
            letterSpacing: '0.02em',
          }}>
            Explore Collection
          </button>
        </div>
      </div>
    </div>
  )
}

function LaptopMockup() {
  return (
    <div style={{
      width: '100%',
      transform: 'perspective(1400px) rotateY(-10deg) rotateX(1.5deg)',
      transformOrigin: '50% 50%',
      filter: 'drop-shadow(0 50px 100px rgba(0,0,0,0.8)) drop-shadow(0 12px 30px rgba(0,0,0,0.5))',
    }}>
      <div style={{
        background: '#1c1c1e',
        borderRadius: '14px 14px 0 0',
        border: '9px solid #2e2e30',
        borderBottom: '14px solid #2e2e30',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 5, left: '50%',
          transform: 'translateX(-50%)',
          width: 7, height: 7,
          borderRadius: '50%',
          background: '#3d3d3d',
          zIndex: 10,
        }} />
        <div style={{ paddingBottom: '62.5%', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <WebsitePreview />
          </div>
        </div>
      </div>

      <div style={{ height: 12, background: 'linear-gradient(to bottom, #3a3a3c, #2c2c2e)', borderRadius: '0 0 2px 2px' }} />
      <div style={{ height: 18, background: 'linear-gradient(to bottom, #3a3a3c, #2e2e30)', borderRadius: '0 0 6px 6px', clipPath: 'polygon(0 0, 100% 0, 96% 100%, 4% 100%)' }} />
      <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.07), transparent)', marginTop: 2 }} />
    </div>
  )
}

function RevealLine({ children, delay = 0, style = {} }: {
  children: React.ReactNode
  delay?: number
  style?: React.CSSProperties
}) {
  return (
    <div style={{ overflow: 'hidden', ...style }}>
      <motion.div
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const HEADLINE = ['Websites that', 'grow businesses.']

  return (
    <section style={{
      minHeight: '100dvh',
      backgroundColor: '#0A0A0A',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '30%',
        background: 'linear-gradient(to bottom, transparent, rgba(10,10,10,0.6))',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        maxWidth: 1280,
        margin: '0 auto',
        width: '100%',
        padding: '0 48px',
        gap: '0 64px',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Left */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 88,
          paddingBottom: 60,
        }}>
          {/* Pill label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 14px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '9999px',
              width: 'fit-content',
              marginBottom: 36,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ffffff', display: 'block', flexShrink: 0, opacity: 0.5 }} />
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.01em',
            }}>
              Digital Studio Australia
            </span>
          </motion.div>

          {/* Headline */}
          <div style={{ marginBottom: 28 }}>
            {HEADLINE.map((line, i) => (
              <RevealLine key={i} delay={0.25 + i * 0.1}>
                <span style={{
                  display: 'block',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(3rem, 5.5vw, 6rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1.0,
                  paddingBottom: '0.06em',
                }}>
                  {i === 0 ? (
                    <span style={{ color: '#ffffff' }}>{line}</span>
                  ) : (
                    <>
                      <span style={{ color: '#444444' }}>grow </span>
                      <span style={{ color: '#ffffff' }}>businesses.</span>
                    </>
                  )}
                </span>
              </RevealLine>
            ))}
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.4)',
              maxWidth: 380,
              marginBottom: 36,
            }}
          >
            We design premium websites and manage social media that attract, engage and convert.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, backgroundColor: '#eeeeee' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: '9999px',
                background: '#ffffff',
                color: '#0A0A0A',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'background 0.2s ease',
              }}
            >
              Get Started
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 28px',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'rgba(255,255,255,0.55)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              View Our Work
            </motion.a>
          </motion.div>

          {/* Trust signal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.7 }}
            style={{ display: 'flex', alignItems: 'center', gap: 14 }}
          >
            <div style={{ display: 'flex' }}>
              {['#3a3a3a', '#4a4a4a', '#555555', '#666666'].map((c, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: c,
                  border: '2px solid #0A0A0A',
                  marginLeft: i === 0 ? 0 : -8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  {['SK', 'MT', 'ER', 'TB'][i]}
                </div>
              ))}
            </div>
            <div>
              <div style={{ display: 'flex', gap: 2, marginBottom: 3 }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="11" height="11" viewBox="0 0 11 11" fill="#ffffff">
                    <path d="M5.5 1l1.2 2.4 2.7.4-1.95 1.9.46 2.65L5.5 7.2 3.07 8.35l.46-2.65L1.58 3.8l2.72-.4z"/>
                  </svg>
                ))}
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600, color: '#ffffff', marginLeft: 4 }}>5.0</span>
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
                Trusted by 150+ businesses Australia-wide
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: Laptop */}
        <motion.div
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.45, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: 100,
            paddingBottom: 40,
            overflow: 'visible',
            position: 'relative',
            right: -48,
          }}
        >
          <LaptopMockup />
        </motion.div>
      </div>
    </section>
  )
}
