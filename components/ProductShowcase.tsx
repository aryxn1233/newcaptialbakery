"use client";

import { useRef, useState, useMemo, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Search, X, Phone, ChevronRight } from "lucide-react";
import { PRODUCTS, CATEGORIES, type Category, type Product } from "@/lib/products";

// ─── Product Detail Modal ────────────────────────────────────────
function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-overlay"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={product.name}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 40 }}
          transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-panel relative overflow-hidden"
          style={{
            width: "min(760px, 95vw)",
            maxHeight: "90vh",
          }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 rounded-full flex items-center justify-center"
            style={{
              width: 40, height: 40,
              background: "rgba(255,255,255,0.9)",
              backdropFilter: "blur(8px)",
              border: "1px solid var(--beige)",
              boxShadow: "var(--shadow-sm)",
              color: "var(--choco-700)",
            }}
            aria-label="Close"
          >
            <X size={17} />
          </button>

          <div className="grid md:grid-cols-2 overflow-y-auto" style={{ maxHeight: "90vh" }}>
            {/* Image */}
            <div
              className="relative"
              style={{ minHeight: "clamp(260px, 40vw, 380px)", background: "var(--beige-light)" }}
            >
              <Image
                src={product.imagePath}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, transparent 60%, rgba(253,248,240,0.15) 100%)" }}
              />
            </div>

            {/* Info */}
            <div style={{ padding: "clamp(28px, 4vw, 48px)" }}>
              <span className="cat-badge">{product.category}</span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", marginTop: 14, marginBottom: 16 }}>
                <h3
                  className="font-playfair font-bold text-balance"
                  style={{
                    fontSize: "clamp(22px, 3vw, 32px)",
                    color: "var(--choco-700)",
                    lineHeight: 1.2,
                  }}
                >
                  {product.name}
                </h3>
                <div 
                  className="font-poppins font-bold flex-shrink-0" 
                  style={{ color: "var(--gold)", fontSize: "20px", marginTop: "4px" }}
                >
                  ₹{product.price}
                </div>
              </div>
              <p
                className="font-poppins text-body"
                style={{ color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 28 }}
              >
                {product.description}
              </p>

              <div
                className="rounded-[var(--radius-md)] mb-7"
                style={{
                  background: "var(--beige-light)",
                  border: "1px solid var(--beige)",
                  padding: "14px 16px",
                }}
              >
                <p className="font-poppins" style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.65 }}>
                  🏪 <strong style={{ color: "var(--coffee)" }}>Visit us</strong> at 29 Sarovar Path, Sector 21C
                  to pick up this fresh product daily.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <a href="tel:+918054805451" className="glass-button w-full">
                  <Phone size={15} />
                  <span>Call to Enquire</span>
                </a>
                <a
                  href="https://wa.me/918054805451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button w-full"
                >
                  <span>💬</span>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Showcase ────────────────────────────────────────────────
export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const catOk = activeCategory === "All" || p.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const searchOk = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [activeCategory, searchQuery]);

  const clearSearch = useCallback(() => setSearchQuery(""), []);

  return (
    <>
      <section
        id="products"
        className="section-padding ambient-bg"
        aria-label="Product Showcase"
      >
        <div ref={ref} className="container-main">

          {/* Header */}
          <div className="section-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="section-eyebrow justify-center"
            >
              Our Complete Menu
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.12 }}
              className="font-playfair font-bold text-display text-balance"
              style={{ color: "var(--choco-700)" }}
            >
              Fresh From Our
              <span className="italic gradient-text"> Bakery</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.24 }}
              className="font-poppins"
              style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 14, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 6, height: 6, background: "var(--gold)", display: "inline-block" }}
              />
              Walk-in &amp; Takeaway only · No Home Delivery
            </motion.p>
          </div>

          {/* Search + filters */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{ marginBottom: 48 }}
          >
            {/* Search bar */}
            <div
              className="relative"
              style={{ maxWidth: 440, margin: "0 auto 24px" }}
            >
              <Search
                size={15}
                className="absolute"
                style={{ left: 16, top: "50%", transform: "translateY(-50%)", color: "var(--gold)" }}
              />
              <input
                type="text"
                id="product-search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="glass-panel w-full outline-none font-poppins"
                style={{ padding: "14px 18px 14px 44px", color: "var(--choco-800)" }}
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute"
                  style={{ right: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category chips */}
            <div
              className="flex flex-wrap justify-center"
              style={{ gap: 8 }}
            >
              {CATEGORIES.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="font-poppins font-semibold rounded-full transition-all"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.04em",
                    padding: "9px 20px",
                    background:
                      activeCategory === cat
                        ? "linear-gradient(135deg, rgba(201, 169, 110, 0.4) 0%, rgba(139, 94, 60, 0.2) 100%)"
                        : "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(12px)",
                    color: activeCategory === cat ? "var(--choco-900)" : "var(--choco-800)",
                    border:
                      activeCategory === cat
                        ? "1px solid rgba(201, 169, 110, 0.5)"
                        : "1px solid rgba(255, 255, 255, 0.25)",
                    boxShadow:
                      activeCategory === cat ? "0 4px 12px rgba(201,169,110,0.2)" : "0 2px 8px rgba(0,0,0,0.05)",
                  }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Count */}
          <div className="text-center mb-8">
            <span className="font-poppins" style={{ fontSize: 12, color: "var(--text-muted)" }}>
              {filtered.length} {filtered.length === 1 ? "product" : "products"} found
            </span>
          </div>

          {/* Grid */}
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid gap-5"
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
              }}
            >
              {filtered.map((product, i) => (
                <motion.article
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.93, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
                  onClick={() => setSelectedProduct(product)}
                  className="group glass-panel cursor-pointer flex flex-col"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ height: "clamp(180px, 20vw, 240px)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0" }}
                  >
                    <Image
                      src={product.imagePath}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-600"
                      style={{ transition: "transform 0.6s var(--ease-premium)" }}
                      ref={(el) => {
                        if (!el) return;
                        const card = el.closest(".group");
                        if (!card) return;
                        const zoomIn  = () => { el.style.transform = "scale(1.08)"; };
                        const zoomOut = () => { el.style.transform = "scale(1)"; };
                        card.addEventListener("mouseenter", zoomIn);
                        card.addEventListener("mouseleave", zoomOut);
                      }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />

                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center"
                      style={{ background: "rgba(14,5,2,0.45)" }}
                    >
                      <div
                        className="flex items-center gap-2 font-poppins font-semibold"
                        style={{
                          fontSize: 12,
                          color: "var(--cream)",
                          background: "rgba(201,169,110,0.2)",
                          border: "1px solid rgba(201,169,110,0.4)",
                          backdropFilter: "blur(8px)",
                          borderRadius: 99,
                          padding: "8px 18px",
                        }}
                      >
                        <span>View Details</span>
                        <ChevronRight size={13} />
                      </div>
                    </div>

                    {/* Signature badge */}
                    {product.isSignature && (
                      <div className="absolute top-3 right-3">
                        <span
                          className="font-poppins font-bold text-white rounded-full"
                          style={{
                            fontSize: 9,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            background: "linear-gradient(135deg, var(--gold) 0%, var(--coffee) 100%)",
                            padding: "3px 9px",
                            boxShadow: "0 2px 8px rgba(201,169,110,0.4)",
                          }}
                        >
                          Signature
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div style={{ padding: "clamp(16px, 2vw, 22px)", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                    <span className="cat-badge self-start">{product.category}</span>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                      <h3
                        className="font-playfair font-bold text-balance"
                        style={{ fontSize: "clamp(15px, 1.5vw, 17px)", color: "var(--choco-700)", lineHeight: 1.3 }}
                      >
                        {product.name}
                      </h3>
                      <div 
                        className="font-poppins font-bold flex-shrink-0" 
                        style={{ color: "var(--gold)", fontSize: "14px", marginTop: "2px" }}
                      >
                        ₹{product.price}
                      </div>
                    </div>
                    <p
                      className="font-poppins"
                      style={{
                        fontSize: 13,
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>🥐</div>
              <p className="font-playfair text-2xl" style={{ color: "var(--text-muted)", marginBottom: 12 }}>
                No products found
              </p>
              <button
                onClick={() => { clearSearch(); setActiveCategory("All"); }}
                className="btn btn-sm btn-outline-dark"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
