import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import Countdown from '../Components/Countdown';
function Upcomingpage() {
  const [movies, setmovies] = React.useState([]);

  React.useEffect(() => {
    fetch('/Data/Upcomingmovie.json')  // file
      .then((response) => response.json())
      .then((data) => setmovies(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className='page-wrapper'>
      <h1>UpComing Movies</h1>
      <br />
      
      <br />
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-3">
        {movies.map((movies) => (
          <Col key={movies.id} className="my-card-col mb-1">
               <Card style={{ width: '15rem', height: '100%' }}>
              <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + movies.image}
                  alt={movies.name}
                  className="card-img-top"
                  style={{ width: '100%', height: '280px', objectFit: 'cover' }} //size for movie image
                />
              <Card.Body>
                <Card.Title style={{ fontSize: '17px', fontWeight:'bold' }}>{movies.name}</Card.Title>
                <Card.Text>
                <p style={{ fontSize: '14px' }}>
                Genre: {movies.genre} <br />
                Release Date: {movies.releaseDate} 
                </p>
                <Countdown releaseDate={movies.releaseDate} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Upcomingpage