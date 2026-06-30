"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type Difficulty = "Easy" | "Medium" | "Advanced";
type Category =
  | "All"
  | "Ready-to-Launch"
  | "Business Ideas"
  | "Website Templates"
  | "AI Businesses"
  | "Digital Products"
  | "SaaS Ideas"
  | "Marketing Systems";

interface Product {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  price: string;
  priceNum: number;
  industry: string;
  earnings: string;
  setupTime: string;
  difficulty: Difficulty;
  features: string[];
  gradient: string;
  icon: React.ReactNode;
  isNew?: boolean;
  isFeatured?: boolean;
  description: string;
  testimonial?: { text: string; author: string };
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const products: Product[] = [
  {
    id: 1,
    title: "Pressure Washing Business",
    category: "Ready-to-Launch",
    price: "From $799",
    priceNum: 799,
    industry: "Home Services",
    earnings: "$8,000 – $15,000 / mo",
    setupTime: "1–2 weeks",
    difficulty: "Easy",
    isFeatured: true,
    description:
      "Everything you need to launch a profitable pressure washing business — branding, website, pricing templates, and a local outreach playbook.",
    features: [
      "Complete brand identity kit",
      "Local SEO-optimised website",
      "Pricing & quoting templates",
      "Google Business setup guide",
    ],
    gradient: "linear-gradient(135deg, #FF5C00 0%, #FF7A5C 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 40l24-24M14 10l4-4 8 8-4 4" />
        <path d="M32 6l10 10M28 34c0 0 4 4 8 2s6-8 6-8" />
        <circle cx="10" cy="38" r="3" />
      </svg>
    ),
    testimonial: { text: "Launched in 10 days and booked my first 8 clients in the first week.", author: "Jake M., Brisbane" },
  },
  {
    id: 2,
    title: "AI Content Agency",
    category: "AI Businesses",
    price: "From $1,499",
    priceNum: 1499,
    industry: "Digital / AI",
    earnings: "$10,000 – $25,000 / mo",
    setupTime: "2–3 weeks",
    difficulty: "Medium",
    isFeatured: true,
    isNew: true,
    description:
      "A fully structured AI content agency model — SOPs, client acquisition scripts, service packages, and AI tooling setup included.",
    features: [
      "Client onboarding system",
      "AI tooling workflow guide",
      "Service package templates",
      "Cold outreach email sequences",
    ],
    gradient: "linear-gradient(135deg, #1A1A1A 0%, #FF5C00 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="12" y="6" width="24" height="22" rx="4" />
        <circle cx="19" cy="15" r="2" />
        <circle cx="29" cy="15" r="2" />
        <path d="M19 22h10M10 28h28M18 28v12M30 28v12M13 40h22" />
      </svg>
    ),
    testimonial: { text: "The system is plug-and-play. Signed a $3k/mo retainer on day one.", author: "Sarah L., Sydney" },
  },
  {
    id: 3,
    title: "SaaS Invoice Tool",
    category: "SaaS Ideas",
    price: "From $2,999",
    priceNum: 2999,
    industry: "B2B Software",
    earnings: "$5,000 – $50,000 / mo",
    setupTime: "4–8 weeks",
    difficulty: "Advanced",
    description:
      "A validated SaaS idea blueprint — market research, feature spec, tech stack guide, and go-to-market strategy for an invoicing tool for freelancers.",
    features: [
      "Full product specification",
      "Tech stack recommendations",
      "Go-to-market strategy",
      "Pricing & monetisation model",
    ],
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="6" width="32" height="36" rx="3" />
        <path d="M14 16h20M14 22h20M14 28h12" />
        <circle cx="36" cy="34" r="6" fill="none" />
        <path d="M34 34h4M36 32v4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Local SEO Agency Pack",
    category: "Marketing Systems",
    price: "From $599",
    priceNum: 599,
    industry: "Digital Marketing",
    earnings: "$5,000 – $12,000 / mo",
    setupTime: "1 week",
    difficulty: "Easy",
    description:
      "Everything to launch a local SEO agency — prospecting lists, audit templates, proposal decks, and a fulfilment playbook you can run with a team of one.",
    features: [
      "Lead prospecting system",
      "SEO audit template",
      "Client proposal deck",
      "Fulfilment playbook",
    ],
    gradient: "linear-gradient(135deg, #FF7A5C 0%, #FF5C00 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="22" cy="22" r="12" />
        <path d="M30 30l10 10" />
        <path d="M16 22h12M22 16v12" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Restaurant Booking Website",
    category: "Website Templates",
    price: "From $299",
    priceNum: 299,
    industry: "Hospitality",
    earnings: "N/A",
    setupTime: "2–3 days",
    difficulty: "Easy",
    description:
      "A polished, mobile-first restaurant website template with built-in booking functionality, menu showcase, and Google Maps integration. Hand off to any client.",
    features: [
      "Online booking integration",
      "Dynamic menu display",
      "Google Maps embed",
      "Mobile-optimised design",
    ],
    gradient: "linear-gradient(135deg, #c94b4b 0%, #4b134f 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8v10c0 4 4 6 8 6s8-2 8-6V8" />
        <path d="M24 24v16M16 40h16" />
        <path d="M8 8v8M8 16a6 6 0 0012 0" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Car Detailing Business",
    category: "Ready-to-Launch",
    price: "From $699",
    priceNum: 699,
    industry: "Automotive Services",
    earnings: "$6,000 – $12,000 / mo",
    setupTime: "1–2 weeks",
    difficulty: "Easy",
    description:
      "Launch a premium car detailing business with a done-for-you brand, booking website, pricing tiers, and local marketing playbook.",
    features: [
      "Premium brand identity",
      "Online booking website",
      "Service & pricing tiers",
      "Instagram content starter pack",
    ],
    gradient: "linear-gradient(135deg, #232526 0%, #414345 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 30h32l-4-12H12L8 30z" />
        <path d="M4 30h40v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z" />
        <circle cx="14" cy="36" r="3" />
        <circle cx="34" cy="36" r="3" />
        <path d="M18 18l2-6h8l2 6" />
      </svg>
    ),
  },
  {
    id: 7,
    title: "Digital Marketing Agency",
    category: "Business Ideas",
    price: "From $399",
    priceNum: 399,
    industry: "Digital Services",
    earnings: "$15,000 – $40,000 / mo",
    setupTime: "2 weeks",
    difficulty: "Medium",
    description:
      "A validated digital marketing agency blueprint with niche selection guide, service menu, pricing playbook, and a 90-day client acquisition plan.",
    features: [
      "Niche selection framework",
      "Service & pricing menu",
      "Client acquisition plan",
      "Agency website template",
    ],
    gradient: "linear-gradient(135deg, #FF5C00 0%, #c0392b 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 36l8-12 8 6 8-16 8 10" />
        <rect x="4" y="4" width="40" height="32" rx="3" />
        <path d="M4 40h40" />
      </svg>
    ),
  },
  {
    id: 8,
    title: "Ecommerce Fashion Brand",
    category: "Ready-to-Launch",
    price: "From $1,199",
    priceNum: 1199,
    industry: "Fashion / Ecommerce",
    earnings: "$8,000 – $30,000 / mo",
    setupTime: "3–4 weeks",
    difficulty: "Medium",
    isNew: true,
    description:
      "A complete ecommerce fashion brand in a box — brand identity, Shopify store setup guide, supplier contacts, and a 60-day paid social campaign plan.",
    features: [
      "Full brand identity system",
      "Shopify store setup guide",
      "Supplier sourcing contacts",
      "60-day paid social plan",
    ],
    gradient: "linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 8l-4 8H8l6 6-2 10 12-6 12 6-2-10 6-6h-8l-4-8h-8z" />
      </svg>
    ),
  },
  {
    id: 9,
    title: "Photography Studio Brand",
    category: "Business Ideas",
    price: "From $499",
    priceNum: 499,
    industry: "Creative Services",
    earnings: "$4,000 – $10,000 / mo",
    setupTime: "1–2 weeks",
    difficulty: "Easy",
    description:
      "Launch a professional photography studio brand — logo, portfolio website template, booking system setup guide, and a rates & packages template.",
    features: [
      "Logo & visual identity",
      "Portfolio website template",
      "Booking system guide",
      "Rates & packages template",
    ],
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="12" width="40" height="28" rx="3" />
        <circle cx="24" cy="26" r="8" />
        <path d="M16 12l3-6h10l3 6" />
        <circle cx="36" cy="18" r="2" fill="rgba(255,255,255,0.6)" stroke="none" />
      </svg>
    ),
  },
  {
    id: 10,
    title: "AI Automation Agency",
    category: "AI Businesses",
    price: "From $1,999",
    priceNum: 1999,
    industry: "Tech / AI",
    earnings: "$20,000 – $60,000 / mo",
    setupTime: "3–5 weeks",
    difficulty: "Advanced",
    isFeatured: true,
    isNew: true,
    description:
      "The most comprehensive AI automation agency launch pack — service catalogue, tech stack guide, workflow templates, and a sales system for landing enterprise clients.",
    features: [
      "Full service catalogue",
      "AI workflow templates",
      "Enterprise sales system",
      "Tech stack setup guides",
    ],
    gradient: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="6" width="20" height="20" rx="4" />
        <circle cx="19" cy="14" r="1.5" fill="rgba(255,255,255,0.6)" stroke="none" />
        <circle cx="29" cy="14" r="1.5" fill="rgba(255,255,255,0.6)" stroke="none" />
        <path d="M19 20h10M8 26h32M16 26v14M32 26v14M10 40h28" />
      </svg>
    ),
    testimonial: { text: "I landed a $12k contract in my second week using the sales system.", author: "Marcus T., Melbourne" },
  },
  {
    id: 11,
    title: "Cleaning Company Launch Pack",
    category: "Ready-to-Launch",
    price: "From $599",
    priceNum: 599,
    industry: "Home Services",
    earnings: "$5,000 – $15,000 / mo",
    setupTime: "1 week",
    difficulty: "Easy",
    description:
      "Everything to launch a residential or commercial cleaning business — brand, website, job scheduling guide, and a local leaflet drop campaign template.",
    features: [
      "Brand identity & logo",
      "Booking website",
      "Job scheduling system",
      "Local marketing campaign",
    ],
    gradient: "linear-gradient(135deg, #56ab2f 0%, #a8e063 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10l-8 28h16l-2-14 6 14h8L28 10H20z" />
        <path d="M14 38h20" />
      </svg>
    ),
  },
  {
    id: 12,
    title: "Golf Apparel Brand",
    category: "Business Ideas",
    price: "From $799",
    priceNum: 799,
    industry: "Sport / Fashion",
    earnings: "$10,000 – $40,000 / mo",
    setupTime: "4–6 weeks",
    difficulty: "Medium",
    description:
      "A premium golf apparel brand blueprint — brand identity, supplier guide, Shopify store setup, and a social media content strategy targeting affluent golfers.",
    features: [
      "Premium brand identity",
      "Supplier & manufacturer guide",
      "Shopify store blueprint",
      "Social content strategy",
    ],
    gradient: "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="18" r="8" />
        <path d="M24 26v16M16 42h16" />
        <path d="M14 18c0-5.5 4.5-10 10-10" />
      </svg>
    ),
  },
];

const CATEGORIES: Category[] = [
  "All",
  "Ready-to-Launch",
  "Business Ideas",
  "Website Templates",
  "AI Businesses",
  "Digital Products",
  "SaaS Ideas",
  "Marketing Systems",
];

const SORTS = ["Featured", "Newest", "Price: Low", "Price: High"] as const;
type Sort = typeof SORTS[number];

// ─── Difficulty Badge ─────────────────────────────────────────────────────────

function DifficultyBadge({ level }: { level: Difficulty }) {
  const colors: Record<Difficulty, string> = {
    Easy: "bg-green-500/15 text-green-400 border border-green-500/30",
    Medium: "bg-yellow-500/15 text-yellow-400 border border-yellow-500/30",
    Advanced: "bg-red-500/15 text-red-400 border border-red-500/30",
  };
  return (
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors[level]}`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      {level}
    </span>
  );
}

// ─── Product Card ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  onPreview,
  index,
}: {
  product: Product;
  onPreview: (p: Product) => void;
  index: number;
}) {
  const [saved, setSaved] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: (index % 6) * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col group cursor-pointer"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
    >
      {/* Shine overlay on hover */}
      <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)" }} />

      {/* Save button */}
      <button
        onClick={(e) => { e.stopPropagation(); setSaved((s) => !s); }}
        className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow transition-transform hover:scale-110"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill={saved ? "#FF5C00" : "none"} stroke={saved ? "#FF5C00" : "#999"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 13.5C8 13.5 2 9.5 2 5.5a3 3 0 016 0 3 3 0 016 0c0 4-6 8-6 8z" />
        </svg>
      </button>

      {/* Cover area */}
      <div
        className="relative h-[200px] flex items-center justify-center overflow-hidden shrink-0"
        style={{ background: product.gradient }}
      >
        <div className="opacity-40">{product.icon}</div>
        {product.isNew && (
          <span
            className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-white text-orange-500 uppercase tracking-widest"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            New
          </span>
        )}
        {product.isFeatured && !product.isNew && (
          <span
            className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/30 bg-white/10 text-white uppercase tracking-widest backdrop-blur-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Category */}
        <span
          className="inline-flex self-start text-[10px] font-semibold px-2.5 py-0.5 rounded-full mb-3 bg-orange-500/10 text-orange-500 border border-orange-500/20"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {product.category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {product.title}
        </h3>

        {/* Industry & earnings */}
        <p className="text-xs text-gray-400 mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
          {product.industry}
          {product.earnings !== "N/A" && (
            <> &middot; <span className="text-gray-500 font-medium">Est. {product.earnings}</span></>
          )}
        </p>

        {/* Price */}
        <div className="text-2xl font-extrabold mb-3" style={{ color: "#FF5C00", fontFamily: "'Space Grotesk', sans-serif" }}>
          {product.price}
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Setup: {product.setupTime}
          </span>
          <DifficultyBadge level={product.difficulty} />
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-5 flex-1">
          {product.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
              <svg className="shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 13 13" fill="none">
                <circle cx="6.5" cy="6.5" r="6.5" fill="#FF5C00" fillOpacity="0.12" />
                <path d="M4 6.5l2 2 3-3" stroke="#FF5C00" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {f}
            </li>
          ))}
        </ul>

        {/* Button row */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => onPreview(product)}
            className="flex-1 py-2.5 text-sm font-semibold rounded-xl border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Preview
          </button>
          <button
            className="flex-1 py-2.5 text-sm font-bold rounded-xl text-white transition-all hover:opacity-90 active:scale-95"
            style={{ background: "#FF5C00", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Preview Modal ────────────────────────────────────────────────────────────

function PreviewModal({ product, onClose }: { product: Product; onClose: () => void }) {
  useEffect(() => {
    const handle = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-auto rounded-3xl bg-white shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-orange-50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>

        {/* Left: preview */}
        <div
          className="w-full md:w-2/5 min-h-[300px] md:min-h-full rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none flex flex-col items-center justify-center p-8 shrink-0"
          style={{ background: product.gradient }}
        >
          <div className="opacity-60 mb-6">{product.icon}</div>
          <h2 className="text-3xl font-black text-white text-center leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {product.title}
          </h2>
          <div className="mt-4 text-4xl font-extrabold text-white/90" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {product.price}
          </div>
          <div className="mt-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {product.category}
          </div>
        </div>

        {/* Right: details */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-gray-400 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>{product.industry}</span>
            <span className="text-gray-200">·</span>
            <DifficultyBadge level={product.difficulty} />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {product.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            {product.description}
          </p>

          {product.earnings !== "N/A" && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-orange-50 border border-orange-100 mb-6">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 2v16M6 6h6a2 2 0 010 4H8a2 2 0 000 4h6" />
              </svg>
              <div>
                <p className="text-xs text-orange-500 font-semibold uppercase tracking-wide" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Est. Earnings</p>
                <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{product.earnings}</p>
              </div>
            </div>
          )}

          <h4 className="font-bold text-gray-900 mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>What's Included</h4>
          <ul className="space-y-2 mb-6">
            {product.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="8" fill="#FF5C00" fillOpacity="0.12" />
                  <path d="M5 8l2.5 2.5 3.5-4" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
          </ul>

          {product.testimonial && (
            <blockquote className="border-l-4 border-orange-400 pl-4 mb-6">
              <p className="text-sm italic text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>"{product.testimonial.text}"</p>
              <footer className="mt-1 text-xs font-semibold text-gray-400" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>— {product.testimonial.author}</footer>
            </blockquote>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-2">
            <button
              className="flex-1 py-3 text-sm font-bold rounded-2xl text-white transition-all hover:opacity-90"
              style={{ background: "#FF5C00", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Get Started — {product.price}
            </button>
            <button
              className="sm:w-32 py-3 text-sm font-semibold rounded-2xl border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Save
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<Sort>("Featured");
  const [previewProduct, setPreviewProduct] = useState<Product | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.industry.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case "Featured":
        list = [...list.filter((p) => p.isFeatured), ...list.filter((p) => !p.isFeatured)];
        break;
      case "Newest":
        list = [...list.filter((p) => p.isNew), ...list.filter((p) => !p.isNew)];
        break;
      case "Price: Low":
        list.sort((a, b) => a.priceNum - b.priceNum);
        break;
      case "Price: High":
        list.sort((a, b) => b.priceNum - a.priceNum);
        break;
    }

    return list;
  }, [activeCategory, search, sort]);

  const handlePreview = useCallback((p: Product) => setPreviewProduct(p), []);
  const handleClose = useCallback(() => setPreviewProduct(null), []);

  return (
    <section ref={sectionRef} style={{ backgroundColor: "#F8F7F4" }} className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-500 text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Marketplace
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-6xl font-black text-gray-900 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            The Business Marketplace
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-lg text-gray-500"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Browse, buy, and launch premium businesses and digital products — ready to go.
          </motion.p>
        </div>

        {/* Filter bar — sticky */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="sticky top-4 z-30 mb-10"
        >
          <div
            className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg p-4 flex flex-col gap-4"
            style={{ border: "1px solid rgba(0,0,0,0.06)" }}
          >
            {/* Category pills + search + sort */}
            <div className="flex flex-wrap items-center gap-2">
              {/* Search */}
              <div className="relative mr-auto">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round">
                  <circle cx="7" cy="7" r="4.5" />
                  <path d="M11 11l3 3" />
                </svg>
                <input
                  type="text"
                  placeholder="Search products…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 pr-4 py-2 text-sm rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder:text-gray-400 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 w-52 transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className="px-3 py-2 text-sm rounded-xl bg-gray-50 border border-gray-200 text-gray-700 outline-none focus:border-orange-400 cursor-pointer"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {SORTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-4 py-1.5 rounded-full text-xs font-semibold transition-all"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background: activeCategory === cat ? "#FF5C00" : "transparent",
                    color: activeCategory === cat ? "#fff" : "#666",
                    border: activeCategory === cat ? "1px solid #FF5C00" : "1px solid #e5e5e5",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 text-gray-400"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              No products match your search.
            </motion.div>
          ) : (
            <motion.div
              key={`${activeCategory}-${sort}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onPreview={handlePreview}
                  index={i}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result count */}
        {filtered.length > 0 && (
          <p className="text-center mt-8 text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
            Showing {filtered.length} of {products.length} products
          </p>
        )}
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewProduct && (
          <PreviewModal product={previewProduct} onClose={handleClose} />
        )}
      </AnimatePresence>
    </section>
  );
}
