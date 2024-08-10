import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import './App.module.css'
import Navigation from '../../components/Navigation/Navigation'


const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('../MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));



function App() {
  

    return (
        <>
            <Navigation />
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:movie_id" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<MovieReviews />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </>
    );
}

export default App
