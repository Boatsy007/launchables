import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Websites',     href: '#services'   },
  { label: 'Social Media', href: '#services'   },
  { label: 'Work',         href: '#portfolio'  },
  { label: 'Pricing',      href: '#pricing'    },
  { label: 'About',        href: '#why'        },
  { label: 'Contact',      href: '#contact'    },
]

function LogoMark({ dark }: { dark: boolean }) {
  const c = dark ? '#0A0A0A' : '#FFFFFF'
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-label="Launchables">
      <rect x="2" y="2" width="7" height="28" rx="1.5" fill={c} />
      <rect x="2" y="23" width="15" height="7" rx="1.5" fill={c} />
      <path d="M20 4L35 16L20 28" stroke={c} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', (v) => setScrolled(v > 60))
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const textColor = scrolled ? '#0A0A0A' : '#ffffff'
  const textMuted = scrolled ? 'rgba(10,10,10,0.45)' : 'rgba(255,255,255,0.5)'

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '0 32px' }}
      >
        <motion.div
          animate={{
            backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
            borderBottomColor: scrolled ? 'rgba(0,0,0,0.07)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 68,
            borderBottom: '1px solid transparent',
          }}
        >
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <LogoMark dark={scrolled} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: textMuted,
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = textColor)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = textMuted)}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <motion.a
              href="#contact"
              className="hidden md:inline-flex"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '10px 22px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 600,
                backgroundColor: scrolled ? '#0A0A0A' : '#ffffff',
                color: scrolled ? '#ffffff' : '#0A0A0A',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                letterSpacing: '-0.01em',
              }}
            >
              Get Started
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: textColor }}
            >
              <motion.div style={{ width: 24, height: 20, position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1, transformOrigin: 'center' }}
                  animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1 }}
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
                <motion.span style={{ display: 'block', height: 1.5, background: 'currentColor', borderRadius: 1, transformOrigin: 'center' }}
                  animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </motion.nav>

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
            {NAV_LINKS.map((link, i) => (
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
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                marginTop: 24,
                padding: '14px 32px',
                borderRadius: '9999px',
                background: '#ffffff',
                color: '#0A0A0A',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Get Started →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
