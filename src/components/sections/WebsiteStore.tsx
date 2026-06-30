"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ExternalLink, ShoppingCart, Zap } from "lucide-react";

const BRAND = {
  dark: "#111111",
  surface: "#1A1A1A",
  offwhite: "#F8F7F4",
  orange: "#FF5C00",
  coral: "#FF7A5C",
};

type Category =
  | "All"
  | "Landing Pages"
  | "Corporate"
  | "Trades"
  | "Restaurants"
  | "Medical"
  | "Portfolio"
  | "Agency"
  | "Ecommerce"
  | "Booking";

const TABS: Category[] = [
  "All",
  "Landing Pages",
  "Corporate",
  "Trades",
  "Restaurants",
  "Medical",
  "Portfolio",
  "Agency",
  "Ecommerce",
  "Booking",
];

interface Template {
  id: number;
  name: string;
  category: Category;
  price: number;
  features: string[];
  tech: { name: string; color: string }[];
  gradientFrom: string;
  gradientTo: string;
  premium: boolean;
  accentColor: string;
}

const TEMPLATES: Template[] = [
  {
    id: 1,
    name: "Velocity",
    category: "Landing Pages",
    price: 299,
    features: ["Conversion optimised", "Lead capture", "A/B ready"],
    tech: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#555" },
      { name: "Tailwind", color: "#38BDF8" },
    ],
    gradientFrom: "#FF5C00",
    gradientTo: "#FF7A5C",
    premium: true,
    accentColor: "#FF5C00",
  },
  {
    id: 2,
    name: "Prestige Corporate",
    category: "Corporate",
    price: 499,
    features: ["Multi-page", "CMS ready", "Blog integrated"],
    tech: [
      { name: "Next.js", color: "#555" },
      { name: "Sanity", color: "#F03E2F" },
      { name: "TypeScript", color: "#3178C6" },
    ],
    gradientFrom: "#1A1A2E",
    gradientTo: "#16213E",
    premium: true,
    accentColor: "#4A6FA5",
  },
  {
    id: 3,
    name: "TradesPro",
    category: "Trades",
    price: 349,
    features: ["Booking form", "Review showcase", "Local SEO"],
    tech: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#555" },
    ],
    gradientFrom: "#1B4332",
    gradientTo: "#2D6A4F",
    premium: false,
    accentColor: "#52B788",
  },
  {
    id: 4,
    name: "Saveur",
    category: "Restaurants",
    price: 399,
    features: ["Menu integration", "Reservations", "Gallery"],
    tech: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
    ],
    gradientFrom: "#7B2D00",
    gradientTo: "#B45309",
    premium: true,
    accentColor: "#F59E0B",
  },
  {
    id: 5,
    name: "MediCare Pro",
    category: "Medical",
    price: 449,
    features: ["HIPAA considerations", "Booking", "Patient portal ready"],
    tech: [
      { name: "Next.js", color: "#555" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Prisma", color: "#5A67D8" },
    ],
    gradientFrom: "#0C4A6E",
    gradientTo: "#075985",
    premium: true,
    accentColor: "#38BDF8",
  },
  {
    id: 6,
    name: "Canvas Portfolio",
    category: "Portfolio",
    price: 249,
    features: ["Work showcase", "Case studies", "Contact"],
    tech: [
      { name: "React", color: "#61DAFB" },
      { name: "Framer", color: "#0055FF" },
    ],
    gradientFrom: "#1C1C2E",
    gradientTo: "#2D1B69",
    premium: false,
    accentColor: "#A78BFA",
  },
  {
    id: 7,
    name: "Agency Studio",
    category: "Agency",
    price: 599,
    features: ["Project showcase", "Team", "Proposal request"],
    tech: [
      { name: "Next.js", color: "#555" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Sanity", color: "#F03E2F" },
    ],
    gradientFrom: "#111111",
    gradientTo: "#331500",
    premium: true,
    accentColor: "#FF5C00",
  },
  {
    id: 8,
    name: "Shopfront",
    category: "Ecommerce",
    price: 699,
    features: ["Product pages", "Cart", "Payment integration"],
    tech: [
      { name: "Next.js", color: "#555" },
      { name: "Stripe", color: "#635BFF" },
      { name: "TypeScript", color: "#3178C6" },
    ],
    gradientFrom: "#134E4A",
    gradientTo: "#0D9488",
    premium: true,
    accentColor: "#2DD4BF",
  },
  {
    id: 9,
    name: "BookEase",
    category: "Booking",
    price: 499,
    features: ["Calendar", "Payments", "Reminders"],
    tech: [
      { name: "Next.js", color: "#555" },
      { name: "Stripe", color: "#635BFF" },
      { name: "Prisma", color: "#5A67D8" },
    ],
    gradientFrom: "#312E81",
    gradientTo: "#4338CA",
    premium: true,
    accentColor: "#818CF8",
  },
  {
    id: 10,
    name: "Spark Landing",
    category: "Landing Pages",
    price: 199,
    features: ["Hero video", "Testimonials", "CTA optimised"],
    tech: [
      { name: "React", color: "#61DAFB" },
      { name: "Tailwind", color: "#38BDF8" },
    ],
    gradientFrom: "#1E1B4B",
    gradientTo: "#7C3AED",
    premium: false,
    accentColor: "#C4B5FD",
  },
  {
    id: 11,
    name: "Elevation Corporate",
    category: "Corporate",
    price: 549,
    features: ["Investor ready", "Annual report", "News"],
    tech: [
      { name: "Next.js", color: "#555" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Sanity", color: "#F03E2F" },
    ],
    gradientFrom: "#0F172A",
    gradientTo: "#1E3A5F",
    premium: true,
    accentColor: "#60A5FA",
  },
  {
    id: 12,
    name: "FoodTruck",
    category: "Restaurants",
    price: 299,
    features: ["Menu rotator", "Location map", "Social feed"],
    tech: [
      { name: "React", color: "#61DAFB" },
      { name: "Tailwind", color: "#38BDF8" },
    ],
    gradientFrom: "#431407",
    gradientTo: "#C2410C",
    premium: false,
    accentColor: "#FB923C",
  },
];

function BrowserMockup({
  gradientFrom,
  gradientTo,
  accentColor,
}: {
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
}) {
  return (
    <div
      style={{
        height: 240,
        background: "#E5E7EB",
        borderRadius: "12px 12px 0 0",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          height: 32,
          background: "#D1D5DB",
          display: "flex",
          alignItems: "center",
          padding: "0 12px",
          gap: 6,
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#EF4444", display: "block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#F59E0B", display: "block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E", display: "block" }} />
        <div
          style={{
            flex: 1,
            marginLeft: 8,
            height: 18,
            background: "#E9ECEF",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            paddingLeft: 8,
          }}
        >
          <span style={{ fontSize: 9, color: "#9CA3AF", fontFamily: "monospace" }}>launchables.co/preview</span>
        </div>
      </div>

      {/* Content area */}
      <div
        style={{
          height: 208,
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Nav */}
        <div
          style={{
            height: 28,
            background: "rgba(255,255,255,0.15)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
            gap: 8,
          }}
        >
          <div style={{ width: 40, height: 10, background: accentColor, borderRadius: 2, opacity: 0.9 }} />
          <div style={{ flex: 1 }} />
          {[1, 2, 3].map((i) => (
            <div key={i} style={{ width: 20, height: 8, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
          ))}
        </div>

        {/* Hero */}
        <div style={{ display: "flex", gap: 12, flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6, justifyContent: "center" }}>
            <div style={{ height: 14, background: "rgba(255,255,255,0.85)", borderRadius: 3, width: "80%" }} />
            <div style={{ height: 10, background: "rgba(255,255,255,0.5)", borderRadius: 3, width: "60%" }} />
            <div style={{ height: 10, background: "rgba(255,255,255,0.5)", borderRadius: 3, width: "70%" }} />
            <div
              style={{
                marginTop: 4,
                height: 22,
                width: 72,
                background: accentColor,
                borderRadius: 4,
                opacity: 0.95,
              }}
            />
          </div>
          <div
            style={{
              width: 80,
              background: "rgba(255,255,255,0.1)",
              borderRadius: 6,
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
        </div>

        {/* Feature blocks */}
        <div style={{ display: "flex", gap: 6 }}>
          {[0.15, 0.1, 0.1].map((opacity, i) => (
            <div
              key={i}
              style={{ flex: 1, height: 32, background: `rgba(255,255,255,${opacity})`, borderRadius: 4 }}
            />
          ))}
        </div>

        {/* Reflection */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}

function TechDot({ tech }: { tech: { name: string; color: string } }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        title={tech.name}
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: tech.color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "default",
          border: "2px solid #F3F4F6",
          fontSize: 8,
          color: "#fff",
          fontWeight: 700,
        }}
      >
        {tech.name[0]}
      </div>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 4px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#111",
              color: "#fff",
              fontSize: 10,
              padding: "3px 7px",
              borderRadius: 4,
              whiteSpace: "nowrap",
              zIndex: 10,
              pointerEvents: "none",
            }}
          >
            {tech.name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TemplateCard({ template, index }: { template: Template; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.07, 0.42) }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        background: "#fff",
        borderRadius: 24,
        boxShadow: "0 10px 40px rgba(0,0,0,0.10)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        border: "1px solid #F3F4F6",
      }}
    >
      <BrowserMockup
        gradientFrom={template.gradientFrom}
        gradientTo={template.gradientTo}
        accentColor={template.accentColor}
      />

      <div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {/* Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.04em",
              padding: "3px 10px",
              borderRadius: 99,
              background: "#F3F4F6",
              color: "#6B7280",
              textTransform: "uppercase",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            {template.category}
          </span>
          {template.premium && (
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: 99,
                background: `${BRAND.orange}18`,
                color: BRAND.orange,
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <Zap size={10} fill={BRAND.orange} />
              {" "}Included animations
            </span>
          )}
        </div>

        {/* Name */}
        <h3
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 700,
            color: BRAND.dark,
            fontFamily: "'Space Grotesk', sans-serif",
            lineHeight: 1.2,
          }}
        >
          {template.name}
        </h3>

        {/* Features */}
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 7 }}>
          {template.features.map((f) => (
            <li key={f} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background: `${BRAND.orange}18`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Check size={10} color={BRAND.orange} strokeWidth={3} />
              </span>
              <span style={{ fontSize: 13, color: "#4B5563", fontFamily: "'Inter', sans-serif" }}>{f}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {template.tech.map((t) => (
            <TechDot key={t.name} tech={t} />
          ))}
        </div>

        {/* Price + CTA */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span
              style={{
                fontSize: 28,
                fontWeight: 800,
                color: BRAND.dark,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              ${template.price}
            </span>
            <span style={{ fontSize: 13, color: "#9CA3AF", fontFamily: "'Inter', sans-serif" }}>one-time</span>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                flex: 1,
                padding: "10px 0",
                border: `1.5px solid #E5E7EB`,
                background: "transparent",
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                color: BRAND.dark,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <ExternalLink size={13} /> Live Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                flex: 1,
                padding: "10px 0",
                border: "none",
                background: BRAND.orange,
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 700,
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <ShoppingCart size={13} /> Purchase
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WebsiteStore() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filtered =
    activeTab === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.category === activeTab);

  return (
    <section
      id="website-store"
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
          style={{ textAlign: "center", marginBottom: 56 }}
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
            Website Templates
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              color: BRAND.dark,
              margin: "0 0 16px",
              fontFamily: "'Space Grotesk', sans-serif",
              lineHeight: 1.1,
            }}
          >
            Premium Website Templates
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#6B7280",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Launch with a stunning website — built and ready to go.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          {TABS.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "8px 18px",
                borderRadius: 99,
                border: activeTab === tab ? "none" : "1.5px solid #E5E7EB",
                background: activeTab === tab ? BRAND.dark : "transparent",
                color: activeTab === tab ? "#fff" : "#6B7280",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: 28,
            }}
          >
            {filtered.map((template, index) => (
              <TemplateCard key={template.id} template={template} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
