"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, message } = formData;
    if (!name.trim()) return;
    const text = encodeURIComponent(
      `Hello, I'm ${name.trim()}${phone ? ` (${phone.trim()})` : ""}. ${message.trim() || "I'd like to know more about your products."}`
    );
    window.open(`https://wa.me/918054805451?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => { setSent(false); setFormData({ name: "", phone: "", message: "" }); }, 5000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, var(--warm-white) 0%, var(--cream-deep) 100%)",
      }}
      aria-label="Contact New Capital Bakery"
    >
      <div className="container-main">

        {/* Header */}
        <div className="section-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="section-eyebrow justify-center"
          >
            Reach Out
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12 }}
            className="font-playfair font-bold text-display text-balance"
            style={{ color: "var(--choco-700)" }}
          >
            Get in{" "}
            <span className="italic gradient-text">Touch</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">

          {/* ── Contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: "clamp(24px, 3vw, 36px)" }}
          >
            <div>
              <h3 className="font-playfair font-bold text-heading" style={{ color: "var(--choco-700)", marginBottom: 12 }}>
                We&apos;d love to hear from you.
              </h3>
              <p className="font-poppins text-body" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                Whether you have a question about our products, want to place a large order, or
                simply want to visit — don&apos;t hesitate to reach out. We&apos;re here seven days a week.
              </p>
            </div>

            {/* Info cards */}
            {[
              {
                icon: Phone,
                title: "Call Us",
                desc: "+91 8054805451",
                sub: "Abhay Thakur · Available daily",
                href: "tel:+918054805451",
                color: "var(--gold)",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                desc: "29, Sarovar Path, Sector 21C",
                sub: "Chandigarh – 160022",
                href: "https://maps.google.com/?q=29+Sarovar+Path+Sector+21C+Chandigarh",
                color: "var(--coffee)",
              },
              {
                icon: Clock,
                title: "Working Hours",
                desc: "Open Every Day",
                sub: "Closes at 10:00 PM",
                href: null,
                color: "var(--gold)",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 rounded-[var(--radius-lg)]"
                style={{
                  background: "#fff",
                  border: "1px solid var(--beige)",
                  padding: "clamp(16px, 2vw, 24px)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  className="flex-shrink-0 rounded-[12px] flex items-center justify-center"
                  style={{
                    width: 46, height: 46,
                    background: `linear-gradient(135deg, ${item.color}18 0%, ${item.color}06 100%)`,
                    border: `1px solid ${item.color}28`,
                  }}
                >
                  <item.icon size={19} style={{ color: item.color }} strokeWidth={1.6} />
                </div>
                <div>
                  <div className="font-poppins font-semibold" style={{ fontSize: 13, color: "var(--choco-700)" }}>
                    {item.title}
                  </div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
                      className="font-poppins font-semibold" style={{ fontSize: 14, color: "var(--coffee)", lineHeight: 1.65 }}>
                      {item.desc}
                    </a>
                  ) : (
                    <div className="font-poppins font-semibold" style={{ fontSize: 14, color: "var(--coffee)" }}>{item.desc}</div>
                  )}
                  <div className="font-poppins" style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-[var(--radius-xl)]"
              style={{
                background: "#fff",
                border: "1px solid var(--beige)",
                padding: "clamp(28px, 4vw, 48px)",
                boxShadow: "var(--shadow-lg)",
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
              aria-label="Contact form"
            >
              <div>
                <h3 className="font-playfair font-bold" style={{ fontSize: "clamp(20px, 2.5vw, 26px)", color: "var(--choco-700)", marginBottom: 6 }}>
                  Send a Message via WhatsApp
                </h3>
                <p className="font-poppins" style={{ fontSize: 12.5, color: "var(--text-muted)" }}>
                  Your message opens directly in WhatsApp for instant response.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label htmlFor="contact-name" className="font-poppins font-medium" style={{ display: "block", fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, letterSpacing: "0.04em" }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="input-premium"
                    placeholder="Eg: Sunita Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData((f) => ({ ...f, name: e.target.value }))}
                    required
                    autoComplete="name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="font-poppins font-medium" style={{ display: "block", fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, letterSpacing: "0.04em" }}>
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    className="input-premium"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData((f) => ({ ...f, phone: e.target.value }))}
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="font-poppins font-medium" style={{ display: "block", fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, letterSpacing: "0.04em" }}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    className="input-premium"
                    rows={4}
                    placeholder="I'd like to know about your cakes and cream rolls..."
                    value={formData.message}
                    onChange={(e) => setFormData((f) => ({ ...f, message: e.target.value }))}
                    style={{ resize: "none" }}
                  />
                </div>
              </div>

              {/* Disclaimer */}
              <p className="font-poppins" style={{ fontSize: 11.5, color: "var(--text-muted)", lineHeight: 1.65, background: "var(--cream)", borderRadius: "var(--radius-sm)", padding: "10px 14px" }}>
                🏪 <strong style={{ color: "var(--coffee)" }}>Walk-In &amp; Takeaway only.</strong>{" "}
                We do not currently offer Home Delivery.
              </p>

              <motion.button
                type="submit"
                disabled={sent}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary w-full justify-center"
                style={{
                  padding: "18px 36px",
                  fontSize: 15,
                  background: sent
                    ? "linear-gradient(135deg, #25D366 0%, #128C7E 100%)"
                    : undefined,
                }}
              >
                {sent ? (
                  <>
                    <span>✓</span>
                    <span>Opened in WhatsApp!</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send via WhatsApp</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
