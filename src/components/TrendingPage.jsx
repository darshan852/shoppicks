import { useState } from "react";

export default function TrendingPage({ products, setPage, setSelectedProduct, wishlist, toggleWishlist }) {
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...new Set(products.map(p => p.category))];
  const filtered = filter === "All" ? products : products.filter(p => p.category === filter);
  return (
    <div className="page">
      <div className="section">
        <div className="section-header">
          <div className="section-title">🔥 What's <span>Trending</span></div>
        </div>
        <div className="filter-bar">
          {cats.map(c => (
            <button key={c} className={`filter-pill${filter === c ? " active" : ""}`} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
        <div className="masonry">
          {filtered.map((p, i) => (
            <div key={p.id} className="masonry-item">
              <div className="product-card">
                <div className="card-img-wrap" style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/5" }} onClick={() => { setSelectedProduct(p); setPage("detail"); }}>
                  <img src={p.img} alt={p.name} />
                  <div className="card-badges">
                    {p.tags && p.tags.map(tag => (
                      <span key={tag} className="badge badge-trending" style={{ fontSize: 10 }}>{tag}</span>
                    ))}
                  </div>
                  <button className={`wishlist-btnRs{wishlist.includes(p.id) ? " active" : ""}`} onClick={e => { e.stopPropagation(); toggleWishlist(p.id); }}>
                    {wishlist.includes(p.id) ? "❤️" : "🤍"}
                  </button>
                </div>
                <div className="card-body" onClick={() => { setSelectedProduct(p); setPage("detail"); }}>
                  <div className="card-title">{p.name}</div>
                  <div className="card-price">
                    <span className="price-current">Rs{p.price}</span>
                    {p.originalPrice && <span className="price-original">Rs{p.originalPrice}</span>}
                  </div>
                  <button className="card-cta" style={{ opacity: 1, transform: "none" }} onClick={e => { e.stopPropagation(); window.open("#", "_blank"); }}>Buy on Amazon →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}