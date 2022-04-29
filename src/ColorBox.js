import React from 'react'
import './ColorBox.css'

const Colorbox = ({background, name}) => {
  return (
    <div style={{background: background}} className='ColorBox'>
      <span>{name}</span>
      <span>More</span>
    </div>
  )
}

export default Colorbox
