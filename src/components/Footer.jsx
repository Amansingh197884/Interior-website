import logoSvg from '../assets/logo.svg'; // Aapke navbar wale logo ka path
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        
        {/* Top Main Section */}
        <div className="footer-top">
          
          {/* Brand & Logo */}
          <div className="footer-brand">
            <div 
              className="footer-logo-icon"
              style={{
                WebkitMaskImage: `url(${logoSvg})`,
                maskImage: `url(${logoSvg})`
              }}
            />
            {/* <span className="brand-name">Aura Boutique</span> */}
          </div>

          {/* Address Column */}
          <div className="footer-column">
            <h4 className="column-title">Address</h4>
            <p className="column-text">
              500 Terry Francine Street<br />
              San Francisco, CA 94158
            </p>
          </div>

          {/* Contact Column */}
          <div className="footer-column">
            <h4 className="column-title">Contact</h4>
            <p className="column-text">
              Mail: <a href="mailto:info@mysite.com">info@mysite.com</a><br />
              Phone: <a href="tel:1234567890">123-456-7890</a>
            </p>
          </div>

          {/* Socials Column */}
          <div className="footer-column">
            <h4 className="column-title">Socials</h4>
            <ul className="social-links">
              <li><a href="#facebook" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="#instagram" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="#x" target="_blank" rel="noreferrer">X</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#terms">Terms & Conditions</a>
            <a href="#privacy">Privacy Policy</a>
            <a href="#refund">Refund Policy</a>
            <a href="#accessibility">Accessibility Statement</a>
          </div>

          <div className="copyright-text">
            © 2026 by Aura Boutique. Powered and secured by Aura
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;