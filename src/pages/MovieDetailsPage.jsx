import { useEffect, useState, useRef } from "react";
import { NavLink, useParams, Outlet, useNavigate, useLocation, Link} from "react-router-dom";
import { getMovieById } from "../movies-api";
import MovieInfo from "../components/MovieInfo"
import css from "./MovieDetailsPage.module.css"


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movie_id } = useParams();
    const navigate = useNavigate(); 
    const location = useLocation();
    const backLinkRef = useRef(location.state ?? "/movies");
    

    // loading
    // error

    useEffect(() => {
        async function fetchMovie() {
            try {
                const data = await getMovieById(movie_id);
                setMovie(data);
            } catch (error) {
                console.error("Failed to fetch movie:", error);
           
            }
        }

        fetchMovie();
    }, [movie_id]);
    
   

    return (
        <div className={css.container}>
            <Link to={backLinkRef.current}>
                Go Back
            </Link>
            {movie && <MovieInfo movie={movie} />}

            <ul>
                <li>
                    <NavLink to="cast">Cast </NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}