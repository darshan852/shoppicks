import ProductCard from "./ProductCard";

export default function DetailPage({ product, products, setPage, setSelectedProduct, wishlist, toggleWishlist, showToast }) {
  if (!product) return null;
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  return (
    <div className="page">
      <div className="detail-page">
        <div className="breadcrumb">
          <button onClick={() => setPage("home")}>Home</button>
          <span className="breadcrumb-sep">›</span>
          <button onClick={() => setPage("category")}>{product.category}</button>
          <span className="breadcrumb-sep">›</span>
          <span style={{ color: "var(--ink)" }}>{product.name}</span>
        </div>

        <div className="detail-grid">
          <div>
            <div className="gallery-main">
              <img src={product.img} alt={product.name} />
              <button style={{ position: "absolute", top: 12, right: 12, background: "white", border: "none", width: 40, height: 40, borderRadius: "50%", fontSize: 18, cursor: "pointer", boxShadow: "var(--shadow-sm)" }} onClick={() => toggleWishlist(product.id)}>
                {wishlist.includes(product.id) ? "❤️" : "🤍"}
              </button>
            </div>
            <div className="gallery-thumbs">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`thumb${i === 0 ? " active" : ""}`}>
                  <img src={product.img} alt="" style={{ filter: i > 0 ? "brightness(0.85)" : "none" }} />
                </div>
              ))}
            </div>
          </div>

          <div className="detail-info">
            <div className="detail-badges">
              <span className="badge badge-trending">🔥 {product.badge || "Trending"}</span>
              <span className="badge badge-sale">-{product.discount}% Off</span>
              {product.reviews > 2000 && <span className="badge badge-best">🏆 Best Seller</span>}
            </div>
            <div className="detail-title">{product.name}</div>
            <div className="detail-rating">
              <span className="stars" style={{ fontSize: 18 }}>{"★".repeat(Math.floor(product.rating))}</span>
              <strong style={{ fontSize: 15 }}>{product.rating}</strong>
              <span style={{ fontSize: 14, color: "var(--gray-4)" }}>({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="detail-price-block">
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span className="detail-price">Rs{product.price}</span>
                <span className="detail-price-orig">Rs{product.originalPrice}</span>
              </div>
              <div className="detail-save">🎉 You save Rs{product.originalPrice - product.price} ({product.discount}% off)</div>
            </div>

            <div className="why-box">
              <h4>💡 Why Buy This?</h4>
              <p>{product.description}</p>
            </div>

            <div className="pros-cons">
              <div className="pros">
                <h5>✅ Pros</h5>
                <ul>{(product.pros || ["Great quality", "Fast shipping", "Good value"]).map(p => <li key={p}>{p}</li>)}</ul>
              </div>
              <div className="cons">
                <h5>⚠️ Cons</h5>
                <ul>{(product.cons || ["Check sizing", "Read reviews"]).map(c => <li key={c}>{c}</li>)}</ul>
              </div>
            </div>

            {/* <button className="buy-btn" onClick={() => { window.open("#", "_blank"); showToast("Opening Amazon…"); }}>
              🛒 Buy on Amazon · Rs{product.price}
            </button> */}
            <div style={{ textAlign: "center", fontSize: 12, color: "var(--gray-4)", marginTop: 8 }}>
              ✓ Prime eligible · ✓ Free returns · ✓ Secure checkout
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div style={{ marginTop: 60 }}>
            <div className="section-title" style={{ marginBottom: 24 }}>Customers Also <span style={{ color: "var(--coral)" }}>Loved</span></div>
            <div className="grid-4">
              {related.map(p => <ProductCard key={p.id} product={p} onClick={prod => { setSelectedProduct(prod); setPage("detail"); window.scrollTo(0, 0); }} wishlist={wishlist} toggleWishlist={toggleWishlist} />)}
            </div>
          </div>
        )}
      </div>
      {/* <button className="sticky-buy" onClick={() => { window.open("#", "_blank"); showToast("Opening Amazon…"); }}>
        🛒 Buy on Amazon — Rs{product.price}
      </button> */}
    </div>
  );
}