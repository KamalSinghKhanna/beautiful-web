import './App.css';
import Benefits from './component/Benefits/Benefits';
import Consult from './component/Consult/Consult';
import Contact from './component/Contact/Contact';
import Experience from './component/Experience/Experience';
import Faq from './component/Faq/Faq';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Offer from './component/Offer/Offer';
import Spot from './component/Spot/Spot';
import Testimonial from './component/Testimonial/Testimonial';
import Testimonial2 from './component/Testimonial2/Testimonial2';
import Work from './component/Work/Work';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Testimonial />
      <Benefits />
      <Experience />
      <Spot />
      <Work />
      <Offer />
      <Testimonial2 />
      <Faq />
      <Consult />
      <Contact />
    </div>
  );
}

export default App;
