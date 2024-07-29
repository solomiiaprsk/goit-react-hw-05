import { useEffect, useState } from "react";
import { getMovies } from "../movies-api";
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
      } catch (error) {}
    }
    fetchMovies();
      }, []);
   
    const handleSearch = async () => {
        try {
            setMovies([]);
            console.log("movies");
            setMovies("");
    } catch (error) {
      console.log("error")
    } 
  };


  return (
      <div>
      <SearchForm onSearch={handleSearch} />
      <p>movie not found</p>
    </div>
  );
}