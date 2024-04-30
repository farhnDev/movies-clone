import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3/';
const api_key = 'd1a6edc69425860b738104c59da972bf';
{
    //* https://api.themoviedb.org/3/trending/all/day?api_key=d1a6edc69425860b738104c59da972bf url trend
}
const getTrendingVideos = axios.get(movieBaseUrl + 'trending/all/day?api_key=' + api_key)

export default {
    getTrendingVideos
}