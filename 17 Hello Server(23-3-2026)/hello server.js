Assignment-17(Create a Node server that returns different messages on different routes)

Server.js

const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Home Page 🏠");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is About Page ℹ️");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact us at example@email.com 📧");
});

// Dynamic route
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name} 👋`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});