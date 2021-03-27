import React from "react"
import "./style.scss"

const GiphyModal = ({ gif, onClose }) => {
  return (
    <>
      <div className='modal__container'>
        <img src={gif.images.original.url} alt={gif.title} />
        <span className='modal__close-btn' onClick={onClose}>X</span>
      </div>
      <div className='modal__overlay' onClick={onClose} />
    </>
  )
}

export default GiphyModal
