import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ACCENT = '#AAFF00'

const DRAWER_LINKS = [
  { label: 'Website Design', href: '#services' },
  { label: 'Social Media Management', href: '#services' },
  { label: 'SEO & Growth', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px, 4vw, 48px)',
        height: 68,
        background: '#0A0A0A',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 800,
            fontSize: '1.4rem',
            color: '#ffffff',
            letterSpacing: '-0.03em',
          }}>
            Limner<span style={{ color: ACCENT }}>.</span>
          </span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a
            href="#contact"
            className="hidden md:block"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.5)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
          >
            Contact the Limner Team
          </a>
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
              color: '#ffffff', padding: 0,
            }}
          >
            Menu
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: 18 }}>
              <span style={{ display: 'block', height: 1.5, background: '#ffffff', borderRadius: 1 }} />
              <span style={{ display: 'block', height: 1.5, background: '#ffffff', borderRadius: 1 }} />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(2px)',
            }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: 'min(400px, 90vw)',
              background: '#111111',
              zIndex: 201,
              display: 'flex', flexDirection: 'column',
              padding: '24px 36px 40px',
              overflowY: 'auto',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 52,
            }}>
              <span style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800, fontSize: '1.2rem',
                color: '#ffffff', letterSpacing: '-0.02em',
              }}>
                Limner<span style={{ color: ACCENT }}>.</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'rgba(255,255,255,0.6)', padding: 4,
                  display: 'flex', alignItems: 'center', gap: 8,
                  fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
                }}
              >
                Menu
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div style={{ flex: 1 }}>
              {DRAWER_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    fontSize: '1.05rem',
                    color: '#ffffff',
                    textDecoration: 'none',
                    padding: '16px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = ACCENT)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                >
                  {link.label}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.3 }}>
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#portfolio"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px 22px',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '9999px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 500,
                color: '#ffffff',
                textDecoration: 'none',
                margin: '28px 0',
                alignSelf: 'flex-start',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = ACCENT
                el.style.color = ACCENT
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.25)'
                el.style.color = '#ffffff'
              }}
            >
              View Our Work
            </motion.a>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                  hello@launchables.com.au
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
                  Australia-wide
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
