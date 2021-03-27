import axiosInstance from "../config"

class GifApi {
  getTrendingsGif = async (offset = 0) => {
    try {
      const result = await axiosInstance.get("/trending?limit=10&offset=" + offset)
      return result.data
    } catch (error) {
      console.log(error)
      return []
    }
  }

}
export default new GifApi()
