                                            Assignment-14(Build a signup form with validations (email, password strength))

App.js

import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    // Password validation (min 6 chars)
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Success
    setError("");
    alert("Signup Successful 🎉");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Signup Form 📝</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Signup</button>
      </form>

      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default App;