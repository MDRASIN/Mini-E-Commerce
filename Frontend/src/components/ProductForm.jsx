import React, { useEffect, useState } from "react";
import { getCategories, addProduct } from "../services/api";
import { useNavigate } from "react-router-dom";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("categoryId", categoryId);
    formData.append("image", image);

    await addProduct(formData);
    navigate("/"); 
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <form onSubmit={handleSubmit} style={{ width: "400px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" placeholder="Product Name" value={name} onChange={e => setName(e.target.value)} required />
        <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
        <select value={categoryId} onChange={e => setCategoryId(e.target.value)} required>
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <input type="file" onChange={e => setImage(e.target.files[0])} required />
        <button type="submit" style={{ padding: "10px", background: "#333", color: "#fff", border: "none" }}>Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
