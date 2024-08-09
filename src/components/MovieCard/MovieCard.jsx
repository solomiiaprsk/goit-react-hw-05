import { Link, useLocation } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({
  movie: { id, title},
}) {
  const location = useLocation();

  return (
    <div className={css.wrapper}>
          <h3 className={css.title}>{title}</h3> 
      <Link to={`/movies/${id}`} state={location}>Details</Link>
    </div>
  );
};
