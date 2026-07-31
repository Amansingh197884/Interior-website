import './Home.css';

const HomeHero = () => {
  return (
    <section className="hero-section">
      {/* Background Image Container */}
      <div className="hero-bg-wrapper">
        <img 
          src="https://i.pinimg.com/1200x/39/ee/a2/39eea28a2b987eb055092013f38874c1.jpg" 
          alt="Luxury Interior Design" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Main Content Area */}
      <div className="hero-container">
        <div className="hero-text-content">
          <h1 className="hero-title">
            <span>Aura</span> <span>Boutique</span>
          </h1>

          {/* Holistic Green Card */}
          <div className="hero-green-card">
            <h2 className="card-title">Interior Design Studio</h2>
            <p className="card-text">
              Welcome to a world where design meets sustainability. Discover how we blend eco-friendly materials with innovative practices to create spaces that are both beautiful and environmentally responsible.
            </p>
            <a href="#explore" className="card-btn">Explore Now</a>
          </div>
        </div>

        {/* Circular Animated Button with Center SVG Icon */}
        <a href="#portfolio" className="explore-circle">
          {/* Rotating Text SVG */}
          <svg className="circle-svg" viewBox="0 0 100 100">
            <path 
              id="circlePath" 
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
              fill="none"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                EXPLORE OUR WORK • DISCOVER LUXURY •
              </textPath>
            </text>
          </svg>
          
          {/* Center Minimal SVG Icon (Arrow Up Right) */}
          <div className="circle-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default HomeHero;