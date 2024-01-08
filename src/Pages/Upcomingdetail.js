import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import  './Moviedetail.css';
import Countdown from '../Components/Countdown';
function Upcomingdetail() {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [mainImage, setMainImage] = useState('');

  const handleThumbnailClick = (newImageUrl) => {
    setMainImage(newImageUrl);
  };
  

  React.useEffect(() => {
    fetch('/Data/Upcomingmovie.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedMovie = data.find((movie) => movie.id === parseInt(id, 10));
        setMovie(selectedMovie);
        setMainImage(selectedMovie.image); // Set the main image URL from the selected movie
        setTrailers(Array.isArray(selectedMovie.iframeUrl) ? selectedMovie.iframeUrl : []);
      })
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  const thumbnailStyle = {
    width: '15%',
    height: '30%',
    cursor: 'pointer',
    border: '2px solid black',
    borderRadius: '5px',
    marginBottom: '10px',
    margin:'10px 2px',
  };
  


  return (
    <div className="page-wrapper">
      {/* poster */}
      <div className="top">
        <div className="tittle">
          <h1>{movie.name}</h1>
          <div>
          {movie && (
            <div className="box-genre">
              {movie.genre.split(',').map((genre, index) => (
                <div key={index} className="box">
                  {genre.trim()}
                </div>
              ))}
            </div>
          )}
              </div>
            <h3><span style={{marginRight:'4px'}}>ReleasDate:</span>{movie.releaseDate}</h3>
        </div>`
        <div className="right-top">
          <div className="rating">
            <h1>Release In</h1>
            <div className="rating-under">
              <h2><Countdown releaseDate={movie.releaseDate} /></h2>
              
            </div>
          </div>
          
        </div>
      </div>
      <div className="poster-trailer">
      <div className="image-gallery">
        <div className="main-image">
        <img
          src={mainImage}
          alt="Main Gallery Image"
          className="main-image"
          style={{
            width: '40%',
            margin:'5px 0 0 0',
            height: 'auto',
            border: '2px solid black',
            borderRadius: '7px',
          }}
        />
      </div>
      <div className="thumbnail-images">
        <img
          src={movie.image}
          alt="Thumbnail Image 1"
          className="thumbnail"
          style={thumbnailStyle}
          onClick={() => handleThumbnailClick(movie.image)}
        />
        <img
          src={movie.image2}
          alt="Thumbnail Image 2"
          className="thumbnail"
          style={thumbnailStyle}
          onClick={() => handleThumbnailClick(movie.image2)}
        />
        <img
          src={movie.image3}
          alt="Thumbnail Image 3"
          className="thumbnail"
          style={thumbnailStyle}
          onClick={() => handleThumbnailClick(movie.image3)}
        />
      </div>
      </div>
   
      

      <div className="trailer-right" >
         <iframe
              // title={videoData.title}
              width="650px"
              height="350px"
              
              src={movie.iframeUrl}
              frameborder="0"
              allowfullscreen
              style={{borderRadius:'10px'}}
      ></iframe> 
          </div>
      </div>
      <div className="detail">
        <h1>Story</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sunt esse expedita exercitationem repudiandae architecto natus dicta repellat, quia eius itaque delectus. Suscipit quam enim excepturi corrupti alias, libero qui?</p>
        <hr />
        <div className="detail2">
          <div className="inf">
            <h2>Director:</h2>
            <p>{movie.director}</p>
          </div>
          <hr />
        </div>
        <div className="detail2">
          <div className="inf">
            <h2>Writter:</h2>
            <p>{movie.writer}</p>
          </div>
          <hr />
        </div>
        <div className="detail2">
          <div className="inf">
            <h2>Cast:</h2>
            <p>{movie.cast}</p>
          </div>
          <hr />
        </div>
      </div>
      <div className="trailer-mangement">
                <h1>Trailers</h1>
            <div className="trailer-cards">
              {movie && movie.iframeUrl ? (
                movie.iframeUrl.map((trailer, index) => (
                  <div key={index} className="trailer-card">
                    <iframe
                      title={`Trailer ${index + 1}`}
                      width="300"
                      height="200"
                      src={trailer}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
              ) : (
                <p>No trailers available</p>
              )}
            </div>

        </div>
      </div>
    
  );
}

export default Upcomingdetail;
