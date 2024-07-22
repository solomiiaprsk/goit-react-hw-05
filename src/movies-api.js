import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer api_read_access_token'
  }
};

axios.get(axios.defaults.baseURL, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));

export const getMovies = async () => {
  const response = await axios.get("/movies");
  return response.data;
};

export const getMovieById = async (movieId) => {
  const response = await axios.get(`/movies/${movieId}`);
  return response.data;
};