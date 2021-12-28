// Navbar and Name
import { NavLink } from "react-router-dom";
import Typical from "react-typical";
import "./home.css";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="header-name-container">
        <h1 className="header-name">Justin Oeters</h1>
        <p className="header-text">
          <Typical
            loop={Infinity}
            steps={[
              "Aspiring Developer",
              2000,
              "Enthusiastic Worker",
              2000,
              "Team Player",
              2000,
              "Innovator",
              2000,
              "Problem Solver",
              2000,
            ]}
          />
        </p>
      </div>

      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" exact activeClassName="active" to="/">
            About Me
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink
            className="nav-link"
            activeClassName="active"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/resume">
            Resume
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
