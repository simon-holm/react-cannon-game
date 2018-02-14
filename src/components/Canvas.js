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
      <circle cx={0} cy={0} r={50} />
    </svg>
  )
}

export default Canvas
