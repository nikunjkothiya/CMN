import React from "react";
import "./Header.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header_wrapper container-fluid">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="menu">
            <NavLink
              to="/rewards"
              // style={({ isActive }) => ({
              //   color: isActive ? "#0032AB" : "#00000",
              //   // borderBottom: isActive ? "1px solid blck" : "",
              // })}
            >
              Rewards
            </NavLink>
            <NavLink
              to="/profile"
              // style={({ isActive }) => ({
              //   color: isActive ? "#0032AB" : "#00000",
              //   // borderBottom: isActive ? "1px solid black" : "",
              // })}
            >
              Profile
            </NavLink>
            <button className="btn btn-primary">connect</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
