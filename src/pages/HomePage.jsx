import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList.jsx";
import { getMovies } from "../movies-api";
import css from "./HomePage.module.css"

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  // loading
  // error

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {}
    }
    fetchMovies();
  }, []);

  return (
      <div className={css.container}>
          <h1>Trending today</h1>
          {movies.length > 0 && <MovieList movies={movies} />}
      </div>
      
  );
}