import React, { useState } from "react";

function App() {
  // Initialize state for the button's background color
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState("white");

  // Function to handle mouse over (hover in)
  function handleMouseOver() {
    setButtonBackgroundColor("black");
  }

  // Function to handle mouse out (hover out)
  function handleMouseOut() {
    setButtonBackgroundColor("white");
  }

  // Determine the font color based on the background color
  const buttonFontColor = buttonBackgroundColor === "white" ? "grey
  react" : "white";

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      {/* Apply dynamic background and font color with event handlers */}
      <button
        style={{
          backgroundColor: buttonBackgroundColor,
          color: buttonFontColor,
          border: "none",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
