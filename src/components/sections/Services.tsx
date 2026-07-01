'use client'

import { motion } from 'framer-motion'

const ACCENT = '#AAFF00'

function LaptopMockup() {
  return (
    <div style={{
      width: '100%',
      maxWidth: 520,
      transform: 'perspective(1200px) rotateY(-8deg) rotateX(2deg)',
      transformOrigin: '50% 50%',
      filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))',
    }}>
      <div style={{
        background: '#1c1c1e',
        borderRadius: '12px 12px 0 0',
        border: '8px solid #2a2a2c',
        borderBottom: '12px solid #2a2a2c',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', top: 4, left: '50%',
          transform: 'translateX(-50%)',
          width: 6, height: 6, borderRadius: '50%',
          background: '#3d3d3d', zIndex: 10,
        }} />
        <div style={{ paddingBottom: '62.5%', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: '#0d1929', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '10px 16px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 11, color: '#fff' }}>Limner<span style={{ color: ACCENT }}>.</span></span>
              <div style={{ display: 'flex', gap: 12 }}>
                {['Services','Work','Contact'].map(l => (
                  <span key={l} style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>{l}</span>
                ))}
              </div>
              <div style={{ padding: '3px 10px', background: ACCENT, borderRadius: 3, fontFamily: 'Inter, sans-serif', fontSize: 8, fontWeight: 700, color: '#0A0A0A' }}>Quote</div>
            </div>
            <div style={{ flex: 1, padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18, color: '#fff', lineHeight: 1.1, marginBottom: 10 }}>
                Customer<br />Focused<br /><span style={{ color: ACCENT }}>Design.</span>
              </div>
              <div style={{ width: 60, height: 20, background: ACCENT, borderRadius: 3 }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 10, background: 'linear-gradient(to bottom,#3a3a3c,#2c2c2e)', borderRadius: '0 0 2px 2px' }} />
      <div style={{ height: 16, background: 'linear-gradient(to bottom,#3a3a3c,#2e2e30)', borderRadius: '0 0 6px 6px', clipPath: 'polygon(0 0,100% 0,96% 100%,4% 100%)' }} />
    </div>
  )
}

function PhoneMockup() {
  return (
    <div style={{
      width: 240,
      filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))',
      margin: '0 auto',
    }}>
      <div style={{
        background: '#1c1c1e',
        borderRadius: 32,
        border: '8px solid #2a2a2c',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 60, height: 20, background: '#2a2a2c', borderRadius: '0 0 12px 12px', zIndex: 10 }} />
        <div style={{ paddingBottom: '210%', position: 'relative', background: '#0A0A0A' }}>
          <div style={{ position: 'absolute', inset: 0, padding: '32px 16px 16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 13, color: '#fff' }}>Limner<span style={{ color: ACCENT }}>.</span></span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <span style={{ display: 'block', width: 16, height: 1.5, background: '#fff', borderRadius: 1 }} />
                <span style={{ display: 'block', width: 16, height: 1.5, background: '#fff', borderRadius: 1 }} />
              </div>
            </div>
            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', lineHeight: 1.05, marginBottom: 12, letterSpacing: '-0.03em' }}>
              We build<br /><span style={{ color: ACCENT }}>websites.</span>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginBottom: 20 }}>
              Premium web design & social media for Australian businesses.
            </div>
            <div style={{ padding: '8px 16px', background: ACCENT, borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, color: '#0A0A0A' }}>Get Started →</span>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
              {[['Website', '#2BAEF5'], ['Social', '#DB2777'], ['SEO', ACCENT]].map(([l, c]) => (
                <div key={l} style={{ flex: 1, padding: '8px 0', background: 'rgba(255,255,255,0.04)', borderRadius: 8, textAlign: 'center' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: c as string, margin: '0 auto 4px', opacity: 0.8 }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: 'rgba(255,255,255,0.4)' }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SECTION_STYLE = {
  backgroundColor: '#0A0A0A' as const,
  padding: 'clamp(72px, 8vw, 100px) clamp(24px, 5vw, 72px)',
}

const INNER = {
  maxWidth: 1280,
  margin: '0 auto',
  display: 'grid' as const,
  gridTemplateColumns: '1fr 1fr' as const,
  gap: 'clamp(48px, 6vw, 80px)' as const,
  alignItems: 'center' as const,
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: 'rgba(255,255,255,0.4)',
      letterSpacing: '0.08em',
      marginBottom: 20,
      textTransform: 'uppercase',
    }}>
      {children}
    </p>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'Space Grotesk, sans-serif',
      fontWeight: 800,
      fontSize: 'clamp(2.2rem, 4.5vw, 5rem)',
      lineHeight: 0.95,
      letterSpacing: '-0.04em',
      color: '#ffffff',
      margin: '0 0 24px',
    }}>
      {children}
    </h2>
  )
}

function SectionBody({ children }: { children: string }) {
  return (
    <p style={{
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.75,
      color: 'rgba(255,255,255,0.45)',
      margin: '0 0 36px',
      maxWidth: 480,
    }}>
      {children}
    </p>
  )
}

function OutlineButton({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '13px 28px',
        borderRadius: '9999px',
        border: '1.5px solid rgba(255,255,255,0.3)',
        fontFamily: 'Inter, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 600,
        color: '#ffffff',
        textDecoration: 'none',
        transition: 'border-color 0.2s, color 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = ACCENT
        el.style.color = ACCENT
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.borderColor = 'rgba(255,255,255,0.3)'
        el.style.color = '#ffffff'
      }}
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path d="M1.5 6.5h10M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  )
}

export default function Services() {
  return (
    <div id="services">
      {/* Block 1: Customer Focused Web Design */}
      <section style={{ ...SECTION_STYLE, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={INNER}>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Website Design</SectionLabel>
            <SectionHeading>Customer<br />Focused Web<br />Design</SectionHeading>
            <SectionBody>
              With a professional website from Launchables, we'll make sure your customers take action with best practice & customer focused call-to-actions. With over 5 years experience, our team knows what works in the digital world for businesses just like yours.
            </SectionBody>
            <OutlineButton href="#contact">More Information</OutlineButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <LaptopMockup />
          </motion.div>
        </div>
      </section>

      {/* Block 2: Anywhere & Everywhere */}
      <section style={{ ...SECTION_STYLE, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ ...INNER }}>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <PhoneMockup />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Responsive Website Design</SectionLabel>
            <SectionHeading>Anywhere &<br />Everywhere</SectionHeading>
            <SectionBody>
              Having a mobile responsive website is crucial for business. Google made it a ranking factor — and your customers expect it. At Launchables, we build every site to look and perform perfectly on all devices.
            </SectionBody>
            <OutlineButton href="#contact">More Information</OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Block 3: Get More Leads */}
      <section style={{ ...SECTION_STYLE, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionLabel>Marketing Support Services</SectionLabel>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(3rem, 7vw, 8rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              color: '#ffffff',
              margin: '0 0 28px',
            }}>
              Get More<br />Leads
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.45)',
              margin: '0 auto 40px',
              maxWidth: 540,
            }}>
              Lead generation is essential for businesses that want to convert audiences into paying customers. We determine the best lead capture options for your website and digital marketing to maximise customer leads.
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
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
