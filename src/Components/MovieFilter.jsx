import React, { useState } from 'react';
//filter by date
const MovieFilter = ({ onFilterChange }) => {
  const [releaseDateFilter, setReleaseDateFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Default: oldest to newest

  const handleReleaseDateChange = (e) => {
    const value = e.target.value;
    setReleaseDateFilter(value);
    onFilterChange(value, sortOrder);
  };

  const handleSortOrderChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);
    onFilterChange(releaseDateFilter, value);
  };

  return (
    <div>
      <label>
        Sort Order:
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Oldest to Newest</option>
          <option value="desc">Newest to Oldest</option>
        </select>
      </label>
    </div>
  );
};

export default MovieFilter;
