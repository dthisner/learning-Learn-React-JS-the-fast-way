import React, { useState } from "react";
import "../Styles.css";

import MovieCard from "./MovieCard"

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const genresDefault = "All Genres"
  const ratingDefault = "All"
  const listGenres = [genresDefault, "Action", "Fantasy", "Horror", "Drama"]
  const listRatings = [ratingDefault, "Good", "Ok", "Bad"]

  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState(genresDefault);
  const [rating, setRating] = useState(ratingDefault);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value)
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value)
  };

  const matchesGenre = (movie, genre) => {
    return genre === genresDefault || movie.genre.toLowerCase() === genre.toLowerCase();
  }

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  const matchesRating = (movie, rating) => {
    switch (rating) {
      case ratingDefault:
        return true
      case "Good":
        return movie.rating >= 8;
      case "Ok":
        return movie.rating >= 5 && movie.rating < 8;
      case "Bad":
        return movie.rating < 5;
      default:
        return false
    }
  }

  const filteredMovies = movies.filter((movie) =>
    matchesGenre(movie, genre) &&
    matchesRating(movie, rating) &&
    matchesSearchTerm(movie, searchTerm)
  );

  return (
    <div>
      <input type="text" placeholder="Search movies..." value={searchTerm} onChange={handleSearchChange} className="search-input" />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>
            Genre
          </label>
          <select value={genre} onChange={handleGenreChange} className="filter-dropdown">
            {
              listGenres.map((genre, i) => (
                <option key={i}>{genre}</option>
              ))
            }
          </select>
        </div>
        <div className="filter-slot">
          <label>
            Rating
          </label>
          <select value={rating} onChange={handleRatingChange} className="filter-dropdown">
            {
              listRatings.map((rating, i) => (
                <option key={i}>{rating}</option>
              ))
            }
          </select>
        </div>
      </div>

      <div className="movies-grid">
        {
          filteredMovies.map(movie => (
            <MovieCard
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              isWatchlisted={watchlist.includes(movie.id)}
              key={movie.id}
            />
          ))
        }
      </div >
    </div>

  );
}
