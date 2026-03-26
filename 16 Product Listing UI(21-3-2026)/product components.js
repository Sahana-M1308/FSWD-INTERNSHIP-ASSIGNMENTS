Assignment-16

components.js

import React from "react";

function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "150px",
      }}
    >
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;