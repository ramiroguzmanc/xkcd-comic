import React, { useState } from "react";
import "../sass/header.scss";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="header">
      <h1 className="header__title">XKXD Ramdom Comic</h1>
      <button className="header__button" type="button" onClick={handleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
