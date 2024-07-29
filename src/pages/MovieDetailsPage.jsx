import { useEffect, useState } from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { getMovieById } from "../movies-api";
import MovieInfo from "../components/MovieInfo"
import css from "./MovieDetailsPage.module.css"


export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movie_id } = useParams();

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