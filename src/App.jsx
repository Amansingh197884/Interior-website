import  { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Location from './components/Location';
import Contactpage from './components/Contactpage'; 
import WhyChoose from './components/Whychoose';
import Footer from './components/Footer';

// Main Landing Page (Jab user '/' par ho)
const MainPage = () => {
  return (
    <>
      <Home />
      <About />
            <Location/>
<WhyChoose/>
      <Service />
      <Portfolio />
      <Contact />
    </>
  );
};

export default function App() {
  const location = useLocation();

  // Route change hone par auto top-scroll karega
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="bg-light min-vh-100 overflow-x-hidden">
      {/* Har page par same Navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        
        {/* Navbar ke Contact button click par naya Contact Page khulega */}
        <Route path="/contact" element={<Contactpage />} />
      </Routes>

      {/* Har page par same Footer */}
      <Footer />
    </div>
  );
}