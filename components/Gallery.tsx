"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { GALLERY_IMAGES, PRODUCTS } from "@/lib/products";

const GALLERY = [
  ...GALLERY_IMAGES,
  { id: "p1", src: "/bakedit/blackforest.png",       alt: "Black Forest Cake" },
  { id: "p2", src: "/bakedit/butterscotch.png",      alt: "Butterscotch Cake" },
  { id: "p3", src: "/bakedit/creamrolls.png",        alt: "Assorted Cream Rolls" },
  { id: "p4", src: "/bakedit/swiss roll.png",        alt: "Classic Swiss Roll" },
  { id: "p5", src: "/bakedit/chocolateroll.png",     alt: "Chocolate Swiss Roll" },
  { id: "p6", src: "/bakedit/paneerpatty.png",       alt: "Paneer Patty" },
  { id: "p7", src: "/bakedit/cheesechilly patty.png",alt: "Cheese Chilly Patty" },
  { id: "p8", src: "/bakedit/pineapplepastery.png",  alt: "Pineapple Pastry" },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section
      id="gallery"
      className="section-padding ambient-bg"
      aria-label="Bakery Gallery"
    >
      <div ref={ref} className="container-main">

        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow justify-center"
          >
            Visual Feast
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--choco-700)" }}
          >
            Our Bakery
            <span className="italic gradient-text"> Gallery</span>
          </motion.h2>
        </div>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="masonry-col"
        >
          {GALLERY.map((item, i) => {
            // Create a staggered height effect for true masonry
            const heights = [300, 420, 280, 480, 320, 400];
            const h = heights[i % heights.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.08 + i * 0.045, duration: 0.6 }}
                onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                className="group cursor-pointer overflow-hidden liquid-glass"
                style={{ display: "block", marginBottom: 20 }}
                whileHover={{ y: -4 }}
                role="button"
                aria-label={`View ${item.alt}`}
              >
                <div className="relative overflow-hidden" style={{ height: h }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-600"
                    style={{ display: "block", transition: "transform 0.6s var(--ease-premium)" }}
                    ref={(el) => {
                      if (!el) return;
                      const card = el.closest(".group");
                      if (!card) return;
                      card.addEventListener("mouseenter", () => { el.style.transform = "scale(1.07)"; });
                      card.addEventListener("mouseleave", () => { el.style.transform = "scale(1)"; });
                    }}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                    style={{ background: "rgba(14,5,2,0.4)" }}
                  >
                    <div
                      className="rounded-full flex items-center justify-center"
                      style={{
                        width: 48, height: 48,
                        background: "rgba(253,248,240,0.15)",
                        backdropFilter: "blur(8px)",
                        border: "1.5px solid rgba(201,169,110,0.5)",
                      }}
                    >
                      <ZoomIn size={20} style={{ color: "var(--gold-light)" }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lightbox"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.div
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.82, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative liquid-glass overflow-hidden"
              style={{ maxWidth: "min(900px, 94vw)", width: "100%", padding: 8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1200}
                height={900}
                className="w-full h-auto rounded-[var(--radius-xl)]"
                style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7)", maxHeight: "80vh", objectFit: "contain" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute flex items-center justify-center"
                style={{
                  top: -16, right: -16,
                  width: 44, height: 44,
                  background: "var(--gold)",
                  borderRadius: 99,
                  color: "#fff",
                  boxShadow: "var(--shadow-md)",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
              <p
                className="font-cormorant italic text-center mt-4"
                style={{ color: "rgba(253,248,240,0.5)", fontSize: 16 }}
              >
                {lightbox.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
