import './whyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section py-5" id="why-choose-us">
      <div className="container py-md-4">
        
        {/* Section Header */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <span className="why-subhead text-uppercase d-block mb-2">The Distinction</span>
            <h2 className="why-heading mb-0">Why Choose Us</h2>
          </div>
        </div>

        {/* Clean Static Bootstrap Grid */}
        <div className="row g-4">
          
          {/* Card 1 */}
          <div className="col-12 col-md-4">
            <div className="why-card h-100 p-4 rounded-3 d-flex flex-column justify-content-between">
              <div>
                <span className="why-number d-block mb-3">01</span>
                <h3 className="why-card-title mb-3">Bespoke Spatial Design</h3>
                <p className="why-card-text">
                  We craft tailored interior architecture designed around your lifestyle, ensuring every corner reflects understated luxury and functional art.
                </p>
              </div>
              <div className="why-card-line mt-4"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-4">
            <div className="why-card h-100 p-4 rounded-3 d-flex flex-column justify-content-between">
              <div>
                <span className="why-number d-block mb-3">02</span>
                <h3 className="why-card-title mb-3">Sustainable Materiality</h3>
                <p className="why-card-text">
                  Our sourcing prioritizes eco-conscious, premium grade materials that stand the test of time while honoring natural textures.
                </p>
              </div>
              <div className="why-card-line mt-4"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-4">
            <div className="why-card h-100 p-4 rounded-3 d-flex flex-column justify-content-between">
              <div>
                <span className="why-number d-block mb-3">03</span>
                <h3 className="why-card-title mb-3">End-to-End Precision</h3>
                <p className="why-card-text">
                  From initial conceptual planning to complete turn-key execution, we manage every fine detail with uncompromised quality.
                </p>
              </div>
              <div className="why-card-line mt-4"></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;