"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Menu } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Gallery", id: "gallery" },
  { label: "Owner", id: "owner" },
  { label: "Reviews", id: "reviews" },
  { label: "Visit Us", id: "visit" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_LINKS.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const atTop = !scrolled;

  return (
    <>
      {/* Main navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_4px_32px_rgba(61,26,10,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-[76px] lg:h-[88px]">

            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="group flex flex-col items-start gap-0 cursor-pointer"
              aria-label="New Capital Bakery"
            >
              <span
                className="font-playfair font-bold leading-none transition-colors duration-300"
                style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  color: atTop ? "var(--cream)" : "var(--choco-700)",
                }}
              >
                New Capital
              </span>
              <span
                className="font-cormorant font-medium leading-none tracking-[0.3em] uppercase"
                style={{
                  fontSize: "clamp(9px, 1vw, 11px)",
                  color: "var(--gold)",
                }}
              >
                Bakery · Est. 1956
              </span>
            </button>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`nav-link ${atTop ? "nav-link-light" : ""} ${active === link.id ? "active" : ""}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="tel:+918054805451"
                className="btn btn-sm hidden md:inline-flex"
                style={{
                  background: atTop
                    ? "rgba(201,169,110,0.18)"
                    : "linear-gradient(135deg, var(--coffee) 0%, var(--choco-700) 100%)",
                  color: atTop ? "var(--gold-light)" : "var(--cream)",
                  border: atTop ? "1.5px solid rgba(201,169,110,0.4)" : "none",
                  boxShadow: atTop ? "none" : "var(--shadow-md)",
                  backdropFilter: atTop ? "blur(8px)" : "none",
                }}
                aria-label="Call Now"
              >
                <Phone size={13} />
                <span>Call Now</span>
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
                style={{
                  background: atTop ? "rgba(255,255,255,0.08)" : "rgba(61,26,10,0.06)",
                  color: atTop ? "var(--cream)" : "var(--choco-700)",
                }}
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[950]"
              style={{ background: "rgba(12,4,1,0.6)", backdropFilter: "blur(6px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[960] flex flex-col"
              style={{
                width: "min(360px, 90vw)",
                background: "linear-gradient(160deg, var(--choco-900) 0%, var(--choco-700) 100%)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/[0.06]">
                <div>
                  <div className="font-playfair font-bold text-xl text-[var(--cream)]">New Capital</div>
                  <div className="font-cormorant text-[10px] tracking-[0.3em] uppercase text-[var(--gold)]">
                    Bakery · Est. 1956
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)", color: "var(--cream)" }}
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-8 py-8 flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.055 }}
                    onClick={() => { scrollTo(link.id); setMobileOpen(false); }}
                    className={`group flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-colors ${
                      active === link.id
                        ? "bg-white/[0.07] text-[var(--gold)]"
                        : "text-[rgba(253,248,240,0.7)] hover:bg-white/[0.04] hover:text-[var(--cream)]"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                    <span className="font-poppins text-[15px] font-medium">{link.label}</span>
                    {active === link.id && (
                      <span className="ml-auto text-[var(--gold)] text-xs">·</span>
                    )}
                  </motion.button>
                ))}
              </nav>

              {/* Bottom CTA */}
              <div className="px-8 pb-10 space-y-3">
                <a
                  href="tel:+918054805451"
                  className="btn btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={15} />
                  <span>+91 8054805451</span>
                </a>
                <a
                  href="https://wa.me/918054805451"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn w-full justify-center"
                  style={{
                    background: "rgba(37,211,102,0.12)",
                    color: "#25D366",
                    border: "1.5px solid rgba(37,211,102,0.3)",
                  }}
                >
                  <span>💬</span>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
