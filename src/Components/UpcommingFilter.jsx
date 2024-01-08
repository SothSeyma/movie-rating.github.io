import React, { useState } from 'react';

function MovieGenreFilter({ genres, onFilterChange, onSortChange }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedSort, setSelectedSort] = useState('closest');

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    const updatedGenres = selectedGenres.includes(selectedGenre)
      ? selectedGenres.filter((genre) => genre !== selectedGenre)
      : [...selectedGenres, selectedGenre];

    setSelectedGenres(updatedGenres);
    onFilterChange(updatedGenres, selectedSort);
  };

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSelectedSort(selectedSort);
    onSortChange(selectedSort, selectedGenres);
  };

  return (
    <div>
      <label>Genres:</label>
      <select multiple value={selectedGenres} onChange={handleGenreChange}>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <label>Sort By Release Date:</label>
      <select value={selectedSort} onChange={handleSortChange}>
        <option value="closest">Closest to Farthest</option>
        <option value="farthest">Farthest to Closest</option>
      </select>
    </div>
  );
}

export default MovieGenreFilter;
