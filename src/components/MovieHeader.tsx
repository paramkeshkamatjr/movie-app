import { MovieHeaderProps } from "../types/movies";

export default function MovieHeader({
  title,
  genres,
  selectedGenres,
  handleFilterChange,
  applyFilters,
  clearAllFilters
}: MovieHeaderProps) {
  return (
    <div className="movie-header">
      <h1>{title}</h1>
      <p>Filters:</p>
      <div className="filters-container">
        {genres.map((genre) => (
          <span
            key={genre}
            className={`${selectedGenres.includes(genre) && "active-filter"}`}
            onClick={() => handleFilterChange(genre)}
          >
            {genre}
          </span>
        ))}
      </div>
      {selectedGenres.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <button onClick={applyFilters}>Apply Filter</button>{" "}
          <button onClick={clearAllFilters}>Clear all Filters</button>
        </div>
      )}
    </div>
  );
}
