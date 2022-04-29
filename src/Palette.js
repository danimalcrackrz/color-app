import React from 'react'
import ColorBox from './ColorBox'
import './Palette.css'

export default function Palette({colors}) {

  const colorBoxes = colors.map(color => {
    return <ColorBox key={color.name} name={color.name} background={color.color} />
  })

  return (
    <div className='Palette'>
      {/* Navbar goes here */}
      <div className='Palette-colors'>{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  )
}
