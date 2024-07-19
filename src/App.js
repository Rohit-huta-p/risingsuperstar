import logo from './logo.svg';
import './App.css';
import Main from './Home/Main';
import Navbar from './Home/Navbar';
import AboutUs from './Home/AboutUs';
import Activities from './Home/Activities';
import Gallery from './Home/Gallery'
import ContactForm from './Home/ContactForm';
import Footer from './Home/Footer';
function App() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <div className='p-2'>
        <Main />
        <AboutUs />
        <Activities />
        <Gallery />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
