import React from "react";
import "../sass/header.scss";
import { Button } from "@material-ui/core";
import DarkModeIcon from "@material-ui/icons/Brightness4";

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header__title">XKXD Ramdom Comic</h1>

      <Button
        className="header__button"
        type="button"
        onClick={props.handleDarkMode}
        color="primary"
        variant="outlined"
        startIcon={<DarkModeIcon />}
      >
        {props.darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </div>
  );
};

export default Header;
