import React from 'react';
import './App.css';
import Main from './Home/Main';
import Navbar from './Home/Navbar';
import AboutUs from './Home/AboutUs';
import Activities from './Home/Activities';
import Gallery from './Home/Gallery';
import ContactForm from './Home/ContactForm';
import Footer from './Home/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className='p-2'>
        <Element name="main">
          <Main />
        </Element>
        <Element name="about-us">
          <AboutUs />
        </Element>
        <Element name="activities">
          <Activities />
        </Element>
        <Element name="gallery">
          <Gallery />
        </Element>
        <Element name="contact-form">
          <ContactForm />
        </Element>
        <Footer />
      </div>
    </div>
  );
}

export default App;
