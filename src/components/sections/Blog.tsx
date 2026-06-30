'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorInitials: string;
  authorColor: string;
  gradient: string;
}

const categories = ['All', 'Business', 'Marketing', 'AI', 'SEO', 'Branding', 'Startups'];

const featuredArticle: Article = {
  id: 0,
  title: '10 Business Ideas You Can Launch This Weekend With Under $1,000',
  excerpt:
    "The barrier to starting a business has never been lower. With the right idea, a laptop, and less than a thousand dollars, you can be operational in 48 hours. We've tested these ideas and verified they actually work.",
  category: 'Business',
  readTime: '8 min read',
  date: 'Jun 28, 2025',
  author: 'Jake Launchables',
  authorInitials: 'JL',
  authorColor: '#FF5C00',
  gradient: 'linear-gradient(135deg, #FF5C00 0%, #FF7A5C 50%, #1A1A1A 100%)',
};

const articles: Article[] = [
  {
    id: 1,
    title: 'The AI Automation Stack Every Small Business Needs in 2025',
    excerpt:
      'Stop doing tasks a computer can do. We break down the exact tools and workflows saving our clients 20+ hours per week.',
    category: 'AI',
    readTime: '6 min read',
    date: 'Jun 25, 2025',
    author: 'Sarah Chen',
    authorInitials: 'SC',
    authorColor: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)',
  },
  {
    id: 2,
    title: 'Why Your Google Business Profile Is Your Most Valuable Asset',
    excerpt:
      'Most businesses ignore it. The ones that optimise it dominate local search. Here is exactly what to do.',
    category: 'SEO',
    readTime: '5 min read',
    date: 'Jun 22, 2025',
    author: 'Tom Rhodes',
    authorInitials: 'TR',
    authorColor: '#16A34A',
    gradient: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)',
  },
  {
    id: 3,
    title: 'How to Build a Brand Identity That Commands Premium Prices',
    excerpt:
      'Commodities compete on price. Brands compete on value. We show you how to make the shift with practical steps.',
    category: 'Branding',
    readTime: '7 min read',
    date: 'Jun 20, 2025',
    author: 'Emily Ross',
    authorInitials: 'ER',
    authorColor: '#DB2777',
    gradient: 'linear-gradient(135deg, #DB2777 0%, #9D174D 100%)',
  },
  {
    id: 4,
    title: 'Social Media Strategy for Service Businesses: What Actually Works',
    excerpt:
      'Forget the generic advice. We share the exact playbooks that took our clients from 0 to 15K followers in 90 days.',
    category: 'Marketing',
    readTime: '9 min read',
    date: 'Jun 18, 2025',
    author: 'Marcus T.',
    authorInitials: 'MT',
    authorColor: '#0284C7',
    gradient: 'linear-gradient(135deg, #0284C7 0%, #0369A1 100%)',
  },
  {
    id: 5,
    title: 'The Complete Guide to Launching a Pressure Washing Business',
    excerpt:
      'One of the best low-cost, high-margin businesses you can start. Equipment, pricing, marketing — everything covered.',
    category: 'Business',
    readTime: '10 min read',
    date: 'Jun 15, 2025',
    author: 'Jake Launchables',
    authorInitials: 'JL',
    authorColor: '#FF5C00',
    gradient: 'linear-gradient(135deg, #FF5C00 0%, #EA580C 100%)',
  },
  {
    id: 6,
    title: 'Why Most Agency Websites Fail to Convert (And How to Fix Yours)',
    excerpt:
      'A pretty website that nobody books from is a liability. We audit 100s of agency sites and found the same problems over and over.',
    category: 'Marketing',
    readTime: '6 min read',
    date: 'Jun 12, 2025',
    author: 'Sarah Chen',
    authorInitials: 'SC',
    authorColor: '#7C3AED',
    gradient: 'linear-gradient(135deg, #111 0%, #1A1A1A 100%)',
  },
];

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer"
      style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.06)' }}
    >
      {/* Thumbnail */}
      <div
        className="h-48 w-full"
        style={{ background: article.gradient }}
        aria-hidden
      />

      <div className="p-6">
        {/* Category pill */}
        <span
          className="text-xs px-3 py-1 rounded-full font-medium mb-3 inline-block"
          style={{
            backgroundColor: 'rgba(255,92,0,0.08)',
            color: '#FF5C00',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {article.category}
        </span>

        {/* Title */}
        <h3
          className="font-bold text-base leading-snug mb-2 line-clamp-2"
          style={{ color: '#111', fontFamily: 'Space Grotesk, sans-serif' }}
        >
          {article.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-3"
          style={{ color: 'rgba(17,17,17,0.5)', fontFamily: 'Inter, sans-serif' }}
        >
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
              style={{ backgroundColor: article.authorColor, fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {article.authorInitials}
            </div>
            <span
              className="text-xs"
              style={{ color: 'rgba(17,17,17,0.45)', fontFamily: 'Inter, sans-serif' }}
            >
              {article.author}
            </span>
          </div>
          <div
            className="flex items-center gap-3 text-xs"
            style={{ color: 'rgba(17,17,17,0.35)', fontFamily: 'Inter, sans-serif' }}
          >
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={11} />
              {article.date}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubscribed, setNewsSubscribed] = useState(false);

  const filtered =
    activeCategory === 'All'
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section
      id="blog"
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
          className="text-center mb-12"
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4 font-semibold"
            style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
          >
            Learn & Grow
          </p>
          <h2
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#111111' }}
          >
            Resources &amp; Ideas.
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="text-sm px-5 py-2.5 rounded-full border transition-all duration-200"
              style={{
                borderColor: activeCategory === cat ? '#FF5C00' : 'rgba(17,17,17,0.12)',
                color: activeCategory === cat ? '#FF5C00' : 'rgba(17,17,17,0.5)',
                backgroundColor: activeCategory === cat ? 'rgba(255,92,0,0.06)' : 'transparent',
                fontFamily: 'Inter, sans-serif',
                fontWeight: activeCategory === cat ? 600 : 400,
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Featured article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden mb-10 cursor-pointer"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}
          whileHover={{ y: -3 }}
        >
          <div className="lg:grid lg:grid-cols-[400px_1fr]">
            {/* Image area */}
            <div
              className="h-64 lg:h-auto"
              style={{ background: featuredArticle.gradient, minHeight: '280px' }}
              aria-hidden
            />

            {/* Content */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    backgroundColor: 'rgba(255,92,0,0.08)',
                    color: '#FF5C00',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {featuredArticle.category}
                </span>
                <span
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: 'rgba(17,17,17,0.35)', fontFamily: 'Inter, sans-serif' }}
                >
                  <Clock size={12} />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold mb-4 leading-snug"
                style={{ color: '#111', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {featuredArticle.title}
              </h3>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: 'rgba(17,17,17,0.55)', fontFamily: 'Inter, sans-serif', maxWidth: '520px' }}
              >
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: featuredArticle.authorColor, fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {featuredArticle.authorInitials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: '#111', fontFamily: 'Inter, sans-serif' }}
                    >
                      {featuredArticle.author}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(17,17,17,0.35)', fontFamily: 'Inter, sans-serif' }}
                    >
                      {featuredArticle.date}
                    </p>
                  </div>
                </div>

                <button
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110"
                  style={{ backgroundColor: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
                >
                  Read Article
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Article grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filtered.map((article, i) => (
            <ArticleCard key={article.id} article={article} index={i} />
          ))}
        </div>

        {/* Newsletter bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-10 md:p-14 text-center"
          style={{ backgroundColor: '#111111' }}
        >
          <p
            className="text-xs uppercase tracking-[0.3em] mb-3 font-semibold"
            style={{ color: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
          >
            Weekly Newsletter
          </p>
          <h3
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Get the best ideas first.
          </h3>
          <p
            className="text-base mb-8"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
          >
            Get weekly business ideas, launch strategies, and marketing insights.
          </p>

          {newsSubscribed ? (
            <p
              className="text-lg font-semibold"
              style={{ color: '#FF5C00', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              You&apos;re subscribed. Welcome to the loop.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (newsEmail) setNewsSubscribed(true);
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-4 rounded-full text-sm outline-none"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full text-sm font-semibold text-white flex-shrink-0 transition-all hover:brightness-110"
                style={{ backgroundColor: '#FF5C00', fontFamily: 'Inter, sans-serif' }}
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
