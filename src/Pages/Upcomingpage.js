import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Upcomingpage-style.css'
import Card from 'react-bootstrap/Card';
import Countdown from '../Components/Countdown';
import MovieGenreFilter from '../Components/MovieGenreFilter';

function Upcomingpage() {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedSort, setSelectedSort] = useState('closest');

  useEffect(() => {
    // Fetch movies and set initial state
    fetch('/Data/Upcomingmovie.json')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleGenreFilterChange = (genres) => {
    setSelectedGenres(genres);
    filterMovies(genres);
  };

  const handleSortChange = (selectedSort) => {
    setSelectedSort(selectedSort);
    sortMovies(filteredMovies, selectedSort);
  };

  const filterMovies = (genres) => {
    let filtered = [...movies];

    if (genres.length > 0) {
      filtered = filtered.filter((movie) =>
        genres.some((genre) => movie.genre.toLowerCase().includes(genre.toLowerCase()))
      );
    }

    sortMovies(filtered, selectedSort);
  };

  const sortMovies = (moviesToSort, sortOption) => {
    let sorted = [...moviesToSort];
  
    const parseDate = (dateString) => {
      const [day, month, year] = dateString.split('-').map(Number);
      return new Date(year, month - 1, day); // Note: Months are zero-indexed in JavaScript Dates
    };
  
    if (sortOption === 'closest') {
      sorted.sort((a, b) => parseDate(a.releaseDate) - parseDate(b.releaseDate));
    } else if (sortOption === 'farthest') {
      sorted.sort((a, b) => parseDate(b.releaseDate) - parseDate(a.releaseDate));
    }
  
    setFilteredMovies(sorted);
  };

  return (
    <div className='page-wrapper'>
      <h1 style={{ textAlign: 'center' }}>Upcoming Movies</h1>
      <div className="sort">
        
        
        <div className="datefilter">
          <label>Sort By :</label>
          <select value={selectedSort} onChange={(e) => handleSortChange(e.target.value)}>
            <option value="closest">Closest to Farthest</option>
            <option value="farthest">Farthest to Closest</option>
          </select>
        </div>

        <div className="genrefilter">
          <MovieGenreFilter genres={['Action', 'Animation', 'Drama','Horror','Sci-Fi','History','Adventure','Crime','Comedy']} onFilterChange={handleGenreFilterChange} />
        </div>
      </div>

      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        {filteredMovies.map((movie) => (
          <Col key={movie.id} className="my-card-col mb-1">
            <Link to={`/upcomingdetail/${movie.id}`} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '15rem', height: '100%' }}>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + movie.image}
                  alt={movie.name}
                  className="card-img-top"
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: '17px', fontWeight: 'bold' }}>{movie.name}</Card.Title>
                  <Card.Text>
                    <p style={{ fontSize: '14px' }}>
                      Genre: {movie.genre} <br />
                      Release Date: {movie.releaseDate}
                    </p>
                    <Countdown releaseDate={movie.releaseDate} />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Upcomingpage;