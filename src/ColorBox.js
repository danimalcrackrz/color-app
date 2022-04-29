import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './ColorBox.css'

const Colorbox = ({background, name}) => {
  const [copy, setCopy] = useState(false)

  const handleCopy = () => {
    setCopy(true)
    setTimeout(() => {setCopy(false)}, 1200)
  }

  return (
    <CopyToClipboard text={ background } onCopy={handleCopy} >
      <div style={{ background }} className='ColorBox'>
        <div style={{ background }} className={ copy ? 'copy-overlay show' : 'copy-overlay' }/>
        <div className={ copy ? 'copy-message show' : 'copy-message' }>
          <h1>copied</h1>
          <p>{background}</p>
        </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{ name }</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
    </CopyToClipboard>
  )
}

export default Colorbox