// github and linked in links/icons
import resume from "../../Oeters_Resume.pdf";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a
            className="icon"
            href="http://github.com/gus1919"
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ fontSize: "64px" }}>
              <i className="fa fa-github-square"></i>
            </span>
          </a>
          <NavLink className="hireMe" to="/contact" activeClassName="active">
            <button className="btn btn-danger" type="button">
              Hire Me
            </button>
          </NavLink>

          <a href={resume} download={resume}>
            <button className="btn btn-primary" type="button">
              Get Resume
            </button>
          </a>
          <a
            className="icon"
            href="http://www.linkedin.com/in/justin-oeters-082471216"
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ fontSize: "64px" }}>
              <i className="fa fa-linkedin-square"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
