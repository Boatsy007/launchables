import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Work',     href: '#portfolio' },
  { label: 'Services', href: '#services'  },
  { label: 'Pricing',  href: '#pricing'   },
  { label: 'About',    href: '#why'       },
]

function LogoMark() {
  return (
    <svg width="26" height="21" viewBox="0 0 40 32" fill="none" aria-label="Launchables">
      <rect x="2" y="2" width="7" height="28" rx="1.5" fill="#ffffff" />
      <rect x="2" y="23" width="15" height="7" rx="1.5" fill="#ffffff" />
      <path d="M20 4L35 16L20 28" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Nav() {
  const [visible, setVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setVisible(v > 80))
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Bottom floating nav ── */}
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: 28,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              padding: '8px 8px 8px 16px',
              borderRadius: '9999px',
              background: 'rgba(10,10,10,0.88)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
              whiteSpace: 'nowrap',
            }}
          >
            {/* Logo mark */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', marginRight: 12, flexShrink: 0, textDecoration: 'none' }}>
              <LogoMark />
            </a>

            {/* Divider */}
            <div style={{ width: 1, height: 16, background: 'rgba(255,255,255,0.1)', marginRight: 12, flexShrink: 0 }} />

            {/* Links — desktop */}
            <div className="hidden md:flex items-center" style={{ gap: 4 }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.83rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.55)',
                    textDecoration: 'none',
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget
                    el.style.color = '#ffffff'
                    el.style.background = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget
                    el.style.color = 'rgba(255,255,255,0.55)'
                    el.style.background = 'transparent'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '9px 20px',
                borderRadius: '9999px',
                fontSize: '0.83rem',
                fontWeight: 600,
                backgroundColor: '#ffffff',
                color: '#0A0A0A',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
                marginLeft: 8,
                flexShrink: 0,
              }}
            >
              Get Started
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1.5 5.5h8M6 2l3.5 3.5L6 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 10px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <motion.div style={{ width: 20, height: 16, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1, transformOrigin: 'center' }}
                  animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1 }}
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1, transformOrigin: 'center' }}
                  animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
              </motion.div>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── Mobile full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: '#0A0A0A',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            {[...NAV_LINKS, { label: 'Contact', href: '#contact' }].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.06 + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  textDecoration: 'none',
                  letterSpacing: '-0.03em',
                  padding: '8px 0',
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = '#ffffff')}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
