import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import agriConnect from "../assets/products/agriConnect.png";

export const Navbar = () => {
  return (
    <div className="navbar" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <img src={agriConnect} style={{ height: "40px", width: "auto", marginLeft:'20px'}} />
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
