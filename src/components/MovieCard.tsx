import { moviesType } from "../types/movies";

export default function MovieCard({
  posterUrl,
  title,
  year,
  genres,
  director,
  actors,
}: moviesType) {
  return (
    <div className="movie-card">
      <img
        src={posterUrl}
        alt={title}
        onError={(e) => (e.currentTarget.src = "/fallback-image.png")}
      />
      <div className="movie-description">
        <h2>{title}</h2>
        <p>
          <strong>Year: </strong>
          {year}
        </p>
        <p>
          <strong>Genres: </strong>
          {genres.join(", ")}
        </p>
        <p>
          <strong>Director: </strong>
          {director}
        </p>
        <p>
          <strong>Actors: </strong>
          {actors}
        </p>
      </div>
    </div>
  );
}
