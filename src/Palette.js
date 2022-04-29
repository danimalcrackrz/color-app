import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
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
      <Navbar level={level} changeLevel={changeLevel} />
      <div className='Palette-colors'>{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  )
}
