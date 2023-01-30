import React from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
export default function Navbar() {
  return (
    <div id="navbar" className="navbar-container">
      <Link to="/" className="navbar__brand">
        Rick & Morty <span className="navbar__text-primary">Wiki</span>
      </Link>
      <Dropdown />
      <div id="navbar-menu">
        <ul className="navbar-list">
          <li className="navbar-item slide">
            <NavLink activeclassname="selected" to="/" className="navbar__link">
              Characters
            </NavLink>
          </li>
          <li className="navbar-item slide">
            <NavLink to="/episodes" className="navbar__link">
              Episode
            </NavLink>
          </li>
          <li className="navbar-item slide">
            <NavLink className="navbar__link" to="/location">
              Location
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
