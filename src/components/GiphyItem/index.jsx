import React from "react"
import "./style.scss"
import { GuestLogo, HeartLogo, ConversationLogo, EyeLogo, } from "../../assets/icons"
import IconWithLabel from "../IconWithLabel"
import { getRandomNumber } from '../../helper'

const GifItem = React.memo(({ gif, id }) => {
  const authorInfo = {
    src: gif.user ? gif.user.avatar_url : GuestLogo,
    label: gif.user ? gif.user.display_name : "Guest",
    alt: gif.user ? gif.user.username : 'guest user'
  }

  return (
    <div className='col-xl-3 col-md-4 col-6 gif-item'>
      <div className='gif-item__image-wrapper'>
        <img
          src={gif.images.downsized_still.url}
          alt={gif.title}
          className='gif-item__image'
          data-id={id}
        />
        <div className='gif-item__image-status'>
          <IconWithLabel src={EyeLogo} alt='eye' label={getRandomNumber(5000, 8000)} />
          <IconWithLabel src={ConversationLogo} alt='conversation' label={getRandomNumber(5000, 8000)} />
          <IconWithLabel src={HeartLogo} alt='heart' label={getRandomNumber(5000, 8000)} />
        </div>
      </div>
      <p className='gif-item__author-name'>
        <IconWithLabel {...authorInfo} />
      </p>
    </div>
  )
})

export default GifItem
