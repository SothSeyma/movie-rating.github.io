import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    fetch("/Data/MovieData.json")
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

  // render UI

  return <div>{/* Movie Detail UI */}</div>;
}

export default MovieDetail;
