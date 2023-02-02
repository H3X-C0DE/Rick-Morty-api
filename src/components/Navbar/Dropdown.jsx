import React from "react";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ toggled }) {
  const dropdownRef = useRef(null);
  const [isToggled, toggle] = useState(toggled);
  const callback = () => {
    toggle(!isToggled);
  };
  // Closes Dropdown menu when mousedown is detected outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        toggle(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="menu-container" ref={dropdownRef}>
      <span>
        <label htmlFor="burgerCheck" className="fa-solid fa-burger"></label>
        <input
          id="burgerCheck"
          type="checkbox"
          defaultChecked={isToggled}
          onClick={callback}
        />
      </span>
      <nav className={`menu ${isToggled ? "active" : "inactive"}`}>
        <ul>
          <li>
            <NavLink activeclassname="selected" to="/" className="navbar__link">
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink to="/episodes" className="navbar__link">
              Episode
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar__link" to="/location">
              Location
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
