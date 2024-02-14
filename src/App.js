import React, { useEffect } from 'react'
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Home2 from './components/Home2.js';
import Design1 from './components/Design1.js';
import Design2 from './components/Design2.js';
import Design3 from './components/Design3.js';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Design from './components/Design4.js';
import Footer from './components/Footer.js';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Home2 />
      <Design1 />
      <Design2 />
      <Design3 />
      <Design />
      <Footer />
    </>
  );
}

export default App;
