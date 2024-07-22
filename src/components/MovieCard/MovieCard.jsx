import { Link } from "react-router-dom";
import css from "./MovieCard.module.css";

export default function MovieCard({
  movie: { id, cardOwner, amount, description },
}) {
  return (
    <div className={css.wrapper}>
      <p>
        <b>Card owner:</b> {cardOwner}
      </p>
      <p>
        <b>Amount:</b> {amount}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <Link to={`/payments/${id}`}>Details</Link>
    </div>
  );
}