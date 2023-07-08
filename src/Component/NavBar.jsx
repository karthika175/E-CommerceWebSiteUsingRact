import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
            cart
        </Link>
      </div>
    </div>
  );
};