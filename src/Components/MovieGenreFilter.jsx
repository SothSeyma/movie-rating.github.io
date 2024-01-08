// MovieGenreFilter.js
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

const MovieGenreFilter = ({ genres, onFilterChange }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreChange = (genre) => {
    const updatedGenres = [...selectedGenres];

    if (updatedGenres.includes(genre)) {
      // Genre is already selected, remove it
      updatedGenres.splice(updatedGenres.indexOf(genre), 1);
    } else {
      // Genre is not selected, add it
      updatedGenres.push(genre);
    }

    setSelectedGenres(updatedGenres);
    onFilterChange(updatedGenres);
  };

  return (

    
    <Dropdown >
      <Dropdown.Toggle variant="secondary" id="genreDropdown" style={{padding:'5px',margin:'0',backgroundColor:'#484A4E'}} >
        Filter by Genre
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {genres.map((genre) => (
          <div key={genre} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id={genre}
              checked={selectedGenres.includes(genre)}
              onChange={() => handleGenreChange(genre)}
            />
            <label className="form-check-label" htmlFor={genre}>
              {genre}
            </label>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MovieGenreFilter;
