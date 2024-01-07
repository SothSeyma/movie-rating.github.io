import React, { useState ,useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import MovieFilter from '../Components/MovieFilter';
import MovieGenreFilter from '../Components/MovieGenreFilter';
function Moviespage() {
  const [movies, setmovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
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

    setFilteredMovies(filtered);
  };
  const handleGenreFilterChange = (selectedGenres) => {
    // Filter movies based on selected genres
    if (selectedGenres.length === 0) {
      // If no genres selected, show all movies
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        selectedGenres.some((genre) => movie.genre.toLowerCase().includes(genre.toLowerCase()))
      );
      setFilteredMovies(filtered);
    }

    setSelectedGenres(selectedGenres);
  };
  useEffect(() => {
    fetch('/Data/Moviedata.json') // file
      .then((response) => response.json())
      .then((data) => {
        setmovies(data);  // Corrected to setMovies
        setFilteredMovies(data); // Initialize filteredMovies with all movies
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    
    <div className='page-wrapper'>
      <h1 style={{textAlign:'center'}}>Movies</h1>
      <MovieFilter onFilterChange={handleReleaseDateFilterChange} />
      <MovieGenreFilter genres={['Action', 'Animation', 'Drama']} onFilterChange={handleGenreFilterChange} />
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
      {filteredMovies.map((movie) => (
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
  )
}

export default Moviespage