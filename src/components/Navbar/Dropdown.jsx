import React from "react";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  // Closes Dropdown menu when mousedown is detected outside of menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);
  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>
          <i className="fa-solid fa-burger"></i>
        </span>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
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
