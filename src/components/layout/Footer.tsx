'use client'

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
      backgroundColor: 'var(--bg)',
      borderTop: '1px solid var(--border)',
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
              <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: 'var(--text)', letterSpacing: '-0.03em' }}>
                SSSHHH<span style={{ color: 'var(--muted)' }}>.</span>
              </span>
            </a>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--muted)', margin: '0 0 24px', maxWidth: 280 }}>
              We shut the f**k up and just do the work. Websites and social for Australian businesses.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              {['Instagram', 'LinkedIn'].map(s => (
                <a key={s} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.8rem', color: 'var(--muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--muted)')}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 16 }}>Navigation</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--secondary)')}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.65rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: 16 }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
              <a href="mailto:hello@ssshhh.com.au" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--secondary)')}>
                hello@ssshhh.com.au
              </a>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: 'var(--muted)' }}>Australia-wide</span>
            </div>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '10px 20px', borderRadius: 8,
                fontFamily: 'Inter, sans-serif', fontSize: '0.83rem', fontWeight: 500,
                color: 'var(--text)', background: 'transparent',
                border: '1px solid var(--border-lg)',
                textDecoration: 'none',
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'var(--text)'
                el.style.color = 'var(--bg)'
                el.style.borderColor = 'var(--text)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = 'var(--text)'
                el.style.borderColor = 'var(--border-lg)'
              }}
            >
              Start a project →
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--muted)', margin: 0 }}>
            © 2025 SSSHHH. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: 'var(--muted)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
