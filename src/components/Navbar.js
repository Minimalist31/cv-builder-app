import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-box1">
        <Link to={"/"}>
          <img src={logo} alt="CB" />
        </Link>
      </div>
      <div className="nav-box1">
        <NavLink to="/" className="navlink">
          Home
        </NavLink>
        <Link to="/team" className="navlink">
          Team
        </Link>
        <NavLink to="/about" className="navlink">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
