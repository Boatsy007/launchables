'use client'

import { motion } from 'framer-motion'

const ACCENT = '#AAFF00'

export default function Process() {
  return (
    <section id="process" style={{ backgroundColor: '#ffffff', padding: 'clamp(72px, 8vw, 100px) clamp(24px, 5vw, 72px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(48px, 6vw, 80px)',
          alignItems: 'center',
        }}>
          {/* Left: phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{
              width: 260,
              filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))',
            }}>
              <div style={{
                background: '#0A0A0A',
                borderRadius: 32,
                border: '8px solid #1a1a1a',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 60, height: 20, background: '#1a1a1a', borderRadius: '0 0 12px 12px', zIndex: 10 }} />
                <div style={{ paddingBottom: '200%', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#0A0A0A,#111)', padding: '36px 20px 24px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: 24 }}>
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 28, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 4 }}>
                        Limner<span style={{ color: ACCENT }}>.</span>
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.4)' }}>Digital Studio Australia</div>
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
                      {[
                        { label: 'Website Design', val: '↑ 340%', color: ACCENT },
                        { label: 'Social Followers', val: '15K', color: '#2BAEF5' },
                        { label: 'New Leads', val: '3×', color: '#DB2777' },
                      ].map(s => (
                        <div key={s.label} style={{
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          borderRadius: 12,
                          padding: '12px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
                          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 16, color: s.color }}>{s.val}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#contact" style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      padding: '10px', background: ACCENT, borderRadius: '9999px',
                      fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700,
                      color: '#0A0A0A', textDecoration: 'none', marginTop: 20,
                    }}>
                      Request Call Back →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#0A0A0A',
              margin: '0 0 24px',
            }}>
              100% Satisfaction Guaranteed
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.75, color: '#555555', margin: '0 0 16px' }}>
              We're personally involved with every project to ensure that we meet the expectations of our customers and make sure your business gets noticed in this ever-changing digital world.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.75, color: '#555555', margin: '0 0 16px' }}>
              We're proudly Australian owned and operated. We're affordable, creative, and best of all we love helping businesses grow their business.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.75, color: '#555555', margin: '0 0 32px' }}>
              Give our team a call today or request a call back. We'll be in touch straight away.
            </p>
            {/* Signature */}
            <div style={{ marginBottom: 28 }}>
              <svg viewBox="0 0 160 50" width="160" height="50" style={{ display: 'block', marginBottom: 8 }}>
                <path d="M10 35 C 20 10, 40 5, 55 25 C 65 38, 80 20, 95 28 C 110 36, 130 18, 150 22" stroke="#0A0A0A" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.9rem', color: '#0A0A0A' }}>
                Alex Thompson
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#888888' }}>
                CEO & Senior Account Executive
              </div>
            </div>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 28px',
                borderRadius: '9999px',
                background: ACCENT,
                color: '#0A0A0A',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.9rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Request Call Back
            </a>
          </motion.div>
        </div>

        {/* About 2-col */}
        <div style={{
          marginTop: 'clamp(64px, 8vw, 100px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          paddingTop: 'clamp(48px, 6vw, 80px)',
          borderTop: '1px solid rgba(0,0,0,0.08)',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#0A0A0A',
              margin: '0 0 20px',
            }}>
              We're the web & digital design company you can rely on.
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: '#666666', margin: '0 0 14px' }}>
              At Launchables, all of our design and development services are delivered with expert precision and flexible pricing. We have been handling website design services for companies across Australia since 2019.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: '#666666', margin: 0 }}>
              This has given us the chance to really hone our professional credentials, crafting a suite of services that really go the extra mile for our customers.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#0A0A0A',
              margin: '0 0 20px',
            }}>
              Why businesses choose our digital experts?
            </h3>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: '#666666', margin: '0 0 14px' }}>
              Our company has vast experience with various businesses and organisations where we provide web design, development and support services tailored to their requirements.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', lineHeight: 1.75, color: '#666666', margin: 0 }}>
              We invite you to try our services on for size. Every project is subjected to the same rigorous levels of care and attention. We make sure that all of our clients' unique needs and requirements are catered for.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
