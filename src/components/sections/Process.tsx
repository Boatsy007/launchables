'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    label: 'Launch',
    heading: 'Discovery & Strategy',
    description:
      'We start with a deep-dive into your vision, market, and goals. You leave with a launch roadmap.',
    bullets: [
      'Brand & market positioning workshop',
      'Competitor analysis & gap mapping',
      'Custom launch roadmap & timeline',
    ],
  },
  {
    number: '02',
    label: 'Build',
    heading: 'Design & Development',
    description:
      'Our team designs and builds every asset — website, brand, content, and systems — to perfection.',
    bullets: [
      'Custom website design & development',
      'Brand identity & content creation',
      'Systems, automation & integrations',
    ],
  },
  {
    number: '03',
    label: 'Grow',
    heading: 'Launch & Marketing',
    description:
      'We launch campaigns, manage socials, and optimise for SEO to drive real, sustainable traffic.',
    bullets: [
      'Paid & organic campaign launch',
      'Social media management & content',
      'Technical SEO & Core Web Vitals',
    ],
  },
  {
    number: '04',
    label: 'Scale',
    heading: 'Optimise & Scale',
    description:
      "With data, automation, and AI, we help you scale what works and cut what doesn't.",
    bullets: [
      'Performance analytics & reporting',
      'AI automation & workflow optimisation',
      'Growth strategy & scaling roadmap',
    ],
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{ backgroundColor: '#111111' }}
      className="py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-24 text-center"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
          >
            How We Work
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold text-white"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            From Zero to Launch.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop) */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px"
            style={{ background: 'rgba(255,92,0,0.15)', transform: 'translateX(-50%)' }}
          />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={step.number} className="relative">
                  {/* Center dot */}
                  <div
                    className="hidden lg:flex absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-2 items-center justify-center z-10"
                    style={{
                      transform: 'translate(-50%, -50%)',
                      borderColor: '#FF5C00',
                      backgroundColor: '#111111',
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: '#FF5C00' }}
                    />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    className="lg:grid lg:grid-cols-2 gap-0 py-16 lg:py-24"
                  >
                    {/* Spacer for right-side items */}
                    {!isLeft && <div className="hidden lg:block" />}

                    {/* Content panel */}
                    <div
                      className={`relative px-6 ${
                        isLeft ? 'lg:text-right lg:pr-24' : 'lg:pl-24'
                      }`}
                    >
                      {/* Big background number */}
                      <span
                        className="absolute select-none pointer-events-none font-bold leading-none"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          fontSize: 'clamp(6rem, 14vw, 14rem)',
                          color: 'rgba(255,92,0,0.04)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          right: isLeft ? '1rem' : undefined,
                          left: !isLeft ? '1rem' : undefined,
                          lineHeight: 1,
                        }}
                      >
                        {step.number}
                      </span>

                      <div className="relative z-10">
                        <p
                          className="text-xs uppercase tracking-[0.3em] mb-3 font-semibold"
                          style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
                        >
                          {step.label}
                        </p>
                        <h3
                          className="text-3xl md:text-4xl font-bold text-white mb-4"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {step.heading}
                        </h3>
                        <p
                          className="text-base leading-relaxed mb-6"
                          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}
                        >
                          {step.description}
                        </p>
                        <ul
                          className="flex flex-col gap-2"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {step.bullets.map((b) => (
                            <li
                              key={b}
                              className={`flex items-center gap-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: '#FF5C00' }}
                              />
                              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Spacer for left-side items */}
                    {isLeft && <div className="hidden lg:block" />}
                  </motion.div>

                  {/* Connecting line (mobile) */}
                  {i < steps.length - 1 && (
                    <div
                      className="lg:hidden mx-auto w-px h-12"
                      style={{ background: 'rgba(255,92,0,0.2)' }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
