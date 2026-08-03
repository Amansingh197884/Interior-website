import  { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoSvg from '../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Login modal state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const openLoginModal = (e) => {
    e.preventDefault();
    setIsLoginOpen(true);
    closeMenu();
  };

  const closeLoginModal = () => setIsLoginOpen(false);

  return (
    <>
      <nav className="navbar custom-navbar">
        <div className="container nav-container">
          
          {/* Brand Logo */}
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <div 
              className="logo-icon" 
              style={{
                WebkitMaskImage: `url(${logoSvg})`,
                maskImage: `url(${logoSvg})`
              }} 
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav flex-row nav-menu">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Desktop Log In Button */}
            <div className="nav-action ms-4">
              <button className="login-link-btn" onClick={openLoginModal}>
                <svg className="user-icon" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                <span>Log In</span>
              </button>
            </div>
          </div>

          {/* Mobile Right Action & Custom Animated Hamburger */}
          <div className="d-flex align-items-center gap-3 d-lg-none">
            <button className="login-link-btn" onClick={openLoginModal}>
              <svg className="user-icon" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>

            <button 
              className={`hamburger-btn ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Dark Backdrop */}
      <div 
        className={`mobile-backdrop ${isMenuOpen ? 'show' : ''}`} 
        onClick={closeMenu}
      ></div>

      {/* Mobile Right Slide-in Drawer */}
      <aside className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div 
            className="drawer-logo-icon" 
            style={{
              WebkitMaskImage: `url(${logoSvg})`,
              maskImage: `url(${logoSvg})`
            }} 
          />
          <button className="close-btn" onClick={closeMenu} aria-label="Close menu">&times;</button>
        </div>

        <ul className="drawer-menu">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "drawer-link active" : "drawer-link"} onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "drawer-link active" : "drawer-link"} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className={({ isActive }) => isActive ? "drawer-link active" : "drawer-link"} onClick={closeMenu}>
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "drawer-link active" : "drawer-link"} onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "drawer-link active" : "drawer-link"} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Drawer Bottom Log In Link */}
        <div className="drawer-footer">
          <button className="login-link-btn" onClick={openLoginModal}>
            <svg className="user-icon" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            <span>Log In</span>
          </button>
        </div>
      </aside>

{/* popup form  */}


      {isLoginOpen && (
        <div className="login-modal-overlay" onClick={closeLoginModal}>
          <div className="login-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeLoginModal}>&times;</button>
            
            <div className="modal-header-content">
              <div 
                className="modal-logo-icon" 
                style={{
                  WebkitMaskImage: `url(${logoSvg})`,
                  maskImage: `url(${logoSvg})`
                }} 
              />
              <h2>Welcome Back</h2>
              <p>Sign in to access your interior design dashboard</p>
            </div>

            <form className="login-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter Your Email" required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" required />
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#forgot" className="forgot-pass">Forgot Password?</a>
              </div>

              <button type="submit" className="login-submit-btn">Sign In</button>
            </form>

            <div className="modal-footer-text">
              <span>Don't have an account? <a href="#signup">Contact Us</a></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;