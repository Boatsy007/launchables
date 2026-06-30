"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Website Design",
    description: "Pixel-perfect websites that convert visitors into customers.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="34" height="26" rx="3" />
        <path d="M3 12h34" />
        <circle cx="8" cy="9" r="1.2" fill="#FF5C00" stroke="none" />
        <circle cx="13" cy="9" r="1.2" fill="#FF5C00" stroke="none" />
        <circle cx="18" cy="9" r="1.2" fill="#FF5C00" stroke="none" />
        <rect x="8" y="18" width="10" height="8" rx="1.5" />
        <path d="M22 18h10M22 23h7M22 28h9" />
      </svg>
    ),
    size: "large",
  },
  {
    id: 2,
    title: "Website Development",
    description: "Fast, scalable, and built to perform under any load.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="12,14 6,20 12,26" />
        <polyline points="28,14 34,20 28,26" />
        <path d="M22 10l-4 20" />
      </svg>
    ),
    size: "large",
  },
  {
    id: 3,
    title: "Social Media Management",
    description: "Content that builds communities and drives real engagement.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="8" r="3" />
        <circle cx="8" cy="16" r="3" />
        <circle cx="24" cy="24" r="3" />
        <path d="M11 14.5l10-5M11 17.5l10 5" />
      </svg>
    ),
    size: "medium",
  },
  {
    id: 4,
    title: "Brand Identity",
    description: "Logos, colours, and systems that make you unforgettable.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="16,3 20,12 30,12 22,18 25,28 16,22 7,28 10,18 2,12 12,12" />
      </svg>
    ),
    size: "medium",
  },
  {
    id: 5,
    title: "SEO",
    description: "Rank higher, get found faster, and stay there.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="14" r="8" />
        <path d="M20 20l6 6" />
        <path d="M10 14h8M14 10v8" />
      </svg>
    ),
    size: "medium",
  },
  {
    id: 6,
    title: "Google Business",
    description: "Own your local market with an optimised Google presence.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3C8.477 3 4 7.477 4 13s4.477 10 10 10 10-4.477 10-10" />
        <path d="M18 8h6v6" />
        <path d="M24 8l-7 7" />
        <circle cx="14" cy="13" r="3" />
      </svg>
    ),
    size: "small",
  },
  {
    id: 7,
    title: "Photography",
    description: "Visual content that stops the scroll and sells your story.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="24" height="18" rx="2.5" />
        <circle cx="14" cy="16" r="5" />
        <path d="M9 7l2-4h6l2 4" />
        <circle cx="21" cy="11" r="1.2" fill="#FF5C00" stroke="none" />
      </svg>
    ),
    size: "small",
  },
  {
    id: 8,
    title: "Video Production",
    description: "Cinematic content that makes every viewer feel something.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="17" height="14" rx="2" />
        <path d="M19 11l7-4v14l-7-4V11z" />
      </svg>
    ),
    size: "small",
  },
  {
    id: 9,
    title: "AI Automation",
    description: "Let machines do the work so your team can focus on growth.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="4" width="12" height="12" rx="2" />
        <circle cx="11" cy="8" r="1" fill="#FF5C00" stroke="none" />
        <circle cx="17" cy="8" r="1" fill="#FF5C00" stroke="none" />
        <path d="M11 12h6M6 16h16M10 16v6M18 16v6M7 22h14" />
      </svg>
    ),
    size: "small",
  },
  {
    id: 10,
    title: "Business Launch Strategy",
    description: "A complete launch roadmap tailored to your goals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2L4 8v12l10 6 10-6V8L14 2z" />
        <path d="M14 2v18M4 8l10 6 10-6" />
      </svg>
    ),
    size: "small",
  },
  {
    id: 11,
    title: "Marketing Campaigns",
    description: "Full-funnel campaigns that fill your pipeline.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14h20M17 7l7 7-7 7" />
        <path d="M4 7v14" />
      </svg>
    ),
    size: "small",
  },
  {
    id: 12,
    title: "Content Creation",
    description: "Words and visuals that educate, entertain, and convert.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h20M4 11h14M4 16h17M4 21h11" />
        <circle cx="23" cy="19" r="3" />
        <path d="M25.5 21.5l2 2" />
      </svg>
    ),
    size: "small",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(nx);
      y.set(ny);
    },
    [x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setHovered(false);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={`relative cursor-pointer h-full ${className || ""}`}
    >
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          border: hovered ? "1px solid rgba(255,92,0,0.5)" : "1px solid rgba(255,255,255,0.1)",
          boxShadow: hovered ? "0 0 30px rgba(255,92,0,0.15), inset 0 0 20px rgba(255,92,0,0.04)" : "none",
          background: hovered ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.05)",
          backdropFilter: "blur(24px)",
          borderRadius: "inherit",
          pointerEvents: "none",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

import type { Variants } from 'framer-motion'

const wordFadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const wordContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const panelItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const panelContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

// keep alias for backwards compat within this file
const panelFadeUp = panelItem

function WordSplit({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null);
  const words = text.split(" ");
  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap gap-x-[0.3em] ${className || ""}`}
      variants={wordContainer}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordFadeUp}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Services() {
  const gridRef = useRef(null);
  const inView = useInView(gridRef, { once: true, margin: "-100px" });

  const large = services.filter((s) => s.size === "large");
  const medium = services.filter((s) => s.size === "medium");
  const small = services.filter((s) => s.size === "small");

  return (
    <section
      style={{ backgroundColor: "#111111" }}
      className="relative py-28 px-6 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,92,0,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,122,92,0.04) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span
              className="text-orange-400 text-xs font-medium tracking-widest uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Our Services
            </span>
          </motion.div>

          <h2
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <WordSplit text="Everything You Need" />
            <br />
            <WordSplit text="to Launch." />
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 text-lg text-white/50"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            From pixels to profit — we handle every layer of your business launch.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-auto"
          variants={panelContainer}
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* 2 large panels */}
          {large.map((service) => (
            <motion.div
              key={service.id}
              
              /* stagger via container */
              variants={panelFadeUp}
              className="md:col-span-3"
            >
              <TiltCard className="rounded-3xl">
                <div
                  className="rounded-3xl p-8 min-h-[220px] flex flex-col justify-between"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(24px)",
                  }}
                >
                  <div>{service.icon}</div>
                  <div className="mt-6">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-white/50 text-base leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className="mt-6 flex items-center gap-2 text-orange-400 text-sm font-medium"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span>Learn more</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 7h10M8 3l4 4-4 4" />
                    </svg>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* 3 medium panels */}
          {medium.map((service) => (
            <motion.div
              key={service.id}
              
              variants={panelFadeUp}
              className="md:col-span-2"
            >
              <TiltCard className="rounded-3xl">
                <div
                  className="rounded-3xl p-6 min-h-[180px] flex flex-col justify-between"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(24px)",
                  }}
                >
                  <div>{service.icon}</div>
                  <div className="mt-4">
                    <h3
                      className="text-xl font-bold text-white mb-1.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-white/50 text-sm leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* 4 small panels — 3 cols each on md */}
          {small.slice(0, 4).map((service) => (
            <motion.div
              key={service.id}
              
              variants={panelFadeUp}
              className="md:col-span-3"
            >
              <TiltCard className="rounded-2xl">
                <div
                  className="rounded-2xl p-5 min-h-[140px] flex items-start gap-4"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(24px)",
                  }}
                >
                  <div className="shrink-0 mt-0.5">{service.icon}</div>
                  <div>
                    <h3
                      className="text-base font-bold text-white mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-white/50 text-xs leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* 3 small panels — 2 cols each on md */}
          {small.slice(4).map((service) => (
            <motion.div
              key={service.id}
              
              variants={panelFadeUp}
              className="md:col-span-2"
            >
              <TiltCard className="rounded-2xl">
                <div
                  className="rounded-2xl p-5 min-h-[130px] flex items-start gap-4"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(24px)",
                  }}
                >
                  <div className="shrink-0 mt-0.5">{service.icon}</div>
                  <div>
                    <h3
                      className="text-base font-bold text-white mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-white/50 text-xs leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
