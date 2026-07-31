import  { useState } from 'react';
import './Portfolio.css';

const portfolioData = [
  {
    id: 1,
    title: "Minimalist Dining Space",
    category: "Residential Interior",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1000&auto=format&fit=crop",
    description: "A warm, natural light-filled dining hall featuring sustainable wooden furniture and organic textures."
  },
  {
    id: 2,
    title: "Eco Urban Loft",
    category: "Modern Living",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1000&auto=format&fit=crop",
    description: "Dark moody aesthetic combined with eco-friendly interior architecture and plush green decor."
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    category: "Sustainable Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop",
    description: "Sleek wooden finishes mixed with state-of-the-art eco appliances and marble countertops."
  },
  {
    id: 4,
    title: "Serene Sunlit Bedroom",
    category: "Residential Interior",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop",
    description: "Earthy tones and biophilic layout to create a peaceful and restorative sleeping sanctuary."
  },
  {
    id: 5,
    title: "Luxe Lounge Area",
    category: "Commercial Interior",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    description: "Spacious reception lounge utilizing natural stone elements and luxury sustainable seating."
  },
  {
    id: 6,
    title: "Biophilic Open Workspace",
    category: "Commercial & Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
    description: "Large vertical living wall integration inside an open-plan sunlit corporate environment."
  }
];

const Portfolio = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Click handle with 50% auto-scroll feature
  const handleCardClick = (index) => {
    setSelectedIndex(index);

    // Calculate 50% of total scrollable page height & scroll smoothly
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: totalHeight * 0.5,
      behavior: 'smooth'
    });
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? portfolioData.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === portfolioData.length - 1 ? 0 : prev + 1));
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        
        {/* Title */}
        <h2 className="portfolio-title">Portfolio</h2>

        {/* Asymmetric Image Grid matching image_0.png */}
        <div className="portfolio-grid">
          {portfolioData.map((item, index) => (
            <div 
              key={item.id} 
              className={`portfolio-card card-${index + 1}`}
              onClick={() => handleCardClick(index)}
            >
              <img src={item.image} alt={item.title} className="portfolio-img" />
              
              {/* Hover Animation Overlay */}
              <div className="portfolio-hover-overlay">
                <span className="hover-category">{item.category}</span>
                <h3 className="hover-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Full Page Lightbox / Modal */}
      {selectedIndex !== null && (
        <div className="portfolio-modal-overlay" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>

            {/* Navigation Buttons */}
            <button className="modal-nav-btn prev-btn" onClick={handlePrev}>&#10094;</button>
            <button className="modal-nav-btn next-btn" onClick={handleNext}>&#10095;</button>

            {/* Modal Image & Info */}
            <div className="modal-body">
              <div className="modal-image-box">
                <img 
                  src={portfolioData[selectedIndex].image} 
                  alt={portfolioData[selectedIndex].title} 
                />
              </div>
              <div className="modal-info-box">
                <span className="modal-category">{portfolioData[selectedIndex].category}</span>
                <h3 className="modal-title">{portfolioData[selectedIndex].title}</h3>
                <p className="modal-desc">{portfolioData[selectedIndex].description}</p>
                <button className="modal-action-btn">View Full Project</button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;