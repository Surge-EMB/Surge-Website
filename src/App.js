import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavbarA';
import Home from './components/Home';
import About from './components/About';
import Apply from './components/Apply';
import Contact from './components/Contact';
import Sponsors from './components/Sponsors';

import PageNotFound from './components/PageNotFound';

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    );
  }

export default App;