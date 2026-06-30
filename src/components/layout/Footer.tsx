'use client'

import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Websites', href: '#services' },
  { label: 'Social Media', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '64px 24px 32px',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                display: 'block',
                marginBottom: 14,
              }}
            >
              LAUNCHABLES
            </a>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.35)',
                margin: '0 0 24px',
                maxWidth: 240,
              }}
            >
              Premium websites and social media management for Australian businesses ready to grow.
            </p>

            {/* Social */}
            <div style={{ display: 'flex', gap: 14 }}>
              {[
                { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
                { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
                { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
              ].map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ color: '#ffffff', y: -2 }}
                  style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s ease' }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.2em',
                color: '#FF5C00',
                marginBottom: 20,
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.38)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.38)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.2em',
                color: '#FF5C00',
                marginBottom: 20,
              }}
            >
              Services
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {[
                'Website Design',
                'Social Media Management',
                'SEO Optimisation',
                'Content Creation',
                'Photography & Video',
                'Paid Advertising',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.88rem',
                      color: 'rgba(255,255,255,0.38)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#ffffff')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.38)')}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.2em',
                color: '#FF5C00',
                marginBottom: 20,
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              <a
                href="mailto:hello@launchables.com.au"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.38)', textDecoration: 'none' }}
              >
                hello@launchables.com.au
              </a>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.88rem', color: 'rgba(255,255,255,0.38)' }}>
                Australia
              </span>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 24,
                padding: '11px 20px',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#ffffff',
                backgroundColor: '#FF5C00',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Get Started
            </motion.a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
            © 2025 Launchables. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map((l) => (
              <a
                key={l}
                href="#"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
