import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './gallerySection.css';

const GallerySection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="full-gallery-wrapper py-5" id="gallery">
      {/* Standard Bootstrap Title Wrapper */}
      <div className="container mb-4">
        <div className="row">
          <div className="col text-start">
            <span className="gallery-sub-tag text-uppercase d-block mb-2">Curated Spaces</span>
            <h2 className="gallery-main-heading mb-0">Our Gallery</h2>
          </div>
        </div>
      </div>

      {/* Edge-to-Edge Slider Area */}
      <div className="slider-edge-container position-relative">
        
        {/* Instant Response Nav Buttons */}
        <button 
          type="button"
          className="text-nav-btn left-text-btn " 
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous Slide"
        >
          <span className="nav-text">PREV</span>
        </button>
        
        <button 
          type="button"
          className="text-nav-btn right-text-btn " 
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next Slide"
        >
          <span className="nav-text">NEXT</span>
        </button>

        <Swiper
          modules={[Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={800}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ 
            delay: 5000, 
            disableOnInteraction: false,
            pauseOnMouseEnter: false
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="full-swiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`full-slide-item position-relative ${isActive ? 'slide-active' : ''}`}>
                <div className="animated-img-wrapper">
                  <img 
                    src="https://i.pinimg.com/1200x/e7/42/6d/e7426d6c665ac38b1e62ff111f04e1b0.jpg" 
                    alt="Botanical Atelier Space" 
                    className="slide-bg-img" 
                  />
                </div>
                <div className="slide-text-overlay">
                  <span className="slide-cat-text text-uppercase">Commercial • Sector 62</span>
                  <h3 className="slide-title-text">Botanical Atelier Space</h3>
                </div>
              </div>
            )}
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`full-slide-item position-relative ${isActive ? 'slide-active' : ''}`}>
                <div className="animated-img-wrapper">
                  <img 
                    src="https://i.pinimg.com/1200x/60/4a/ea/604aea01e45f3d06f9350327931fb6d4.jpg" 
                    alt="Muted Earth Living Experience" 
                    className="slide-bg-img" 
                  />
                </div>
                <div className="slide-text-overlay">
                  <span className="slide-cat-text text-uppercase">Residential • South Delhi</span>
                  <h3 className="slide-title-text">Muted Earth Living Experience</h3>
                </div>
              </div>
            )}
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`full-slide-item position-relative ${isActive ? 'slide-active' : ''}`}>
                <div className="animated-img-wrapper">
                  <img 
                    src="https://i.pinimg.com/1200x/c4/9c/de/c49cde716f465ea0d0a906b56e6fd221.jpg" 
                    alt="Monochrome Culinary Architecture" 
                    className="slide-bg-img" 
                  />
                </div>
                <div className="slide-text-overlay">
                  <span className="slide-cat-text text-uppercase">Architecture • Gurugram Villa</span>
                  <h3 className="slide-title-text">Monochrome Culinary Architecture</h3>
                </div>
              </div>
            )}
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div className={`full-slide-item position-relative ${isActive ? 'slide-active' : ''}`}>
                <div className="animated-img-wrapper">
                  <img 
                    src="https://i.pinimg.com/1200x/ad/c9/c5/adc9c57457671be485c840fad8b2a93d.jpg" 
                    alt="Serene Sanctuary Master Suite" 
                    className="slide-bg-img" 
                  />
                </div>
                <div className="slide-text-overlay">
                  <span className="slide-cat-text text-uppercase">Interior • Noida Estate</span>
                  <h3 className="slide-title-text">Serene Sanctuary Master Suite</h3>
                </div>
              </div>
            )}
          </SwiperSlide>

        </Swiper>

      </div>
    </section>
  );
};

export default GallerySection;