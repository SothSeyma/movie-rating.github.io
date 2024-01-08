import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperCard-style.css'
import Countdown from './Countdown';

function SwiperCardUpcoming() {
    const [movies, setMovies] = React.useState([]);
  
    React.useEffect(() => {
        fetch('/Data/Upcomingmovie.json')  // file
        .then((response) => response.json())
        .then((data) => setMovies(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
      <Swiper
        spaceBetween={1}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
            
            1200: { slidesPerView: 5 },
            1000: { slidesPerView: 4 },
            700: { slidesPerView: 3 },
            500: { slidesPerView: 3 },
            400: { slidesPerView: 3 },
            300: { slidesPerView: 3 },
          }}
      >
        {movies.slice(0,10).map((movies) => (
          <SwiperSlide key={movies.id}>
            <Link to={`/upcomingdetail/${movies.id}`} style={{ textDecoration: 'none' }}>
  <Card className='card-movie'>
    <img
      variant="top"
      src={movies.image}  // Assuming `movie.image` already includes the base URL
      alt={movies.name}
      
      
      
    />
    <div className='card-show'>
      <div className='card-title' ><h1>{movies.name}</h1></div>
      <div className='card-text'>
        <p >
          <span className='p-span'>Genre:</span> {movies.genre} <br />
          <span  className='p-span'>Release Date:</span> {movies.releaseDate} <br />
          <Countdown releaseDate={movies.releaseDate} />
        </p>
      </div>
    </div>
  </Card>
</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

export default SwiperCardUpcoming;