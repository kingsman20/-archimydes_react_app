import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/list.css";
import "../styles/constants.css";

const Header = () => {
  let history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('token')
    history.replace('login')
  };
  return (
    <header>
      <a href="#" className="logo_text">
        LOGO
      </a>
      <div className="spacer"></div>
      <button onClick={handleClick} className="header_link mr_0">
        Logout
      </button>
    </header>
  );
};

export default Header;
