"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import { SIGNATURE_PRODUCTS } from "@/lib/products";

export default function SignatureProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, var(--choco-900) 0%, var(--choco-700) 60%, var(--choco-800) 100%)",
      }}
      aria-label="Signature Creations"
    >
      {/* Decorative background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E' fill-rule='evenodd'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div ref={ref} className="container-main relative z-10">
        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow justify-center"
            style={{ color: "var(--gold)" }}
          >
            Our Best
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--cream)" }}
          >
            Signature{" "}
            <span className="italic gold-text">Creations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.24 }}
            className="font-poppins text-body"
            style={{ color: "rgba(232,213,183,0.6)", maxWidth: 500, margin: "16px auto 0" }}
          >
            Each signature product is baked with premium ingredients and generations of expertise.
          </motion.p>
        </div>

        {/* Responsive grid — editorial layout */}
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          }}
        >
          {SIGNATURE_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.75, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden rounded-[var(--radius-xl)]"
              style={{
                minHeight: "clamp(280px, 35vw, 380px)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,169,110,0.08)",
              }}
            >
              {/* Image */}
              <Image
                src={product.imagePath}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-108"
                style={{ transition: "transform 0.7s var(--ease-premium)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />

              {/* Gradient overlay — always visible */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(14,5,2,0.92) 0%, rgba(14,5,2,0.4) 50%, transparent 100%)",
                }}
              />

              {/* Top badge */}
              <div className="absolute top-4 left-4">
                <span className="cat-badge cat-badge-inv">{product.category}</span>
              </div>
              <div className="absolute top-4 right-4">
                <div
                  className="font-poppins font-bold text-white flex items-center justify-center rounded-full"
                  style={{
                    width: 32, height: 32, fontSize: 13,
                    background: "linear-gradient(135deg, var(--gold) 0%, var(--coffee) 100%)",
                    boxShadow: "0 4px 12px rgba(201,169,110,0.4)",
                  }}
                >
                  ★
                </div>
              </div>

              {/* Bottom content — always visible, expands on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", marginBottom: 8 }}>
                  <h3
                    className="font-playfair font-bold text-balance"
                    style={{
                      fontSize: "clamp(18px, 2.2vw, 24px)",
                      color: "var(--cream)",
                      lineHeight: 1.2,
                    }}
                  >
                    {product.name}
                  </h3>
                  <div 
                    className="font-poppins font-bold flex-shrink-0" 
                    style={{ color: "var(--gold)", fontSize: "16px", marginTop: "4px" }}
                  >
                    ₹{product.price}
                  </div>
                </div>
                <p
                  className="font-poppins transition-all duration-400"
                  style={{
                    fontSize: 13,
                    color: "rgba(232,213,183,0.75)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                    maxHeight: 0,
                    overflow: "hidden",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const group = el.closest(".group");
                    if (!group) return;
                    const show = () => {
                      el.style.maxHeight = "80px";
                      el.style.marginBottom = "16px";
                    };
                    const hide = () => {
                      el.style.maxHeight = "0px";
                      el.style.marginBottom = "0px";
                    };
                    group.addEventListener("mouseenter", show);
                    group.addEventListener("mouseleave", hide);
                  }}
                >
                  {product.description}
                </p>
                <a
                  href="tel:+918054805451"
                  className="btn btn-sm"
                  style={{
                    background: "rgba(201,169,110,0.18)",
                    color: "var(--gold-light)",
                    border: "1.5px solid rgba(201,169,110,0.4)",
                    backdropFilter: "blur(8px)",
                  }}
                  aria-label={`Call to order ${product.name}`}
                >
                  <Phone size={12} />
                  <span>Call to Order</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
