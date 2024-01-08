import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Newspage from './Pages/Newspage';
import Moviespage from './Pages/Moviespage.js';
import Upcomingpage from './Pages/Upcomingpage.js';
import MovieDetail from './Pages/MovieDetail.js';
import Upcomingdetail from './Pages/Upcomingdetail.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/movies" element={<Moviespage />} />
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
        <Route path="/upcomingdetail/:id" element={<Upcomingdetail />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/upcoming" element={<Upcomingpage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
