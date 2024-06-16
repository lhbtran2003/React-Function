import React, { useState } from 'react'

export const E1 = () => {
    const [name, getName] = useState('nguyễn văn a')
  return (
    <div>
        <p>{name}</p>
    </div>
  )
}
