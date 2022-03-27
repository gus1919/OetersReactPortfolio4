import "./contact.css";

const Contact = () => {
  return (
    <div className="container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-info">
        <div className="contact-address">
          <p>Justin Oeters</p>
          <p>justin.oeters@gmail.com</p>
          <p>Wilmington, Ohio</p>
        </div>
        <div className="contact-github">
          <a
            className="icon"
            href="http://github.com/gus1919"
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ fontSize: "128px", margin: "60px" }}>
              <i className="fa fa-github-square"></i>
            </span>
          </a>
          <a
            className="icon"
            href="http://www.linkedin.com/in/justin-oeters-082471216"
            target="_blank"
            rel="noreferrer"
          >
            <span style={{ fontSize: "128px", margin: "60px" }}>
              <i className="fa fa-linkedin-square"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
