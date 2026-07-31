import logoSvg from '../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="nav-container">
        {/* Brand / Logo Section */}
        <a href="#home" className="navbar-brand">
          <div 
            className="logo-icon"
            style={{
              WebkitMaskImage: `url(${logoSvg})`,
              maskImage: `url(${logoSvg})`
            }}
          />
        </a>

        {/* Navigation Links */}
        <ul className="nav-menu">
          <li><a href="#home" className="nav-link active">Home</a></li>
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><a href="#consultation" className="nav-link">Free Consultation</a></li>
        </ul>

        {/* Right Action / Log In */}
        <div className="nav-action">
          <a href="#login" className="login-link">
            <svg className="user-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
            <span>Log In</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;