import React from "react";
import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
export default function Navbar() {
  return (
    <div id="navbar" className="navbar">
      <Link to="/" className="navbar__brand">
        Rick & Morty <span className="navbar__brand-span"> Wiki</span>
      </Link>
      <Dropdown />
      <div id="navbar-menu">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" className="navbar__link">
              Characters
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/episodes" className="navbar__link">
              Episode
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/location">
              Location
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
