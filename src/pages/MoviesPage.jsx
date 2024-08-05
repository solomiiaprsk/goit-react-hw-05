import { useEffect, useState } from "react";
import { searchMovies } from "../movies-api";
import { SearchForm } from "../components/SearchBar/SearchBar.jsx";
import css from "./MoviesPage.module.css";
import { Link } from "react-router-dom";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState();
   
  
useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        return;
      }
      setLoading(true);
      try {
        const data = await searchMovies(query);
        setMovies(data);
        setError(null);
      } catch (error) {
        setError("Failed to fetch movies.");
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
}, [query]);
  
   const handleSearch = async (query) => {
    setQuery(query);
  };
  

  return (
      <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {movies.length > 0 && 
        <ul className={css.container}>
          {movies.map((movie) => (
            <li key={movie.id}>
              <p><strong> {movie.title} </strong></p>
              <Link to={`/movies/${movie.id}`}>Details</Link>

            </li>
          ))}
          
        </ul>
      }
    
    </div>
  );
};
