import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({
  movie: { id, title},
}) {
    
  return (
    <div className={css.wrapper}>
          <h3 className={css.title}>{title}</h3> 
      <Link to={`/movies/${id}`}>Details</Link>
    </div>
  );
};
