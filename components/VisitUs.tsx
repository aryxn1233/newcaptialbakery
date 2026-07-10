"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Store } from "lucide-react";

const INFO = [
  {
    icon: MapPin,
    label: "Address",
    content: (
      <>
        New Capital Bakery<br />
        29, Sarovar Path<br />
        Sector 21C, Chandigarh – 160022
      </>
    ),
    color: "var(--gold)",
  },
  {
    icon: Phone,
    label: "Call Us",
    content: (
      <a href="tel:+918054805451" className="font-semibold" style={{ color: "var(--choco-700)" }}>
        +91 8054805451
      </a>
    ),
    sub: "Abhay Thakur — Owner",
    color: "var(--coffee)",
  },
  {
    icon: Clock,
    label: "Hours",
    content: <>Open Daily</>,
    sub: "Closes at 10:00 PM",
    color: "var(--gold)",
  },
  {
    icon: Store,
    label: "Service",
    content: <>Walk-In &amp; Takeaway</>,
    sub: "No Home Delivery",
    color: "var(--coffee)",
  },
];

export default function VisitUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="visit"
      ref={ref}
      className="section-padding"
      style={{ background: "var(--cream)" }}
      aria-label="Visit New Capital Bakery"
    >
      <div className="container-main">

        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow justify-center"
          >
            Come Visit Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--choco-700)" }}
          >
            Find Us in
            <span className="italic gradient-text"> Chandigarh</span>
          </motion.h2>
        </div>

        {/* Info cards + Map */}
        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-2"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {INFO.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-4 rounded-[var(--radius-lg)] group"
                style={{
                  background: "#fff",
                  border: "1px solid var(--beige)",
                  padding: "clamp(16px, 2vw, 22px)",
                  boxShadow: "var(--shadow-sm)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,169,110,0.35)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--beige)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-sm)";
                }}
              >
                <div
                  className="flex-shrink-0 rounded-[12px] flex items-center justify-center"
                  style={{
                    width: 44, height: 44,
                    background: `linear-gradient(135deg, ${item.color}18 0%, ${item.color}08 100%)`,
                    border: `1px solid ${item.color}28`,
                  }}
                >
                  <item.icon size={18} style={{ color: item.color }} strokeWidth={1.7} />
                </div>
                <div>
                  <div className="font-poppins font-semibold" style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 5 }}>
                    {item.label}
                  </div>
                  <div className="font-poppins" style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                    {item.content}
                  </div>
                  {item.sub && (
                    <div className="font-poppins" style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 3 }}>
                      {item.sub}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <a
                href="https://maps.google.com/?q=29+Sarovar+Path+Sector+21C+Chandigarh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1 justify-center"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>
              <a
                href="tel:+918054805451"
                className="btn btn-outline-dark flex-1 justify-center"
              >
                <Phone size={14} />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <div
              className="relative rounded-[var(--radius-xl)] overflow-hidden"
              style={{
                boxShadow: "var(--shadow-xl)",
                border: "1px solid var(--beige)",
                height: "clamp(300px, 45vw, 520px)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.8!2d76.7400!3d30.7200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ef96b%3A0xa5ff67f9527d5cbe!2sSector%2021C%2C%20Chandigarh%2C%20160022!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="New Capital Bakery — 29 Sarovar Path, Sector 21C, Chandigarh"
              />
              {/* Map overlay label */}
              <div className="absolute top-4 left-4 glass rounded-[var(--radius-md)]" style={{ padding: "12px 16px", maxWidth: 220, boxShadow: "var(--shadow-md)" }}>
                <div className="font-playfair font-bold" style={{ fontSize: 13, color: "var(--choco-700)", lineHeight: 1.3 }}>
                  New Capital Bakery
                </div>
                <div className="font-poppins" style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 3 }}>
                  29, Sarovar Path, Sector 21C
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
