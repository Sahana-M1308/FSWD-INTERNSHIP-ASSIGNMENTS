                                                                    Assignment-11

App.js

import React, { useState } from "react";
import "./App.css";

function App() {

  const [mood, setMood] = useState("Neutral");

  const changeMood = (newMood) => {
    setMood(newMood);
  };

  return (
    <div className="container">

      <h1>Mood Tracker</h1>

      <h2>Your Mood: {mood}</h2>

      <div className="buttons">

        <button onClick={() => changeMood("Happy")}>
          😊 Happy
        </button>

        <button onClick={() => changeMood("Sad")}>
          😢 Sad
        </button>

        <button onClick={() => changeMood("Excited")}>
          🤩 Excited
        </button>

        <button onClick={() => changeMood("Angry")}>
          😡 Angry
        </button>

      </div>

    </div>
  );
}

export default App;
