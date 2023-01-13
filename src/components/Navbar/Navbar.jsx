import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand">
          Rick & Morty <span className="navbar__text-primary">Wiki</span>
        </Link>
        <button className="navbar__toggler">
          <span className="navbar__open"></span>
          <span className="navbar__close"></span>
        </button>
        <div className="navbar__collapse" id="navbarNavAltMarkup">
          {" "}
          <div className="navbar__nav">
            <NavLink activeClassName="selected" to="/" className="navbar__link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="navbar__link">
              Episode
            </NavLink>
            <NavLink className="navbar__link" to="/location">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
