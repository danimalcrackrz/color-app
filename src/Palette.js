import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import './Palette.css'

export default function Palette({palette}) {

  const [level, setLevel] = useState(500)

  const colorBoxes = palette.colors[level].map(color => {
    return <ColorBox key={color.name} name={color.name} background={color.hex} />
  })

  const changeLevel = (level) => {
    setLevel(level)
  }

  return (
    <div className='Palette'>
      <Slider 
        defaultValue={level} 
        min={100} 
        max={900} 
        step={100} 
        onChange={changeLevel}
      />
      {/* Navbar goes here */}
      <div className='Palette-colors'>{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  )
}
