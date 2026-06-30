"use client";

import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Business {
  id: number;
  name: string;
  category: string;
  price: string;
  metrics: [string, string, string];
  gradient: string;
  accentColor: string;
  icon: React.ReactNode;
}

const businesses: Business[] = [
  {
    id: 1,
    name: "Pressure Washing Co",
    category: "Service Business",
    price: "$699",
    metrics: ["Low startup cost", "High local demand", "Recurring revenue"],
    gradient: "linear-gradient(145deg, #FF5C00 0%, #FF7A5C 60%, #FFA07A 100%)",
    accentColor: "#FF5C00",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 50l30-30M17 13l5-5 10 10-5 5" />
        <path d="M40 8l12 12" />
        <path d="M34 44c0 0 5 5 10 2s8-10 8-10" />
        <circle cx="12" cy="48" r="4" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Web Design Agency",
    category: "Digital",
    price: "$999",
    metrics: ["Remote-first", "High margins", "Scalable to team"],
    gradient: "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    accentColor: "#FF5C00",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="10" width="48" height="36" rx="4" />
        <path d="M6 18h48" />
        <circle cx="13" cy="14" r="2" fill="rgba(255,255,255,0.4)" stroke="none" />
        <circle cx="21" cy="14" r="2" fill="rgba(255,255,255,0.4)" stroke="none" />
        <rect x="14" y="26" width="16" height="12" rx="2" />
        <path d="M34 26h16M34 33h12M34 40h14" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Golf Apparel Brand",
    category: "E-commerce",
    price: "$1,199",
    metrics: ["Affluent market", "High AOV", "Strong repeat sales"],
    gradient: "linear-gradient(145deg, #134e5e 0%, #71b280 100%)",
    accentColor: "#71b280",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="22" r="12" />
        <path d="M30 34v22M18 56h24" />
        <path d="M18 22c0-6.627 5.373-12 12-12" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Cleaning Company",
    category: "Service Business",
    price: "$599",
    metrics: ["Fast to launch", "Subscription model", "Low overhead"],
    gradient: "linear-gradient(145deg, #56ab2f 0%, #a8e063 100%)",
    accentColor: "#56ab2f",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M26 14l-10 34h20l-3-18 8 18h10L36 14H26z" />
        <path d="M18 48h24" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Sports Event Business",
    category: "Events",
    price: "$899",
    metrics: ["Community driven", "B2B revenue", "High ticket value"],
    gradient: "linear-gradient(145deg, #c94b4b 0%, #4b134f 100%)",
    accentColor: "#c94b4b",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="30" cy="30" r="20" />
        <path d="M20 10c0 0 5 10 10 10s10-10 10-10" />
        <path d="M10 30h40" />
        <path d="M20 50c0 0 5-10 10-10s10 10 10 10" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Digital Marketing Agency",
    category: "Digital",
    price: "$999",
    metrics: ["Retainer model", "Fast to sign clients", "Global reach"],
    gradient: "linear-gradient(145deg, #FF5C00 0%, #c0392b 100%)",
    accentColor: "#FF5C00",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 46l12-18 10 8 12-22 10 14" />
        <rect x="6" y="6" width="48" height="42" rx="4" />
        <path d="M6 52h48" />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Artisan Food Brand",
    category: "Consumer Goods",
    price: "$799",
    metrics: ["Passionate market", "DTC + wholesale", "Gift economy"],
    gradient: "linear-gradient(145deg, #f2994a 0%, #f2c94c 100%)",
    accentColor: "#f2994a",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 46V28c0-10 6-18 16-18s16 8 16 18v18H14z" />
        <path d="M10 46h40" />
        <path d="M24 14c0 0 0-4 6-4s6 4 6 4" />
        <path d="M22 30h16M22 37h16" />
      </svg>
    ),
  },
  {
    id: 8,
    name: "AI Automation Agency",
    category: "Tech",
    price: "$1,999",
    metrics: ["Enterprise clients", "$5k+ deals", "Explosive demand"],
    gradient: "linear-gradient(145deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    accentColor: "#7c3aed",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="18" y="8" width="24" height="24" rx="4" />
        <circle cx="25" cy="18" r="2" fill="rgba(255,255,255,0.4)" stroke="none" />
        <circle cx="35" cy="18" r="2" fill="rgba(255,255,255,0.4)" stroke="none" />
        <path d="M25 26h10M10 32h40M22 32v18M38 32v18M12 50h36" />
      </svg>
    ),
  },
  {
    id: 9,
    name: "Photography Studio",
    category: "Creative",
    price: "$499",
    metrics: ["Low competition", "Recurring bookings", "Premium rates"],
    gradient: "linear-gradient(145deg, #232526 0%, #414345 100%)",
    accentColor: "#FF7A5C",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="16" width="48" height="34" rx="4" />
        <circle cx="30" cy="33" r="10" />
        <path d="M22 16l4-8h8l4 8" />
        <circle cx="44" cy="24" r="2.5" fill="rgba(255,255,255,0.4)" stroke="none" />
      </svg>
    ),
  },
  {
    id: 10,
    name: "Car Detailing Business",
    category: "Automotive",
    price: "$699",
    metrics: ["High cash jobs", "Loyal clients", "Premium add-ons"],
    gradient: "linear-gradient(145deg, #FF7A5C 0%, #FF5C00 100%)",
    accentColor: "#FF5C00",
    icon: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 40h40l-5-16H15L10 40z" />
        <path d="M4 40h52v6a3 3 0 01-3 3H7a3 3 0 01-3-3v-6z" />
        <circle cx="18" cy="46" r="4" />
        <circle cx="42" cy="46" r="4" />
        <path d="M24 24l3-8h6l3 8" />
      </svg>
    ),
  },
];

// ─── Business Card ────────────────────────────────────────────────────────────

function BusinessCard({ business }: { business: Business }) {
  return (
    <div
      className="shrink-0 rounded-3xl overflow-hidden shadow-2xl flex flex-col select-none"
      style={{
        width: 400,
        height: 520,
        background: "#1A1A1A",
      }}
    >
      {/* Top 60% — gradient area */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "60%", background: business.gradient, flexShrink: 0 }}
      >
        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="mb-4 opacity-80">{business.icon}</div>
          <h3
            className="text-2xl font-black text-white leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}
          >
            {business.name}
          </h3>
          <span
            className="mt-2 px-3 py-1 rounded-full text-xs font-semibold text-white/80 border border-white/20 backdrop-blur-sm"
            style={{ background: "rgba(255,255,255,0.1)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {business.category}
          </span>
        </div>
      </div>

      {/* Bottom 40% — details panel */}
      <div
        className="flex flex-col flex-1 p-6"
        style={{ background: "#1A1A1A" }}
      >
        {/* Metrics */}
        <div className="flex flex-col gap-2 flex-1">
          {business.metrics.map((metric, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: business.accentColor }}
              />
              <span
                className="text-sm text-white/70"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {metric}
              </span>
            </div>
          ))}
        </div>

        {/* Price + button */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xs text-white/30 mb-0.5" style={{ fontFamily: "'Inter', sans-serif" }}>From</p>
            <p
              className="text-2xl font-black"
              style={{ color: business.accentColor === "#FF5C00" || business.accentColor === "#FF7A5C" ? "#FF5C00" : business.accentColor, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {business.price}
            </p>
          </div>
          <button
            className="px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#FF5C00", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Explore Business
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FeaturedBusinesses() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Scroll progress for indicator dots
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARD_WIDTH = 400;
  const CARD_GAP = 24;
  const TOTAL_CARDS = businesses.length;

  const scrollProgress = useTransform(x, (val) => {
    if (!constraintsRef.current) return 0;
    const minX = -(CARD_WIDTH + CARD_GAP) * (TOTAL_CARDS - 1);
    const pct = Math.abs(val) / Math.abs(minX);
    const idx = Math.round(pct * (TOTAL_CARDS - 1));
    setActiveIndex(Math.max(0, Math.min(TOTAL_CARDS - 1, idx)));
    return pct;
  });

  // Keep scrollProgress reactive
  void scrollProgress;

  const scrollTo = (index: number) => {
    const target = -index * (CARD_WIDTH + CARD_GAP);
    animate(x, target, { type: "spring", stiffness: 260, damping: 30 });
  };

  return (
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#111111" }}
      className="relative py-28 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(255,92,0,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-6 mb-14 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span
                  className="text-orange-400 text-xs font-medium tracking-widest uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Featured Businesses
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black text-white leading-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Featured Businesses
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-3 text-lg text-white/40"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Premium concepts ready to launch.
              </motion.p>
            </div>

            {/* Drag hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden md:flex items-center gap-2 text-white/30 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 10h12M10 4l6 6-6 6" />
              </svg>
              Drag to explore
            </motion.div>
          </div>
        </div>

        {/* Scroll track */}
        <div ref={constraintsRef} className="overflow-hidden pl-6 md:pl-12">
          <motion.div
            ref={trackRef}
            drag="x"
            style={{ x }}
            dragConstraints={{
              left: -(CARD_WIDTH + CARD_GAP) * (TOTAL_CARDS - 1),
              right: 0,
            }}
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
            style={{ width: "max-content" }}
          >
            {businesses.map((business, i) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <BusinessCard business={business} />
              </motion.div>
            ))}
            {/* Right padding */}
            <div className="shrink-0 w-6" />
          </motion.div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-10 px-6">
          {businesses.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                background: i === activeIndex ? "#FF5C00" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* Scroll progress line */}
        <div className="relative h-0.5 bg-white/10 mx-6 md:mx-12 mt-6 rounded-full overflow-hidden max-w-7xl mx-auto">
          <motion.div
            className="absolute left-0 top-0 h-full rounded-full"
            style={{
              width: `${((activeIndex + 1) / TOTAL_CARDS) * 100}%`,
              background: "#FF5C00",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {/* View All button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex justify-center mt-14 px-6"
        >
          <button
            className="group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90 active:scale-95 shadow-lg hover:shadow-orange-500/30"
            style={{
              background: "#FF5C00",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 15,
            }}
          >
            View All Businesses
            <svg
              className="transition-transform group-hover:translate-x-1"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9h12M10 4l5 5-5 5" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
