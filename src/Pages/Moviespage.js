import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import MovieFilter from '../Components/MovieFilter';
import MovieGenreFilter from '../Components/MovieGenreFilter';
import './moviepage-style.css'

function Moviespage() {
  const [movies, setMovies] = useState([]);
  const [filteredMoviesByReleaseDate, setFilteredMoviesByReleaseDate] = useState([]);
  const [filteredMoviesByGenre, setFilteredMoviesByGenre] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleReleaseDateFilterChange = (releaseDate, sortOrder) => {
    // Filter and sort movies based on release date and sort order
    const filtered = movies
      .filter((movie) =>
        movie.releaseDate.toLowerCase().includes(releaseDate.toLowerCase())
      )
      .sort((a, b) => {
        const dateA = new Date(a.releaseDate);
        const dateB = new Date(b.releaseDate);

        if (sortOrder === 'asc') {
          return dateA - dateB; // Oldest to Newest
        } else {
          return dateB - dateA; // Newest to Oldest
        }
      });

    setFilteredMoviesByReleaseDate(filtered);
  };

  const handleGenreFilterChange = (selectedGenres) => {
    // Filter movies based on selected genres
    if (selectedGenres.length === 0) {
      // If no genres selected, show all movies
      setFilteredMoviesByGenre(movies);
    } else {
      const filtered = movies.filter((movie) =>
        selectedGenres.some((genre) => movie.genre.toLowerCase().includes(genre.toLowerCase()))
      );
      setFilteredMoviesByGenre(filtered);
    }

    setSelectedGenres(selectedGenres);
  };

  useEffect(() => {
    fetch('/Data/Moviedata.json') // file
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
        setFilteredMoviesByReleaseDate(data); // Initialize with all movies
        setFilteredMoviesByGenre(data); // Initialize with all movies
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Combine the two filtered movie sets
  const combinedFilteredMovies = filteredMoviesByReleaseDate.filter((movie) =>
    filteredMoviesByGenre.includes(movie)
  );

  return (
    <div className='page-wrapper'>
      <h1 style={{ textAlign: 'center' }}>Movies</h1>
      <div className='filter' style={{display:'flex',margin:'30px 0 20px 15px',alignItems: 'center'}}>
        <h2 style={{paddingRight:'20px',fontSize:'20px',fontWeight:'600'}}>Sort By:</h2>
        <div className="datefilter">
          <MovieFilter onFilterChange={handleReleaseDateFilterChange} />
        </div>
        <div className="genrefilter">
          <MovieGenreFilter genres={['Action', 'Animation', 'Drama','Horror','Sci-Fi','History','Adventure','Crime','Comedy']} onFilterChange={handleGenreFilterChange} />
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        {combinedFilteredMovies.map((movie) => (
          <Col key={movie.id} className="my-card-col mb-1">
            <Link to={`/moviedetail/${movie.id}`} style={{ textDecoration: 'none' }}>
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
                      Rating: {movie.rating} <br />
                      Release Year: {movie.releaseDate}
                    </p>
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

export default Moviespage;
