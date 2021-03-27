import React from "react"
import './style.scss'

const IconWithLabel = ({ src, label, alt }) => {
  return (
    <span className='icon__label'>
      <img src={src} alt={alt} className='icon__img' />
      <span>{label}</span>
    </span>
  )
}

export default IconWithLabel
