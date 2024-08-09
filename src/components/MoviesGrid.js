import React, { useState, useEffect } from "react";
import "../Styles.css";

import MovieCard from "./MovieCard"

export default function MoviesGrid() {
  const listGenres = ["All Genre", "Action", "Fantasy", "Horror", "Drama"]
  const listRatings = ["All", "Good", "Ok", "Bad"]

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");

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
      <div className="filter-bar">
        <div className="filter-slot">
          <label>
            Genre
          </label>
          <select className="filter-dropdown">
            {
              listGenres.map((genre) => (
                <option>{genre}</option>
              ))
            }
          </select>
        </div>
        <div className="filter-slot">
          <label>
            Raiting
          </label>
          <select className="filter-dropdown">
            {
              listRatings.map((raiting) => (
                <option>{raiting}</option>
              ))
            }
          </select>
        </div>
      </div>

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
