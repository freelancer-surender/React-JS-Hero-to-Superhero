import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/home" className="header-title">
          Custom Hook
        </Link>
      </div>

      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/users" className="header-link">
              Users
            </Link>
          </li>
          <li>
            <Link to="/posts" className="header-link">
              Posts
            </Link>
          </li>
          <li>
            <Link to="/storage" className="header-link">
              Storage
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
