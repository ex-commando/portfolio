import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">FA.</div>
                <div className="footer-socials">
                    <a href="https://github.com/ex-commando" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/francisadegbe" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
                <p className="footer-copy">&copy; {new Date().getFullYear()} Francis Adegbe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
