import { useState } from "react";
import ProductCard from "./ProductCard";

const CATEGORIES = [
  { id: "fashion", name: "Fashion", icon: "👗", count: 248 },
  { id: "jewelry", name: "Jewelry", icon: "💎", count: 156 },
  { id: "home", name: "Home", icon: "🏡", count: 312 },
  { id: "gadgets", name: "Gadgets", icon: "📱", count: 189 },
  { id: "beauty", name: "Beauty", icon: "✨", count: 204 },
  { id: "sports", name: "Sports", icon: "⚡", count: 97 },
];

 export default function CategoryPage({ products, setPage, setSelectedProduct, wishlist, toggleWishlist }) {
  const [activeCat, setActiveCat] = useState("All");
  const [sort, setSort] = useState("trending");
  const cats = ["All", ...CATEGORIES.map(c => c.name)];
  let filtered = activeCat === "All" ? products : products.filter(p => p.category === activeCat);
  if (sort === "price-asc") filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);
  return (
    <div className="page">
      <div className="section">
        <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
          {/* Sidebar */}
          <div style={{ width: 220, flexShrink: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 16, color: "var(--ink)" }}>Categories</div>
            {cats.map(c => (
              <button key={c} onClick={() => setActiveCat(c)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 14px", borderRadius: "var(--radius-sm)", marginBottom: 4, background: activeCat === c ? "var(--coral-light)" : "none", color: activeCat === c ? "var(--coral)" : "var(--ink-2)", fontWeight: activeCat === c ? 600 : 400, border: "none", cursor: "pointer", fontSize: 14 }}>{c}</button>
            ))}
            <div style={{ fontWeight: 700, fontSize: 16, margin: "24px 0 12px", color: "var(--ink)" }}>Sort By</div>
            {[["trending", "🔥 Trending"], ["price-asc", "Price: Low to High"], ["price-desc", "Price: High to Low"], ["rating", "Best Rated"]].map(([v, l]) => (
              <button key={v} onClick={() => setSort(v)} style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 14px", borderRadius: "var(--radius-sm)", marginBottom: 4, background: sort === v ? "var(--coral-light)" : "none", color: sort === v ? "var(--coral)" : "var(--ink-2)", fontWeight: sort === v ? 600 : 400, border: "none", cursor: "pointer", fontSize: 14 }}>{l}</button>
            ))}
          </div>

          {/* Grid */}
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 14, color: "var(--gray-4)" }}>Showing <strong style={{ color: "var(--ink)" }}>{filtered.length}</strong> products</div>
            </div>
            <div className="grid-3">
              {filtered.map(p => (
                <ProductCard key={p.id} product={p} onClick={prod => { setSelectedProduct(prod); setPage("detail"); }} wishlist={wishlist} toggleWishlist={toggleWishlist} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}