import React, { useEffect, useState } from "react"
import { GifApi } from "./api"
import { GiphyContainer, Loading } from "./components"
import { debounce } from "./helper"

const App = () => {
  const [gifList, setGifList] = useState([])
  const [loading, setLoading] = useState(false)

  const debounceGetMoreGif = debounce(() => {
    GifApi.getTrendingsGif(gifList.length).then(resData => {
      setGifList(prevList => [...prevList, ...resData.data])
      setLoading(false)
    })
  }, 700)

  const handleScrollToEnd = e => {
    const { scrollTop, scrollHeight, offsetHeight } = e.target
    if (scrollTop + offsetHeight + 100 > scrollHeight && !loading) {
      setLoading(true)
      debounceGetMoreGif()
    }
  }
  
  useEffect(() => {
    setLoading(true)
    GifApi.getTrendingsGif().then(resData => {
      setGifList(resData.data)
      setLoading(false)
    })
  }, [])

  return (
    <>
    <GiphyContainer gifList={gifList} handleScrollToEnd={handleScrollToEnd} />
    {loading && <Loading />}
    </>
  )
}

export default App
