import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Work',     href: '#portfolio' },
  { label: 'Services', href: '#services'  },
  { label: 'Pricing',  href: '#pricing'   },
  { label: 'About',    href: '#why'       },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 80))
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Logo — always pinned top-left ── */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        style={{
          position: 'fixed',
          top: 24,
          left: 32,
          zIndex: 60,
          textDecoration: 'none',
          display: 'block',
        }}
      >
        <img
          src="/logo.png"
          alt="Limner"
          style={{
            height: 90,
            width: 'auto',
            display: 'block',
            userSelect: 'none',
          }}
          draggable={false}
        />
      </motion.a>

      {/* ── Top nav — visible before scroll, hides on scroll ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: 72,
              padding: '0 32px',
              gap: 4,
            }}
          >
            <div className="hidden md:flex items-center" style={{ gap: 4 }}>
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    padding: '7px 14px',
                    borderRadius: '9999px',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:inline-flex"
              style={{
                alignItems: 'center',
                gap: 6,
                padding: '9px 22px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: '#ffffff',
                color: '#0A0A0A',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-0.01em',
                marginLeft: 8,
              }}
            >
              Get Started
            </motion.a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#ffffff' }}
            >
              <div style={{ width: 22, height: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1 }} />
                <span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1 }} />
                <span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1 }} />
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom floating pill — appears on scroll ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed',
              bottom: 28,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 50,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              padding: '6px 6px 6px 20px',
              borderRadius: '9999px',
              background: 'rgba(10,10,10,0.9)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.1)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.05)',
              whiteSpace: 'nowrap',
            }}
          >
            {/* Links */}
            <div className="hidden md:flex items-center" style={{ gap: 2 }}>
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.83rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    padding: '7px 14px',
                    borderRadius: '9999px',
                    transition: 'color 0.2s ease, background 0.2s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
                    e.currentTarget.style.background = 'transparent'
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

            {/* Mobile hamburger */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '7px 12px', color: '#ffffff', display: 'flex', alignItems: 'center' }}
            >
              <motion.div style={{ width: 20, height: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1, transformOrigin: 'center' }}
                  animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1 }}
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1, transformOrigin: 'center' }}
                  animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
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
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.35)')}
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
