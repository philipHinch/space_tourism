// css
import './App.css';
// pages
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Technology from './pages/Technology';
//components
//router
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//components
import Navbar from './components/Navbar';
import SlidingMenu from './components/SlidingMenu';
import { useState } from 'react';

function App() {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setShowMenu={setShowMenu} />
        <SlidingMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
