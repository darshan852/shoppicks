import Timer from "./Timer";

export default function DealsPage({ products, setPage, setSelectedProduct, wishlist, toggleWishlist }) {
  return (
    <div className="page">
      <div className="section">
        <div className="deals-banner">
          <div>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Today Only</div>
            <div className="deals-title">⚡ Flash Deals</div>
          </div>
          <Timer />
        </div>

        <div className="filter-bar">
          {["All", "Under Rs25", "Rs25–Rs50", "Rs50–Rs100", "50% Off+"].map(f => (
            <button key={f} className={`filter-pillRs{f === "All" ? " active" : ""}`}>{f}</button>
          ))}
        </div>

        <div className="grid-4">
          {products.map(p => (
            <div key={p.id} className="deal-card" onClick={() => { setSelectedProduct(p); setPage("detail"); }}>
              <div style={{ position: "relative" }}>
                <img className="deal-img" src={p.img} alt={p.name} />
                <div className="discount-pill">-{p.discount}%</div>
                <button className={`wishlist-btnRs{wishlist.includes(p.id) ? " active" : ""}`} style={{ opacity: 1 }} onClick={e => { e.stopPropagation(); toggleWishlist(p.id); }}>
                  {wishlist.includes(p.id) ? "❤️" : "🤍"}
                </button>
              </div>
              <div className="deal-body">
                <div style={{ fontSize: 12, color: "var(--gray-4)", fontWeight: 600, marginBottom: 4 }}>{p.category}</div>
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8, color: "var(--ink)" }}>{p.name}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 20, fontWeight: 800, color: "var(--coral)" }}>Rs{p.price}</span>
                  <span style={{ fontSize: 13, color: "var(--gray-4)", textDecoration: "line-through" }}>Rs{p.originalPrice}</span>
                </div>
                <div className="deal-progress">
                  <div className="deal-progress-fill" style={{ width: `Rs{p.sold}%` }} />
                </div>
                <div className="deal-sold">{p.sold}% claimed · {Math.floor(p.reviews * 0.1)} left</div>
                <button className="card-cta" style={{ opacity: 1, transform: "none", marginTop: 10 }} onClick={e => { e.stopPropagation(); window.open(p.affiliateLink, "_blank"); }}>Buy on Amazon →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
