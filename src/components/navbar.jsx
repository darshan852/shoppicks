import { useState } from "react";

function Navbar({ page, setPage, wishlistCount }) {
  const [search, setSearch] = useState("");
  const links = [
    { id: "home", label: "Home" },
    { id: "deals", label: "🔥 Deals" },
    { id: "trending", label: "Trending" },
    { id: "category", label: "Categories" },
    { id: "blog", label: "Ideas" },
    { id: "admin", label: "⚙ Admin" },
  ];
  return (
    <nav className="navbar">
      <div className="nav-logo" onClick={() => setPage("home")}>
        <img src="/logo.png" alt="logo" />
      </div>
      <div className="nav-links">
        {links.map(l => (
          <button key={l.id} className={`nav-link${page === l.id ? " active" : ""}`} onClick={() => setPage(l.id)}>{l.label}</button>
        ))}
      </div>
      <div className="nav-search">
        <span style={{ color: "var(--gray-4)", fontSize: 16 }}>🔍</span>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products…" />
      </div>
      <div className="nav-actions">
        <button className="icon-btn" onClick={() => setPage("about")}>ℹ️</button>
        <button className="icon-btn" style={{ position: "relative" }} onClick={() => setPage("wishlist")}>
          ❤️
          {wishlistCount > 0 && <span style={{ position: "absolute", top: 2, right: 2, background: "var(--coral)", color: "white", borderRadius: "50%", width: 16, height: 16, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{wishlistCount}</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar