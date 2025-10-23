import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function ProductPage() {
  const [refresh, setRefresh] = useState(false);

  const handleProductAdded = () => setRefresh((prev) => !prev);

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <ProductForm onProductAdded={handleProductAdded} />
      </div>
      <div style={styles.listContainer}>
        <ProductList refresh={refresh} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // center the whole layout
    alignItems: "flex-start",
    gap: "40px",
    padding: "20px",
    flexWrap: "wrap", // responsive wrap on smaller screens
  },
  formContainer: {
    flex: "1 1 300px", // min width 300px, grow as needed
    maxWidth: "400px",
  },
  listContainer: {
    flex: "3 1 600px", // min width 600px, grow as needed
  },
};

export default ProductPage;
