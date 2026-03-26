Assignment-16

App.js

import React, { useState } from "react";
import productsData from "./data/products";
import ProductCard from "./components/ProductCard";

function App() {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");

  // Filter logic
  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "All" || product.category === category) &&
      (maxPrice === "" || product.price <= maxPrice)
    );
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>🛒 Product Listing</h2>

      {/* Filters */}
      <div style={{ marginBottom: "20px" }}>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option>All</option>
          <option>Clothing</option>
          <option>Footwear</option>
          <option>Accessories</option>
        </select>

        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Product List */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;