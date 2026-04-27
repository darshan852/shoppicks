import ProductCard from "./ProductCard";

const CATEGORIES = [
  { id: "fashion", name: "Fashion", icon: "👗", count: 248 },
  { id: "jewelry", name: "Jewelry", icon: "💎", count: 156 },
  { id: "home", name: "Home", icon: "🏡", count: 312 },
  { id: "gadgets", name: "Gadgets", icon: "📱", count: 189 },
  { id: "beauty", name: "Beauty", icon: "✨", count: 204 },
  { id: "sports", name: "Sports", icon: "⚡", count: 97 },
];

// const INITIAL_PRODUCTS = [
//   { id: 1, name: "Vintage Leather Tote Bag", category: "Fashion", price: 89, originalPrice: 149, rating: 4.8, reviews: 1240, badge: "trending", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop", description: "Handcrafted genuine leather tote with gold hardware. Perfect for work and weekends.", affiliateLink: "#", sold: 78, discount: 40, pros: ["Genuine leather", "Multiple pockets", "Lifetime warranty"], cons: ["Heavy when full", "Needs conditioning"], tags: ["#Trending", "#BestSeller"] },
//   { id: 2, name: "Gold Layered Necklace Set", category: "Jewelry", price: 34, originalPrice: 68, rating: 4.9, reviews: 3420, badge: "hot", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop", description: "18K gold-plated layered necklace set that won't tarnish. Instagram-worthy.", affiliateLink: "#", sold: 92, discount: 50, pros: ["Tarnish-resistant", "Set of 3", "Adjustable"], cons: ["Not for sensitive skin"], tags: ["#Hot", "#GiftIdea"] },
//   { id: 3, name: "Smart LED Desk Lamp", category: "Gadgets", price: 59, originalPrice: 79, rating: 4.7, reviews: 2180, badge: "new", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", description: "Touch-controlled smart lamp with USB-C charging port and 10 brightness levels.", affiliateLink: "#", sold: 65, discount: 25, pros: ["USB charging", "Eye-care mode", "Memory function"], cons: ["Short cable"], tags: ["#New", "#MustHave"] },
//   { id: 4, name: "Cozy Knit Throw Blanket", category: "Home", price: 45, originalPrice: 75, rating: 4.8, reviews: 892, badge: "best", img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=400&fit=crop", description: "Ultra-soft chunky knit blanket perfect for home décor and snuggling.", affiliateLink: "#", sold: 55, discount: 40, pros: ["Machine washable", "Large size", "Aesthetic design"], cons: ["Sheds slightly initially"], tags: ["#BestSeller"] },
//   { id: 5, name: "Wireless Earbuds Pro", category: "Gadgets", price: 79, originalPrice: 129, rating: 4.6, reviews: 5670, badge: "trending", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop", description: "Active noise cancellation, 30hr battery, premium sound quality.", affiliateLink: "#", sold: 88, discount: 39, pros: ["ANC", "30hr battery", "IPX5 waterproof"], cons: ["Case is bulky"], tags: ["#Trending", "#Tech"] },
//   { id: 6, name: "Botanical Face Serum", category: "Beauty", price: 42, originalPrice: 65, rating: 4.9, reviews: 3210, badge: "hot", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", description: "Vitamin C + hyaluronic acid formula for glass skin. Dermatologist tested.", affiliateLink: "#", sold: 71, discount: 35, pros: ["Visible results", "Fragrance-free", "Cruelty-free"], cons: ["Premium price"], tags: ["#Hot", "#BeautyEssential"] },
//   { id: 7, name: "Minimalist Wall Clock", category: "Home", price: 38, originalPrice: 55, rating: 4.7, reviews: 1560, badge: "new", img: "https://images.unsplash.com/photo-1564473185935-80a9b78d3e2c?w=400&h=400&fit=crop", description: "Silent quartz movement, Scandinavian design, fits any room aesthetic.", affiliateLink: "#", sold: 62, discount: 31, pros: ["Silent movement", "Easy install", "Minimalist"], cons: ["Battery not included"], tags: ["#New", "#HomeDecor"] },
//   { id: 8, name: "Silk Sleep Mask", category: "Beauty", price: 18, originalPrice: 28, rating: 4.8, reviews: 4320, badge: "trending", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=400&h=400&fit=crop", description: "100% mulberry silk, gentle on skin, adjustable strap, ideal gift.", affiliateLink: "#", sold: 83, discount: 36, pros: ["Pure silk", "Adjustable", "Gift-ready"], cons: ["Hand wash only"], tags: ["#Trending", "#GiftIdea"] },
// ];

const BLOG_POSTS = [
  { id: 1, tag: "Gift Guide", title: "Top 10 Jewelry Gifts Under Rs100", excerpt: "Curated selection of timeless pieces that make the perfect gift for any occasion.", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop", readTime: "5 min" },
  { id: 2, tag: "Home Decor", title: "Best Home Decor Finds Under Rs50", excerpt: "Elevate your space instantly with these affordable and chic design finds.", img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&h=400&fit=crop", readTime: "7 min" },
  { id: 3, tag: "Tech Trends", title: "Minimalist Desk Setup Ideas for 2025", excerpt: "Boost your productivity with these clean, organized workspace essentials.", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=400&fit=crop", readTime: "6 min" },
  { id: 4, tag: "Style Edit", title: "Cozy Fall Fashion Essentials", excerpt: "Layering pieces, chunky knits, and versatile boots for the upcoming season.", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=400&fit=crop", readTime: "4 min" },
  { id: 5, tag: "Beauty", title: "Glass Skin Routine Under Rs60", excerpt: "Korean beauty secrets with affordable drugstore and Amazon finds.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop", readTime: "8 min" },
  { id: 6, tag: "Gift Guide", title: "Best Gadget Gifts for 2025", excerpt: "From wireless earbuds to smart home devices — the ultimate tech gift guide.", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=400&fit=crop", readTime: "9 min" },
];

export default function HomePage({ products, setPage, setSelectedProduct, wishlist, toggleWishlist }) {
  return (
    <div className="page">
      {/* Hero */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">⚡ Limited Time — Flash Deals Live Now</div>
          <h1>Today's Best <span>Deals</span> &amp; Trending Picks</h1>
          <p>Curated  finds you'll actually love. Real reviews, real savings — updated daily.</p>
          <button className="hero-cta" onClick={() => setPage("deals")}>Shop Flash Deals <span>→</span></button>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><div className="hero-stat-num">100+</div><div className="hero-stat-label">Products Curated</div></div>
          <div className="hero-stat"><div className="hero-stat-num">72h</div><div className="hero-stat-label">Avg. Delivery</div></div>
          <div className="hero-stat"><div className="hero-stat-num">4.0★</div><div className="hero-stat-label">Avg. Rating</div></div>
        </div>
      </div>

      {/* Affiliate Disclosure */}
      {/* <div style={{ padding: "0 40px", marginTop: 20 }}>
        <div className="disclosure-box">
          <span>ℹ️</span>
          <span><strong>Affiliate Disclosure:</strong> ShopPicks earns a commission from qualifying Amazon purchases at no extra cost to you. We only recommend products we genuinely believe in.</span>
        </div>
      </div> */}

      {/* Categories */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">Explore <span>Categories</span></div>
          <button className="view-all" onClick={() => setPage("category")}>View All →</button>
        </div>
        <div className="categories-grid">
          {CATEGORIES.map(c => (
            <div key={c.id} className="cat-card" onClick={() => setPage("category")}>
              <div className="cat-icon">{c.icon}</div>
              <div className="cat-name">{c.name}</div>
              <div className="cat-count">{c.count} picks</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-title">🔥 Trending <span>Right Now</span></div>
          <button className="view-all" onClick={() => setPage("trending")}>See All →</button>
        </div>
        <div className="grid-4">
          {products.slice(0, 4).map(p => (
            <ProductCard key={p.id} product={p} onClick={prod => { setSelectedProduct(prod); setPage("detail"); }} wishlist={wishlist} toggleWishlist={toggleWishlist} />
          ))}
        </div>
      </div>

      {/* Featured Deals */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-title">💰 Featured <span>Deals</span></div>
          <button className="view-all" onClick={() => setPage("deals")}>All Deals →</button>
        </div>
        <div className="grid-4">
          {products.slice(4, 8).map(p => (
            <ProductCard key={p.id} product={p} onClick={prod => { setSelectedProduct(prod); setPage("detail"); }} wishlist={wishlist} toggleWishlist={toggleWishlist} />
          ))}
        </div>
      </div>

      {/* Blog Preview */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="section-header">
          <div className="section-title">💡 Ideas &amp; <span>Inspiration</span></div>
          <button className="view-all" onClick={() => setPage("blog")}>All Articles →</button>
        </div>
        <div className="grid-3">
          {BLOG_POSTS.slice(0, 3).map(b => (
            <div key={b.id} className="blog-card">
              <img className="blog-img" src={b.img} alt={b.title} />
              <div className="blog-body">
                <div className="blog-tag">{b.tag} · {b.readTime} read</div>
                <div className="blog-title">{b.title}</div>
                <div className="blog-excerpt">{b.excerpt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      {/* <div className="newsletter">
        <h2>Never Miss a Deal</h2>
        <p>Get the best Amazon picks delivered to your inbox every morning. No spam — ever.</p>
        <div className="newsletter-form">
          <input className="newsletter-input" placeholder="Enter your email…" type="email" />
          <button className="newsletter-btn">Subscribe ✦</button>
        </div>
      </div> */}
    </div>
  );
}