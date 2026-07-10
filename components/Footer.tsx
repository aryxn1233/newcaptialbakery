"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Clock, ChevronRight } from "lucide-react";

const COLS = [
  { title: "Our Menu", links: ["Cakes", "Pastries", "Swiss Rolls", "Cream Rolls", "Patties", "Breads", "Snacks"] },
  { title: "Quick Links", links: ["Home", "About", "Gallery", "Meet the Owner", "Reviews", "Visit Us", "Contact"] },
];

const SECTIONS = ["home", "about", "products", "gallery", "owner", "reviews", "visit", "contact"];
const LABELS   = ["Home",  "About", "Products", "Gallery", "Owner", "Reviews", "Visit Us", "Contact"];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) { const y = el.getBoundingClientRect().top + window.pageYOffset - 80; window.scrollTo({ top: y, behavior: "smooth" }); }
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(160deg, var(--choco-900) 0%, #2E1005 50%, var(--choco-900) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Site footer"
    >
      {/* Gold top line */}
      <div style={{ height: 1, background: "linear-gradient(90deg, transparent, var(--gold), transparent)", opacity: 0.35 }} />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A96E'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-main relative z-10" style={{ paddingTop: "clamp(56px, 7vw, 96px)", paddingBottom: "clamp(40px, 5vw, 64px)" }}>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-14 pb-14" style={{ borderBottom: "1px solid rgba(201,169,110,0.1)" }}>

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div style={{ marginBottom: 20 }}>
              <div className="font-playfair font-bold" style={{ fontSize: 24, color: "var(--cream)", lineHeight: 1.1 }}>
                New Capital
              </div>
              <div className="font-cormorant font-medium" style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--gold)", marginTop: 3 }}>
                Bakery · Est. 1956
              </div>
            </div>
            <p className="font-poppins" style={{ fontSize: 13, color: "rgba(232,213,183,0.5)", lineHeight: 1.8, marginBottom: 24 }}>
              Serving Chandigarh with freshness, quality, and genuine love for nearly seven decades.
              Every product baked daily before sunrise.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-2.5">
              {["📷 Instagram", "👍 Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-poppins font-medium"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.06em",
                    color: "rgba(201,169,110,0.5)",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(201,169,110,0.12)",
                    borderRadius: 8,
                    padding: "6px 12px",
                    transition: "all 0.25s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(201,169,110,0.5)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.12)";
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-playfair font-bold" style={{ fontSize: 15, color: "var(--cream)", marginBottom: 20 }}>
              Navigation
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {SECTIONS.map((id, i) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="font-poppins flex items-center gap-2 group"
                    style={{ fontSize: 13, color: "rgba(232,213,183,0.48)", background: "none", border: "none", cursor: "pointer", transition: "color 0.25s ease", textAlign: "left" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(232,213,183,0.48)"; }}
                  >
                    <ChevronRight size={11} style={{ opacity: 0, transition: "opacity 0.25s" }} ref={(el) => {
                      if (!el) return;
                      const btn = el.closest("button");
                      if (!btn) return;
                      btn.addEventListener("mouseenter", () => { el.style.opacity = "0.6"; });
                      btn.addEventListener("mouseleave", () => { el.style.opacity = "0"; });
                    }} />
                    {LABELS[i]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-playfair font-bold" style={{ fontSize: 15, color: "var(--cream)", marginBottom: 20 }}>
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: MapPin,  label: "29, Sarovar Path\nSector 21C, Chandigarh – 160022", href: undefined },
                { icon: Phone,   label: "+91 8054805451", href: "tel:+918054805451" },
                { icon: Clock,   label: "Open Daily · Closes 10:00 PM", href: undefined },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={14} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 3 }} strokeWidth={1.7} />
                  {href ? (
                    <a href={href} className="font-poppins" style={{ fontSize: 12.5, color: "rgba(232,213,183,0.5)", lineHeight: 1.7 }}>
                      {label}
                    </a>
                  ) : (
                    <span className="font-poppins" style={{ fontSize: 12.5, color: "rgba(232,213,183,0.5)", lineHeight: 1.7, whiteSpace: "pre-line" }}>
                      {label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA / Visit */}
          <div>
            <div className="font-playfair font-bold" style={{ fontSize: 15, color: "var(--cream)", marginBottom: 20 }}>
              Visit Us
            </div>
            <div
              className="rounded-[var(--radius-md)]"
              style={{
                background: "rgba(201,169,110,0.06)",
                border: "1px solid rgba(201,169,110,0.15)",
                padding: "18px",
                marginBottom: 16,
              }}
            >
              <p className="font-poppins" style={{ fontSize: 12.5, color: "rgba(232,213,183,0.55)", lineHeight: 1.7 }}>
                🏪 Walk-In &amp; Takeaway only.<br />No Home Delivery.<br />
                Come visit for the freshest baked goods in Chandigarh!
              </p>
            </div>
            <a href="tel:+918054805451" className="btn btn-primary w-full justify-center" style={{ marginBottom: 10 }}>
              <Phone size={13} />
              <span>8054805451</span>
            </a>
            <a
              href="https://wa.me/918054805451"
              target="_blank"
              rel="noopener noreferrer"
              className="btn w-full justify-center"
              style={{
                background: "rgba(37,211,102,0.08)",
                color: "#25D366",
                border: "1.5px solid rgba(37,211,102,0.25)",
              }}
            >
              <span>💬 WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ paddingTop: 28 }}
        >
          <p className="font-poppins text-center sm:text-left" style={{ fontSize: 12, color: "rgba(232,213,183,0.25)" }}>
            © {year} New Capital Bakery. All rights reserved. · Chandigarh, India.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="rounded-full"
              style={{ width: 8, height: 8, background: "var(--gold)", display: "inline-block", opacity: 0.6 }}
            />
            <span className="font-cormorant italic" style={{ fontSize: 13, color: "rgba(232,213,183,0.22)" }}>
              Baked with Love since 1956
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
