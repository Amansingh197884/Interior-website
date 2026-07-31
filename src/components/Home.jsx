import './Home.css';

const HomeHero = () => {
  return (
    <section className="hero-section">
      {/* Background Image Container */}
      <div className="hero-bg-wrapper">
        <img 
          src="https://static.wixstatic.com/media/c837a6_a2b221913a734980a7ee72ef51985766~mv2.png/v1/fill/w_1536,h_806,fp_0.49_0.72,q_90,usm_0.66_1.00_0.01,enc_auto/Background.png" 
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
          <p className="hero-subtitle">Interior Design Studio</p>
        </div>

        {/* Circular Animated Button */}
        <a href="#portfolio" className="explore-circle">
          <svg className="circle-svg" viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            <text>
              <textPath href="#circlePath">
                EXPLORE OUR WORK • DISCOVER LUXURY •
              </textPath>
            </text>
          </svg>
          <span className="circle-text">Explore Our Work</span>
        </a>
      </div>
    </section>
  );
};

export default HomeHero;