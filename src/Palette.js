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
      <div className='slider'>
        <Slider 
          defaultValue={level} 
          trackStyle={{backgroundColor: 'grey', height: 8 }}
          handleStyle={{ backgroundColor: 'black', borderColor: 'white', height: 18, width: 18}}
          railStyle={{ backgroundColor: 'grey', height: 8 }}
          min={100} 
          max={900} 
          step={100} 
          onChange={changeLevel}
        />
      </div>
      {/* Navbar goes here */}
      <div className='Palette-colors'>{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  )
}
