import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({
  movie: { id, title },
}) {
  return (
    <div className={css.wrapper}>
         <h3>{title}</h3>
      <p>User Score: </p>
      <p>Overview</p>
          <p>Genres</p>
          
      <Link to={`/movies/${id}`}>Details</Link>
    </div>
  );
}