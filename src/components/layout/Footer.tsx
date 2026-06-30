'use client'

import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Why Us', href: '#why' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect x="2" y="2" width="7" height="28" rx="1.5" fill="#ffffff" />
      <rect x="2" y="23" width="15" height="7" rx="1.5" fill="#ffffff" />
      <path d="M20 4L35 16L20 28" stroke="#ffffff" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0A0A0A',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: 'clamp(48px, 6vw, 72px) 0 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 48px)' }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto auto auto',
          gap: 'clamp(32px, 5vw, 80px)',
          marginBottom: 56,
          alignItems: 'start',
        }}>
          <div>
            <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 16 }}>
              <LogoMark size={26} />
              <span style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: '#ffffff',
                letterSpacing: '-0.02em',
              }}>
                Launchables
              </span>
            </a>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.83rem',
              lineHeight: 1.7,
              color: '#444444',
              margin: '0 0 24px',
              maxWidth: 260,
            }}>
              Premium websites and social media management for Australian businesses ready to grow.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {[
                { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
                { icon: <LinkedInIcon />, label: 'LinkedIn', href: '#' },
              ].map(({ icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ color: '#ffffff', y: -2 }}
                  style={{ color: '#444444', display: 'flex', alignItems: 'center' }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#444444',
              marginBottom: 16,
            }}>
              Navigation
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.85rem',
                      color: '#555555',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = '#555555')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#444444',
              marginBottom: 16,
            }}>
              Services
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {['Website Design', 'Social Media Management', 'SEO Optimisation', 'Content Creation'].map(s => (
                <li key={s}>
                  <a
                    href="#services"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.85rem',
                      color: '#555555',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = '#555555')}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#444444',
              marginBottom: 16,
            }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              <a
                href="mailto:hello@launchables.com.au"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: '#555555',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = '#555555')}
              >
                hello@launchables.com.au
              </a>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#555555' }}>
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
                padding: '10px 20px',
                borderRadius: '9999px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.83rem',
                fontWeight: 600,
                color: '#0A0A0A',
                background: '#ffffff',
                textDecoration: 'none',
                letterSpacing: '-0.01em',
              }}
            >
              Get Started →
            </motion.a>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#333333', margin: 0 }}>
            © 2025 Launchables. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#333333', textDecoration: 'none' }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
