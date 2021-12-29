// github and linked in links/icons
import resume from "../../OetersResume2021.pdf";

const Footer = () => {
  return (
    <div className="footer">
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
        <a href="/Contact">
          <button className="btn btn-danger" type="button">
            Hire Me
          </button>
        </a>

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
  );
};

export default Footer;
