import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/shared/logo.svg";

const Header = ({ page, setPage }) => {
  return (
    <div className="header-box">
      <div className="logo-box">
        <img alt="Logo" src={Logo} />
        <div className="dash"></div>
      </div>
      <div className="header">
        <Link className="nav__link" to="/" onClick={() => setPage(0)}>
          00 Home
        </Link>
        <Link
          className="nav__link"
          to="/destination"
          onClick={() => setPage(1)}
        >
          01 Destination
        </Link>
        <Link className="nav__link" to="/crew" onClick={() => setPage(2)}>
          02 Crew
        </Link>
        <Link className="nav__link" to="/technology" onClick={() => setPage(3)}>
          03 Technology
        </Link>
      </div>
    </div>
  );
};

export default Header;
