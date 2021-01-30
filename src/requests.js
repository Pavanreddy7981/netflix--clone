const API_KEY = "3ff0dc4780ecd9a0328bbca42efe5a5c"

const requests = {
    fetchTrending : `/trending/all/day?api_key?=${API_KEY}`,
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movies/top_rated?api_key?=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genred=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genred=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genred=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genred=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genred=99`,
}
export default requests