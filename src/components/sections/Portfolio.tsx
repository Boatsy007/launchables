"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, TrendingUp } from "lucide-react";

const BRAND = {
  dark: "#111111",
  surface: "#1A1A1A",
  offwhite: "#F8F7F4",
  orange: "#FF5C00",
  coral: "#FF7A5C",
};

/* ─────────────────────── Browser Mockup ─────────────────────── */
function BrowserMockup({
  gradientFrom,
  gradientTo,
  accentColor,
  height = 300,
  projectName,
  children,
}: {
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  height?: number;
  projectName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
        background: "#D1D5DB",
        height,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      {/* Chrome */}
      <div
        style={{
          height: 36,
          background: "#D1D5DB",
          display: "flex",
          alignItems: "center",
          padding: "0 14px",
          gap: 7,
          flexShrink: 0,
        }}
      >
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#EF4444", display: "block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#F59E0B", display: "block" }} />
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#22C55E", display: "block" }} />
        <div
          style={{
            flex: 1,
            marginLeft: 10,
            height: 22,
            background: "#E5E7EB",
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            paddingLeft: 10,
          }}
        >
          <span style={{ fontSize: 10, color: "#9CA3AF", fontFamily: "monospace" }}>
            launchables.co/{projectName?.toLowerCase().replace(/\s+/g, "-") ?? "work"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 12,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, height: 28, background: "rgba(255,255,255,0.12)", borderRadius: 6, padding: "0 12px" }}>
          <div style={{ width: 48, height: 10, background: accentColor, borderRadius: 2 }} />
          <div style={{ flex: 1 }} />
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ width: 24, height: 8, background: "rgba(255,255,255,0.25)", borderRadius: 2 }} />
          ))}
        </div>

        {/* Hero */}
        <div style={{ display: "flex", gap: 16, flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
            <div style={{ height: 16, background: "rgba(255,255,255,0.9)", borderRadius: 4, width: "75%" }} />
            <div style={{ height: 10, background: "rgba(255,255,255,0.5)", borderRadius: 3, width: "55%" }} />
            <div style={{ height: 10, background: "rgba(255,255,255,0.4)", borderRadius: 3, width: "65%" }} />
            <div style={{ marginTop: 6, height: 26, width: 80, background: accentColor, borderRadius: 6, opacity: 0.95 }} />
          </div>
          <div
            style={{
              width: "35%",
              background: "rgba(255,255,255,0.1)",
              borderRadius: 8,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
        </div>

        {/* Stat blocks */}
        <div style={{ display: "flex", gap: 8 }}>
          {[0.15, 0.1, 0.1].map((op, i) => (
            <div key={i} style={{ flex: 1, height: 36, background: `rgba(255,255,255,${op})`, borderRadius: 6 }} />
          ))}
        </div>

        {/* Reflection */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            top: 0,
            height: "38%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {children}
      </div>
    </div>
  );
}

/* ─────────────────────── Featured project ─────────────────────── */
const FEATURED = {
  name: "Agency Studio",
  category: "Agency Website",
  result: "40+ new client enquiries/month",
  tags: ["Web Design", "Branding", "SEO"],
  gradientFrom: "#111111",
  gradientTo: "#2D0F00",
  accentColor: "#FF5C00",
};

/* ─────────────────────── Projects ─────────────────────── */
interface Project {
  name: string;
  category: string;
  metric: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    name: "Apex Plumbing",
    category: "Trades Website",
    metric: "+380% organic traffic",
    gradientFrom: "#1B4332",
    gradientTo: "#2D6A4F",
    accentColor: "#52B788",
    description: "Full rebrand + local SEO optimisation drove record search rankings.",
  },
  {
    name: "Nova Coffee",
    category: "Restaurant Brand + Website",
    metric: "220% increase in bookings",
    gradientFrom: "#431407",
    gradientTo: "#7C2D12",
    accentColor: "#FB923C",
    description: "Custom reservation system and brand identity for a specialty coffee roaster.",
  },
  {
    name: "Clearform AI",
    category: "SaaS Landing Page",
    metric: "4.8% conversion rate",
    gradientFrom: "#0C4A6E",
    gradientTo: "#0369A1",
    accentColor: "#38BDF8",
    description: "High-performance landing page engineered around user psychology.",
  },
  {
    name: "Velocity Gym",
    category: "Fitness Brand + Social",
    metric: "12,000 new followers in 90 days",
    gradientFrom: "#1E1B4B",
    gradientTo: "#4338CA",
    accentColor: "#818CF8",
    description: "Social-first content strategy that built a loyal community from scratch.",
  },
  {
    name: "The Styling Room",
    category: "E-commerce",
    metric: "$180K in first 6 months",
    gradientFrom: "#2D1B69",
    gradientTo: "#7C3AED",
    accentColor: "#C4B5FD",
    description: "End-to-end ecommerce build with product photography art direction.",
  },
  {
    name: "Greenpath Landscaping",
    category: "Local SEO + Website",
    metric: "#1 Google ranking",
    gradientFrom: "#14532D",
    gradientTo: "#166534",
    accentColor: "#4ADE80",
    description: "Technical SEO overhaul captured top local search position within 4 months.",
  },
  {
    name: "Summit Events",
    category: "Events Brand",
    metric: "3x ticket sales",
    gradientFrom: "#7C2D12",
    gradientTo: "#B45309",
    accentColor: "#FCD34D",
    description: "Event brand and campaign that sold out three consecutive shows.",
  },
  {
    name: "Orbit Digital",
    category: "Agency Website",
    metric: "40+ new client enquiries/month",
    gradientFrom: "#0F172A",
    gradientTo: "#1E3A5F",
    accentColor: "#60A5FA",
    description: "Award-winning agency site that became a conversion machine.",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        background: "#fff",
        border: "1px solid #E5E7EB",
        cursor: "pointer",
      }}
    >
      {/* Mockup with hover overlay */}
      <div style={{ position: "relative", height: 300 }}>
        <BrowserMockup
          gradientFrom={project.gradientFrom}
          gradientTo={project.gradientTo}
          accentColor={project.accentColor}
          height={300}
          projectName={project.name}
        />
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(17,17,17,0.82)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                padding: 24,
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "'Inter', sans-serif",
                  lineHeight: 1.5,
                }}
              >
                {project.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "10px 22px",
                  background: BRAND.orange,
                  border: "none",
                  borderRadius: 10,
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  fontFamily: "'Space Grotesk', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <ExternalLink size={13} /> View Project
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <div style={{ padding: "18px 20px 22px", display: "flex", flexDirection: "column", gap: 8 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: BRAND.orange,
            textTransform: "uppercase",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {project.category}
        </span>
        <h3
          style={{
            margin: 0,
            fontSize: 18,
            fontWeight: 700,
            color: BRAND.dark,
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          {project.name}
        </h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 13,
            fontWeight: 700,
            color: "#22C55E",
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          <TrendingUp size={14} /> {project.metric}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────── Main ─────────────────────── */
export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        background: BRAND.offwhite,
        padding: "100px 0 120px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 72 }}
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
            Our Work
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 800,
              color: BRAND.dark,
              margin: "0 0 16px",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Our Work{" "}
            <span style={{ color: BRAND.orange }}>Speaks.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#6B7280",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Every project is built to perform as good as it looks.
          </p>
        </motion.div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
            marginBottom: 80,
            background: "#fff",
            borderRadius: 28,
            padding: "48px 48px",
            boxShadow: "0 12px 48px rgba(0,0,0,0.09)",
            border: "1px solid #E5E7EB",
          }}
        >
          {/* Text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: BRAND.orange,
                  textTransform: "uppercase",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Featured Project
              </span>
            </div>
            <h3
              style={{
                margin: 0,
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 800,
                color: BRAND.dark,
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1.1,
              }}
            >
              {FEATURED.name}
            </h3>
            <p style={{ margin: 0, fontSize: 15, color: "#6B7280", fontFamily: "'Inter', sans-serif" }}>
              {FEATURED.category}
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 20px",
                background: "#F0FDF4",
                borderRadius: 12,
                border: "1px solid #BBF7D0",
              }}
            >
              <TrendingUp size={18} color="#16A34A" />
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#16A34A",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {FEATURED.result}
              </span>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {FEATURED.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "5px 14px",
                    borderRadius: 99,
                    background: `${BRAND.orange}12`,
                    color: BRAND.orange,
                    fontFamily: "'Space Grotesk', sans-serif",
                    border: `1px solid ${BRAND.orange}30`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                alignSelf: "flex-start",
                padding: "12px 28px",
                background: BRAND.dark,
                border: "none",
                borderRadius: 12,
                color: "#fff",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              View Case Study <ArrowRight size={15} />
            </motion.button>
          </div>

          {/* Browser mockup */}
          <div>
            <BrowserMockup
              gradientFrom={FEATURED.gradientFrom}
              gradientTo={FEATURED.gradientTo}
              accentColor={FEATURED.accentColor}
              height={380}
              projectName={FEATURED.name}
            />
          </div>
        </motion.div>

        {/* Project grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 28,
            marginBottom: 80,
          }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: BRAND.dark,
            borderRadius: 28,
            padding: "64px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative gradient blob */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.orange}30 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-40px",
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${BRAND.coral}20 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <p
            style={{
              margin: "0 0 16px",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: BRAND.orange,
              textTransform: "uppercase",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Ready to Build?
          </p>
          <h3
            style={{
              margin: "0 0 16px",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              color: BRAND.offwhite,
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.1,
              position: "relative",
            }}
          >
            Work with us.
          </h3>
          <p
            style={{
              margin: "0 0 36px",
              fontSize: 17,
              color: "#6B7280",
              maxWidth: 480,
              marginInline: "auto",
              lineHeight: 1.6,
            }}
          >
            Let&apos;s build something your competitors will be jealous of. Book a free strategy call today.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
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
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              Book a Free Strategy Call <ArrowRight size={16} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "14px 36px",
                background: "transparent",
                border: "1.5px solid #2A2A2A",
                borderRadius: 12,
                color: BRAND.offwhite,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              View More Work
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
