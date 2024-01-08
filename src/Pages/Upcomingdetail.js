import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Countdown from "../Components/Countdown";

function UpcomingDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    fetch("/Data/Upcomingmovie.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedMovie = data.find(
          (movie) => movie.id === parseInt(id, 10)
        );
        setMovie(selectedMovie);
        setMainImage(selectedMovie.image);
        setTrailers(
          Array.isArray(selectedMovie.iframeUrl) ? selectedMovie.iframeUrl : []
        );
      });
  }, [id]);

  const handleThumbnailClick = (newImageUrl) => {
    setMainImage(newImageUrl);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-wrapper">
      {/* Movie Details UI */}

      <div className="top">
        <div className="title">
          <h1>{movie.name}</h1>

          <div className="genres">
            {movie.genre.split(",").map((genre, index) => (
              <div key={index} className="genre">
                {genre.trim()}
              </div>
            ))}
          </div>

          <h3>
            <span style={{ marginRight: "4px" }}>Release Date:</span>
            {movie.releaseDate}
          </h3>
        </div>

        <div className="countdown">
          <h1>Release In</h1>
          <Countdown releaseDate={movie.releaseDate} />
        </div>
      </div>

      {/* Image Gallery */}

      {/* Trailers */}

      {/* Movie Details */}
    </div>
  );
}

export default UpcomingDetail;
