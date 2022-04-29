import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

const Colorbox = ({background, name}) => {
  return (
    <CopyToClipboard text={background}>
      <div style={{background}} className='ColorBox'>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    </CopyToClipboard>
  )
}

export default Colorbox
