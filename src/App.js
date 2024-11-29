import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Pay } from './components';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pay" element={<Pay />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

