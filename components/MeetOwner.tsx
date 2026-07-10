"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Volume2, VolumeX } from "lucide-react";

export default function MeetOwner() {
  const ref    = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-120px" });
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!vidRef.current) return;
    if (isInView) { vidRef.current.play().catch(() => {}); }
    else           { vidRef.current.pause(); }
  }, [isInView]);

  return (
    <section
      id="owner"
      ref={ref}
      className="section-padding relative overflow-hidden ambient-bg"
      aria-label="Meet the Owner"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "40%",
          height: "60%",
          background: "radial-gradient(ellipse at 100% 0%, rgba(201,169,110,0.07) 0%, transparent 70%)",
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
            The Man Behind the Magic
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--choco-700)" }}
          >
            Meet{" "}
            <span className="italic gradient-text">Abhay Thakur</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Video ── */}
          <motion.div
            initial={{ opacity: 0, x: -48, scale: 0.97 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Decorative gold frame */}
            <div
              className="absolute rounded-[var(--radius-xl)]"
              style={{
                inset: -3,
                background: "linear-gradient(135deg, var(--gold) 0%, transparent 40%, var(--gold) 100%)",
                opacity: 0.22,
              }}
            />

            <div
              className="relative overflow-hidden liquid-glass"
            >
              <video
                ref={vidRef}
                src="/bakedit/ownervideo.mp4"
                muted={isMuted}
                loop
                playsInline
                className="w-full"
                style={{ display: "block", maxHeight: "72vh", objectFit: "cover" }}
                preload="metadata"
                aria-label="Abhay Thakur — Owner of New Capital Bakery"
              />
              {/* Subtle gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(46,16,5,0.15) 100%)" }}
              />
              {/* Mute/Unmute Toggle Button */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 left-4 z-20 flex items-center justify-center rounded-full liquid-glass hover:scale-105 transition-transform"
                style={{ width: 44, height: 44, border: "1px solid rgba(255,255,255,0.3)" }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX size={18} style={{ color: "var(--cream)" }} />
                ) : (
                  <Volume2 size={18} style={{ color: "var(--cream)" }} />
                )}
              </button>
            </div>

            {/* Floating quote card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute liquid-glass"
              style={{
                bottom: -20,
                right: -16,
                padding: "20px 24px",
                maxWidth: 240,
              }}
            >
              <p
                className="font-cormorant italic"
                style={{ fontSize: 15, color: "var(--choco-700)", lineHeight: 1.55, marginBottom: 10 }}
              >
                &ldquo;Every product I make is a piece of my heart.&rdquo;
              </p>
              <div className="font-poppins font-semibold" style={{ fontSize: 11, color: "var(--gold)", letterSpacing: "0.08em" }}>
                — Abhay Thakur
              </div>
            </motion.div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ display: "flex", flexDirection: "column", gap: "clamp(20px, 2.5vw, 30px)" }}
          >
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
              &ldquo;Passion, freshness, and a genuine love for baking — that is our story.&rdquo;
            </blockquote>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p className="font-poppins text-body" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Meet Abhay Thakur, the owner and beating heart of New Capital Bakery. With a deep
                passion for baking and an unwavering commitment to customer satisfaction, Abhay
                personally oversees every product that leaves the bakery.
              </p>
              <p className="font-poppins text-body" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Every morning, he ensures that the quality, freshness, and taste are never
                compromised. His philosophy is simple — if it is not good enough for his own
                family, it is not good enough for yours.
              </p>
              <p className="font-poppins text-body" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Under his leadership, New Capital Bakery has grown into one of the most trusted
                bakery names in Chandigarh, beloved by families who value freshness, honesty, and
                exceptional taste above all else.
              </p>
            </div>

            {/* Since badge */}
            <div
              className="flex items-center gap-4 liquid-glass"
              style={{
                padding: "16px 20px",
              }}
            >
              <div
                className="flex-shrink-0 rounded-full flex items-center justify-center font-playfair font-bold text-white"
                style={{
                  width: 52, height: 52,
                  background: "linear-gradient(135deg, var(--gold) 0%, var(--coffee) 100%)",
                  fontSize: 14,
                  boxShadow: "var(--shadow-gold)",
                }}
              >
                1956
              </div>
              <p className="font-poppins" style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.65 }}>
                <strong style={{ color: "var(--choco-700)" }}>New Capital Bakery</strong> has been
                baking for Chandigarh since 1956 — nearly seven decades of freshness and trust.
              </p>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="tel:+918054805451" className="liquid-button-primary">
                <Phone size={15} />
                <span>Call Abhay</span>
              </a>
              <a
                href="https://wa.me/918054805451"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-button-secondary"
              >
                <span>💬 WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
