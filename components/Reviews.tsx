"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  { id: 1, name: "Sunita Sharma",   initials: "SS", rating: 5, time: "2 weeks ago",  color: "#C9A96E", text: "Best place in Chandigarh for cakes, patties, pastries and biscuits. The Black Forest cake is absolutely divine — fresh cream, moist sponge. My entire family loves this place and we visit every week!" },
  { id: 2, name: "Rajiv Mehta",     initials: "RM", rating: 5, time: "1 month ago",  color: "#8B5E3C", text: "Amazing service and the most friendly staff. The cream rolls are unbelievably fresh — you can taste the difference immediately. Prices are very reasonable for such outstanding quality. Highly recommended!" },
  { id: 3, name: "Priya Nair",      initials: "PN", rating: 4, time: "3 weeks ago",  color: "#6B4226", text: "Fresh cream rolls and absolutely delicious pastries. The paneer patty is my weekly treat without fail. Nothing in Chandigarh even comes close to the freshness here. Worth every single visit." },
  { id: 4, name: "Amandeep Singh",  initials: "AS", rating: 5, time: "5 days ago",   color: "#C9A96E", text: "I've been coming here for years. The Swiss rolls are legendary in Sector 21. Fresh every morning, never disappoints. Abhay ji runs it with incredible dedication and genuine love for baking." },
  { id: 5, name: "Kavita Bhatia",   initials: "KB", rating: 4, time: "2 months ago", color: "#8B5E3C", text: "The butterscotch cake was absolutely perfect for my son's birthday. Everyone at the party loved it! The freshness is incomparable to any other bakery. Highly recommend to all Chandigarh residents." },
  { id: 6, name: "Rohit Verma",     initials: "RV", rating: 5, time: "1 week ago",   color: "#6B4226", text: "Visited for the first time and was completely blown away. The assorted cream rolls are a must-try. Such a warm, welcoming atmosphere and the staff genuinely cares about quality. Will definitely be back!" },
];

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {[1,2,3,4,5].map((s) => (
        <svg key={s} width="14" height="14" viewBox="0 0 24 24"
          fill={s <= n ? "#F59E0B" : "none"}
          stroke={s <= n ? "#F59E0B" : "rgba(255,255,255,0.2)"}
          strokeWidth={1.8}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [current, setCurrent] = useState(0);

  const VISIBLE = 3; // cards visible at once on desktop
  const max = REVIEWS.length - VISIBLE;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(max, c + 1));

  return (
    <section
      id="reviews"
      ref={ref}
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--choco-900) 0%, #3A1508 50%, var(--choco-800) 100%)",
      }}
      aria-label="Customer Reviews"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container-main relative z-10">

        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow justify-center"
            style={{ color: "var(--gold)" }}
          >
            Customer Love
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--cream)" }}
          >
            What Chandigarh{" "}
            <span className="italic gold-text">Says About Us</span>
          </motion.h2>

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.28 }}
            className="flex items-center justify-center gap-8 flex-wrap"
            style={{ marginTop: 28 }}
          >
            <div className="text-center">
              <div className="font-playfair font-bold" style={{ fontSize: 56, color: "var(--gold)", lineHeight: 1 }}>
                4.1
              </div>
              <Stars n={4} />
              <div className="font-poppins" style={{ fontSize: 11, color: "rgba(232,213,183,0.5)", marginTop: 6, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                out of 5
              </div>
            </div>
            <div style={{ width: 1, height: 56, background: "rgba(201,169,110,0.15)" }} />
            <div className="text-center">
              <div className="font-playfair font-bold" style={{ fontSize: 36, color: "var(--cream)", lineHeight: 1 }}>
                126+
              </div>
              <div className="font-poppins" style={{ fontSize: 11, color: "rgba(232,213,183,0.5)", marginTop: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Google Reviews
              </div>
              {/* Google G */}
              <div className="flex items-center justify-center gap-1 mt-2">
                <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-poppins" style={{ fontSize: 10, color: "rgba(232,213,183,0.4)", letterSpacing: "0.08em" }}>
                  Verified
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Review cards */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {/* Desktop: sliding carousel */}
            <div className="hidden md:block overflow-hidden">
              <motion.div
                animate={{ x: `-${(current * 100) / VISIBLE}%` }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex"
                style={{ gap: 20 }}
              >
                {REVIEWS.map((r, i) => (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, y: 32 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="card-dark flex-shrink-0"
                    style={{
                      width: `calc(${100 / VISIBLE}% - ${(20 * (VISIBLE - 1)) / VISIBLE}px)`,
                      padding: "clamp(24px, 3vw, 36px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    {/* Author row */}
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 rounded-full font-poppins font-bold text-white flex items-center justify-center"
                        style={{
                          width: 44, height: 44, fontSize: 14,
                          background: `linear-gradient(135deg, ${r.color} 0%, var(--choco-700) 100%)`,
                          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                        }}
                        aria-hidden
                      >
                        {r.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-poppins font-semibold truncate" style={{ fontSize: 13.5, color: "var(--cream)" }}>
                          {r.name}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Stars n={r.rating} />
                          <span className="font-poppins" style={{ fontSize: 11, color: "rgba(232,213,183,0.35)" }}>
                            · {r.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quote */}
                    <p className="font-poppins flex-1" style={{ fontSize: 13.5, color: "rgba(232,213,183,0.7)", lineHeight: 1.75 }}>
                      &ldquo;{r.text}&rdquo;
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Mobile: stacked */}
            <div className="md:hidden grid gap-4">
              {REVIEWS.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="card-dark"
                  style={{ padding: "24px" }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="rounded-full font-poppins font-bold text-white flex items-center justify-center flex-shrink-0"
                      style={{ width: 40, height: 40, fontSize: 13, background: `linear-gradient(135deg, ${r.color} 0%, var(--choco-700) 100%)` }}
                      aria-hidden
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div className="font-poppins font-semibold" style={{ fontSize: 13, color: "var(--cream)" }}>
                        {r.name}
                      </div>
                      <Stars n={r.rating} />
                    </div>
                  </div>
                  <p className="font-poppins" style={{ fontSize: 13, color: "rgba(232,213,183,0.65)", lineHeight: 1.7 }}>
                    &ldquo;{r.text}&rdquo;
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Carousel arrows — desktop */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              disabled={current === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full flex items-center justify-center"
              style={{
                width: 48, height: 48,
                background: current === 0 ? "rgba(255,255,255,0.04)" : "rgba(201,169,110,0.15)",
                border: "1.5px solid rgba(201,169,110,0.2)",
                color: current === 0 ? "rgba(201,169,110,0.3)" : "var(--gold)",
                cursor: current === 0 ? "not-allowed" : "pointer",
              }}
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </motion.button>
            {/* Dots */}
            {Array.from({ length: max + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all"
                style={{
                  width: current === i ? 24 : 6,
                  height: 6,
                  background: current === i ? "var(--gold)" : "rgba(201,169,110,0.25)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label={`Go to review set ${i + 1}`}
              />
            ))}
            <motion.button
              onClick={next}
              disabled={current >= max}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full flex items-center justify-center"
              style={{
                width: 48, height: 48,
                background: current >= max ? "rgba(255,255,255,0.04)" : "rgba(201,169,110,0.15)",
                border: "1.5px solid rgba(201,169,110,0.2)",
                color: current >= max ? "rgba(201,169,110,0.3)" : "var(--gold)",
                cursor: current >= max ? "not-allowed" : "pointer",
              }}
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center"
          style={{ marginTop: 56 }}
        >
          <p className="font-cormorant italic" style={{ fontSize: 20, color: "rgba(232,213,183,0.5)", marginBottom: 20 }}>
            Join thousands of happy families in Chandigarh
          </p>
          <a href="tel:+918054805451" className="btn btn-primary btn-lg">
            <span>📞</span>
            <span>Visit Us Today</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
