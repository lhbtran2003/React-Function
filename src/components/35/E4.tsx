import React, { useState } from 'react'

export const E4 = () => {
    const [isHide, setIsHide] = useState(true)
    const toggleElement = () => {
         setIsHide(!isHide)
    }
  return (
    <div>
      {!isHide && <p>hehehehe</p>}

      <button onClick={toggleElement}>{isHide ? "hien" : "an"}</button>
    </div>
  );
}
