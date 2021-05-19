import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div>
      <h1>XKXD Ramdom Comic</h1>
      <button type="button" onClick={handleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Header;
