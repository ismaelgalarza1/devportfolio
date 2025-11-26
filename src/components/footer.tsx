import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import '../styles/footer.css';

const Footer = () => {

    return <>
        <div className="footer-container">
            <footer>
                <div className="Social-Icons"> <FaLinkedin /> <FaInstagramSquare /></div>
                <p>Copyright &copy; {new Date().getFullYear()} | All rights reserved</p>

            </footer>
        </div>

    </>



}

export default Footer;
