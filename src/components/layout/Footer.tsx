'use client'

const ACCENT = '#AAFF00'

const quickLinks = [
  { label: 'Website Design', href: '#services' },
  { label: 'Social Media', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0A0A0A',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '56px clamp(24px, 5vw, 72px) 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: 'clamp(32px, 5vw, 80px)',
          marginBottom: 48,
          alignItems: 'start',
        }}>
          <div>
            <a href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: 16 }}>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.03em' }}>
                Limner<span style={{ color: ACCENT }}>.</span>
              </span>
            </a>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', lineHeight: 1.7, color: '#444444', margin: '0 0 24px', maxWidth: 280 }}>
              Premium websites and social media management for Australian businesses ready to grow.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {['Instagram', 'LinkedIn'].map(s => (
                <a key={s} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: '#444444', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = ACCENT)}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#444444')}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#333333', marginBottom: 16 }}>Navigation</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#555555', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#555555')}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#333333', marginBottom: 16 }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              <a href="mailto:hello@launchables.com.au" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#555555', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#ffffff')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#555555')}>
                hello@launchables.com.au
              </a>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#555555' }}>Australia</span>
            </div>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 20px', borderRadius: '9999px',
                fontFamily: 'Inter, sans-serif', fontSize: '0.83rem', fontWeight: 700,
                color: '#0A0A0A', background: ACCENT, textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.opacity = '0.85')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.opacity = '1')}
            >
              Get Started →
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#333333', margin: 0 }}>
            © 2025 Limner. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#333333', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
