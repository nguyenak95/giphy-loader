import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
  timeout: 10000,
  params: {
    api_key: process.env.REACT_APP_GIPHY_API_KEY,
  },
})

export default axiosInstance