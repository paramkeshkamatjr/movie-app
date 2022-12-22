import React from "react";
import { moviesType } from "../types/movies";

export default function MovieCard(props: moviesType) {
  return (
    <div className="movie-card">
      <img src={props.posterUrl} alt={props.title} />
      <div className="movie-description">
        <h2>{props.title}</h2>
        <p>
          <strong>Year: </strong>
          {props.year}
        </p>
        <p>
          <strong>Genres: </strong>
          {props.genres.join(", ")}
        </p>
        <p>
          <strong>Director: </strong>
          {props.director}
        </p>
        <p>
          <strong>Actors: </strong>
          {props.actors}
        </p>
      </div>
    </div>
  );
}
