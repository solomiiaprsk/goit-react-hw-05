import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList.jsx";
import { getMovies } from "../movies-api";

export default function MoviesPage() {
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
    <div>{movies.length > 0 && <MovieList movies={movies} />}</div>
  );
}