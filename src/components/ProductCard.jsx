function ProductCard({ product, onClick, wishlist, toggleWishlist }) {
  const badgeClass = {
    trending: "badge-trending",
    hot: "badge-hot",
    new: "badge-new",
    best: "badge-best",
    sale: "badge-sale",
  };
  const badgeLabel = {
    trending: "🔥 Trending",
    hot: "⚡ Hot",
    new: "✨ New",
    best: "🏆 Best Seller",
    sale: "💰 Sale",
  };
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="card-img-wrap" style={{ aspectRatio: "1" }}>
        <img src={product.img} alt={product.name} />
        <div className="card-badges">
          <span
            className={`badge Rs{badgeClass[product.badge] || "badge-trending"}`}
          >
            {badgeLabel[product.badge] || "🔥 Trending"}
          </span>
          {product.discount && (
            <span className="badge badge-sale">-{product.discount}%</span>
          )}
        </div>
        <button
          className={`wishlist-btnRs{wishlist.includes(product.id) ? " active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product.id);
          }}
        >
          {wishlist.includes(product.id) ? "❤️" : "🤍"}
        </button>
      </div>
      <div className="card-body">
        <div className="card-category">{product.category}</div>
        <div className="card-title">{product.name}</div>
        <div className="card-rating">
          <span className="stars">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="rating-count">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>
        <div className="card-price">
          <span className="price-current">Rs {product.price}</span>
          {product.originalPrice && (
            <span className="price-original">Rs {product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="price-save">Save {product.discount}%</span>
          )}
        </div>
        <button
          className="card-cta"
          onClick={(e) => {
            e.stopPropagation();
            window.open("#", "_blank");
          }}
        >
          Buy on Amazon →
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
