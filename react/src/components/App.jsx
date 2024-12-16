import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Slider from './Slider';
import Footer from './Footer';
import Menus from './Menus';
import MenuList from './MenuList';
import About from './About';
import Contact from './Contact';  
import Branches from './Branches';
import { useState } from 'react';
import BranchesPage from './BranchesPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    
    
    setIsModalOpen(true)
  
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar onOpenModal={openModal} />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<><Slider /><MenuList /></>} />
          <Route path="/Menus" element={<Menus />} />
          <Route path="/About" element={<About />} />
          <Route path="/Branches" element={<BranchesPage /> } />
        </Routes>
      </main>
      <Footer />
      
      
      <Contact isModalOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
