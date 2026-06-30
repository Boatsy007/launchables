"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BRAND = {
  dark: "#111111",
  surface: "#1A1A1A",
  offwhite: "#F8F7F4",
  orange: "#FF5C00",
  coral: "#FF7A5C",
};

/* ─────────────────────── Animated counter ─────────────────────── */
function useCounter(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

function AnimatedStat({
  label,
  value,
  suffix = "",
  prefix = "",
  sub,
  index,
}: {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  sub?: string;
  index: number;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, 1800, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        background: BRAND.surface,
        borderRadius: 16,
        padding: "20px 24px",
        border: "1px solid #2A2A2A",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <p style={{ margin: 0, fontSize: 12, color: "#6B7280", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
        {label}
      </p>
      <p style={{ margin: 0, fontSize: 36, fontWeight: 800, color: BRAND.orange, fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>
        {prefix}{count}{suffix}
      </p>
      {sub && (
        <p style={{ margin: 0, fontSize: 12, color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>{sub}</p>
      )}
    </motion.div>
  );
}

/* ─────────────────────── Phone Mockup ─────────────────────── */
function PhoneInstagram() {
  return (
    <div
      style={{
        width: 220,
        height: 460,
        borderRadius: 36,
        background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 100%)",
        border: "2px solid #2A2A2A",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Notch */}
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 80, height: 20, background: "#0D0D0D", borderRadius: 12, zIndex: 10 }} />
      {/* Screen content */}
      <div style={{ padding: "40px 12px 12px", display: "flex", flexDirection: "column", gap: 10, height: "100%", boxSizing: "border-box" }}>
        {/* Story bar */}
        <div style={{ display: "flex", gap: 8, marginBottom: 4 }}>
          {["#FF5C00", "#7C3AED", "#0D9488", "#F59E0B"].map((c, i) => (
            <div key={i} style={{ width: 36, height: 36, borderRadius: "50%", border: `2px solid ${c}`, background: `${c}22`, flexShrink: 0 }} />
          ))}
        </div>
        {/* Posts */}
        {[
          { bg: "linear-gradient(135deg,#FF5C00,#FF7A5C)", h: 120 },
          { bg: "linear-gradient(135deg,#7C3AED,#4338CA)", h: 90 },
          { bg: "linear-gradient(135deg,#0D9488,#134E4A)", h: 100 },
        ].map((post, i) => (
          <div key={i} style={{ borderRadius: 10, height: post.h, background: post.bg, flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", bottom: 8, left: 10, right: 10 }}>
              <div style={{ height: 6, background: "rgba(255,255,255,0.7)", borderRadius: 3, width: "60%", marginBottom: 4 }} />
              <div style={{ height: 5, background: "rgba(255,255,255,0.4)", borderRadius: 3, width: "40%" }} />
            </div>
          </div>
        ))}
        {/* Like bar */}
        <div style={{ display: "flex", gap: 12, paddingTop: 4 }}>
          {["♥ 1.2k", "💬 84", "✈ Share"].map((t, i) => (
            <span key={i} style={{ fontSize: 10, color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>{t}</span>
          ))}
        </div>
      </div>
      {/* Glass reflection */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "35%", background: "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)", pointerEvents: "none" }} />
    </div>
  );
}

function PhoneTikTok() {
  return (
    <div
      style={{
        width: 200,
        height: 420,
        borderRadius: 36,
        background: "#050505",
        border: "2px solid #2A2A2A",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Notch */}
      <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: 70, height: 18, background: "#0D0D0D", borderRadius: 10, zIndex: 10 }} />
      {/* Full-screen video */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #1E1B4B 0%, #4338CA 50%, #312E81 100%)",
        }}
      />
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 12 }}>
        {/* Right actions */}
        <div style={{ position: "absolute", right: 10, bottom: 80, display: "flex", flexDirection: "column", gap: 16, alignItems: "center" }}>
          {[["♥", "48k"], ["💬", "892"], ["↗", "2.1k"]].map(([icon, count], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
              <span style={{ fontSize: 20 }}>{icon}</span>
              <span style={{ fontSize: 9, color: "#fff", fontFamily: "'Inter', sans-serif" }}>{count}</span>
            </div>
          ))}
        </div>
        {/* Caption */}
        <div style={{ marginBottom: 8 }}>
          <div style={{ height: 7, background: "rgba(255,255,255,0.85)", borderRadius: 3, width: "75%", marginBottom: 5 }} />
          <div style={{ height: 5, background: "rgba(255,255,255,0.5)", borderRadius: 3, width: "55%" }} />
        </div>
        {/* Music bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>♪</div>
          <div style={{ height: 5, flex: 1, background: "rgba(255,255,255,0.2)", borderRadius: 3 }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30%", background: "linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)", pointerEvents: "none" }} />
    </div>
  );
}

function PhoneFaded() {
  return (
    <div
      style={{
        width: 190,
        height: 400,
        borderRadius: 36,
        background: "linear-gradient(135deg, #1A1A1A 0%, #222 100%)",
        border: "2px solid #222",
        position: "relative",
        overflow: "hidden",
        filter: "blur(1.5px)",
        opacity: 0.45,
        boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ padding: "48px 14px 14px", display: "flex", flexDirection: "column", gap: 12 }}>
        {[110, 80, 90].map((h, i) => (
          <div key={i} style={{ height: h, borderRadius: 10, background: `rgba(255,255,255,0.06)` }} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────── Platform card ─────────────────────── */
const PLATFORMS = [
  {
    name: "Instagram",
    color: "#E1306C",
    letter: "IG",
    services: ["Reels & Stories", "Grid curation", "Influencer collabs"],
  },
  {
    name: "TikTok",
    color: "#010101",
    accent: "#69C9D0",
    letter: "TT",
    services: ["Viral short-form", "Trend hijacking", "Sound strategy"],
  },
  {
    name: "Facebook",
    color: "#1877F2",
    letter: "FB",
    services: ["Community management", "Paid amplification", "Events"],
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    letter: "LI",
    services: ["Thought leadership", "B2B content", "Employee advocacy"],
  },
];

/* ─────────────────────── Pricing cards ─────────────────────── */
const PLANS = [
  { name: "Starter", price: 997, features: 8, popular: false },
  { name: "Growth", price: 1997, features: 16, popular: true },
  { name: "Scale", price: 3497, features: 24, popular: false },
];

/* ─────────────────────── Main Component ─────────────────────── */
export default function SocialMedia() {
  return (
    <section
      id="social-media"
      style={{
        background: BRAND.dark,
        padding: "100px 0 120px",
        fontFamily: "'Inter', sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 80 }}
        >
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: BRAND.orange,
              textTransform: "uppercase",
              marginBottom: 12,
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Social Media Management
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              color: BRAND.offwhite,
              margin: "0 0 16px",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Social Media That{" "}
            <span style={{ color: BRAND.orange }}>Actually Grows.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#6B7280",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Real engagement, real followers, real results — not just pretty posts.
          </p>
        </motion.div>

        {/* Hero row: phones + stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            marginBottom: 100,
          }}
        >
          {/* Phone mockups */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            style={{
              position: "relative",
              height: 520,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Far back faded */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(12deg) translateX(120px) translateY(20px)",
              }}
            >
              <PhoneFaded />
            </div>
            {/* TikTok — behind right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(8deg) translateX(80px) translateY(10px)",
              }}
            >
              <PhoneTikTok />
            </motion.div>
            {/* Instagram — front */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 70 }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%) rotate(-4deg) translateX(-40px)",
                zIndex: 2,
              }}
            >
              <PhoneInstagram />
            </motion.div>
          </motion.div>

          {/* Stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <AnimatedStat label="Avg. Follower Growth" value={340} suffix="%" index={0} />
            <AnimatedStat label="Engagement Rate" value={87} suffix="%" prefix="" sub="vs 1.2% industry average" index={1} />
            <AnimatedStat label="Content Pieces / Month" value={30} suffix="+" index={2} />
            <AnimatedStat label="Avg. Campaign ROAS" value={42} suffix="x" prefix="" index={3} />

            {/* Platform pills */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                background: BRAND.surface,
                borderRadius: 16,
                padding: "20px 24px",
                border: "1px solid #2A2A2A",
              }}
            >
              <p style={{ margin: "0 0 12px", fontSize: 12, color: "#6B7280", fontFamily: "'Space Grotesk', sans-serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Platforms Managed
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  { name: "Instagram", color: "#E1306C" },
                  { name: "TikTok", color: "#69C9D0" },
                  { name: "Facebook", color: "#1877F2" },
                  { name: "LinkedIn", color: "#0A66C2" },
                ].map((p) => (
                  <span
                    key={p.name}
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      padding: "5px 12px",
                      borderRadius: 99,
                      background: `${p.color}22`,
                      color: p.color,
                      border: `1px solid ${p.color}44`,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Platform support grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 80 }}
        >
          <h3
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: BRAND.offwhite,
              fontFamily: "'Space Grotesk', sans-serif",
              textAlign: "center",
              marginBottom: 36,
            }}
          >
            Every Platform, Fully Managed
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {PLATFORMS.map((platform, i) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{
                  background: BRAND.surface,
                  border: "1px solid #2A2A2A",
                  borderRadius: 16,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: platform.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                      color: "#fff",
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {platform.letter}
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "3px 9px",
                      borderRadius: 99,
                      background: "#22C55E22",
                      color: "#22C55E",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    Managed
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    fontWeight: 700,
                    color: BRAND.offwhite,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {platform.name}
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                  {platform.services.map((s) => (
                    <li key={s} style={{ fontSize: 13, color: "#6B7280", fontFamily: "'Inter', sans-serif", paddingLeft: 12, position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: BRAND.orange }}>•</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing tease */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: BRAND.offwhite,
              fontFamily: "'Space Grotesk', sans-serif",
              textAlign: "center",
              marginBottom: 36,
            }}
          >
            Simple, Transparent Pricing
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
              marginBottom: 36,
            }}
          >
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                style={{
                  background: plan.popular ? BRAND.orange : BRAND.surface,
                  border: plan.popular ? "none" : "1px solid #2A2A2A",
                  borderRadius: 20,
                  padding: "28px 24px",
                  position: "relative",
                  textAlign: "center",
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: BRAND.offwhite,
                      color: BRAND.dark,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 14px",
                      borderRadius: 99,
                      fontFamily: "'Space Grotesk', sans-serif",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Most Popular
                  </div>
                )}
                <p
                  style={{
                    margin: "0 0 8px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: plan.popular ? "rgba(255,255,255,0.8)" : "#6B7280",
                    fontFamily: "'Space Grotesk', sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {plan.name}
                </p>
                <p
                  style={{
                    margin: "0 0 4px",
                    fontSize: 40,
                    fontWeight: 800,
                    color: plan.popular ? "#fff" : BRAND.offwhite,
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1,
                  }}
                >
                  ${plan.price.toLocaleString()}
                </p>
                <p style={{ margin: "0 0 20px", fontSize: 13, color: plan.popular ? "rgba(255,255,255,0.7)" : "#4B5563", fontFamily: "'Inter', sans-serif" }}>
                  /month
                </p>
                <p style={{ margin: 0, fontSize: 13, color: plan.popular ? "rgba(255,255,255,0.85)" : "#6B7280", fontFamily: "'Inter', sans-serif" }}>
                  {plan.features} features included
                </p>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center" }}>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 36px",
                background: BRAND.orange,
                border: "none",
                borderRadius: 12,
                color: "#fff",
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View All Plans <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
