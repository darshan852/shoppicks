import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";

const CATEGORIES = [
  { id: "fashion", name: "Fashion", icon: "👗", count: 248 },
  { id: "jewelry", name: "Jewelry", icon: "💎", count: 156 },
  { id: "home", name: "Home", icon: "🏡", count: 312 },
  { id: "gadgets", name: "Gadgets", icon: "📱", count: 189 },
  { id: "beauty", name: "Beauty", icon: "✨", count: 204 },
  { id: "sports", name: "Sports", icon: "⚡", count: 97 },
];

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">ShopPicks ✦</div>
          <p className="footer-desc">
            Curating the best deals since 2026. We help you shop smarter, save
            more, and discover products you'll love.
          </p>
          {/* <div style={{ marginTop: 20, padding: "12px 16px", background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius-sm)", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
            As an Amazon Associate, ShopPicks earns from qualifying purchases.
          </div> */}
          <div className="footer-social">
            <a href="https://threads.net" target="_blank" rel="noreferrer">
              <SiThreads />
            </a>{" "}
            {/* Threads */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://wa.me/your-number" target="_blank" rel="noreferrer"> 
              <FaWhatsapp />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">
              <FaPinterestP />
            </a>
          </div>
        </div>
        <div>
          <div className="footer-heading">Shop</div>
          {/* {["Trending", "Flash Deals", "New Arrivals", "Best Sellers", "Gift Ideas"].map(l => (
            <a key={l} className="footer-link" onClick={() => setPage("trending")}>{l}</a>
          ))} */}
          <button className="footer-link" onClick={() => setPage("trending")}>
            Trending
          </button>
          <button className="footer-link" onClick={() => setPage("deals")}>
            Flash Deals
          </button>
          <button className="footer-link" onClick={() => setPage("category")}>
            Category
          </button>
          <button className="footer-link" onClick={() => setPage("blog")}>
            Inspiration & Ideas
          </button>
        </div>
        <div>
          <div className="footer-heading">Categories</div>
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              className="footer-link"
              onClick={() => setPage("category")}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>
        <div>
          <div className="footer-heading">Company</div>
          {[
            ["About Us", "about"],
            ["Blog / Ideas", "blog"],
            ["Contact", "about"],
            ["about"],
          ].map(([l, p]) => (
            <button key={l} className="footer-link" onClick={() => setPage(p)}>
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ShopPicks. All rights reserved.</span>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>
          {" "}
          · Privacy · Terms
        </span>
      </div>
    </footer>
  );
}

export default Footer;
