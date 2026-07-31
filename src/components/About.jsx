import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Top Heading */}
        <h2 className="about-title">
          About Aura <br /> Boutique
        </h2>

        {/* Content Grid (Image + Right Text Block) */}
        <div className="about-content-grid">
          
          {/* Left Side Image */}
          <div className="about-image-wrapper">
            <img 
              src="https://i.pinimg.com/1200x/56/f5/e2/56f5e2ba8d0b095be0fb4ade8b153019.jpg" 
              alt="Aura Boutique Design Team" 
              className="about-image"
            />
          </div>

          {/* Right Side Text & Button */}
          <div className="about-text-wrapper">
            <p className="about-description">
              At Aura Boutique, we are dedicated to sustainable interior design, incorporating eco-friendly elements into every project. Our mission is to transform spaces with a deep commitment to environmental responsibility, ensuring that each design reflects the beauty of nature and the essence of sustainable living.
            </p>
            <a href="#portfolio" className="about-btn">
              Explore Now
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;