export type moviesType = {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  posterUrl: string;
};

export type MovieHeaderProps = {
  title: string;
  genres: string[];
  selectedGenres: string[];
  handleFilterChange: (genre: string) => void;
  applyFilters: () => void;
  clearAllFilters: () => void;
};
