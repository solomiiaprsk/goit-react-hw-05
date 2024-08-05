import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../movies-api";
import { SearchForm } from "../components/SearchBar/SearchBar.jsx";

export default function MoviesPage() {
   const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
   
  // const handleSearch = async (query) => {
  //     try {
  //       const data = await searchMovies(query);
  //       setMovies(data);
  //       console.log("movies query");
  //       setError(null);
  //       setMovies("");
  //   } catch (error) {
  //     console.error("Error fetching movies:", error);
  //   }
  // };
  
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
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      }
      

    </div>
  );
};
