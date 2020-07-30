import React from "react";
import { Link } from "react-router-dom";
import '../styles/list.css'
import '../styles/constants.css'

const Header = () => (
  <header>
    <a href="#" className="logo_text">
      LOGO
    </a>
    <div className="spacer"></div>
    <Link to="/login" className="header_link mr_0">
      Logout
    </Link>
  </header>
);

export default Header;
