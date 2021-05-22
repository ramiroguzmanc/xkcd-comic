import React, { useState } from "react";
import Header from "./components/Header";
import Comic from "./components/Comic";
import Footer from "./components/footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    const body = document.body.style;

    if (darkMode) {
      body.backgroundColor = "whitesmoke";
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
      <Footer />
    </div>
  );
}

export default App;
