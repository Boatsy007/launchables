'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Metric {
  value: string;
  numericEnd: number;
  prefix: string;
  suffix: string;
  label: string;
  isOrange: boolean;
}

const metrics: Metric[] = [
  { value: '$24M+', numericEnd: 24, prefix: '$', suffix: 'M+', label: 'Revenue Generated', isOrange: true },
  { value: '340+', numericEnd: 340, prefix: '', suffix: '+', label: 'Businesses Launched', isOrange: false },
  { value: '580+', numericEnd: 580, prefix: '', suffix: '+', label: 'Websites Built', isOrange: false },
  { value: '48K+', numericEnd: 48, prefix: '', suffix: 'K+', label: 'Leads Generated', isOrange: true },
  { value: '12M+', numericEnd: 12, prefix: '', suffix: 'M+', label: 'Social Reach', isOrange: false },
  { value: '200M+', numericEnd: 200, prefix: '', suffix: 'M+', label: 'Campaign Impressions', isOrange: false },
];

const clients = [
  'Apex Plumbing', 'Nova Coffee', 'CleanPro', 'Summit Events',
  'The Styling Room', 'Greenpath', 'Clearform AI', 'Velocity Gym',
  'Hartley Legal', 'Blue Sky Solar', 'Ridge Roofing', 'Prime Physio',
];

function AnimatedCounter({ end, prefix, suffix, isOrange, delay }: {
  end: number;
  prefix: string;
  suffix: string;
  isOrange: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      const duration = 1800;
      const steps = 60;
      const increment = end / steps;
      let current = 0;
      const interval = setInterval(() => {
        current = Math.min(current + increment, end);
        setCount(Math.floor(current));
        if (current >= end) clearInterval(interval);
      }, duration / steps);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, end, delay]);

  return (
    <span
      ref={ref}
      style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: 'clamp(3rem, 7vw, 7rem)',
        fontWeight: 700,
        color: isOrange ? '#FF5C00' : '#ffffff',
        lineHeight: 1,
      }}
    >
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section
      id="results"
      style={{ backgroundColor: '#111111' }}
      className="py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold"
            style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
          >
            Proof in Numbers
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Numbers That Matter.
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative p-10 lg:p-12"
              style={{
                borderTop: `1px solid #FF5C00`,
                borderRight: `1px solid rgba(255,255,255,0.06)`,
              }}
            >
              {/* Subtle grid lines */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
              />

              <div className="mb-3">
                <AnimatedCounter
                  end={m.numericEnd}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  isOrange={m.isOrange}
                  delay={i * 0.15}
                />
              </div>
              <p
                className="uppercase tracking-[0.2em] text-xs font-medium"
                style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
              >
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <p
            className="text-base mb-8"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
          >
            Trusted by{' '}
            <span className="text-white font-semibold">340+ businesses</span>{' '}
            across Australia
          </p>

          {/* Client logo strip */}
          <div className="flex flex-wrap gap-3 justify-center">
            {clients.map((name) => (
              <span
                key={name}
                className="text-xs px-4 py-2 rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.35)',
                  fontFamily: 'Inter, sans-serif',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
