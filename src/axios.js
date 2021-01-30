import axios from "axios"

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
})

export default instance

//https://api.themoviedb.org/3/trending/all/week?api_key?=${3ff0dc4780ecd9a0328bbca42efe5a5c}&language=en=US