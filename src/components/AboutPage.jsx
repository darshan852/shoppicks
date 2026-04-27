import { useState } from "react";

function AboutPage({ setPage }) {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  return (
    <div className="page">
      <div className="about-hero">
        <h1 className="about-title">
          About <span style={{ color: "var(--coral)" }}>ShopPicks</span>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: "var(--gray-4)",
            maxWidth: 560,
            margin: "0 auto 32px",
          }}
        >
          We're a team of deal hunters and product enthusiasts who spend hours
          finding the best  picks so you don't have to.
        </p>
      </div>

      <div className="section">
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                marginBottom: 16,
                color: "var(--ink)",
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                color: "var(--gray-4)",
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              At ShopPicks, we discover and showcase quality products across
              fashion, home, gadgets, and lifestyle. Our goal is to simplify
              your shopping experience by highlighting items that offer great
              value and positive user feedback.
            </p>
            <p
              style={{
                color: "var(--gray-4)",
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              We may earn a commission from some links on this site, at no
              additional cost to you. Your support helps us continue providing
              curated recommendations.
            </p>
            {/* <div style={{ background: "#fff9f0", border: "1.5px solid #fed7aa", borderRadius: "var(--radius-sm)", padding: "16px 20px" }}>
              <div style={{ fontWeight: 700, color: "#92400e", marginBottom: 6 }}>📋 Affiliate Disclosure</div>
              <p style={{ fontSize: 14, color: "#92400e", lineHeight: 1.6 }}>ShopPicks.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
            </div> */}
          </div>

          {/* Contact */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                marginBottom: 20,
                color: "var(--ink)",
              }}
            >
              Contact Us
            </h2>
            <div className="contact-form">
              {["name", "email"].map((f) => (
                <div
                  className="form-group"
                  key={f}
                  style={{ marginBottom: 16 }}
                >
                  <label className="form-label">
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </label>
                  <input
                    className="form-input"
                    value={form[f]}
                    onChange={(e) => setForm({ ...form, [f]: e.target.value })}
                    placeholder={
                      f === "email" ? "you@example.com" : "Your name"
                    }
                  />
                </div>
              ))}
              <div className="form-group" style={{ marginBottom: 20 }}>
                <label className="form-label">Message</label>
                <textarea
                  className="form-input"
                  rows={5}
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  placeholder="Your message…"
                  style={{ resize: "vertical" }}
                />
              </div>
              <button
                className="btn btn-primary"
                style={{ width: "100%", padding: "12px" }}
              >
                Send Message ✦
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
