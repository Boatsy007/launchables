'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type Product = {
  id: string
  category: string
  name: string
  description: string
  price: string
  tag?: string
}

const CATEGORIES = ['All', 'Pre-built Websites', 'Business Kits', 'Social Packs', 'Digital Assets']

const PRODUCTS: Product[] = [
  {
    id: 'trades-site',
    category: 'Pre-built Websites',
    name: 'Trades Business Website',
    description: 'Ready-to-launch website for plumbers, electricians, builders. Custom colours, your logo, live in 48 hours.',
    price: '$1,200',
    tag: 'Most popular',
  },
  {
    id: 'cafe-site',
    category: 'Pre-built Websites',
    name: 'Café & Restaurant Website',
    description: 'Beautiful, mobile-first website with menu, reservations and Google Maps integration.',
    price: '$900',
  },
  {
    id: 'health-site',
    category: 'Pre-built Websites',
    name: 'Health & Wellness Website',
    description: 'Professional website for clinics, therapists and wellness businesses. Booking integration included.',
    price: '$1,100',
  },
  {
    id: 'salon-site',
    category: 'Pre-built Websites',
    name: 'Salon & Beauty Website',
    description: 'Elegant site for hair salons, beauty therapists and nail studios. Online booking ready.',
    price: '$950',
  },
  {
    id: 'trades-kit',
    category: 'Business Kits',
    name: 'Complete Trades Business Kit',
    description: 'Website + branding + Google Business + social media setup. Everything to launch a trade business.',
    price: '$3,500',
    tag: 'Best value',
  },
  {
    id: 'cafe-kit',
    category: 'Business Kits',
    name: 'Complete Café Launch Kit',
    description: 'Website, Instagram setup, menu design, Google listing and 30 days of social media management.',
    price: '$4,200',
  },
  {
    id: 'social-starter',
    category: 'Social Packs',
    name: 'Social Media Starter Pack',
    description: '30 pieces of branded content — posts, stories and reels. Ready to publish.',
    price: '$350',
  },
  {
    id: 'content-pack',
    category: 'Social Packs',
    name: 'Content Creation Pack',
    description: '60 pieces of custom content across Instagram, Facebook and TikTok. One month of posting.',
    price: '$600',
  },
  {
    id: 'brand-pack',
    category: 'Digital Assets',
    name: 'Brand Identity Pack',
    description: 'Logo, colour palette, typography, brand guide and 5 social media templates.',
    price: '$800',
  },
  {
    id: 'seo-pack',
    category: 'Digital Assets',
    name: 'SEO Foundation Pack',
    description: 'Keyword research, competitor analysis and 3-month SEO roadmap for your business.',
    price: '$490',
  },
]

function ProductCard({ p, i }: { p: Product; i: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: i * 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: hovered ? 'var(--surface)' : 'transparent',
        border: '1px solid',
        borderColor: hovered ? 'var(--border-lg)' : 'var(--border)',
        borderRadius: 12,
        padding: 'clamp(20px, 2.5vw, 28px)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'background 0.25s ease, border-color 0.25s ease',
        cursor: 'default',
      }}
    >
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
          <span style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: 'var(--muted)',
          }}>
            {p.category}
          </span>
          {p.tag && (
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.68rem',
              fontWeight: 500,
              color: 'var(--secondary)',
              padding: '2px 8px',
              border: '1px solid var(--border)',
              borderRadius: 4,
            }}>
              {p.tag}
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 600,
          fontSize: '1.05rem',
          color: 'var(--text)',
          letterSpacing: '-0.02em',
          marginBottom: 10,
          lineHeight: 1.3,
        }}>
          {p.name}
        </h3>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.85rem',
          lineHeight: 1.65,
          color: 'var(--secondary)',
          marginBottom: 24,
        }}>
          {p.description}
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--border)' }}>
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 600,
          fontSize: '1.1rem',
          color: 'var(--text)',
          letterSpacing: '-0.02em',
        }}>
          {p.price}
        </span>
        <a
          href="#contact"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.82rem',
            fontWeight: 500,
            color: 'var(--muted)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
        >
          Enquire →
        </a>
      </div>
    </motion.div>
  )
}

export default function MarketplaceSection() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active)

  return (
    <section id="marketplace" style={{ background: 'var(--bg)', padding: 'clamp(80px, 10vw, 120px) clamp(20px, 4vw, 48px)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: 'clamp(36px, 5vw, 56px)' }}
        >
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.72rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 20 }}>
            Marketplace
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--text)',
            }}>
              Ready to<br />launch
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.9rem',
              color: 'var(--secondary)',
              maxWidth: 340,
              lineHeight: 1.65,
            }}>
              Pre-built products and kits that get your business online fast — without compromising on quality.
            </p>
          </div>
        </motion.div>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.82rem',
                fontWeight: 400,
                color: active === c ? 'var(--bg)' : 'var(--secondary)',
                background: active === c ? 'var(--text)' : 'transparent',
                border: '1px solid',
                borderColor: active === c ? 'var(--text)' : 'var(--border)',
                borderRadius: 6,
                padding: '7px 16px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(16px, 2vw, 24px)',
          }}
        >
          {filtered.map((p, i) => <ProductCard key={p.id} p={p} i={i} />)}
        </motion.div>
      </div>
    </section>
  )
}
