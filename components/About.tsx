"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Leaf, Heart, BadgeCheck, Users } from "lucide-react";

const TRUST = [
  { icon: Leaf,        label: "100% Fresh",         sub: "Baked every morning" },
  { icon: Heart,       label: "Made with Love",      sub: "Since 1956" },
  { icon: BadgeCheck,  label: "Quality First",       sub: "No shortcuts, ever" },
  { icon: Users,       label: "Family Trusted",      sub: "Thousands of families" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--warm-white)" }}
      aria-label="About New Capital Bakery"
    >
      <div className="container-main">

        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-eyebrow justify-center"
          >
            Our Story
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--choco-700)" }}
          >
            Baked with Passion,{" "}
            <span className="italic gradient-text">Served with Pride</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

          {/* ── Images collage ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main image */}
            <div
              className="relative rounded-[var(--radius-xl)] overflow-hidden img-cover"
              style={{ height: "clamp(320px, 45vw, 520px)", boxShadow: "var(--shadow-xl)" }}
            >
              <Image
                src="/bakedit/blackforest.png"
                alt="Black Forest Cake at New Capital Bakery"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
                priority
              />
              {/* Gradient overlay bottom */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(46,16,5,0.5) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Secondary images row */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div
                className="relative rounded-[var(--radius-lg)] overflow-hidden img-cover"
                style={{ height: "clamp(130px, 18vw, 200px)", boxShadow: "var(--shadow-md)" }}
              >
                <Image
                  src="/bakedit/creamrolls.png"
                  alt="Fresh Cream Rolls"
                  fill className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div
                className="relative rounded-[var(--radius-lg)] overflow-hidden img-cover"
                style={{ height: "clamp(130px, 18vw, 200px)", boxShadow: "var(--shadow-md)" }}
              >
                <Image
                  src="/bakedit/paneerpatty.png"
                  alt="Paneer Patty"
                  fill className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>

            {/* Floating rating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute glass rounded-[var(--radius-md)]"
              style={{
                bottom: "clamp(110px, 16vw, 160px)",
                right: -20,
                padding: "18px 22px",
                boxShadow: "var(--shadow-lg), var(--shadow-gold)",
                minWidth: 180,
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 rounded-full flex items-center justify-center font-playfair font-bold text-white"
                  style={{
                    width: 48, height: 48,
                    background: "linear-gradient(135deg, var(--gold) 0%, var(--coffee) 100%)",
                    fontSize: 20,
                  }}
                >
                  ★
                </div>
                <div>
                  <div className="font-playfair font-bold" style={{ fontSize: 26, color: "var(--choco-700)", lineHeight: 1 }}>
                    4.1<span style={{ fontSize: 14, color: "var(--gold)" }}>/5</span>
                  </div>
                  <div className="font-poppins" style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                    126+ Google Reviews
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text content ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center"
            style={{ gap: "clamp(24px, 3vw, 36px)" }}
          >
            {/* Pull quote */}
            <blockquote
              className="font-cormorant italic"
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                color: "var(--coffee)",
                lineHeight: 1.55,
                borderLeft: "3px solid var(--gold)",
                paddingLeft: 24,
              }}
            >
              &ldquo;Every loaf, every pastry, every cream roll — baked before the sun rises,
              so Chandigarh wakes up to the finest.&rdquo;
            </blockquote>

            {/* Body text */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p className="font-poppins text-body" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                New Capital Bakery has been a cornerstone of Sector 21C for nearly seven decades.
                What began as a small neighbourhood shop has grown into one of the most trusted
                bakery names in Chandigarh — built on freshness, quality, and the belief that
                great baking is an act of love.
              </p>
              <p className="font-poppins text-body" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Every morning our bakers arrive before dawn to prepare cakes, cream rolls, swiss
                rolls, patties, breads, and pastries using only the finest ingredients. No
                shortcuts. No compromises. Just honest, beautiful baking.
              </p>
            </div>

            {/* No-delivery notice */}
            <div
              className="rounded-[var(--radius-md)]"
              style={{
                background: "linear-gradient(135deg, var(--beige-light) 0%, var(--cream) 100%)",
                border: "1px solid rgba(201,169,110,0.3)",
                padding: "16px 20px",
              }}
            >
              <p className="font-poppins" style={{ fontSize: 13, color: "var(--coffee)", lineHeight: 1.65 }}>
                🏪 <strong>Walk-In &amp; Takeaway Only</strong> — We currently do not provide Home Delivery.
                Visit us at Sector 21C for the freshest products daily.
              </p>
            </div>

            {/* Trust cards */}
            <div className="grid grid-cols-2 gap-3">
              {TRUST.map((t, i) => (
                <motion.div
                  key={t.label}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.55 }}
                  className="flex items-center gap-3 rounded-[var(--radius-md)]"
                  style={{
                    background: "#fff",
                    border: "1px solid var(--beige)",
                    padding: "14px 16px",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    className="flex-shrink-0 rounded-[10px] flex items-center justify-center"
                    style={{
                      width: 38, height: 38,
                      background: "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(107,66,38,0.06) 100%)",
                    }}
                  >
                    <t.icon size={17} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="font-poppins font-semibold" style={{ fontSize: 12, color: "var(--choco-700)" }}>
                      {t.label}
                    </div>
                    <div className="font-poppins" style={{ fontSize: 11, color: "var(--text-muted)" }}>
                      {t.sub}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
