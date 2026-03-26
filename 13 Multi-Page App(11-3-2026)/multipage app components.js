                                        Assignment-13(Convert your React app into a multi-page SPA using React Router)

components.js

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;