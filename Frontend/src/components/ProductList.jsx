import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../services/api";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  // Filtered products
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterCategory === "" || p.categoryName === filterCategory)
  );

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Filters */}
      <div style={{ width: "200px", marginRight: "20px" }}>
        <h3>Categories</h3>
        <select onChange={e => setFilterCategory(e.target.value)} value={filterCategory}>
          <option value="">All</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div style={{ flex: 1 }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ padding: "10px", width: "100%", marginBottom: "20px" }}
        />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {filteredProducts.map(product => (
            <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
              <img 
                src={`data:image/jpeg;base64,${product.imageBase64}`} 
                alt={product.name} 
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.categoryName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
