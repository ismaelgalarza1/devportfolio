import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer>
          <div className="Social-Icons">
            {" "}
            <a
              href="https://www.linkedin.com/in/ismaelgalarza1"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin />{" "}
            </a>
            <a
              href="https://www.instagram.com/galarza321"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagramSquare />{" "}
            </a>
            <a
              href="https://www.github.com/ismaelgalarza1"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub />{" "}
            </a>
          </div>
          <p>
            Copyright &copy; {new Date().getFullYear()} | All rights reserved
          </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
