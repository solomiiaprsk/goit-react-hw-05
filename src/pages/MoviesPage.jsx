import { useEffect, useState } from "react";
import { getMovies, searchMovies } from "../movies-api";
import { SearchForm } from "../components/SearchBar/SearchBar.jsx";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
//   // loading
//   // error

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        setError("Failed to fetch movies.");
      }
    }
    fetchMovies();
      }, []);
   
    const handleSearch = async (query) => {
      try {
          const data = await searchMovies(query);
            setMovies(data);
            console.log("movies");
            setMovies("");
    } catch (error) {
      console.log("error")
    } 
  };


  return (
      <div>
      <SearchForm onSearch={handleSearch} />
      
    </div>
  );
};
