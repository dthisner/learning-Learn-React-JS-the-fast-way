import React, { useState, useEffect } from "react";
import "../Styles.css";

export default function MoviesGrid() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    fetch("movies.json")
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, [])

  return (
    <div>Movie Grid {movies.length}</div>
  );
}
