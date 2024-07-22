import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { getMovieById } from "../movies-api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // loading
  // error

  useEffect(() => {
    async function fetchMovie() {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {}
    }

    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <h2>Additional Information</h2>
      {movie && <MovieInfo movie={movie} />}

      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}