'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    id: 'web',
    eyebrow: '01 · Website Design',
    headline: 'A website that works as hard as you do.',
    description:
      'Every website we build is custom-designed, mobile-first, and optimised to convert visitors into paying customers. No templates. No shortcuts.',
    features: [
      'Custom design, no templates',
      'Mobile-first & fully responsive',
      'SEO optimised from day one',
      'Fast loading — 95+ Lighthouse score',
      'Built to convert visitors into leads',
      'CMS ready for easy content updates',
    ],
    cta: 'Start My Website',
    href: '#contact',
    dark: true,
  },
  {
    id: 'social',
    eyebrow: '02 · Social Media Management',
    headline: 'Social media that actually grows your business.',
    description:
      "We handle everything — content creation, posting, strategy, and growth. You focus on running your business. We'll handle the rest.",
    features: [
      'Content creation & copywriting',
      'Daily posting across all platforms',
      'Growth strategy & planning',
      'Professional photography & video',
      'Community management',
      'Paid advertising management',
    ],
    cta: 'Grow My Socials',
    href: '#contact',
    dark: false,
  },
]

function CheckIcon() {
  return (
    <span
      style={{
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'rgba(255,92,0,0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2.5 2.5L8 2.5" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        borderRadius: 24,
        padding: '48px',
        background: service.dark ? '#111111' : '#ffffff',
        border: service.dark ? 'none' : '1px solid rgba(17,17,17,0.08)',
        boxShadow: service.dark
          ? '0 24px 60px rgba(0,0,0,0.15)'
          : '0 8px 40px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 28,
        position: 'relative' as const,
        overflow: 'hidden',
      }}
    >
      {service.dark && (
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,92,0,0.1) 0%, transparent 60%)',
          }}
        />
      )}

      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.2em',
          color: '#FF5C00',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {service.eyebrow}
      </span>

      <div>
        <h3
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: service.dark ? '#ffffff' : '#111111',
            margin: '0 0 14px',
          }}
        >
          {service.headline}
        </h3>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.98rem',
            lineHeight: 1.7,
            color: service.dark ? 'rgba(255,255,255,0.5)' : 'rgba(17,17,17,0.55)',
            margin: 0,
          }}
        >
          {service.description}
        </p>
      </div>

      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
        {service.features.map((f) => (
          <li
            key={f}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.88rem',
              color: service.dark ? 'rgba(255,255,255,0.65)' : 'rgba(17,17,17,0.7)',
            }}
          >
            <CheckIcon />
            {f}
          </li>
        ))}
      </ul>

      <motion.a
        href={service.href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '13px 26px',
          borderRadius: '9999px',
          fontSize: '0.9rem',
          fontWeight: 600,
          color: '#ffffff',
          backgroundColor: '#FF5C00',
          textDecoration: 'none',
          fontFamily: 'Inter, sans-serif',
          boxShadow: '0 8px 24px rgba(255,92,0,0.28)',
          alignSelf: 'flex-start' as const,
          marginTop: 4,
        }}
      >
        {service.cta}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" style={{ backgroundColor: '#F8F7F4', padding: '120px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{ marginBottom: 64 }}>
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
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#111111',
              margin: '0 0 16px',
              maxWidth: 520,
            }}
          >
            Two services. One focus. Your growth.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem',
              color: 'rgba(17,17,17,0.5)',
              maxWidth: 440,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            We build beautiful websites that generate leads, and manage social media that grows businesses. That's it.
          </motion.p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
