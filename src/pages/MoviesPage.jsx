import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList.jsx";
import { getMovies } from "../movies-api";
import { SearchForm } from "../components/SearchBar/SearchBar.jsx";

export default function MoviesPage() {
//   const [movies, setMovies] = useState([]);
//   // loading
//   // error

//   useEffect(() => {
//     async function fetchMovies() {
//       try {
//         const data = await getMovies();
//         setMovies(data);
//       } catch (error) {}
//     }
//     fetchMovies();
    //   }, []);
    const [movies, setMovies] = useState([]);

    const handleSearch = async (topic) => {
    try {
   setMovies([]);
   setError(false); 
      setLoading(true);
      setTopic(newTopic);
      const data = await fetchArticlesWithTopic(topic, page);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };


  return (
      <div>
          <SearchForm onSearch={handleSearch} />
    </div>
  );
}