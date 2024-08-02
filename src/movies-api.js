import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNGI5MzliMGMxNmVjZThiMGNhN2UyMzNhYTRhZGJiMyIsIm5iZiI6MTcyMTYxMTA4OC4yNDIzMTYsInN1YiI6IjY2OWRhYzQwMDhlNmE0NDU0Yjg4MWQwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WkXIkVd-qVYv6IwGZKNytebP3neErAuaFgQP5DS7CHk',
        
    },
};

export const getMovies = async () => {
   const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};

export const getMovieById = async (movie_id) => {
    const response = await axios.get(`movie/${movie_id}`, options);
    return response.data;
};


export const searchMovies = async (query) => {
    const response = await axios.get("search/movie", {
      ...options,
      params: {
        query: query,
      },
    });
    return response.data;
};

export const getMovieCast = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}/credits`, options);
  return response.data.cast;
};

export const getMovieReviews = async (movie_id) => {
  const response = await axios.get(`/movie/${movie_id}/reviews`, options);
  return response.data.results;
};