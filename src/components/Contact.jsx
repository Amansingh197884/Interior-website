import  { useState } from 'react';
import './Contact.css';

const countries = [
  { code: '+91', iso: 'in', name: 'India' },
  { code: '+1', iso: 'us', name: 'United States' },
  { code: '+44', iso: 'gb', name: 'United Kingdom' },
  { code: '+971', iso: 'ae', name: 'UAE' },
  { code: '+61', iso: 'au', name: 'Australia' },
  { code: '+1', iso: 'ca', name: 'Canada' },
  { code: '+49', iso: 'de', name: 'Germany' },
  { code: '+33', iso: 'fr', name: 'France' },
  { code: '+65', iso: 'sg', name: 'Singapore' },
  { code: '+81', iso: 'jp', name: 'Japan' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Submitting...');

    // Google Sheets Web App URL Yahan Paste Karein
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwP75h-sqLl2EVoiVgaoK4s6uuoyS287YgAcI65PI-f84s8WuOd4Lp7jJS14g7SiIVuIA/exec';

    try {
      const formPayload = new URLSearchParams();
      formPayload.append('firstName', formData.firstName);
      formPayload.append('lastName', formData.lastName);
      formPayload.append('email', formData.email);
      
      // Single quote (') add kar diya hai taaki Google Sheet ise formula (#ERROR!) na samjhe
      formPayload.append('phone', `'${formData.countryCode} ${formData.phone}`);
      formPayload.append('message', formData.message);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formPayload.toString(),
      });

      setStatus('Thank you! Your message has been sent successfully.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+91',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = countries.find((c) => c.code === formData.countryCode) || countries[0];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Form Section */}
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            Have a question or want to start a project? Reach out to us today. We'd love to hear from you.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            {/* First & Last Name */}
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Email & Phone with Flag Dropdown */}
            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <div className="phone-field-box">
                  
                  {/* Flag Icon + Arrow Dropdown */}
                  <div className="country-selector">
                    <img 
                      src={`https://flagcdn.com/w20/${selectedCountry.iso}.png`} 
                      alt="country flag" 
                      className="selected-flag-img"
                    />

                    <svg className="dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>

                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="country-native-select"
                    >
                      {countries.map((c, index) => (
                        <option key={index} value={c.code}>
                          {c.name} ({c.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Phone Input */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="phone-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message Area */}
            <div className="form-group full-width">
              <label>Long answer</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>

        {/* Right Image */}
        <div className="contact-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1000&auto=format&fit=crop"
            alt="Rustic Ceramic Pots and Plants"
            className="contact-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;