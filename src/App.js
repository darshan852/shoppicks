import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import HomePage from "./components/home";
import DealsPage from "./components/DealsPage";
import TrendingPage from "./components/TrendingPage";
import CategoryPage from "./components/CategoryPage";
import DetailPage from "./components/DetailPage";
import BlogPage from "./components/BlogPage";
import WishlistPage from "./components/WishlistPage";
import AboutPage from "./components/AboutPage";
import AdminPage from "./components/AdminPage";
import Footer from "./components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

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

function App() {
  const [page, setPage] = useState("home");
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [toast, setToast] = useState(null);

  const getProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    console.log(snapshot);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const next = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      showToast(
        next.includes(id) ? "❤️ Added to wishlist" : "🤍 Removed from wishlist",
      );
      return next;
    });
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const pageProps = {
    products,
    setPage,
    setSelectedProduct,
    wishlist,
    toggleWishlist,
    showToast,
  };

  return (
    <>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Navbar page={page} setPage={setPage} wishlistCount={wishlist.length} />

        <div style={{ flex: 1 }}>
          {page === "home" && <HomePage {...pageProps} />}
          {page === "deals" && <DealsPage {...pageProps} />}
          {page === "trending" && <TrendingPage {...pageProps} />}
          {page === "category" && <CategoryPage {...pageProps} />}
          {page === "detail" && (
            <DetailPage {...pageProps} product={selectedProduct} />
          )}
          {page === "blog" && <BlogPage setPage={setPage} />}
          {page === "wishlist" && <WishlistPage {...pageProps} />}
          {page === "about" && <AboutPage setPage={setPage} />}
          {page === "admin" && <AdminPage showToast={showToast} />}
        </div>

        {page !== "detail" && <Footer setPage={setPage} />}
      </div>

      {toast && <div className="toast">✦ {toast}</div>}
    </>
  );
}

export default App;
