import React, { useState } from "react";
import { evaluate } from 'mathjs';
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
       try {
  const result = evaluate(input);
  setInput(result.toString());
} catch (error) {
  setInput("Error");
}
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else {
      setInput(input + value);
    }
  };

  const renderHome = () => (
    <div className="calculator-container">
      <h2 className="heading">Calculator</h2>
      <div className="calculator">
        <input
          type="text"
          value={input}
          className="calculator-display"
          readOnly
        />
        <div className="calculator-buttons">
          {["7", "8", "9", "/",
            "4", "5", "6", "*",
            "1", "2", "3", "-",
            "0", ".", "C", "+",
            "="].map((btn) => (
              <button
                key={btn}
                className="btn"
                onClick={() => handleClick(btn)}
              >
                {btn}
              </button>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="content">
      <h2 className="heading">About</h2>
      <p className="text">Project created by <strong>Vivek Bhadane</strong>.</p>
    </div>
  );

  const renderContact = () => (
    <div className="content">
      <h2 className="heading">Contact</h2>
      <p className="text">Reach out via email or the contact form. (Placeholder)</p>
    </div>
  );

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">My Calc</h1>
        <div className="nav-links">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>
      <main className="main">
        {page === "home" && renderHome()}
        {page === "about" && renderAbout()}
        {page === "contact" && renderContact()}
      </main>
    </div>
  );
}

export default App;
