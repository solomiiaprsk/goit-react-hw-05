import { Routes, Route } from "react-router-dom";
import './App.module.css'
import Navigation from '../../components/Navigation/Navigation'
import HomePage from '../../pages/HomePage'
import MoviesPage from '../../pages/MoviesPage'
import MovieDetailsPage from '../../pages/MovieDetailsPage'
import MovieCast from '../MovieCast'
import MovieReviews from '../MovieReviews'
import NotFoundPage from '../../pages/NotFoundPage'

function App() {
  

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movie_id" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<MovieReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App
