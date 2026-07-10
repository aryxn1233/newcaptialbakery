"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, Heart, Leaf, Cookie, UtensilsCrossed } from "lucide-react";
import Image from "next/image";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100svh", background: "#0a0705", paddingBottom: "100px" }}
      aria-label="Hero — New Capital Bakery"
    >
      {/* ── Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/backgroundimage.png"
          alt="Bakery Background"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient just behind text areas for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </motion.div>

      <div className="container-main relative z-10 w-full pt-32 pb-24 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-8 items-center h-full">
          
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col text-center lg:text-left z-20"
          >

            <h1
              className="font-playfair text-balance leading-[1.1] mb-6"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", color: "var(--cream)" }}
            >
              Baking Happiness <br />
              <span className="italic" style={{ color: "var(--gold-light)" }}>Every Day.</span>
            </h1>

            <p
              className="font-poppins text-body mb-10"
              style={{
                color: "rgba(253,248,240,0.8)",
                maxWidth: 420,
                marginInline: "auto lg:0",
                lineHeight: 1.6,
              }}
            >
              Freshly baked breads, pastries, cakes, cookies and snacks made with decades of tradition and premium ingredients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => scrollTo("products")}
                className="btn btn-lg"
                style={{
                  background: "var(--gold)",
                  color: "var(--choco-900)",
                  border: "none",
                  padding: "14px 28px",
                  borderRadius: "8px",
                  fontWeight: 600,
                }}
              >
                <span>Explore Menu &rarr;</span>
              </button>
            </div>

            
          </motion.div>

          {/* ── Center Empty Space for the Cake in Background ── */}
          <div className="hidden lg:block w-full h-full"></div>

          {/* ── Right Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            className="hidden lg:flex flex-col items-center justify-center text-center z-20 h-full gap-24"
          >
            {/* Laurel Wreath Seal */}
            <div className="relative flex flex-col items-center justify-center">
              <div 
                className="absolute inset-0 rounded-full border border-dashed" 
                style={{ borderColor: "var(--gold)", opacity: 0.4, transform: "scale(1.2)" }} 
              />
              <div className="font-poppins uppercase tracking-widest" style={{ fontSize: 10, color: "var(--cream)" }}>
                Over
              </div>
              <div className="font-playfair font-bold leading-none my-1" style={{ fontSize: 48, color: "var(--cream)" }}>
                70
              </div>
              <div className="font-poppins uppercase tracking-widest" style={{ fontSize: 10, color: "var(--cream)" }}>
                Years of<br />Trust
              </div>
              {/* SVG Laurel Branches */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: "scale(1.5)", color: "var(--gold)" }} viewBox="0 0 100 100" fill="none" stroke="currentColor">
                <path d="M 20 80 C 10 50, 20 20, 50 10" strokeWidth="1" />
                <path d="M 80 80 C 90 50, 80 20, 50 10" strokeWidth="1" />
              </svg>
            </div>

            {/* Made Fresh */}
            <div className="flex flex-col items-center gap-3">
              <div style={{ color: "var(--gold)" }}>✦</div>
              <div className="font-playfair text-xl text-balance" style={{ color: "var(--cream)", lineHeight: 1.4 }}>
                Made Fresh<br />Every Morning
              </div>
              <div style={{ color: "var(--gold)", transform: "rotate(180deg)" }}>✦</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ── Bottom Floating Bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 right-0 z-30 px-4 pb-6"
      >
        <div 
          className="container-main mx-auto rounded-3xl"
          style={{ background: "var(--cream)", padding: "32px 40px", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y md:divide-y-0 lg:divide-x divide-[rgba(61,26,10,0.1)]">
            
            <div className="flex items-center gap-4 lg:justify-center">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--choco-800)" }}>
                <UtensilsCrossed size={20} />
              </div>
              <div>
                <div className="font-playfair font-bold text-lg" style={{ color: "var(--choco-800)" }}>Since 1956</div>
                <div className="font-poppins text-xs" style={{ color: "var(--text-secondary)" }}>Decades of baking excellence</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:justify-center pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--choco-800)" }}>
                <Cookie size={20} />
              </div>
              <div>
                <div className="font-playfair font-bold text-lg" style={{ color: "var(--choco-800)" }}>Fresh Daily</div>
                <div className="font-poppins text-xs" style={{ color: "var(--text-secondary)" }}>Baked fresh every single day</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:justify-center pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--choco-800)" }}>
                <Leaf size={20} />
              </div>
              <div>
                <div className="font-playfair font-bold text-lg" style={{ color: "var(--choco-800)" }}>Premium Ingredients</div>
                <div className="font-poppins text-xs" style={{ color: "var(--text-secondary)" }}>Finest ingredients sourced carefully</div>
              </div>
            </div>

            <div className="flex items-center gap-4 lg:justify-center pt-6 md:pt-0">
              <div className="w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--choco-800)" }}>
                <Heart size={20} />
              </div>
              <div>
                <div className="font-playfair font-bold text-lg" style={{ color: "var(--choco-800)" }}>Loved by Thousands</div>
                <div className="font-poppins text-xs" style={{ color: "var(--text-secondary)" }}>Trusted and loved by generations</div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
