import React from "react"
import './style.scss'

const Loading = () => {
  return (
    <div className='spinner__wrapper'>
      <div className='spinner-border text-primary' role='status'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  )
}

export default Loading
