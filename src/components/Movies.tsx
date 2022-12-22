import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieHeader from "./MovieHeader";
import Pagination from "./Pagination";
import { moviesType } from "../types/movies";
import data from "../data/movies.json";

const ITEMS_PER_PAGE = 12;

export default function Movies() {
  const [movies, setMovies] = useState<moviesType[]>(data.movies);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(data.movies.length / ITEMS_PER_PAGE)
  );

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function handleFilterChange(genre: string) {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  }

  function performIntersection(arr1: string[], arr2: string[]) {
    const intersectionResult = arr1.filter((x) => arr2.indexOf(x) !== -1);
    return intersectionResult;
  }

  function applyFilters() {
    const filteredMovies = data.movies.filter(
      (movie) => performIntersection(movie.genres, selectedGenres).length > 0
    );
    setMovies(filteredMovies);
    setCurrentPage(1);
    setTotalPages(Math.round(filteredMovies.length / ITEMS_PER_PAGE));
  }

  function clearAllFilters() {
    setMovies(data.movies);
    setSelectedGenres([]);
    setCurrentPage(1);
    setTotalPages(Math.round(data.movies.length / ITEMS_PER_PAGE));
  }

  return (
    <div>
      <MovieHeader
        title="MOVIE LIST"
        genres={data.genres}
        selectedGenres={selectedGenres}
        handleFilterChange={handleFilterChange}
        applyFilters={applyFilters}
        clearAllFilters={clearAllFilters}
      />
      <div className="movie-container">
        {movies
          .slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
          )
          .map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
