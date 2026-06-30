import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Services',     href: '#services'    },
  { label: 'Marketplace',  href: '#marketplace' },
  { label: 'Businesses',   href: '#businesses'  },
  { label: 'Websites',     href: '#websites'    },
  { label: 'Work',         href: '#portfolio'   },
  { label: 'Contact',      href: '#contact'     },
] as const

// Launchables mark — minimal "L" wordmark
function LaunchablesMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Launchables">
      <rect width="24" height="24" rx="6" fill="#FF5C00" />
      <path d="M7 6v12h10" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// Magnetic CTA button
function MagneticCTA() {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 28 })
  const springY = useSpring(y, { stiffness: 300, damping: 28 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.35)
    y.set((e.clientY - cy) * 0.35)
  }, [x, y])

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  const scrollToContact = () => {
    const el = document.getElementById('contact') ?? document.querySelector('[data-section="contact"]')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToContact}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      className="relative flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-white overflow-hidden select-none"
      style={{
        background: 'linear-gradient(135deg, #FF5C00 0%, #FF7A5C 100%)',
        boxShadow: '0 0 0 0 rgba(255,92,0,0)',
        x: springX,
        y: springY,
      }}
    >
      {/* glow ring on hover */}
      <motion.span
        className="absolute inset-0 rounded-full"
        initial={{ boxShadow: '0 0 0 0 rgba(255,92,0,0)' }}
        whileHover={{ boxShadow: '0 0 20px 4px rgba(255,92,0,0.45)' }}
        transition={{ duration: 0.25 }}
      />
      <span className="relative z-10 whitespace-nowrap">Start a Launch</span>
      <svg className="relative z-10 w-3.5 h-3.5 -rotate-45" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </motion.button>
  )
}

// Single nav link with animated active indicator
function NavLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id) ?? document.querySelector(`[data-section="${id}"]`)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative px-1 py-0.5 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
      style={{ color: active ? '#FF5C00' : 'rgba(255,255,255,0.65)' }}
    >
      <motion.span
        whileHover={{ color: '#ffffff' }}
        transition={{ duration: 0.15 }}
        className="relative z-10"
      >
        {label}
      </motion.span>

      {/* Active dot indicator */}
      <AnimatePresence>
        {active && (
          <motion.span
            layoutId="nav-dot"
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
        )}
      </AnimatePresence>
    </a>
  )
}

// Mobile compact pill
function MobilePill({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  const scrollToContact = () => {
    const el = document.getElementById('contact') ?? document.querySelector('[data-section="contact"]')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      className="flex items-center gap-3 px-4 py-3"
      initial={false}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex-shrink-0"
        aria-label="Back to top"
      >
        <LaunchablesMark />
      </button>

      {/* Divider */}
      <span className="h-5 w-px bg-white/15" />

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col gap-1 p-1"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <motion.span
          animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
          className="block w-4 h-0.5 bg-white/75 rounded-full origin-center"
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
          className="block w-4 h-0.5 bg-white/75 rounded-full"
          transition={{ duration: 0.2 }}
        />
        <motion.span
          animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
          className="block w-4 h-0.5 bg-white/75 rounded-full origin-center"
          transition={{ duration: 0.2 }}
        />
      </button>

      <span className="h-5 w-px bg-white/15" />

      {/* CTA */}
      <button
        onClick={scrollToContact}
        className="rounded-full px-4 py-1.5 text-xs font-semibold text-white"
        style={{ background: 'linear-gradient(135deg, #FF5C00, #FF7A5C)' }}
      >
        Start
      </button>
    </motion.div>
  )
}

export default function FloatingBottomNav() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState<string>('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Show nav after hero is in view (after 80vh scroll or 1.5s)
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.6) setVisible(true)

      // Active section detection
      const sections = ['services', 'marketplace', 'businesses', 'websites', 'portfolio', 'contact']
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id) ?? document.querySelector(`[data-section="${id}"]`)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.5) {
            current = id
            break
          }
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { clearTimeout(timer); window.removeEventListener('scroll', onScroll) }
  }, [])

  // Responsive
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Close mobile menu on nav click
  const handleMobileNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id) ?? document.querySelector(`[data-section="${id}"]`)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
  }

  const getActiveHref = () => {
    const map: Record<string, string> = {
      services: '#services', marketplace: '#marketplace', businesses: '#businesses',
      websites: '#websites', portfolio: '#work', contact: '#contact',
    }
    return active ? map[active] ?? '' : ''
  }

  return (
    <>
      {/* Mobile full-screen menu overlay */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[998] flex flex-col items-center justify-center"
            style={{ background: 'rgba(10,10,10,0.96)', backdropFilter: 'blur(20px)' }}
            onClick={() => setMenuOpen(false)}
          >
            <nav className="flex flex-col items-center gap-7">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleMobileNavClick(item.href) }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="text-4xl font-semibold text-white/80 hover:text-white transition-colors"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.06 + 0.05 }}
                onClick={() => { setMenuOpen(false); handleMobileNavClick('#contact') }}
                className="mt-4 rounded-full px-8 py-3.5 text-lg font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #FF5C00, #FF7A5C)' }}
              >
                Start a Launch
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The floating bar itself */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28, delay: 0.1 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999]"
            role="navigation"
            aria-label="Floating navigation"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(15,15,15,0.82)',
                backdropFilter: 'blur(28px) saturate(180%)',
                WebkitBackdropFilter: 'blur(28px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.09)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.45), 0 1px 0 rgba(255,255,255,0.06) inset',
              }}
            >
              {isMobile ? (
                <MobilePill menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
              ) : (
                <div className="flex items-center gap-1 px-3 py-2.5">
                  {/* Logo mark */}
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center justify-center w-9 h-9 rounded-xl mr-2 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                    aria-label="Back to top"
                  >
                    <LaunchablesMark />
                  </button>

                  {/* Divider */}
                  <span className="h-5 w-px bg-white/10 mr-2" />

                  {/* Nav links */}
                  <nav className="flex items-center gap-0.5">
                    {NAV_ITEMS.map((item) => {
                      const sectionId = item.href.replace('#', '')
                      const isActive = active === sectionId || getActiveHref() === item.href
                      return (
                        <NavLink
                          key={item.href}
                          label={item.label}
                          href={item.href}
                          active={isActive}
                        />
                      )
                    })}
                  </nav>

                  {/* Divider */}
                  <span className="h-5 w-px bg-white/10 mx-2" />

                  {/* CTA */}
                  <MagneticCTA />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
