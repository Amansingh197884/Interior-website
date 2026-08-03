import  { useRef } from 'react';
import Contact from './Contact';
import { MapPin, Clock, Phone, Mail, ArrowUpRight } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="contact-page-container">
      
      {/* 1. Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <button className="hero-badge-btn" onClick={scrollToForm}>
            Get In Touch ↓
          </button>
          <h1>Let’s Create Something Timeless Together</h1>
          <p>
            Have a project in mind, a question about our design services, or simply want to say hello? 
            We are here to bring your vision to life.
          </p>
        </div>
      </section>
   <section className="location-map-section">
        <div className="location-bg-accent"></div>
        <div className="location-container">
          
          <div className="location-header text-center">
            <span className="section-gold-tag">Visit Our Experience Centre</span>
            <h2>Our Design Studio</h2>
            <p className="section-desc">Experience our exclusive material library, sample room, and talk directly with senior architects.</p>
          </div>

          <div className="map-grid-wrapper">
            {/* Premium Info Card */}
            <div className="location-info-card">
              <div className="card-top-decor">
                <span className="studio-pill">FLAGSHIP GALLERY</span>
              </div>
              
              <h3>New Delhi Experience Studio</h3>
              <div className="address-text">
                <MapPin className="lucide-icon pin-icon" />
                <span>
                  500 Interior Avenue, Luxury Suite 402,<br />
                  Business District, New Delhi - 110001
                </span>
              </div>

              <div className="info-divider"></div>

              <div className="info-flex-grid">
                {/* Studio Hours */}
                <div className="info-block">
                  <div className="info-title">
                    <Clock className="lucide-icon" />
                    <strong>Studio Hours</strong>
                  </div>
                  <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p className="sub-highlight">Sunday: By Appointment Only</p>
                </div>

                {/* Direct Contact */}
                <div className="info-block">
                  <div className="info-title">
                    <Phone className="lucide-icon" />
                    <strong>Direct Contact</strong>
                  </div>
                  <p className="contact-row">
                    <span>Phone:</span> +91 98765 43210
                  </p>
                  <p className="contact-row">
                    <Mail className="lucide-mini-icon" /> hello@interior.com
                  </p>
                </div>
              </div>

              <div className="info-card-footer">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="directions-btn"
                >
                  <span>Get Directions</span>
                  <ArrowUpRight className="btn-icon" />
                </a>
              </div>
            </div>

            {/* Google Map Container with Frame */}
            <div className="google-map-wrapper">
              <div className="map-frame-corner top-left"></div>
              <div className="map-frame-corner bottom-right"></div>
              <iframe
                title="Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.996238127599!2d77.216721315082!3d28.632742982417725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xc3e5e0a0a8110b91!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
      {/* 2. Main Contact Form Section */}
      <section className="main-form-section-wrapper" ref={formRef}>
        <div className="form-section-header">
          <span className="section-mini-tag">Send A Message</span>
          <h2>Start Your Project Today</h2>
        </div>
        <Contact />
      </section>

      {/* 3. Luxury Location & Map Section */}
   

    </div>
  );
};

export default ContactPage;