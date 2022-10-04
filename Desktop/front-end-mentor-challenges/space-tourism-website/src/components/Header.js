import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/shared/logo.svg";

const Header = () => {
  const [page, setPage] = React.useState("home");
  return (
    <div className="header-box">
      <div className="logo-box">
        <img alt="Logo" src={Logo} />
        <div className="dash"></div>
      </div>
      <div className="header">
        <Link
          className={`nav__link ${page === "home" ? "nav__link--active" : ""}`}
          to="/"
          onClick={() => setPage("home")}
        >
          <strong>00</strong> &nbsp;Home
        </Link>
        <Link
          className={`nav__link ${
            page === "destination" ? "nav__link--active" : ""
          }`}
          to="/destination"
          onClick={() => setPage("destination")}
        >
          <strong>01</strong> &nbsp;Destination
        </Link>
        <Link
          className={`nav__link ${page === "crew" ? "nav__link--active" : ""}`}
          to="/crew"
          onClick={() => setPage("crew")}
        >
          <strong>02</strong> &nbsp;Crew
        </Link>
        <Link
          className={`nav__link ${
            page === "technology" ? "nav__link--active" : ""
          }`}
          to="/technology"
          onClick={() => setPage("technology")}
        >
          <strong>03</strong> &nbsp;Technology
        </Link>
      </div>
    </div>
  );
};

export default Header;
