"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Sparkles, BadgeDollarSign, Users, Cake, Croissant, Star, Sandwich } from "lucide-react";

const FEATURES = [
  { icon: Sun,              title: "Freshly Baked Daily",     desc: "Zero day-old products. Every item is baked fresh each morning before you arrive." },
  { icon: Sparkles,         title: "Premium Ingredients",     desc: "We source only the finest flour, dairy, and seasonal produce. Quality is non-negotiable." },
  { icon: BadgeDollarSign,  title: "Affordable Pricing",      desc: "Luxury quality at honest everyday prices. Great baking should be accessible to all." },
  { icon: Users,            title: "Family Favourite",        desc: "Three generations of Chandigarh families trust us for every celebration and morning." },
  { icon: Cake,             title: "Exquisite Cakes",         desc: "From Black Forest to Butterscotch — each cake is a masterpiece of craft and care." },
  { icon: Croissant,        title: "Fresh Pastries",          desc: "Light, airy, seasonal pastries that melt in your mouth with every bite." },
  { icon: Sandwich,         title: "Signature Rolls",         desc: "Our cream and swiss rolls are the talk of Chandigarh — a timeless local legend." },
  { icon: Star,             title: "Exceptional Taste",       desc: "4.1 stars from 126+ authentic Google reviews. The taste speaks for itself." },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--cream)" }}
      aria-label="Why Choose New Capital Bakery"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "80%",
          height: 600,
          background: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-main relative z-10">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow justify-center"
          >
            Why New Capital Bakery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--choco-700)" }}
          >
            The Finest Bakery
            <span className="italic gradient-text"> in Chandigarh</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24 }}
            className="font-poppins text-body"
            style={{ color: "var(--text-muted)", maxWidth: 540, margin: "16px auto 0" }}
          >
            Seven decades of dedication to taste, freshness, and customer happiness — that is
            what sets us apart.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
          }}
        >
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 36, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.65, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative rounded-[var(--radius-lg)] overflow-hidden"
              style={{
                background: "#fff",
                border: "1px solid var(--beige)",
                padding: "clamp(24px, 3vw, 36px)",
                boxShadow: "var(--shadow-sm)",
                transition: "transform 0.35s var(--ease-premium), box-shadow 0.35s var(--ease-premium), border-color 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-lg)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)";
              }}
            >
              {/* Top glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[var(--radius-lg)] transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, var(--gold), var(--coffee-light))" }}
              />

              {/* Icon */}
              <div
                className="rounded-[14px] flex items-center justify-center mb-5 transition-transform duration-400 group-hover:scale-105"
                style={{
                  width: 52, height: 52,
                  background: "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(107,66,38,0.06) 100%)",
                  border: "1px solid rgba(201,169,110,0.22)",
                }}
              >
                <f.icon size={22} style={{ color: "var(--gold)" }} strokeWidth={1.6} />
              </div>

              <h3
                className="font-playfair font-bold mb-3"
                style={{ fontSize: "clamp(16px, 1.5vw, 19px)", color: "var(--choco-700)", lineHeight: 1.25 }}
              >
                {f.title}
              </h3>
              <p
                className="font-poppins"
                style={{ fontSize: 13.5, color: "var(--text-muted)", lineHeight: 1.7 }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
