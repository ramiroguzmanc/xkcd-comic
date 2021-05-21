import React, { useState } from "react";
import "./sass/styles.scss";
import Header from "./components/Header";
import Comic from "./components/Comic";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    const body = document.body.style;

    if (darkMode) {
      body.backgroundColor = "white";
      body.color = "black";
    } else {
      body.backgroundColor = "#121212";
      body.color = "white";
    }

    setDarkMode(!darkMode);
  };

  return (
    <div className="gridContainer">
      <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
      <Comic />
    </div>
  );
}

export default App;
