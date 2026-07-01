import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Work',     href: '#portfolio' },
  { label: 'Services', href: '#services'  },
  { label: 'Pricing',  href: '#pricing'   },
]

const DRAWER_LINKS = [
  { label: 'Our Work',              href: '#portfolio'    },
  { label: 'Website Design',        href: '#services'     },
  { label: 'Social Media',          href: '#services'     },
  { label: 'Marketplace',           href: '#marketplace'  },
  { label: 'Pricing',               href: '#pricing'      },
  { label: 'Why SSSHHH',            href: '#why'          },
  { label: 'FAQ',                   href: '#faq'          },
  { label: 'Start a Project',       href: '#contact'      },
]

export default function Nav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled,   setScrolled]   = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on('change', v => setScrolled(v > 60))
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      {/* ── Nav bar ── */}
      <motion.header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 80,
          height: 60,
          display: 'flex', alignItems: 'center',
          padding: '0 clamp(20px, 4vw, 48px)',
          transition: 'background 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(9,9,9,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
        }}
      >
        {/* Logo */}
        <a href="/" aria-label="SSSHHH — home" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: 'var(--text)', letterSpacing: '-0.03em' }}>
            SSSHHH<span style={{ color: 'var(--muted)' }}>.</span>
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: 2 }}>
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.875rem',
                fontWeight: 400,
                color: 'var(--secondary)',
                padding: '6px 14px',
                borderRadius: 6,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, justifyContent: 'flex-end' }}>
          <a
            href="#contact"
            className="hidden md:inline-flex"
            style={{
              alignItems: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--text)',
              padding: '7px 18px',
              border: '1px solid var(--border-lg)',
              borderRadius: 8,
              transition: 'background 0.25s ease, border-color 0.25s ease, color 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--text)'
              e.currentTarget.style.color = 'var(--bg)'
              e.currentTarget.style.borderColor = 'var(--text)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--text)'
              e.currentTarget.style.borderColor = 'var(--border-lg)'
            }}
          >
            Start Project
          </a>

          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            style={{
              display: 'flex', flexDirection: 'column', gap: 5,
              width: 32, height: 32,
              justifyContent: 'center', alignItems: 'center',
              background: 'none', border: 'none',
              color: 'var(--secondary)',
            }}
          >
            <span style={{ display: 'block', width: 20, height: 1, background: 'var(--secondary)', transition: 'width 0.2s' }} />
            <span style={{ display: 'block', width: 14, height: 1, background: 'var(--secondary)' }} />
          </button>
        </div>
      </motion.header>

      {/* ── Backdrop ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setDrawerOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 88, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
          />
        )}
      </AnimatePresence>

      {/* ── Side drawer ── */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: 0, right: 0, bottom: 0,
              width: 'min(380px, 92vw)',
              background: 'var(--surface)',
              borderLeft: '1px solid var(--border)',
              zIndex: 90,
              display: 'flex', flexDirection: 'column',
              padding: '0 0 40px',
              overflowY: 'auto',
            }}
          >
            {/* Drawer header */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '18px 28px',
              borderBottom: '1px solid var(--border)',
              height: 60,
            }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.3rem', color: 'var(--text)', letterSpacing: '-0.03em' }}>SSSHHH<span style={{ color: 'var(--muted)' }}>.</span></span>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                style={{ background: 'none', border: 'none', color: 'var(--muted)', padding: 4, lineHeight: 0 }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav style={{ flex: 1, padding: '12px 0' }}>
              {DRAWER_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.035 + 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 28px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: link.label === 'Start a Project' ? 'var(--text)' : 'var(--secondary)',
                    borderBottom: '1px solid var(--border)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = link.label === 'Start a Project' ? 'var(--text)' : 'var(--secondary)')}
                >
                  {link.label}
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ opacity: 0.3 }}>
                    <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              ))}
            </nav>

            {/* Drawer footer */}
            <div style={{ padding: '24px 28px 0', borderTop: '1px solid var(--border)' }}>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 6 }}>
                hello@ssshhh.com.au
              </p>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'var(--muted)' }}>
                Australia-wide
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
