import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Technologies from './pages/Technologies';
import Industries from './pages/Industries';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';

// Banner component for leadership experience and client satisfaction
const TopBanner = () => (
  <div className="bg-primary-600 text-white py-2 px-4 text-center text-sm font-medium">
    <span className="mr-6">Our leadership has over 20+ years of experience</span>
    <span>Client satisfaction 95%</span>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <TopBanner />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
