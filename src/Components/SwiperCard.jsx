import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperCard-style.css';

function SwiperCard() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/Data/Moviedata.json')
      .then((response) => response.json())
      .then((data) => {
        // Sort movies by releaseDate in descending order
        const sortedMovies = data.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
        // Take the first 10 movies
        const latestMovies = sortedMovies.slice(0, 10);
        setMovies(latestMovies);
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
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link to={`/moviedetail/${movie.id}`} style={{ textDecoration: 'none' }}>
            <Card className='card-movie'>
              <img variant="top" src={movie.image} alt={movie.name} />
              <div className='card-show'>
                <div className='card-title'>
                  <h1>{movie.name}</h1>
                </div>
                <div className='card-text'>
                  <p>
                    <span className='p-span'>Genre:</span> {movie.genre} <br />
                    <span className='p-span'>Rating:</span> {movie.rating} <br />
                    <span className='p-span'>Release Date:</span> {movie.releaseDate} <br />
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

export default SwiperCard;