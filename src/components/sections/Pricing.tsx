'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: 'Website Design',
    price: 'From $2,500',
    period: 'one-time',
    description: 'A premium custom website designed to convert visitors into customers.',
    features: [
      'Custom design (no templates)',
      'Mobile-first & responsive',
      'Up to 10 pages',
      'SEO optimised',
      'Contact forms & CTA setup',
      'Google Analytics integration',
      'CMS for easy updates',
      '30-day post-launch support',
    ],
    cta: 'Enquire Now',
    featured: false,
  },
  {
    name: 'Website + Social Media',
    price: 'From $1,500',
    period: 'per month',
    description: 'Everything you need to dominate online — a beautiful website plus active social media management.',
    features: [
      'Everything in Website Design',
      'Social media content creation',
      'Daily posting (3–5 platforms)',
      'Growth strategy & planning',
      'Professional photography',
      'Community management',
      'Monthly performance reports',
      'Priority support',
    ],
    cta: 'Get Started',
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Social Media Management',
    price: 'From $800',
    period: 'per month',
    description: 'Full-service social media management that grows your audience and drives real engagement.',
    features: [
      'Content creation & copywriting',
      'Daily posting (2–3 platforms)',
      'Growth & engagement strategy',
      'Story & reel creation',
      'Community management',
      'Paid advertising (optional add-on)',
      'Monthly performance reports',
      'Dedicated account manager',
    ],
    cta: 'Enquire Now',
    featured: false,
  },
]

function CheckIcon({ featured }: { featured: boolean }) {
  return (
    <span
      style={{
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: featured ? 'rgba(255,255,255,0.15)' : 'rgba(255,92,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
        <path d="M1.5 4.5l2 2L7.5 2" stroke={featured ? '#ffffff' : '#FF5C00'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" style={{ backgroundColor: '#111111', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 72, textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.2em',
              color: '#FF5C00',
              fontFamily: 'Inter, sans-serif',
              marginBottom: 16,
            }}
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 16px',
            }}
          >
            Clear, honest pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: 'rgba(255,255,255,0.45)',
              maxWidth: 400,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            No hidden fees. No lock-in contracts. Enquire and we'll tailor a package to your business.
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                borderRadius: 24,
                padding: '40px',
                background: plan.featured ? '#FF5C00' : 'rgba(255,255,255,0.04)',
                border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column' as const,
                gap: 24,
                position: 'relative' as const,
                overflow: 'hidden',
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: 'absolute' as const,
                    top: 20,
                    right: 20,
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: 20,
                    padding: '4px 12px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.05em',
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <h3
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: plan.featured ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.5)',
                    margin: '0 0 16px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {plan.name}
                </h3>
                <div
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(1.6rem, 3vw, 2rem)',
                    color: '#ffffff',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {plan.price}
                </div>
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.8rem',
                    color: plan.featured ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.35)',
                    marginBottom: 16,
                  }}
                >
                  {plan.period}
                </div>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.88rem',
                    lineHeight: 1.6,
                    color: plan.featured ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.45)',
                    margin: 0,
                  }}
                >
                  {plan.description}
                </p>
              </div>

              <div style={{ width: '100%', height: 1, background: plan.featured ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.07)' }} />

              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10, flex: 1 }}>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.85rem',
                      color: plan.featured ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    <CheckIcon featured={plan.featured} />
                    {f}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '13px 24px',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: plan.featured ? '#FF5C00' : '#ffffff',
                  backgroundColor: plan.featured ? '#ffffff' : 'rgba(255,255,255,0.08)',
                  border: plan.featured ? 'none' : '1px solid rgba(255,255,255,0.12)',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                  marginTop: 'auto',
                }}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.3)',
            marginTop: 40,
          }}
        >
          All prices are in AUD. Custom packages available — just ask.
        </motion.p>
      </div>
    </section>
  )
}
