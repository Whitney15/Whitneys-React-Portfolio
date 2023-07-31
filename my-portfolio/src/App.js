import React from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <div>
     <Navbar />
     <About />
     <Portfolio />
     <Contact />
     <Resume />
    </div>
  );
}

export default App;
