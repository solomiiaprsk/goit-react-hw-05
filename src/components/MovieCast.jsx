import { getMovieCast } from "../movies-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "../components/MovieCast.module.css"

export default function MovieCast() {
  const { movie_id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const visibleCastCount = 10;
  
  useEffect(() => {
    const fetchCast = async () => {
      if (!movie_id) {
        console.error("movieId is undefined");
        return;
      }
      setLoading(true);
      try {
        const data = await getMovieCast(movie_id);
        setMovieCast(data);
        setError(null);
      }
      catch (error) {
        console.error("Error fetching movie cast:", error);
        setError("Failed to fetch cast.");
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movie_id])
  
 
  return (
    <div>
     {loading && <p>Loading cast...</p>}
      {error && <p>{error}</p>}
      {!loading && movieCast.length > 0 ? (
        <ul className={css.list}>
          {movieCast.slice(0, visibleCastCount).map((cast) => (
            <li className={css.item} key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
                  alt={cast.name}
                  className={css.image}
                />
              ) : (
                <p className={css.noImage}>No Image Available</p>
              )}
              <div className={css.details}>
                <h4 className={css.name}>{cast.name}</h4>
                <p className={css.character}>{cast.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>We don't have any credits for this movie.</p>
      )}

    </div>
  );
}