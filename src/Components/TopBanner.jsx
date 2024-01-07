import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './topbanner-style.css';
function TopBanner() {
    const [movies, setmovies] = React.useState([]);
    useEffect(() => {
        fetch('/Data/Moviedata.json') // file
          .then((response) => response.json())
          .then((data) => {
            setmovies(data);  
          })
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
  return (
    <div className="slider">
  <Carousel>
    {movies.slice(0, 10).map((movie, index) => ( //limit slide to show
      <Carousel.Item key={index}>
        <div className="card">
          <div className="poster-trailer-banner">
            <img className="card-img" src={movie.image} alt={`Slide ${index + 1}`} />
            <iframe
                      title={`Trailer ${index + 1}`}
                      width="300"
                      height="200"
                      src={movie.iframeUrl}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
            </div>
            
          <div className="card-body">
            <h5 className="card-title">{movie.name}</h5>
            <p className="card-text">{movie.genre}</p>
          </div>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
</div>
   
  )
}

export default TopBanner