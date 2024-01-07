import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';

import './SwiperCard-style.css'

function SwiperCard() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
        fetch('/Data/Moviedata.json')
          .then((response) => response.json())
          .then((data) => {
            setMovies(data);
            
          })
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
        {movies.slice(0,10).map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/moviedetail/${movie.id}`} style={{ textDecoration: 'none' }}>
  <Card style={{ width: '15rem', height: '100%' }}>
    <Card.Img
      variant="top"
      src={movie.image}  // Assuming `movie.image` already includes the base URL
      alt={movie.name}
      className="card-img-top"
      style={{ width: '100%', height: '280px', objectFit: 'cover' }}
    />
    <Card.Body>
      <Card.Title style={{ fontSize: '17px', fontWeight: 'bold' }}>{movie.name}</Card.Title>
      <Card.Text>
        <p style={{ fontSize: '14px' }}>
          Genre: {movie.genre} <br />
          Release Date: {movie.releaseDate} <br />
        </p>
      </Card.Text>
    </Card.Body>
  </Card>
</Link>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

export default SwiperCard;