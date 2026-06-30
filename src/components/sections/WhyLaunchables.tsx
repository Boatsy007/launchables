'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const chapters = [
  {
    number: '01',
    label: "We're Fast",
    headline: 'Weeks, not months.',
    body: 'Most agencies take 3–4 months. We launch in weeks without cutting corners. Your time to market is our competitive advantage.',
    points: [
      { value: '3 weeks', label: 'Average delivery time' },
      { value: '4×', label: 'Faster than traditional agencies' },
      { value: '100%', label: 'On-time delivery rate' },
    ],
    accent: '#FF5C00',
    shape: 'fast',
  },
  {
    number: '02',
    label: "We're Premium",
    headline: 'No shortcuts. Ever.',
    body: 'Every pixel is considered. Every word is intentional. No templates, no shortcuts. We craft bespoke digital experiences that position you above the competition.',
    points: [
      { value: '100%', label: 'Custom designed' },
      { value: '0', label: 'Templates used' },
      { value: '5★', label: 'Average client rating' },
    ],
    accent: '#FF7A5C',
    shape: 'premium',
  },
  {
    number: '03',
    label: 'We Convert',
    headline: 'Beauty that sells.',
    body: 'Beautiful is pointless if it doesn\'t sell. Everything we build is optimised to convert visitors into customers, prospects into revenue.',
    points: [
      { value: '+340%', label: 'Avg. conversion lift' },
      { value: '48K+', label: 'Leads generated' },
      { value: '$24M+', label: 'Revenue attributed' },
    ],
    accent: '#FF5C00',
    shape: 'convert',
  },
  {
    number: '04',
    label: 'SEO First',
    headline: 'Built for Google.',
    body: 'We build for Google from day one — perfect Core Web Vitals, semantic HTML, structured data. Your site ranks because it was built to rank.',
    points: [
      { value: '#1', label: 'Rankings achieved for clients' },
      { value: '100', label: 'Lighthouse scores typical' },
      { value: '8 wks', label: 'Avg. time to first page' },
    ],
    accent: '#FF7A5C',
    shape: 'seo',
  },
  {
    number: '05',
    label: 'AI Powered',
    headline: 'Smarter. Faster.',
    body: 'We use AI tools to move faster, personalise better, and automate what slows you down. The future is already here — we\'ve integrated it into everything.',
    points: [
      { value: '20hrs', label: 'Saved per week via automation' },
      { value: '3×', label: 'Faster content production' },
      { value: '∞', label: 'Personalisation at scale' },
    ],
    accent: '#FF5C00',
    shape: 'ai',
  },
  {
    number: '06',
    label: 'Long-Term Partner',
    headline: "We don't disappear.",
    body: "We don't disappear after launch. We stay, we optimise, we grow with you. Your success is our ongoing brief.",
    points: [
      { value: '94%', label: 'Client retention rate' },
      { value: '2+ yrs', label: 'Avg. client relationship' },
      { value: '340+', label: 'Businesses still with us' },
    ],
    accent: '#FF7A5C',
    shape: 'partner',
  },
];

const ShapeVisual = ({ shape, accent }: { shape: string; accent: string }) => {
  const baseStyle = { color: accent };
  if (shape === 'fast') {
    return (
      <div className="relative w-full h-full flex items-center justify-center" style={baseStyle}>
        <div className="relative">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border"
              style={{
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                borderColor: accent,
                opacity: 0.15 + i * 0.05,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          ))}
          <div
            className="relative z-10 text-7xl font-bold"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: accent }}
          >
            3W
          </div>
        </div>
      </div>
    );
  }
  if (shape === 'premium') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          className="w-40 h-40 rotate-45 border-2"
          style={{ borderColor: accent, opacity: 0.4 }}
          animate={{ rotate: [45, 90, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div
          className="absolute text-6xl font-bold"
          style={{ fontFamily: 'Space Grotesk, sans-serif', color: accent }}
        >
          ✦
        </div>
      </div>
    );
  }
  if (shape === 'convert') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-48 h-48" fill="none">
          <motion.path
            d="M20 160 L60 80 L100 120 L140 40 L180 100"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.6}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="180" cy="100" r="8" fill={accent} opacity={0.6} />
        </svg>
      </div>
    );
  }
  if (shape === 'seo') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-32 h-32">
          <div
            className="absolute inset-0 rounded-full border-4"
            style={{ borderColor: accent, opacity: 0.3 }}
          />
          <motion.div
            className="absolute inset-2 rounded-full border-4"
            style={{ borderColor: accent, opacity: 0.5 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center text-2xl font-bold"
            style={{ color: accent, fontFamily: 'Space Grotesk, sans-serif' }}
          >
            #1
          </div>
        </div>
      </div>
    );
  }
  if (shape === 'ai') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              backgroundColor: accent,
              top: `${20 + Math.sin((i / 6) * Math.PI * 2) * 40 + 40}%`,
              left: `${20 + Math.cos((i / 6) * Math.PI * 2) * 40 + 40}%`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
          />
        ))}
        <div
          className="relative z-10 text-5xl font-bold"
          style={{ color: accent, fontFamily: 'Space Grotesk, sans-serif' }}
        >
          AI
        </div>
      </div>
    );
  }
  // partner
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative flex gap-4 items-end">
        {[40, 70, 55, 90, 65].map((h, i) => (
          <motion.div
            key={i}
            className="w-8 rounded-t"
            style={{ height: `${h}px`, backgroundColor: accent, opacity: 0.3 + i * 0.1 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          />
        ))}
      </div>
    </div>
  );
};

export default function WhyLaunchables() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent(next);
    },
    [current]
  );

  const prev = () => go(current === 0 ? chapters.length - 1 : current - 1);
  const next = () => go(current === chapters.length - 1 ? 0 : current + 1);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const chapter = chapters[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section
      id="why"
      style={{ backgroundColor: '#F8F7F4' }}
      className="py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold"
            style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
          >
            The Launchables Difference
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#111111' }}
          >
            Why Businesses Choose Launchables.
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{ backgroundColor: '#111111', minHeight: '520px' }}
        >
          {/* Big background number */}
          <div
            className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
            aria-hidden
          >
            <span
              className="font-bold leading-none"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(10rem, 25vw, 22rem)',
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1,
                marginLeft: '-2rem',
              }}
            >
              {chapter.number}
            </span>
          </div>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeInOut' }}
              className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[520px]"
            >
              {/* Left: content */}
              <div className="flex flex-col justify-center p-10 lg:p-16">
                <p
                  className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold"
                  style={{ color: chapter.accent, fontFamily: 'Inter, sans-serif' }}
                >
                  {chapter.label}
                </p>
                <h3
                  className="text-4xl md:text-5xl font-bold text-white mb-5"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {chapter.headline}
                </h3>
                <p
                  className="text-base leading-relaxed mb-10"
                  style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif', maxWidth: '480px' }}
                >
                  {chapter.body}
                </p>
                <div className="grid grid-cols-3 gap-6">
                  {chapter.points.map((pt) => (
                    <div key={pt.label}>
                      <div
                        className="text-2xl font-bold mb-1"
                        style={{ fontFamily: 'Space Grotesk, sans-serif', color: chapter.accent }}
                      >
                        {pt.value}
                      </div>
                      <div
                        className="text-xs uppercase tracking-wider"
                        style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
                      >
                        {pt.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: shape visual */}
              <div className="hidden lg:flex items-center justify-center p-12" style={{ minHeight: '400px' }}>
                <ShapeVisual shape={chapter.shape} accent={chapter.accent} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.6)' }}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {chapters.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  backgroundColor: i === current ? chapter.accent : 'rgba(255,255,255,0.25)',
                }}
                aria-label={`Go to chapter ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Chapter tabs */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          {chapters.map((ch, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              className="text-sm px-4 py-2 rounded-full border transition-all duration-200"
              style={{
                borderColor: i === current ? '#FF5C00' : 'rgba(17,17,17,0.15)',
                color: i === current ? '#FF5C00' : 'rgba(17,17,17,0.5)',
                backgroundColor: i === current ? 'rgba(255,92,0,0.06)' : 'transparent',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {ch.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
