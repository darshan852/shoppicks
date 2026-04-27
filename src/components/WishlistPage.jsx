import ProductCard from "./ProductCard";

export default function WishlistPage({ products, wishlist, toggleWishlist, setPage, setSelectedProduct }) {
  const wishlisted = products.filter(p => wishlist.includes(p.id));
  return (
    <div className="page">
      <div className="section">
        <div className="section-header">
          <div className="section-title">❤️ Your <span>Wishlist</span></div>
          <span style={{ fontSize: 14, color: "var(--gray-4)" }}>{wishlisted.length} items saved</span>
        </div>
        {wishlisted.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--gray-4)" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🤍</div>
            <div style={{ fontSize: 20, fontWeight: 600, color: "var(--ink)", marginBottom: 8 }}>Your wishlist is empty</div>
            <div style={{ marginBottom: 24 }}>Save products by clicking the heart icon</div>
            <button className="btn btn-primary" onClick={() => setPage("home")}>Discover Products</button>
          </div>
        ) : (
          <div className="grid-4">
            {wishlisted.map(p => <ProductCard key={p.id} product={p} onClick={prod => { setSelectedProduct(prod); setPage("detail"); }} wishlist={wishlist} toggleWishlist={toggleWishlist} />)}
          </div>
        )}
      </div>
    </div>
  );
}