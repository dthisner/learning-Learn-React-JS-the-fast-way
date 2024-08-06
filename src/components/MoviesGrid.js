import React, { useState, useEffect } from "react";
import "../Styles.css";

import MovieCard from "./MovieCard"

export default function MoviesGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      <input type="text" placeholder="Search movies..." className="search-input" />
      <div className="movies-grid">
        {
          movies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        }
      </div >
    </div>

  );
}
