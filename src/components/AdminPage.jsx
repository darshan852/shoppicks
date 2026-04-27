import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

const CATEGORIES = [
  { id: "fashion", name: "Fashion", icon: "👗", count: 248 },
  { id: "jewelry", name: "Jewelry", icon: "💎", count: 156 },
  { id: "home", name: "Home", icon: "🏡", count: 312 },
  { id: "gadgets", name: "Gadgets", icon: "📱", count: 189 },
  { id: "beauty", name: "Beauty", icon: "✨", count: 204 },
  { id: "sports", name: "Sports", icon: "⚡", count: 97 },
];

function AdminPage({ showToast }) {
  const [modal, setModal] = useState(null); // null | "add" | "edit"
  const [deleteId, setDeleteId] = useState(null);
  const [products, setProducts] = useState([]);

  const emptyForm = {
    name: "",
    category: "Fashion",
    price: "",
    originalPrice: "",
    badge: "trending",
    img: "",
    description: "",
    affiliateLink: "",
    discount: "",
    rating: "4.8",
    reviews: "100",
    pros: "",
    cons: "",
  };
  const [form, setForm] = useState(emptyForm);
  const [updateID,setUpdateid] = useState(null)

  const getProducts = async () => {
    const snapshot = await getDocs(collection(db, "products"));
    console.log(snapshot)
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const openAdd = () => {
    setForm(emptyForm);
    setModal("add");
  };
  const openEdit = (p) => {
    setForm({
      ...p,
      price: String(p.price),
      originalPrice: String(p.originalPrice || ""),
      discount: String(p.discount || ""),
      rating: String(p.rating),
      reviews: String(p.reviews),
      pros: (p.pros || []).join(", "),
      cons: (p.cons || []).join(", "),
    });
    setModal("edit");
    setUpdateid(p.id)
    console.log(p)
  };

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      getProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  const handleDelete = (id) => {
    deleteProduct(id);
    showToast("Product deleted");
    setDeleteId(null);
  };

  const addProduct = async (product) => {
    await addDoc(collection(db, "products"), product);
  };

  const updateProduct = async (id, updatedData) => {
    try {
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, updatedData);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleSave = async() => {
    const data = {
      ...form,
      price: parseFloat(form.price) || 0,
      originalPrice: parseFloat(form.originalPrice) || 0,
      discount: parseInt(form.discount) || 0,
      rating: parseFloat(form.rating) || 4.5,
      reviews: parseInt(form.reviews) || 0,
      sold: Math.floor(Math.random() * 80) + 20,
      pros: form.pros
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      cons: form.cons
        .split(",")
        .map((s) => s.trim()) 
        .filter(Boolean),
      tags: ["#" + form.badge.charAt(0).toUpperCase() + form.badge.slice(1)],
    };
    if (modal === "add") {
      // setProducts(prev => [...prev, { ...data, id: Date.now() }]);
      await addProduct(data);
      getProducts();
      showToast("✅ Product added!");
    } else {
      console.log(updateID)
      await updateProduct(updateID,data);
      getProducts();
      showToast("✅ Product updated!");
    }
    setModal(null);
  };

  return (
    <div className="page">
      <div className="admin-page">
        <div className="admin-header">
          <div>
            <div className="admin-title">⚙ Product Manager</div>
            <div style={{ fontSize: 14, color: "var(--gray-4)", marginTop: 4 }}>
              {products.length} products in catalog
            </div>
          </div>
          <button
            className="btn btn-primary"
            style={{ padding: "12px 20px" }}
            onClick={openAdd}
          >
            + Add Product
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 32,
          }}
        >
          {[
            ["Total Products", products.length, "📦"],
            [
              "Trending",
              products.filter((p) => p.badge === "trending").length,
              "🔥",
            ],
            [
              "Avg Rating",
              (
                products.reduce((s, p) => s + p.rating, 0) / products.length
              ).toFixed(1),
              "⭐",
            ],
            ["Categories", new Set(products.map((p) => p.category)).size, "🗂"],
          ].map(([l, v, e]) => (
            <div
              key={l}
              style={{
                background: "white",
                borderRadius: "var(--radius)",
                padding: "20px 24px",
                boxShadow: "var(--shadow-sm)",
                border: "1.5px solid var(--gray-3)",
              }}
            >
              <div style={{ fontSize: 28, marginBottom: 4 }}>{e}</div>
              <div
                style={{ fontSize: 24, fontWeight: 800, color: "var(--ink)" }}
              >
                {v}
              </div>
              <div style={{ fontSize: 13, color: "var(--gray-4)" }}>{l}</div>
            </div>
          ))}
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Rating</th>
              <th>Badge</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img
                    src={
                      p.img ||
                      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop"
                    }
                    alt=""
                  />
                  <div>
                    <div style={{ fontWeight: 600 }}>{p.name}</div>
                    <div
                      style={{
                        fontSize: 12,
                        color: "var(--gray-4)",
                        marginTop: 2,
                      }}
                    >
                      {p.description?.slice(0, 50)}…
                    </div>
                  </div>
                </td>
                <td>
                  <span
                    style={{
                      background: "var(--gray-2)",
                      padding: "3px 10px",
                      borderRadius: "var(--radius-pill)",
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {p.category}
                  </span>
                </td>
                <td>
                  <strong>Rs{p.price}</strong>{" "}
                  <span
                    style={{
                      color: "var(--gray-4)",
                      textDecoration: "line-through",
                      fontSize: 12,
                    }}
                  >
                    Rs{p.originalPrice}
                  </span>
                </td>
                <td>
                  <span style={{ color: "#16a34a", fontWeight: 700 }}>
                    {p.discount}%
                  </span>
                </td>
                <td>
                  <span style={{ color: "var(--amber)" }}>★</span> {p.rating}
                </td>
                <td>
                  <span
                    className={`badge badge-Rs{p.badge}`}
                    style={{ fontSize: 11 }}
                  >
                    {p.badge}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      className="btn btn-edit"
                      onClick={() => openEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => setDeleteId(p.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add/Edit Modal */}
      {modal && (
        <div
          className="modal-overlay"
          onClick={(e) => e.target === e.currentTarget && setModal(null)}
        >
          <div className="modal">
            <div className="modal-title">
              {modal === "add" ? "➕ Add New Product" : "✏️ Edit Product"}
            </div>
            <div className="form-grid">
              <div className="form-group full">
                <label className="form-label">Product Name *</label>
                <input
                  className="form-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Vintage Leather Tote Bag"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={form.category}
                  onChange={(e) =>
                    setForm({ ...form, category: e.target.value })
                  }
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Badge</label>
                <select
                  className="form-select"
                  value={form.badge}
                  onChange={(e) => setForm({ ...form, badge: e.target.value })}
                >
                  {["trending", "hot", "new", "best", "sale"].map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Current Price (Rs) *</label>
                <input
                  className="form-input"
                  type="number"
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
                  placeholder="29.99"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Original Price (Rs)</label>
                <input
                  className="form-input"
                  type="number"
                  value={form.originalPrice}
                  onChange={(e) =>
                    setForm({ ...form, originalPrice: e.target.value })
                  }
                  placeholder="49.99"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Discount %</label>
                <input
                  className="form-input"
                  type="number"
                  value={form.discount}
                  onChange={(e) =>
                    setForm({ ...form, discount: e.target.value })
                  }
                  placeholder="40"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Rating (0–5)</label>
                <input
                  className="form-input"
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  value={form.rating}
                  onChange={(e) => setForm({ ...form, rating: e.target.value })}
                  placeholder="4.8"
                />
              </div>
              <div className="form-group full">
                <label className="form-label">Image URL</label>
                <input
                  className="form-input"
                  value={form.img}
                  onChange={(e) => setForm({ ...form, img: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                />
              </div>
              <div className="form-group full">
                <label className="form-label">Amazon Affiliate Link</label>
                <input
                  className="form-input"
                  value={form.affiliateLink}
                  onChange={(e) =>
                    setForm({ ...form, affiliateLink: e.target.value })
                  }
                  placeholder="https://amazon.com/dp/ASIN?tag=yourtag-20"
                />
              </div>
              <div className="form-group full">
                <label className="form-label">Description</label>
                <textarea
                  className="form-input"
                  rows={3}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  placeholder="Short catchy product description…"
                  style={{ resize: "vertical" }}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Pros (comma-separated)</label>
                <input
                  className="form-input"
                  value={form.pros}
                  onChange={(e) => setForm({ ...form, pros: e.target.value })}
                  placeholder="Great quality, Fast shipping"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Cons (comma-separated)</label>
                <input
                  className="form-input"
                  value={form.cons}
                  onChange={(e) => setForm({ ...form, cons: e.target.value })}
                  placeholder="Check sizing, Read instructions"
                />
              </div>
            </div>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setModal(null)}
              >
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleSave}>
                {modal === "add" ? "Add Product" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteId && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: 400, textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🗑️</div>
            <div className="modal-title" style={{ textAlign: "center" }}>
              Delete Product?
            </div>
            <p style={{ color: "var(--gray-4)", marginBottom: 24 }}>
              This action cannot be undone. The product will be permanently
              removed from your catalog.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
              <button
                className="btn btn-secondary"
                onClick={() => setDeleteId(null)}
              >
                Cancel
              </button>
              <button
                className="btn btn-danger"
                style={{ background: "#dc2626", color: "white" }}
                onClick={() => handleDelete(deleteId)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;
