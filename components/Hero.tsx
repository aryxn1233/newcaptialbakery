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
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex flex-col items-center justify-between overflow-hidden"
      style={{ minHeight: "100svh", background: "#0a0705" }}
      aria-label="Hero — New Capital Bakery"
    >
      {/* ── Background ── */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0 pointer-events-none">
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

      <div className="container-main relative z-10 w-full pt-28 md:pt-32 h-full flex flex-col justify-start lg:justify-center flex-1">
        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-8 items-center h-full">
          
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
            style={{ y: contentY }}
            className="flex flex-col text-center lg:text-left z-20 mt-8 lg:mt-0 liquid-glass p-6 md:p-10"
          >

            <h1
              className="font-playfair text-balance leading-[1.1] mb-4 md:mb-6"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", color: "var(--cream)" }}
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
              <button
                onClick={() => scrollTo("products")}
                className="liquid-button-primary"
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="w-full z-30 px-4 pb-6 mt-auto"
      >
        <div 
          className="container-main mx-auto liquid-glass p-5 md:p-8 lg:py-8 lg:px-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 divide-x-0 lg:divide-x divide-[rgba(61,26,10,0.1)]">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 lg:gap-4 lg:justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--cream)" }}>
                <UtensilsCrossed size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="font-playfair font-bold text-sm md:text-lg" style={{ color: "var(--cream)" }}>Since 1956</div>
                <div className="font-poppins text-[10px] md:text-xs" style={{ color: "var(--gold-light)" }}>Decades of baking</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 lg:gap-4 lg:justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--cream)" }}>
                <Cookie size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="font-playfair font-bold text-sm md:text-lg" style={{ color: "var(--cream)" }}>Fresh Daily</div>
                <div className="font-poppins text-[10px] md:text-xs" style={{ color: "var(--gold-light)" }}>Baked fresh every day</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 lg:gap-4 lg:justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--cream)" }}>
                <Leaf size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="font-playfair font-bold text-sm md:text-lg" style={{ color: "var(--cream)" }}>Premium Ingredients</div>
                <div className="font-poppins text-[10px] md:text-xs" style={{ color: "var(--gold-light)" }}>Finest sourced carefully</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 lg:gap-4 lg:justify-center">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center flex-shrink-0" style={{ borderColor: "var(--gold)", color: "var(--cream)" }}>
                <Heart size={18} className="md:w-5 md:h-5" />
              </div>
              <div>
                <div className="font-playfair font-bold text-sm md:text-lg" style={{ color: "var(--cream)" }}>Loved by Thousands</div>
                <div className="font-poppins text-[10px] md:text-xs" style={{ color: "var(--gold-light)" }}>Trusted by generations</div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
