import React, { useState } from 'react'

export const E3 = () => {
    const [color, changeColor] = useState('pink')
    const handleChangeColor = () => {
        changeColor((preColor) => (preColor === 'pink' ? "green" : "pink"))
    }

  return (
    <div>
    <p style={{color: color}}>Bảo Trân dưỡng thê</p>
    <button onClick={handleChangeColor}></button>
    </div>
  )
}
