import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
     <Navbar />
     <Home id="home"/>
     <About id="about"/>
     <Portfolio id="portfolio"/>
     <Contact id="contact"/>
     <Resume id="resume"/>
     <Footer />
    </div>
  );
}

export default App;
