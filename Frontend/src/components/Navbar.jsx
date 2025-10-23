import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#333", color: "#fff", display: "flex", justifyContent: "space-between" }}>
      <h2>Mini E-Commerce</h2>
      <div>
        <Link to="/" style={{ color: "#fff", marginRight: "20px"}}>Products</Link>
        <Link to="/add" style={{ color: "#fff" }}>Add Product</Link>
      </div>
    </nav>
  );
}

export default Navbar;
