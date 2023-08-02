import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Resume from './components/Resume/resume';
import Portfolio from './components/Portfolio/portfolio';
import Navigation from './components/Navigation/navigation';
import Contact from './components/Contact/contact';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
      <nav className="navigation"> {}
        <Navigation /> {}
      </nav>
      <div className="body">
        <Routes>
          <Route path="*" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
