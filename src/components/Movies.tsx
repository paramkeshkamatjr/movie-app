import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieHeader from "./MovieHeader";
import data from "../data/movies.json";
import { moviesType } from "../types/movies";
import Pagination from "./Pagination";

const ITEMS_PER_PAGE = 12;

export default function Movies() {
  const [movies, setMovies] = useState<moviesType[]>(
    data.movies.slice(0, ITEMS_PER_PAGE)
  );
  const [genres, setGenres] = useState<string[]>(data.genres);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    Math.floor(data.movies.length / ITEMS_PER_PAGE)
  );

  function handleItemsChange(page: number) {
    const index = (page - 1) * ITEMS_PER_PAGE;
    setMovies(data.movies.slice(index, index + ITEMS_PER_PAGE));
  }

  function nextPage() {
    if (currentPage !== totalPages) {
      setCurrentPage((prev) => {
        handleItemsChange(prev + 1);
        return prev + 1;
      });
      console.log("nextPage");
    }
  }
  function prevPage() {
    if (currentPage !== 1) {
      setCurrentPage((prev) => {
        handleItemsChange(prev - 1);
        return prev - 1;
      });
    }
  }

  return (
    <div>
      <MovieHeader title="MOVIE LIST" />
      <div className="movie-container">
        {movies.map((movie) => (
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