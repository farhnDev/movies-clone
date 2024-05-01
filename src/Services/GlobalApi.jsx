import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3/';
const api_key = 'd1a6edc69425860b738104c59da972bf';
const genreByMovieId = 'https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';
{
    //* https://api.themoviedb.org/3/trending/all/day?api_key=d1a6edc69425860b738104c59da972bf url trend
}
const getTrendingVideos = axios.get(movieBaseUrl + 'trending/all/day?api_key=' + api_key)
const getGenreByMovieId = (id) => axios.get(genreByMovieId + "&with_genres=" + id)

export default {
    getTrendingVideos,
    getGenreByMovieId
}