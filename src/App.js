import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom';
import { Contact } from './component/Contact';
import { About } from './component/About';
import { Navbar } from './component/Navbar';
import { Service } from './component/Service';
import { Home } from './component/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home name="Home" />} />
        <Route path="/about" element={<About name="AboutUs" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service name="Service" />} />
      </Routes>
    </>
  );
}

export default App;


