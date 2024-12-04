import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';
import Menus from './Menus'; 
import MenuList from './MenuList';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<><Slider /><MenuList /></>} />
          <Route path="/Menus" element={<Menus />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;
