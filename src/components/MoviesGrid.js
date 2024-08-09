import React, { useState, useEffect } from "react";
import "../Styles.css";

import MovieCard from "./MovieCard"

export default function MoviesGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" placeholder="Search movies..." value={searchTerm} onChange={handleSearchChange} className="search-input" />
      <div className="movies-grid">
        {
          filteredMovies.map(movie => (
            <MovieCard movie={movie} key={movie.id} />
          ))
        }
      </div >
    </div>

  );
}
