
const BLOG_POSTS = [
  { id: 1, tag: "Gift Guide", title: "Top 10 Jewelry Gifts Under Rs100", excerpt: "Curated selection of timeless pieces that make the perfect gift for any occasion.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", readTime: "5 min" },
  { id: 2, tag: "Home Decor", title: "Best Home Decor Finds Under Rs50", excerpt: "Elevate your space instantly with these affordable and chic design finds.", img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&h=400&fit=crop", readTime: "7 min" },
  { id: 3, tag: "Tech Trends", title: "Minimalist Desk Setup Ideas for 2025", excerpt: "Boost your productivity with these clean, organized workspace essentials.", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop", readTime: "6 min" },
  { id: 4, tag: "Style Edit", title: "Cozy Fall Fashion Essentials", excerpt: "Layering pieces, chunky knits, and versatile boots for the upcoming season.", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop", readTime: "4 min" },
  { id: 5, tag: "Beauty", title: "Glass Skin Routine Under Rs60", excerpt: "Korean beauty secrets with affordable drugstore and Amazon finds.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop", readTime: "8 min" },
  { id: 6, tag: "Gift Guide", title: "Best Gadget Gifts for 2025", excerpt: "From wireless earbuds to smart home devices — the ultimate tech gift guide.", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop", readTime: "9 min" },
];

export default function BlogPage({ setPage }) {
  return (
    <div className="page">
      <div className="about-hero" style={{ textAlign: "left", padding: "60px 40px" }}>
        <div style={{ fontSize: 13, color: "var(--coral)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Ideas Hub</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 900, marginBottom: 12 }}>Inspiration &amp; <span style={{ color: "var(--coral)" }}>Ideas</span></h1>
        <p style={{ fontSize: 16, color: "var(--gray-4)", maxWidth: 480 }}>Gift guides, buying advice, and curated picks to help you shop smarter.</p>
      </div>
      <div className="section">
        <div className="filter-bar">
          {["All", "Gift Guides", "Home Decor", "Tech Trends", "Style Edits", "Beauty"].map(f => (
            <button key={f} className={`filter-pill${f === "All" ? " active" : ""}`}>{f}</button>
          ))}
        </div>
        <div className="grid-3">
          {BLOG_POSTS.map(b => (
            <div key={b.id} className="blog-card">
              <img className="blog-img" src={b.img} alt={b.title} />
              <div className="blog-body">
                <div className="blog-tag">{b.tag} · {b.readTime} read</div>
                <div className="blog-title">{b.title}</div>
                <div className="blog-excerpt">{b.excerpt}</div>
                <button style={{ marginTop: 14, background: "none", border: "none", color: "var(--coral)", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}