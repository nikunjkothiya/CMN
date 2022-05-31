import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="header">
        <div className="header_wrapper container-fluid">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className={`menu ${isOpen && "open"}`}>
            <NavLink to="/rewards">Rewards</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <button className="btn btn-primary">connect</button>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
