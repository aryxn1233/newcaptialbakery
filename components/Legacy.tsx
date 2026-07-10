"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const TIMELINE = [
  { year: "1956", event: "New Capital Bakery opens its doors in Chandigarh for the first time." },
  { year: "1970s", event: "Cream rolls and swiss rolls become household names across Sector 21." },
  { year: "1990s", event: "The bakery expands its range to over 50 freshly-baked products daily." },
  { year: "Today", event: "Serving thousands of Chandigarh families with the same freshness and love." },
];

export default function Legacy() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--choco-900) 0%, var(--choco-700) 50%, var(--choco-800) 100%)",
      }}
      aria-label="Our Legacy"
    >
      {/* Decorative radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9 }}
            >
              <div className="section-eyebrow" style={{ color: "var(--gold)" }}>
                Our Heritage
              </div>
              <h2
                className="font-playfair font-bold text-display text-balance"
                style={{
                  color: "var(--cream)",
                  marginBottom: "clamp(16px, 2vw, 24px)",
                  marginTop: 12,
                }}
              >
                Serving Chandigarh{" "}
                <span className="italic gold-text">Since 1956</span>
              </h2>
              <p
                className="font-poppins text-body"
                style={{ color: "rgba(232,213,183,0.7)", marginBottom: 32, lineHeight: 1.8 }}
              >
                For nearly seven decades, New Capital Bakery has been woven into the fabric of
                Chandigarh&rsquo;s daily life. Three generations of families have grown up with
                our cream rolls, cakes, and patties — a legacy built not on marketing, but on the
                unwavering promise of freshness, quality, and genuine care.
              </p>

              {/* Gold quote */}
              <div
                className="rounded-[var(--radius-md)] p-6"
                style={{
                  background: "rgba(201,169,110,0.06)",
                  border: "1px solid rgba(201,169,110,0.18)",
                }}
              >
                <p
                  className="font-cormorant italic"
                  style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "var(--gold-light)", lineHeight: 1.55 }}
                >
                  &ldquo;Every morning, we bake with the same hands and the same heart — because
                  Chandigarh deserves nothing less than the freshest.&rdquo;
                </p>
                <div
                  className="font-poppins font-medium mt-4"
                  style={{ fontSize: 12, color: "var(--gold)", letterSpacing: "0.1em" }}
                >
                  — Abhay Thakur, Owner
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — timeline */}
          <div>
            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
                  className="relative flex gap-6"
                >
                  {/* Line connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-[2px] flex-1"
                      style={{
                        background:
                          i === 0
                            ? "linear-gradient(180deg, transparent, rgba(201,169,110,0.4))"
                            : i === TIMELINE.length - 1
                            ? "linear-gradient(180deg, rgba(201,169,110,0.4), transparent)"
                            : "rgba(201,169,110,0.25)",
                        minHeight: 24,
                      }}
                    />
                    <div
                      className="rounded-full flex-shrink-0 z-10"
                      style={{
                        width: 12,
                        height: 12,
                        background:
                          i === TIMELINE.length - 1
                            ? "var(--gold)"
                            : "rgba(201,169,110,0.35)",
                        border: "2px solid var(--gold)",
                      }}
                    />
                    <div
                      className="w-[2px] flex-1"
                      style={{
                        background:
                          i === TIMELINE.length - 1
                            ? "transparent"
                            : "rgba(201,169,110,0.25)",
                        minHeight: 24,
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="pb-8 pt-1 flex-1">
                    <div
                      className="font-playfair font-bold mb-2"
                      style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "var(--gold)" }}
                    >
                      {item.year}
                    </div>
                    <p
                      className="font-poppins"
                      style={{ fontSize: 14, color: "rgba(232,213,183,0.65)", lineHeight: 1.7 }}
                    >
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
