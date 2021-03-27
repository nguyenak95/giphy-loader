import React, { useCallback, useState } from "react"
import { createPortal } from "react-dom"
import GifItem from "../GiphyItem"
import GiphyModal from "../GiphyModal"
import "./style.scss"

const GiphyContainer = ({ gifList, handleScrollToEnd }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedGif, setSelectedGif] = useState("")

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedGif("")
  }, [])

  const handleClickGif = (e) => {
    e.stopPropagation()
    const selectedGifId = e.target.dataset.id
    if (!selectedGifId) return

    const selectedGif = gifList.find((gif) => gif.id === selectedGifId)
    setSelectedGif(selectedGif)
    setIsModalOpen(true)
  }

  return (
    <>
      <div
        className="gif-container"
        onClick={handleClickGif}
        onScroll={handleScrollToEnd}
      >
        {gifList.map((gif) => (
          <GifItem key={gif.id} gif={gif} id={gif.id} />
        ))}
      </div>
      {isModalOpen &&
        createPortal(
          <GiphyModal onClose={closeModal} gif={selectedGif} />,
          document.body,
        )}
    </>
  )
}

export default GiphyContainer
