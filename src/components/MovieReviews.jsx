import { getMovieReviews } from "../movies-api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const {movie_id} = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

 useEffect(() => {
    const fetchReviews = async () => {
      if (!movie_id) {
        console.error("movieId is undefined");
        return;
      }

     setLoading(true);
      try {
        const data = await getMovieReviews(movie_id);
        setMovieReviews(data);
        setError(null);
      } catch (error) {
        console.error("Error fetching movie reviews:", error);
        setError("Failed to fetch reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
 }, [movie_id]);
  

  return (
     <ul className={css.list}>
      {loading && <p>Loading reviews...</p>}
      {error && <li><p>{error}</p></li>}
      {!loading && movieReviews.length > 0 ? (
        movieReviews.map((review) => (
          <li className={css.item} key={review.id}>
            <h4 className={css.name}>{review.author}</h4>
            <p className={css.text}>{review.content}</p>
          </li>
        ))
      ) : (
        !loading && <li><p>We don't have any reviews for this movie.</p></li>
      )}
    </ul>
  );
};
