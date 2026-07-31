import './Service.css';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      name: "Free Consultation",
      duration: "1 hr",
      price: "Free",
    },
    {
      id: 2,
      name: "Conceptual Development",
      duration: "1 hr",
      price: "US$100",
    },
    {
      id: 3,
      name: "Spatial Planning",
      duration: "1 hr",
      price: "US$100",
    },
    {
      id: 4,
      name: "Construction Management",
      duration: "1 hr",
      price: "US$100",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        
        {/* Main Heading */}
        <h2 className="services-title">Our Services</h2>

        {/* Services Table/List */}
        <div className="services-list">
          {servicesList.map((service) => (
            <div key={service.id} className="service-row">
              <div className="service-name">{service.name}</div>
              
              <div className="service-meta">
                <span className="service-duration">{service.duration}</span>
                {service.price && <span className="service-price">{service.price}</span>}
              </div>

              <a href="#book" className="service-book-btn">
                Book Now
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;