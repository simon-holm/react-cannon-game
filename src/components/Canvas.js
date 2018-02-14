import React from 'react'

const Canvas = ({ children }) => {
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ]

  return (
    <svg
      id="cannon-game-canvas"
      preserveAspectRatio="xMaxYMax none"
      viewBox={viewBox}
    >
      {children}
    </svg>
  )
}

export default Canvas
