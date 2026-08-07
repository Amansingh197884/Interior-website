import  { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (itemData) => {
    setSelectedItem(itemData);

    // Smooth scroll to 50% of page height
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: totalHeight * 0.5,
      behavior: 'smooth'
    });
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        
        {/* Title */}
        <h2 className="portfolio-title text-start">Portfolio</h2>

        {/* Static Asymmetric Grid without map() */}
        <div className="portfolio-grid">
          
          {/* Card 1 */}
          <div 
            className="portfolio-card card-1"
            onClick={() => handleCardClick({
              title: "Minimalist Dining Space",
              category: "Residential Interior",
              image: "https://i.pinimg.com/736x/91/fa/30/91fa30fe97938900e82992fed66561ec.jpg",
              description: "A warm, natural light-filled dining hall featuring sustainable wooden furniture and organic textures."
            })}
          >
            <img 
              src="https://i.pinimg.com/736x/91/fa/30/91fa30fe97938900e82992fed66561ec.jpg" 
              alt="Minimalist Dining Space" 
              className="portfolio-img" 
            />
            <div className="portfolio-hover-overlay">
              <span className="hover-category">Residential Interior</span>
              <h3 className="hover-title">Minimalist Dining Space</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className="portfolio-card card-2"
            onClick={() => handleCardClick({
              title: "Eco Urban Loft",
              category: "Modern Living",
              image: "https://i.pinimg.com/1200x/8e/2c/c9/8e2cc99a2bed828209421cd872fb30c9.jpg",
              description: "Dark moody aesthetic combined with eco-friendly interior architecture and plush green decor."
            })}
          >
            <img 
              src="https://i.pinimg.com/1200x/8e/2c/c9/8e2cc99a2bed828209421cd872fb30c9.jpg" 
              alt="Eco Urban Loft" 
              className="portfolio-img" 
            />
            <div className="portfolio-hover-overlay">
              <span className="hover-category">Modern Living</span>
              <h3 className="hover-title">Eco Urban Loft</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div 
            className="portfolio-card card-3"
            onClick={() => handleCardClick({
              title: "Contemporary Kitchen",
              category: "Sustainable Kitchen",
              image: "https://i.pinimg.com/736x/64/af/31/64af311e0b850ec280b1cd69bb0194c4.jpg",
              description: "Sleek wooden finishes mixed with state-of-the-art eco appliances and marble countertops."
            })}
          >
            <img 
              src="https://i.pinimg.com/736x/64/af/31/64af311e0b850ec280b1cd69bb0194c4.jpg" 
              alt="Contemporary Kitchen" 
              className="portfolio-img" 
            />
            <div className="portfolio-hover-overlay">
              <span className="hover-category">Sustainable Kitchen</span>
              <h3 className="hover-title">Contemporary Kitchen</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div 
            className="portfolio-card card-4"
            onClick={() => handleCardClick({
              title: "Serene Sunlit Bedroom",
              category: "Residential Interior",
              image: "https://i.pinimg.com/1200x/cd/60/0f/cd600f14b1d43eec0e68192b25af814b.jpg",
              description: "Earthy tones and biophilic layout to create a peaceful and restorative sleeping sanctuary."
            })}
          >
            <img 
              src="https://i.pinimg.com/1200x/cd/60/0f/cd600f14b1d43eec0e68192b25af814b.jpg" 
              alt="Serene Sunlit Bedroom" 
              className="portfolio-img" 
            />
            <div className="portfolio-hover-overlay">
              <span className="hover-category">Residential Interior</span>
              <h3 className="hover-title">Serene Sunlit Bedroom</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div 
            className="portfolio-card card-5"
            onClick={() => handleCardClick({
              title: "Luxe Lounge Area",
              category: "Commercial Interior",
              image: "https://i.pinimg.com/1200x/90/7e/61/907e6137db79eac81c20cc9fcacd6ba4.jpg",
              description: "Spacious reception lounge utilizing natural stone elements and luxury sustainable seating."
            })}
          >
            <img 
              src="https://i.pinimg.com/1200x/90/7e/61/907e6137db79eac81c20cc9fcacd6ba4.jpg" 
              alt="Luxe Lounge Area" 
              className="portfolio-img" 
            />
            <div className="portfolio-hover-overlay">
              <span className="hover-category">Commercial Interior</span>
              <h3 className="hover-title">Luxe Lounge Area</h3>
            </div>
          </div>

          {/* Card 6 */}
          <div 
            className="portfolio-card card-6"
            onClick={() => handleCardClick({
              title: "Biophilic Open Workspace",
              category: "Commercial & Office",
              image: "https://i.pinimg.com/736x/5c/14/72/5c14720afdd38dad4e842657263dbfc5.jpg",
              description: "Large vertical living wall integration inside an open-plan sunlit corporate environment."
            })}
          >
            <img 
              src="https://i.pinimg.com/736x/5c/14/72/5c14720afdd38dad4e842657263dbfc5.jpg" 
              alt="Biophilic Open Workspace" 
              className="portfolio-img" 
            />
            <div className="portfolio-hover-overlay">
              <span className="hover-category">Commercial & Office</span>
              <h3 className="hover-title">Biophilic Open Workspace</h3>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox / Modal */}
      {selectedItem !== null && (
        <div className="portfolio-modal-overlay" onClick={closeModal}>
          <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>

            {/* Modal Content */}
            <div className="modal-body">
              <div className="modal-image-box">
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                />
              </div>
              <div className="modal-info-box">
                <span className="modal-category">{selectedItem.category}</span>
                <h3 className="modal-title">{selectedItem.title}</h3>
                <p className="modal-desc">{selectedItem.description}</p>
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