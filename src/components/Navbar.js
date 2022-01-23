import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  //-----------------------------------------------------------------------------------------
  // return JSX
  //-----------------------------------------------------------------------------------------

  return (
    <header>
      <nav className="navbar">
        <ul>
          <Link to="/" className="navbar__links">
            Home
          </Link>
          <Link to="/portfolio" className="navbar__links">
            Portfolio
          </Link>
          <Link to="/contact" className="navbar__links">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
}
