import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import "./Styles.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MoviesGrid from "./components/MoviesGrid";
import Watchlist from "./components/Watchlist";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("movies.json")
      .then(resp => resp.json())
      .then(data => setMovies(data))
  }, []);


  return (
    <div className="App">
      <div className="container">
        <Header />
        <Router >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/watchlist">Watchlist</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<MoviesGrid movies={movies} />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </Router>

      </div>
      <Footer />
    </div>
  );
}

export default App;
